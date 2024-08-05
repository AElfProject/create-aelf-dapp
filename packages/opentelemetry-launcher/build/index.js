"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWebTracerWithZone = initWebTracerWithZone;
exports.aggregateExecutionTime = aggregateExecutionTime;
const sdk_trace_base_1 = require("@opentelemetry/sdk-trace-base");
const sdk_trace_web_1 = require("@opentelemetry/sdk-trace-web");
const instrumentation_xml_http_request_1 = require("@opentelemetry/instrumentation-xml-http-request");
const context_zone_1 = require("@opentelemetry/context-zone");
const exporter_trace_otlp_http_1 = require("@opentelemetry/exporter-trace-otlp-http");
const core_1 = require("@opentelemetry/core");
const instrumentation_1 = require("@opentelemetry/instrumentation");
const resources_1 = require("@opentelemetry/resources");
const semantic_conventions_1 = require("@opentelemetry/semantic-conventions");
const instrumentation_fetch_1 = require("@opentelemetry/instrumentation-fetch");
let WEB_TRACER_WITH_ZONE;
function initWebTracerWithZone(openTelemetryConfig) {
    console.log('init WebTracer With Zone', openTelemetryConfig);
    if (WEB_TRACER_WITH_ZONE) {
        return WEB_TRACER_WITH_ZONE;
    }
    const providerWithZone = new sdk_trace_web_1.WebTracerProvider({
        resource: new resources_1.Resource({
            [semantic_conventions_1.SEMRESATTRS_SERVICE_NAME]: openTelemetryConfig.serviceName
        })
    });
    // Note: For production consider using the "BatchSpanProcessor" to reduce the number of requests
    // to your exporter. Using the SimpleSpanProcessor here as it sends the spans immediately to the
    // exporter without delay
    //   providerWithZone.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
    providerWithZone.addSpanProcessor(new sdk_trace_base_1.SimpleSpanProcessor(new exporter_trace_otlp_http_1.OTLPTraceExporter({
        // url: 'http://localhost:4318/v1/traces',
        url: openTelemetryConfig.collectorEndpoint
    })));
    providerWithZone.register({
        contextManager: new context_zone_1.ZoneContextManager(),
        propagator: new core_1.W3CTraceContextPropagator(),
    });
    (0, instrumentation_1.registerInstrumentations)({
        instrumentations: [
            new instrumentation_xml_http_request_1.XMLHttpRequestInstrumentation({
                ignoreUrls: openTelemetryConfig.ignoreUrls,
                propagateTraceHeaderCorsUrls: openTelemetryConfig.propagateTraceHeaderCorsUrls
            }),
            new instrumentation_fetch_1.FetchInstrumentation({
                ignoreUrls: openTelemetryConfig.ignoreUrls,
                propagateTraceHeaderCorsUrls: openTelemetryConfig.propagateTraceHeaderCorsUrls ///.*/, // 设置跨域请求时需要传播 trace 头部的 URL
            }),
        ],
    });
    const webTracerWithZone = providerWithZone.getTracer(openTelemetryConfig.tracerName);
    // window.webTracerWithZone = webTracerWithZone;
    WEB_TRACER_WITH_ZONE = webTracerWithZone;
    return webTracerWithZone;
}
function aggregateExecutionTime(target, propertyKey, descriptor) {
    // if (!WEB_TRACER_WITH_ZONE) {
    //   throw Error('Please init openTelemetry first.');
    // }
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const span = WEB_TRACER_WITH_ZONE.startSpan(`Executing ${propertyKey}`);
        const startTime = Date.now();
        const finishSpan = (result) => {
            const endTime = Date.now();
            const duration = endTime - startTime;
            span.setAttribute('execution.duration', duration);
            span.end();
            return result;
        };
        try {
            const result = originalMethod.apply(this, args);
            if (result instanceof Promise) {
                return result.then((res) => finishSpan(res)).catch((err) => {
                    span.recordException(err);
                    span.end();
                    throw err;
                });
            }
            else {
                return finishSpan(result);
            }
        }
        catch (error) {
            span.recordException(error);
            span.end();
            throw error;
        }
    };
    return descriptor;
}
//# sourceMappingURL=index.js.map
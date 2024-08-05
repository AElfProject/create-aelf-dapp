import { Tracer } from '@opentelemetry/sdk-trace-base';
export declare function initWebTracerWithZone(openTelemetryConfig: {
    serviceName: any;
    collectorEndpoint: any;
    ignoreUrls: any;
    propagateTraceHeaderCorsUrls: any;
    tracerName: any;
}): Tracer;
export declare function aggregateExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
//# sourceMappingURL=index.d.ts.map
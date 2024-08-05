"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChaingptService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const process = require("process");
const generalchat_1 = require("@chaingpt/generalchat");
let ChaingptService = class ChaingptService {
    constructor() {
        this.chatClient = new generalchat_1.GeneralChat({
            apiKey: process.env.CHAIN_GPT_API_KEY,
        });
    }
    chat(createChaingptDto) {
        return new rxjs_1.Observable((observer) => {
            const main = async () => {
                const stream = await this.chatClient.createChatStream({
                    question: createChaingptDto.data,
                    chatHistory: 'off',
                });
                stream.on('data', (chunk) => {
                    console.log('data', chunk.toString());
                    observer.next({ data: chunk.toString() });
                });
                stream.on('end', () => {
                    observer.complete();
                });
            };
            main().catch((error) => {
                console.log('error', error);
                observer.next({ data: 'Please try again' });
                observer.complete();
            });
        });
    }
    findAll() {
        return `This action returns all chaingpt`;
    }
};
exports.ChaingptService = ChaingptService;
exports.ChaingptService = ChaingptService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ChaingptService);
//# sourceMappingURL=chaingpt.service.js.map
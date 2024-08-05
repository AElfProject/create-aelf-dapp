import { ChaingptService } from './chaingpt.service';
import { CreateChaingptDto } from './dto/create-chaingpt.dto';
import { Observable } from 'rxjs';
export declare class ChaingptController {
    private readonly chaingptService;
    constructor(chaingptService: ChaingptService);
    chatCus(createChaingptDto: CreateChaingptDto): Observable<{
        data: string;
    }>;
    findAll(): string;
}

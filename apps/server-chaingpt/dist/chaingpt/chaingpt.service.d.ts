import { CreateChaingptDto } from './dto/create-chaingpt.dto';
import { Observable } from 'rxjs';
export declare class ChaingptService {
    private chatClient;
    constructor();
    chat(createChaingptDto: CreateChaingptDto): Observable<{
        data: string;
    }>;
    findAll(): string;
}

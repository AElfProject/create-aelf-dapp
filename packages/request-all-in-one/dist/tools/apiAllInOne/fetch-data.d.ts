import { IApolloRequestOptions, IApolloClientOptions } from './apollo-client';
import { ApolloClient } from '@apollo/client';
import { Socket } from 'socket.io-client';
import { ISocketRequestOptions } from './socket-io';

export interface IBaseRequestOptions {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
}
export interface IRequestOptions extends ISocketRequestOptions, IApolloRequestOptions {
}
export declare const defaultHeaders: {
    'Content-Type': string;
};
export declare class RequestAllInOne {
    private readonly headers;
    apolloClient: ApolloClient<any> | undefined;
    socketClient: Socket | undefined;
    private options;
    constructor(options: Partial<IRequestOptions>);
    initSocketIo(options: ISocketRequestOptions): void;
    initApollo(apolloConfig: IApolloClientOptions): void;
    get(url: string): Promise<any>;
    post(url: string, options?: IBaseRequestOptions): Promise<any>;
    gql(url: string, options?: IApolloRequestOptions): Promise<any>;
    socket(url: string, options: ISocketRequestOptions): void;
}

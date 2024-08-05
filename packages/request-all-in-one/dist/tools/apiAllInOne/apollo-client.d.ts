import { ApolloClient } from '@apollo/client';
import { IBaseRequestOptions } from './fetch-data';

export interface IApolloRequestOptions extends IBaseRequestOptions {
    apolloConfig?: any;
    query?: any;
}
export interface IApolloClientOptions {
    uri: any;
    cache: any;
}
export declare const createApolloClient: (options: IApolloClientOptions) => ApolloClient<unknown>;
export declare const queryCountries: import('@apollo/client').DocumentNode;

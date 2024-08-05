import { IApolloRequestOptions } from 'request-all-in-one/dist/tools/apiAllInOne/apollo-client';

export declare const graphql: (url: string, query: string) => Promise<any>;
export declare const useGraphql: (url: string, options?: IApolloRequestOptions) => import('@tanstack/react-query').UseQueryResult<any, Error>;

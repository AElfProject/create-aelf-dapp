import { useFetch } from './fetch';
import { useSocket } from './socket-io';
import { useGraphql } from './graphql';

export { useGraphql, useSocket, useFetch };
declare const _default: {
    useGraphql: (url: string, options?: import('request-all-in-one/dist/tools/apiAllInOne/apollo-client').IApolloRequestOptions) => import('@tanstack/react-query').UseQueryResult<any, Error>;
    useSocket: (url: string, eventName: string) => null;
    useFetch: (url: string, options?: import('request-all-in-one/dist/tools/apiAllInOne/fetch-data').IBaseRequestOptions) => import('@tanstack/react-query').UseQueryResult<any, Error>;
};
export default _default;

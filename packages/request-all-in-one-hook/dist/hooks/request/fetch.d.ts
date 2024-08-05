import { IBaseRequestOptions } from 'request-all-in-one/dist/tools/apiAllInOne/fetch-data';

export declare const fetchDataGet: (url: string) => Promise<any>;
export declare const fetchDataPost: (url: string, options: IBaseRequestOptions) => Promise<any>;
export declare const useFetch: (url: string, options?: IBaseRequestOptions) => import('@tanstack/react-query').UseQueryResult<any, Error>;

import { IBaseRequestOptions } from 'request-all-in-one/dist/tools/apiAllInOne/fetch-data';

export interface ISocketRequestOptions extends IBaseRequestOptions {
    type: 'on' | 'emit';
    event: string;
    value?: string;
    callback?: Function;
    queryKey: string[];
    socketPath?: string;
}
export declare const useSocket: (url: string, eventName: string) => null;
export declare const useSocketWithCache: (url: string, options: ISocketRequestOptions) => any;

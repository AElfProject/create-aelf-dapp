import { IBaseRequestOptions } from './fetch-data';

export interface ISocketRequestOptions extends IBaseRequestOptions {
    type: 'on' | 'emit';
    event: string;
    value?: string;
    callback?: Function;
    queryKey: string[];
    socketPath?: string;
}
export declare const useWebSocket: (url: string, options: ISocketRequestOptions) => void;

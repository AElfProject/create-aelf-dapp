import { ChainGPTLogo } from './components/ChainGPTLogo/ChainGPTLogo.tsx';
import { TipBox } from './components/TipBox/TipBox.tsx';
import { CustomChatBox } from './components/CustomChatBox/CustomChatBox.tsx';

declare const _default: {
    TipBox: typeof TipBox;
    ChainGPTLogo: typeof ChainGPTLogo;
    CustomChatBox: typeof CustomChatBox;
    ChatBoxButton: typeof ChatBoxButton;
};
export default _default;
export declare function ChatBoxButton({ apiUri, historyLimit }: {
    apiUri: string;
    historyLimit?: number;
}): import("react/jsx-runtime").JSX.Element;

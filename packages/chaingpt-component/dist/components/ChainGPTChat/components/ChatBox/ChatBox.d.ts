import { default as React } from 'react';

interface IChatItem {
    text: string | React.FC;
    type: 'question' | 'answer';
}
export default function ChatBox({ defaultList, Welcome, apiUri, historyLimit }: {
    defaultList?: IChatItem[];
    Welcome?: React.FC;
    apiUri: string;
    historyLimit?: number;
}): import("react/jsx-runtime").JSX.Element;
export {};

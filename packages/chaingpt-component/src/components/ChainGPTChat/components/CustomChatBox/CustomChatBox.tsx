import ChainGPTClose from '../../assets/close.svg';
import ChatBox, {IOptions} from '../ChatBox/ChatBox.tsx';
import {Welcome} from '../Welcome/Welcome.tsx';
import ChainGPTIconSmall from '../../assets/icon-small.svg';
import styles from './styles.module.css';

export function CustomChatBox({
  onClose,
                                apiUri,
  historyLimit = 200,
                                options
                              }: {
  onClose: () => void;
  apiUri: string;
  historyLimit?: number;
  options?: IOptions;
}) {
  return <div className={styles.con}>
    <div className={styles.headerCon}>
      <div>aelf AI Chatbot</div>
      <img
        onClick={onClose}
        src={ChainGPTClose}
        alt="chainGPT logo"
        className={styles.close}/>
    </div>
    <div className={styles.chatBoxCon}>
      <ChatBox
        Welcome={Welcome}
        apiUri={apiUri}
        historyLimit={historyLimit}
        options={options}
      />
    </div>
    <div className={styles.imageCon}>
      Powered by
      <img
        src={ChainGPTIconSmall}
        alt="chainGPT logo small"
        className={styles.image} />
    </div>
  </div>
}

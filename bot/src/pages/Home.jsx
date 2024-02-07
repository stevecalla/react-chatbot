import config from '../chatbot/config.jsx';
import MessageParser from '../chatbot/MessageParser.jsx';
import ActionProvider from '../chatbot/ActionProvider.jsx';

const Chatbot = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default Chatbot;
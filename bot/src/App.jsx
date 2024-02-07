import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// fix chatbot
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './chatbot/config.jsx';
import MessageParser from './chatbot/MessageParser.jsx';
import ActionProvider from './chatbot/ActionProvider.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
  )
}

export default App

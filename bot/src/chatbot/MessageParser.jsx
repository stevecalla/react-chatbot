// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {

  console.log(children, actions);

  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }
    
    if (message.includes('dog')) {
      actions.handleDog();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
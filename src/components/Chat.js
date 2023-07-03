import React, { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Button,MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
const systemMessage = { 
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

function Chat () {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }
  console.log("Messages:", messages);

  const handleClose = () => {
    setIsChatOpen(false);
  };
  if (!isChatOpen) {
    return null;
  }
  return (
      <div className='chat-container' >
      <div style={{ position:"fixed", height: "800px", width: "700px",  }}>
        <MainContainer>
          <ChatContainer> 
        <Button className="close-button" style={{ marginBottom: '23.5vw', display: 'flex', justifyContent: 'flex-end', position: 'relative', fontSize:'27px' }} onClick={handleClose}>X</Button>
          
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing"  /> : null}
              style={{zIndex:'9', }}
            >
 {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} style={{fontSize:'27px'}} />
          </ChatContainer>
        </MainContainer>
      </div>
      </div>
  )
}

export default Chat

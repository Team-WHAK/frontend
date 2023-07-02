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
      message: {
        payload: {
          text: "Hello, I'm ChatGPT! Ask me anything!"
        }
      },
      source: "incoming"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message: {
        payload: {
          text: message
        }
      },
      source: "outgoing"
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    console.log("Sent Message:", message);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.source === "incoming") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message.payload.text }
    });
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages 
      ]
    }
    console.log("API Request Body:", apiRequestBody);
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
      console.log("API Response Data:", data); 
      setMessages([...chatMessages, {
        message: {
          payload: {
            text: data.choices[0].message.content
          }
        },
        source: "incoming"
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
      <div className='chat-container'>
        <MainContainer style={{ padding: '1vw' }}>
        <Button className="close-button" style={{ marginBottom: '23.5vw', display: 'flex', justifyContent: 'flex-end', position: 'relative', fontSize:'27px' }} onClick={handleClose}>X</Button>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing"  style={{fontSize:'27px'}}/> : null}
              style={{zIndex:'9', fontSize:'27px'}}
            >
              {messages.map((message, i) => {
                return (
                  <Message 
                    key={i} 
                    model={{ message: message.message.payload.text, sender: message.source, sentTime: "just now" }}
                   className='chat-message'
                  />
                )
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} style={{fontSize:'27px'}} />
          </ChatContainer>
        </MainContainer>
      </div>
  )
}

export default Chat

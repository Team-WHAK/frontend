import { useState } from 'react'
import '../styles/Chat.css'
import { Button, MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const MY_API = process.env.REACT_APP_API_KEY
const systemMessage = { 
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

function Chat() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true);


  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };
  const handleClose = () => {
    setIsChatOpen(false);
  };
  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });

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
          "Authorization": "Bearer " + MY_API,
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
  if (!isChatOpen) {
    return null;
  }

  return (
    <div className="chatbot" style={{ marginLeft: '1300px', marginTop: '-675px' }}>
      <div style={{ position: "relative", height: "500px", width: "600px", }}>
        <MainContainer style={{borderRadius: '15px',}}>
          <Button className="close-button" style={{ marginTop: '0.7vw', marginLeft: '1vw', display: 'flex', justifyContent: 'flex-end', position: 'relative' }} onClick={handleClose}>X</Button>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Chat
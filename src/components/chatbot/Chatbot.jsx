import React, { useState } from 'react';

const Chatbot = () => {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
        setMessages([...messages, { text: newMessage, sender: 'user' }]);
        // For a real chatbot, you would send the user's message to a server for processing
        // and get the bot's response back.
        // For simplicity, we're just adding the user's message to the state here.
        setNewMessage('');
        }
    };

    return (
        <div className="bg-white me-2 mb-2" style={{position: "fixed", zIndex: 100,  right: 0, bottom: 0}}>
            <div className="container-fluid">
              <div className="chat-container">
                <div className="chat-box">
                  {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                      {message.text}
                    </div>
                  ))}
                </div>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={handleInputChange}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleSendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
        </div>
      );
    };

export default Chatbot;
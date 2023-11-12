import React, { useState, useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

const Chatbot = () => {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const containerRef = useRef(null);

    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    function scrollToBottom() {
      if (containerRef.current) {
        const container = containerRef.current;
        container.scrollTop = container.scrollHeight;
      }
    }

    function handleInputChange(event) {
        setNewMessage(event.target.value);
    }

    function handleSubmit(event) {
      event.preventDefault();
      handleSendMessage();
    }

    function handleSendMessage() {
        if (newMessage.trim() !== '') {
        setMessages([...messages, { text: newMessage, sender: 'user', loading: false }, { text: 'response', sender: 'bot', loading: true }]);
        // For a real chatbot, you would send the user's message to a server for processing
        // and get the bot's response back.
        // For simplicity, we're just adding the user's message to the state here.
        setNewMessage('');
        }
    }

    return (
        <div className="bg-white me-2 mb-2" style={{position: "fixed", zIndex: 100,  right: 0, bottom: 0}}>
            <div className="container-fluid">
              <div className="chat-container">
                <div ref={containerRef} className="chat-box">
                  {messages.map((message, index) => (
                    !message.loading ?
                      <div key={index} className={`message ${message.sender} w-75 rounded m${message.sender == 'bot' ? 'e' : 's'}-auto`}>
                        {message.text}
                      </div> :
                      <div key={index} className={`message ${message.sender} w-75 rounded m${message.sender == 'bot' ? 'e' : 's'}-auto`}>
                        <div className="d-flex flex-row">
                          <div className="message-bubble animation-delay-1 bg-secondary"></div>
                          <div className="message-bubble animation-delay-2 bg-secondary"></div>
                          <div className="message-bubble animation-delay-3 bg-secondary"></div>
                        </div>
                      </div>
                  ))}
                </div>

                <Form className="input-group mt-3" onSubmit={(e) => handleSubmit(e)}>
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={handleInputChange}
                  />
                  <Button type="submit" variant="primary">Send</Button>
                </Form>

              </div>
            </div>
        </div>
      );
    };

export default Chatbot;
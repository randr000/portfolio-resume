import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import BIChatLeftDots from '../bootstrap-icons/BIChatLeftDots';
import BIRobot from '../bootstrap-icons/BIRobot';
import parse from 'html-react-parser';
import { API_ENDPOINTS } from '../../constants';

const {LOCAL, PRODUCTION} = API_ENDPOINTS;

const Chatbot = () => {

    const [messages, setMessages] = useState([{text: [
      'Welcome to Raul AI!',
      'You can ask me a question by typing in the box next to the send button below.'
    ], sender: 'bot', loading: false}]);

    const [showChat, setShowChat] = useState(true);
    const [newMessage, setNewMessage] = useState('');
    const containerRef = useRef(null);

    const chatbotContainerStyles = {position: "fixed", zIndex: 100,  right: 0, bottom: 0};
    const toggleChatCursorStyle = {cursor: "pointer"};

    useEffect(() => {
      const lastIndex = messages.length - 1
      if (messages[lastIndex].loading) {
        fetch(process.env.REACT_APP_CHATBOT_ENDPOINT == PRODUCTION.name ? PRODUCTION.endpoint : LOCAL.endpoint, {
          method: 'POST',
          body: JSON.stringify({message: newMessage}),
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(r => r.json())
        .then(r => {
          setMessages(state => [...state.slice(0, -1), {text: r.answer, sender: 'bot', loading: false}]);
          setNewMessage('');
        });
      }
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

    function handleToggleChat() {
      setShowChat(state => !state);
    }

    function handleSendMessage() {
        if (newMessage.trim() !== '') {
        setMessages([...messages, { text: [newMessage], sender: 'user', loading: false }, { text: ['Raul AI is typing...'], sender: 'bot', loading: true }]);
        }
    }

    return (
        <>
          {
            showChat ?
            <div className="me-1 mb-1 me-lg-3 mb-lg-2 col-xs-12 col-sm-12 col-lg-6" style={chatbotContainerStyles}>
              <Card className="bg-white">
                  <Card.Header className="bg-primary text-white">
                    <div className="d-flex justify-content-between">
                      <p className="h3 google-font-600 my-auto">Raul AI</p>
                      <p className="h3 google-font-1000 pb-3" style={toggleChatCursorStyle} onClick={handleToggleChat}>_</p>
                    </div>
                  </Card.Header>
                  <Card.Body>
                        <div ref={containerRef} className="chat-box rounded">
                          {messages.map((message, index) => (
                            !message.loading ?
                              <div key={index}>
                                {message.text.map((sentence, index) => (
                                  <div key={index} className={`message ${message.sender} w-75 rounded m${message.sender == 'bot' ? 'e' : 's'}-auto`}>
                                    {parse(sentence)}
                                  </div>
                                ))}
                              </div> :
                              <div key={index} className={`message ${message.sender} w-75 rounded m${message.sender == 'bot' ? 'e' : 's'}-auto`}>
                                <div className="d-flex align-items-center">
                                  <div className="message-bubble animation-delay-1 bg-secondary"></div>
                                  <div className="message-bubble animation-delay-2 bg-secondary"></div>
                                  <div className="message-bubble animation-delay-3 bg-secondary"></div>
                                </div>
                                <p className="">{message.text[0]}</p>
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
                  </Card.Body>
              </Card>
            </div> :
            <div className="d-flex text-primary justify-content-end me-2 mb-2" style={chatbotContainerStyles}>
              <div className="mt-3" onClick={handleToggleChat} style={toggleChatCursorStyle}>
                <BIRobot/>
              </div>
              <div onClick={handleToggleChat} style={toggleChatCursorStyle}>
                <BIChatLeftDots style={{width: "100px", height: "100px"}}/>
              </div>
            </div>
          }
        </>
      );
    };

export default Chatbot;
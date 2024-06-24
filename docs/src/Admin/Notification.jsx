import React, { useState, useEffect } from "react";
import axios from "axios";
import NotificationCard from "./NotificationCard";
import { useNavigate } from "react-router-dom";

const NotificationsPage = () => {
  const [messages, setMessages] = useState([]);
  const [unseenMessages, setUnseenMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleBackToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    // Fetch messages from the database
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get("/message/get");
        setMessages(data.messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []); // Fetch messages only once on component mount

  useEffect(() => {
    // Update unseen messages whenever messages change
    setUnseenMessages(messages?.filter((message) => !message.read));
  }, [messages]);

  return (
    <div className='bg-black text-white p-6 md:p-12 min-h-screen'>
      <div className='max-w-3xl mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold'>
            Messages ({unseenMessages?.length && unseenMessages?.length})
          </h1>
          <button
            onClick={handleBackToHome}
            className='px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white font-semibold transition duration-300 ease-in-out focus:outline-none'
          >
            Back to Portfolio
          </button>
        </div>
        {isLoading ? (
          <div className='flex w-screen h-screen '>Loading ...</div>
        ) : messages ? (
          <div className='grid gap-6'>
            {messages?.map((message, index) => (
              <NotificationCard
                key={index}
                id={message.id}
                message={message}
                setMessages={setMessages}
              />
            ))}
          </div>
        ) : (
          <div className='flex w-screen h-screen '>No Messages till now...</div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;

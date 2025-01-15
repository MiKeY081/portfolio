import  { useState } from "react";
import axios from "axios";

const NotificationCard = ({ id, message, setMessages }) => {
  const [isRead, setIsRead] = useState(message.read);

  const handleRead = async () => {
    try {
      await axios.put("/message/read", { id });
      setIsRead(!isRead);
      setMessages((messages) =>
        messages.map((msg) => (msg.id === id ? { ...msg, read: !isRead } : msg))
      );
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };

  const createdAt = new Date(message.createdAt).toLocaleString();

  return (
    <div
      className={`bg-black text-white p-6 rounded-lg ${
        !isRead ? "bg-green-500" : "bg-gray-800"
      }`}
    >
      <div className='flex justify-between items-center mb-2'>
        <h3 className='font-semibold text-lg'>{message.name}</h3>
      </div>
      <p className='text-sm text-gray-300 mb-4'>{message.email}</p>
      <p className='text-base'>{message.message}</p>
      <p className='text-sm text-gray-300 mt-4'>{createdAt ? createdAt : ""}</p>
      <div className='flex justify-end mt-4'>
        <button
          onClick={handleRead}
          className={`text-sm px-4 py-2 rounded-md ${
            isRead
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-green-700 hover:bg-green-600"
          } text-white`}
        >
          {isRead ? "Mark as Unread" : "Mark as Read"}
        </button>
      </div>
    </div>
  );
};

export default NotificationCard;

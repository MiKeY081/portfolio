import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import { FaTerminal } from "react-icons/fa";

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const newHistory = [
        ...history,
        { command: command, output: processCommand(command) },
      ];
      if (command.toLowerCase() === "clear") {
        setHistory([]);
        setCommand("");
        return;
      }
      setHistory(newHistory);
      setCommand("");
    }
  };

  const processCommand = (command) => {
    switch (command.toLowerCase()) {
      case "about":
        navigate("/about");
        return "Navigating to About page...";
      case "home":
        navigate("/");
        return "Navigating to Home page...";
      case "main":
        navigate("/main");
        return "Navigating to Main page...";
      case "contact":
        navigate("/contact");
        return "Navigating to Contact page...";
      case "projects":
        navigate("/projects");
        return "Navigating to Projects page...";
      case "help":
        return "Available commands: about, home, main, contact, projects, help, clear, exit";
      case "exit":
        navigate("/");
        setOpen(false);
        return "Navigating to Portfolio";
      case "clear":
        return "Clearing terminal...";
      default:
        return `command not found: ${command}`;
    }
  };

  return (
    <div>
      <FaTerminal onClick={handleOpen} className='cursor-pointer text-2xl' />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <div
          className='bg-gray-900 text-green-500 h-[500px]  md:w-[700px] w-[300px] flex flex-col p-5 rounded-lg shadow-lg'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='mb-2 text-lg'>Welcome to My Portfolio Terminal</div>
          <div className='flex-1 overflow-y-auto w-full'>
            {history.map((entry, index) => (
              <div key={index}>
                <div className='text-base'>$ {entry.command}</div>
                <div className='text-sm'>{entry.output}</div>
              </div>
            ))}
            <div className='flex items-center mt-2'>
              <span className='text-base'>$ </span>
              <input
                type='text'
                className='bg-transparent border-none outline-none text-base flex-1 ml-2'
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleCommand}
              />
            </div>
          </div>
        </div>
      </Backdrop>
    </div>
  );
}

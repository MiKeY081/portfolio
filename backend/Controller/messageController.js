import prisma from "../config/prismaconfig.js";

// get, create and delete message controller
const getMessage = async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.send({
      success: true,
      message: "message Loaded",
      messages,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const createMessage = async (req, res) => {
  const { name, email, message: text } = req.body;
  try {
    const createdMessage = await prisma.message.create({
      data: {
        name,
        email,
        message: text,
      },
    });
    res.send({
      success: true,
      message: "Message Submitted",
      createdMessage,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const readMessage = async (req, res) => {
  const { id } = req.body;
  try {
    const existingMessage = await prisma.message.findUnique({
      where: { id },
    });

    if (!existingMessage) {
      return res.status(404).send({
        success: false,
        message: "Message not found",
      });
    }

    const updatedMessage = await prisma.message.update({
      where: { id },
      data: { read: !existingMessage.read }, // Toggle read value
    });

    res.send({
      success: true,
      message: `Message ${updatedMessage.read ? "seen" : "marked as unread"}`,
      updatedMessage,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMessage = await prisma.message.delete({ where: { id } });
    res.send({
      success: true,
      message: "message Deleted Successfully!!!",
      deletedMessage,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

export { getMessage, createMessage, deleteMessage, readMessage };

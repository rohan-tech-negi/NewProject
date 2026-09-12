import React from 'react'
import { PROBLEMS } from "../data/problems";

const CreateSessionModal = ({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) => {
     const problems = Object.values(PROBLEMS);

  if (!isOpen) return null; 
  return (
    <div>CreateSessionModal</div>
  )
}

export default CreateSessionModal
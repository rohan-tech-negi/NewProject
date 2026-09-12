import React from 'react'
import { useUser } from '@clerk/react';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const SessionsPage = () => {
   const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  return (
    <div>SessionsPage</div>
  )
}

export default SessionsPage
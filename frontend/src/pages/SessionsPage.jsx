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

   const { data: sessionData, isLoading: loadingSession, refetch } = useSessionById(id);

  const joinSessionMutation = useJoinSession();
  const endSessionMutation = useEndSession();

  const session = sessionData?.session;
  const isHost = session?.host?.clerkId === user?.id;
  const isParticipant = session?.participant?.clerkId === user?.id;
  

  
  return (
    <div>SessionsPage</div>
  )
}

export default SessionsPage
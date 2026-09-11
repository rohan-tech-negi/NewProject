import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";

import { useActiveSessions, useCreateSession, useMyRecentSessions } from "../hooks/useSessions";


const DashboardPage = () => {

  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });

  const createSessionMutation = useCreateSession();
  const { data: activeSessionsData, isLoading: loadingActiveSessions } = useActiveSessions();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } = useMyRecentSessions();

  



  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage
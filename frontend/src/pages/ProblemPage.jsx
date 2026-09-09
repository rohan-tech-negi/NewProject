import React from 'react'
import { useNavigate, useParams } from "react-router";
const ProblemPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

   const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  return (
    <div>ProblemPage</div>
  )
}

export default ProblemPage
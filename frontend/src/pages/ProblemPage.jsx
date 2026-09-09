import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from '../data/problems';
const ProblemPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

   const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCode.javascript);

   const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
    }
  }, [id, selectedLanguage]);
  const currentProblem = PROBLEMS[currentProblemId];

  const handleLanguageChange = (e) =>{}

  const handleProblemChange = (e) =>{}

  const triggerConfetti = () => {}

  const checkIfTestsPassed = () =>{}

  const handleRunCode = () =>{}

  
  return (
    <div>ProblemPage</div>
  )
}

export default ProblemPage
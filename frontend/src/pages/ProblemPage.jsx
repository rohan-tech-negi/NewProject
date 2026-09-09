import React from 'react'
import { useNavigate, useParams } from "react-router";
const ProblemPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>ProblemPage</div>
  )
}

export default ProblemPage
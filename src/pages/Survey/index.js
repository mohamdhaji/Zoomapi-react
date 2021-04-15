import React, { useState } from "react";
import "./survey.css";
import SurveyModel from "../../components/models/survey";

export default function Survey(props) {
  const [showSurvey, setShowSurvey] = useState(true);
  return (
    <div>
      {showSurvey && <SurveyModel setShowSurvey={()=>setShowSurvey(false)} />}
    </div>
  );
}

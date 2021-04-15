import React from "react";
import "./survey.css"
export default function SurveyModel(props) {
  return (
    <div className="survey-model">
      <h3>Survey</h3>
      <div className="survey-description">
        
      </div>
      <button onClick={props.setShowSurvey} className="cancel-btn">Cancel</button>

    </div>
  );
}

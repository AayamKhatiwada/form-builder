import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useCallback, useState } from 'react';
import { useParams } from "react-router-dom"
import { URL } from './url';

StylesManager.applyTheme("defaultV2");

function Display({ result }) {

  const { slug } = useParams();

  var surveyJson = null
  var questionId = null

  result?.forEach(form => {
    if (form.id === parseInt(slug)) {
      surveyJson = form.json
      questionId = form.id
    }
  });

  const survey = new Model(surveyJson);

  const alertResults = useCallback((sender) => {
    const results = sender.data;
    console.log(results);
    results.question_id = questionId;

    console.log(results)

    const submitAnswer = async () => {
      let result = await fetch(`${URL}/api/submitAnswer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(results)
      });
      let response = await result.json();
      console.log(response)
    }

    submitAnswer()
  }, [questionId]);

  survey.onComplete.add(alertResults);
  return (
    <Survey model={survey} />
  );
}

export default Display;

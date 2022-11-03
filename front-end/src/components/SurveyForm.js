import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";

const SurveyForm = () => {
    const creatorOptions = {
        showLogicTab: true,
        isAutoSave: true
      };
    
    const creator = new SurveyCreator(creatorOptions);
    return (
        <SurveyCreatorComponent creator={creator} />
      )
}

export default SurveyForm
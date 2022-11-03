import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

StylesManager.applyTheme("defaultV2");

function PreviewForm({ title, description, logo, setCreateForm }) {
    const formElements = useSelector(state => state.formElements)
    const [surveyJson, setSurveyJson] = useState({})

    if (title === '') {
        title = 'No Title'
    }

    if (description === '') {
        description = 'No Description'
    }

    if (logo === '') {
        logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEXDw8MAAABwcHDHx8eKioqkpKS8vLzGxsatra3KysqQkJCenp6AgIB3d3dra2u3t7dZWVlMTEyysrIsLCxTU1NDQ0OUlJQhISEyMjJlZWUMDAw9PT2Dg4N0dHQYGBhGRkaaAXj3AAACVklEQVR4nO3a63KiQBBAYbATxxYQbxtNdjd5/7dMIFwEGbaA1Fo05/tpNFVzZJgBCQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICFEdFJROTRQ5jKxbvVRLF79CCmkW043XbeEeTpBxo8zXs2ZA2i9RSRiQbPUw5l90wDUw2cqIyIYamBHpP9Lho+GEMNNM7P8IfB/8BOg2qbcNaB/8BQg2qt3ww8J5hpkA2kkAwcj50GUdVgN3AymGkQpPW+1zMXfFeHdhror7LBuvt9GsXHzpHaaVAdCC/dw9FddnnYNU0MNXDp4WuUp6j7bCAv3jXDUIPAabo5eia9K46SS9ffDDX44nxbA7kWM2V/f5gYa+CTnwyKVeMuwjIaSL15CMNj+72LaODWt7fNTotsUG8dcq+t2bCEBpq0bqC2dhA2G4ho/cLN1VT3TtJkA00u57R8xQVvdw2ujdlgsYGusnGWEfRwl6B1aWmwQbEQ/v4elf7pSBCGt7cdDTYoF8K/2XftNp0JGqcEew3qhTD7rt27p8FHPRvMNbhZCN/Wge49CcIwqSJYa9BYCD+07yfpxmcsNQgax/6qJ0H4Xn7EWAM99426pfwhwlYDz0LoU1xGm2rgXQh9vu+smWoQXAY2uJhr0LMQ+uR31gw1GPVs1lZMNUj/PeIOqaUGchrV4Cp2GujrqATZZbSVBr274n5bNdJANuOJjQY8ozl6GtRm3sD9yDPb824QuHjqo/ureOYJ8p8TZKJHDwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/+wQBph2Iu8J1cQAAAABJRU5ErkJggg=='
    }

    useEffect(() => {
        setSurveyJson({
            title,
            logo,
            "logoPosition": "right",
            "logoWidth": "200px",
            "logoHeight": "100px",
            "logoFit": "contain",
            description,
            elements: formElements,
            "completeText": "Submit",
        })
        setCreateForm(false)
    }, [title, description, formElements, setCreateForm, logo])

    const survey = new Model(surveyJson);

    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        console.log(results);
    }, []);

    survey.onComplete.add(alertResults);

    return <Survey model={survey} />;
}

export default PreviewForm;

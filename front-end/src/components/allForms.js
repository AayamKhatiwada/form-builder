import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AllForm = ({ result }) => {

    var increment = 0
    const response = result;
    const navigate = useNavigate();

    const [questionId, setQuestionId] = useState(0)

    const surveyJson = useSelector(state => state.json[0])

    const gotoForm = (id) => {
        navigate(`/${id}`);
    }

    useEffect(() => {
        const array = [surveyJson]
        surveyJson.elements.map((element) => {
            return (
                array.push(element.title)
            );
        })

        console.log(array)
        const createQuestion = async () => {
            let result = await fetch("http://localhost:8000/api/createQuestion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(array)
            });
            let response = await result.json();
            setQuestionId(response.success.id)
            console.log(response)
        }

        createQuestion()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        response?.map((form) => {
                            var { id, json } = form
                            json = JSON.parse(json)
                            increment = increment + 1
                            return (
                                <tr key={id}>
                                    <th scope="row">{increment}</th>
                                    <td>{json.title}</td>
                                    <td>{json.description}</td>
                                    <td><div className="btn btn-primary" onClick={() => gotoForm(id)}>View</div></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default AllForm
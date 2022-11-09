import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { MultiStepForm, Step } from 'react-multi-form'

import { addFormElement, enterJSON } from "../redux/actions";
import { generateFormType } from "../utils";
import Card from "./Card"
import FormElement from "./FormElement"
import PreviewForm from "./PreviewForm";

const FormBuilder = () => {
    const formElements = useSelector(state => state.formElements)
    const json = useSelector(state => state.json[0])
    const dispatch = useDispatch()

    const [title, setTitle] = useState(json ? json.title : '')
    const [description, setDescription] = useState(json ? json.description : '')
    const [showQuestionType, setShowQuestionType] = useState(false)
    const [createForm, setCreateForm] = useState(false)
    const [activeStep, setActiveStep] = useState(1)
    const [error, setError] = useState(false)
    const [image, setImage] = useState(json ? json.logo : '')

    const formCreated = () => {
        let json = {
            title,
            'logo': image,
            "logoPosition": "right",
            "logoWidth": "200px",
            "logoHeight": "100px",
            "logoFit": "contain",
            description,
            elements: formElements,
            "completeText": "Submit",
        };
        dispatch(enterJSON(json));

        window.open("https://5251-2400-1a00-b030-1376-a5a2-b89b-3a2f-5ea.in.ngrok.io/all-form");
    }

    const createQuestion = (type) => {
        if (formElements?.length < 10) {
            setShowQuestionType(false)
            const newQuestion = generateFormType(type)
            dispatch(addFormElement(newQuestion))
        }
    }

    const nextStep = () => {
        setCreateForm(true)
        if (activeStep === 2 && formElements.length < 1) {
            setError(true)
        } else {
            setError(false)
            setActiveStep(activeStep + 1)
        }
    }

    return (
        <>
            <div className="container mt-5">
                <MultiStepForm activeStep={activeStep} accentColor="#123123">

                    {/* For the first step */}
                    <Step label='Title and description'>
                        <Card className="mt-5 mb-3">
                            <div className="mb-4">
                                <label htmlFor="fromTitle" className="form-label">Please enter the name of the form</label>
                                <input type="text" className="form-control" id="fromTitle" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
                            </div>
                            <div>
                                <label htmlFor="formDescription" className="form-label">Enter the description</label>
                                <textarea className="form-control" id="formDescription" placeholder='Description' rows="5" onChange={(e) => setDescription(e.target.value)} value={description} />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="formDescription" className="form-label">Enter the Image</label>
                                <input type="text" className="form-control" id="fromImage" placeholder="Insert valid image url" onChange={(e) => setImage(e.target.value)} value={image} />
                            </div>
                        </Card>
                    </Step>

                    {/* For the second Step */}
                    <Step label='Add Question'>
                        {formElements?.map((formElement, index) => (
                            <FormElement
                                key={formElement.id}
                                element={formElement}
                                index={index}
                                createQuestion={createQuestion}
                                createForm={createForm}
                            />
                        ))}

                        {showQuestionType &&
                            <Card className="mt-3 position-relative">
                                <button className="position-absolute top-0 end-0 btn" onClick={() => setShowQuestionType(false)}>
                                    <i className="bi bi-x-lg"></i>
                                </button>
                                <h5>Select question type</h5>
                                <div className="row">
                                    <div className="col-12 col-md-6 my-1 d-grid">
                                        <button className="card p-2" onClick={() => createQuestion("text")}>
                                            <h6>Text question</h6>
                                        </button>
                                    </div>
                                    <div className="col-12 col-md-6 my-1 d-grid">
                                        <button className="card p-2" onClick={() => createQuestion("dropdown")}>
                                            <h6>Dropdown</h6>
                                        </button>
                                    </div>
                                    <div className="col-12 col-md-6 my-1 d-grid">
                                        <button className="card p-2" onClick={() => createQuestion("rating")}>
                                            <h6>Ratings</h6>
                                        </button>
                                    </div>
                                    <div className="col-12 col-md-6 my-1 d-grid">
                                        <button className="card p-2" onClick={() => createQuestion("boolean")}>
                                            <h6>Boolean, Yes/No, True/False</h6>
                                        </button>
                                    </div>
                                    <div className="col-12 col-md-6 my-1 d-grid">
                                        <button className="card p-2" onClick={() => createQuestion("file")}>
                                            <h6>Upload image</h6>
                                        </button>
                                    </div>
                                    <div className="col-12 col-md-6 my-1 d-grid">
                                        <button className="card p-2" onClick={() => createQuestion("multipletext")}>
                                            <h6>Multiple Text</h6>
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        }

                        <div className="d-flex justify-content-center flex-row mt-3" style={{ marginBottom: "5rem" }}>
                            {
                                formElements?.length < 10 &&
                                <button className="btn btn-secondary" onClick={() => { setShowQuestionType(true); setCreateForm(false); setError(false); }}>+ Add Question</button>
                            }
                        </div>

                        {error && <h5 className="text-danger text-center">*** Add at least one question</h5>}
                    </Step>

                    {/* For the third step */}
                    < Step label='confirmation' >
                        <h1 className="my-5 text-center">Confirmation</h1>
                        <h4 className="text-center">Click 'Previous' to edit form. Click 'Create Form' to continue.</h4>
                        <div className="mb-3">
                            <PreviewForm title={title} description={description} logo={image} setCreateForm={setCreateForm} />
                        </div>
                    </Step>
                </MultiStepForm>

                <div style={{ marginBottom: "5rem" }}>
                    {activeStep !== 1 && (
                        <button className="btn btn-secondary" onClick={() => setActiveStep(activeStep - 1)}><i className="bi bi-arrow-left"></i> Previous</button>
                    )}
                    {activeStep !== 3 && (
                        <button className="btn btn-secondary"
                            onClick={nextStep}
                            style={{ float: 'right' }}
                        >
                            Next <i className="bi bi-arrow-right"></i>
                        </button>
                    )}
                </div>
            </div>
            {formElements?.length > 0 &&
                <>
                    <div className="bg-dark position-fixed bottom-0 create-section p-3">
                        <div className="container d-flex justify-content-end">
                            <button className="btn btn-success me-1" onClick={() => setCreateForm(true)} data-bs-toggle="modal" data-bs-target="#previewFormModal">Preview</button>
                            {activeStep === 3 && <button className="btn btn-success" onClick={formCreated}>Create Form</button>}
                        </div>
                    </div>

                    <div className="modal fade" id="previewFormModal">
                        <div className="modal-dialog modal-dialog-centered modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Form Preview</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <PreviewForm title={title} description={description} logo={image} setCreateForm={setCreateForm} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default FormBuilder
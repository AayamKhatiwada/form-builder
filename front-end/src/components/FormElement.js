import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { v4 as uuidv4 } from 'uuid';

import { editFormElement, removeFormElement } from '../redux/actions'
import Card from './Card'
import { DragBox } from '../css/ImagePicker';

const FormElement = ({ element, index, createQuestion, createForm }) => {
  const dispatch = useDispatch()
  const [question, setQuestion] = useState(`Enter question no. ${index + 1}`)
  const [isRequired, setIsRequired] = useState(false)
  const [type, setType] = useState(element.type)
  const [change, setChange] = useState(false)
  const [dropDownList, setDropDownList] = useState([
    { id: uuidv4(), name: 'item1' },
    { id: uuidv4(), name: 'item2' },
    { id: uuidv4(), name: 'item3' },
  ])
  const [ratings, setRatings] = useState([1, 2, 3])
  const [labelTrue, setLabelTrue] = useState("Yes")
  const [labelFalse, setLabelFalse] = useState("No")
  const [fileName, setFileName] = useState('')

  function dragNdrop(event) {
    setFileName(URL.createObjectURL(event.target.files[0]));
  }

  useEffect(() => {
    const submitFormElement = () => {
      setChange(false)
      var _formElement = { id: element.id, type: type, title: question, isRequired }
      switch (element.type) {
        case "text":
          break
        case "dropdown":
          const choices = []
          dropDownList.forEach(list => (choices.push({ value: list.name, text: list.name })))
          _formElement.choices = choices
          break
        case "rating":
          _formElement.rateValues = ratings
          break
        case "boolean":
          _formElement.labelTrue = labelTrue
          _formElement.labelFalse = labelFalse
          break
        case "file":
          break
        case "multipletext":
          const items = [
            {
              "name": "text1"
            },
            {
              "name": "text2"
            }
          ]
          _formElement.items = items
          break
        default: return
      }
      dispatch(editFormElement(_formElement))
    }

    (createForm || change) && submitFormElement()
    // eslint-disable-next-line
  }, [createForm, change])

  const removeDropdownItem = (id) => {
    if (dropDownList.length > 2) {
      const newList = dropDownList.filter(list => (list.id !== id))
      setDropDownList(newList)
    }
  }

  const updateDropdownItem = (id, value) => {
    const newList = []
    dropDownList.forEach(list => list.id === id ? newList.push({ id, name: value }) : newList.push(list))
    setDropDownList(newList)
  }

  const removeRating = () => {
    if (ratings.length > 2) {
      const prevRatings = ratings
      prevRatings.pop()
      setRatings([...prevRatings])
    }
  }

  const renderFormElement = () => {
    switch (element.type) {
      case "text":
        return (<input type="text" readOnly className="form-control" />)
      case "dropdown":
        return (
          <>
            {dropDownList.map(dropDown => (
              <div key={dropDown.id} className="d-flex align-items-end mb-3">
                {dropDownList.length > 2 && <i type="button" className="bi bi-dash-circle" onClick={() => removeDropdownItem(dropDown.id)} />}
                <input className="question-input ms-3" type="text" value={dropDown.name} onChange={(e) => updateDropdownItem(dropDown.id, e.target.value)} />
              </div>
            ))}
            <div className="d-inline-flex">
              <button type="button" className="btn btn-secondary" onClick={() => setDropDownList(prev => [...prev, { id: uuidv4(), name: `item${dropDownList.length + 1}` }])}>
                <i className="bi bi-plus-circle"></i> Add Item
              </button>
            </div>
          </>
        )
      case "rating":
        return (
          <>
            <div className="d-flex flex-wrap">
              {ratings.map(rating => (
                <span key={rating} className="bg-secondary rounded-5 p-3 text-white me-2">{rating}</span>
              ))}
            </div>
            <div className="mt-3">
              <i type="button" className="bi bi-dash-circle fs-3 me-3" onClick={() => removeRating()}></i>
              <i type="button" className="bi bi-plus-circle fs-3" onClick={() => setRatings(prev => [...prev, ratings.length + 1])} />
            </div>
          </>
        )
      case "boolean":
        return (
          <span className="rounded-5 bg-secondary p-3 d-flex justify-content-between" style={{ width: "fitContent" }}>
            <input className="question-input text-white boolean-input" type="text" value={labelTrue} onChange={(e) => setLabelTrue(e.target.value)} />
            <input className="question-input text-end text-white boolean-input" type="text" value={labelFalse} onChange={(e) => setLabelFalse(e.target.value)} />
          </span>
        )
      case "file":
        return (
          <>
            {
              fileName !== '' ?
                <img src={fileName} width='500px' alt='Your' className="m-auto"></img>
                :
                <DragBox>
                  Darg and Drop image here
                  <input type="file" onChange={(e) => dragNdrop(e)} id="uploadFile" />
                </DragBox>
            }
          </>
        )

      case "multipletext":
        return (
          <>
            <input type="text" readOnly className="mt-2 p-2" placeholder='Input field' />
            <input type="text" readOnly className="mt-2 p-2" placeholder='Input field' />
          </>
        )
      default: return
    }
  }

  return (
    <div className='d-flex'>
      <div className='col-sm-2 mt-5'>
        <div className='pt-4' onClick={() => { setType('text'); setChange(true)}}>Text</div>
        <div className='pt-4' onClick={() => { setType('dropdown'); setChange(true)}}>Dropdown</div>
        <div className='pt-4' onClick={() => { setType('rating'); setChange(true)}}>Rating</div>
        <div className='pt-4' onClick={() => { setType('boolean'); setChange(true)}}>Boolean</div>
        <div className='pt-4' onClick={() => { setType('file'); setChange(true)}}>File</div>
        <div className='pt-4' onClick={() => { setType('multipletext'); setChange(true)}}>Multipletext</div>
      </div>
      <Card className="mb-5 position-relative col-sm-10">
        <button className="position-absolute top-0 end-0 btn text-danger" onClick={() => dispatch(removeFormElement(element.id))}>
          <i className="bi bi-trash3-fill"></i>
        </button>
        <h5>Please enter your question</h5>
        <input className="question-input my-3 px-3 py-2" type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        {renderFormElement()}
        <div className="d-flex justify-content-end mt-3 align-items-center">
          <button className="btn mr-2" onClick={() => createQuestion(element.type)}>
            <i className="bi bi-window-plus"></i>&nbsp;&nbsp;Duplicate
          </button>
          <div className="form-check form-switch">
            <label className="form-check-label" htmlFor="flexSwitchCheckReverse" role="button">Required</label>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" checked={isRequired} onChange={() => setIsRequired(!isRequired)} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default FormElement
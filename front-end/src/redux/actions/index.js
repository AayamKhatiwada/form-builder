import { ADD_FORM_ELEMENT, EDIT_FORM_ELEMENT, REMOVE_FORM_ELEMENT } from "../constants"

export const addFormElement = (formElement) => {
    return {
        type: ADD_FORM_ELEMENT,
        payload: formElement
    }
}

export const removeFormElement = (id) => {
    return {
        type: REMOVE_FORM_ELEMENT,
        payload: id
    }
}

export const editFormElement = (element) => {
    return {
        type: EDIT_FORM_ELEMENT,
        payload: element
    }
}

export const editElement = (allElements, items, id) => {
    return {
        type: EDIT_FORM_ELEMENT,
        payload: changeLement(allElements, items, id)
    }
}

const changeLement = (allElements, items, id) => {

    console.log(allElements)
    const existingElement = allElements.find((item) => item.id === id)

    if (existingElement) {
        return allElements.map((item) => {
            return (
                item.id === id
                    ? { ...items }
                    :
                    item
            );
        });
    }

    return allElements
}

export const enterJSON = (json) => {
    return {
        type: 'CREATE_JSON',
        payload: json
    }
}
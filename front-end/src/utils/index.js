import { v4 as uuidv4 } from 'uuid';

export const generateFormType = (type) => {
    const defaultAttr = { isRequired: false }

    switch (type) {
        case "text":
            return {
                id: uuidv4(),
                type,
                ...defaultAttr
            }
        case "dropdown":
            return {
                id: uuidv4(),
                type,
                ...defaultAttr
            }
        case "rating":
            return {
                id: uuidv4(),
                type,
                ...defaultAttr
            }
        case "boolean":
            return {
                id: uuidv4(),
                type,
                ...defaultAttr
            }
        case "file":
            return {
                id: uuidv4(),
                type,
                ...defaultAttr
            }
        case "multipletext":
            return {
                id: uuidv4(),
                type,
                ...defaultAttr
            }
        default:
            return {}
    }
}
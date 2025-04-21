import { commonApi } from "./commonapi"
import { serverurl } from "./serverurl"


export const ToyAddApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/Toys`, reqBody)
}

export const allToyApi = async () => {
    return await commonApi('GET', `${serverurl}/Toys`)
}

export const DeleteToyApi = async (id) => {
    return await commonApi('DELETE', `${serverurl}/Toys/${id}`,{})
}

export const AddCategoryApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/category`, reqBody)
}

export const allCategoryApi = async () => {
    return await commonApi('GET', `${serverurl}/category`)
}
export const DeleteCategoryApi = async (id) => {
    return await commonApi('DELETE', `${serverurl}/category/${id}`,{})
}
export const UpdateCategoryApi = async (id,reqBody) => {
    return await commonApi('PUT', `${serverurl}/category/${id}`, reqBody)
}





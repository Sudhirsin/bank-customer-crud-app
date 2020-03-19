import { AUTH, 
         ADD_USER, 
         DELETE_USER, 
         SORT_USER,
         SORT_USER_DESC, 
         EDIT_USER } from './type'


export const onSubmit = (payload) => {
    return {
        type : AUTH,
        payload,
    }
}

export const addUser = (payload) => {
    return {
        type : ADD_USER,
        payload
    }
}

export const deleteUser = (payload) => {
     return {
         type : DELETE_USER,
         payload
     }
}

export const sortUser = (payload) => ({
    type: SORT_USER,
    payload
})

export const sortUserDesc = (payload) => ({
    type: SORT_USER_DESC,
    payload
})


export const editUser = (payload) => ({
    type: EDIT_USER,
    payload
})

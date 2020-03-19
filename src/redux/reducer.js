import { AUTH, 
         ADD_USER, 
         DELETE_USER, 
         SORT_USER,
         SORT_USER_DESC, 
         EDIT_USER } from './type'

const intialState = {
    username: 'admin',
    password: 'admin',
    isAuth : false,
    userList : [
        {
        firstName : 'Sudhir Singh',
        age : '23',
        email : "lion.sud.k@gamil.com",
        cibilScore : "342243",
        loanAmount : "23321",
        loanType : "Personal",
        id : 3,
      },
      {
        firstName : 'Abhay Singh',
        age : '23',
        email : "lion.sud.k@gamil.com",
        cibilScore : "342243",
        loanAmount : "23321",
        loanType : "Personal",
        id : 4
      }
    ]
}

const loginReducer = (state = intialState, action) => {
    switch (action.type) {
        case AUTH : 
            if(state.username === action.payload.username && state.password === action.payload.password){
                return {
                    ...state, 
                    isAuth: true
                }
            }
        case ADD_USER : 
            return {
                ...state,
                userList : [...state.userList, action.payload]
            }
        case DELETE_USER : 
            return {
                ...state,
                userList : state.userList.filter((item) => action.payload.id != item.id )
            }
        case SORT_USER : 
            // return {
            //     ...state,
            //     userList : state.userList.sort((a,b) => (a.firstName > b.firstName) ? 1 : -1)
            // }
            if(action.payload === 'asc'){
                return {
                    ...state,
                    userList : state.userList.sort((a,b) => (a.firstName > b.firstName) ? 1 : -1)
                }
            }else{
                return {
                    ...state,
                    userList : state.userList.sort((a,b) => (a.firstName > b.firstName) ? -1 : 1)
                }
            }
        // case SORT_USER_DESC :
        //     return {
        //         ...state,
        //         userList : state.userList.sort((a,b) => (a.firstName > b.firstName) ? -1 : 1)
        //     }
        case EDIT_USER :
            return{
                ...state,
                userList : state.userList.map(ele => ele.id == action.payload.id ? action.payload : ele)
            }
        default : return state
    }
}

export default loginReducer;

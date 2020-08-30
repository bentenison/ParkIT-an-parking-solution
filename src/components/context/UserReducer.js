export default (state, action) => {
    switch (action.type) {
        case "isLoggedin" :
            return{
            ...state,
            isLoggedIn:action.payload, 
        }
        case "REGISTER" :
            return{
            ...state,
            isLoggedIn:true,
        }
        case "LOGIN" :
            return{
            ...state,
            isLoggedIn:true,
        }
        case"LOGOUT":
        return{
            ...state,
            isLoggedIn:false,
        }
        case "GETUSER":
            return{
                ...state,
                user:action.payload
            }
        case "LOTS":
            return{
                ...state,
                lots:action.payload
            }
        case "BOOKING":
            return{
                ...state,
                booking:action.payload
            }
        case "UNBOOKING":
            return{
                ...state,
                unbooked:action.payload
            }
        case "ERROR":
            return{
                ...state,
                error:action.payload,
            }


        default:
            return state;
    }
};
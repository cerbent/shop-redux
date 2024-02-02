import basket from "../../page/Basket";
import {
    AD_TO_BASKET,
    ADD_TO_FAVORITE,
    DECREASE_QUANTITY,
    DEL_BASKET,
    DELETE_FROM_BASKET,
    GET_PRODUCT
} from "../ActonRed";

const initialState = {
    product: [],
    basket: [],
    favorite:[],
    defCurren: "kg",
    allCurren: {
        kg: [1, "som"],
        ru: [0.80, "rub"],
        usa: [0.012, "$"]
    }
}


export const Reducer = (state= initialState, action) =>{
    let ADD_TO_BASKET;
    switch (action.type){
        case GET_PRODUCT:
            return {...state, product: action.payload}
        case AD_TO_BASKET: {
            const foundProduct = state.basket.find(el => el.id === action.payload.id)
            if (foundProduct){
                return {...state, basket: state.basket.map(el => el.id === foundProduct.id ? {...el, quantity: el.quantity +1}: el)}
            }else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }
        }

        case DECREASE_QUANTITY : {

            return {
                ...state, basket: state.basket.map(el => {
                    if (el.id === action.payload) {
                        if (el.quantity > 1) {
                            return {...el, quantity: el.quantity - 1}
                        } else return el
                    } else return el
                })
            }
        }
        case DELETE_FROM_BASKET : {
            return {...state,basket: state.basket.filter((el) => el.id !== action.payload)}
        }

        case ADD_TO_FAVORITE : {
            const foundProduct = state.favorite.find(el => el.id === action.payload.id)
            if (foundProduct) {
                return {...state, favorite: state.favorite.filter(el => el.id !== foundProduct.id)}
            } else {
                return {...state, favorite: [...state.favorite , action.payload]}
            }
        }

        case "CURREN_OPTION" : {
            return {...state, defCurren: action.payload.target.value}
        }

        default :
            return state
    }
    
}
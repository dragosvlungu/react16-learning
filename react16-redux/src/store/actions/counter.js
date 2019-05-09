import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    };
};

export const subsctract = (value) => {
    return {
        type: actionTypes.SUBSTRACT,
        val: value
    };
};
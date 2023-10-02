import APP_ACTION_TYPES from "../action-types/appActionTypes";

export const APP_INITIAL_STATE = {
    accounting: false,
    tech: true,
};

export const appReducer = (state, action) => {
     
    const {type, payload} = action;

    switch(type) {
        case APP_ACTION_TYPES.ACCOUNTING:
            return {...state, accounting: true, tech: false};
        case APP_ACTION_TYPES.TECH:
            return {...state, accounting: false, tech: true};
        default: return state;
    }
};
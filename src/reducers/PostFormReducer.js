const INITIAL_STATE = {
    title: '',
    body: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_POST_TITLE':
            return {...state, title: action.title};
        case 'CHANGE_POST_BODY':
            return {...state, body: action.body};
        case 'CREATE_POST':
            return INITIAL_STATE;
        case 'RESET_POST_FORM':
            return INITIAL_STATE;
        default:
            return state;
    }
};
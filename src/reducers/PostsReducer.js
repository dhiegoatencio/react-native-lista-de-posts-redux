const INITIAL_STATE = {
    all: [],
    selected: null
};

export default (state = INITIAL_STATE, action) => {
    console.log('action', action);

    switch (action.type) {
        case 'FETCH_POSTS':
            return {...state, all: action.payload.data };
        case 'FETCH_POST':
            return {...state, selected: action.payload.data};
        case 'CREATE_POST': {
            const all = [...state.all, action.payload.data];
            return {...state, all};
        }
        case 'UPDATE_POST': {
            const selected = action.payload.data;
            const all = state.all.map(post => {
                return post.id === selected.id ? selected : post;
            });
            return {...state, selected, all};
        }
        case 'DELETE_POST': {
            const all = state.all.filter(post => {
                return state.selected.id !== post.id;
            });
            return {...state, selected: null}, all;
        }
        default:
            return state;
    }
}
const { createStore, combineReducers } = require('redux');

// actions
    // types.js - action types
    // index.js - action creators
const INCREMENT = 'INCREMENT';
const TOGGLE_THEME = 'TOGGLE_THEME';
const ADD_COMMENT = 'ADD_COMMENT';

// action creators
const incrementCount = () => ({
	type: INCREMENT
});

const toggleTheme = () => ({
    type: TOGGLE_THEME
});

const addComment = (newMessage) => ({
    type: ADD_COMMENT,
    payload: newMessage
});

// reducers
    // index.js < - rootReducer
    // countReducer.js
    // profileReducer.js
    // darkThemeReducer.js
const initialCountState = 0;
const countReducer = (state = initialCountState, action) => {
    switch (action.type) {
		case INCREMENT:
			return state + 1;
		default:
			return state;
	}
}

const initialDarkThemeState = true;
const darkThemeReducer = (state = initialDarkThemeState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return !state;
		default:
			return state;
	}
}

const initialProfileState = {
    firstName: "Erwin",
    lastName: "Howell",
    comments: []
}
const profileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return { ...state, comments: [...state.comments, action.payload] };
        default:
            return state;
    }
}

// rootReducer
const rootReducer = combineReducers({
    count: countReducer,
    darkTheme: darkThemeReducer,
    profile: profileReducer
});

// store
    // index.js <- create and configure the store
const store = createStore(rootReducer);

// you somehow get this logic into components
    // connect <- old busted
    // useSelector <- new hotness
    // useDispatch
store.subscribe(() => {
	console.log('current state', store.getState());
});

console.log('dispatching action', incrementCount());
store.dispatch(incrementCount());

console.log('dispatching action', incrementCount());
store.dispatch(incrementCount());

console.log('dispatching action', incrementCount());
store.dispatch(incrementCount());

console.log('dispatching action', toggleTheme());
store.dispatch(toggleTheme());

console.log('dispatching action', addComment('wow'));
store.dispatch(addComment('wow'));
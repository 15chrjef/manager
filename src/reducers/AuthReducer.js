import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE,
	LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: '', error: '', loading: ''}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload};
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload};
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload };
		case LOGIN_USER_FAILURE:
			return { ...state, error: 'Authentication Failed.', loading: false, password: '' };
		case LOGIN_USER: {
			return { ...state, loading: true }
		}
		default:
			return state
	}
}
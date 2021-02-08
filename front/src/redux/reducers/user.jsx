const initialState = {
	id: "",
	email: "",
	firstname: "",
	lastname: "",
	birthday: "",
	genre: "",
	height: "",
	weight: "",
	avatar: "",
};

export const user = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			return { ...state, ...action.user };
		case "LOGOUT":
			return initialState;
		default:
			return state;
	}
};

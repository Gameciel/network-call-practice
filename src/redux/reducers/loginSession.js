const init_state = {
	id: 0,
	role: "",
	user_name: "",
};

export const loginSessionReducer = (state = init_state, action) => {
	switch (action.type) {
		case "USER_LOGIN":
			return {
				...state,
				id: action.payload.id,
				role: action.payload.role,
				user_name: action.payload.user_name,
			};

		case "LOG_OUT":
			return init_state;

		default:
			return state;
	}
};

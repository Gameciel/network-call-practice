const init_state = { pathName: "/" };

export const appSettingReducer = (state = init_state, action) => {
	switch (action.type) {
		case "CHANGE":
			return { ...state, pathName: `${action.payload}` };
		default:
			return state;
	}
};

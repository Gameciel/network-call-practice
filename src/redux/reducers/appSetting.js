const init_state = { pathName: "/" };

export const appSettingReducer = (state = init_state, action) => {
	console.log(`${action.payload}`);
	switch (action.type) {
		case "CHANGE":
			return { ...state, pathName: `${action.payload}` };
		default:
			return state;
	}
};

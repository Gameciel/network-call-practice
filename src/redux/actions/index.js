export const userLogin = userData => {
	return dispatch => {
		dispatch({
			type: "USER_LOGIN",
			payload: userData,
		});
	};
};

export const logOut = () => {
	return dispatch => {
		dispatch({ type: "LOG_OUT" });
	};
};

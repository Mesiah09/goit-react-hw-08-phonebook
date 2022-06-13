export const isUserLogin = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
export const getToken = ({ auth }) => auth.token;
export const getError = ({ auth }) => auth.error;
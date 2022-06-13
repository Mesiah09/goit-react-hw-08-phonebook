export const isUserLogin = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
export const getError = ({ auth }) => auth.error;
export const getToken = ({ auth }) => auth.token;
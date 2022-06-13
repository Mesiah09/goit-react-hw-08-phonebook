import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const addToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const removeToken = () => {
    instance.defaults.headers.common.Authorization = ``;
  };
  
  export const signup = async data => {
    const { data: result } = await instance.post('/users/signup', data);
    addToken(result.token);
    return result;
  };

  export const login = async data => {
    const { data: result } = await instance.post('/users/login', data);
    addToken(result.token);
    return result;
  };
  
  export const logout = async () => {
    const { data } = await instance.post('/users/logout');
    removeToken();
    return data;
  };

  export const getCurrent = async (token) => {
    addToken(token);
    try {
        const { data } = await instance.get("/users/current");
        return data;
    } catch (error) {
        removeToken();
        throw error;
    }
}



export default instance;
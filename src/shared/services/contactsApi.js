import instance from "./authAPI";
import { addToken } from "./authAPI"
export const getContacts = async (token) => {
    addToken(token)
    const { data } = await instance.get('/contacts');
    return data;
};
export const addContact = async (contact) => {

    const { data } = await instance.post('/contacts', contact);
    return data;
};
export const removeContact = async (id) => {
    await instance.delete(`/contacts/${id}`);
    return id;
};
import { AuthChildType, Child, LoginChildType } from "../conect/type"
import axios from '../axios/axios'

export const addChildService = async (ChildToAdd: any) => {
    const response = await axios.post<AuthChildType>(`Child/signUp`, ChildToAdd);
    return response.data;
}

export const updateChildService = async (ChildToUpdate: Child): Promise<void> => {
    await axios.put(`Child/`, ChildToUpdate)
}
// export const login = async (ChildToLogin: LoginChildType) => {
//     try {
//         const response = await axios.post<AuthChildType>(`/Login/${ChildToLogin.mail}/${ChildToLogin.password}`);
//         return response.data;
//     } catch (error) {
//         throw new Error('Failed to log in: ' + error);
//     }
//     // return await axios.post<AuthChildType>(`/Login`, ChildToLogin)
// }
// export const loginChildService = async (childToLogin: LoginChildType) => {
//     const response = await axios.post<AuthChildType>(`Child/${childToLogin.mail}/${childToLogin.password}`);
//     return response.data;
// }

export const loginChildService = async (childToLogin: LoginChildType) => {
    const response = await axios.post(`Child/SignIn`,childToLogin);
    return response.data;
}
export const getChildByToken = async (token: string) => {
    const child = await axios.get<Child>(`Child/GetByToken`, { headers: { Authorization: `Bearer ${token}` } });
    return child.data;
}

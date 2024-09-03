import axios from '../axios/axios';
import { Responses } from '../conect/type';

export const getAllResponses = async () => {
    const response = await axios.get<Responses[]>('Response');
    return response.data;
}

export const getResponseById = async (responseId: number) => {
    const response = await axios.get<Response>(`Response/${responseId}`);
    return response.data;
}

export const createResponse = async (newResponse: Response) => {
    await axios.post('/Response', newResponse);
}

export const updateResponse = async (updatedResponse: Response) => {
    await axios.put('Response', updatedResponse);
}

export const deleteResponseById = async (responseId: number) => {
    await axios.delete(`Response/${responseId}`);
}

import axios from '../axios/axios';
import { Child, Workshop } from '../conect/type';

export const getAllWorkshops = async () => {
    const response = await axios.get<Workshop[]>('Workshop');
    return response.data;
}

export const getWorkshopById = async (workshopId: number) => {
    const response = await axios.get<Workshop>(`Workshop/${workshopId}`);
    return response.data;
}

export const createWorkshop = async (newWorkshop: Workshop) => {
    await axios.post('Workshop', newWorkshop);
}

export const updateWorkshop = async (updatedWorkshop: Workshop) => {
    await axios.put('Workshop', updatedWorkshop);
}

export const deleteWorkshopById = async (workshopId: number) => {
    await axios.delete(`Workshop/${workshopId}`);
}
export const addChildToWorkshop = async (workshopId: number, name: string, mail: string) => {
    try {
        await axios.post(`Workshop/${workshopId}/addChild`, mail);
    } catch (error) {
        console.error('Error adding child to workshop:', error);
        throw error; 
    }
}
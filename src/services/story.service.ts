import axios from '../axios/axios';
import { Story } from '../conect/type';

export const getAllStories = async () => {
    const response = await axios.get<Story[]>('Story');
    return response.data;
}

export const getStoryById = async (storyId: number) => {
    const response = await axios.get<Story>(`Story/${storyId}`);
    return response.data;
}

export const createStory = async (newStory: Story) => {
    await axios.post('Story', newStory);
}

export const updateStory = async (updatedStory: Story) => {
    await axios.put(`Story/${updatedStory.id}`, updatedStory);
}

export const deleteStoryById = async (storyId: number) => {
    await axios.delete(`Story/${storyId}`);
}
import axios from 'axios';
import { emailValidation, validateApiResponse } from '@/lib/validation';
import { compareSync } from 'bcryptjs';

export const addEditor = async (email, youtuberEmail) => {
    const isValidEmail = emailValidation(email);
    if (isValidEmail?.error){
        return isValidEmail;
    }
    try {
        const response = await axios.post ('/api/youtuber/addeditor', { email, youtuberEmail });
        const msg = validateApiResponse(response);
        return msg;
    } catch (error) {
        return { error: error.response.data.message };
    }
}

export const FetchEditors = async (id) =>{
    try {
        const response = await axios.post('/api/youtuber/fetcheditor', { id });
        return response?.data;
    } catch (error) {
        return { error: error.response.data.message };
    }
}

export const FetchEditor = async (id) => {
    try {
        const response = await axios.post('/api/editor/fetchyoutuber', { id });
        return response?.data;
    } catch (error) {
        return { error: error.response.data.message };
    }
}

export const SaveVideo = async ( video ) => {
    console.log(video);
    try {
        const response = await axios.post('/api/editor/savevideo', { video });
        return response?.data;
    } catch (error) {
        return { error: error.response.data.message };
    }
}
import axios from 'axios';
import { emailValidation, validateApiResponse } from '@/lib/validation';

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
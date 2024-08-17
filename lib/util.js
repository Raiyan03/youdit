import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

export const parseEditor = (editors) => {
    if (!editors) {
        return [];
    }
    const Parsededitors = editors.map((editors) => {
        const {name, email, role, image} = editors;
        return {name, email, role, image};
    })

    return Parsededitors;
}

export const parseYoutuber = (youtubers) => {
    if (!youtubers) {
        return [];
    }
    const ParsedYoutubers = youtubers.map((youtubers) => {
        const { id, name, image} = youtubers;
        return {id, name, image};
    })

    return ParsedYoutubers;
}
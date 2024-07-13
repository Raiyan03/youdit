export const registrationInputValidation = (data) => {
    if (data.password != data.confirmPassword) {
        return { error: "Passwords do not match" };
    }
    if (data.password.length < 6){
        return { error: "Password must be at least 6 characters" };
    }
    if (data.name.length < 3){
        return { error: "Name must be at least 3 characters" };
    }
    if (!data.email || !data.name || !data.password){
        return { error: "All fields are required" };
    }
    return { success: true };
}

export const loginInputValidation = (data) => {
    if (!data.email || !data.password){
        return { error: "All fields are required"};
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
        return { error: "Invalid email" };
    }
}
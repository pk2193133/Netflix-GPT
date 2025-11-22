export const validateLoginData = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return "email is not valid";
    }
    if(password.length<8){
        return "password must be at least 8 characters long";
    }
    return null;
}
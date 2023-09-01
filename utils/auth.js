import { hash, compare } from "bcrypt";

const hashPassword=async(password)=>{
    const hashedPassword= await hash(password, 13)
    return hashedPassword;
};

const verifyPassword=async(password,userPassword)=>{
    const result= await compare(password,userPassword)
    return result;
};






export {hashPassword, verifyPassword};

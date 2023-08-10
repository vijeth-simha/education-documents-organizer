import crypto from 'crypto';


export const getRandomString =(bytes=16)=>{
    return crypto.randomBytes(bytes).toString('hex');
}



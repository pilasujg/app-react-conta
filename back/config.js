import dotenv from 'dotenv';

dotenv.config();




 export const PORT = process.env.PORT || 4000
 export const MONGO_URI = process.env.MONGO_URI || process.env.MONGO_URI_LOCAL
    export const SECRET = process.env.SECRET_KEY 
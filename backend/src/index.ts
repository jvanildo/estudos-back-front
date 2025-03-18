import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import address from './routes/user.routes';
import loja from './routes/loja.routes';

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

app.use('/endereco',address)
app.use('/loja',loja)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`🚀 Server running on http://localhost:${PORT}`);
})

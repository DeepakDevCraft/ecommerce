import express,{type Express,type Request, type Response} from 'express';
import 'dotenv/config';
import rootRouter from './routes';
const app:Express = express();
const PORT = process.env.PORT;
//dotenv.config();
app.use(express.json())

app.use('/api',rootRouter);

app.get('/',(req:Request,res:Response)=>{
    res.send("app is working fine");
})


app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
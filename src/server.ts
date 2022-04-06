import bodyParser from 'body-parser';
import express from 'express'
import "./database";
import { routes } from './routes';


const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(routes);






app.listen(3000, () => {
    console.log("Rodando.");

})


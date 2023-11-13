import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {

    console.log("Rotas '/' acessada!");
    return res.status(200).json({ msg: "Acessado e alterado e atualizado" });
});

app.listen(8040, () => {
    console.log(`Server running on port 8040`);
});
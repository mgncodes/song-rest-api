import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get('/songs', async (req, res) => {
    console.log(`Get all songs called.`);
    const allSongs = await prisma.song.findMany();
    return res.status(200).send(allSongs);
});

app.post('/add-song', async (req, res) => {
    console.log(`Add songs route called.`);
    // console.log(`Entered Song details: ${req.body}`);
    await prisma.song.create({
        data: {
            name: req.body.name,
            language: req.body.language,
            releaseYear: req.body.releaseYear,
        },
    });
    return res.status(200).send(`Song Created.`);
});

app.patch('/edit-song/:id', async (req, res, next) => {
    console.log(`Update song called.`);
    const updatedSong = await prisma.song.update({
        where: {
            id: req.params.id,
        },
        data: {
            name: req.body.name,
            language: req.body.language,
            releaseYear: req.body.releaseYear,
        }
    })
    return res.status(200).send(`Updated Song with id: ${updatedSong.id}`);
});

app.delete('/delete-song/:id', async (req, res) => {
    console.log(`delete song called.`);
    await prisma.song.delete({
        where: {
            id: req.params.id,
        }
    });
    return res.status(200).send(`Song deleted.`);
});
app.listen(1337, async () => {
    console.log(`App running at http://localhost:1337`);
    await prisma.$connect();
    console.log(`Database connected successfully.`);
});

import express, {Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

// creating an express object
const app: Application = express();

// middleware for accepting json/form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// creat port
const port = 3000;

// Interface
interface Data  {
    name: string,
    age: number
}

// data
const data: Data[] = [
    {
    name: 'Pere',
    age: 28
},
];

// GET request method
app.get('/', (req: Request, res: Response) => {
    res.send(data);
})

// POST request method
app.post('/', async(req: Request, res: Response) => {
    const newData: Data = req.body;
    data.push(newData);
    res.send(data);
})

// PUT update method
app.put('/', async(req: Request, res: Response) => {
    if (data[0]!== req.body) {
        const updatedData  = [
            { 
                name: "Ada",
                age: 30
        },
        data[0]
    ]
    res.send(updatedData);
    } else{
        res.send("Unexpected error")
    }   
})

// DELETE request method
app.delete('/', async(req: Request, res: Response) => {
    if (data[1] === req.body) {
        const updatedData  = [
            { 
                name: "Ada",
                age: 30
        },
        data[0]
    ];
        data.pop()
        res.send(data);
    } else {
        res.send("Couldn't find this data");
    }
})



app.listen(port, (): void => {
    console.log(`Listening on ${port}`);
});
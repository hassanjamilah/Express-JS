import express from 'express'
import data from './data/data.json'

const app = express();
const PORT=3000;


app.get('/', (req, response) => {
   //get data first

   response.json(data);

});

app.post('/newItem', (req, response) => {
   response.send(`This is a post to newItem on port ${PORT}`);
});

app.put('/item' , (req, response)=>{
   response.send(`This is a put to updateItem on port ${PORT}`);
});


app.delete('/item' , (req, response)=>{
   response.send(`This is a delete to deleteItem on port ${PORT}`);
});

app.listen(PORT, ()=>{
   console.log(`run on server port ${PORT}`);
   console.log(data);
});



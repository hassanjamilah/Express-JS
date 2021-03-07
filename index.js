import express from 'express'
import data from './data/data.json'

const app = express();
const PORT=3000;

app.use(express.static('public'))

app.use('/images', express.static('images'))

app.get('/', (req, response) => {
   //get data first

   response.json(data);

});


app.get('/item/:id', (request, response) => {
   console.log('The id is: ', request.params.id);
   let userID = Number(request.params.id);
   let user = data[userID];
   console.log("The user data is:" , user);
   response.send(user);

});

app.get('/item/:category/:id', (request, response) => {
   console.log('The id is: ', request.params.id);
   let userID = Number(request.params.id);
   let user = data[userID];
   console.log("The user data is:" , user);
   response.send(user);

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



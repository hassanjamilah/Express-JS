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


app.get('/item/:id', (request, response, next) => {
   //Middleware
   console.log('The id is: ', request.params.id);
   let userID = Number(request.params.id);
   let user = data[userID];
   console.log("The user data is:" , user);
   //middleware that uses the request object
   console.log(`Request from ${request.originalUrl}`);
   console.log(`Request type: ${request.method}`);

   //end of middleware

   response.send(user);
   next();
},
    (request, response ) => {
   console.log('The second request');
    }

);

app.get('/item', (request, response) => {
   //response.end(); // ends the response
   //response.redirect('https://www.google.com');
   //response.download('images/rocket.jpg');



});


app.get('/item/:category/:id', (request, response) => {
   console.log('The id is: ', request.params.id);
   let userID = Number(request.params.id);
   let user = data[userID];
   console.log("The user data is:" , user);
   response.send(user);

});

app.route('/item')
    .get((req, res) => {

})
    .put((request, response) => {

    })
    .post((req, res)=> {

    })
    .delete((req, resp)=> {

    });

app.post('/item', (req, response) => {
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





    const express = require('express');

    const server = express();

    const port = 2022;

    const bodyParser = require('body-parser');



let clients = [
   { 
       
        id:1,  
        first_name: 'Ben',
        last_name: 'Gaga',
        email: 'ben@gmail.com',
        password: 'Gaga2010@',
        confirm_password: 'Gaga2010@'
   },

   {
        id:2,
        first_name: 'Git',
        last_name: 'hub',
        email: 'github@gmail.com',
        password: 'Forum2011Git',
        confirm_password: 'Forum2011Git'
    },

    {
        id:3,
        first_name: 'Fred',
        last_name: 'Rick',
        email: 'fredrick@gmail.com',
        password: 'Fred2012',
        confirm_password: 'Fred2012'
    },

    {
        id:4,
        first_name: 'Mary',
        last_name: 'Amos',
        email: 'maryseleb@gmail.com',
        password: 'Maria2013',
        confirm: 'Maria2013'
    },

    {
        id:5,
        first_name: 'Amen',
        last_name: 'Halelluja',
        email: 'amen@gmail.com',
        password: 'AmenAmen2014',
        confirm: 'AmenAmen2014'
    }
]

     // console.log(clients);

    // parse application

    server.use(bodyParser.urlencoded({extended:false}));
    server.use(bodyParser.json());

    // app.use(clientsRoute);


    server.get('/clients',(req,res) =>{
        res.send(clients);
    })


    server.get('/client',  (req, res) =>{
        const clientId = req.query.id;
        return res.send(clients[clientId]);
        
    })

    server.post('/signUp',(req,res) =>{
        // console.log(req.body);
        let{first_name, last_name, email, password, confirm_password} = req.body;
        console.log (first_name.length);
        // if (first_name.length) {
            
        // }
        res.send(clients);
    })

    // Deleting a client

    server.delete('/delete', (req,res) =>{
        const someOne = req.query.id;
        if (!clients[someOne]) {
            return res.send('Acccount does not exist');

        }
            return res.send(clients[someOne]);

    })

    // Request port and callback function

server.listen(port,() => {
    console.log('server listening to port' + ' ' + port); 

})    


    const express = require('express');
    const app = express();
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

    const newMem = require('./src/routes/clientsRouter')
    app.use(express.json());
    app.use (newMem);

    // parse application
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

    // Request port and callback function
    app.listen(port,() => {
    console.log('server listening to port' + ' ' + port); 
})    

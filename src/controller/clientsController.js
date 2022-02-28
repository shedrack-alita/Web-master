
module.exports = {

        // get clients request

        getclients: (req,res) =>{
            res.send(clients);
        },

        // Get by id request

        getClient: (req, res) =>{
            const clientId = req.query.id;
            return res.send(clients[clientId]);
            
        },

        // post request

        postedClient: (req,res) =>{
    
            let{first_name, last_name, email, password, confirm_password} = req.body;
          
            // first_name and last_name validation

            let NameValid = /^[a-z'-.{3,15}]+[^0-9][^~!@#$%^&*()_+":,;?></~`]$/gi;
            
            if (!NameValid.test (first_name) || !NameValid.test(last_name)) {
                let Oops = 'Name format not accepted';
                    return res.status(401).json({Invalid: Oops});
            }

            // email validation 

            let emValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
            
            if (!emValid.test(email)) {
                let wrong = 'Please enter a valid address';
                    return res.status(401).json({incorrect: wrong});
            }
            
            // password validation

            let passValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

            if (!passValid.test(password)) {
                let wrongpass = "Incorrect password";
                    return res.status(401).json({wrongpas: wrongpass})
            }

            // Confirm Validation

            if (password !== confirm_password) {
                let NoMatch = 'Password doesn\'t match';
                    return res.status(401).json({passconfirm: NoMatch});
            }

                let member = {first_name, last_name, email, password, confirm_password};
                return res.status(200).json({member});

        },

        // Deleting a client

        deleteClient: (req,res) =>{
            const someOne = req.query.id;
            if (!clients[someOne]) {
                return res.send('Acccount does not exist');
            }
                return res.send(clients[someOne]);
    
        }
    
}

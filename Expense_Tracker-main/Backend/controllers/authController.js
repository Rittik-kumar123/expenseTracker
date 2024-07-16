const User = require('../models/UserModel');
const bcrypt = require('bcrypt');   
const saltRounds = 10;


exports.RegisterUser = async (req,res) => {
    try {

        const {Name , Email , Password} = req.body;
        console.log("the incoming body is : " , req.body);

        if(!Name || !Email || !Password){
            return res.status(400).json({
                message : "all Feilds are required"
            })
        }
        console.log("reached here")
        const hash = bcrypt.hashSync(Password, saltRounds);
        console.log("reached here")
        
        const NewUser = await User.create({
            name : Name , 
            email : Email ,
            password : hash
        })
        
        console.log("reached here" , NewUser);

    
        return res.status(201).json({
            message : "User Created Sucessfully",
            data : NewUser
        })

    } catch (error) {
        console.log("error in the auth controller" , error) ;
        res.status(410).json({
            message : "something went wrong while creating a user"
        })
    }
}
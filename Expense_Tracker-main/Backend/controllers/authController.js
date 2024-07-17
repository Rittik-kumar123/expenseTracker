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
        const hash = bcrypt.hashSync(Password, saltRounds);
        
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
        console.log("error in the auth controller in register user handler" , error) ;
        res.status(410).json({
            message : "something went wrong while creating a user"
        })
    }
}

<<<<<<< master
=======
>>>>>>> master
exports.LoginUser = async (req,res) => {
    try {

        const {Email , Password} = req.body;
        console.log("the incoming body is : " , req.body);

        if(!Email || !Password){
            return res.status(400).json({
                message : "all Feilds are required"
            })
        }


        const userDetails = await User.findOne({email : Email});
        console.log("fetched user details " , userDetails);

        if(!userDetails){
            return res.status(200).json({
                message : "This Email is Not Registered",
                result : false
            })
        }

        const result = await bcrypt.compare(Password, userDetails.password);        
        
        if(!result){
            return res.status(200).json({
                message : "Enter correct credentials",
                result
            })
        }

        return res.status(201).json({
            message : "User loggedIn Sucessfully",
            result
        })

    } catch (error) {
        console.log("error in the auth controller in login handler" , error) ;
        res.status(410).json({
            message : "something went wrong while creating a user"
        })
    }
}
const sequelize= require("../../db");
const {User}= require("../../MODELS")

//fetching all users
const todoList=()=>
    {
    return new Promise( async(resolve,reject)=>
        {
           
            const users = await User.findAll();
            resolve(users);
        })
   }


   //adding new user
const addTodo=(data)=>
    {
    return new Promise( async(resolve,reject)=>
        {console.log(data)
       const { firstName,lastName,email}=data;
       const Created= await User.create({firstName,lastName,email})
       resolve(Created);
        })
    }
    
//deleteuser
const deleteTodo=(data)=>
   {
   return new Promise( async(resolve,reject)=> 
       {
        const {Id}=data;
        const Deleted= await User.destroy({ where : { id : Id }  })
        resolve(Deleted);
      })
   }

    module.exports.methods={addTodo,todoList,deleteTodo}
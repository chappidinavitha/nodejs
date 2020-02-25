const express=require("express");
const route=express();
const Employee=require('../models/employe');
route.get('/',async(req,res) => {
    const employees=await Employee.find();
    try{
        res.status(200).json({
            error:false,
            data:employees
        });
    }catch(err){
        res.status(400).json({
            error:true,
            message:err.message
        });
    }
});
route.get('/:id',(req,res) => {
    let id=req.params.id;
    console.log(id);
    res.status(200).json({
        error:false,
        message:'get all employees' + id
    
    });
})

route.post('/',async(req,res) => {
    let emp=req.body;
    console.log(emp);
    let doc=await Employee.create(emp)
    try{
    res.status(200).json({
        error:false,
       data:document
    })
    }catch(err)
    {
        res.status(400).json({
            error:true,
            message:err.message
        });
    }
    
    
});
route.put('/:id',async(req,res) => {
    const employee=await Employee.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
if(!employee){
    res.status(404).json({
        error:true,
        message:"employee does not exists"
    })
}
try{
    res.status(200).json({
        error:false,
        data:employee
    })
    }catch(err){
      res.status(400).json({
          error:true,
          message:err.message

      })
}

});
route.delete('/',async(req,res) => {
    const employee=await Employee.findByIdAndDelete(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
if(!employee){
    res.status(404).json({
        error:true,
        message:"employee does not exists"
    })
}
try{
    res.status(200).json({
        error:false,
        data:employee
    })
    }catch(err){
      res.status(400).json({
          error:true,
          message:err.message

      })
}

});
module.exports=route;
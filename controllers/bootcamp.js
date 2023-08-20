
const ErrorResponse = require('../Utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');

async function getBootcamps(req,res,next){

 const bootcamps = await Bootcamp.find();
    res.status(200).json({
    success:true,
    message:"bootcamps retreived",
    bootcamps:bootcamps
});
  
}

async function getBootcamp(req,res,next){

    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
    
        if(!bootcamp){

            return next(
                new ErrorResponse(`bootcamp not found with id of ${req.params.id} not found`,404)
            );
         
        }
        res.status(200).json({
            success:true,
            message:"bootcamps retreived",
            bootcamps:bootcamp
            });
    } catch (error) {
        next(
            new ErrorResponse(`bootcamp not found with id of ${req.params.id}`,404)
            );
    }
  
     
   }


async function createBootcamp(req,res,next) {
    const result = await Bootcamp.create(req.body);
    res.status(201).json({
        success:true,
        message:"created",
        data:result
    });
}


function editBootcamp(req,res,next){
    res.status(200).json({
        success:true,
        message:`edit bootcamp ${req.params.id}`
    });
}


 async function updateBootcamp(req,res,next){
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
        runValidators:true,
        new :true
    });

    if(!bootcamp){
        return res.status(400).json({
            success:false
        })
    }

    res.status(200).json({
        success:true,
        bootcamp:bootcamp
    });

}

async function deleteBootcamp(req,res,next){
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id,req.body);

    if(!bootcamp){
        return res.status(400).json({
            success:false
        })
    }

    res.status(200).json({
        success:true
    });

}

module.exports = {
    getBootcamps: getBootcamps,
    createBootcamp: createBootcamp,
    editBootcamp: editBootcamp,
    updateBootcamp: updateBootcamp,
    getBootcamp : getBootcamp,
    deleteBootcamp:deleteBootcamp
};
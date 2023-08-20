const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');

const BootcampSchema = new mangoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name'],
        unique:true,
        trim:true,
        maxLength:[50,'Name can not be more than 50 characters']
    },
    slug:String,
    description:{
        type:String,
        required:[true,'Please add a name'],
        trim:true,
        maxLength:[500,'Name can not be more than 500 characters']
    },
    website:{
        type:String,
    },
    phone:{
        type:String,
        maxLength:[20,'phone can not be longer than 20 numbers']
    },
    address:{
        type:String,
        required : [true,'please add an address']
    },
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: false
        },
        coordinates: {
          type: [Number],
          required: false
        },
        formattedAddress : String,
        street : String,
        city : String,
        state : String,
        zipcode : String,
        country : String
      },
      careers:{
        type:[String],
        required: true,
        enum:[
            'Web Development',
            'Mobile development',
            'UI/UX',
            'Business',
            'Others'
        ]
      },
      averageRating:{
        type:Number,
        min:[1,'Rating must be 1 or more'],
        max:[10,'Rating must be less than 10']
      },
      averageCost:Number,
      photo:{
        type:String,
        default:'no-photo.jpg'
      },
      housing:{
        type:Boolean,
        default:false
      },
      jobAssistance:{
        type:Boolean,
        default:false
      },
      jobGuarantee:{
        type:Boolean,
        default:false
      },
      acceptGi:{
        type:Boolean,
        default:false
      },
      createdAt:{
        type:Date,
        default:Date.now
      }

});

module.exports = mongoose.model('Bootcamp',BootcampSchema);
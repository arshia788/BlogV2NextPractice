import { Schema, model, models } from "mongoose";

const userSchema= new Schema({

    blog_name:{
        type:String,
        required:true
    }
    ,
    username:{
        type:String,
        required:true
    },
    displayname:{
        type:String,
        required:true
    }
    ,
    details:{
        type:String,
        default:''
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    },

    default_image:{
        type:String,
        required:true
    }
    ,
    image:{
        type:String,
        default:'',
    }
    ,
    role:{
        type:Number,
        required:true,
        enum:[1,2,3,4],
        default:3
    },
    active_code:{
        type:Number,
        required:true
    },

    active_code_number:{
        type:Number,
        required:true,
        default:5
    },
    user_is_active:{
        type:Boolean,
        required:true,
        default:false
    },

    viewed:{
        type:Boolean,
        required:true,
        default:false,
    }
    ,
    liked_posts:{
        type:Array,
        required:true,
        default:[]
    },
    bookmarked_posts:{
        type:Array,
        required:true,
        default:[]
    },
    followings:{
        type:Array,
        required:true,
        default:[]
    },
    notifications:{
        type:Array,
        required:true,
        default:[]
    },
    
    token:{
        type:String,
        // required:true,
        default:''
    },








})


const User= models.User || model("User", userSchema);

export default User;





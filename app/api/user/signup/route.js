import connectDB from "utils/connectDB";

import User from "models/User";
import { NextResponse } from "next/server";
import { hashPassword } from "utils/auth";

import  Jwt  from "jsonwebtoken";
import {cookies} from 'next/headers'
import bcrypt from 'bcrypt';


export async function POST(req){
    try {
        await connectDB()

        const body= await req.json();
        const {username, displayname, blog_name, phone, password}= body;

        if(username.length <8 || username.length >20){
            return NextResponse.json({status:401},
            {data:"the length of the usernmae shoudl be more than 8 and less than 20 characters"}    
            )
        }

        if(displayname.length <6 || displayname.length > 20){
            return NextResponse.json({status:401},
                {data:"the length of the usernmae shoudl be more than 6 and less than 20 characters"}    
            )
        }

        if(blog_name.length <6 || blog_name.length > 20){
            return NextResponse.json({status:401},
                {data:"the length of the usernmae shoudl be more than 6 and less than 20 characters"}    
            )
        }

        if(phone.length !==10){
            return NextResponse.json({status:401}, 
            {data:"your phone number should be exactly 10 numbers"}    
            )
        }

        if(phone.length <0){
            return NextResponse.json({status:401}, 
            {data:"you should enter a number"}    
            )
        };

        // FIND UNIQUE RPOPERTIES
        const findPhone= await User.findOne({phone})
        if(findPhone) return NextResponse.json({status:402, data:"Enter another phone number!"} )

        const findUsername= await User.findOne({username})
        if(findUsername) return NextResponse.json({status:402,data:"Enter another Username!"})
        
        const findBlog_name= await User.findOne({blog_name})
        if(findBlog_name) return NextResponse.json({status:402},{data:"Enter another Blog_name!"})
        
        
        // CONVERT PASSWORD & USERNAME. 
        const newUsername= username.replace(/\s+/g,'-').toLowerCase();

        const newPassword= password.replace(/\s+/g,'').toLowerCase();

        function generateRandoNumber(n){
            return Math.floor(Math.pow(10, n-1) + (Math.random()* 9* Math.pow(10, n-1)))
        }

        const active_code= generateRandoNumber(6);


        // hash
        const hashedPassword= await bcrypt.hash(newPassword, 13);

        const date= new Date();
        
        const userFullData={

            blog_name:blog_name,
            username:newUsername,
            displayname:displayname,
            password:hashedPassword,
            phone:phone,
            createdAt: date.toLocaleDateString("fa-IR",{year:"numeric", month:'long', day:'numeric'}),

            default_image:`https://avatars.dicebear.com/api/bottts/${newUsername}.svg`,


            role:3,
            active_code:active_code,
            active_code_number:5,
            user_is_active:false,
            viewed:false,
            liked_posts:[],
            bookmarked_posts:[],
            followings:[],
            notifications:[],
            token:"",
        };

        // CREATE USER 

        const createdUserData= await User.create(userFullData);

        
        // token ro sakhti 
        const createdToken= Jwt.sign({_id:createdUserData._id, username:createdUserData.username}, process.env.TOKEN_SECRET);

        const userToken= {
            token:createdToken
        };

        await User.findByIdAndUpdate(createdUserData._id, userToken, {new:true});


        // SETTING TOKEIN IN COOKIE
        const cookieStore= cookies();
        cookieStore.set("token", createdToken, {maxAge:60*60* 24* 60} );


        const send_data={
            userloged:true,
            role:3,
            user_is_active:false,
            userImage:userFullData.default_image,
            blog_slug:userFullData.username
        }


        return NextResponse.json(
            {data:send_data},
            {status:201},
            {message:'user created'},
            
        )
        

    } catch (error) {
        return NextResponse.json({status:401, message:"Failed to create a user"})
    }
}



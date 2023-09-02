import User from "models/User";
import { NextResponse } from "next/server";
import { hashPassword } from "utils/auth";
import connectDB from "utils/connectDB";

import  Jwt  from "jsonwebtoken";
import {cookies} from 'next/headers'

export async function POST(req){
    try {
        // console.log('adoiadw');
        await connectDB()

        const body= await req.json();
        console.log(body);
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
        if(findBlog_name) return NextResponse.json({status:402,data:"Enter another Blog_name!"})
        
        
        // CONVER PASSWORD & USERNAME. 
        const newUsername= username.replace(/\s+/g,'-').toLowerCase();
        const newPassword= password.replace(/\s+/g,'').toLowerCase();

        function generateRandoNumber(n){
            return Math.floor(Math.pow(10, n-1) + (Math.random()* 9* Math.pow(10, n-1)))
        }

        const active_code= generateRandoNumber(6);


        // hash
        const hashedPassword= await hashPassword(newPassword);

        const userFullData={

            blog_name:blog_name,
            username:newUsername,
            displayname:displayname,
            password:hashedPassword,
            phone:phone,
            createdAt: "1403/3/3" ,

            // baray in gofti newUsername ta baid bar asas har name axe ha ro avaz bokoneh. 
            default_image:`https://avatars.dicebear.com/api/bottts/${newUsername}.svg`,

            // kasi ke signup kardan 3 hast 
            // onai ke signup nakardan 4 hastan 

            role:3,
            active_code:active_code,
            active_code_number:5,
            user_is_active:false,
            // in ro mizari false ta admin biad motavageh besheh ke aya karbar jadidi be site omadeh ya na.

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
        const createdToken= Jwt.sign({_id:createdUserData._id, username:createdUserData.name}, process.env.TOKEN_SECRET);

        const userToken={
            token:createdToken
        };

        // * Adding token to user model.

        await User.findByIdAndUpdate(createdUserData._id,userToken ,{new:true});
        


        const cookieStore= cookies();
        cookieStore.set('token', createdToken);

        const send_data={
            userloged:true,
            role:3,
            user_is_active:false,
            userImage:userFullData.default_image,
            blog_slug:userFullData.username
        }


        return NextResponse.json(
            {data:send_data, message:"User created"},
            {status:201}
        )
        

    } catch (error) {
        console.log(error);
        return NextResponse.json({status:401, message:"Failed to create a user"})
    }
}



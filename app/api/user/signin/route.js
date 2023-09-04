import connectDB from "utils/connectDB";

import User from "models/User";
import { NextResponse } from "next/server";

import {cookies} from 'next/headers'
import bcrypt from 'bcrypt';


export async function POST(req){
    try {
        await connectDB()

        const body= await req.json();
        const {phone, password}= body;

       

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
        if(!findPhone) return NextResponse.json({status:402, data:"you don't have an account!"})

        const userFullData= await User.findOne({phone})

        if(!userFullData) return NextResponse.json({status:402, data:"No user exists"})

        const checkPassword= await bcrypt.compare(password, userFullData.password);

        if(!checkPassword) return NextResponse.json({data:"Password is wrong."});


        const createdToken= userFullData.token;



        // SETTING TOKEIN IN COOKIE
        const cookieStore= cookies();
        cookieStore.set("token", createdToken, {maxAge:60*60* 24* 60});


        const send_data={
            role:userFullData.role,
            user_is_active:userFullData.user_is_active,
            userImage:userFullData.default_image,
            blog_slug:userFullData.username
        }


        return NextResponse.json(
            {data:send_data},
            {status:200},
            {message:'user created'},
            
        )
        

    } catch (error) {
        return NextResponse.json({status:401, message:"Failed to create a user"})
    }
}



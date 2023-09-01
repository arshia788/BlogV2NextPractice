import User from "models/User";
import { NextResponse } from "next/server";
import connectDB from "utils/connectDB";


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

    } catch (error) {
        return NextResponse.json({status:401})
    }
}



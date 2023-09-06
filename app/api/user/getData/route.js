import connectDB from "utils/connectDB";
import User from "models/User";
import { NextResponse } from "next/server";


export async function GET(req){

    try {

        connectDB();

        const user_id = req.headers.get('user-id');

        const userData= await User.findOne({_id:user_id}).select({username:1, blog_name:1, displayname:1});
        

        return NextResponse.json({data:userData} , {status:200})
        
    } catch (error) {
        
        return NextResponse.json({error:'failed recieve the data'})
    }

}









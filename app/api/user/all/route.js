import User from "models/User";
import { NextResponse } from "next/server";
import connectDB from "utils/connectDB";


export async function GET(req){

    try {
        await connectDB()
        const users= await User.find();
        return NextResponse.json({users})
        
    } catch (error) {
        return NextResponse.json('error')
    }  


}



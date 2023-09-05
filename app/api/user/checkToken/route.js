
import { NextResponse } from "next/server";
import connectDB from "utils/connectDB";
import User from "models/User";
import Jwt from "jsonwebtoken";

export async function GET(req) {

    let send_data = {
        loged: false,
        role: 4,
        user_is_active: false,
        user_image: '',
        blog_slug:''
    }

    try {
        connectDB()
        const token = req.headers.get("token");

        const x= process.env.TOKEN_SECRET

        const verified =  Jwt.verify(token, process.env.TOKEN_SECRET)
        console.log('-------------', verified);


        const userFullData = await User.findById(verified._id);

        send_data = {
            loged: true,
            role: userFullData.role,
            user_is_active: userFullData.user_is_active,
            user_image: userFullData.default_image,
            blog_slug:userFullData.blog_name
        }

        return NextResponse.json({ data: send_data });

    } 
    catch (error) {

        // console.log(error);
        return NextResponse.json({ data: "failed to connect" }, { status: 200 });

    }

}



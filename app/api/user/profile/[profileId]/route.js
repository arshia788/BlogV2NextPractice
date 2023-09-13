import User from "models/User";
import connectDB from "utils/connectDB";
import { NextResponse } from "next/server";


export async function GET(req,{params}){

    try {
        connectDB()
        const userId= params.profileId;

        const userData= await User.findOne({username:userId});
        console.log(userData);

        const newData={
            blog_name:userData.blog_name,
            image:userData.image == '' ?userData.default_image:userData.image,
            details:userData.details
        }


        return NextResponse.json({data:newData}, {status:200})

    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {data:"Failed to connect from the profileID"},
            {status:500}
        )
    }


}


import { NextResponse } from "next/server";

import connectDB from "utils/connectDB";
import User from "models/User";


import { existsSync } from 'fs'
import fs from 'fs/promises'
import path from 'path'


export async function POST(req) {

    const newData={
        image:undefined
    };

    try {
        connectDB();

        const user_id= await req.headers.get('user-id');
        
        const formData = await req.formData();
        const file = formData.get('file');

        if(!file){
            return NextResponse.json(
                {data:'please enter file'},{status:400}
            )
        }

        if(file.size < 1){
            return NextResponse.json(
                {data:'please enter file'},{status:400}
            )
        }

        if(file.type < 1){
            return NextResponse.json(
                {data:'please enter file'},{status:400}
            )
        }

        const fileDestination= path.join(process.cwd(), 'public/uploads')
        const fileArrayBuffer= await file.arrayBuffer();

        if(!existsSync(fileDestination)){
            fs.mkdir(fileDestination, {recursive:true})
        };

        const fileName= Date.now() + file.name;
        const fileUrl = fileDestination + '/' + fileName;

        await fs.writeFile(
            path.join(fileDestination, fileName),
            Buffer.from(fileArrayBuffer)
        )

        newData.image= fileUrl
        

        await User.findByIdAndUpdate(user_id, newData, {new:true})

        return NextResponse.json(
            {data:"User Image updated"},
            {status:200}
        )
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {data:'failed to update the user image'},
            {status:402}
        )
    }




}










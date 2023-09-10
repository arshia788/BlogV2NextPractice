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
  
        const formData = await req.formData();
  
        const file = formData.get("file");
        if (!file) {
           return NextResponse.json({}, { status: 400 });
        }
        if (file.size < 1) {
           return NextResponse.json({ data: " please select a file  " }, { status: 400 });
        }
        if (file.size > 2000000) {
           return NextResponse.json({ data: "it should be less than 2mb" }, { status: 400 });
        }
  
      //   in ham baray type on file hast 
        if (file.type!="image/jpeg" && file.type!="image/jpg" && file.type!='image/png' ) {
           return NextResponse.json({ data: "Only supports jpeg/jpg/png" }, { status: 400 });
        }
        
  
        const destinationDirPath = path.join(process.cwd(), "public/uploads");
        const fileArrayBuffer = await file.arrayBuffer();
  
  
        if (!existsSync(destinationDirPath)) {
           fs.mkdir(destinationDirPath, { recursive: true });
        }
  
  
        const newname = Date.now() + file.name;
  
          // inja omadi faght gofti uploads chon niazi be goftan public nist  
        const fileUrl = "/uploads/" + newname;
  
        await fs.writeFile(
           path.join(destinationDirPath, newname),
           Buffer.from(fileArrayBuffer)
        );
  
        const newData={
           image:fileUrl
        }
        const user_id = req.headers.get("user-id");
        await User.findByIdAndUpdate(user_id, newData, { new: true })
  
        return NextResponse.json({ data: "User image Updated" }, { status: 200 });
  
       
     } catch (error) {
        console.log(error);
        return NextResponse.json({ data: "خطا ", }, { status: 401 });
     }
  
}
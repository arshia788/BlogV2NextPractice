import User from "models/User";
import { NextResponse } from "next/server";
import connectDB from "utils/connectDB";
import bcrypt from 'bcrypt'

export async function POST(req) {

    try {

        connectDB();
        
        const user_id = req.headers.get('user-id');

        const inputData = await req.json();


        const newData = {
            username: undefined,
            blog_name: undefined,
            displayname: undefined,
            password: undefined,
        }

        console.log(inputData);

        // ?username
        if (inputData.username !==undefined) {
            if (!/^[\w\d\s-]+$/.test(inputData.username)) {
                return NextResponse.json(
                    { data: " only english words is accepted", }, 
                    { status: 401 }
                );
            }

            if (inputData.username.length < 8 || inputData.username.length > 20) {
                return NextResponse.json(
                    { data: "the length of the usernmae shoudl be more than 8 and less than 20 characters"}
                    ,
                    { status: 401 }
                )
            }
            const newUsername = inputData.username.replace(/\s+/g, '-').toLowerCase();

            newData.username = newUsername;
        }


        // ? BLOG_NAME  
        if (inputData.blog_name !==undefined) {

            if (inputData.blog_name.length < 6 || inputData.blog_name.length > 20) {
                return NextResponse.json({ status: 401 },
                    { data: "the length of the usernmae shoudl be more than 6 and less than 20 characters" }
                )
            }

            const findBlog_name = await User.findOne({ blog_name:inputData.blog_name })
            if (findBlog_name) return NextResponse.json({ status: 402 }, { data: "Enter another Blog_name!" })
            
            newData.blog_name = inputData.blog_name;
        }

        // ? DISPLAYNAME--
        if (inputData.displayname !==undefined) {

            if (inputData.displayname.length < 6 || inputData.displayname.length > 20) {
                return NextResponse.json({ status: 401 },
                    { data: "the length of the usernmae shoudl be more than 6 and less than 20 characters" }
                )
            }

            newData.displayname = inputData.displayname
        }


        // ?PASSWORD
        if (inputData.password !==undefined) {

            if (inputData.password.length < 8 || inputData.password.length > 24) {
                return NextResponse.json({ data: "there shoudl be at least 8 characters and no more than 20" }, { status: 402 });
            }
            
            const newPassword= inputData.password.replace(/\s+/g,'').toLowerCase();

            const hashedPassword= await bcrypt.hash(newPassword, 13)

            newData.password=hashedPassword

        }



        await User.findByIdAndUpdate(user_id, newData, { new: true });

        return NextResponse.json({ data: 'User updated' }, {status:200})
    } catch (error) {

        console.log(error);
        return NextResponse.json({ error: "failed to update from DB." })
    }
}


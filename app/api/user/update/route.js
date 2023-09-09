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
        if (inputData.username !== undefined) {

            if (!/^[\w\d\s-]+$/.test(inputData.username)) {
                return NextResponse.json(
                    { data: " only english words is accepted", }, 
                    { status: 401 }
                );
            }

            if (inputData.username.length < 4 || inputData.username.length > 40) {
                return NextResponse.json(
                    { data: "the length of the usernmae shoudl be more than 8 and less than 20 characters"}
                    ,
                    { status: 402 }
                )
            }
            
            const usernameFound= await User.findOne({username:inputData.username})

            if(!usernameFound || usernameFound._id === user_id){
                
                const newUsername = inputData.username.replace(/\s+/g, '-').toLowerCase();

                newData.username = newUsername;
            }else{
                return NextResponse.json(
                    {data:"please enter another name."},
                    {status:402}
                )
            }

        }

        // ? BLOG_NAME  
        if (inputData.blog_name !==undefined) {


            if (inputData.blog_name.length < 6 || inputData.blog_name.length > 20) {
                console.log('bug');
                return NextResponse.json(
                    { data: "the length of the usernmae shoudl be more than 6 and less than 20 characters" },
                    { status: 402 },
                )
            }

            const findBlog_name = await User.findOne({ blog_name:inputData.blog_name })
            console.log(findBlog_name);

            if(!findBlog_name || findBlog_name._id === user_id){
                newData.blog_name = inputData.blog_name;
            }
            else{
                return NextResponse.json(
                    {data:"please enter another blog_name."},
                    {status:402}
                )
            }
        }


        // ? DISPLAYNAME--
        if (inputData.displayname !==undefined) {

            console.log('OkO');
            
            if (inputData.displayname.length < 6 || inputData.displayname.length > 20) {
                return NextResponse.json(
                    { data: "the length of the displayname shoudl be more than 6 and less than 20 characters" },
                    { status: 401 },
                )
            }

            const displaynameFound= await User.findOne({displayname:inputData.displayname});

            if(!displaynameFound || displaynameFound._id === user_id){
                newData.displayname= inputData.displayname
            }else{
                return NextResponse.json(
                    {data:"please enter another displayname."},
                    {status:402}
                )
            }


        }


        // ?PASSWORD
        if (inputData.password !== undefined) {

            if (inputData.password.length < 8 || inputData.password.length > 24) {

                console.log('asdlkasdlasd');
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
        return NextResponse.json({ data: "failed to update from DB." }, {status:400})
    }
}


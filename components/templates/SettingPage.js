'use client';

import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


// hot-toast
import { toast, Toaster } from 'react-hot-toast';


// loading spinner---
import { ThreeCircles } from 'react-loader-spinner'


export default function SettingPage({ token }) {

    const [defaultValue, setDefaultValue] = useState(null);
    const [isLoading, setIsloading] = useState(true);

    console.log(defaultValue);
    
    const [defaultImageUser,setDefaultImageUser ]= useState('');

    const usernameRef = useRef();
    const blog_nameRef = useRef();
    const displaynameRef = useRef();
    const passwordRef = useRef();

    console.log(defaultImageUser);

    useEffect(() => {

        axios.get('/api/user/getData', { headers: { token } })

            .then(data => {
                setIsloading(false)
                setDefaultValue(data.data.data)
            })

            .catch(error => {
                console.log(error);
            })
    }, [])

    // const updater=(e)=>{
    //     e.preventDefault();


    //     const formData={
    //         username:usernameRef.current.value === ""? undefined :usernameRef.current.value,

    //         blog_name:blog_nameRef.current.value ===""? undefined :blog_nameRef.current.value,

    //         displayname:displaynameRef.current.value ===""? undefined :displaynameRef.current.value,

    //         password:passwordRef.current.value===""? undefined :passwordRef.current.value ,
    //     }


    //     axios.post('/api/user/update', formData,{headers:{token}})


    //     .then(data=>{
    //         console.log(data.data.data);
    //         toast.success(data.data.data)
    //     })

    //     .catch(error=>{
    //         toast.error(error.response.data.data)
    //         console.log(error.response.data.data);
    //     })

    // }


    const usernameUpdater = (e) => {
        e.preventDefault()

        const formData = {
            username: usernameRef.current.value == "" ? undefined : usernameRef.current.value,

        };

        axios.post('/api/user/update', formData, { headers: { token } })

            .then(data => {
                console.log(data.data.data);
                toast.success(data.data.data)
            })

            .catch(error => {
                toast.error(error.response.data.data)
                console.log(error.response.data.data);
            })
    }

    const blognameUpdater = (e) => {
        e.preventDefault()

        const formData = {
            blog_name: blog_nameRef.current.value == "" ? undefined : blog_nameRef.current.value,

        };

        axios.post('/api/user/update', formData, { headers: { token } })

            .then(data => {
                console.log(data.data.data);
                toast.success(data.data.data)
            })

            .catch(error => {
                toast.error(error.response.data.data)
                console.log(error.response.data.data);
            })
    }

    const displaynameUpdater = (e) => {
        e.preventDefault()

        const formData = {
            displayname: displaynameRef.current.value == "" ? undefined : displaynameRef.current.value,

        };

        axios.post('/api/user/update', formData, { headers: { token } })

            .then(data => {
                console.log(data.data.data);
                toast.success(data.data.data)
            })

            .catch(error => {
                toast.error(error.response.data.data)
                console.log(error.response.data.data);
            })
    }


    const passwordUpdater = (e) => {
        e.preventDefault()

        const formData = {
            passwrod: passwordRef.current.value == "" ? undefined : passwordRef.current.value,

        };

        axios.post('/api/user/update', formData, { headers: { token } })

            .then(data => {
                console.log(data.data.data);
                toast.success(data.data.data)
            })

            .catch(error => {
                toast.error(error.response.data.data)
                console.log(error.response.data.data);
            })
    }

    const imageUpdater=(e)=>{
        e.preventDefault();


        axios.post('/api/user/update-image', e.target,{headers:{token}})

        .then(data=>{
            console.log(data.data.data);
            toast.success(data.data.data)
        })

        .catch(err=>{
            console.log(err.response.data);
        })
    }



    return (
        <div className="flex justify-center items-center ">

            {
                isLoading ?
                    <ThreeCircles
                        height="100"
                        width="100"
                        color="#0f5ee0"
                        wrapperStyle={{ marginTop: '100px' }}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                    />
                    :
                    <div className="flex flex-col gap-12 w-[50%] mx-auto my-8">
                        
                        <div className="flex flex-col gap-4">
                            <label>Weblog-Picture</label>

                            <div className="flex justify-start items-center gap-4">

                                <div className="relative w-[90px] h-[90px] min-w-[90px]">

                                    <Image 
                                    src={defaultValue.image !== '' ? defaultValue.image: defaultValue.default_image}
                                    fill
                                    className="object-cover rounded-full"
                                    alt="userprofile" />
                                </div>

                                <form onSubmit={imageUpdater} className="flex justify-start items-center gap-x-4">

                                    <input 
                                    onChange={
                                        (e)=> setDefaultImageUser(e.target.files[0].name)
                                    }
                                    type="file" name="file" id="file"
                                    className="w-0"
                                    />
                                    <label className="bg-pink-500 text-white px-3 py-1 rounded cursor-pointer" htmlFor="file">
                                        {
                                            defaultImageUser === "" ?
                                            'Select a new Picture'
                                            :
                                            "Upload the image"
                                        }
                                    </label>

                                    <button
                                    type="submit"
                                    className="bg-blue-700 text-white px-3 py-1 rounded"
                                    >Upload-Img
                                    </button>

                                </form>


                            </div>

                        </div>

                        <div className="flex flex-col gap-4">

                            <label>Username</label>

                            <div className="flex justify-between items-center ">
                                <input
                                    defaultValue={defaultValue.username}
                                    ref={usernameRef} type="text"
                                    className="outline-none sm lg:w-[400px] p-1 border-b-2 border-b-blue-400 focus:border-b-blue-700" />

                                <button
                                    onClick={usernameUpdater}
                                    type="submit"
                                    className=" bg-pink-500 px-3 py-1 rounded text-white "
                                >Update</button>

                            </div>

                        </div>


                        <div className="flex flex-col gap-4">
                            <label>Blog_name</label>

                            <div className="flex justify-between items-center ">
                                <input
                                    defaultValue={defaultValue.blog_name}
                                    ref={blog_nameRef} type="text"
                                    className="outline-none sm lg:w-[400px] p-1 border-b-2 border-b-blue-400 focus:border-b-blue-700" />

                                <button
                                    onClick={blognameUpdater}
                                    type="submit"
                                    className=" bg-pink-500 px-3 py-1 rounded text-white "
                                >Update</button>

                            </div>

                        </div>

                        <div className="flex flex-col gap-4">
                            <label>displayname</label>
                            <div className="flex justify-between items-center ">
                                <input
                                    defaultValue={defaultValue.displayname}
                                    ref={displaynameRef} type="text"
                                    className="outline-none sm lg:w-[400px] p-1 border-b-2 border-b-blue-400 focus:border-b-blue-700" />

                                <button
                                    onClick={displaynameUpdater}
                                    type="submit"
                                    className=" bg-pink-500 px-3 py-1 rounded text-white "
                                >Update</button>

                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <label>password</label>
                            <div className="flex justify-between items-center ">
                                <input
                                    ref={passwordRef} type="text"
                                    className="outline-none sm lg:w-[400px] p-1 border-b-2 border-b-blue-400 focus:border-b-blue-700" />

                                <button
                                    onClick={passwordUpdater}
                                    type="submit"
                                    className=" bg-pink-500 px-3 py-1 rounded text-white "
                                >Update</button>

                            </div>

                        </div>

                    </div>

            }


            <Toaster />
        </div>
    )
}

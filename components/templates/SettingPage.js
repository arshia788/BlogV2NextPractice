'use client';

import axios from "axios";
import { useEffect, useRef, useState } from "react";


// hot-toast
import {toast, Toaster} from 'react-hot-toast';


// loading spinner---
import {ThreeCircles} from 'react-loader-spinner'


export default function SettingPage({ token }) {

    const [defaultValue, setDefaultValue] = useState(null);
    const [isLoading, setIsloading] = useState(true);


    const usernameRef = useRef();
    const blog_nameRef = useRef();
    const displaynameRef = useRef();
    const passwordRef = useRef();



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

    const updater=(e)=>{
        e.preventDefault();

        
        const formData={
            username:usernameRef.current.value === ""? undefined :usernameRef.current.value,
            
            blog_name:blog_nameRef.current.value ===""? undefined :blog_nameRef.current.value,
            
            displayname:displaynameRef.current.value ===""? undefined :displaynameRef.current.value,
            
            password:passwordRef.current.value===""? undefined :passwordRef.current.value ,
        }


        axios.post('/api/user/update', formData,{headers:{token}})
        

        .then(data=>{
            console.log(data.data.data);

            // toast.success(data.data.data)
        })
        
        .catch(error=>{
            console.log(error.response.data);
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
                        wrapperStyle={{marginTop:'100px'}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                    />
                    :
                    <div className="flex flex-col gap-6 w-[50%] mx-auto my-8">

                    <div className="flex flex-col gap-4">
                        <label>Username</label>
                        <input 
                        defaultValue={defaultValue.username}
                        ref={usernameRef} type="text" 
                        className="outline-none rounded p-1 w-full border-2 border-blue-700" />
                    </div>
    
                    <div className="flex flex-col gap-4">
                        <label>Blog_name</label>
                        <input
                        defaultValue={defaultValue.blog_name}
                        ref={blog_nameRef} type="text" className="outline-none rounded p-1 w-full border-2 border-blue-700" />
                    </div>
    
                    <div className="flex flex-col gap-4">
                        <label>displayname</label>
                        <input 
                        defaultValue={defaultValue.displayname}
                        ref={displaynameRef} 
                        type="text" className="outline-none rounded p-1 w-full border-2 border-blue-700" />
                    </div>
    
                    <div className="flex flex-col gap-4">
                        <label>password</label>
                        <input 
                        ref={passwordRef} 
                        type="text" 
                        className="outline-none rounded p-1 w-full border-2 border-blue-700" />

                    </div>
    
                    <button
                        onClick={updater}
                        type="submit"
                        className="w-full bg-pink-500 mt-6 rounded text-white text-center px-3 py-1">Submit changes</button>
                </div>
    
            }

        
        <Toaster />
        </div>
    )
}

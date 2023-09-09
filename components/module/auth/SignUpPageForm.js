'use client';

import axios from 'axios';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// redux
import { useDispatch} from 'react-redux';

// actions-redux
import { checkingLogged } from 'redux/feaures/logeedSlice';
import { setRoleValue } from 'redux/feaures/roleSlice';
import { setUserImageSlice } from 'redux/feaures/userImageSlice';
import { useEffect, useState } from 'react';


export default function SignUpPageForm() {


  const router= useRouter();
  const dispatch= useDispatch();
  const [userBlog, setUserBlog]= useState('');

  useEffect(()=>{
    if(userBlog) router.push(`/profile/signup/${userBlog}`)
  },[userBlog])





  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const signUper = () => {

    const formatData = {
      username: watch('username'),
      displayname: watch('displayname'),
      blog_name: watch('blog_name'),
      phone: watch('phone'),
      password: watch('password'),
    }
    toast.info('please wait...', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,

      closeOnClick: true,

      pauseOnHover: true,

      draggable: true,

      progress: undefined,
    })
    
    axios.post('/api/user/signup', formatData)

    
    .then(data => {

        if (data.data.data.userImage) {

          dispatch(setRoleValue(3))
          dispatch(checkingLogged(true))
          dispatch(setUserImageSlice(data.data.data.userImage))
          setUserBlog(data.data.data.blog_slug)

          toast.success("User created!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,

            closeOnClick: true,

            pauseOnHover: true,

            draggable: true,

            progress: undefined,
          })

        }


        else{
          toast.error(data.data.data, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,

            closeOnClick: true,

            pauseOnHover: true,

            draggable: true,

            progress: undefined,
          })
        }

      })


      .catch(err => {

      })
  }

  const checkForms = {
    username: watch('username') || '',
    displayname: watch('displayname') || '',
    blog_name: watch('blog_name') || '',
    phone: watch('phone') || '',
    password: watch('password') || '',
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(signUper)}
        className="bg-zinc-100 p-4 rounded-sm  border border-dashed border-blue-700 w-[330px]">

        <h2 className="text-center text-lg font-semibold mb-3 border-b border-b-blue-500 ">Sign-Up Form</h2>

        <div className='flex flex-col '>

          <div className='flex flex-col gap-y-3 h-[80px] min-h-[80px]'>

            <input
              autoComplete='off'
              type="text"
              placeholder="userName..."
              className="rounded w-full shadow-[0px_10px_5px_rgba(0,0,0,0.45)] outline-none p-2 border focus:border-dashed focus:border-pink-500"
              {...register('username', {
                required: true,
                minLength: 8,
                maxLength: 20
              })}
            />

            {
              errors.username && errors.username.type === 'required' && (<div className='text-rose-500 '>This filed is required</div>)
              ||
              errors.username && errors.username.type === 'minLength' && (<div className='text-rose-500 '>characters should be more than 8</div>)
              ||
              errors.username && errors.username.type === 'maxLength' && (<div className='text-rose-500 '>characters should be less than 20</div>)
            }
          </div>

          <div className='flex flex-col gap-y-3 h-[80px] min-h-[80px]'>

            <input type="text"
              autoComplete='off'
              placeholder="display-name..."
              className="rounded w-full shadow-[0px_10px_5px_rgba(0,0,0,0.45)] outline-none p-2 border focus:border-dashed focus:border-pink-500"
              {...register('displayname', {
                required: true,
                minLength: 6,
                maxLength: 20
              })}
            />
            {
              errors.displayname && errors.displayname.type === 'required' && (<div className='text-rose-500 '>This filed is required</div>)
              ||
              errors.displayname && errors.displayname.type === 'minLength' && (<div className='text-rose-500 '>characters should be more than 6</div>)
              ||
              errors.displayname && errors.displayname.type === 'maxLength' && (<div className='text-rose-500 '>characters should be less than 20</div>)
            }

          </div>

          {/* blog_name */}
          <div className='h-[80px] min-h-[80px] flex flex-col gap-y-3'>

            <input type="text"
              autoComplete='off'
              placeholder="weblogName..."
              className="rounded w-full shadow-[0px_10px_5px_rgba(0,0,0,0.45)] outline-none p-2 border focus:border-dashed focus:border-pink-500"
              {...register('blog_name', {
                required: true,
                minLength: 6,
                maxLength: 20
              })}
            />

            {
              errors.blog_name && errors.blog_name.type === 'required' && (<div className='text-rose-500 '>This filed is required</div>)
              ||
              errors.blog_name && errors.blog_name.type === 'minLength' && (<div className='text-rose-500 '>characters should be more than 6</div>)
              ||
              errors.blog_name && errors.blog_name.type === 'maxLength' && (<div className='text-rose-500 '>characters should be less than 20</div>)
            }

          </div>

          {/* phone */}
          <div className='h-[80px] min-h-[80px] flex flex-col gap-y-3'>

            <input type="text"
              autoComplete='off'
              placeholder="phone-number"
              className="rounded w-full shadow-[0px_10px_5px_rgba(0,0,0,0.45)] outline-none p-2 border focus:border-dashed focus:border-pink-500"
              {...register('phone', {
                required: true,
                minLength: 10,
                maxLength: 10
              })}
            />

            {
              errors.phone && errors.phone.type === 'required' && (<div className='text-rose-500 '>This filed is required</div>)
              ||
              errors.phone && errors.phone.type === 'minLength' && (<div className='text-rose-500 '>should be only 10 numbers!</div>)
              ||
              errors.phone && errors.phone.type === 'maxLength' && (<div className='text-rose-500 '>should be only 10 numbers!</div>)
            }

          </div>

          {/* password */}
          <div className='h-[80px] min-h-[80px] flex flex-col gap-y-3'>

            <input type="password"
              autoComplete='off'
              placeholder="password..."
              className="rounded w-full shadow-[0px_10px_5px_rgba(0,0,0,0.45)] outline-none p-2 border focus:border-dashed focus:border-pink-500"
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 20
              })}
            />

            {
              errors.password && errors.password.type === 'required' && (<div className='text-rose-500 '>This filed is required</div>)
              ||
              errors.password && errors.password.type === 'minLength' && (<div className='text-rose-500 '>characters should be more than 6</div>)
              ||
              errors.password && errors.password.type === 'maxLength' && (<div className='text-rose-500 '>characters should be less than 20</div>)
            }

          </div>

        </div>

        <p className='flex justify-center  items-center'>
          Have An Account?
          <Link
            className='text-blue-700 ml-2'
            href={'/signin'}>
            SignIn
          </Link>
        </p>

        <button
          type='submit'
          className={
            checkForms.username.length > 0 &&
              checkForms.displayname.length > 0 &&
              checkForms.blog_name.length > 0 &&
              checkForms.phone.length > 0 &&
              checkForms.password.length > 0
              ?
              'bg-blue-700 hover:bg-blue-800 w-full transition-all duration-300 p-2 rounded text-white cursor-pointer mt-5'
              :
              'bg-blue-400 hover:bg-blue-500 w-full transition-all duration-300 p-2 rounded text-white cursor-pointer mt-5'
          }
        >Submit</button>


      </form>
    </>
  )
}

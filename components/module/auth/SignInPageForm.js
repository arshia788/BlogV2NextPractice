'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';

// toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// redux
import { useDispatch, useSelector } from 'react-redux';

// reudx-slices---
import usernameSlice from 'redux/feaures/usernameSlice';

// redux--actions
import { setUserImageSlice } from 'redux/feaures/userImageSlice';
import { setRoleValue } from 'redux/feaures/roleSlice';
import { checkingLogged } from 'redux/feaures/logeedSlice';
import { setUsername } from 'redux/feaures/usernameSlice';

export default function SignInPageForm() {

  const router = useRouter();
  const dispatch= useDispatch();
  const nameStore= useSelector(store=> store.usernameSlice.name)


  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const signUper = async () => {

    const formatData = {
      phone: watch('phone'),
      password: watch('password'),
    }

    const res = await fetch('/api/user/signin', {
      method: "POST",
      body: JSON.stringify(formatData),
      headers: { "Content-Type": 'application/json' }
    })
    const data = await res.json()

    if (data.data.userImage) {
      dispatch(setUserImageSlice(data.data.userImage))
      dispatch(setRoleValue(data.data.role))
      dispatch(checkingLogged(data.data.logged))
      dispatch(setUsername(data.data.blog_slug))
      console.log('---',nameStore);
      console.log(data.data.blog_slug);
      toast.success("You have logged");

      // router.push('/')

    } else {
      toast.error(data.data,{
        autoClose: 3000,

        theme:'colored',
        hideProgressBar: false,

        closeOnClick: true,

        pauseOnHover: true,

        draggable: true,

    })  
    }


  }

  const checkForms = {
    phone: watch('phone') || '',
    password: watch('password') || '',
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(signUper)}
        className="bg-zinc-100 p-4 rounded-sm  border border-dashed border-blue-700 w-[330px]">

        <h2 className="text-center text-lg font-semibold mb-3 border-b border-b-blue-500 ">Sign-In Form</h2>

        <div className='flex flex-col '>



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
          Don't have An Account?
          <Link
            className='text-blue-700 ml-2'
            href={'/signup'}>
            SignUp
          </Link>
        </p>

        <button
          type='submit'
          className={
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

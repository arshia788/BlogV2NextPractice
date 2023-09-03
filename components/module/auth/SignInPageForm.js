'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form'


export default function SignInPageForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const signUper = () => {

    const formatData = {
      phone: watch('phone'),
      password: watch('password'),
    }


  }

  const checkForms={
      phone: watch('phone') || '',
      password: watch('password') || '',
  }

  return (
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
          checkForms.phone.length > 0&&
          checkForms.password.length > 0
          ?
          'bg-blue-700 hover:bg-blue-800 w-full transition-all duration-300 p-2 rounded text-white cursor-pointer mt-5'
          :
          'bg-blue-400 hover:bg-blue-500 w-full transition-all duration-300 p-2 rounded text-white cursor-pointer mt-5'
        }
      >Submit</button>


    </form>
  )
}

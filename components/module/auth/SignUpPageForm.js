'use client';

import { useForm } from 'react-hook-form'


export default function SignUpPageForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const signUper = () => {

    const formatData = {
      username: watch('username'),
      displayname: watch('displayname'),
      blog_name: watch('blog_name'),
      phone: watch('phone'),
      password: watch('password'),
    }
    console.log(formatData);

  }

  return (
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
              minLength: 10,
              maxLength: 10
            })}
          />

          {
            errors.username && errors.username.type === 'required' && (<div className='text-rose-500 '>This filed is required</div>)
            ||
            errors.username && errors.username.type === 'minLength' && (<div className='text-rose-500 '>characters should be more than 6</div>)
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
            errors.phone && errors.phone.type === 'minLength' && (<div className='text-rose-500 '>characters should be more than 6</div>)
            ||
            errors.phone && errors.phone.type === 'maxLength' && (<div className='text-rose-500 '>characters should be less than 20</div>)
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

      <button
        type='submit'
        className='bg-blue-700 w-full p-2 rounded text-white cursor-pointer mt-3'
      >Submit</button>


    </form>
  )
}

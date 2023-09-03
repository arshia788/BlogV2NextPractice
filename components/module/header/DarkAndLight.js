
import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';


export default function DarkAndLight({ changeIcon, changeIcons }) {
    return (
        <div className='flex cursor-pointer'>

            {
                changeIcon ?
                    <FiMoon onClick={changeIcons} className='text-gray-400 w-6 h-6' />
                    :
                    <BsSun onClick={changeIcons} className='text-orange-500 w-6 h-6' />
            }
        </div>
    )
}

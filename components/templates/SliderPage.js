import AdsSlider from "components/module/slider/AdsSlider"
import LeftSliderPage from "components/module/slider/leftSliderPage"

export default function SliderPage() {
    return (
        <div className='bg-zinc-200 flex flex-col gap-y-4 mt-4 p-4 rounded-lg'>

            <div className="flex items-center justify-start gap-1">
                <span className='font-bold'>Hotest:</span>
                <p>lorem saz</p>
            </div>
            
            
            <div className='flex justify-between items-center gap-4 '>
                <LeftSliderPage />
                <AdsSlider />
            </div>

        </div>
    )
}

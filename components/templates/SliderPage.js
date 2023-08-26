import AdsSlider from "components/module/slider/AdsSlider"
import HotNews from "components/module/slider/HotNews"
import LeftSliderPage from "components/module/slider/leftSliderPage"

export default function SliderPage() {
    return (
        <div className='bg-zinc-200 flex flex-col gap-y-4 mt-4 p-4 rounded-lg'>

            <HotNews />            
            
            <div className='flex justify-between items-center gap-4 '>
                <LeftSliderPage />
                <AdsSlider />
            </div>

        </div>
    )
}

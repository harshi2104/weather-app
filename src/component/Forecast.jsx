import React from 'react'
import { iconUrlFromCode } from '../sevices/WeatherService';

function Forecast({
    weather:{
        icon
    }
}) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>04:30 PM</p>
        </div>
        <hr className='my-2'/>

        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center' >
                <p className='font-white text-small'>04:30 PM</p>
                <img src={iconUrlFromCode(icon)} alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center' >
                <p className='font-white text-small'>04:30 PM</p>
                <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center' >
                <p className='font-white text-small'>04:30 PM</p>
                <img src="http://openweathermap.org/img/wn/09d@2x.png" alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center' >
                <p className='font-white text-small'>04:30 PM</p>
                <img src="http://openweathermap.org/img/wn/11n@2x.png" alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center' >
                <p className='font-white text-small'>04:30 PM</p>
                <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>
        </div>

    </div>
  )
}

export default Forecast;
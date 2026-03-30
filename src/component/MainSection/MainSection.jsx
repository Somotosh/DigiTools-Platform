import React, { use } from 'react';
import Tabes from './Tabes';
import { FaCheck } from "react-icons/fa6";


const MainSection = ({ modelPromes }) => {
    const models = use(modelPromes)
    // console.log(models)
    return (
        <div className='mt-20 max-w-11/12 mx-auto space-y-6'>
            <div className='text-center space-y-2'>
                <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            <div>
                <Tabes />
            </div>
            <div>
                <div className='space-y-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {models.map(model => <div className='shadow-lg rounded-lg border border-amber-100 h-full'>
                        <div className='space-y-3 p-6'>
                            <div className='flex justify-end '>
                                <p className={`badge badge-md ${model.tag ==='popular' ? 
                               "bg-purple-200 text-purple-500" : model.tag ==='best seller'? 'bg-[#FEF3C6] text-[#BB4D00]':"bg-green-200 text-green-500"  }`} >{model.tag}</p>
                            </div>
                            <div>
                                <img className='rounded-full h-12 w-12' src={model.image} alt="" />
                            </div>
                            <div className='space-y-3'>
                                <h1 className='text-2xl font-bold'>{model.name}</h1>
                                <p>{model.description}</p>
                                <p className='text-xl font-bold'>${model.price}/{model.period}</p>
                                <ul>
                                    {model.features.map(feature => <li className='flex items-center gap-1'>
                                       <FaCheck className='text-green-600'/> {feature}
                                    </li>)}
                                </ul>

                            </div>
                            <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full'>Buy Now</button>
                        </div>

                    </div>)}
                </div>
            </div>

        </div>
    );
};

export default MainSection;


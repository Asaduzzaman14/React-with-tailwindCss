import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefite/Benefit';

const PricingOPtion = ({ option }) => {
    const { name, price, benefites } = option
    return (
        <div className='bg-white p-3 rounded-lg '>
            <h2 className='bg-indigo-300 rounded text-lg font-bold'>{name}</h2>
            <p>
                <span className='font-bold text-4xl'>{price}</span>
                <span className='text-bold text-xl text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits</h3>
                {
                    benefites.map(benefite => <Benefit benefite={benefite}></Benefit>)
                }
                <button className='bg-green-500 flex w-full justify-center py-2 rounded font-bold items-center text-white mt-6 '>Buy now <ArrowRightIcon className='w-6 ml-2'></ArrowRightIcon> </button>
            </div>
        </div>
    );
};

export default PricingOPtion;
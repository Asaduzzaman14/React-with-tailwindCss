import React from 'react';
import PricingOPtion from '../PricingOption/PricingOPtion';

const Pricing = () => {

    const pricingOptin = [
        {
            id: 1, name: 'Free', price: 0, benefites: [
                'every things on free',
                'unlimeted deals',
                'localixe deals',
                'crazy deals',
                'crazy deals'
            ]
        },
        {
            id: 1, name: 'Regular', price: 10.55, benefites: [
                'every things on regular',
                'unlimeted deals',
                'localixe deals',
                'crazy deals',
                'crazy deals',
            ]
        },
        {
            id: 1, name: 'Premium', price: 31.22, benefites: [
                'every things free all time',
                'unlimeted deals',
                'localixe deals',
                'crazy deals',
                'fantase deals'
            ]
        },
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-4'>
            <h3 className='text-6xl font-mono text-white'> best deals of the Towens</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio natus nemo neque perferendis officia, deserunt dolor consectetur quibusdam ducimus?s</p>
            <div className='grid md:grid-cols-3 gap-5 mt-8'>
                {
                    pricingOptin.map(option => <PricingOPtion
                        option={option}
                        key={option.id}
                    ></PricingOPtion>)
                }
            </div>
        </div>
    );
};

export default Pricing;
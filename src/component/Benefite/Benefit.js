import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = ({ benefite }) => {
    return (
        <div>
            <p className='flex items-center '>
                <CheckCircleIcon className='text-green-600 w-4 h-4 mr-2 '></CheckCircleIcon>
                {benefite}
            </p>
        </div>
    );
};

export default Benefit;
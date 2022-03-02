import React from 'react';

const Background = ( { children } ) =>
{
    return (
        <div className="bg-white dark:bg-black transition-all duration-500 ease-in-out">
            <div className='container mx-auto flex items-center justify-center flex-col py-10'>
                {children}
            </div>
        </div>
    )
}

export default Background;
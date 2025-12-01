import React from 'react';

type EventGridProps = {
    children?: React.ReactNode;
};

const EventGrid:React.FC<EventGridProps>= ({children}) => {
    return (
        <>
         <h1 className='dark:text-white'>Event section</h1>
         <div className='container mx-auto grid grid-cols-3 gap-4 py-10'>
           
            {children}
        </div>
        </>
        
    );
};

export default EventGrid;
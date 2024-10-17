'use client'
export default function InteractiveCard({children, contentName} : {children : React.ReactNode, contentName:string}) {

    function onCardSelected() {
        alert ("You selected "+ contentName)
    }

    function onCardMouseAction(event:React.SyntheticEvent) {
        if(event.type == 'mouseover')
            {
                event.currentTarget.classList.remove('shadow-lg')
                event.currentTarget.classList.add('shadow-2xl')
                event.currentTarget.classList.add('bg-neutral-200')
            }
        else {
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('shadow-lg')
            event.currentTarget.classList.remove('bg-neutral-200')
        }
    }

    return (
        <div className='h-[300px] rounded-lg shadow-lg bg-white'
           onMouseOver = {(e)=>onCardMouseAction(e)}
           onMouseOut = {(e)=>onCardMouseAction(e)}
           >
           {children}
        </div>
    )
}



/*
'use client'
import React from 'react';

// Define the interface for the props
interface InteractiveCardProps {
    children: React.ReactNode;
}

export default function InteractiveCard({children}: InteractiveCardProps) {

    function onCardSelected() {
        alert("Card is clicked");
    }

    return (
        <div className='w-1/5 h-[300px] rounded-lg shadow-lg'
            onClick={onCardSelected}>
            {children}
        </div>
    );
}

*/
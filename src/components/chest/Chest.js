import React from 'react';
import './chest.css'

export default function Chest(props) {
    return (
       
            <svg data-position='chest' id='chest' class='chest' xmlns='http://www.w3.org/2000/svg' width='86.594' height='45.063' viewBox='0 0 86.594 45.063'><path onClick={()=>props.clickEventHandler('chest')} class="chestPath" fill="#d7ccc8" d='M19.32 0l-9.225 16.488-10.1 5.056 6.15 4.836 4.832 14.07 11.2 4.616 17.85-8.828-4.452-34.7zm47.934 0l9.225 16.488 10.1 5.056-6.15 4.836-4.833 14.07-11.2 4.616-17.844-8.828 4.45-34.7z'/></svg>
            
       
        
    )
}

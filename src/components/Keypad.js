// Code Keypad Component Here
import React from 'react';


function Keypad (){
    return (
        <div>
            <input 
                type="password" 
                onChange={() => console.log('Entering password...')}
            />
            <button>Submit</button>
        </div>
    )
}

export default Keypad;
// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    return (
        <div className="eyes-on-me">
            <button onFocus={() => console.log('Good!')}onBlur={() => console.log('Hey! Eyes on me!')} > Eyes on me</button>
        </div>
    );
}
export default EyesOnMe;
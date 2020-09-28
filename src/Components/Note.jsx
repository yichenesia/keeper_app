import React, {useState} from 'react';

function Note(){
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    return (
        <div className = "note">
            <h1>Nintendo Switch</h1>
            <img src="https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/package_redblue.jpg"/>
            <p>$100 USD</p>
            <h1>Total in Cart: {count}</h1>
            <button className="button" onClick={increase}>Add to Cart</button>
            
        </div>

    );
}

export default Note;
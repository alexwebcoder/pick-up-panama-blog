import { useState } from "react";

const Home = () => {
    
    const [name, setName] = useState('Coronado');

    const handleClick = (e) => {
        setName('Colon');
    }

    
    const [message, setMessage] = useState('');

     const [color, setColor] = useState('red');
     
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <p>{message}</p>
            <p>`My favorite color is {color}`</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={ () => setColor('Green')}>Green</button>
            
            <input type="text" 
            value={message} 
            placeholder="Enter a message" 
            onChange={e => setMessage(e.target.value)} />
        </div>
     );
}
 
export default Home;
import {useState, useEffect, useRef} from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('')
  const inputRef = useRef();
  const countRef = useRef(1);
  const previousNameRef = useRef('')

//Focus on input field
  useEffect(() => {
    inputRef.current.focus()
    inputRef.current.style.backgroundColor = 'red'

  }, []);

//keep track of how many times our components render
  useEffect(() => {
    countRef.current = countRef.current + 1;
  }, [name])

//keep tract of previous entry
  useEffect(() => {
    previousNameRef.current = name;
  }, [name])

  console.log(countRef);





  return (
    <main>
     <h1>Welcome to React</h1>
     <input type="text" ref={inputRef} onChange={(e) => setName(e.target.ariaValueMax)}/>
     <h2>{name}</h2>
     <br />
     <br />
     <br />
     <br />
     <p>Rendered {countRef.current} times</p>
     <p>Previous Name was {previousNameRef.current}, with a length of {' '}
     {previousNameRef.current.length} </p>
    </main>
  );
}

export default App;


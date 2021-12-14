import './App.css';
import GreetingCard from "./Components/GreetingCard";
import { useState} from 'react';

function App() {
  const [greeting, setGreeting] = useState('Dear loved one');
  const [body, setBody] = useState('have a wonderful and joyful holiday');
  const [closing, setClosing] = useState('yours, with Love');
  return (
    <GreetingCard 
      greeting={greeting}
      body={body}
      closing={closing}
    />
  );
}

export default App;

import './App.css';
import GreetingCard from "./Components/GreetingCard";
import CustomizeMessage from './Components/CustomizeMessage';
import { useState} from 'react';

function App() {
  const [greeting, setGreeting] = useState('Dear loved one');
  const [body, setBody] = useState('have a wonderful and joyful holiday');
  const [closing, setClosing] = useState('yours, with Love');
  const [customize, setCustomize] = useState(false);
  return (
    <>
      {customize
        ?<CustomizeMessage 
          greeting={greeting}
        />
        :<GreetingCard 
          greeting={greeting}
          body={body}
          closing={closing}
          setCustomize={setCustomize}
        />
      }
    </>
    
  );
}

export default App;

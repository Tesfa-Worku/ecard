import HolidayImage from '../Images/HolidayImage.jpg';
import '../App.css';

function GreetingCard({ email, greeting, body, closing, setCustomize, preview, setPreview }) {

    const continueEditing = () => {
        setCustomize(true);
        setPreview(false);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={HolidayImage} className="App-logo" alt="Holiday" />            
                <p>{greeting}</p>
                <p>{body}</p>
                <p>{closing}</p>
                {preview
                    ? <div>
                        <button onClick={continueEditing}>Continue Editing</button>                        
                        <button onClick={sendEcard}>Send</button>                        
                    </div>                    
                    : <button className="App-link" onClick={() => setCustomize(true)}>Reshare This card</button>
                }
            </header>
        </div>
    );
}

export default GreetingCard;
import HolidayImage from '../Images/HolidayImage.jpg';
import '../App.css';

function GreetingCard({ greeting, body, closing, setCustomize }) {
    return (
        <div className="App">
            <header className="App-header">
            <img src={HolidayImage} className="App-logo" alt="Holiday" />            
            <p>{greeting}</p>
            <p>{body}</p>
            <p>{closing}</p>
            <button
                className="App-link"
                onClick={() => setCustomize(true)}
            >
                Reshare This card
            </button>
            </header>
        </div>
    );
}

export default GreetingCard;
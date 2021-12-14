// import LakeTahoe from '../Images/LakeTahoe';
import '../App.css';

function GreetingCard({ greeting, body, closing, setCustomize }) {
    return (
        <div className="App">
            <header className="App-header">
            {/* <img src={LakeTahoe} className="App-logo" alt="LakeTahoe" /> */}
            <p>Image goes here</p>
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
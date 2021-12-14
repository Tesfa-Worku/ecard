// import LakeTahoe from '../Images/LakeTahoe';
import '../App.css';

function GreetingCard({ greeting, body, closing}) {
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
            >
                Reshare This card
            </button>
            </header>
        </div>
    );
}

export default GreetingCard;
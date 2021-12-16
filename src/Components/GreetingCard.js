import HolidayImage from '../Images/HolidayImage.jpg';
import '../App.css';

function GreetingCard({ email, greeting, body, closing, setCustomize, preview, setPreview }) {

    const continueEditing = () => {
        setCustomize(true);
        setPreview(false);
    }

    const sendEcard = () => {
        let mailto = `mailto:${email}`;
            mailto += '?subject=E-Card';
            mailto += '&body=You have received an e-greeting card.';
            mailto += '%0D%0A%0D%0A';
            mailto += 'Go To Greeting Card';
            mailto += '%0D%0A';
    
        let url = 'https://tesfa-worku.github.io/ecard';
            url += `?greeting=${encodeURIComponent(greeting)}`;
            url += `&body=${encodeURIComponent(body)}`;
            url += `&closing=${encodeURIComponent(closing)}`;
    
            mailto += encodeURIComponent(url);
    
            console.log(mailto);
    
        window.open(mailto);
    }

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <img src={HolidayImage} className="App-logo" alt="Holiday" />
                    <div className='neon-light'>
                        Happy Holiday!
                    </div>
                </div>                
                <p className='script'>{greeting}</p>
                <p className='script'>{body}</p>
                <p className='script'>{closing}</p>
                {preview
                    ? <div>
                        <button className="button" onClick={continueEditing}>Continue Editing</button><br />
                        <br />
                        <button className="button" onClick={sendEcard}>Send</button>                        
                    </div>                    
                    : <button className="button" onClick={() => setCustomize(true)}>Reshare This card</button>
                }
            </header>
        </div>
    );
}

export default GreetingCard;
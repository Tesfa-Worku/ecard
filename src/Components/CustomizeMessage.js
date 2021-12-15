import HolidayImage from '../Images/HolidayImage.jpg';
import '../App.css';
import { useState} from 'react';

function CustomizeMessage({ greeting, body, closing, setGreeting, setBody, setClosing, setPreview, setCustomize}) {
    const [newMessage, setNewMessage] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        setPreview(true);
        setCustomize(false);
    }

    return(
        <div>
            <div className="instructions">
                <img src={HolidayImage} className="thumb" alt="Holiday" />
                <p>
                    <strong>How to Reshare:</strong><br />
                    Write your own custom message below
                </p>
            </div>
        <form>
            <div>
                <label htmlFor="email">Recipient Email</label><br />
                <input
                    name="email"
                    id="email"
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Recipient Email"
                />
            </div>

            <div>
                <label htmlFor="greeting">Greeting</label><br />
                <input
                    name="greeting"
                    id="greeting"
                    type="text"
                    value={greeting}
                    onChange={(event) => setGreeting(event.target.value)}
                    placeholder="Greeting"
                />
            </div>

            <div>
                <label htmlFor="body">Body</label><br />
                <textarea
                    name="body"
                    id="body"
                    value={body}
                    onChange={event => setBody(event.target.value)}
                    placeholder="Body"
                    rows="3"
                >
                </textarea>
            </div>

            <div>
                <label htmlFor="closing">Closing</label><br />
                <input
                    name="closing"
                    id="closing"
                    type="text"
                    value={closing}
                    onChange={event => setClosing(event.target.value)}
                    placeholder="Closing"
                />
            </div>

        <button type="submit" onClick={onSubmit}>Preview Greeting Card</button>            
            </form>
        </div>        
    )
}

export default CustomizeMessage;
import HolidayImage from '../Images/HolidayImage.jpg';
import '../App.css';
import { useState} from 'react';

function CustomizeMessage({ greeting, body, closing}) {
    const [newMessage, setNewMessage] = useState('');
    const [newEmail, setNewEmail] = useState('');

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
                    <label>Recipient Email</label>
                    <input
                    type="text"                    
                    value={newEmail}
                    onChange={(event) => setNewMessage(event.target.value)}                
                    placeholder="Recipient Email"
                    />
                </div>

                <div>
                    <label>Greeting</label>
                    <input                    
                    value={greeting}
                    onChange={event => setNewMessage(event.target.value)}                
                    placeholder="Greeting"
                    />
                </div>

                <div>
                    <label>Body</label>
                    <input                    
                    value={body}
                    onChange={event => setNewMessage(event.target.value)}                
                    placeholder="Body"
                    />
                </div>

                <div>
                    <label>Closing</label>
                    <input                    
                    value={closing}
                    onChange={event => setNewMessage(event.target.value)}                
                    placeholder="Closing"
                    />
                </div>                             
            </form>
        </div>        
    )
}

export default CustomizeMessage;
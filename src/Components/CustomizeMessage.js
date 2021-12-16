import HolidayImage from '../Images/HolidayImage.jpg';
import '../App.css';

function CustomizeMessage({ email, greeting, body, closing, setGreeting, setBody, setClosing, setEmail, setPreview, setCustomize}) {    

    const onSubmit = (event) => {
        event.preventDefault();
        setPreview(true);
        setCustomize(false);
    }

    return(
        <div className='App-header'>
            <div className="instructions">
                <img src={HolidayImage} className="thumb" alt="Holiday" />
                <p className=''>
                    <strong style={{color:'darkblue'}}>How to Reshare:</strong><br />
                    Write your own <br />custom message <br /> below
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

                <br />

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

                <br />

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

                <br />

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

                <br />

                <button className="button" type="submit" onClick={onSubmit}>Preview Greeting Card</button>            
            </form>
        </div>        
    )
}

export default CustomizeMessage;
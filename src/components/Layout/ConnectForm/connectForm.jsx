import "../../../styles/Partials/_connectForm.scss"

export default function ConnectForm({handleForm}){
    return(
        <div className="contactBackground">
            <div className="contactFormWrapper">                  
                <form action="https://formsubmit.co/0e0ec0d17906a78f11536e4b0f3880dc" method="POST">
                    <h1>Contact</h1>
                    <h2>Let's Work Together!</h2>
                    <label htmlFor="name" className="sr-only"></label>
                    <input className="name" type="text" name="name" placeholder="Name" />

                    <label htmlFor="emailAddress" className="sr-only"></label>
                    <input className="emailAddress" type="email" name="emailAddress" placeholder="Email Address" required />

                    <label htmlFor="message" className="sr-only"></label>
                    <textarea className="message" name="message" id="message" placeholder="Message me!" cols="30" rows="10" required></textarea>
                    <input type="hidden" name="_next" value="http://localhost:3000/completedForm" />
                    <div>
                        <button className="Send"
                         >Send</button>
                        <button className="Close" onClick={handleForm}>Close</button>
                    </div>
                </form>
            </div>
        </div>
)}
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {DateTime} from 'luxon';
import axios from 'axios';



function CreatePoll(){
    
    const [pollData, setPollData] = useState({
        question: '',
        expiryDate: ''
    });

    const [invalidExpiry, setDateAsInvalid] = useState(false);

    const navigate = useNavigate();    

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setDateAsInvalid(false);
        const {name, value} = e.target;
        
        setPollData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    
    const createPoll = async () => {
        // validate expiry datetime
        console.log('clicked');
        await axios.post('http://localhost:5000/v1/poll/basic', {
            title: "test",
            description: "test",
            expiryDate: DateTime.fromISO(pollData.expiryDate).toUTC().toJSON(),
            question: pollData.question
        }).then((res) => {
            const pollId = res.data.data.pollId;
            // redirect to view
            navigate(`/view-poll/${pollId}`, {
                replace: true
            });
        }).catch((err) => {
            console.log(err);   
            switch (err.response.status){
                case 400:
                    // notify user of invalid credentials
                    setDateAsInvalid(true);
                    break;
                default:
                    // server error (prolly)
                    // notify user  
                    alert("Server error. Try contacting the website administrator.");   // change this later on?
                    break;
            }
        })
    };

    return(
        <form className="w-screen h-screen bg-light-beige flex flex-col justify-center items-center gap-4">
            <h1 className="block text-4xl text-cyan font-bold">What do you want to ask?</h1>
            <textarea value={pollData.question} name="question" onChange={handleChange} className="block w-2/5"></textarea>
            <h2 className="block text-4xl text-cyan font-bold">Accept answers until?</h2>
            <input value={pollData.expiryDate} name="expiryDate" onChange={handleChange} className="block w-1/5 py-2 text-center" type="datetime-local" />
            {invalidExpiry ? <span>Invalid expiry date</span> : <></>}
            <button onClick={createPoll} className="w-1/4 rounded-lg py-2 font-semibold text-light-beige bg-cyan hover:opacity-75 text-lg" type="button">Ask now</button>
        </form>
    );
}

export default CreatePoll;
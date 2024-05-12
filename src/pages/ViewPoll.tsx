import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import {DateTime} from 'luxon';

function ViewPoll(){
    const [pollData, setPollData] = useState({
        title: '',
        description: '',
        createdDate: '',
        expiryDate: '',
        question: ''
    });

    const params = useParams();
    const navigate = useNavigate();
    const pollId = params.pollId; 

    // fetch poll
    // if not found, show 404
    useEffect(() => {
        const retrievePoll = async () => {
            await axios.get(`http://localhost:5000/v1/poll/${pollId}`)
                .then((res) => {
                    // show content
                    const poll = res.data.data;
                    setPollData(poll);
                })
                .catch((err) => {
                    // handle errors
                    switch (err.response.status){
                        case 404:
                            alert("Not found.");
                            navigate('/', {replace: true});
                            break;
                        default:
                            alert("Uncatched errors.");
                            navigate('/', {replace: true});
                            break;
                    }
                });
        }    

        retrievePoll();
    }, []);

    // websocket listener
    // main functionality: attain poll results and instantly update them here, keeping tally

    const isExpired = (expiryDate: string) => {
        if (DateTime.fromISO(expiryDate) < DateTime.now()){
            return true;
        }
        return false;
    }

    return (
        <>
            <div className="w-screen h-screen bg-light-beige flex flex-col justify-center items-center text-center gap-4">
                <h1 className="font-extrabold text-cyan text-5xl">Poll Results</h1>
                <h2 className="font-medium text-cyan text-xl w-5/6 sm:w-2/3 lg:w-1/2 xl:w-1/3">{pollData.question}</h2>
                <div className="h-12">
                    results go here
                </div>
                {/* try implementing a countdown next time */}
                <p className="font-bold text-cyan text-lg">Poll {isExpired(pollData.expiryDate) ? "ended" : "ends in"} {DateTime.fromISO(pollData.expiryDate).toRelative()}</p>
                {/* maybe hide this link in a wrapper that in a click copies the link. ALSO add share buttons after everything is done. */}
                <a className="font-semibold text-cyan text-lg hover:opacity-80">https://sensus.info/answer-poll/{pollId}</a>
            </div>
        </>
    )
}

export default ViewPoll;
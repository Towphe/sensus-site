import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function AnswerPoll(){
    const [question, setQuestion] = useState("");
    const [answer, setAnswer_] = useState("");

    const params = useParams();
    const navigate = useNavigate();
    const pollId = params.pollId; 
    
    useEffect(() => {
        const retrieveAnswer = async () => {
            console.log("here!")
            await axios.get(`http://localhost:5000/v1/poll/${pollId}`)
                .then((res) => {
                    // show content
                    const poll = res.data.data;
                    
                    setQuestion(poll.question);
                    
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
            })
        };
        retrieveAnswer();
    }, []);

    const setAnswer = () => {
        setAnswer_(answer);
    }

    const submitAnswer = () => {
        alert(answer);
        setAnswer_("");
        // set up websocket here
    }

    return(
        <>
            <div className="w-screen h-screen bg-light-beige flex flex-col justify-center items-center text-center gap-4">
                <div className="w-4/5 sm:w-3/5 md:w-1/2 flex lg:w-1/3 xl:w-1/4 flex-col gap-4">
                    <h1 className="block text-4xl text-cyan font-bold w-full">{question}</h1>
                    <textarea value={answer} name="question" onChange={setAnswer} className="block w-full rounded-xl"></textarea>
                    <button onClick={submitAnswer} className="w-full rounded-lg py-2 font-semibold text-light-beige bg-cyan hover:opacity-75 text-lg" type="button">Submit Answer</button>
                </div>
            </div>
        </>
    )
}

export default AnswerPoll;
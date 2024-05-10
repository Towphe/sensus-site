
function CreatePoll(){
    return(
        <form className="w-screen h-screen bg-light-beige flex flex-col justify-center items-center gap-4">
            <h1 className="block text-4xl text-cyan font-bold">What do you want to ask?</h1>
            <textarea className="block w-2/5"></textarea>
            <h2 className="block text-4xl text-cyan font-bold">Accept answers until?</h2>
            <input className="block w-1/5 py-2 text-center" type="date" />
            <button className="w-1/4 rounded-lg py-2 font-semibold text-light-beige bg-cyan hover:opacity-75 text-lg" type="submit">Ask now</button>
        </form>
    );
}

export default CreatePoll;
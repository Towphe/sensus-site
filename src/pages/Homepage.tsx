import { useNavigate } from "react-router-dom";

function Homepage(){
    const navigate = useNavigate();

    const redirectToCreatePoll = () => {
        navigate('/create-poll');
    };

    return(
        <>
            <div className="h-screen bg-light-beige overflow-x-hidden flex flex-col justify-center items-center gap-3">
                <h1 className="block text-cyan font-extrabold text-6xl">Sensus</h1>
                <h2 className="block text-cyan text-2xl">Get people's thoughts</h2>
                <button className="block bg-pastel-green text-light-beige text-2xl px-14 py-3 rounded-2xl hover:opacity-75" type="button" onClick={redirectToCreatePoll}>Ask now</button>
            </div>
            <div className="h-screen bg-pastel-green overflow-x-hidden px-10 flex flex-col justify-center items-center gap-4">
                <h1 className="block text-4xl text-light-beige font-semibold">What is Sensus?</h1>
                <p className="block text-light-beige sm:w-11/12 md:w-8/12  lg:w-3/5 xl:w-2/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="block h-48 bg-slate-100 w-full sm:w-11/12 md:w-8/12 lg:w-3/5 xl:w-2/5">
                </div>
                <p className="block text-light-beige sm:w-11/12 md:w-8/12  lg:w-3/5 xl:w-2/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="h-screen bg-slate-100 overflow-x-hidden flex flex-col justify-center items-center text-cyan font-medium">
                <h1 className="block font-bold text-4xl">Have suggestions?</h1>
                <h2 className="block font-bold text-xl">Let's talk about it!</h2>
                <form className="flex flex-col gap-3">
                    <label className="block">Name</label>
                    <input className="block indent-2 py-1" type="text" name="name" />
                    <label className="block">Email</label>
                    <input className="block indent-2 py-1" type="email" name="email" />
                    <label className="block">Message</label>
                    <textarea className="block indent-2 py-1 " name="message"></textarea>
                    <button className="block w-full px-16 py-4 bg-light-beige text-cyan font-semibold rounded-2xl mt-2 hover:opacity-80" type="button">Let's talk about it!</button>
                </form>
            </div>
        </>
    )
}

export default Homepage;
import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");
    useEffect(()=>{
        fetch("https://my-mern-deploy.onrender.com/")
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => console.log(err));
    }, [])

    return(
        <div className="app">
            <h1>{message}</h1>
        </div>
    )
}

export default App;


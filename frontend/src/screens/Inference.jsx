import InferenceField from "../components/InferenceField";
import Summary from "../components/Summary";
import { useState } from "react";

export default function Inference() {

    const [input, setInput] = useState("");

    const [show, setShow] = useState(false);

    const [toxic, setToxic] = useState(false);

    const handleSubmit = () => {

        setShow(true);
        const toxic = Math.random() < 0.5
        
        if (toxic) {
            setToxic(true);
        } else {
            setToxic(false);
        }
    }

    const handleClean = () => {
        setInput("");
        setShow(false);
    }

    return (
        <div>
            <InferenceField 
                input = {input} 
                setInput = {setInput} 
                handleSubmit = {handleSubmit} 
                handleClean={handleClean} 
                show={show} 
                toxic={toxic}
            />
            <Summary input={input} />
        </div>
    )
}
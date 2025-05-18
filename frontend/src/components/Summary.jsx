import BarGraph from "./BarGraph";
import { Menu } from "./Menu";
import { useEffect, useState } from "react";

export default function Summary({ input }) {

    useEffect(() => {
        
    }, [input]);

    const [words] = useState([
        {
            word: "hola",
            data: [
                { name: 'Not Toxic', Frequency: 10 },
                { name: 'Toxic', Frequency: 15 },
            ]   
        },
        {
            word: "amigos",
            data: [
                { name: 'Not Toxic', Frequency: 2 },
                { name: 'Toxic', Frequency: 7 },
            ]   
        }
    ]);

    const [wordData, setWordData] = useState(
        {
            word: "",
            data: [
                { name: 'Not Toxic', Frequency: 0 },
                { name: 'Toxic', Frequency: 0 },
            ]   
        }
    );

    function handleWordChange(word) {
        const selectedWord = words.find(w => w.word === word);
        setWordData(selectedWord);
    }

    return (
        <div style={{ width: "100%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
            <BarGraph data={wordData.data} />
            <Menu chosen={wordData.word} onClick={handleWordChange} words = {words.map(w => w.word)} />
        </div>
    )
}
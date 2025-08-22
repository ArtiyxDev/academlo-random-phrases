import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import CardPhrase from "./components/card/CardPhrase";
import JsonDataMapper from "./libs/JsonDataMapper";
import CardAuthor from "./components/card/CardAuthor";
import CardButton from "./components/card/CardButton";
import database from "./data/phrases.json";

interface PhraseItem {
    id: number;
    phrase: string;
    author: string;
}

function App() {
    const [phrases, setPhrases] = useState<PhraseItem[]>([]);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const mappedPhrases = JsonDataMapper<PhraseItem>(
            JSON.stringify(database),
        );
        setPhrases(mappedPhrases);
    }, []);

    const handleNextPhrase = () => {
        setCurrentPhraseIndex((prevIndex) =>
            prevIndex === phrases.length - 1 ? 0 : prevIndex + 1,
        );
    };

    if (phrases.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <main>
                <Card>
                    <CardPhrase phrase={phrases[currentPhraseIndex].phrase} />
                    <CardAuthor author={phrases[currentPhraseIndex].author} />
                    <CardButton onClick={handleNextPhrase}>
                        Next Phrase
                    </CardButton>
                </Card>
            </main>
        </>
    );
}

export default App;

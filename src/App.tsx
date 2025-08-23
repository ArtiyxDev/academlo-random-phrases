import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import CardPhrase from "./components/card/CardPhrase";
import JsonDataMapper from "./libs/JsonDataMapper";
import CardAuthor from "./components/card/CardAuthor";
import CardButton from "./components/card/CardButton";
import database from "./data/phrases.json";
import {
  BiCheck,
  BiCopy,
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoReddit,
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from "react-icons/bi";
import CardSharedLink from "./components/card/CardSharedLink";

interface PhraseItem {
  id: number;
  phrase: string;
  author: string;
}

const outlineClasses = [
  "outline-red-500 outline-2",
  "outline-blue-500 outline-2",
  "outline-green-500 outline-2",
  "outline-yellow-500 outline-2",
  "outline-purple-500 outline-2",
  "outline-pink-500 outline-2",
  "outline-indigo-500 outline-2",
  "outline-orange-500 outline-2",
  "outline-teal-500 outline-2",
  "outline-cyan-500 outline-2",
  "outline-red-400 outline-2",
  "outline-blue-400 outline-2",
  "outline-green-400 outline-2",
  "outline-yellow-400 outline-2",
  "outline-purple-400 outline-2",
  "outline-pink-400 outline-2",
  "outline-emerald-500 outline-2",
  "outline-lime-500 outline-2",
  "outline-amber-500 outline-2",
  "outline-rose-500 outline-2",
];

function App() {
  const [phrases, setPhrases] = useState<PhraseItem[]>([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [outlineClass, setOutlineClass] = useState(outlineClasses[0]);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const mappedPhrases = JsonDataMapper<PhraseItem>(JSON.stringify(database));
    setPhrases(mappedPhrases);
  }, []);

  const handleNextPhrase = () => {
    setCurrentPhraseIndex((prevIndex) =>
      prevIndex === phrases.length - 1 ? 0 : prevIndex + 1,
    );
    setIsCopied(false);

    const randomOutlineIndex = Math.floor(
      Math.random() * outlineClasses.length,
    );
    setOutlineClass(outlineClasses[randomOutlineIndex]);
  };

  if (phrases.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Card
        className={`px-6 py-6 -outline-offset-6 transition-colors duration-200 ${outlineClass} m-auto`}
      >
        <figure className="flex flex-col gap-3">
          <CardPhrase phrase={phrases[currentPhraseIndex].phrase} />
          <figcaption>
            <CardAuthor author={phrases[currentPhraseIndex].author} />
          </figcaption>
        </figure>
        <CardButton onClick={handleNextPhrase}>Cambiar frase</CardButton>
        <section className="flex justify-center gap-0.5">
          <CardSharedLink
            url={`https://www.linkedin.com/shareArticle?mini=true&url=https://jadm-random-phrases.netlify.app&title=${encodeURIComponent(phrases[currentPhraseIndex].author)}&summary=${encodeURIComponent(phrases[currentPhraseIndex].phrase)}&source=https://jadm-random-phrases.netlify.app`}
          >
            <BiLogoLinkedin className="size-full hover:bg-transparent" />
          </CardSharedLink>
          <CardSharedLink
            url={`https://www.facebook.com/sharer/sharer.php?u=https://jadm-random-phrases.netlify.app&quote=${encodeURIComponent(phrases[currentPhraseIndex].phrase)}`}
          >
            <BiLogoFacebook className="size-full hover:bg-transparent" />
          </CardSharedLink>
          <CardSharedLink
            url={`https://twitter.com/intent/tweet?text=${encodeURIComponent(phrases[currentPhraseIndex].phrase)}`}
          >
            <BiLogoTwitter className="size-full hover:bg-transparent" />
          </CardSharedLink>
          <CardSharedLink
            url={`https://wa.me/?text=${encodeURIComponent(phrases[currentPhraseIndex].phrase)}`}
          >
            <BiLogoWhatsapp className="size-full hover:bg-transparent" />
          </CardSharedLink>
          <CardSharedLink
            url={`https://telegram.me/share/url?url=https://jadm-random-phrases.netlify.app&text=${encodeURIComponent(phrases[currentPhraseIndex].phrase)}`}
          >
            <BiLogoTelegram className="size-full hover:bg-transparent" />
          </CardSharedLink>
          <CardSharedLink
            url={`https://www.reddit.com/submit?url=https://jadm-random-phrases.netlify.app&title=${encodeURIComponent(phrases[currentPhraseIndex].phrase)}`}
          >
            <BiLogoReddit className="size-full hover:bg-transparent" />
          </CardSharedLink>
            <CardButton
            onClick={() => {
              navigator.clipboard.writeText(phrases[currentPhraseIndex].phrase);
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 2500);
            }}
            className="flex gap-2 p-2 items-center"
            >
            {isCopied ? (
              <>
              <BiCheck className="size-full hover:bg-transparent" />
              Copiado
              </>
            ) : (
              <>
              <BiCopy className="size-full hover:bg-transparent" />
              Copiar
              </>
            )}
            </CardButton>
        </section>
      </Card>
    </>
  );
}

export default App;

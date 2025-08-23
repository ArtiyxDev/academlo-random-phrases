import "./App.css";
import Card from "./components/card/Card";
import CardButton from "./components/card/CardButton";
import PhraseDisplay from "./components/card/PhraseDisplay";
import SocialShare from "./components/card/SocialShare";
import CopyButton from "./components/card/CopyButton";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import { usePhrases } from "./hooks";

function App() {
  const {
    currentPhrase,
    outlineClass,
    isCopied,
    isLoading,
    handleNextPhrase,
    handleCopyPhrase,
  } = usePhrases();

  if (isLoading || !currentPhrase) {
    return <LoadingSpinner message="Cargando frases..." />;
  }

  return (
    <Card
      className={`px-6 py-6 -outline-offset-6 transition-colors duration-200 ${outlineClass} m-auto`}
    >
      <PhraseDisplay phrase={currentPhrase} />
      
      <CardButton onClick={handleNextPhrase}>
        Cambiar frase
      </CardButton>
      
      <section className="flex justify-center gap-0.5">
        <SocialShare phrase={currentPhrase} />
        <CopyButton isCopied={isCopied} onCopy={handleCopyPhrase} />
      </section>
    </Card>
  );
}

export default App;

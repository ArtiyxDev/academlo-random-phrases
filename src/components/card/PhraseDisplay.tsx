import type { PhraseItem } from "../../types/PhraseItem";
import CardPhrase from "./CardPhrase";
import CardAuthor from "./CardAuthor";

interface PhraseDisplayProps {
  phrase: PhraseItem;
}

function PhraseDisplay({ phrase }: PhraseDisplayProps) {
  return (
    <figure className="flex flex-col gap-3">
      <CardPhrase phrase={phrase.phrase} />
      <figcaption>
        <CardAuthor author={phrase.author} />
      </figcaption>
    </figure>
  );
}

export default PhraseDisplay;
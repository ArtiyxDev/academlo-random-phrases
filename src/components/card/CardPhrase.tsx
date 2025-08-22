interface CardPhraseProps {
  phrase: string;
  className?: string;
}

function CardPhrase({ phrase, className = "" }: CardPhraseProps) {
  return (
    <p className={`text-gray-300 italic ${className}`}>"{phrase}"</p>
  )
}

export default CardPhrase
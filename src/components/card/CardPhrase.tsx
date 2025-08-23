interface CardPhraseProps {
  phrase: string;
  className?: string;
}

function CardPhrase({ phrase, className = "" }: CardPhraseProps) {
  return (
    <blockquote className={`text-gray-300 italic select-text text-xl ${className}`}>"{phrase}"</blockquote>
  )
}

export default CardPhrase
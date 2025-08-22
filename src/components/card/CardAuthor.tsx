interface CardAuthorProps {
  author: string;
  className?: string;
}

function CardAuthor({ author, className = "" }: CardAuthorProps) {
  return (
    <p className={`text-gray-400 ${className}`}>- {author}</p>
  )
}

export default CardAuthor;

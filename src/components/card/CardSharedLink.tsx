interface CardSharedLinkProps {
  url: string;
  children: React.ReactNode;
}

function CardSharedLink({ url, children }: CardSharedLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn flex w-14 h-10 p-2 shrink justify-center items-center "
    >
      {children}
    </a>
  );
}

export default CardSharedLink;

import { BiCheck, BiCopy } from "react-icons/bi";
import CardButton from "./CardButton";

interface CopyButtonProps {
  isCopied: boolean;
  onCopy: () => void;
}

function CopyButton({ isCopied, onCopy }: CopyButtonProps) {
  return (
    <CardButton
      onClick={onCopy}
      className="flex gap-2 p-2 items-center"
    >
      {isCopied ? (
        <>
          <BiCheck className="size-4 hover:bg-transparent" />
          Copiado
        </>
      ) : (
        <>
          <BiCopy className="size-4 hover:bg-transparent" />
          Copiar
        </>
      )}
    </CardButton>
  );
}

export default CopyButton;
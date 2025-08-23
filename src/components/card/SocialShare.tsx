import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoReddit,
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from "react-icons/bi";
import CardSharedLink from "./CardSharedLink";
import type { PhraseItem } from "../../types/PhraseItem";
import { generateShareUrls } from "../../utils/shareUtils";

interface SocialShareProps {
  phrase: PhraseItem;
}

function SocialShare({ phrase }: SocialShareProps) {
  const shareUrls = generateShareUrls(phrase);

  return (
    <>
      <CardSharedLink url={shareUrls.linkedin}>
        <BiLogoLinkedin className="size-full hover:bg-transparent" />
      </CardSharedLink>
      
      <CardSharedLink url={shareUrls.facebook}>
        <BiLogoFacebook className="size-full hover:bg-transparent" />
      </CardSharedLink>
      
      <CardSharedLink url={shareUrls.twitter}>
        <BiLogoTwitter className="size-full hover:bg-transparent" />
      </CardSharedLink>
      
      <CardSharedLink url={shareUrls.whatsapp}>
        <BiLogoWhatsapp className="size-full hover:bg-transparent" />
      </CardSharedLink>
      
      <CardSharedLink url={shareUrls.telegram}>
        <BiLogoTelegram className="size-full hover:bg-transparent" />
      </CardSharedLink>
      
      <CardSharedLink url={shareUrls.reddit}>
        <BiLogoReddit className="size-full hover:bg-transparent" />
      </CardSharedLink>
    </>
  );
}

export default SocialShare;
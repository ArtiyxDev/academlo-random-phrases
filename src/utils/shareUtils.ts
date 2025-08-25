import type { PhraseItem } from "../types/PhraseItem";

/**
 * Generates share URLs for different social media platforms
 */
export const generateShareUrls = (phrase: PhraseItem, baseUrl: string = "https://jadm-random-phrases.netlify.app") => {
  const encodedPhrase = encodeURIComponent(phrase.phrase + " by: " + phrase.author);
  const encodedAuthor = encodeURIComponent(phrase.author);
  const encodedUrl = encodeURIComponent(baseUrl);

  return {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedAuthor}&summary=${encodedPhrase}&source=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedPhrase}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedPhrase}`,
    whatsapp: `https://wa.me/?text=${encodedPhrase}`,
    telegram: `https://telegram.me/share/url?url=${encodedUrl}&text=${encodedPhrase}`,
    reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedPhrase}`,
  };
};

/**
 * Gets a random outline class from the available classes
 */
export const getRandomOutlineClass = (classes: string[]): string => {
  const randomIndex = Math.floor(Math.random() * classes.length);
  return classes[randomIndex];
};

/**
 * Copies text to clipboard using the Clipboard API
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy text to clipboard:", error);
    return false;
  }
};
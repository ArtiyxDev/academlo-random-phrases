import { useEffect, useState, useCallback } from "react";
import type { PhraseItem } from "../types/PhraseItem";
import JsonDataMapper from "../libs/JsonDataMapper";
import database from "../data/phrases.json";
import { outlineClasses, COPY_FEEDBACK_DURATION } from "../constants/styles";
import { getRandomOutlineClass, copyToClipboard } from "../utils/shareUtils";

export const usePhrases = () => {
  const [phrases, setPhrases] = useState<PhraseItem[]>([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [outlineClass, setOutlineClass] = useState(outlineClasses[0]);
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize phrases on mount
  useEffect(() => {
    try {
      const mappedPhrases = JsonDataMapper<PhraseItem>(JSON.stringify(database));
      setPhrases(mappedPhrases);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading phrases:", error);
      setIsLoading(false);
    }
  }, []);

  // Get current phrase
  const currentPhrase = phrases[currentPhraseIndex];

  // Navigate to next phrase
  const handleNextPhrase = useCallback(() => {
    setCurrentPhraseIndex((prevIndex) =>
      prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
    );
    setIsCopied(false);
    setOutlineClass(getRandomOutlineClass(outlineClasses));
  }, [phrases.length]);

  // Handle copy to clipboard
  const handleCopyPhrase = useCallback(async () => {
    if (!currentPhrase) return;

    const success = await copyToClipboard(currentPhrase.phrase);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), COPY_FEEDBACK_DURATION);
    }
  }, [currentPhrase]);

  return {
    phrases,
    currentPhrase,
    outlineClass,
    isCopied,
    isLoading,
    handleNextPhrase,
    handleCopyPhrase,
  };
};
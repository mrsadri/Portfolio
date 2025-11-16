import { useEffect, useState } from "react";

/**
 * Converts a country code (ISO 3166-1 alpha-2) to a flag emoji
 * @param countryCode - Two-letter country code (e.g., "NL", "US", "IR")
 * @returns Flag emoji string
 */
const getCountryFlag = (countryCode: string): string => {
  if (!countryCode || countryCode.length !== 2) {
    return "";
  }

  // Convert country code to flag emoji using regional indicator symbols
  // Each letter is offset by 0x1F1E6 (A) to get the regional indicator
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 0x1f1e6 + (char.charCodeAt(0) - 65));

  return String.fromCodePoint(...codePoints);
};

/**
 * Hook to detect visitor's country and return flag emoji
 * Uses ipapi.co free API for IP geolocation
 */
export const useVisitorCountry = (): string => {
  const [flag, setFlag] = useState<string>("");

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") {
      return;
    }

    // Check if we've already stored the country in sessionStorage to avoid repeated API calls
    const cachedFlag = sessionStorage.getItem("visitorCountryFlag");
    if (cachedFlag) {
      setFlag(cachedFlag);
      return;
    }

    // Fetch visitor's country using free IP geolocation API
    const fetchCountry = async () => {
      try {
        // Using ipapi.co free tier (no API key required)
        const response = await fetch("https://ipapi.co/json/", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch country");
        }

        const data = await response.json();
        const countryCode = data.country_code;

        if (countryCode) {
          const countryFlag = getCountryFlag(countryCode);
          if (countryFlag) {
            // Cache the result in sessionStorage
            sessionStorage.setItem("visitorCountryFlag", countryFlag);
            setFlag(countryFlag);
          }
        }
      } catch (error) {
        // Silently fail - don't show flag if detection fails
        console.debug("Could not detect visitor country:", error);
      }
    };

    fetchCountry();
  }, []);

  return flag;
};


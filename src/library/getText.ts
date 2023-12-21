import { TGetText } from "../types/index.types";

/**
 * This function takes returns a formatted text string based on the provided key and replacements.
 * @param data The object containing the text to be retrieved.
 * @param key The key of the text to be retrieved.
 * @param replacements The replacements to be made in the retrieved text.
 * @param notFoundText The text to be returned if the key is not found in the data object.
 * @returns The formatted text string.
 * @example
 * ```ts
 * const data = {
 *  "hello_world": "Hello, world {name}!",
 *  "goodbye_world": "Goodbye, world {name}!"
 * }
 * 
 * const text = getText({
 *  data,
 *  key: "hello_world",
 *  replacements: {
 *   name: "John"
 *  }
 * });
 * 
 * console.log(text); // Hello, world John!
 * ```
 */
const getText = <T extends Record<string, any>>({
  data,
  key,
  replacements,
  notFoundText = "not_found",
}: TGetText<T>): string => {
  const text = data[key];

  if (!text) {
    return `<${String(key)}__${notFoundText}>`;
  }

  let updatedText = text;

  for (const replacementKey in replacements) {
    if (Object.prototype.hasOwnProperty.call(replacements, replacementKey)) {
      const value = replacements[replacementKey];
      const pattern = new RegExp(`{${replacementKey}}`, "g");

      updatedText = updatedText.replace(pattern, value.toString());
    }
  }

  return updatedText;
};

export default getText;

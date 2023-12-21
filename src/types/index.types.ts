export type TGetText<T extends Record<string, string>> = {
  /**
   * The object containing the texts to be retrieved.
   */
  data: T;
  /**
   * The key of the text to be retrieved.
   */
  key: keyof T;
  /**
   * The replacements to be made in the retrieved text.
   */
  replacements?: Record<string, string | number>;
  /**
   * The text to be returned if the key is not found in the data object.
   * @default ´<key__not_found>´
   */
  notFoundText?: string;
};

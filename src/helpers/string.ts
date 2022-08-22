
/**
 * Small helper function to create task titles
 * Will capitalise and will return 'No title' for empty string 
 * @example createTitle("small task") // "Small task"
 */
export const createTitle = (input: string) => {
  return !!input.length ? input[0]?.toUpperCase() + input.substring(1) : "No title";
}
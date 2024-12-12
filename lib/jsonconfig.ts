export const JsonConfig = {
  name: "json",
  keywords: {}, // No keywords, since JSON is just data
  types: {
    string: true,
    number: true,
    object: true,
    array: true,
    boolean: true,
    null: true,
    // JSON types...
  },
  builtin: {},
  indentStatements: true,
  indentSwitch: true,
  multiLineStrings: true, // JSON can have multiline strings
};

export const clikeConfig = {
  name: "clike",
  keywords: {
    if: true,
    else: true,
    for: true,
    while: true,
    switch: true,
    case: true,
    default: true,
    break: true,
    continue: true,
    return: true,
    goto: true, // Add more C/C++ specific keywords
    typedef: true,
    sizeof: true,
    static: true,
    extern: true,
    inline: true,
  },
  types: {
    int: true,
    long: true,
    float: true,
    double: true,
    char: true,
    void: true,
    short: true,
    unsigned: true,
    signed: true, // Add more primitive types for C/C++
  },
  operators: {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
    "%": true,
    "++": true,
    "--": true,
    "=": true,
    "==": true,
    "!=": true,
    ">": true,
    "<": true,
    ">=": true,
    "<=": true,
    "&&": true,
    "||": true,
    "&": true,
    "|": true,
    "^": true,
    "~": true,
    "<<": true,
    ">>": true,
    "!": true, // Add logical and bitwise operators
  },
  builtin: {
    printf: true,
    scanf: true,
    malloc: true,
    free: true,
    realloc: true,
    fopen: true,
    fclose: true,
    fread: true,
    fwrite: true,
    exit: true,
    abs: true,
    sqrt: true,
    pow: true,
    sin: true,
    cos: true,
    tan: true,
    log: true, // Add more C/C++ standard library functions
  },
  controlFlow: {
    if: true,
    else: true,
    switch: true,
    case: true,
    default: true,
    while: true,
    for: true,
    do: true, // Add more control flow structures
  },
  macros: {
    "#define": true,
    "#include": true,
    "#ifdef": true,
    "#ifndef": true,
    "#endif": true,
    "#pragma": true, // Add common preprocessor directives
  },
  indentStatements: true, // Auto-indent statements
  indentSwitch: true, // Auto-indent switch statements
  multiLineStrings: true, // Allow multi-line strings
  namespaceSeparator: "::", // For namespaces (e.g., C++ specific)
  functionPrototypes: true, // Handle function prototypes in the code

  complexTypes: {
    pointers: true, // Handle pointer types (e.g., int*, char*)
    arrays: true, // Handle array types (e.g., int arr[10])
    structs: true, // Handle structs (e.g., struct MyStruct {})
    enums: true, // Handle enums (e.g., enum Color { RED, GREEN, BLUE })
    typedefs: true, // Handle typedefs for user-defined types
  },
  numberParsing: {
    numberStart: /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/, // Regex for number parsing
    number: /^(0x[\da-fA-F]+|\d+)$/, // Handle hexadecimal, decimal, and float numbers
  },
  commentHandling: {
    singleLine: "//", // Single-line comment
    multiLine: "/*", // Multi-line comment
    blockCommentEnd: "*/", // End of multi-line comment
    blockCommentStart: "/*", // Start of multi-line comment
  },
};

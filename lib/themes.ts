// themes.js

import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

// Dark Theme
export const darkTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#1e1e1e",
    foreground: "#ffffff",
    caret: "#dcdcdc",
    selection: "#555555",
    selectionMatch: "#555555",
    gutterBackground: "#333333",
    gutterForeground: "#c5c5c5",
    gutterBorder: "#444444",
    lineHighlight: "transparent", // No line highlight
  },
  styles: [
    { tag: t.comment, color: "#6a9955" },
    { tag: t.variableName, color: "#9CDCFE" },
    { tag: t.typeName, color: "#DCDCAA" },
    { tag: t.keyword, color: "#C586C0" },
  ],
});

// Light Theme
export const lightTheme = createTheme({
  theme: "light",
  settings: {
    background: "#ffffff",
    foreground: "#333333",
    caret: "#000000",
    selection: "#e0e0e0",
    selectionMatch: "#e0e0e0",
    gutterBackground: "#f4f4f4",
    gutterForeground: "#4f4f4f",
    gutterBorder: "#dcdcdc",
    lineHighlight: "#f0f0f0",
  },
  styles: [
    { tag: t.comment, color: "#008000" },
    { tag: t.variableName, color: "#0000ff" },
    { tag: t.typeName, color: "#a31515" },
    { tag: t.keyword, color: "#00008b" },
  ],
});

// Solarized Dark Theme
export const solarizedDarkTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#002b36",
    foreground: "#839496",
    caret: "#93a1a1",
    selection: "#586e75",
    selectionMatch: "#586e75",
    gutterBackground: "#073642",
    gutterForeground: "#839496",
    gutterBorder: "#073642",
    lineHighlight: "transparent", // No line highlight
  },
  styles: [
    { tag: t.comment, color: "#586e75" },
    { tag: t.variableName, color: "#93a1a1" },
    { tag: t.typeName, color: "#b58900" },
    { tag: t.keyword, color: "#d33682" },
  ],
});

// Solarized Light Theme
export const solarizedLightTheme = createTheme({
  theme: "light",
  settings: {
    background: "#fdf6e3",
    foreground: "#657b83",
    caret: "#586e75",
    selection: "#eee8d5",
    selectionMatch: "#eee8d5",
    gutterBackground: "#fdf6e3",
    gutterForeground: "#657b83",
    gutterBorder: "#93a1a1",
    lineHighlight: "#eee8d5",
  },
  styles: [
    { tag: t.comment, color: "#93a1a1" },
    { tag: t.variableName, color: "#268bd2" },
    { tag: t.typeName, color: "#859900" },
    { tag: t.keyword, color: "#d33682" },
  ],
});

export const a11yDarkTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#aba914", // Background color
    foreground: "#f8f8f2", // Foreground color
    caret: "#f8f8f2", // Caret color
    selection: "#3e3e3e", // Selection color
    selectionMatch: "#f8f8f2", // Selection match color
    gutterBackground: "#2b2b2b", // Gutter background
    gutterForeground: "#f8f8f2", // Gutter foreground
    gutterBorder: "#393939", // Gutter border
    lineHighlight: "transparent", // No line highlight
  },
  styles: [
    { tag: t.comment, color: "#d4d0ab" }, // Comment color
    { tag: t.variableName, color: "#ffd700" }, // Variable color
    { tag: t.attributeName, color: "#abe338" }, // Attribute color
    { tag: t.definition(t.typeName), color: "#ffd700" }, // Definition color
    { tag: t.keyword, color: "#ffa07a" }, // Keyword color
    { tag: t.operator, color: "#f8f8f2" }, // Operator color
    { tag: t.propertyName, color: "#abe338" }, // Property color
    { tag: t.number, color: "#dcc6e0" }, // Number color
    { tag: t.string, color: "#ffd700" }, // String color
    { tag: t.meta, color: "#d4d0ab" }, // Meta color
    { tag: t.tagName, color: "#dcc6e0" }, // Tag color
  ],
});

export const themes = [
  {
    name: "Oceanic",
    theme: "dark",
    settings: {
      background: "#1e272e",
      foreground: "#dcdcdc",
      caret: "#ffcc00",
      selection: "#34495e",
      selectionMatch: "#2c3e50",
      gutterBackground: "#1c1c1c",
      gutterForeground: "#95a5a6",
      gutterBorder: "#34495e",
      lineHighlight: "transparent",
    },
    styles: [
      { tag: t.comment, color: "#7f8c8d" },
      { tag: t.variableName, color: "#1abc9c" },
      { tag: t.attributeName, color: "#e67e22" },
      { tag: t.definition(t.typeName), color: "#e74c3c" },
      { tag: t.keyword, color: "#9b59b6" },
      { tag: t.operator, color: "#ecf0f1" },
      { tag: t.propertyName, color: "#3498db" },
      { tag: t.number, color: "#f39c12" },
      { tag: t.string, color: "#2ecc71" },
      { tag: t.meta, color: "#95a5a6" },
      { tag: t.tagName, color: "#e74c3c" },
    ],
  },
  {
    name: "Sunset",
    theme: "dark",
    settings: {
      background: "#2d132c",
      foreground: "#ffedd8",
      caret: "#ff6f61",
      selection: "#73364a",
      selectionMatch: "#d7a3ab",
      gutterBackground: "#251021",
      gutterForeground: "#a47e96",
      gutterBorder: "#4e243b",
      lineHighlight: "transparent",
    },
    styles: [
      { tag: t.comment, color: "#a47e96" },
      { tag: t.variableName, color: "#ffcb77" },
      { tag: t.attributeName, color: "#ff6f61" },
      { tag: t.definition(t.typeName), color: "#ffcb77" },
      { tag: t.keyword, color: "#ffa69e" },
      { tag: t.operator, color: "#ffedd8" },
      { tag: t.propertyName, color: "#d7a3ab" },
      { tag: t.number, color: "#ff6f61" },
      { tag: t.string, color: "#ffd275" },
      { tag: t.meta, color: "#a47e96" },
      { tag: t.tagName, color: "#ffcb77" },
    ],
  },
  {
    name: "Forest",
    theme: "dark",
    settings: {
      background: "#2b2d42",
      foreground: "#edf2f4",
      caret: "#8d99ae",
      selection: "#3d405b",
      selectionMatch: "#4a4e69",
      gutterBackground: "#2a2c3b",
      gutterForeground: "#8d99ae",
      gutterBorder: "#3d405b",
      lineHighlight: "transparent",
    },
    styles: [
      { tag: t.comment, color: "#8d99ae" },
      { tag: t.variableName, color: "#2ecc71" },
      { tag: t.attributeName, color: "#ffb703" },
      { tag: t.definition(t.typeName), color: "#8ecae6" },
      { tag: t.keyword, color: "#f4a261" },
      { tag: t.operator, color: "#edf2f4" },
      { tag: t.propertyName, color: "#ffb703" },
      { tag: t.number, color: "#ef476f" },
      { tag: t.string, color: "#06d6a0" },
      { tag: t.meta, color: "#8d99ae" },
      { tag: t.tagName, color: "#8ecae6" },
    ],
  },
  {
    name: "Aurora",
    theme: "dark",
    settings: {
      background: "#011627",
      foreground: "#d6deeb",
      caret: "#7e57c2",
      selection: "#1d3b53",
      selectionMatch: "#3e5588",
      gutterBackground: "#011221",
      gutterForeground: "#5c6773",
      gutterBorder: "#1d3b53",
      lineHighlight: "transparent",
    },
    styles: [
      { tag: t.comment, color: "#637777" },
      { tag: t.variableName, color: "#82aaff" },
      { tag: t.attributeName, color: "#c792ea" },
      { tag: t.definition(t.typeName), color: "#addb67" },
      { tag: t.keyword, color: "#ff5874" },
      { tag: t.operator, color: "#d6deeb" },
      { tag: t.propertyName, color: "#ecc48d" },
      { tag: t.number, color: "#f78c6c" },
      { tag: t.string, color: "#ecc48d" },
      { tag: t.meta, color: "#7e57c2" },
      { tag: t.tagName, color: "#c792ea" },
    ],
  },
  {
    name: "Midnight",
    theme: "dark",
    settings: {
      background: "#121212",
      foreground: "#e0e0e0",
      caret: "#ff5722",
      selection: "#2c3e50",
      selectionMatch: "#34495e",
      gutterBackground: "#1a1a1a",
      gutterForeground: "#95a5a6",
      gutterBorder: "#2c3e50",
      lineHighlight: "transparent",
    },
    styles: [
      { tag: t.comment, color: "#7f8c8d" },
      { tag: t.variableName, color: "#ffeb3b" },
      { tag: t.attributeName, color: "#f39c12" },
      { tag: t.definition(t.typeName), color: "#e74c3c" },
      { tag: t.keyword, color: "#9b59b6" },
      { tag: t.operator, color: "#ecf0f1" },
      { tag: t.propertyName, color: "#3498db" },
      { tag: t.number, color: "#e67e22" },
      { tag: t.string, color: "#2ecc71" },
      { tag: t.meta, color: "#95a5a6" },
      { tag: t.tagName, color: "#f39c12" },
    ],
  },
  {
    name: "Dark Ember",
    theme: "dark",
    settings: {
      background: "#1c1c1c",
      foreground: "#d3d3d3",
      caret: "#ff4500",
      selection: "#2e2e2e",
      selectionMatch: "#ff6347",
      gutterBackground: "#2a2a2a",
      gutterForeground: "#b0b0b0",
      gutterBorder: "#444444",
      lineHighlight: "transparent",
    },
    styles: [
      { tag: t.comment, color: "#7f8c8d" },
      { tag: t.variableName, color: "#ff6347" },
      { tag: t.attributeName, color: "#ffa500" },
      { tag: t.definition(t.typeName), color: "#e74c3c" },
      { tag: t.keyword, color: "#ff4500" },
      { tag: t.operator, color: "#ecf0f1" },
      { tag: t.propertyName, color: "#ff6347" },
      { tag: t.number, color: "#ffeb3b" },
      { tag: t.string, color: "#2ecc71" },
      { tag: t.meta, color: "#b0b0b0" },
      { tag: t.tagName, color: "#ffa500" },
    ],
  },
  {
    name: "Lush Green",
    theme: "dark",
    settings: {
      background: "#009245", // Primary background color
      foreground: "#e5f5e0", // Light text color for contrast
      caret: "#ffcc00", // Caret color for text input
      selection: "#006837", // Selection background
      selectionMatch: "#004d2b", // Match selection color
      gutterBackground: "#004d2b", // Gutter background
      gutterForeground: "#a9dba9", // Gutter text color
      gutterBorder: "#003a24", // Gutter border color
      lineHighlight: "transparent", // Line highlight (transparent for minimal distraction)
    },
    styles: [
      { tag: t.comment, color: "#a1d68b" }, // Lighter green for comments
      { tag: t.variableName, color: "#72d577" }, // Light green for variable names
      { tag: t.attributeName, color: "#5dca4b" }, // Medium green for attribute names
      { tag: t.definition(t.typeName), color: "#4bbf2f" }, // Green for type names
      { tag: t.keyword, color: "#b1d700" }, // Yellow-green for keywords
      { tag: t.operator, color: "#e5f5e0" }, // Light text color for operators
      { tag: t.propertyName, color: "#4f7c3d" }, // Dark green for property names
      { tag: t.number, color: "#7bbf44" }, // Light olive green for numbers
      { tag: t.string, color: "#88c16e" }, // Light green for strings
      { tag: t.meta, color: "#7d8f5f" }, // Olive green for meta tags
      { tag: t.tagName, color: "#5dca4b" }, // Green for tag names
    ],
  },
  {
    name: "Sunrise Gradient",
    theme: "dark",
    settings: {
      background: "linear-gradient(135deg, #FF6A00, #FFB800)", // Gradient from orange to yellow
      foreground: "#ffffff", // White text color
      caret: "#FF6A00", // Match caret to the starting color of the gradient
      selection: "rgba(255, 255, 255, 0.2)", // Slightly transparent white for selection
      selectionMatch: "rgba(255, 255, 255, 0.4)", // More visible for matched selection
      gutterBackground: "rgba(255, 255, 255, 0.05)", // Semi-transparent gutter background
      gutterForeground: "#ffffff", // White text in gutter
      gutterBorder: "rgba(255, 255, 255, 0.1)", // Light border around gutter
      lineHighlight: "rgba(255, 255, 255, 0.1)", // Slight highlight for the current line
    },
    styles: [
      { tag: t.comment, color: "#f8f8f2" }, // Light gray for comments
      { tag: t.variableName, color: "#00E676" }, // Bright green for variables
      { tag: t.attributeName, color: "#FF4081" }, // Pink for attributes
      { tag: t.definition(t.typeName), color: "#6200EE" }, // Purple for types
      { tag: t.keyword, color: "#FF5722" }, // Red for keywords
      { tag: t.operator, color: "#FFEB3B" }, // Yellow for operators
      { tag: t.propertyName, color: "#FF9800" }, // Orange for property names
      { tag: t.number, color: "#03A9F4" }, // Blue for numbers
      { tag: t.string, color: "#4CAF50" }, // Green for strings
      { tag: t.meta, color: "#9E9E9E" }, // Gray for meta tags
      { tag: t.tagName, color: "#FFEB3B" }, // Yellow for tag names
    ],
  },

  {
    name: "Twilight",
    theme: "dark",
    settings: {
      background: "#141c24",
      foreground: "#e0e0e0",
      caret: "#8c9eff",
      selection: "#5c6bc0",
      selectionMatch: "#3f51b5",
      gutterBackground: "#1c1e26",
      gutterForeground: "#888888",
      gutterBorder: "#2a2f3c",
      lineHighlight: "transparent",
    },
    styles: [
      { tag: t.comment, color: "#bdbdbd" },
      { tag: t.variableName, color: "#81d4fa" },
      { tag: t.attributeName, color: "#ff80ab" },
      { tag: t.definition(t.typeName), color: "#ffb74d" },
      { tag: t.keyword, color: "#7e57c2" },
      { tag: t.operator, color: "#e0e0e0" },
      { tag: t.propertyName, color: "#82e0aa" },
      { tag: t.number, color: "#ff4081" },
      { tag: t.string, color: "#4caf50" },
      { tag: t.meta, color: "#ffb74d" },
      { tag: t.tagName, color: "#8c9eff" },
    ],
  },
  // Light themes below

  {
    name: "Pastel Breeze",
    theme: "light",
    settings: {
      background: "#f3f4f6",
      foreground: "#333333",
      caret: "#ff6f61",
      selection: "#b0c4de",
      selectionMatch: "#a7c7e7",
      gutterBackground: "#e5e5e5",
      gutterForeground: "#6c6c6c",
      gutterBorder: "#dcdcdc",
      lineHighlight: "transparent",
    },
    styles: [
      { tag: t.comment, color: "#98a6b5" },
      { tag: t.variableName, color: "#f39c12" },
      { tag: t.attributeName, color: "#9b59b6" },
      { tag: t.definition(t.typeName), color: "#2ecc71" },
      { tag: t.keyword, color: "#2980b9" },
      { tag: t.operator, color: "#7f8c8d" },
      { tag: t.propertyName, color: "#e74c3c" },
      { tag: t.number, color: "#f39c12" },
      { tag: t.string, color: "#1abc9c" },
      { tag: t.meta, color: "#bdc3c7" },
      { tag: t.tagName, color: "#2ecc71" },
    ],
  },
  {
    name: "Light Coral",
    theme: "light",
    settings: {
      background: "#fafafa",
      foreground: "#2c3e50",
      caret: "#f39c12",
      selection: "#f7b7a3",
      selectionMatch: "#f9a8d4",
      gutterBackground: "#f0f0f0",
      gutterForeground: "#b0b0b0",
      gutterBorder: "#dcdcdc",
      lineHighlight: "transparent",
    },
    styles: [
      { tag: t.comment, color: "#7f8c8d" },
      { tag: t.variableName, color: "#e74c3c" },
      { tag: t.attributeName, color: "#f39c12" },
      { tag: t.definition(t.typeName), color: "#9b59b6" },
      { tag: t.keyword, color: "#3498db" },
      { tag: t.operator, color: "#ecf0f1" },
      { tag: t.propertyName, color: "#2ecc71" },
      { tag: t.number, color: "#f1c40f" },
      { tag: t.string, color: "#e74c3c" },
      { tag: t.meta, color: "#95a5a6" },
      { tag: t.tagName, color: "#2980b9" },
    ],
  },
  {
    name: "Soft Lavender",
    theme: "light",
    settings: {
      background: "#f4f1f9",
      foreground: "#2f2f2f",
      caret: "#ab72a6",
      selection: "#e0c6e1",
      selectionMatch: "#d1b3d7",
      gutterBackground: "#e9e9e9",
      gutterForeground: "#706f6f",
      gutterBorder: "#d3d3d3",
      lineHighlight: "transparent",
    },
    styles: [
      { tag: t.comment, color: "#a6a6a6" },
      { tag: t.variableName, color: "#9b59b6" },
      { tag: t.attributeName, color: "#ff6347" },
      { tag: t.definition(t.typeName), color: "#6c5b7b" },
      { tag: t.keyword, color: "#a6c4e0" },
      { tag: t.operator, color: "#e0c6e1" },
      { tag: t.propertyName, color: "#d3a6c3" },
      { tag: t.number, color: "#f3a2b7" },
      { tag: t.string, color: "#ab72a6" },
      { tag: t.meta, color: "#a6a6a6" },
      { tag: t.tagName, color: "#6c5b7b" },
    ],
  },
  {
    name: "Soft Breeze",
    theme: "light",
    settings: {
      background: "#f7fafc",
      foreground: "#2d3748",
      caret: "#3182ce",
      selection: "#ebf8ff",
      selectionMatch: "#bee3f8",
      gutterBackground: "#edf2f7",
      gutterForeground: "#718096",
      gutterBorder: "#e2e8f0",
      lineHighlight: "#f7fafc",
    },
    styles: [
      { tag: t.comment, color: "#a0aec0" },
      { tag: t.variableName, color: "#68d391" },
      { tag: t.attributeName, color: "#f6ad55" },
      { tag: t.definition(t.typeName), color: "#e53e3e" },
      { tag: t.keyword, color: "#d53f8c" },
      { tag: t.operator, color: "#2d3748" },
      { tag: t.propertyName, color: "#4299e1" },
      { tag: t.number, color: "#ed8936" },
      { tag: t.string, color: "#48bb78" },
      { tag: t.meta, color: "#718096" },
      { tag: t.tagName, color: "#f6ad55" },
    ],
  },
  {
    name: "Spring Blossom",
    theme: "light",
    settings: {
      background: "#fffaf0",
      foreground: "#4a5568",
      caret: "#ff5e57",
      selection: "#fefcbf",
      selectionMatch: "#f6e05e",
      gutterBackground: "#fff5e1",
      gutterForeground: "#4a5568",
      gutterBorder: "#ebedf0",
      lineHighlight: "#fffaf0",
    },
    styles: [
      { tag: t.comment, color: "#718096" },
      { tag: t.variableName, color: "#6b46c1" },
      { tag: t.attributeName, color: "#ed8936" },
      { tag: t.definition(t.typeName), color: "#ff6347" },
      { tag: t.keyword, color: "#9b2c2c" },
      { tag: t.operator, color: "#4a5568" },
      { tag: t.propertyName, color: "#63b3ed" },
      { tag: t.number, color: "#f6ad55" },
      { tag: t.string, color: "#48bb78" },
      { tag: t.meta, color: "#a0aec0" },
      { tag: t.tagName, color: "#ed8936" },
    ],
  },
];

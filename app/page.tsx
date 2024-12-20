"use client";
import React, { useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { EditorView } from "@codemirror/view";
import { GoDownload } from "react-icons/go";
import { FaChevronLeft } from "react-icons/fa";
import { createTheme } from "@uiw/codemirror-themes";
import { StreamLanguage } from "@codemirror/language";
import { lua } from "@codemirror/legacy-modes/mode/lua";
import { css } from "@codemirror/legacy-modes/mode/css";
import { clojure } from "@codemirror/legacy-modes/mode/clojure";
import { dockerFile } from "@codemirror/legacy-modes/mode/dockerfile";
import { go } from "@codemirror/legacy-modes/mode/go";
import { xml } from "@codemirror/legacy-modes/mode/xml";
import { javascript } from "@codemirror/legacy-modes/mode/javascript";
import { json } from "@codemirror/lang-json";
import { toPng } from "html-to-image";

import { clike } from "@codemirror/legacy-modes/mode/clike";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";
import Featured from "@/components/Featured";
import { themes } from "@/lib/themes";
import { Extension } from "@codemirror/state";
import { clikeConfig } from "@/lib/clikeConfig";
import PaddingComponent from "@/components/paddingComponent";
import WindowControls from "@/components/windowControls";
import HorizontalMenu from "@/components/horizontalMenu";

type Props = {};

const Page = (props: Props) => {
  const containerRef = useRef(null);
  const defaultTheme = createTheme({
    theme: "dark",
    settings: themes[0].settings,
    styles: themes[0].styles,
  });
  const [backgroundType, setBackgroundType] = useState<string>("gradient");
  const [fromColor, setFromColor] = useState("#56ab2f"); // Default blue-400
  const [toColor, setToColor] = useState("#a8e063"); // Default purple-400
  const [windowControl, setWindowControl] = useState<
    "colored" | "gray" | "outline" | "none"
  >("colored");
  const [isOpen, setIsOpen] = useState(false);
  const [defaultPadding, setDefaultPadding] = useState<number>(64);
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("a11yDarkTheme"); // Default theme is dark
  const [currentTheme, setCurrentTheme] = useState<Extension>(defaultTheme);
  const [windowsBackground, setWindowsBackground] = useState<string>(
    themes[0].settings.background
  );
  const [code, setCode] = useState(`// Paste or write your code here

const multiply = (x,y) => {
    return x * y;
  }
  
multiply(2,3);`);

  // Define extensions based on selected language
  const getLanguageExtension = () => {
    switch (language) {
      case "python":
        return python();
      case "java":
        return java();
      case "javascript":
        return StreamLanguage.define(javascript);
      case "json":
        return json();
      case "lua":
        return StreamLanguage.define(lua);
      case "c":
        return StreamLanguage.define(clike(clikeConfig));
      case "c#":
        return StreamLanguage.define(clike(clikeConfig));
      case "c++":
        return StreamLanguage.define(clike(clikeConfig));
      case "dart":
        return StreamLanguage.define(clike(clikeConfig));
      case "css":
        return StreamLanguage.define(css);
      case "clojure":
        return StreamLanguage.define(clojure);
      case "go":
        return StreamLanguage.define(go);
      case "dockerfile":
        return StreamLanguage.define(dockerFile);
      case "html":
        return StreamLanguage.define(xml);

      default:
        return StreamLanguage.define(javascript);
    }
  };

  const changePadding = (value: number) => {
    setDefaultPadding(value);
  };

  const changeGradient = (from: string, to: string) => {
    setFromColor(from);
    setToColor(to);
  };

  const setThemes = (themeName: string) => {
    const foundTheme = themes.find((theme) => theme.name === themeName);

    if (!foundTheme) {
      console.error(`Theme "${themeName}" not found!`);
      return;
    }

    const theme = createTheme({
      theme: "dark", // Optional, you can pass "light" or "dark" or a custom identifier
      settings: foundTheme.settings,
      styles: foundTheme.styles,
    });

    setWindowsBackground(foundTheme.settings.background);
    setCurrentTheme(theme);
  };

  const exportImage = async () => {
    if (containerRef.current) {
      try {
        const dataUrl = await toPng(containerRef.current); // Convert the container to a PNG
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "image.png";
        link.click(); // Trigger the download
      } catch (error) {
        console.error("Failed to export image:", error);
      }
    }
  };
  return (
    <div className="min-h-screen w-full lg:p-10 bg-background flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full flex items-center justify-center h-16">
        <h1 className="text-4xl font-bold text-primary">CodeToImage</h1>
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <h1 className="text-3xl text-muted-foreground text-center">
          Turn your code into awesome pictures.
        </h1>
      </div>
      <div className="w-full flex items-center justify-center p-10">
        <div
          ref={containerRef}
          className="w-full lg:w-[650px]  flex items-center justify-center  transition-all duration-1000 "
          style={{
            padding: `${defaultPadding}px`,
            background: `linear-gradient(90deg, ${fromColor}, ${toColor})`,
          }}
        >
          {/* Inner container with window controls */}
          <div
            className="w-full lg:w-[580px] bg-[#aba914] flex flex-col rounded-xl overflow-hidden shadow-2xl"
            style={{ background: `${windowsBackground}` }}
          >
            {/* Window Controls */}
            <WindowControls windowControl={windowControl} />

            {/* CodeMirror Editor */}
            <div className="flex-1">
              <CodeMirror
                value={code}
                height="100%" // Use dynamic height
                extensions={[
                  getLanguageExtension(),
                  EditorView.theme({
                    ".cm-gutters": { display: "none" }, // Hide gutters
                    ".cm-content": {
                      padding: "10px", // Add padding inside the editor
                      fontFamily: "monospace", // Use a coding font
                      fontSize: "14px", // Adjust font size
                    },
                    "&": {
                      overflow: "hidden", // Respect rounded corners
                      border: "none", // Remove any default border
                      outline: "none", // Remove default focus outline
                    },
                    "&:focus": {
                      outline: "none", // Remove outline on focus
                    },
                    "&:focus-within": {
                      outline: "none", // Remove focus-within outline
                      border: "none", // Remove focus-within border
                    },
                  }),
                  EditorView.lineWrapping, // Enable line wrapping
                ]}
                width="100%" // Dynamically adjust width
                onChange={(value) => setCode(value)}
                theme={currentTheme} // Dynamic theme
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="w-28 h-12 border rounded-[6px] flex flex-row items-center justify-center gap-2"
        onClick={exportImage}
      >
        <GoDownload className="text-white " size={16} />
        <span>Export</span>
      </button>

      {/* Horizontal menu */}
      <HorizontalMenu
        setCurrentTheme={setCurrentTheme}
        setWindowsBackground={setWindowsBackground}
        setLanguage={setLanguage}
        setWindowControl={setWindowControl}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />

      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
        <DrawerContent className="h-full w-full lg:w-[20%] px-2  ">
          <DrawerHeader className="flex flex-row items-end justify-end">
            <button>
              <FaChevronLeft
                className="text-primary"
                onClick={(prev) => setIsOpen(!prev)}
              />
            </button>
          </DrawerHeader>
          <div className="flex flex-col mb-5 gap-4 pb-2">
            {/* Background padding */}
            <PaddingComponent changePadding={changePadding} />

            {/* Select background type */}
            <div className="flex flex-col gap-2">
              {/* <span className="text-primary">Background Type</span> */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Background" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="gradient">Gradient</SelectItem>
                  <SelectItem value="single-color">Single Color</SelectItem>
                </SelectContent>
              </Select> */}
            </div>
            {/* featured */}
            <Featured changeGradient={changeGradient} />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Page;

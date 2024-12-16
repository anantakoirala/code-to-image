"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { themes } from "@/lib/themes";
import { createTheme } from "@uiw/codemirror-themes";
import { Extension } from "@codemirror/state";
import { Languages } from "@/lib/languages";

type Props = {
  setCurrentTheme: React.Dispatch<React.SetStateAction<Extension>>;
  setWindowsBackground: React.Dispatch<React.SetStateAction<string>>;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  setWindowControl: React.Dispatch<
    React.SetStateAction<"colored" | "gray" | "outline" | "none">
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: Boolean;
};

const HorizontalMenu = ({
  setCurrentTheme,
  setWindowsBackground,
  setLanguage,
  setWindowControl,
  setIsOpen,
  isOpen,
}: Props) => {
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
  return (
    <div className="w-2/3 h-[100%] lg:]h-28 border mt-12 mb-12 rounded-[7px] bg-card flex flex-col lg:flex-row p-5 gap-10 items-center">
      {/* theme */}
      <div className="flex flex-col gap-2">
        <span className="text-primary">Theme</span>
        <Select onValueChange={setThemes}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {themes.map((theme, index) => (
              <SelectItem value={theme.name} key={index}>
                {theme.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* language */}
      <div className="flex flex-col gap-2">
        <span className="text-primary">Language</span>
        <Select onValueChange={setLanguage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            {Languages.map((language, index) => (
              <SelectItem value={language.name} key={index}>
                {language.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* windows control */}
      <div className="flex flex-col gap-2">
        <span className="text-primary">Windows Control</span>
        <Select
          onValueChange={(value) =>
            setWindowControl(value as "colored" | "gray" | "outline" | "none")
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Window Control" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="colored">Colored</SelectItem>
            <SelectItem value="gray">Gray</SelectItem>
            <SelectItem value="outline">Outline</SelectItem>
            <SelectItem value="none">None</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* background */}
      <div className="flex flex-col gap-2 w-[180px]">
        <span className="text-primary">Background</span>
        <div
          className="w-8 h-8 rounded-[5px] bg-gradient-to-tr from-red-400 to-orange-400"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      </div>
    </div>
  );
};

export default HorizontalMenu;

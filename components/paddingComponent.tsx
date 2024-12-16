import React from "react";

type Props = {
  changePadding: (value: number) => void;
};

const PaddingComponent = ({ changePadding }: Props) => {
  return (
    <div className="flex flex-col w-full items-start gap-4">
      <span className="text-primary">Background Padding</span>
      <div className="flex flex-row gap-2">
        <div
          className="w-14 h-12 text-sm text-primary hover:bg-accent hover:text-accent-foreground  hover:rounded-[5px] flex items-center justify-center"
          onClick={() => changePadding(32)}
        >
          32px
        </div>
        <div
          className="w-14 h-12 text-sm text-primary hover:bg-accent hover:text-accent-foreground  hover:rounded-[5px] flex items-center justify-center"
          onClick={() => changePadding(64)}
        >
          64px
        </div>
        <div
          className="w-14 h-12 text-sm text-primary hover:bg-accent hover:text-accent-foreground  hover:rounded-[5px] flex items-center justify-center"
          onClick={() => changePadding(96)}
        >
          96px
        </div>
      </div>
    </div>
  );
};

export default PaddingComponent;

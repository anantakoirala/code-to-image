import React from "react";
import { gradients } from "@/lib/featuredGradients";

type Props = {
  changeGradient: (from: string, to: string) => void;
};

const Featured = ({ changeGradient }: Props) => {
  return (
    <div className="flex flex-col gap-2 ">
      <span className="text-primary">Featured Backgrounds</span>
      <div className="h-[60vh]  overflow-y-scroll mb-10 featured-scrollbar">
        {gradients.map(
          (gradient: { name: string; from: string; to: string }, index) => (
            <div
              className="flex flex-row items-center justify-start px-8 py-2 gap-4 hover:bg-primary/10 rounded-[4px]"
              onClick={() => changeGradient(gradient.from, gradient.to)}
            >
              <div
                className="w-7 h-7 rounded-full  bg-gradient-to-tr "
                style={{
                  background: `linear-gradient(to top right, ${gradient.from}, ${gradient.to})`,
                }}
              ></div>
              <span className="text-sm text-primary">{gradient.name}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Featured;

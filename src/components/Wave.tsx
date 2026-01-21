import React from "react";
import "./Wave.css";

type WaveProps = {
  topColor: string;      // colour of the wave
  bottomColor: string;   // colour behind / below the wave
  className?: string;
  height?: number;
};

const Wave: React.FC<WaveProps> = ({
  topColor,
  bottomColor,
  className,
  height = 150,
}) => {
  return (
    <div
      className={`custom-shape-divider ${className ?? ""}`}
      style={{ backgroundColor: bottomColor }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ height }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
};

export default Wave;

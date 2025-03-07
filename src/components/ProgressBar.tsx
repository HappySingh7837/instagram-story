import { useEffect, useState } from "react";
import { Box, LinearProgress } from "@mui/material";

const ProgressBar = ({ isActive, duration, onComplete }: { isActive: boolean; duration: number; onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    setProgress(0); // Reset when new story starts
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          onComplete(); // Move to the next story
          return 100;
        }
        return oldProgress + 2; // Progress in steps of 2%
      });
    }, duration / 50);

    return () => clearInterval(interval);
  }, [isActive, duration, onComplete]);

  return (
    <LinearProgress variant="determinate" value={progress} sx={{ width: "100%", height: 4, bgcolor: "gray" }} />
  );
};

export default ProgressBar;

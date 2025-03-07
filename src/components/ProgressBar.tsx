import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const ProgressBar = ({
  isActive,
  duration,
  reset,
  onComplete,
}: {
  isActive: boolean;
  duration: number;
  reset: boolean;
  onComplete: () => void;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && !reset) {
      setProgress(0); // Start fresh if new story
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            onComplete(); // Move to next story
            return 100;
          }
          return prev + 1;
        });
      }, duration / 100);
    }

    return () => clearInterval(interval);
  }, [isActive, duration, reset]);

  useEffect(() => {
    if (reset) setProgress(0); // Reset progress when required
  }, [reset]);

  return (
    <Box
      sx={{
        flex: 1,
        height: "4px",
        bgcolor: "rgba(255, 255, 255, 0.3)",
        borderRadius: "2px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: `${progress}%`,
          bgcolor: "white",
          transition: "width 0.1s linear",
        }}
      />
    </Box>
  );
};

export default ProgressBar;

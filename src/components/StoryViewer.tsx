import { useState, useEffect } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProgressBar from "./ProgressBar";
import useStories from "../redux/useStories";

const StoryViewer = ({ storyId, onClose }: { storyId: number | null; onClose: () => void }) => {
  const { stories } = useStories();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    if (storyId !== null) {
      const index = stories.findIndex((story) => story.id === storyId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [storyId, stories]);

  useEffect(() => {
    if (currentIndex === null) return;

    const timer = setTimeout(() => {
      if (currentIndex < stories.length - 1) {
        setCurrentIndex((prev) => (prev !== null ? prev + 1 : 0));
      } else {
        onClose(); // ✅ Close viewer after last story
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, stories.length, onClose]);

  if (storyId === null || currentIndex === null) return null; // ✅ Prevent rendering if no story is active

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Progress Bar */}
      <Stack direction="row" spacing={1} sx={{ position: "absolute", top: 10, width: "90%", mx: "auto" }}>
        {stories.map((_, index) => (
          <ProgressBar key={index} isActive={index === currentIndex} duration={5000} onComplete={() => {}} />
        ))}
      </Stack>

      {/* Story Image */}
      <img src={stories[currentIndex]?.image} alt="Story" style={{ maxHeight: "90%", maxWidth: "90%" }} />

      {/* Close Button */}
      <Box sx={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 1 }}>
        <IconButton onClick={onClose} sx={{ color: "white" }} aria-label="Close Story">
          <CloseIcon />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default StoryViewer;

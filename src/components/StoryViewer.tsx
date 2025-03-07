import { useState, useEffect } from "react";
import { Box, IconButton, Stack, Avatar, Typography } from "@mui/material";
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
      goToNextStory();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, stories.length]);

  if (storyId === null || currentIndex === null) return null;

  const currentStory = stories[currentIndex];

  // 🔹 Function to go to next story
  const goToNextStory = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => (prev !== null ? prev + 1 : 0));
    } else {
      onClose(); // Close viewer after last story
    }
  };

  // 🔹 Function to go to previous story
  const goToPrevStory = () => {
    setCurrentIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : stories.length - 1));
  };

  // 🔹 Detect left/right tap
  const handleTap = (event: React.MouseEvent) => {
    const boxWidth = event.currentTarget.clientWidth;
    const clickX = event.nativeEvent.offsetX;

    if (clickX < boxWidth / 2) {
      goToPrevStory(); // Left tap → Previous
    } else {
      goToNextStory(); // Right tap → Next
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "386px",
        height: "640px",
        bgcolor: "black",
        borderRadius: "24px",
        border: "8px solid #333",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        cursor: "pointer", // Enable click events
      }}
      onClick={handleTap} // ✅ Left/Right tap navigation
    >
      {/* ✅ Progress Bar */}
      <Stack direction="row" spacing={1} sx={{ position: "absolute", top: 10, width: "90%", mx: "auto" }}>
        {stories.map((_, index) => (
          <ProgressBar key={index} isActive={index === currentIndex} duration={5000} onComplete={() => {}} />
        ))}
      </Stack>

      {/* ✅ User Info (Profile Picture & Name) */}
      <Box
        sx={{
          position: "absolute",
          top: 15,
          left: 20,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Avatar src={currentStory.profilePic} sx={{ width: 32, height: 32 }} />
        <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>
          {currentStory.username}
        </Typography>
      </Box>

      {/* ✅ Story Image */}
      <img
        src={currentStory.image}
        alt="Story"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />

      {/* ✅ Close Button & More Options */}
      <Box sx={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 1 }}>
        
        <IconButton sx={{ color: "white" }}>
          <MoreVertIcon />
        </IconButton>
        <IconButton onClick={onClose} sx={{ color: "white" }} aria-label="Close Story">
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default StoryViewer;

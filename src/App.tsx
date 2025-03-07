import { useState } from "react";
import StoryList from "./components/StoryList";
import StoryViewer from "./components/StoryViewer";
import { Box } from "@mui/material";

function App() {
  const [activeStory, setActiveStory] = useState<number | null>(null);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "background 0.3s ease-in-out",
      }}
    >
      <StoryList onSelect={setActiveStory} />
      {activeStory !== null && <StoryViewer storyId={activeStory} onClose={() => setActiveStory(null)} />}
    </Box>
  );
}

export default App;

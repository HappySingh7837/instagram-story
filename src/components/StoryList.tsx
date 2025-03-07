import { Box, Avatar } from "@mui/material";
import useStories from "../redux/useStories";


const StoryList = ({ onSelect }: { onSelect: (id: number) => void }) => {
  const { stories } = useStories();

  return (
    <Box sx={{ display: "flex", overflowX: "auto", gap: 2, p: 2 }}>
      {stories.map((story) => (
        <Avatar
          key={story.id}
          src={story.image}
          sx={{ width: 64, height: 64, cursor: "pointer", border: "2px solid white" }}
          onClick={() => onSelect(story.id)} // ✅ Start from clicked story
        />
      ))}
    </Box>
  );
};

export default StoryList;

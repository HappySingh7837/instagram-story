import { Box, Avatar, Typography } from "@mui/material";
import useStories from "../redux/useStories";

const StoryList = ({ onSelect }: { onSelect: (id: number) => void }) => {
  const { stories } = useStories();

  return (
    <Box
      sx={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "375px", 
        height: "90vh", 
        bgcolor: "black",
        borderRadius: "16px",
        border: "4px solid #222",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 10px",
        overflowX: "auto",
        whiteSpace: "nowrap",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "360px",
        height:'140px',
          transform: "translateY(-30vh)",
        }}
      >
        {stories.map((story) => (
          <Box
            key={story.id}
            sx={{
              textAlign: "center",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", 
              justifyContent: "center",
            }}
            onClick={() => onSelect(story.id)}
          >
            <Avatar
              src={story.profilePic}
              sx={{
                width: 70,
                height: 70,
                border: "3px solid transparent",
                background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af)",
                // padding: "2px",
                cursor: "pointer",
                transition: "opacity 0.3s ease-in-out",
                "&:hover": { opacity: 0.8 },
                borderRadius: "50%",
              }}
            />
            <Typography sx={{ fontSize: "12px", color: "white", mt: 1 }}>
              {story.username}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StoryList;

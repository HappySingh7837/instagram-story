import { useState } from "react";
import StoryList from "./components/StoryList";
import StoryViewer from "./components/StoryViewer";

function App() {
  const [activeStory, setActiveStory] = useState<number | null>(null);

  return (
    <>
      <StoryList onSelect={setActiveStory} />
      {activeStory !== null && <StoryViewer storyId={activeStory} onClose={() => setActiveStory(null)} />}
    </>
  );
}

export default App;

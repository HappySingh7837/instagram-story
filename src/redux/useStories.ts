import { useEffect, useState } from "react";

export interface Story {
  id: number;
  image: string;
}

const useStories = () => {
  const [stories, setStories] = useState<Story[]>([
    {
      "id": 1,
      "image": "https://picsum.photos/200"
    },
    {
      "id": 2,
      "image": "https://picsum.photos/200/300"
    },
    {
      "id": 3,
      "image": "https://picsum.photos/100"
    }
  ]
  );

  // useEffect(() => {
  //   fetch("../../data/stories.json")
  //     .then((res) => res.json())
  //     .then((data) => setStories(data))
  //     .catch((err) => console.error("Failed to load stories:", err));
  // }, []);

  return { stories };
};

export default useStories;

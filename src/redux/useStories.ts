import { useEffect, useState } from "react";

export interface Story {
  id: number;
  image: string;
  username:string;
  profilePic: string;
}

const useStories = () => {
  const [stories, setStories] = useState<Story[]>([
    {
      "id": 1,
      "image": "https://picsum.photos/670",
      "username": "nature_lover",
      "profilePic": "https://picsum.photos/150"
    },
    {
      "id": 2,
      "image": "https://picsum.photos/680",
      "username": "urban_explorer",
      "profilePic": "https://picsum.photos/200"
    },
    {
      "id": 3,
      "image": "https://picsum.photos/450",
      "username": "traveler_dream",
      "profilePic": "https://picsum.photos/100"
    }, {
      "id": 4,
      "image": "https://picsum.photos/660",
      "username": "urban_explorer",
      "profilePic": "https://picsum.photos/200"
    },{
      "id": 5,
      "image": "https://picsum.photos/480",
      "username": "traveler_dream",
      "profilePic": "https://picsum.photos/100"
    },
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

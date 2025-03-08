import { useEffect, useState } from "react";

export interface Story {
  id: number;
  image: string;
  username:string;
  profilePic: string;
  isViewed:boolean
}

const useStories = () => {
  const [stories, setStories] = useState<Story[]>(
    [
    {
      "id": 1,
      "image": "https://picsum.photos/670",
      "username": "nature_lover",
      "profilePic": "https://picsum.photos/150",'isViewed':false
    },
    {
      "id": 2,
      "image": "https://picsum.photos/680",
      "username": "urban_explorer",
      "profilePic": "https://picsum.photos/200",'isViewed':false
    },
    {
      "id": 3,
      "image": "https://picsum.photos/450",
      "username": "traveler_dream",
      "profilePic": "https://picsum.photos/100",'isViewed':false
    }, {
      "id": 4,
      "image": "https://picsum.photos/660",
      "username": "urban_explorer",
      "profilePic": "https://picsum.photos/200",'isViewed':false
    },{
      "id": 5,
      "image": "https://picsum.photos/480",
      "username": "traveler_dream",
      "profilePic": "https://picsum.photos/100",'isViewed':false
    },
  ]
  );

  const markStoryAsViewed = (storyId: number) => {
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.id === storyId ? { ...story, isViewed: true } : story
      )
    );
  };
  return { stories,markStoryAsViewed };
};

export default useStories;

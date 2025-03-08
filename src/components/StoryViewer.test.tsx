import { render, screen, fireEvent } from "@testing-library/react";
import StoryViewer from "./StoryViewer";

test("renders StoryViewer and displays story", () => {
  render(<StoryViewer storyId={1} onClose={() => {}} />);
  expect(screen.getByRole("img")).toBeInTheDocument(); 
});

test("clicking close button closes the viewer", () => {
  const onCloseMock = jest.fn();
  render(<StoryViewer storyId={1} onClose={onCloseMock} />);
  fireEvent.click(screen.getByRole("button", { name: /close/i }));
  expect(onCloseMock).toHaveBeenCalledTimes(1); 
});

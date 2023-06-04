import { useState } from "react";
import { Wrap, WrapItem, Input } from "@chakra-ui/react";
import TagItem from "./TagItem";

function TagBar() {
  const preMadeTags = ["Tag 1", "Tag 2", "Tag 3"]; // Add your pre-made tags here
  const [selectedTag, setSelectedTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    setSelectedTag(e.target.value);
  };

  const handleTagSelect = () => {
    if (selectedTag && !tags.includes(selectedTag)) {
      setTags([...tags, selectedTag]);
    }
    setSelectedTag("");
  };

  const handleTagDelete = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <>
      <Wrap>
        {tags.map((tag, index) => (
          <TagItem key={index} label={tag} onDelete={() => handleTagDelete(index)} />
        ))}
      </Wrap>
      <WrapItem>
        <Input
          placeholder="Select a tag"
          value={selectedTag}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleTagSelect()}
        />
      </WrapItem>
    </>
  );
}

export default TagBar;

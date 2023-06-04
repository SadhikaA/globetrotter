import { Tag, TagLabel, TagCloseButton, Wrap, WrapItem } from "@chakra-ui/react";

function TagItem({ label, onDelete }) {
  return (
    <WrapItem>
      <Tag size="md" variant="subtle" colorScheme="teal">
        <TagLabel>{label}</TagLabel>
        <TagCloseButton onClick={onDelete} />
      </Tag>
    </WrapItem>
  );
}

export default TagItem;

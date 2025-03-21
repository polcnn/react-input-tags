import { useState } from "react";
import type { ITag } from "../types/tag";
import { Container, Flex } from "./Common";
import { InputTags } from "./X";

const initialTags: ITag[] = [
  {
    id: "tag-1",
    name: "tag-1",
    value: ["Tag 1", "Tag 2", "Tag 3"],
    placeholder: "Use separator with ,",
    separator: ",",
  },
  {
    id: "tag-2",
    name: "tag-2",
    value: ["Tag 1", "Tag 2"],
    placeholder: "Use separator with ;",
    separator: ";",
  },
  {
    id: "tag-3",
    name: "tag-3",
    value: ["Tag 1", "Tag 2", "Tag 3"],
    placeholder: "Use separator with , or ; or |",
    separator: [",", ";", "|"],
  },
];

const Content = () => {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <main>
      <Container>
        <h3 style={{ marginBottom: 10 }}>General</h3>
        <Flex
          direction="column"
          alignItems="flex-start"
          gap={15}
          style={{ marginBottom: 30 }}
        >
          {initialTags.map((tag: ITag, idx: number) => (
            <InputTags
              key={idx}
              id={tag.id}
              name={tag.name}
              value={tag.value || []}
              placeholder={tag.placeholder || ""}
              separator={tag.separator || [","]}
            />
          ))}
        </Flex>

        <h3 style={{ marginBottom: 10 }}>Callback Function</h3>
        <Flex direction="column" alignItems="flex-start" gap={15}>
          <InputTags value={tags} separator={","} onChange={setTags} />

          {JSON.stringify(tags)}
        </Flex>
      </Container>
    </main>
  );
};

export default Content;

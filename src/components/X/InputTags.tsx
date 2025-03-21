import { useState, useEffect } from "react";
import type { CSSProperties, ChangeEvent, KeyboardEvent } from "react";
import _ from "lodash";
import { Flex, Badge } from "../Common";

interface IProps {
  style?: {
    root?: CSSProperties;
    container?: CSSProperties;
    badge?: {
      root?: CSSProperties;
      label?: CSSProperties;
      remove?: CSSProperties;
    };
    input?: CSSProperties;
  };
  id?: string;
  name?: string;
  value?: string[] | number[];
  placeholder?: string;
  separator?: string | string[];
  maxTags?: number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (tags: string[]) => void;
}

const InputTags = ({
  style = {
    root: {},
    container: {},
    badge: {
      root: {},
      label: {},
      remove: {},
    },
    input: {},
  },
  id = "tags",
  name = "tags",
  value = [],
  placeholder = "Placeholder",
  separator = ",",
  maxTags,
  onChange,
}: IProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (!_.isEmpty(value)) {
      setTags(
        value.map((entry: string | number) =>
          _.isNumber(entry) ? String(entry) : entry
        )
      );
    }
  }, [value]);

  const doChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const doKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const key: string = e.key;

    if (["Enter", "Backspace"].includes(key)) e.preventDefault();

    if (key === "Enter") {
      doAddTag(inputValue.trim());
    }

    if (key === "Backspace") {
      if (inputValue) {
        setInputValue((prevInputValue: string) => prevInputValue.slice(0, -1));
        return;
      }

      const newTags: string[] = tags.slice(0, -1);
      setTags(newTags);
      onChange?.(newTags);
    }
  };

  const doBlur = () => {
    doAddTag(inputValue.trim());
  };

  const doAddTag = (tag: string) => {
    if (!tag || tags.includes(tag) || (maxTags && tags.length >= maxTags)) {
      setInputValue("");
      return;
    }

    const newTags = [
      ...tags,
      ...tag
        .split(
          typeof separator === "string"
            ? separator || ","
            : new RegExp(separator.map((s: string) => `\\${s}`).join("|"))
        )
        .map((entry: string) => entry.trim()),
    ];

    setTags(newTags);
    setInputValue("");
    onChange?.(newTags);
  };

  const doRemoveTag = (tag: string) => {
    const newTags: string[] = tags.filter((t: string) => t !== tag);

    setTags(newTags);
    onChange?.(newTags);
  };

  return (
    <div className="x-input-tags-root" style={{ ...style?.root }}>
      <Flex
        gap={8}
        className="x-input-tags-container"
        style={{ ...style?.container }}
      >
        {tags.map((tag: string, idx: number) => (
          <Badge
            key={idx}
            style={{ ...style?.badge?.root }}
            onRemove={() => doRemoveTag(tag)}
          >
            <div
              className="x-input-tags-label"
              style={{ ...style?.badge?.label }}
            >
              {tag}
            </div>
          </Badge>
        ))}

        <input
          type="text"
          id={id}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          className="x-input-tags-input"
          style={{ ...style?.input }}
          onChange={doChangeValue}
          onKeyDown={doKeyDown}
          onBlur={doBlur}
        />
      </Flex>
    </div>
  );
};

export default InputTags;

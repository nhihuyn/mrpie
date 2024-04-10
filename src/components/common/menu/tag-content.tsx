import React, { useState } from "react";
import { ConfigProvider, Tag } from "antd";

interface TagContentProps {
  data: {
    id: string;
    title: string;
  }[];
}

const TagContent: React.FC<TagContentProps> = ({ data }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleChange = (tag: string, checked: boolean) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryHover: "#EAAEAE",
          colorText: "#D4D4D8",
        },
        components: {
          Tag: {
            colorPrimary: "#EAAEAE",
            colorPrimaryActive: "#EAAEAE",
            defaultBg: "#F5F5F5",
          },
        },
      }}
    >
      <div className="pr-1">
        {data?.map((tagObject, index) => (
          <Tag.CheckableTag
            checked={selectedTags.includes(tagObject.title)}
            onChange={(checked) => handleChange(tagObject.title, checked)}
            key={tagObject.title}
            className=" border-2 border-[#D9D9D9] text-base rounded-md text-semibold  mt-4 cursor-pointer "
          >
            {tagObject.title}
          </Tag.CheckableTag>
        ))}
      </div>
    </ConfigProvider>
  );
};

export default TagContent;

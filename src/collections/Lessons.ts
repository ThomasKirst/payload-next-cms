import { CollectionConfig } from "payload/types";

const Lessons: CollectionConfig = {
  slug: "lessons",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "code",
      type: "code",
    },
  ],
  access: {
    read: () => true,
  },
};

export default Lessons;

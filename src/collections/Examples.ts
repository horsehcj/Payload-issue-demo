import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
  slug: 'examples',
  admin: {
    useAsTitle: 'someField',
  },
  fields: [
    {
      name: 'someField',
      type: 'text',
    },
    {
      name: "arrayField",
      label: "Array Field",
      type: "array",
      minRows: 1,
      required: true,
      localized: true,
      fields: [
        {
          type: "relationship",
          name: "city",
          label: "City",
          relationTo: "cities",
          required: true,
        },
      ],
    },
  ],
}

export default Examples;
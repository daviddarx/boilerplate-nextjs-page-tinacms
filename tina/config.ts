import { defineConfig } from 'tinacms';

const slugify = (value = 'no-value') => {
  return `${value
    .toLowerCase()
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\u0300-\u036f]/g, '')}`;
};

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: '5ba0fc2c-2880-412a-95f3-0663a036609c', // Get this from tina.io
  token: 'afdf7366a125c0c80c6de581bf5798d93084d3a8', // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        label: 'Pages',
        name: 'page',
        path: 'content/pages',
        fields: [
          {
            label: 'Title',
            name: 'title',
            type: 'string',
            isTitle: true,
            required: true,
          },
          {
            label: 'Body',
            name: 'body',
            type: 'rich-text',
            isBody: true,
          },
        ],
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values.title);
            },
          },
        },
      },
      {
        label: 'Categories',
        name: 'category',
        path: 'content/categories',
        fields: [
          {
            label: 'Title',
            name: 'title',
            type: 'string',
            isTitle: true,
            required: true,
          },
        ],
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values.title);
            },
          },
        },
      },
      {
        label: 'Posts',
        name: 'post',
        path: 'content/posts',
        defaultItem: {
          title: 'Default title',
        },
        fields: [
          {
            label: 'Title',
            name: 'title',
            type: 'string',
            isTitle: true,
            required: true,
          },
          {
            label: 'Category',
            name: 'category',
            type: 'reference',
            collections: ['category'],
          },
          {
            label: 'Date',
            name: 'date',
            type: 'datetime',
            ui: {
              timeFormat: 'HH:mm',
            },
          },
          {
            label: 'Disabled',
            name: 'disabled',
            type: 'boolean',
          },
          { label: 'Image', name: 'image', type: 'image' },
          {
            label: 'Body',
            name: 'body',
            type: 'rich-text',
            isBody: true,
          },
          {
            label: 'Options',
            name: 'options',
            type: 'object',
            fields: [
              {
                label: 'Multiple select list',
                name: 'listMultiple',
                type: 'string',
                list: true,
                options: [
                  {
                    label: 'Value 1',
                    value: 'value-1',
                  },
                  {
                    label: 'Value 2',
                    value: 'value-2',
                  },
                ],
              },
              {
                label: 'Single select list',
                name: 'listSingle',
                type: 'string',
                options: [
                  {
                    label: 'Value 1',
                    value: 'value-1',
                  },
                  {
                    label: 'Value 2',
                    value: 'value-2',
                  },
                ],
              },
              { label: 'Number', name: 'number', type: 'number' },
            ],
          },
          {
            label: 'Objects',
            name: 'objects',
            type: 'object',
            list: true,
            fields: [
              {
                label: 'Title',
                name: 'title',
                type: 'string',
              },
              {
                label: 'Description',
                name: 'description',
                type: 'string',
                ui: {
                  component: 'textarea',
                },
              },
            ],
            ui: {
              itemProps: (item) => {
                return { label: item?.title }; // Set the title on the overview
              },
              defaultItem: {
                title: 'Default title',
                description: 'Default description',
              },
            },
          },
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
          filename: {
            slugify: (values) => {
              return slugify(values.title);
            },
          },
        },
      },
    ],
  },
});

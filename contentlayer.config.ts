import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (project) => `/projects/${project._raw.flattenedPath}/`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
});

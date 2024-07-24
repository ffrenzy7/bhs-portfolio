import { defineConfig } from 'sanity'
import { media } from 'sanity-plugin-media'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId, singletonsList } from '@/sanity/lib/constants'
import { structure } from '@/sanity/structure'
import schemas from '@/sanity/schemas'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: schemas,
  },

  // studio: {
  //   components: {
  //     logo: CustomLogo,
  //   },
  // },

  document: {
    // Hide + icon for creating a new document in singletons
    // Also hide document from "+ Create" button
    newDocumentOptions: (prev, context) => {
      return prev.filter((document) => !singletonsList.includes(document.templateId))
    },
    actions: (prev, { schemaType }) => {
      if (singletonsList.includes(schemaType)) {
        return prev.filter((prevAction) => prevAction.action == 'publish')
      }

      return prev
    },
  },

  plugins: [
    media(),
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})

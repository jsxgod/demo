import { CmsModelMaterial } from "@/types/cms/Model.types";
import { gql, GraphQLClient } from "graphql-request";

const gqlClient = new GraphQLClient(process.env.HYGRAPH_ENDPOINT || "", {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

export const getMaterialsCmsData = async () => {
  const query = gql`
    {
      materials {
        catalogId
        name
        media {
          url
          width
          height
          mimeType
        }
      }
    }
  `;

  const data: { materials: CmsModelMaterial[] } = await gqlClient.request(
    query
  );

  return data?.materials || [];
};

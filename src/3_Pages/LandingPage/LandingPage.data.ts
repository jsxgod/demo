import { CmsModelLandingPage } from "@/types/cms/Model.types";
import { gql, GraphQLClient } from "graphql-request";

const gqlClient = new GraphQLClient(process.env.HYGRAPH_ENDPOINT || "", {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

export const getLandingPageCmsData = async () => {
  const query = gql`
    query {
      landingPages {
        sections {
          title
          dynamicGridCards {
            dynamicMedia {
              type
              horizontalAlignment
            }
          }
        }
      }
    }
  `;

  const data: CmsModelLandingPage[] = await gqlClient.request(query);
  const landingPageData = data?.[0] || {};

  return landingPageData;
};

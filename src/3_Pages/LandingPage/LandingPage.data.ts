import { CmsModelLandingPage } from "@/types/cms/Model.types";
import { gql, GraphQLClient } from "graphql-request";

const gqlClient = new GraphQLClient(process.env.HYGRAPH_ENDPOINT || "", {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

export const getLandingPageCmsData = async () => {
  const query = gql`
    {
      landingPages {
        cards {
          variant
          heading {
            title
            description
          }
          mainContent {
            title
            description {
              html
              markdown
              text
            }
            ctaComponents {
              __typename
              ... on Button {
                label
                url
                color {
                  hex
                }
              }
              ... on DownloadButton {
                label
                url
                color {
                  hex
                }
              }
            }
          }
          showBackground
          backgroundColumnWidth
          isShifted
          primaryMediaVerticalAlignment
          primaryMedia {
            url
            width
            height
            mimeType
          }
          secondaryMedia {
            url
            width
            height
            mimeType
          }
        }
      }
    }
  `;

  const data: { landingPages: CmsModelLandingPage[] } = await gqlClient.request(
    query
  );

  const landingPageData = data?.landingPages?.[0] || {};

  return landingPageData;
};

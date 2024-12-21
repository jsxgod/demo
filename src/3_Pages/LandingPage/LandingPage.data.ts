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
          dynamicGridCards {
            cardColumns
            cardAlignment
            isAlignedToTitle
            title
            titleStartColumn
            titleColumns
            description {
              text
              markdown
              html
            }
            descriptionStartColumn
            descriptionColumns
            ctaDirection
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
            dynamicMedia {
              type
              verticalAlignment
              horizontalAlignment
              largeMedia {
                url
                width
                height
                mimeType
              }
              smallMedia {
                url
                width
                height
                mimeType
              }
            }
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

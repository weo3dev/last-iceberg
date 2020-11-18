import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocale } from '../hooks/locale';

function useTranslations() {
  // Grab the locale (passed through context) from the Locale Provider
  // through useLocale() hook
  const { locale } = useLocale();
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query);

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      translations: item.node.translations,
    };
  });

  // Only return translations for the current locale
  const { translations } = simplified.filter(
    lang => lang.name === locale,
  )[0];

  return translations;
}

export default useTranslations;

const query = graphql`
  query useTranslations {
    rawData: allFile(
      filter: { sourceInstanceName: { eq: "translations" } }
    ) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            monthText
            addToCalendar

            involvedOne
            involvedTwo

            videoDrum
            videoSing
            videoDance
            videoJustice

            involvedHeaderOne
            involvedHeaderTwo
            involvedTitleChange
            involvedTitleMake
            involvedMakeParagraphTopline
            involvedMakeParagraphBody
            involvedButtonDonateOne
            involvedButtonDonateTwo
            involvedTitlePledge
            involvedPledgeParagraph
            involvedEmailHere
            involvedButtonPledgeOne
            involvedButtonPledgeTwo

            aboutHeaderOne
            aboutHeaderTwo
            aboutTitleOne
            aboutTitleTwo
            aboutTitleThree
            aboutTitleFour
            aboutParagraphOne
            aboutParagraphTwo
            aboutParagraphThree

            pledgePopUp
            pledgeSocialText

            supportHeaderOne
            supportHeaderTwo
            supportParagraph
            supportButtonShopOne
            supportButtonShopTwo

            featuringHeader
            featuringInfoOne
            featuringInfoTwo

            collageR1
            collageR2G1
            collageR2G2
            collageR2G3
            collageR3G1
            collageR3G2
            collageR4G1
            collageR4G2
            collageR5G1
            collageR5G2

            buttonDonate
          }
        }
      }
    }
  }
`;

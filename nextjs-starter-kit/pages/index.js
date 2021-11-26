import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";
import { pageHandler } from "@/lib/pages-handler";

export default function Index() {

  const { t } = useTranslation();

  return (
    <>
      Index
      <div>{t('testTranslation')}</div>
    </>
  );

}

export async function getStaticProps(context) {
  
  const pageData = await pageHandler(context, serverSideTranslations);

  return {
    props: {
      ...pageData.sst,
      preview: pageData.preview
    },
  }
}

import Layout from "@components/layouts/admin";
import CreateOrUpdateTaxForm from "@components/tax/tax-form";
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CreateTaxPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-5 sm:py-8 flex border-b border-dashed border-border-base">
        <h1 className="text-lg font-semibold text-heading">
          {t("form:form-title-create-tax")}
        </h1>
      </div>
      <CreateOrUpdateTaxForm />
    </>
  );
}
CreateTaxPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["table", "form", "common"])),
  },
});

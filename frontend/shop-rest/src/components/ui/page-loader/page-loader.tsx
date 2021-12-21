import cn from "classnames";
import styles from "./page-loader.module.css";
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

const PageLoader = ({ text = "text-loading" }) => {
  const { t } = useTranslation("common");
  return (
    <div
      className={cn(
        "w-full h-screen flex flex-col items-center justify-center"
      )}
    >
      <div className="flex relative">
        <div className={styles.page_loader}></div>
        <h3 className="text-sm font-semibold text-body italic absolute top-1/2 -mt-2 w-full text-center">
          {t(text)}
        </h3>
      </div>
    </div>
  );
};

export default PageLoader;

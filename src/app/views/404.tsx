import React from "react";
import Error from "~/assets/img/error.svg";
import Layout from "~/components/Layout";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFound:React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex justify-center flex-col container h-full">
        <Error className="max-w-full m-auto" />
        <button className="m-auto shadow-sm rounded-md bg-yellow-500 p-3 uppercase text-white" onClick={() => navigate(-1)}>{t("lbl.goBack")}</button>
      </div>
    </Layout>
  );
};

export default NotFound;
"use client";

import dynamic from "next/dynamic";
import styles from "./header.module.scss";
import InlineLoader from "../../common/loader";
import HeaderPublic from "./header-public";

const PrivateHeader = dynamic(() => import("../header/header-private"));

const HeaderBoth = () => {
  const isAuth = true;

  if (!isAuth) {
    return (
      <div className={styles.icon}>
        <InlineLoader />
      </div>
    );
  }

  if (!isAuth) {
    return <HeaderPublic />;
  }
  return <PrivateHeader />;
};

export default HeaderBoth;

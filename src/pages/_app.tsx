import CartMenu from "components/menu-cart";
import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/global.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <CartMenu />
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;

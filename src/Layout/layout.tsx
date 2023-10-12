import { Fragment } from "react";
import Header from "../components/Header/Header";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}

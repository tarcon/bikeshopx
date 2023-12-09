import { FC, h, Helmet, Fragment } from "nano-jsx";
import { Header } from "../components/Header.tsx";
import { Navigation } from "../components/Navigation.tsx";

export const App = (page: FC, aside: FC) => (
  <Fragment>
    <Helmet>
      <title>Bikeshop X</title>
      <link rel="stylesheet" href="public/css/chota.css" />
      <link rel="stylesheet" href="public/css/header.css" />
      <link
        rel="stylesheet"
        href="public/css/inline-progress-indicator.css"
      />
      <link rel="stylesheet" href="public/css/main.css" />
    </Helmet>
    <Header />
    <div className="card">
      <Navigation />
      <div className="row">
        <div className="col-8">
          <section style={{ padding: "0 24px" }}>
            {page}
          </section>
        </div>
        {aside && (
          <div className="col-4">
            Aside
          </div>
        )}
      </div>
    </div>
  </Fragment>
);

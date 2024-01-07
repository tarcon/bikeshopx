import { FC, Fragment, Helmet } from "nano-jsx"
import { Header } from "./Header.tsx"
import { Navigation } from "./Navigation.tsx"

export const Shop = (props: { page: FC; activePath: string; aside?: FC }) => (
  <Fragment>
    <Helmet>
      <title>Bikeshop X</title>
      <link rel="stylesheet" href="public/css/chota.css" />
      <link rel="stylesheet" href="public/css/header.css" />
      <link rel="stylesheet" href="public/css/main.css" />
      <script src="public/js/htmx.min.js"></script>
    </Helmet>
    <Header />
    <div className="card">
      <Navigation activePath={props.activePath} />
      <div className="row">
        <div className="col-8">
          <section style={{ padding: "0 24px" }} id={"page"}>
            {props.page}
          </section>
        </div>
        <aside className="col-4" id={"sidebar"}>
        </aside>
      </div>
    </div>
  </Fragment>
)

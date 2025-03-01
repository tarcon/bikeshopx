import { SavingIndicator } from "./progress-indicators/SavingIndicator.tsx"
import { withStyles } from "nano-jsx"
import { BikeViewModel } from "../pages/BikesPage.tsx"

export function BikeProductCard({
  description,
  ean,
  name,
  price,
  productImageFileName,
}: BikeViewModel) {
  return (
    <div className="col-4 card" key={ean}>
      <header>
        <h4 className="text-uppercase">{name}</h4>
      </header>
      <p>{description}</p>
      <img src={`/images/${productImageFileName}`} alt={name} />
      <footer>
        <h1>{price}</h1>
        <AddToCartButton ean={ean.toString()} />
      </footer>
    </div>
  )
}

function AddToCartButton(props: { ean: string }) {
  // language=CSS
  const CSS = `

    button.htmx-request .savingIndicator {
      display: inline-block;
    }
  `

  return withStyles(CSS)(
    <button
      value={props.ean}
      hx-vals={`{"ean": "${props.ean}"}`}
      hx-post={"/cart"}
      hx-target={"#sidebar"}
    >
      Add to cart <SavingIndicator />
    </button>,
  )
}

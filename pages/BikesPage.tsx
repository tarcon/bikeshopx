import { BikeProductCard } from "../components/BikeProductCard.tsx"
import { Page } from "../components/Page.tsx"

export type BikesViewModel = BikeViewModel[]

export type BikeViewModel = {
  ean: number
  name: string
  price: string
  productImageFileName: string
  description: string
}

// todo tarcon - use gateway to fetch the data
const bikesPage: BikesViewModel = [
  {
    ean: 123908123,
    name: "Carbono R3",
    price: "1.000 €",
    productImageFileName: "carbono.jpg",
    description:
      "A racing bike with a long heritage of classic race wins. Prefered by dentists.",
  },
  {
    ean: 235235235,
    name: "Generalized Asphalt G-Works",
    price: "2.000 €",
    productImageFileName: "gworks.jpg",
    description:
      "An even racier bike used by most of the professional riders. Made in china, but priced like artisan work from the USA.",
  },
  {
    ean: 435643357,
    name: "Dungeon Ultra SLX",
    price: "3.000 €",
    productImageFileName: "dungeon.jpg",
    description: "German engineered racing bike with nice looks.",
  },
]

export function BikesPage() {
  return (
    <Page
      activePath={"/bikes"}
      page={
        <div className="row">
          {bikesPage.map((bike: BikeViewModel) => (
            <BikeProductCard
              ean={bike.ean}
              name={bike.name}
              price={bike.price}
              productImageFileName={bike.productImageFileName}
              description={bike.description}
            />
          ))}
        </div>
      }
    />
  )
}

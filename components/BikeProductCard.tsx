import { InlineProgressIndicator } from "./progress-indicators/InlineProgressIndicator.tsx";

export function BikeProductCard({
  description,
  ean,
  name,
  price,
  productImageFileName,
}: BikeViewModel) {
  return (
    <div className="col-4 card">
      <header>
        <h4 className="text-uppercase">{name}</h4>
      </header>
      <p>{description}</p>
      <img src={`public/images/${productImageFileName}`} alt={name} />
      <footer>
        <h1 className="text-gray-200 font-bold text-xl">{price}</h1>
        <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
          Add to cart {/* <InlineProgressIndicator />*/}
        </button>
      </footer>
    </div>
  );
}

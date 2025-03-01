import { CartViewModel } from "../shop/ViewModels.ts"

export function Cart(viewModel: CartViewModel) {
  const cartBikesTableRows = viewModel.bikes.map((bike) => (
    <tr key={bike.ean}>
      <td className="">{bike.name}</td>
      <td className="text-right">{bike.count}</td>
      <td className="text-right">{bike.price}</td>
      <td className="">
        <RemoveBikeFromCartButton ean={bike.ean} />
      </td>
    </tr>
  ))

  return (
    <div className="card">
      <header>
        <h4>Shopping cart</h4>
      </header>
      <hr />
      <table className="table-auto">
        <tbody>
          {cartBikesTableRows}
          <tr>
            <td>
              <b>Total:</b>
            </td>
            <td />
            <td className="text-right">
              <b>{viewModel.totalPrice}</b>
            </td>
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function RemoveBikeFromCartButton(props: { ean: number }) {
  return (
    <button className="button icon-only">
      <RemoveFromCartSvgIcon color="steelblue" />
      {/* <InlineProgressIndicator />*/}
    </button>
  )
}

function RemoveFromCartSvgIcon(props: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={props.color ?? "black"}
      width="18px"
      height="18px"
    >
      <path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}

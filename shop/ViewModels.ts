export type BikesPageViewModel = {
  bikes: BikesViewModel
}
export type BikesViewModel = BikeViewModel[]

export type BikeViewModel = {
  ean: number
  name: string
  price: string
  productImageFileName: string
  description: string
}

export type CartViewModel = {
  bikes: Array<{
    count: number
    ean: number
    name: string
    price: string
  }>
  totalPrice: string
}

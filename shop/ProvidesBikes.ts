import type { Bike } from "./Bike.ts"

export interface ProvidesBikes {
  fetchPurchasableBikes(): Promise<Array<Bike>>
}

import type { Bike } from "./Bike.ts"

export interface ProvidesBike {
  fetchBikeByEAN(ean: number): Promise<Bike>
}

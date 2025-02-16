import { z } from "zod"

export const AddBikeToCartInputSchema = z.object({
  ean: z.string(),
})

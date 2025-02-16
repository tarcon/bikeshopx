import { Context, Hono } from "hono"
import { serveStatic } from "hono/deno"
import { validator } from "hono/validator"

import { assert } from "@std/assert"

import { renderSSR } from "nano-jsx"

import { zValidator } from "@hono/zod-validator"

import { WelcomePage } from "./pages/WelcomePage.tsx"
import { BikesPage } from "./pages/BikesPage.tsx"
import { Cart } from "./components/Cart.tsx"
import { BikeBackendGateway } from "./shop/BikeBackendGateway.ts"
import { AddBikeToCartInputSchema } from "./shop/AddBikeToCart.input.ts"

const app = new Hono()

const bikeBackendGateway = new BikeBackendGateway()

app.get(
  "/",
  (c) => c.html(renderSSR(WelcomePage)),
)

app.get(
  "/bikes",
  (c) => c.html(renderSSR(BikesPage)),
)

app.post(
  "/cart",
  zValidator("form", AddBikeToCartInputSchema),
  async (c) => {
    const body = c.req.valid("form")
    const bikeToAdd = await bikeBackendGateway.fetchBikeByEAN(
      parseInt(body.ean),
    )

    // todo tarcon - add use case application logic and consider previously added bikes
    const allBikesInCart = [{
      count: 1,
      ean: bikeToAdd.ean,
      name: bikeToAdd.name,
      price: bikeToAdd.price + " €",
    }]

    const viewModel = {
      bikes: allBikesInCart,
      totalPrice: bikeToAdd.price + " €",
    }

    return c.html(renderSSR(Cart(viewModel)))
  },
)

app.use("*", serveStatic({ root: "./public" }))

Deno.serve(app.fetch)

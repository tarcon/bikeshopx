import { Hono } from "hono"
import { serveStatic } from "hono/deno"

import { renderSSR } from "nano-jsx"

import { WelcomePage } from "./pages/WelcomePage.tsx"
import { BikesPage } from "./pages/Bikes.tsx"
import { ShoppingCartPage } from "./components/ShoppingCartPage.tsx"

const app = new Hono()

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
  (c) => c.html(renderSSR(ShoppingCartPage({}))),
)

app.use("*", serveStatic({ root: "./public" }))

Deno.serve(app.fetch)

import { recursiveReaddir } from "recursiveReaddir"
import { fromFileUrl } from "path"

import * as Peko from "peko"
import { renderSSR } from "nano-jsx"

import { Welcome } from "./pages/Welcome.tsx"
import { BikesPage } from "./pages/Bikes.tsx"
import { ShoppingCart } from "./components/ShoppingCart.tsx"

const router = new Peko.Router()

router.use(Peko.logger(console.log))

const staticFiles = await recursiveReaddir(
  fromFileUrl(new URL("./public", import.meta.url)),
)

router.addRoutes(staticFiles.map((file): Peko.Route => {
  const fileRoute = file.slice(Deno.cwd().length + 1).replaceAll(/\\/g, "/")
  return {
    path: `/${fileRoute}`,
    handler: Peko.staticFiles(
      new URL(`./${fileRoute}`, import.meta.url),
    ),
  }
}))

router.get(
  "/",
  Peko.ssr(() => renderSSR(Welcome)),
)

router.get(
  "/bikes",
  Peko.ssr(() => renderSSR(BikesPage)),
)

router.post(
  "/cart",
  Peko.ssr((foo) => renderSSR(() => ShoppingCart(foo))),
)

Deno.serve((req) => router.handle(req))

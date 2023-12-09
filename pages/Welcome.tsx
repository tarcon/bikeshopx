import { Shop } from "../components/Shop.tsx"

export const Welcome = () => (
  <Shop
    activePath={"/"}
    page={
      <div class="row">
        <div class="col-6-md">
          <p>
            Welcome to our online bike shop with clean architecture. Order your
            bike, assured that our digital systems are built in a technically
            sustainable way.
          </p>
        </div>

        <div class="col-3-md">
          <img
            src="public/images/cleancode.jpg"
            width="100"
            alt="Powered by clean code"
          />
        </div>
      </div>
    }
  />
)

import { FC } from "nano-jsx";
import { InlineProgressIndicator } from "./progress-indicators/InlineProgressIndicator.tsx";

export function Navigation() {
  return (
    <ul style={{ marginTop: -30 }}>
      <NavigationButton
      >
        Welcome
      </NavigationButton>
      <NavigationButton
      >
        See Bikes
      </NavigationButton>
    </ul>
  );
}

function NavigationButton(props: {
  active: boolean;
  children: FC;
}) {

  return (
    <button
      className={props.active ? "button primary" : "button"}
    >
      {props.children}
        { /* <InlineProgressIndicator />*/}
    </button>
  );
}

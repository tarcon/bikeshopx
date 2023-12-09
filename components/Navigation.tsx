import { FC } from "nano-jsx";
import { InlineProgressIndicator } from "./progress-indicators/InlineProgressIndicator.tsx";

export function Navigation(props: { activePath: string }) {
  return (
    <ul style={{ marginTop: -30 }} hx-boost="true">
      <NavigationButton path={"/"} active={props.activePath === "/"}>
        Welcome
      </NavigationButton>
      <NavigationButton path={"/bikes"} active={props.activePath === "/bikes"}>
        See Bikes
      </NavigationButton>
    </ul>
  );
}

function NavigationButton(props: {
  path: string;
  active?: boolean;
  children: FC;
}) {
  return (
    <a
      href={props.path}
      className={props.active ? "button primary" : "button"}
    >
      {props.children}
      {/* <InlineProgressIndicator />*/}
    </a>
  );
}

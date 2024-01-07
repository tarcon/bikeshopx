import { withStyles } from "nano-jsx"

// language=CSS
const CSS = `
  .savingIndicator {
    display: none;
  }

  @keyframes blink {
    0% {
      opacity: .2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: .2;
    }
  }

  .savingAnimation span {
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  .savingAnimation span:nth-child(2) {
    animation-delay: .2s;
  }

  .savingAnimation span:nth-child(3) {
    animation-delay: .4s;
  }
`

export function SavingIndicator() {
  return withStyles(CSS)(
    <span className="savingIndicator savingAnimation">
      &nbsp;
      <span>•</span>
      <span>•</span>
      <span>•</span>
    </span>,
  )
}

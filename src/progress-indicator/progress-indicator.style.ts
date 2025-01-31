import { css } from "lit";

export default css`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }

  .progressbar {
    display: flex;
    align-items: center;
    gap: var(--tap-sys-spacing-3);
  }

  .step {
    display: block;
    height: var(--tap-sys-spacing-3);
    flex: 1;
    background-color: var(--tap-sys-color-surface-tertiary);
  }

  .active {
    background-color: var(--tap-sys-color-border-inverse-primary);
  }
`;

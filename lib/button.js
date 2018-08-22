import { html } from '@polymer/lit-element.js';

/**
 * @returns {TemplateResult}
 */
export const ButtonSharedStyles = html`
<style>
  button {
    font-size: inherit;
    vertical-align: middle;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  button:hover svg {
    fill: var(--app-primary-color);
  }
</style>
`;
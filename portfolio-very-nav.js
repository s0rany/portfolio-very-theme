/**
 * Copyright 2025 s0rany
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-very-nav`
 * 
 * @demo index.html
 * @element portfolio-very-nav
 */
export class PortfolioVeryNav extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-nav";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-very-nav.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      color: { type: String },

    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        border: 2px solid red;
        height: 50px;
        width: auto;
        background-color: var(--ddd-theme-infoLight);
        padding: var(--ddd-spacing-4);
      }
      .buttons {
        display: flex;
        justify-content: space-between;
        color: red;
        font-family: var(--ddd-font-navigation-24);
      }
      button {
        background-color: var(--ddd-theme-primary, #333);
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: var(--ddd-radius-md, 8px);
        cursor: pointer;
        font-size: var(--ddd-font-size-s, 1rem);
      }
      button:hover {
        background-color: var(--ddd-theme-primary-hover, #555);
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="buttons">
          <button>About</button>
          <button>Research</button>
          <button>Presentations & Publications</button>
          <button>Professional Development</button>
          <button>Contact</button>
        </div>
      </div>`;
  }

  /**
   * haxProperties integration via file reference   <h3><span>${this.t.title}:</span> ${this.title}</h3>
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryNav.tag, PortfolioVeryNav);
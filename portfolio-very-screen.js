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
 * @element portfolio-very-screen
 */
export class PortfolioVeryScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-screen";
  }

  constructor() {
    super();
    this.title = "";
    this.color = "infoLight"
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-very-screen.ar.json", import.meta.url).href +
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
        background-color: var(--ddd-theme-default);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        width: auto;
        height: 500px;
        border: 2px solid red;
        background-color: var(--ddd-theme-default);
        padding: var(--ddd-spacing-4);
      }
      .info {
        color: red;
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
      <div class="info">
        <slot></slot>
      </div>
    </div>`;
  }
  updated(changedProperties) {
    if (changedProperties.has("color")) {
      this.style.setProperty("--ddd-theme-default", `var(--ddd-theme-default-${this.color})`);
    }
  }
    

  /**
   * haxProperties integration via file reference   <h3><span>${this.t.title}:</span> ${this.title}</h3>
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryScreen.tag, PortfolioVeryScreen);
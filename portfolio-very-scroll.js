/**
 * Copyright 2025 s0rany
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import '@haxtheweb/scroll-button/scroll-button.js';

import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-very-scroll`
 * 
 * @demo index.html
 * @element portfolio-very-scroll
 */
export class PortfolioVeryScroll extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-scroll";
  }

  constructor() {
    super();
    this.title = "";
    this.img = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-very-scroll.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      img: { type: String },

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
        height: 150px;
        background-color: var(--ddd-theme-default-beaverBlue);
        display: flex;
        justify-content: space-around;
        align-items: center;
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
      <img src="${this.img}" alt="footer image" height="100"/>
      <scroll-button></scroll-button>
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

globalThis.customElements.define(PortfolioVeryScroll.tag, PortfolioVeryScroll);
/**
 * Copyright 2025 s0rany
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTitle extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-title";
  }

  constructor() {
    super();
    this.title = "My Portfolio";
    this.img = "";
    this.color = "infoLight"
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-very-title.ar.json", import.meta.url).href +
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
        background-color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        background-color: var(--ddd-theme-default-nittanyNavy);
        padding: var(--ddd-spacing-4);
        width: auto;
        height: 80px;
        font-size:var(--ddd-font-size-4xl);
        display: flex;
        flex-direction: row;
        align-items: center; 
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="wrapper">
        <img src="${this.img}" alt="portfolio image" height="50" />
            <p>${this.title}</p>
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

globalThis.customElements.define(PortfolioVeryTitle.tag, PortfolioVeryTitle);

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
    this.screenNumber = null;
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
      screenNumber: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        //display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-default);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        width: 100%;
        height: 700px;
        background-color: var(--ddd-theme-default);
      }
      .title{
        position: relative;
        top: var(--ddd-spacing-10); 
        left: var(--ddd-spacing-5);
        font-size:var(--ddd-font-size-xxl);
        color: var(--ddd-theme-default-nittanyNavy);
      }
      .info {
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center; 
        height: 100%;
        color: var(--ddd-theme-default-coalyGray);
      }
      ::slotted(img)
      {
        width: auto;
      }
      @media (max-width: 700px)
      {
        ::slotted(img){
          height: 200px;
        }
      }
   
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <div class="title">${this.title}</div>
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

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.dispatchEvent(new CustomEvent('screen-added', {
      bubbles: true,
      composed: true,
      detail: {
        value: this

      }
    }))

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
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
        width: 100%;
        max-width: 100vw;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper{
        width: 100%;
        max-width: 100vw;
        display: flex;
        height: 50px;
        position: fixed;
      }
      /*
      .indent{
        opacity: 90%;
        background-color: var(--ddd-theme-default-beaverBlue);
        height: 100%;
        flex: 1;

        //width: 25%;
      }
        */
      .buttons {
        opacity: 90%;
        background-color: var(--ddd-theme-default-beaverBlue);
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: space-evenly;
        align-items: center; 
        font-family: var(--ddd-font-navigation-12);
      }
      .buttons a{
        font-size: var(--ddd-font-size-l);
        color: var(--ddd-theme-default-white);
      }
    
      @media (max-width: 900px)
      {
        .buttons a{
          font-size: var(--ddd-font-size-xs);
        }
      }
        
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper" >
        <div class="buttons">
          <slot></slot>
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
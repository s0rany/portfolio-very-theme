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
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.screens = [];
    
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      screens: {type: Array}
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
        //margin: var(--ddd-spacing-2);
        //padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }
      a, a:link, a:visited, a:hover, a:active {
        color: white;
        text-decoration: none; 
      }
     
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <slot name="title" ></slot>
    <portfolio-very-nav>
      ${this.screens.map((screen, index) => html `<a href="#${screen.number}" @click="${this.linkChange}" data-index="${index}">${screen.title}</a>`)}
    </portfolio-very-nav>
      <div class="wrapper" @screen-added="${this.addScreen}">
        <slot name="screens"></slot>
      </div>`;
  }

  linkChange(e) {
    let number = parseInt(e.target.getAttribute('data-index'));
    if (number>=0) {
      this.screens[number].element.scrollIntoView();
    }
  }
  addScreen(e) {
    const element = e.detail.value
    const screen = {
      number: element.screenNumber,
      title: element.title,
      element: element,
    }
    this.screens = [...this.screens, screen];
  }

  firstUpdated() {
    window.location.hash = "#1";    
    this.screens[1].element.scrollIntoView;
  }

  /**
   * haxProperties integration via file reference   <h3><span>${this.t.title}:</span> ${this.title}</h3>
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);
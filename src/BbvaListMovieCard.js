import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './BbvaListMovieCard-styles.js';
import "@boomovie/bbva-movie-card-bs/bbva-movie-card-bs.js"
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<bbva-list-movie-card></bbva-list-movie-card>
```

##styling-doc

@customElement bbva-list-movie-card
*/
export class BbvaListMovieCard extends LitElement {
  static get is() {
    return 'bbva-list-movie-card';
  }
  getData(data) {
    this.movieList = data;
  }
  // Declare properties
  static get properties() {
    return {
      movieList: { type: Object, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('bbva-list-movie-card-shared-styles')
    ];
  }
  _getMovieIdEvent(item){
    this.dispatchEvent(
      new CustomEvent('get-id-movie-event', {
        bubbles: true,
        composed: true,
        detail: item
      })
    );
  }
  // Define a template
  render() {
    return html`
    <div class="row row-cols-md-4 row-cols-sm-3 row-cols-1 justify-content-center">
        ${this.movieList.results.map(
          (card) => html`
          <div class="col mt-3">
            <div class="col-md-11"><bbva-movie-card-bs .movie=${card} .isextended=${false} @id-movie-event=${(e) =>this._getMovieIdEvent(e.detail)}></bbva-movie-card-bs></div>
          </div>
            `
            )}
    </div>
    `;
  }
}

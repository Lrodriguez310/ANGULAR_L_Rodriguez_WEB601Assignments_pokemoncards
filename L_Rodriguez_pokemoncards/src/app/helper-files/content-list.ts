import { Content } from "./content-interface";

export class ContentList {
  private _items: Content[]; // private array starts with an _

  constructor(item: Content) { // initially set the content array to be empty
    this._items = []; // initialize array
  }

  getitems(): Content[] { // getter method that returns the array
    return this._items;
  }

  addContent(oneitem: Content): void { // add content method that adds one item to the end of the array
    this._items.push(oneitem);
  }

  getLength(): number { // A method that returns the length of the array
    return this._items.length;
  }

  printProperties(index: number): string {
    if (this._items.length <= index || index < 0) {
      return `<h2>Error, invalid index requested: ${index}</h2>`;
    }
    return `<div class="content-list">
              <h1>${this._items[index].title}</h1>
              <p>${this._items[index].description}</p>
              <h6>${this._items[index].creator}</h6>
              <img src="${this._items[index].imgURL}">
              <div>${this._items[index].type}</div>
            </div>`;
  }
}
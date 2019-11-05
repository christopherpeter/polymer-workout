import { LitElement, html } from "lit-element";
import { repeat } from 'lit-html/directives/repeat';

class ListView extends LitElement {

    static get properties() {

        return {
            feeling: { type: String },
            todoList: { type: Array }
        }
    }

    constructor() {
        super();
        this.feeling = "worried";
        this.todoList = [];
    }


    render() {
            return html `
        ${repeat(this.todoList,(item)=> html`<div><input type="checkbox"/>${item.todoItem}</div>`)}
        `;
  }

}
customElements.define("list-view",ListView);
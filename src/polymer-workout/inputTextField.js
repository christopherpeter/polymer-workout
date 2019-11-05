import { LitElement, html } from "lit-element";

class InputField extends LitElement {

    static get properties() {

        return {
            todoItem: { type: String },
            todoListItem: { type: Array }
        }
    }

    constructor() {
        super();
        this.todoItem = "";
        this.todoListItem = [];

    }

    addItem() {
        //console.log(this.todoItem);

        let todoItem = {
            'id': new Date().valueOf(),
            'todoItem': this.todoItem,
            'complete': false
        };

        this.todoListItem.push(todoItem);

        this.dispatchEvent(new CustomEvent("addListItem", {
            bubbles: true,
            composed: true,
            detail: { todoList: this.todoListItem }
        }));
    }

    handleInput(e) {
        this.todoItem = e.target.value;
    }


    render() {
        return html `<input type="text" value=${this.todoItem} @input=${this.handleInput}/>
      &nbsp;
      <button @click=${this.addItem}>Add</button>
      `;
    }

}
customElements.define("input-field", InputField);
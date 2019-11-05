import { LitElement, html } from "lit-element";
import './inputTextField.js';
import './todoListView.js';

class PolymerWorkout extends LitElement {

    static get properties() {

        return {
            feeling: { type: String },
            todoList: { type: Array }
        }
    }

    constructor() {
        super();
        this.feeling = "sad";
        this.todoList = [];
    }

    firstUpdated() {
        this.addEventListener("addListItem", (e) => {
            this.todoList = e.detail.todoList;
            this.feeling = Math.random() * (10 - 1) + 1;
            //console.log(this.todoList);

        });
    }

    render() {

        return html `<input-field></input-field>
                     <list-view 
                     .feeling= ${this.feeling} .todoList=${this.todoList}>
                     </list-view>`;
    }
}

customElements.define('polymer-workout', PolymerWorkout);
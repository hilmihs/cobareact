import { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
export default class TodoBox extends Component {
    constructor(props){
        super(props)
        this.state = {data: [{title: "masak"}, {title: "koding"}, {title: "minum"}]}
    }

    addTodo = (title) => {
        console.log('lagi add',title)
this.setState(state => ({data: [...state.data, {title}]}))
    }

    render(){
        console.log(this.state.data)
        return (
            <div>
                <h1>TODO</h1>
                <TodoForm add={this.addTodo}/>
                <TodoList data={this.state.data}/>
            </div>
        )
    }
}
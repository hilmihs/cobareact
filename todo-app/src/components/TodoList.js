import TodoItem from "./TodoItem"

export default function TodoList(props) {
    console.log('list', props.data)
    const list = props.data.map(item => (<TodoItem todo={item}/>))
    return (
        <ol>
            {list}
        </ol>
    )
}
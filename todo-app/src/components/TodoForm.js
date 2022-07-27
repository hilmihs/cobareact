import { Component } from "react";


export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.add(this.state.value)
        this.setState({ value: '' })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="btn btn-primary" type="submit">Simpan</button>
            </form>
        );
    }
}
import React from 'react';

class AutoComplete extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            inputVal: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ inputVal: e.target.value });
    }
    render() {
        return (
            <div>
                <div>This is the autocomplete</div>
                <input type="text" value={this.state.inputVal} onChange={this.handleChange} />
                <ul>
                    <li>
                        
                    </li>
                </ul>
            </div>
        )
    }
}

export default AutoComplete;
import React from 'react';

class AutoComplete extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            inputVal: ''
        }
    }

    render() {
        return (
            <div>
                <div>This is the autocomplete</div>
            </div>
        )
    }
}

export default AutoComplete;
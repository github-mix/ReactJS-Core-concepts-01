import React from 'react'

class SearchField extends React.Component {
    inputRef = React.createRef();

    state = {
        inputValue: null
    };

    handleClick = () => {
        this.setState({
            inputValue: this.inputRef.current.value
        })
    }

    render() {
        return (
            <div className="search-field">
                <input ref={this.inputRef} type="text" className="large-padding" />
                <button className="large-padding" onClick={this.handleClick}>Search</button>
                <div>Search request: {this.state.inputValue}</div>
            </div>
        )
    }
}

export default SearchField

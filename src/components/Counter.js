import React from 'react'

class Counter extends React.Component {
    state = {
        count: 0
    };

    handleClickLess = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    handleClickMore = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className="counter">
                <button className="large-padding" onClick={this.handleClickLess}>less</button>
                <b className="large-padding">{this.state.count}</b>
                <button className="large-padding" onClick={this.handleClickMore}>more</button>
            </div>
        )
    }
}

export default Counter

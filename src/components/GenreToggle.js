import React from 'react'

class GenreToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTabId: 0
        };
    }

    handleClick = (selectedTabId) => {
        this.setState({
            selectedTabId: selectedTabId
        })
    }

    render() {
        const tabNames = this.props.genres;

        return (
            <div className="genre-toggle">
                {tabNames?.length && tabNames.map((tabName, i) => (
                    <button key={i}
                            className={`large-padding ${this.state.selectedTabId === i ? 'active' : ''}`}
                            onClick={() => this.handleClick(i)}>
                        {tabName}
                    </button>
                ))}
            </div>
        )
    }
}

export default GenreToggle

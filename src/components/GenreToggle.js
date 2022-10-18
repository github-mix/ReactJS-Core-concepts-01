import React from 'react'

class GenreToggle extends React.Component {
    state = {
        selectedTabId: 0
    };

    handleClick = (selectedTabId) => {
        this.setState({
            selectedTabId: selectedTabId
        })
    }

    render() {
        const tabNames = ['All', 'Documentary', 'Comedy', 'Horror', 'crime'];

        return (
            <div className="genre-toggle">
                {tabNames.map((tabName, i) => (
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

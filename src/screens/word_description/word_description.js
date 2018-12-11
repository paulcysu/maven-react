import React, { Component } from 'react';
import './word_description.css';

import Header from '../../components/header/header';

import { connect } from 'react-redux';
import { toggleComplete } from '../../actions';

class WordDescription extends Component {

    state = {
        complete: false
    }

    componentDidMount () {
        
    }

    renderBookData = () => {
        if (this.props.book.all) {
            return (                
                <div className="book-image-container">
                    <img src={this.props.book.all.image} alt="book" className="book-image"/>
                </div>
            )
        }
    }

    handleToggleComplete = () => {
        this.props.toggleComplete();
        this.setState({
            complete: !this.state.complete
        })
    }

    render () {
        return (
            <div>
                <Header title={this.props.book.all.title} back={true}/>
                {this.renderBookData()}
                <div className="description-container">
                    <div>{this.props.book.single.word}</div>
                    <div>{this.props.book.single.punctuation}</div>
                    <div>{this.props.book.single.type}</div>
                    <div>{this.props.book.single.definition}</div>
                    <div>{this.props.book.single.example}</div>
                </div>
                <button onClick={() => this.handleToggleComplete()}>{this.state.complete ? "Complete" : "Undo Complete"}</button>
            </div>
        )
    }
}

function mapStateToProps (state) {
    console.log("REDUX STATE: ", state)
    return {
        book: state.book
    }
}

export default connect(mapStateToProps, { toggleComplete })(WordDescription);


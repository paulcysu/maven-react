import React, { Component } from 'react';
import './home.css';

import Header from '../../components/header/header';
import WordList from '../../components/word_list/word_list';

import { connect } from 'react-redux';
import { getBook } from '../../actions';

class Home extends Component {

    componentDidMount () {
        this.getBookData();
        if (this.props.book) {
            this.setState({
                book: this.props.book
            })
        }
    }

    getBookData = () => {
        this.props.getBook();
    }

    renderBookData = () => {
        if (this.props.book) {
            return (                
                <div className="book-image-container">
                    <img src={this.props.book.image} alt="book" className="book-image"/>
                </div>
            )
        }
    }

    render () {
        return (
            <div>
                <Header title="Word List"/>
                {this.renderBookData()}
                <WordList book={this.props.book}/>
            </div>
        )
    }
}

function mapStateToProps (state) {
    console.log("REDUX STATE: ", state)
    return {
        book: state.book.all
    }
}

export default connect(mapStateToProps, { getBook })(Home);

import React, { Component } from 'react';
import "./word_list.css";

import { connect } from 'react-redux';
import { selectWord } from '../../actions';

import { Link } from 'react-router-dom';

class WordList extends Component {

    handleSelectWord = (id) => {
        this.props.selectWord(id);
    }

    render () {
        console.log("WORDLIST: ", this.props.book.word_list);
        let list = null;
        
        if (this.props.book.word_list) {
            list = this.props.book.word_list.map( item => {
                return (
                    <div key={item.id} className="word-container">
                        <Link to={`/word/${item.id}`} onClick={() => this.handleSelectWord(item.id)}>{item.word}</Link>
                    </div>
                )
            })
        }

        return (
            <div className="word-list-container">
                Word List
                {list}
            </div>
        )
    }
}

export default connect(null, { selectWord } )(WordList);
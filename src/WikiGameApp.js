import React, { Component } from 'react';
import WikiLinks from './WikiLinks.js';
import WikiSummary from './WikiSummary.js';

export default class WikiGameApp extends Component {
  render() {
    var isComplete = this.props.isComplete;
    var titles = this.props.titles;
    var currentTitle = this.props.currentTitle;
    var targetTitle = this.props.targetTitle;
    
    var addTitle = this.props.addTitle;
    var setCurrentTitle = this.props.setCurrentTitle;
    
    return (
      <div>
        <wikiSummary title = {currentTitle}/>
        <WikiLinks title = {currentTitle}/>
      </div>
    );
  }
}

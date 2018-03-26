import React, { Component } from 'react';
import WikiApi from './WikiApi.js';

export default class WikiLinks extends Component {
    constructor(props) {
        super(props);
        this.state = { links: [] };
    }
    
    componentDidMount() {
        WikiApi.getSummary(this.props.title).then(
            text => this.setState({ summary: text }));
    }
    
    render() {
        var links = this.state.links;
        var items = [];
        for (var i = 0; i < links.length; i++) {
            items.push(<p>{links(i)}</p>);
        }
        var coolerItems = links.map(link => <p>{link}</p>);
        return (<div>{coolerItems}</div>);
    }
}
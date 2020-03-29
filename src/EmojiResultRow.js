import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./css/EmojiResultRow.css";

export default class EmojiResultsRow extends PureComponent
{
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string,
    onClick: PropTypes.func
  };

  render()
  {
    function handleClick(e)
    {
      e.preventDefault();
      console.log('The link was clicked.');
    }

    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        onClick={handleClick}
      // data-clipboard-text={this.props.symbol}
      >
        <span className="title">{this.props.title} --- {this.props.price}</span>
        <span className="info">Click to see details</span>
      </div>
    );
  }
}

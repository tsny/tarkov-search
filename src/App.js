import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";

export default class App extends PureComponent
{
  constructor(props)
  {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event =>
  {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render()
  {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
        <h1>Maps</h1>
        <a href={`${process.env.PUBLIC_URL}/woods.png`}>Woods</a>
        <br></br>
        <a href={`${process.env.PUBLIC_URL}/reserve.png`}>Reserve</a>
        <br></br>
        <a href={`${process.env.PUBLIC_URL}/factory.png`}>Factory</a>
        <br></br>
        <a href={`${process.env.PUBLIC_URL}/customs.png`}>Customs</a>
      </div>
    );
  }
}

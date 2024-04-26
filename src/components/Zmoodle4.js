import React, { Component } from 'react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstHeadingColor: 'black', // Initial color of first heading
      secondHeadingFontStyle: 'normal', // Initial font style of second heading
      thirdHeadingSize: 20 // Initial font size of third heading
    };
  }

  // Function to handle click on the first button
  handleFirstButtonClick = () => {
    this.setState({ firstHeadingColor: 'blue' });
  };

  // Function to handle click on the second button
  handleSecondButtonClick = () => {
    this.setState({ secondHeadingFontStyle: 'italic' });
  };

  // Function to handle click on the third button
  handleThirdButtonClick = () => {
    this.setState({ thirdHeadingSize: 30 });
  };

  render() {
    const { firstHeadingColor, secondHeadingFontStyle, thirdHeadingSize } = this.state;

    return (
      <div>
        <h2 style={{ color: firstHeadingColor }}>First Heading</h2>
        <button onClick={this.handleFirstButtonClick}>Change Color</button>

        <h2 style={{ fontStyle: secondHeadingFontStyle }}>Second Heading</h2>
        <button onClick={this.handleSecondButtonClick}>Change Font Style</button>

        <h2 style={{ fontSize: `${thirdHeadingSize}px` }}>Third Heading</h2>
        <button onClick={this.handleThirdButtonClick}>Change Size</button>
      </div>
    );
  }
}

export default HeaderComponent;

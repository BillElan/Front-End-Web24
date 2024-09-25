"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    let text = "Like";

    if (this.state.liked) {
      // If the button has already been clicked, the text should change to "Sudah di Like. Batalkan?"
      text = "Sudah di Like. Batalkan?";
    } else {
      // If the button has not been clicked yet, the text should remain "Like"
      text = "Like";
    }

    return e("button", 
	{
      onClick: () => this.setState({ liked: !this.state.liked }),
    }, text);
  }
}

const domContainer = document.querySelector("#button");
ReactDOM.render(e(LikeButton), domContainer);
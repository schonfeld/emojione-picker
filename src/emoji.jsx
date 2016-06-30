var React = require("react");
var emojione = require("emojione");

var Emoji = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    // avoid rerendering the Emoji component if the shortname hasnt changed
    return nextProps.shortname != this.props.shortname;
  },

  _getChar: function() {
    try {
      return String.fromCodePoint(`0x${this.props.unicode}`);
    } catch(ex) {
      return false;
    }
  },

  render: function() {
    var char = this._getChar();
    if(!char) {
      return;
    }

    return <div
              {...this.props}
              onClick={this.props.onClick}
              tabIndex="0"
              className="emoji"
              title={this.props.name}>{char}</div>
  }
});

module.exports = Emoji;
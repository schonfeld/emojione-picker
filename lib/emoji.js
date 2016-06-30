var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require("react");
var emojione = require("emojione");

var Emoji = React.createClass({
  displayName: "Emoji",

  propTypes: {
    onClick: React.PropTypes.func
  },

  shouldComponentUpdate: function (nextProps, nextState) {
    // avoid rerendering the Emoji component if the shortname hasnt changed
    return nextProps.shortname != this.props.shortname;
  },

  _getChar: function () {
    try {
      return String.fromCodePoint(`0x${ this.props.unicode }`);
    } catch (ex) {
      return false;
    }
  },

  render: function () {
    var char = this._getChar();
    if (!char) {
      return null;
    }

    return React.createElement(
      "div",
      _extends({}, this.props, {
        onClick: this.props.onClick,
        tabIndex: "0",
        className: "emoji",
        title: this.props.name }),
      char
    );
  }
});

module.exports = Emoji;
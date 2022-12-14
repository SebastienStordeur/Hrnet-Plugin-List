function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var Option = function Option(props) {
  return React__default.createElement("li", {
    value: props.value,
    className: (props.defaultListStyle || 'default-list') + " " + (props.value === props.activeValue ? props.activeValueStyle || 'active-list' : props.listStyle),
    onClick: function onClick() {
      return props.onClick(props.value);
    }
  }, props.value);
};

var ListSelect = function ListSelect(props) {
  var _props$data;

  var _useState = React.useState(false),
      isMenuOpen = _useState[0],
      setIsMenuOpen = _useState[1];

  var _useState2 = React.useState(''),
      activeValue = _useState2[0],
      setActiveValue = _useState2[1];

  var openMenuHandler = function openMenuHandler() {
    setIsMenuOpen(function (prevValue) {
      return !prevValue;
    });
  };

  var setActiveValueHandler = function setActiveValueHandler(value) {
    setActiveValue(value);
  };

  return React__default.createElement("div", {
    id: 'select-wrapper',
    className: props["class"] || 'wrapper'
  }, React__default.createElement("div", null, React__default.createElement("ul", {
    className: 'h-8 py-1 px-4',
    onClick: openMenuHandler
  }, React__default.createElement("label", {
    id: activeValue ? activeValue : props.id
  }, activeValue ? activeValue : props.headline), React__default.createElement("div", {
    className: props.listContainerStyle || 'list-container'
  }, isMenuOpen && ((_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.map(function (value) {
    return React__default.createElement(Option, {
      value: value,
      key: Math.random().toString(),
      onClick: setActiveValueHandler,
      activeValue: activeValue,
      activeValueStyle: props.activeValueStyle,
      listStyle: props.listStyle,
      defaultListStyle: props.defaultListStyle
    });
  }))))));
};

exports.ListSelect = ListSelect;
//# sourceMappingURL=index.js.map

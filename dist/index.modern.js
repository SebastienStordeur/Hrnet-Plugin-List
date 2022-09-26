import React, { useState } from 'react';

const Option = props => {
  return React.createElement("li", {
    value: props.value,
    className: `${props.value === props.activeValue ? props.activeValueStyle : props.listStyle}`,
    onClick: () => props.onClick(props.value)
  }, props.value);
};

const ListSelect = props => {
  var _props$data;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeValue, setActiveValue] = useState('');

  const openMenuHandler = () => {
    setIsMenuOpen(prevValue => !prevValue);
  };

  const setActiveValueHandler = value => {
    setActiveValue(value);
  };

  return React.createElement("div", {
    id: 'select-wrapper',
    className: props.class
  }, React.createElement("div", null, React.createElement("ul", {
    className: 'h-8 py-1 px-4',
    onClick: openMenuHandler
  }, React.createElement("label", null, activeValue ? activeValue : props.headline), React.createElement("div", {
    className: 'absolute w-full left-0 mt-1 rounded-lg'
  }, isMenuOpen && ((_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.map(value => {
    return React.createElement(Option, {
      value: value,
      key: Math.random().toString(),
      onClick: setActiveValueHandler,
      activeValue: activeValue,
      activeValueStyle: props.activeValueStyle,
      listStyle: props.listStyle
    });
  }))))));
};

export { ListSelect };
//# sourceMappingURL=index.modern.js.map

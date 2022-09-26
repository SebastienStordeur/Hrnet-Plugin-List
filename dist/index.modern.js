import React, { useState } from 'react';

const Option = props => {
  return React.createElement("li", {
    value: props.value,
    className: `px-4 py-1 w-full h-8 border-solid border-[1px] border-blue hover:bg-blue hover:text-white cursor-pointer ${props.value === props.activeValue ? 'bg-blue text-white' : 'bg-white text-blue'}`,
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
    className: 'bg-white text-blue rounded font-semibold cursor-pointer relative'
  }, React.createElement("div", null, React.createElement("ul", {
    className: 'h-8 py-1 px-4',
    onClick: openMenuHandler
  }, React.createElement("label", {
    htmlFor: 'department'
  }, activeValue ? activeValue : props.headline), React.createElement("div", {
    className: 'absolute w-full left-0 mt-1 rounded-lg'
  }, isMenuOpen && ((_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.map(value => {
    return React.createElement(Option, {
      value: value,
      key: Math.random().toString(),
      onClick: setActiveValueHandler,
      activeValue: activeValue
    });
  }))))));
};

export { ListSelect };
//# sourceMappingURL=index.modern.js.map

import React from 'react';
interface IOption {
    value: string;
    onClick?: any;
    activeValue: string;
}
declare const Option: React.FC<IOption>;
export default Option;

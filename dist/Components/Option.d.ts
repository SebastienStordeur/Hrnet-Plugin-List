import React from 'react';
interface IOption {
    value: string;
    onClick?: any;
    activeValue: string;
    activeValueStyle?: string;
    listStyle?: string;
    defaultListStyle?: string;
}
declare const Option: React.FC<IOption>;
export default Option;

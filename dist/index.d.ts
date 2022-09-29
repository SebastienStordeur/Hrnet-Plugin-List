import React from 'react';
interface ISelect {
    data: string[];
    headline: string | number;
    class?: string;
    listContainerStyle?: string;
    listStyle?: string;
    activeValueStyle?: string;
    defaultListStyle?: string;
}
export declare const ListSelect: React.FC<ISelect>;
export {};

import React from 'react';
interface IOptions {
    /**
     * 根 DOM
     */
    root?: HTMLElement;
    /**
     * 是否存活
     */
    isAlive?: boolean;
    /**
     * 参数
     */
    props?: {
        [K: string]: any;
    };
    /**
     * 延时关闭
     */
    timeout?: number;
}
interface IProps {
    visible: boolean;
    hide: () => void;
}
export declare type IDirectiveProps<T> = T & IProps;
export declare class DirectiveElement<T extends IProps> {
    private element;
    private options;
    private mountDom;
    constructor(element: React.FC<T>, options?: IOptions);
    open(props: Omit<T, keyof IProps>): void;
}
export {};

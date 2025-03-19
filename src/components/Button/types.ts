export enum ButtonSizes {
    DEFAULT = 'default',
    SMALL = 'small',
    BIG = 'big'
}

export enum ButtonThemes {
    DARK = 'dark',
    LIGHT = 'light',
    DARK_BORDER = 'dark_border',
    LIGHT_BORDER = 'light_border'
}

export interface IButton {
    theme: ButtonThemes;
    size: ButtonSizes;
    className?: string;
}
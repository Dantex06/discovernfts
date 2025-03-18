import {IButton} from "./types.ts";
import {PropsWithChildren} from "react";

import styles from './styles.module.scss'
import clsx from "clsx";

export const Button = ({ theme, size, children }: PropsWithChildren<IButton>) => {

    return (
        <button className={clsx(styles.button, styles[theme], styles[size])}>
            {children}
        </button>
    );
};
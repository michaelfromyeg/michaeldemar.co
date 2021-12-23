import React, { ReactElement } from "react";

import * as styles from "./Arrow.module.scss";

const Arrow = (): ReactElement => {
    return (
        <div className={styles.arrow}>
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
        </div>
    );
};

export default Arrow;

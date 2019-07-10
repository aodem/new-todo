import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Item() {
    return(
        <li>
            {props.children}
        </li>
    )
}

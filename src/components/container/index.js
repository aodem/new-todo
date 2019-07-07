import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    tdContainer:{
        padding: "2px",
        border: "3px solid black",
        height: "80vh",
        width: "40vw",
        borderRadius: "5%"
    }
})


export default function Container(props) {
    return (
        <div className={css(styles.tdContainer)}>
            {props.children}
        </div>
    )
}

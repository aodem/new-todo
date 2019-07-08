import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Container from './components/container';
import ListContainer from './components/listContainer';
import Item from './components/item';

const styles = StyleSheet.create({
    wrapper: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    userIn:{
        width: "86% ",
        height: "28px",
        textAlign: "center"
    },
    inWrap:{
        content:"center",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        padding: "3px 0"
    }
    
})

export default function App() {
    return(
        <div className={css(styles.wrapper)}>
            <Container>
                <div className={css(styles.inWrap)}>
                  <input type="text" className={css(styles.userIn)} />  
                </div>
                <ListContainer>
                    <ul>
                        
                    </ul>
                </ListContainer>
            </Container>
        </div>
    )
}

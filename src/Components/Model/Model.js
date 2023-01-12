import React from 'react'
import ReactDOM from "react-dom";
import styles from "./model.module.css"
function BackDrop({ closemodel }) {

    return (<div className={styles.back} onClick={closemodel}></div>)
}
function Overly(params) {
    return (<div className={styles.overly}></div>)
}
const Model = ({ isshowmodel, closemodel }) => {

    return isshowmodel && (
        <>
            {ReactDOM.createPortal(<><BackDrop closemodel={closemodel} /> <Overly /></>, document.getElementById("model"))}
        </>
    )
}

export default Model

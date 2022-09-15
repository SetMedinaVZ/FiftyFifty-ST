import React from "react";
import {Wrapper} from "./Nivel3A.styles";

const Nivel3A = () => {
    let audio1 = new Audio("/1.mp3")
    let audio2 = new Audio("/2.mp3")
    let audio3 = new Audio("/3.mp3")
    let audio4 = new Audio("/4.mp3")
    let audio5 = new Audio("/5.mp3")
    let audio6 = new Audio("/6.mp3")
    let audio7 = new Audio("/7.mp3")
    let audio8 = new Audio("/8.mp3")
    let audio9 = new Audio("/9.mp3")
    let audio10 = new Audio("/10.mp3")
    let audio11 = new Audio("/11.mp3")
    let audio12 = new Audio("/12.mp3")
    let audio13 = new Audio("/13.mp3")
    let audio14 = new Audio("/14.mp3")
    let audio15 = new Audio("/15.mp3")

    const start1 = () => {
        audio1.play()
    }
    const start2 = () => {
        audio2.play()
    }
    const start3 = () => {
        audio3.play()
    }
    const start4 = () => {
        audio4.play()
    }
    const start5 = () => {
        audio5.play()
    }
    const start6 = () => {
        audio6.play()
    }
    const start7 = () => {
        audio7.play()
    }
    const start8 = () => {
        audio8.play()
    }
    const start9 = () => {
        audio9.play()
    }
    const start10 = () => {
        audio10.play()
    }
    const start11 = () => {
        audio11.play()
    }
    const start12 = () => {
        audio12.play()
    }
    const start13 = () => {
        audio13.play()
    }
    const start14 = () => {
        audio14.play()
    }
    const start15 = () => {
        audio15.play()
    }


    return (
        <Wrapper>
            <button onClick={start1}>I am here click me</button>
            <button onClick={start2}>I am here click me</button>
            <button onClick={start3}>I am here click me</button>
            <button onClick={start4}>I am here click me</button>
            <button onClick={start5}>I am here click me</button>
            <button onClick={start6}>I am here click me</button>
            <button onClick={start7}>I am here click me</button>
            <button onClick={start8}>I am here click me</button>
            <button onClick={start9}>I am here click me</button>
            <button onClick={start10}>I am here click me</button>
            <button onClick={start11}>I am here click me</button>
            <button onClick={start12}>I am here click me</button>
            <button onClick={start13}>I am here click me</button>
            <button onClick={start14}>I am here click me</button>
            <button onClick={start15}>I am here click me</button>
        </Wrapper>
    )
}

export default Nivel3A
// Imports 
// React 
import { useState, useEffect } from 'react'
// Styles 
import './ResponseComp.css'

// COMPONENT 
export const ResponseComp = ({ questionHistory, answerHistory }) => {
    return (
        <div className='ResponseComp'>
            {questionHistory.slice().reverse().map((question, index) => (
                <div key={index} className="QABox">
                    <p style={{ color: 'rgb(0, 108, 172)' }}>{question.slice(0, 50)}...</p>
                    <p style={{ color: 'rgb(110, 110, 110)', fontWeight: "300" }}>{answerHistory[questionHistory.length - index - 1]}</p>
                </div>
            ))}
        </div>
    )
}
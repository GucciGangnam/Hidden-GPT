// IMPORTS 
// RRD 
import { Route, Routes } from 'react-router-dom'

// Hooks
import { useState, useEffect } from 'react'

// Styles 
import "./Homepage.css"

// Components
import { Navbar } from '../components/Navbar'
import { Navigator } from '../components/Navigator'
import { ResponseComp } from '../components/ResponseComp'



// COMPOENT //
export const Homepage = () => {
    const [prompt, setPrompt] = useState("")
    const [questionHistory, setQuestionHistory] = useState(['How do I use this?']);
    const [answerHistory, setAnswerHistory] = useState(["Click the search bar at the top of the screen and input your prompt.  Then click the arrow button to the side. Your search history and responses will appear here!"]);

    useEffect(()=> { 
        console.log(questionHistory)
    }, [questionHistory])

    useEffect(()=> { 
        console.log(answerHistory)
    }, [answerHistory])



    return (
        <div className='Homepage'>
            <Navbar />
            <Navigator prompt={prompt} setPrompt={setPrompt} setQuestionHistory={setQuestionHistory} setAnswerHistory={setAnswerHistory} />
            <ResponseComp questionHistory={questionHistory} answerHistory={answerHistory} />


        </div>
    )
}
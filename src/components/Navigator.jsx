// IMPORTS 
// React 
import { useState, useEffect } from 'react'

// Styles
import './Navigator.css'




// COMPONENTS 
export const Navigator = ({ prompt, setPrompt, questionHistory, setQuestionHistory, setAnswerHistory }) => {

    // Update prompt on input change
    const handlePromptChange = (e) => {
        setPrompt(e.target.value)
    }
    const apiKey = import.meta.env.VITE_API_KEY;
    // Define the request body
    const fetchResponse = async () => {
        const requestBody = {
            contents: [
                {
                    role: "user",
                    parts: [{ text: prompt }]
                }
            ]
        };

        // Make the API call
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            // console.log(data.candidates.content.parts.text)
            // setResponse(data);
            setAnswerHistory((prevState) => [...prevState, data.candidates[0].content.parts[0].text])
            // Process the response data as needed
        } catch (error) {
            console.error("There was a problem with the API request:", error);
        }
    }



    // Handle for submission // RUN FETCH TO GEMINI API
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted")
        setPrompt("")
        setQuestionHistory((prevState) => [...prevState, prompt]);
        // setTimeout(async () => {
        //     setAnswerHistory((prevState) => [...prevState, 'This is a respomnse'])
        // }, 2000);
        // Push prompt to questionHistory 
        fetchResponse();
    }

    return (
        <div className="Navigator">
            <h1>Outlook help & learning</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    value={prompt}
                    onChange={handlePromptChange}
                    placeholder='How can we help you?' />
                <button type='submit'><img style={{ width: "20px" }} src='public/Right.png' /></button>
            </form>

            <div className='Navigator-BTNs'>
                <button className='Navigator-BTN'><img src='/Done.png' />Get started</button>
                <button className='Navigator-BTN'><img src='/User Settings.png' />Add accounts</button>
                <button className='Navigator-BTN'><img src='/Email.png' />Email</button>
                <button className='Navigator-BTN'><img src='/Calendar.png' />Calendar</button>
                <button className='Navigator-BTN'><img src='/User Settings.png' />Contacts & tasks</button>
                <button className='Navigator-BTN'><img src='/Business.png' />Manage</button>
                <button className='Navigator-BTN'><img src='/Wrench.png' />Troubleshooting</button>
            </div>
        </div>
    )
}
import React from 'react'
type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string,
}

const HangmanWord = ({guessedLetters,wordToGuess}:HangmanWordProps) => {
    const word = 'tweleve'
    // const guessedLetters: string[] = ['t','e','g',]
    return (
        <div style={{
            display: 'flex',
            gap: '.2em',
            fontSize: '6rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
        }}>
            {wordToGuess.split('').map((letter, index) => (
                <span key={index} style={{
                    borderBottom: '5px solid yellow',
                    
                }}>
                    <span style={{
                        visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden',
                      
                    }}>
                        {letter}
                    </span>

                </span>
            ))}
        </div>
    )
}

export default HangmanWord
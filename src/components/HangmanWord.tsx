import React from 'react'

const HangmanWord = () => {
    const word = 'tweleve'
    const guessedLetters: string[] = ['t','e','g',]
    return (
        <div style={{
            display: 'flex',
            gap: '.2em',
            fontSize: '6rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
        }}>
            {word.split('').map((letter, index) => (
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
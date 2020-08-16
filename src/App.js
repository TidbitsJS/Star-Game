import React, { useState } from 'react'
import 'App.css'
import GameFlow from 'components/GameFlow'

const App = () => {
  const [gameId, setGameId] = useState(1)
  
  return (
   <>
     <GameFlow
       key={gameId}
       startNewGame={ () => setGameId(gameId + 1) } 
     />
   </>
  )
}

export default App

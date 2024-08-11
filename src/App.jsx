import React from 'react'
import cvPdf from './assets/Cv.pdf'
const App = () => {
  return (
    <div className=' flex justify-center items-center h-screen text-xl font-bold'>
      <a className=' bg-blue-600 rounded-lg p-2' href={cvPdf} download>Cv down load</a>
    </div>
  )
}

export default App
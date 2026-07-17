import React from 'react'
import Nav from './components/Nav';
import Mainroutes from './routes/Mainroutes';

export const App = () => {
  return (
    <div className='h-screen w-screen bg-gray-800 px-4'>
      <Nav />
      <Mainroutes />
    </div>
  )
}
export default App;
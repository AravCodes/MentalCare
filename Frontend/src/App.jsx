import React from 'react'
import {Nav,News,Information,Instructions,Predictor,Services,About,Footer} from './Sections/index'


const App = () => {
  return (
    <div className = "relative">
      <Nav/>
      
      <section>
      {/* recent studies */}
        <News/>
      </section>

      <section className = "pt-40">
        <Information/>
      </section>

      <section className = "my-20" >
        <Instructions/>
      </section>

      <section >
        <Predictor/>
      </section>

      <section className = "py-20">
      
      </section>

    </div>
  )
}

export default App
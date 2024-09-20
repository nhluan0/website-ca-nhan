import './App.css'
import Education from './components/body/Education'
import Projects from './components/body/Projects'

import SlideCertification from './components/body/SlideCertification'
import PersonalInfor from './components/header/PersonalInfor'

function App() {
  return (
    <div className="xl:w-10/12 mx-auto relative">
      <PersonalInfor />
      <Education />
      <SlideCertification />
      <Projects />
    </div>
  )
}

export default App

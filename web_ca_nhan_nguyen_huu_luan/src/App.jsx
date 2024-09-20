import './App.css'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'

import PersonalInfor from './components/header/PersonalInfor'

function App() {
  return (
    <div className="xl:w-10/12 mx-auto relative">
      <PersonalInfor />
      <Body />
      <Footer />
    </div>
  )
}

export default App

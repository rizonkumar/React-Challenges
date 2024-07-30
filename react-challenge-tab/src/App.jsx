import './App.css'
import { Tab } from './components/Tab'
import { tabsData } from './constants'

function App() {

  const onTabChangeHandler = (index) => {
    console.log("Tab changed")
  }
  return (
    <>
      <Tab onTabChangeHandler={onTabChangeHandler} tabsData={tabsData}/>
    </>
  )
}

export default App

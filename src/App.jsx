import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getRamdomDimension } from './utils/random'
import LocationForm from './components/LocationForm'
import LocationInfo from './components/LocationInfo'
import { ResidentList } from './components/ResidentList'

function App() {

  const [ curretLocation, setCurrentLocation ] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value
    fetchDimension(newLocation)
  }

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    
    axios
      .get(url)
      .then(({data}) => setCurrentLocation(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const randomDimension = getRamdomDimension(126)
    fetchDimension(randomDimension)
  }, [])
  
  return (
    <main className=' font-fira-code min-h-screen overflow-x-hidden bg-cover text-center  text-white'>
      <LocationForm handleSubmit={handleSubmit} />
      <LocationInfo curretLocation={curretLocation}/> 
      <ResidentList residents={curretLocation?.residents ?? []} curretLocation={curretLocation} />
    </main>
  )
}

export default App

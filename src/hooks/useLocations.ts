import { useContext } from 'react'
import { ILocationsContext, LocationsContext } from '../context/locations'

const useLocations = () => {
  const context = useContext<ILocationsContext>(LocationsContext)
  return context
}

export default useLocations

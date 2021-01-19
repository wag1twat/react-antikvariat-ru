import React, { createContext } from 'react'
import { Locations } from '../types/utility'
import { localization, LocalizationItem } from 'utils/localization'

export interface ILocationsContext {
  location: Locations
  localization: LocalizationItem
  setLocation: React.Dispatch<React.SetStateAction<Locations>>
}

// @ts-ignore
export const LocationsContext = createContext<ILocationsContext>()

export const LocationsProvider: React.FC = ({ children }) => {
  const [location, setLocation] = React.useState<Locations>('ru')

  return (
    <LocationsContext.Provider
      value={{
        location,
        localization: localization[location],
        setLocation,
      }}
    >
      {children}
    </LocationsContext.Provider>
  )
}

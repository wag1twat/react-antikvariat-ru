import useLocations from './useLocations'
import { useHistory } from 'react-router-dom'

function useLocalizationRouteName() {
  const history = useHistory()

  const getLocalizationRouteName = (pathname: string) => {
    const { localization } = useLocations()

    switch (pathname) {
      case '/goods':
        return localization.goodsHeader
      case '/categories':
        return localization.categoriesHeader
      default:
        return ''
    }
  }
  return {
    header: getLocalizationRouteName(history.location.pathname),
  }
}

export default useLocalizationRouteName

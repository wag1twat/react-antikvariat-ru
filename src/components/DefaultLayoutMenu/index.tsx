import { Button, Stack, StackProps } from '@chakra-ui/react'
import useLocations from 'hooks/useLocations'
import React from 'react'
import { useHistory } from 'react-router-dom'
import routes from 'utils/routes'
import { gradientActive } from 'utils/styles'

const DefaultLayoutMenu: React.FC<StackProps> = (props) => {
  const { localization } = useLocations()

  const history = useHistory()

  const [pathname, setPathName] = React.useState(history.location.pathname)

  const checkoutRoute = (path: string) => () => history.push(path)

  history.listen((location) => {
    setPathName(location.pathname)
  })

  return (
    <Stack {...props}>
      <Button
        size="xs"
        isActive={pathname === routes.goods}
        _active={{ bg: gradientActive, color: '#fff' }}
        onClick={checkoutRoute(routes.goods)}
      >
        {localization.goodsHeader}
      </Button>
      <Button
        size="xs"
        isActive={pathname === routes.categories}
        _active={{ bg: gradientActive, color: '#fff' }}
        onClick={checkoutRoute(routes.categories)}
      >
        {localization.categoriesHeader}
      </Button>
    </Stack>
  )
}

export default DefaultLayoutMenu

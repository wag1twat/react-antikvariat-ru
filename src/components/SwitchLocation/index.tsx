import { Button, Stack } from '@chakra-ui/react'
import useLocations from 'hooks/useLocations'
import React from 'react'
import { LanguageIcon } from 'utils/icons'
import { margin } from 'utils/styles'

const SwitchLocation: React.FC = () => {
  const { location, setLocation } = useLocations()

  return (
    <Stack direction="row" my={margin}>
      {location === 'en' && (
        <Button
          size="sm"
          onClick={() => setLocation('ru')}
          rightIcon={<LanguageIcon />}
        >
          RU
        </Button>
      )}
      {location === 'ru' && (
        <Button
          size="sm"
          onClick={() => setLocation('en')}
          rightIcon={<LanguageIcon />}
        >
          ENG
        </Button>
      )}
    </Stack>
  )
}

export default SwitchLocation

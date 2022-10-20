import { ActionIcon, Avatar, Box, Button, Center, Divider, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import type { NextPage } from 'next'
import { HeaderAction } from '../components/Header'
import { HEADER_LINKS } from '../constants'

const Home: NextPage = () => {
  return (
    <>
    <HeaderAction links={HEADER_LINKS} />
    <SimpleGrid cols={2} px={64} py={64} sx={theme=>({backgroundColor:theme.colors.gray[5]})}>
      <Center>
        <Stack align='center'>
          <Title>Introdução</Title>
          <Text>Deserunt esse exercitation consequat non voluptate ex fugiat cillum laborum consequat ipsum qui. Cupidatat pariatur consectetur et culpa ipsum ex sint est incididunt. Nisi cillum veniam eiusmod mollit ipsum eu qui laborum nisi in ullamco ea dolor dolor.</Text>
          <Text>Deserunt esse exercitation consequat non voluptate ex fugiat cillum laborum consequat ipsum qui. Cupidatat pariatur consectetur et culpa ipsum ex sint est incididunt. Nisi cillum veniam eiusmod mollit ipsum eu qui laborum nisi in ullamco ea dolor dolor.</Text>
        </Stack>
      </Center>
      <Center>
        <Avatar size={400} color="gray" style={{borderRadius: '100%'}}>
          1
        </Avatar>
      </Center>
    </SimpleGrid>
    <SimpleGrid spacing='xl' cols={2} my={64} px={64}>
      <Stack align='center'>
      <Avatar size={256} color="dark" style={{borderRadius: '100%'}}>
          2
        </Avatar>
        <Title order={4}>Descrição</Title>
          <Text>Deserunt esse exercitation consequat non voluptate ex fugiat cillum laborum consequat ipsum qui. Cupidatat pariatur consectetur et culpa ipsum ex sint est incididunt. Nisi cillum veniam eiusmod mollit ipsum eu qui laborum nisi in ullamco ea dolor dolor.</Text>
      </Stack>
      <Stack align='center'>
      <Avatar size={256} color="dark" style={{borderRadius: '100%'}}>
          3
        </Avatar>
        <Title order={4}>Descrição</Title>
          <Text>Deserunt esse exercitation consequat non voluptate ex fugiat cillum laborum consequat ipsum qui. Cupidatat pariatur consectetur et culpa ipsum ex sint est incididunt. Nisi cillum veniam eiusmod mollit ipsum eu qui laborum nisi in ullamco ea dolor dolor.</Text>
      </Stack>
    </SimpleGrid>
    <Box px={64} py={32} sx={theme=>({backgroundColor:theme.colors.gray[5], display: 'flex', gap: 16})}>
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Text>Occaecat proident incididunt sunt nostrud Lorem non voluptate exercitation occaecat aliquip deserunt consectetur culpa eiusmod. Fugiat officia excepteur reprehenderit irure occaecat laboris est reprehenderit Lorem occaecat quis.</Text>
        <Button color='dark' fullWidth mt={12} />
      </div>
      <Divider orientation="vertical" />
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Title order={4}>Redes Sociais</Title>
        <Group noWrap>
          <ActionIcon size="xl" color='dark' variant='filled' />
          <ActionIcon size="xl" color='dark' variant='filled' />
          <ActionIcon size="xl" color='dark' variant='filled' />
          <ActionIcon size="xl" color='dark' variant='filled' />
        </Group>
        <Text>Duis enim in ex laboris sint.</Text>
        <Button color='dark' fullWidth />
      </div>
      <Divider orientation="vertical" />
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Title mb={8} order={4}>Produção Do Site</Title>
        <SimpleGrid cols={2}>
          <Stack align='center'>
            <Avatar size={64} radius="xl" >FOTO</Avatar>
            <Text>
              Dolore ipsum excepteur nulla amet et ex.
            </Text>
        <Button color='dark' fullWidth />
          </Stack>
          <Stack align='center'>
            <Avatar size={64} radius="xl" >FOTO</Avatar>
            <Text>
              Dolore ipsum excepteur nulla amet et ex.
            </Text>
        <Button color='dark' fullWidth />
          </Stack>
        </SimpleGrid>
      </div>
      <Divider orientation="vertical" />
    </Box>
    </>
  )
}

export default Home

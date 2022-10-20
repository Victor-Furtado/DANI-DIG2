import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Burger,
    Avatar,
    Stack,
    Title,
  } from '@mantine/core';
  import {FaAd, FaChevronDown} from 'react-icons/fa';
  import { useDisclosure } from '@mantine/hooks';
  
  const HEADER_HEIGHT = 60;
  
  const useStyles = createStyles((theme) => ({
    inner: {
      height: HEADER_HEIGHT,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    links: {
      fontStyle: 'italic',
      textDecoration: 'underline',
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    burger: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    link: {
      display: 'block',
      lineHeight: 1,
      padding: '8px 12px',
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
  
      '&:hover': {
        backgroundColor: theme.colors.gray[0],
      },
    },
  
    linkLabel: {
      marginRight: 5,
    },
  }));
  
  interface HeaderActionProps {
    links: { link: string; label: string; links?: { link: string; label: string }[] }[];
  }
  
  export function HeaderAction({ links }: HeaderActionProps) {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const items = links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
        >
          {link.label}
        </a>
      ));
  
    return (
      <Header height={HEADER_HEIGHT} sx={(theme) => ({ borderBottom: 0, background: theme.colors.dark[0] })}>
        <Container className={classes.inner} fluid>
          <Group>
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            <Avatar color="gray" size={64} radius="xl">LOGO</Avatar>
          </Group>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Avatar color="gray" radius="xl" style={{cursor: 'pointer'}} />
            </Menu.Target>

            <Menu.Dropdown>
              <Stack align="center">
                <Avatar size={128} radius='xl' />
                <Title mt={-12} order={4}>USUÁRIO NOME</Title>
              </Stack>
              <Menu.Divider />
              <Menu.Item>Minhas Compras</Menu.Item>
              <Menu.Item>Meus Projetos</Menu.Item>
              <Menu.Item>Lista de Desejos</Menu.Item>
              <Menu.Item>Minha Loja</Menu.Item>
              <Menu.Divider />
              <Menu.Item>Configurações de Usuário</Menu.Item>
              <Menu.Item color="red">Sair</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Container>
      </Header>
    );
  }
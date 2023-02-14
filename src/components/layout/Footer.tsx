import { Box, Container, Image, Text, createStyles } from "@mantine/core";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      {
        label: "Home",
        link: "#",
      },
      {
        label: "About",
        link: "#",
      },
      {
        label: "Menu",
        link: "#",
      },
      {
        label: "Reservations",
        link: "#",
      },
      {
        label: "Order Online",
        link: "#",
      },
      {
        label: "Login",
        link: "#",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "43 Hazel st. Chicago IL US",
        link: "#",
      },
      {
        label: "(+213) 789-792-2679",
        link: "#",
      },
      {
        label: "contact@little.lemon.com",
        link: "#",
      },
    ],
  },
  {
    title: "Social Media Links",
    links: [
      {
        label: "Follow on Instagram",
        link: "#",
      },
      {
        label: "Follow on Facebook",
        link: "#",
      },
      {
        label: "Follow on Twitter",
        link: "#",
      },
      {
        label: "Subscribe on Youtube",
        link: "#",
      },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      paddingLeft: theme.spacing.xl * 5,
      paddingRight: theme.spacing.xl * 5,
    },

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("md")]: {
      display: "flex",
      flexDirection: "column",
      rowGap: theme.spacing.xl,
    },

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 200,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("md")]: {
      marginLeft: theme.spacing.xl * 5,
    },

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      marginLeft: 0,
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

const _Footer = () => {
  const { classes } = useStyles();
  const date = new Date();

  const groups = footerLinks.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <Box className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </Box>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Box className={classes.logo}>
          <Image src="/footer-logo.png" />
        </Box>
        <Box className={classes.groups}>{groups}</Box>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © {date.getFullYear()} Little Lemon. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
};

export default _Footer;

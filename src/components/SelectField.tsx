import { createStyles, Select, SelectProps } from "@mantine/core";
import { colors } from "src/theme";

const useStyles = createStyles((theme) => ({
  input: {
    color: colors.primary,
    fontWeight: 600,
    border: "none",
  },
  activeInput: {
    color: colors.light,
    backgroundColor: colors.primary,
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    fontWeight: 600,
  },
  dropdown: {
    borderRadius: theme.radius.xs,
  },
  itemsWrapper: {
    padding: 0,
    margin: 0,
  },
  grid: {
    padding: 0,
    margin: 0,
    display: "grid",
    gridTemplateColumns: "auto auto",
  },
  item: {
    color: colors.primary,
    borderRadius: 0,
    borderBottom: `solid 1px ${colors.primary}`,
    textAlign: "center",
    fontWeight: 600,
    "&:last-of-type": {
      borderBottom: "none",
    },
    "&:hover": {
      color: colors.light,
      backgroundColor: colors.primary,
    },
  },
  cell: {
    color: colors.primary,
    borderRadius: 0,
    borderBottom: `solid 1px ${colors.primary}`,
    textAlign: "center",
    fontWeight: 600,
    "&:hover": {
      color: colors.light,
      backgroundColor: colors.primary,
    },
    "&:nth-child(odd)": {
      borderRight: `solid 1px ${colors.primary}`,
    },
  },
  rightSection: {
    marginRight: 20,
    pointerEvents: "none",
  },
}));

const SelectField: React.FC<SelectProps & { grid?: boolean }> = (props) => {
  const { grid, ...otherProps } = props;
  const { classes, cx } = useStyles();

  return (
    <Select
      variant="filled"
      radius="md"
      size="xl"
      {...otherProps}
      classNames={{
        input: cx(classes.input, {
          [classes.activeInput]: props.value,
        }),
        dropdown: classes.dropdown,
        itemsWrapper: grid ? classes.grid : classes.itemsWrapper,
        item: grid ? classes.cell : classes.item,
        rightSection: classes.rightSection,
      }}
    />
  );
};

export default SelectField;

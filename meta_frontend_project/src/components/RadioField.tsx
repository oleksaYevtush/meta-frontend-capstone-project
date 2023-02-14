import { createStyles, Radio, RadioProps } from "@mantine/core";
import { colors } from "src/theme";

const useStyles = createStyles((theme) => ({
  radio: {
    backgroundColor: colors.primary,
  },
  inner: {
    "& input": {
      "&:checked": {
        backgroundColor: colors.primary,
        borderColor: colors.light,
      },
    },
  },
  innerError: {
    "& input": {
      backgroundColor: colors.pink,
      borderColor: colors.light,
    },
  },
  label: {
    color: colors.light,
    fontSize: 24,
    fontWeight: 600,
    padding: 0,
    margin: 0,
    marginRight: 50,
  },
}));

const RadioField: React.FC<RadioProps & { invalid?: boolean }> = (props) => {
  const { invalid, ...otherProps } = props;
  const { classes, cx } = useStyles();

  return (
    <Radio
      {...otherProps}
      classNames={{
        radio: classes.radio,
        inner: cx(classes.inner, { [classes.innerError]: invalid }),
        label: classes.label,
      }}
    />
  );
};

export default RadioField;

import * as React from "react";
import { Box, Center, Group, Text } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons";
import { StateContext } from "src/contexts";
import { colors } from "src/theme";

interface DisplayerProps {
  error?: boolean;
  value: string | null | undefined;
  extraValue?: string;
  icon?: React.ReactNode;
}

const Displayer: React.FC<DisplayerProps> = ({
  error,
  value,
  extraValue,
  icon,
}) => {
  const { handleSwitchConfirmation } = React.useContext(StateContext);

  return (
    <Box
      sx={{ cursor: error ? "pointer" : "text" }}
      onClick={error ? handleSwitchConfirmation : () => {}}
    >
      <Center>
        <IconAlertTriangle
          size={20}
          color={error ? colors.pink : colors.primary}
        />
      </Center>
      <Group noWrap>
        {icon}
        <Text size="lg" fw={500} c={error ? colors.pink : colors.light}>
          {value ? value : extraValue}
        </Text>
      </Group>
    </Box>
  );
};

export default Displayer;

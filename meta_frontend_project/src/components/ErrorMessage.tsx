import * as React from "react";
import { Group, Text } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons";
import { colors } from "src/theme";

interface ErrorMessageProps {
  condition?: boolean;
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ condition, message }) => {
  return condition ? (
    <Group mt="xs" noWrap>
      <IconAlertTriangle color={colors.pink} />
      <Text c={colors.pink}>{message}</Text>
    </Group>
  ) : (
    <></>
  );
};

export default ErrorMessage;

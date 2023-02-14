import {
  IconAlarm,
  IconCalendarDue,
  IconGlassFull,
  IconUser,
  TablerIcon,
  TablerIconProps,
} from "@tabler/icons";

interface ExtraIconProps {
  value?: Date | string | boolean | null | undefined;
  primary: string;
  secondary: string;
}

const withTwoColors =
  (Component: TablerIcon) => (props: TablerIconProps & ExtraIconProps) => {
    return (
      <Component
        size={32}
        stroke={1.5}
        {...props}
        color={!props.value ? props.primary : props.secondary}
      />
    );
  };

export const DateIcon = withTwoColors(IconCalendarDue);
export const DinersIcon = withTwoColors(IconUser);
export const OccasionIcon = withTwoColors(IconGlassFull);
export const TimeIcon = withTwoColors(IconAlarm);

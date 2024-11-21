import * as React from "react";
import { Tooltip } from "@nextui-org/react";

import "./index.css";

type TooltipPlacement =
  | "top"
  | "bottom"
  | "right"
  | "left"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end";
interface IToolTip {
  pointAtCenter?: boolean;
  children: React.ReactNode;
  mode: "light" | "dark";
  className?: string;
  placement?: TooltipPlacement;
  content: React.ReactNode;
}

const EPTooltip = ({
  children,
  pointAtCenter = true,
  className,
  placement = "top-start",
  mode = "dark",
  content,
  ...params
}: IToolTip) => {
  return (
    <Tooltip
      color={mode === "dark" ? "foreground" : "default"}
      showArrow={true}
      placement={placement}
      content={content}
      {...params}
    >
      {children}
    </Tooltip>
  );
};

export default EPTooltip;

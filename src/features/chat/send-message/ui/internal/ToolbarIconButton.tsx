import { Button, Tooltip } from "@shared/ui";
import { ReactNode } from "react";

interface ToolbarIconButtonProps{
    tooltip:string
    icon:ReactNode
}

export function ToolbarIconButton({tooltip,icon}:ToolbarIconButtonProps) {
  return (
    // <Tooltip content={tooltip}>
      <Button variant="ghost" disabled={true} size="icon" rounded="full" aria-label={tooltip}>
        {icon}
      </Button>
    // </Tooltip>
  );
}

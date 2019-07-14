import React from "react";
import ReactPlayer from "react-player";
import { createElementClass, createModifierClass } from "../helpers";

export interface InlineCodeProps {
  inline: boolean;
  value: string;
}

export const InlineCode: React.FunctionComponent<InlineCodeProps> = ({
  inline = true,
  value,
  children,
}) => (
  <code className={createElementClass("inline-code")}>
    {children === value ? value : children}
  </code>
);

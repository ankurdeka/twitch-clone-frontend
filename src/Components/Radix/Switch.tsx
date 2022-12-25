import { motion } from "framer-motion";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { useState } from "react";

/*
Default radix switch renders -
- Switch.Root -> button
- Switch.Thumb -> span
*/

interface Props {
  onClick(): void;
}

const Switch = ({ onClick }: Props) => {
  const [checked, setChecked] = useState(false);

  function handleClick(checked: boolean) {
    setChecked(checked);
    onClick();
  }

  return (
    <SwitchPrimitive.Root
      checked={checked}
      onCheckedChange={handleClick}
      className={`w-[32px] h-[16px] rounded-xl grid items-center ring-2 ring-gray-600 ${
        checked ? "bg-primary" : "bg-white"
      }`}
    >
      <SwitchPrimitive.Thumb asChild>
        <motion.span
          layout
          style={{
            justifySelf: checked ? "end" : "start",
          }}
          className={`rounded-full w-[12px] h-[12px] mx-[2px]  ${
            checked ? "bg-white" : "bg-gray-900"
          }`}
        ></motion.span>
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
};

export default Switch;

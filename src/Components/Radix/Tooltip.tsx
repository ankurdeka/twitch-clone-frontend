import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
  content: string;
  children: JSX.Element;
}

const Tooltip = ({ content, children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <TooltipPrimitive.Provider delayDuration={400}>
      <TooltipPrimitive.Root open={open} onOpenChange={setOpen}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <AnimatePresence>
          {open && (
            <TooltipPrimitive.Portal forceMount>
              <TooltipPrimitive.Content sideOffset={5} asChild>
                <motion.div
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.1,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                  }}
                  className="rounded text-sm bg-black drop-shadow-sm text-white py-1 px-1.5"
                >
                  {content}
                  <TooltipPrimitive.Arrow />
                </motion.div>
              </TooltipPrimitive.Content>
            </TooltipPrimitive.Portal>
          )}
        </AnimatePresence>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

const T = () => {
  return (
    <TooltipPrimitive.Provider delayDuration={400}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger>Fuck Dropdown</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal forceMount>
          <TooltipPrimitive.Content sideOffset={5} asChild>
            <motion.div className="rounded text-sm bg-black drop-shadow-sm text-white py-1 px-1.5">
              cOOntent
              <TooltipPrimitive.Arrow />
            </motion.div>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;

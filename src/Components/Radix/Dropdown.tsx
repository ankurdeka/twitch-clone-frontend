import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownProps {
  children: (
    | React.ReactElement<typeof Trigger>
    | React.ReactElement<typeof Content>
  )[];
}

const DropdownContext = React.createContext<boolean>(false);

const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownContext.Provider value={open}>
        {props.children}
      </DropdownContext.Provider>
    </DropdownMenu.Root>
  );
};

const Trigger = (props: { children: React.ReactNode }) => {
  return <DropdownMenu.Trigger>{props.children}</DropdownMenu.Trigger>;
};

Dropdown.Trigger = Trigger;

const Content = (props: { children: React.ReactNode; className?: string }) => {
  const open = React.useContext(DropdownContext);

  return (
    <AnimatePresence>
      {open && (
        <DropdownMenu.Portal forceMount>
          <DropdownMenu.Content sideOffset={5} asChild>
            <motion.div
              variants={dropdownVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`min-w-[200px] text-sm bg-white rounded-md p-2 drop-shadow-md ${props.className}`}
            >
              {props.children}
            </motion.div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      )}
    </AnimatePresence>
  );
};

Dropdown.Content = Content;

const dropdownVariant = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export default Dropdown;

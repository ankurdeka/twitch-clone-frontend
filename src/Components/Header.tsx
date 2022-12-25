import Button from "./Button";
import DotsVertical from "./Icons/DotsVertical";
import Magnify from "./Icons/Magnify";
import Person from "./Icons/Person";
import Link from "./Link";
import Logo from "./Icons/Logo";
import Tooltip from "./Radix/Tooltip";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Dropdown from "./Radix/Dropdown";
import Globe from "./Icons/Globe";
import ChevronRight from "./Icons/ChevronRight";
import Moon from "./Icons/Moon";
import Enter from "./Icons/Enter";
import Switch from "./Radix/Switch";

const Header = () => {
  return (
    <div className="w-full h-[50px] shadow flex items-center">
      <div className="max-w-[1440px] mx-auto w-full h-full px-3 flex items-center justify-between">
        <div className="flex gap-4 items-center text-sm">
          <a href="#" aria-label="Twitch Home" className="cursor-pointer block">
            <div className="p-1">
              <Logo size={28} className="text-primary-light" />
            </div>
          </a>
          <Link href="#" label="Browse" ariaLabel="Twitch Home" />
          <MoreDropdown />
        </div>
        <div className="flex justify-center items-center">
          <div className="flex gap-[2px]">
            <input
              type="text"
              name="search"
              className="bg-gray-1 px-3 py-2 h-9 placeholder:text-gray-700 rounded-l-md w-[350px] outline-none ring-inset hover:ring-2 hover:ring-gray-300 focus:ring-2 focus:ring-primary"
              placeholder="Search"
            />
            <button className="flex justify-center items-center rounded-r-md bg-gray-1 hover:bg-gray-300  px-1">
              <Magnify size={24} className="text-black" />
            </button>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Button type="secondary">Login</Button>
          <Button type="primary">Signup</Button>
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

const MoreDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Tooltip content="More">
          <div className="cursor-pointer hover:bg-gray-1 p-2 rounded keyboard-only">
            <DotsVertical size={16} className="font-bold text-black" />
          </div>
        </Tooltip>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <DropdownMenu.Label className="uppercase px-2 py-1 text-gray-600 text-sm">
          General
        </DropdownMenu.Label>
        <DropdownMenu.Item className="rounded px-2 py-1 hover:bg-gray-200">
          New Item 1
        </DropdownMenu.Item>
        <DropdownMenu.Item className="rounded px-2 py-1 hover:bg-gray-200">
          New Item 2
        </DropdownMenu.Item>
        <DropdownMenu.Item className="rounded px-2 py-1 hover:bg-gray-200">
          New Item 3
        </DropdownMenu.Item>
      </Dropdown.Content>
    </Dropdown>
  );
};

const ProfileDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <div className="rounded hover:bg-gray-2 p-1 cursor-pointer">
          <Person size={18} />
        </div>
      </Dropdown.Trigger>
      <Dropdown.Content className="mr-2">
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger className="focus:bg-gray-2 rounded">
            <div className="flex justify-between items-center px-2 py-1 rounded hover:bg-gray-2 focus:bg-gray-2 cursor-pointer">
              <div className="flex gap-2 items-center focus:bg-gray-2">
                <Globe size={16} />
                <span>Language</span>
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
          </DropdownMenu.SubTrigger>
        </DropdownMenu.Sub>
        <DropdownMenu.Item
          onSelect={(e) => e.preventDefault()}
          className="px-2 py-1 rounded hover:bg-gray-2 focus:bg-gray-2 flex justify-between items-center"
        >
          <div className="flex gap-2 items-center">
            <Moon size={16} className="rotate-[140deg]" />
            Dark Mode
          </div>
          <Switch
            onClick={() => {
              console.log("switch clicked");
            }}
          />
        </DropdownMenu.Item>
        <DropdownMenu.Separator className="h-[0.5px] bg-gray-1 m-2" />
        <DropdownMenu.Item className="flex gap-2 items-center px-2 py-1 rounded hover:bg-gray-2 focus:bg-gray-2 cursor-pointer">
          <Enter size={16} />
          Login
        </DropdownMenu.Item>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default Header;

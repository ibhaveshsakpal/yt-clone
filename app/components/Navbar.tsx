"use client";

import {
  Home,
  Menu,
  Mic,
  NotificationsOutlined,
  Search,
  Subscriptions,
  SubscriptionsOutlined,
  VideoCallOutlined,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const sidebarItem = [
    {
      title: "Home",
      icon: <Home className="text-white" />,
    },
    {
      title: "Subscription",
      icon: <SubscriptionsOutlined className="text-white" />,
    },
  ];

  const DrawerList = (
    <div className="pt-3">
      <div className="flex items-center">
        <Menu
          onClick={toggleDrawer(false)}
          className="mr-4 w-8 h-8 cursor-pointer"
        />
        <YouTube className="h-12 w-12" color="error" />
        <span className="text-2xl font-bold tracking-[-3px]">YouTube</span>
      </div>

      <div className="mt-5">
        <ul>
          {sidebarItem.map((item) => (
            <div
              className="flex gap-4 py-3 px-2 hover:bg-white hover:bg-opacity-20 rounded-lg"
              key={item.title}
            >
              <span className="text-lg">{item.icon}</span>
              <li className="text-lg font-semibold">{item.title}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <nav className="w-full p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Menu
            onClick={toggleDrawer(true)}
            className="mr-4 ml-4 w-8 h-8 cursor-pointer"
          />
          <YouTube className="h-12 w-12" color="error" />
          <span className="text-2xl font-bold tracking-[-3px]">YouTube</span>
        </div>

        <div className="flex justify-center items-center">
          <input
            className="lg:w-[650px] bg-neutral-950 border border-neutral-700 rounded-l-full p-3"
            type="text"
            placeholder="Search"
          />
          <button className="text-neutral-100  border border-neutral-700 bg-neutral-800 rounded-r-full">
            <Search className=" h-12 w-20 p-2" />
          </button>
          <Mic className="ml-6 h-12 w-12 p-3 bg-neutral-800 rounded-full cursor-pointer" />
        </div>

        <div className="flex gap-6 justify-center items-center">
          <VideoCallOutlined className="w-8 h-8 cursor-pointer" />
          <NotificationsOutlined className="w-8 h-8 cursor-pointer" />
          <div className="px-3 py-1 text-center rounded-full bg-purple-800 cursor-pointer">
            <span className="text-2xl font-semibold">b</span>
          </div>
        </div>
      </div>

      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "black",
            color: "white",
            paddingX: "30px",
            minWidth: "300px",
          },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </nav>
  );
};

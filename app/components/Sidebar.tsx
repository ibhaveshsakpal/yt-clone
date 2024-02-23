import { Drawer } from "@mui/material";
import { SubscriptionsOutlined, Home } from "@mui/icons-material";
import { useState } from "react";

export const Sidebar = ({ toggleDrawer, open }) => {
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
      {/* <div className="flex items-center">
            <Menu
              onClick={toggleDrawer(false)}
              className="mr-4 w-8 h-8 cursor-pointer"
            />
            <YouTube className="h-12 w-12" color="error" />
            <span className="text-2xl font-bold tracking-[-3px]">YouTube</span>
          </div> */}

      <div className="mt-5">
        <ul>
          {sidebarItem.map((item) => (
            <div
              className="flex gap-4 py-3  hover:bg-white hover:bg-opacity-20 rounded-lg"
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
    <div>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "black",
            color: "white",
            border: "2px solid red",
            paddingX: "30px",
          },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

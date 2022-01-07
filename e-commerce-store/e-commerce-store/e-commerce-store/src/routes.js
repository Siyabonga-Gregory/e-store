import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";

const Dashboard   =React.lazy(()=>import('./Views/Dashboard/Dashboard'));  
const Profile     =React.lazy(()=>import('./Views/Profile/Profile'));
const Settings    =React.lazy(()=> import('./Views/Settings/Settings'));


function onClick(e, item) {
  console.log(item);
}
  
export const items = [
    { 
        name: "dashboard",
        label: "dashboard",
        Icon: HomeIcon, 
        path: "/dashboard",
        name: "dashboard",
        label: "Dashboard",
        Icon: SettingsIcon,
        component: Dashboard,
        layout: "/admin",
        onClick , 
        },
    {
      name: "Product",
      label: "Product",
      Icon: SettingsIcon,
      items: [
        { 
            path: "/settings",
            name: "New Arrival",
            label: "New Arrival",
            Icon: SettingsIcon,
            component: Settings,
            layout: "/admin",
            onClick ,    
        },
        {
            path: "/profile",
            name: "Profile",
            label: "Profile",
            Icon: SettingsIcon,
            component: Profile,
            layout: "/admin",
            onClick , 
        },
        {
          path: "/register",
          name: "register",
          label: "Register",
          Icon: SettingsIcon,
          component: Profile,
          layout: "/admin",
          onClick , 
      }
      ]
    },
    "divider",
    {
      name: "Other",
      label: "Other",
      Icon: SettingsIcon,
      items: [
        { 
          name: "Child", 
          label: "Child",
          Icon: SettingsIcon,
          onclick,
         },
        { 
          name: "Child", 
          label: "Child", 
          Icon: SettingsIcon,
          onClick 
        },
        "divider",
        {
          name: "Child",
          label: "Child",
          Icon: NotificationsIcon,
          items: [
            { name: "Child", label: "Child", onClick },
            {
              name: "Child",
              label: "Child",
              Icon: DesktopWindowsIcon,
              onclick,
              items: [
                { 
                  name: "Child",
                  label: "Child",
                  Icon: DesktopWindowsIcon,
                  onclick,
                  items: [
                    { 
                      name: "Child", 
                      label: "Child",
                      onClick ,
                      Icon: SettingsIcon,
                    },
                    {
                       name: "Child", 
                       label: "Child",
                       onClick ,
                       Icon: SettingsIcon,
                      },
                    { 
                      name: "Child", 
                      label: "Child" 
                      ,onClick,
                      Icon: SettingsIcon,
                    },
                    {
                      name: "Child",
                      label: "Child",
                      Icon: DesktopWindowsIcon,
                      onclick,
                      items: [
                        {
                           name: "Child", 
                           label: "Child",
                           onClick ,
                           Icon: SettingsIcon,
                           onclick,
                          },
                        { 
                          name: "Child", 
                          label: "Child",
                          onClick,
                          Icon: SettingsIcon,
                        },
                        { 
                          name: "Child", 
                          label: "Child",
                          onClick,
                          Icon: ReceiptIcon,
                        },
                        {
                          
                        },
                        { 
                          name: "Child", 
                          label: "Child",
                          onClick,
                          Icon: ReceiptIcon,
                         },
                        { 
                          name: "Child", 
                          label: "Child",
                          onClick ,
                          Icon: ReceiptIcon,
                        },
                        { 
                          name: "Child", 
                          label: "Child" ,
                          onClick,
                          Icon: ReceiptIcon,
                        },
                       ]
                    },
                    { 
                      name: "Child",
                       label: "Child",
                       Icon: ReceiptIcon,
                       onclick,
                       },
                    { 
                      name: "Child",
                       label: "Child",
                       Icon: ReceiptIcon,
                       onclick,
                       },
                    { 
                      name: "Child",
                       label: "Child" ,
                       Icon: ReceiptIcon,
                       onclick,
                      },
                   ]
  
                 },
                { 
                  name: "Child",
                  label: "Child",
                  Icon: ReceiptIcon,
                  onclick,
                 }
              ]
            },
            { 
              name: "Child",
               label: "Child",
               Icon: ReceiptIcon,
               onclick,
               }
          ]
        }
      ]
    }
  ];
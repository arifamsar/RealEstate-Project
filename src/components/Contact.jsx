import React from "react";
import { Popover, PopoverHandler, PopoverContent, Avatar, Typography, List, Button, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { BuildingOffice2Icon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import profile from "../assets/avatar.png"

export default function Contact() {
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <Button 
        variant="text"
        ripple={false}
         className="flex text-blue-gray-800 items-center font-normal">
          Contact Us
        </Button>
      </PopoverHandler>
      <PopoverContent className="w-72">
        <div className="flex items-center gap-4 border-b border-blue-gray-50 pb-4 mb-4">
          <Avatar src={profile} alt="candice wu" />
          <div>
            <Typography variant="h6" color="blue-gray">
              Candice Wu
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              General Manager
            </Typography>
          </div>
        </div>
        <List className="p-0">
          <a href="#" className="text-initial">
            <ListItem>
              <ListItemPrefix>
                <BuildingOffice2Icon className="w-5 h-5" />
              </ListItemPrefix>
              ABC Construction
            </ListItem>
          </a>
          <a href="#" className="text-initial">
            <ListItem>
              <ListItemPrefix>
                <PhoneIcon className="w-5 h-5" />
              </ListItemPrefix>
              00 123 456 789
            </ListItem>
          </a>
          <a href="#" className="text-initial">
            <ListItem>
              <ListItemPrefix>
                <EnvelopeIcon className="w-5 h-5" />
              </ListItemPrefix>
              person@example.com
            </ListItem>
          </a>
        </List>
      </PopoverContent>
    </Popover>
  );
}

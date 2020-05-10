import React from 'react';
import './DrawerContent.scss';
import {
  Box,
  List,
  ListItemText
} from "@material-ui/core";
import ListItemLink from "./ListItemLink";

const menuListItems = [
  {
    title: "Букети",
    link: ""
  },
  {
    title: "Весільна флористика",
    link: ""
  },
  {
    title: "Квіткові композиції",
    link: ""
  },
  {
    title: "Квіти в коробці",
    link: ""
  },
  {
    title: "Доставка",
    link: ""
  },
  {
    title: "Контакти",
    link: ""
  }
];

export default function DrawerContent() {
  return (
    <Box className="drawerContentContainer">
      <List component="nav" aria-label="secondary mailbox folders">
        <Box mt={5}/>
        {
          menuListItems.map((menuListItem, index) => (
            <ListItemLink href={menuListItem.link} key={index}>
              <ListItemText primary={menuListItem.title} className="drawerContentItem"/>
              <Box mb={5}/>
            </ListItemLink>
          ))
        }
      </List>
    </Box>
  );
};

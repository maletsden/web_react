import React from 'react';
import './DrawerContent.scss';
import {
  Box,
  List,
  ListItemText
} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

const menuListItems = [
  {
    title: "Букети",
    link: "/bouquets"
  },
  {
    title: "Весільна флористика",
    link: "/wedding-flowers"
  },
  {
    title: "Квіткові композиції",
    link: "/flowers-compositions"
  },
  {
    title: "Квіти в коробці",
    link: "/flowers-in-box"
  },
  {
    title: "Доставка",
    link: "/delivery"
  },
  {
    title: "Контакти",
    link: "/contacts"
  }
];

export default function DrawerContent() {
  return (
    <Box className="drawerContentContainer">
      <List component="nav" aria-label="secondary mailbox folders">
        <Box mt={5}/>
        {
          menuListItems.map((menuListItem, index) => (
            <div key={index}>
              <RouterLink to={menuListItem.link}>
                <ListItem button component="button" >
                  <ListItemText primary={menuListItem.title} className="drawerContentItem"/>
                  <Box mb={5}/>
                </ListItem>
              </RouterLink>
            </div>
          ))
        }
      </List>
    </Box>
  );
};

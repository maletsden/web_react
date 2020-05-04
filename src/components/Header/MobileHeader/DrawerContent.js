import React from 'react';
import './DrawerContent.scss';
import {
  Box,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const MenuListItems = [
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
          MenuListItems.map((menuListItem, index) => (
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

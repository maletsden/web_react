import React from 'react';

import {
  Switch as RouterSwitch,
  Route as RouterRoute
} from "react-router-dom";

import Bouquets from "./Bouquests/Bouquets";
import WeddingFlowers from "./WeddingFlowers/WeddingFlowers";
import FlowersCompositions from "./FlowersCompositions/FlowersCompositions";
import FlowersInBox from "./FlowersInBox/FlowersInBox";
import Contacts from "./Contacts/Contacts";
import Delivery from "./Delivery/Delivery";
import Cart from "./Cart/Cart";

import './Main.scss';

const pages = [
  {
    path: "/bouquets",
    component: <Bouquets/>
  },
  {
    path: "/wedding-flowers",
    component: <WeddingFlowers/>
  },
  {
    path: "/flowers-compositions",
    component: <FlowersCompositions/>
  },
  {
    path: "/flowers-in-box",
    component: <FlowersInBox/>
  },
  {
    path: "/delivery",
    component: <Delivery/>
  },
  {
    path: "/contacts",
    component: <Contacts/>
  },
  {
    path: "/cart",
    component: <Cart/>
  }
];


export default function Main() {
  return (
    <main className="mainContainer">
      <RouterSwitch>
        {
          pages.map((page, index) => (
            <RouterRoute exact path={page.path} key={index}>
              {page.component}
            </RouterRoute>
          ))
        }
      </RouterSwitch>
    </main>
  );
};

import React from 'react';
import MyProfile from '../components/TabsContainers/MyProfile/MyProfile';
import Badges from '../components/TabsContainers/Badges/Badges';
import Groups from '../components/TabsContainers/Groups/Groups';
import Events from '../components/TabsContainers/Events/Events';
import { BadgesTab } from '../components/TabsContainers/Badges/BadgesTab';

export const containers = [
   {
      id: '1',
      title: 'Mi Perfil',
      tab: <MyProfile />,
   },
   {
      id: '2',
      title: 'Insignias',
      tab: <BadgesTab />,
   },
   {
      id: '3',
      title: 'Grupos',
      tab: <Groups />,
   },
   {
      id: '4',
      title: 'Eventos',
      tab: <Events />,
   },
];

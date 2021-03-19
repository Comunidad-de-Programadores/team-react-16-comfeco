import {
   FcPositiveDynamic,
   FcInspection,
   FcCollaboration,
   FcDonate,
   FcManager,
} from 'react-icons/fc';

const descriptionBadge =
   'Proin feugiat libero tempus tempor pellentesque. Donec elementum.';

const dataBadges = [
   {
      id: 1,
      image: <FcPositiveDynamic />,
      description: descriptionBadge,
      value: 50,
   },
   {
      id: 2,
      image: <FcInspection />,
      description: descriptionBadge,
      value: 0,
   },
   {
      id: 3,
      image: <FcCollaboration />,
      description: descriptionBadge,
      value: 30,
   },
   {
      id: 4,
      image: <FcDonate />,
      description: descriptionBadge,
      value: 35,
   },
   {
      id: 5,
      image: <FcManager />,
      description: descriptionBadge,
      value: 50,
   },
];

export default dataBadges;

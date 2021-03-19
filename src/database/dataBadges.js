import {
   FcPositiveDynamic,
   FcInspection,
   FcCollaboration,
   FcDonate,
   FcManager,
   FcReading,
   FcSupport,
   FcRating,
} from 'react-icons/fc';

const descriptionBadge =
   'Proin feugiat libero tempus tempor pellentesque. Donec elementum.';

const dataBadges = [
   {
      id: 1,
      image: <FcPositiveDynamic />,
      description: descriptionBadge,
      value: 0,
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
      value: 50,
   },
   {
      id: 4,
      image: <FcDonate />,
      description: descriptionBadge,
      value: 0,
   },
   {
      id: 5,
      image: <FcManager />,
      description: descriptionBadge,
      value: 0,
   },
   {
      id: 6,
      image: <FcReading />,
      description: descriptionBadge,
      value: 0,
   },
   {
      id: 7,
      image: <FcSupport />,
      description: descriptionBadge,
      value: 10,
   },
   {
      id: 8,
      image: <FcRating />,
      description: descriptionBadge,
      value: 60,
   },
];

export default dataBadges;

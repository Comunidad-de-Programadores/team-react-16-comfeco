import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const links = [
  {
    id: 1,
    url: "/home",
    text: "Inicio",
  },
  {
    id: 2,
    url: "#",
    text: "Comunidades",
  },
  {
    id: 3,
    url: "#",
    text: "Creadores",
  },
];

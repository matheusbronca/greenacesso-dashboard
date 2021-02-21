import React from 'react';
import { FiHelpCircle, FiLogOut, FiMessageSquare, FiSettings, FiTrendingUp, FiUser } from 'react-icons/fi';

export const sidenavData = [
  {
    title: 'Cadastros',
    icon: <FiUser />,
    subNav: [
      {
        title: 'Pessoas',
        href: '/cadastros/pessoas',
      },
      {
        title: 'Equipamentos',
        href: '/cadastros/equipamentos',
      },
      {
        title: 'Grupos',
        href: '/cadastros/grupos',
      },
      {
        title: 'Áreas',
        href: '/cadastros/areas',
      },
      {
        title: 'Unidades',
        href: '/cadastros/unidades',
      },
      {
        title: 'Livros de Lotes',
        href: '/cadastros/livro-de-lotes',
      },
      {
        title: 'Senhas do App',
        href: '/cadastros/senhas-do-app',
      },
      {
        title: 'Operadores',
        href: '/cadastros/operadores',
      },
    ],
    href: '/cadastros',
  },
  {
    title: 'Relatórios',
    icon: <FiTrendingUp />,
    href: '/relatorios',
    subNav: [],
  },
  {
    title: 'Avisos',
    icon: <FiMessageSquare />,
    href: '/avisos',
    subNav: [],
  },
];

export const sidenavSettings = [
  {
    title: 'Configurações',
    icon: <FiSettings />,
    subNav: [],
  },
  {
    title: 'Ajuda',
    icon: <FiHelpCircle />,
    subNav: [],
  },
  {
    title: 'Sair',
    icon: <FiLogOut/>,
    subNav: [],
  },
];

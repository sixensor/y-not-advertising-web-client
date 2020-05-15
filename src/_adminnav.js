export default {
  items: [
    {
      title: true,
      name: 'User Management',
    },
    {
      name: 'Users',
      url: '/campaign/create',
      icon: 'icon-puzzle',
    },
    {
      name: 'Caller IDs',
      url: '/campaign/history',
      icon: 'icon-puzzle',
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Account Details',
    },
    {
      name: 'Transactions',
      url: '/base/carousels',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
  ],
};

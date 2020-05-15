export default {
  items: [
    {
      title: true,
      name: 'Campaign',
    },
    {
      name: 'New Campaign',
      url: '/campaign/create',
      icon: 'icon-puzzle',
    },
    {
      name: 'Campaigns History',
      url: '/campaign/history',
      icon: 'icon-puzzle',
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Financial',
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

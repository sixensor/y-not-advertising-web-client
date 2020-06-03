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
      url: '/transaction/history',
      icon: 'icon-speedometer',
      badge: {
        variant: 'success',
        text: 'NEW',
      },
    },
  ],
};


const routes = {
    deliveryDashboard: '/delivery-dashboard',
    ordersList: '/orders',
    createOrder: '/orders/new',
    customerList: '/customers',
    settings: '/settings',
    lastMileDeliveryDashboard: 'https://app--retail-os-2e106c16.base44.app/LastMileDeliveryDashboard',
    priceManagement: 'https://app--retail-os-2e106c16.base44.app/PriceManagement'
  };
  
  export const navigateTo = (key, params = {}) => {
    const path = routes[key];
  
    if (!path) {
      console.error(`NavigationService: No route found for key "${key}"`);
      return;
    }
  
    let finalPath = path;
    Object.keys(params).forEach(paramKey => {
      finalPath = finalPath.replace(`:${paramKey}`, params[paramKey]);
    });
  
    if (finalPath.startsWith('http')) {
      // External navigation
      window.location.href = finalPath;
    } else {
      // Internal navigation
      window.history.pushState({}, '', finalPath);
      window.dispatchEvent(new PopStateEvent('popstate')); // make React Router detect it
    }
  };
  
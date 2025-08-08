


export function createPageUrl(pageName: string) {
    // Convert page names to the correct URL format
    const urlMap: { [key: string]: string } = {
        'Manual': '/manual',
        'ManualOnboarding': '/manual-onboarding',
        'ManualWarehouse': '/manual-warehouse',
        'ManualProductContent': '/manual-product-content',
        'ManualInventory': '/manual-inventory',
        'ManualPricing': '/manual-pricing',
        'ManualVendorManagement': '/manual-vendor-management',
        'ManualVendorPortal': '/manual-vendor-portal',
        'ManualNetworkManagement': '/manual-network-management',
        'ManualOrders': '/manual-orders',
        'ManualFulfillment': '/manual-fulfillment',
        'ManualLogistics': '/manual-logistics',
        'ManualPurchaseOrders': '/manual-purchase-orders',
        'ManualReturnManagement': '/manual-return-management',
        'ManualPayLater': '/manual-pay-later',
        'ManualExpenses': '/manual-expenses'
    };
    
    return urlMap[pageName] || '/' + pageName.toLowerCase().replace(/ /g, '-');
}
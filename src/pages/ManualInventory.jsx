
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft, Settings, Package, AlertTriangle, TrendingUp, Users, ShoppingCart,
  Plus, Search, Filter, Grid, List, Eye, Edit, Zap, BarChart3, History,
  MapPin, DollarSign, Truck, Building2, Calendar, CheckCircle, XCircle,
  ArrowUpDown, Clock, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import useManualLanguage from '../components/shared/useManualLanguage';
import LanguageSelector from '../components/shared/LanguageSelector';

const translations = {
  en: {
    pageTitle: "Inventory Management Manual",
    backToManual: "Back to Manual",
    description: "Master inventory tracking, stock management, vendor relationships, and purchase order workflows to maintain optimal stock levels and efficient operations.",
    step1Title: "Inventory Dashboard Overview",
    step1Intro: "The Inventory Dashboard provides real-time visibility into your stock levels, alerts, and performance metrics. It's your central command center for all inventory-related activities.",
    step1Description: "Navigate to the Inventory Management Dashboard to access comprehensive stock monitoring tools, velocity analysis, and automated reorder suggestions.",
    step2Title: "Stock Level Management & Alerts",
    step2Intro: "Monitor and manage stock levels with automated alerts, reorder suggestions, and detailed tracking across all product categories.",
    step2Description: "The Stock Alerts tab helps you proactively manage inventory by identifying low stock situations, expired products, and slow-moving items before they become problems.",
    step3Title: "Warehouse Location Management",
    step3Intro: "Organize your physical inventory with detailed location tracking, bin management, and efficient product placement strategies.",
    step3Description: "The warehouse location system provides visual mapping of your storage areas, helping staff locate products quickly and optimize space utilization.",
    step4Title: "Purchase Basket & Vendor Returns",
    step4Intro: "Streamline purchasing decisions with intelligent purchase baskets and manage vendor returns efficiently to maintain healthy supplier relationships.",
    step4Description: "The Purchase Basket aggregates all your purchasing needs while the Vendor Returns system handles damaged or expired inventory returns to suppliers.",
    step5Title: "Inventory Analytics & Performance",
    step5Intro: "Leverage detailed analytics to understand product velocity, seasonal trends, and optimize your inventory investment for maximum profitability.",
    step5Description: "Advanced analytics help you categorize products by movement velocity, identify trends, and make data-driven decisions about stock levels and purchasing.",
    nextStepsTitle: "Inventory Management Complete!",
    nextStepsDescription: "With your inventory system configured, you can now move to Price Management to optimize pricing strategies and margin management.",
    nextStepsButton: "Continue to Price Management",
    // Screenshot content translations
    stockStatusOverview: "Stock Status Overview",
    fastMoving: "Fast Moving",
    slowMoving: "Slow Moving",
    nonMoving: "Non-Moving",
    outOfStock: "Out of Stock",
    nearExpiry: "Near Expiry (≤30d)",
    expired: "Expired",
    understandingEachStatus: "Understanding Each Status:",
    fastMovingDesc: "Products with high sales velocity - keep well stocked",
    slowMovingDesc: "Products moving slower than average - monitor closely",
    nonMovingDesc: "Products with no recent sales - consider promotions",
    outOfStockDesc: "Immediate reorder required",
    nearExpiryDesc: "Products expiring within 30 days - prioritize sales",
    expiredDesc: "Products past expiry - return or dispose",
    productInventory: "Product Inventory",
    headerSectionControls: "Header Section and Controls",
    searchAndFilterControls: "Search and Filter Controls",
    searchProducts: "Search products...",
    allStockStatus: "All Stock Status",
    inStock: "In Stock",
    lowStockAlert: "Low Stock", // Specific for alerts/filters
    outOfStockAlert: "Out of Stock", // Specific for alerts/filters
    allCategories: "All Categories",
    beverages: "Beverages",
    snacks: "Snacks",
    personalCare: "Personal Care",
    productTableColumnBreakdown: "Product Table - Column by Column Breakdown",
    product: "Product",
    stockStatus: "Stock Status",
    inventoryValue: "Inventory Value",
    poStatus: "PO Status",
    activity: "Activity",
    status: "Status",
    actions: "Actions",
    units: "units",
    cost: "cost",
    price: "price",
    onOrder: "on order",
    noRecentSales: "No recent sales",
    soldDaysAgo: "Sold 7 days ago",
    active: "Active",
    basket: "Basket",
    allocate: "Allocate",
    details: "Details",
    sku: "SKU:",
    understandingEachColumn: "Understanding Each Column:",
    productColumnDesc: "Shows product image, name, brand, and SKU for identification",
    stockStatusColumnDesc: "Current stock quantity with velocity badge (Fast/Slow/Non-Moving/Out of Stock)",
    inventoryValueColumnDesc: "Current stock value + cost and selling price per unit",
    poStatusColumnDesc: "Shows quantity on order from pending purchase orders",
    activityColumnDesc: "Recent sales activity and shelf life information",
    statusColumnDesc: "Whether product is active for sale or inactive",
    actionsColumnDesc: "Quick action buttons for Basket, Auto-Allocate, and Details",
    actionButtonsExplained: "Action Buttons Explained",
    basketDesc: "Add this product to your purchase basket for creating a purchase order later",
    allocateDesc: "Automatically find and assign an optimal warehouse location for this product",
    detailsDesc: "View complete product information, edit details, and see sales history",
    browseCategories: "Browse Categories",
    categories: "Categories",
    brandsIn: "Brands in",
    productsText: "Products", // To avoid collision with 'product' key which is 'Product'
    productsCount: "{count} products",
    brandsCount: "{count} brands",
    stock: "Stock",
    value: "Value",
    addStock: "Add Stock",
    browseCategoriesWorkflow: "Browse Categories Workflow:",
    selectCategory: "Select a Category from the left column (highlighted in blue when selected)",
    chooseBrand: "Choose a Brand from the middle column (highlighted in green when selected)",
    browseManageProducts: "Browse and manage Products in the right column with search and actions",
    manualInventoryAdditions: "Use \"Add Stock\" for manual inventory additions or \"Basket\" for purchase planning",
    alertCategoriesAndPriorityLevels: "Alert Categories and Priority Levels",
    stockAlerts: "Stock Alerts",
    allAlertTypes: "All Alert Types",
    critical: "Critical",
    high: "High",
    medium: "Medium",
    low: "Low",
    nearExpiryAlert: "Near Expiry", // Specific for alerts/filters
    expiredAlert: "Expired", // Specific for alerts/filters
    slowMovingAlert: "Slow Moving", // Specific for alerts/filters
    allPriorities: "All Priorities",
    criticalOutOfStock: "Critical - Out of Stock",
    lastSold: "Last sold:",
    expectedDemand: "Expected demand:",
    reorderNow: "Reorder Now",
    highLowStock: "High - Low Stock ({count} units)",
    minLevel: "Min level:",
    avgDailySales: "Average daily sales:",
    addToBasket: "Add to Basket",
    mediumNearExpiry: "Medium - Near Expiry ({count} days)",
    unitsInStock: "{count} units in stock",
    considerPromotionalPricing: "Consider promotional pricing",
    promote: "Promote",
    alertPrioritySystem: "Alert Priority System:",
    criticalRed: "Critical (Red): Out of stock items with recent sales activity - immediate reorder required",
    highOrange: "High (Orange): Low stock items below minimum level - add to purchase basket",
    mediumYellow: "Medium (Yellow): Near expiry items - consider promotions or markdowns",
    lowBlue: "Low (Blue): Slow moving items - monitor and plan clearance strategies",
    productHeaderAndBasicInformation: "Product Header and Basic Information",
    productDetailHeader: "Product Detail", // Generic for combinations
    editProduct: "Edit Product",
    currentStock: "Current Stock",
    min: "Min:",
    max: "Max:",
    sellingPrices: "Selling Prices",
    b2c: "B2C:",
    b2b: "B2B:",
    locationAndVendorInformation: "Location and Vendor Information",
    warehouseLocation: "Warehouse Location",
    primaryLocation: "Primary Location:",
    binCapacity: "Bin Capacity:",
    currentUsage: "Current Usage:",
    changeLocation: "Change Location",
    vendorInformation: "Vendor Information",
    primaryVendor: "Primary Vendor:",
    lastOrder: "Last Order:",
    leadTime: "Lead Time:",
    createPurchaseOrder: "Create Purchase Order",
    salesAnalyticsAndMovementHistory: "Sales Analytics and Movement History",
    totalSales: "Total Sales",
    revenue: "Revenue",
    turnoverRate: "Turnover Rate",
    recentStockMovements: "Recent Stock Movements",
    stockAdded: "Stock Added",
    poReceived: "{poNumber} received",
    sale: "Sale",
    orderNum: "Order #{orderNumber}",
    stockAdjustment: "Stock Adjustment",
    inventoryAuditCorrection: "Inventory audit correction",
    usingProductDetailData: "Using Product Detail Data:",
    monitorStockMovementsDesc: "Monitor stock movements and sales patterns to optimize reorder timing",
    useTurnoverRateDesc: "Use turnover rate to classify products as fast/slow moving",
    trackVendorPerformanceDesc: "Track vendor performance and lead times for better planning",
    analyzeLocationEfficiencyDesc: "Analyze location efficiency and consider relocating slow-moving items",
    reviewPricePerformanceDesc: "Review price performance and adjust pricing strategies as needed",
    // Product names translations
    cleanClearFaceWash: "Clean & Clear Face Wash - Aqua, 50ml",
    dettolSpiceRoute: "Dettol 300ml Spice Route",
    sunflowerCookingOil: "Sunflower Cooking Oil 1L",
    freshMilk: "Fresh Milk 1L Packet",
    organicGreekYogurt: "Organic Greek Yogurt 200g",
    healthyHarvest: "Healthy Harvest",
    dettol: "Dettol",
    goldenValley: "Golden Valley",
    dairyFresh: "Dairy Fresh",
    naturesBest: "Nature's Best",
    globalSupplies: "Global Supplies Ltd.",
  },
  kn: {
    pageTitle: "ದಾಸ್ತಾನು ನಿರ್ವಹಣೆ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ಸೂಕ್ತ ಸ್ಟಾಕ್ ಮಟ್ಟಗಳು ಮತ್ತು ದಕ್ಷ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಇನ್ವೆಂಟರಿ ಟ್ರ್ಯಾಕಿಂಗ್, ಸ್ಟಾಕ್ ನಿರ್ವಹಣೆ, ಮಾರಾಟಗಾರರ ಸಂಬಂಧಗಳು ಮತ್ತು ಖರೀದಿ ಆದೇಶದ ಕೆಲಸದ ಹರಿವುಗಳನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ.",
    step1Title: "ದಾಸ್ತಾನು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ಇನ್ವೆಂಟರಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ನಿಮ್ಮ ಸ್ಟಾಕ್ ಮಟ್ಟಗಳು, ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್‌ಗಳಿಗೆ ನೈಜ-ಸಮಯದ ಗೋಚರತೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಎಲ್ಲಾ ಇನ್ವೆಂಟರಿ-ಸಂಬಂಧಿತ ಚಟುವಟಿಕೆಗಳಿಗೆ ನಿಮ್ಮ ಕೇಂದ್ರ ಕಮಾಂಡ್ ಸೆಂಟರ್ ಆಗಿದೆ.",
    step1Description: "ಸಮಗ್ರ ಸ್ಟಾಕ್ ಮಾನಿಟರಿಂಗ್ ಸಾಧನಗಳು, ವೇಗ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಸ್ವಯಂಚಾಲಿತ ಮರುಕ್ರಮಾಂಕ ಸಲಹೆಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ಇನ್ವೆಂಟರಿ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ.",
    step2Title: "ಸ್ಟಾಕ್ ಮಟ್ಟ ನಿರ್ವಹಣೆ ಮತ್ತು ಎಚ್ಚರಿಕೆಗಳು",
    step2Intro: "ಸ್ವಯಂಚಾಲಿತ ಎಚ್ಚರಿಕೆಗಳು, ಮರುಕ್ರಮಾಂಕ ಸಲಹೆಗಳು ಮತ್ತು ಎಲ್ಲಾ ಉತ್ಪನ್ನ ವರ್ಗಗಳಲ್ಲಿ ವಿವರವಾದ ಟ್ರ್ಯಾಕಿಂಗ್‌ನೊಂದಿಗೆ ಸ್ಟಾಕ್ ಮಟ್ಟಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.",
    step2Description: "ಸ್ಟಾಕ್ ಅಲರ್ಟ್ಸ್ ಟ್ಯಾಬ್ ಕಡಿಮೆ ಸ್ಟಾಕ್ ಸನ್ನಿವೇಶಗಳು, ಅವಧಿ ಮೀರಿದ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ನಿಧಾನವಾಗಿ ಚಲಿಸುವ ವಸ್ತುಗಳನ್ನು ಅವು ಸಮಸ್ಯೆಗಳಾಗುವ ಮೊದಲು ಗುರುತಿಸುವ ಮೂಲಕ ದಾಸ್ತಾನುಗಳನ್ನು ಪೂರ್ವಭಾವಿಯಾಗಿ ನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    step3Title: "ಗೋದಾಮಿನ ಸ್ಥಳ ನಿರ್ವಹಣೆ",
    step3Intro: "ವಿವರವಾದ ಸ್ಥಳ ಟ್ರ್ಯಾಕಿಂಗ್, ಬಿನ್ ನಿರ್ವಹಣೆ ಮತ್ತು ದಕ್ಷ ಉತ್ಪನ್ನ ಪ್ಲೇಸ್‌ಮೆಂಟ್ ತಂತ್ರಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಭೌತಿಕ ದಾಸ್ತಾನುಗಳನ್ನು ಸಂಘಟಿಸಿ.",
    step3Description: "ಗೋದಾಮಿನ ಸ್ಥಳ ವ್ಯವಸ್ಥೆಯು ನಿಮ್ಮ ಸಂಗ್ರಹಣಾ ಪ್ರದೇಶಗಳ ದೃಶ್ಯ ಮ್ಯಾಪಿಂಗ್ ಅನ್ನು ಒದಗಿಸುತ್ತದೆ, ಸಿಬ್ಬಂದಿ ಉತ್ಪನ್ನಗಳನ್ನು ತ್ವರಿತವಾಗಿ ಪತ್ತೆಹಚ್ಚಲು ಮತ್ತು ಸ್ಥಳದ ಬಳಕೆಯನ್ನು ಅತ್ಯುತ್ತಮಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    step4Title: "ಖರೀದಿ ಬುಟ್ಟಿ ಮತ್ತು ಮಾರಾಟಗಾರರ ರಿಟರ್ನ್‌ಗಳು",
    step4Intro: "ಬುದ್ಧಿವಂತ ಖರೀದಿ ಬುಟ್ಟಿಗಳೊಂದಿಗೆ ಖರೀದಿ ನಿರ್ಧಾರಗಳನ್ನು ಸುಗಮಗೊಳಿಸಿ ಮತ್ತು ಆರೋಗ್ಯಕರ ಪೂರೈಕೆದಾರರ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಮಾರಾಟಗಾರರ ರಿಟರ್ನ್‌ಗಳನ್ನು ದಕ್ಷತೆಯಿಂದ ನಿರ್ವಹಿಸಿ.",
    step4Description: "ಖರೀದಿ ಬುಟ್ಟಿ ನಿಮ್ಮ ಎಲ್ಲಾ ಖರೀದಿ ಅಗತ್ಯಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ ಆದರೆ ವೆಂಡರ್ ರಿಟರ್ನ್ಸ್ ವ್ಯವಸ್ಥೆಯು ಹಾನಿಗೊಳಗಾದ ಅಥವಾ ಅವಧಿ ಮೀರಿದ ದಾಸ್ತಾನು ರಿಟರ್ನ್‌ಗಳನ್ನು ಪೂರೈಕೆದಾರರಿಗೆ ನಿರ್ವಹಿಸುತ್ತದೆ.",
    step5Title: "ದಾಸ್ತಾನು ಅನ್ಯಾಲಿಟಿಕ್ಸ್ ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆ",
    step5Intro: "ಉತ್ಪನ್ನದ ವೇಗ, ಋತುಮಾನದ ಪ್ರವೃತ್ತಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಗರಿಷ್ಠ ಲಾಭದಾಯಕತೆಗಾಗಿ ನಿಮ್ಮ ದಾಸ್ತಾನು ಹೂಡಿಕೆಯನ್ನು ಅತ್ಯುತ್ತಮಗೊಳಿಸಲು ವಿವರವಾದ ಅನ್ಯಾಲಿಟಿಕ್ಸ್ ಅನ್ನು ಬಳಸಿಕೊಳ್ಳಿ.",
    step5Description: "ಸುಧಾರಿತ ಅನ್ಯಾಲಿಟಿಕ್ಸ್ ನಿಮಗೆ ಚಲನೆಯ ವೇಗದಿಂದ ಉತ್ಪನ್ನಗಳನ್ನು ವರ್ಗೀಕರಿಸಲು, ಪ್ರವೃತ್ತಿಗಳನ್ನು ಗುರುತಿಸಲು ಮತ್ತು ಸ್ಟಾಕ್ ಮಟ್ಟಗಳು ಮತ್ತು ಖರೀದಿಯ ಬಗ್ಗೆ ಡೇಟಾ-ಚಾಲಿತ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    nextStepsTitle: "ದಾಸ್ತಾನು ನಿರ್ವಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನಿಮ್ಮ ಇನ್ವೆಂಟರಿ ಸಿಸ್ಟಮ್ ಅನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ ನಂತರ, ನೀವು ಈಗ ಬೆಲೆ ತಂತ್ರಗಳು ಮತ್ತು ಮಾರ್ಜಿನ್ ನಿರ್ವಹಣೆಯನ್ನು ಆಪ್ಟಿಮೈಸ್ ಮಾಡಲು ಪ್ರೈಸ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್‌ಗೆ ತೆರಳಬಹುದು.",
    nextStepsButton: "ಬೆಲೆ ನಿರ್ವಹಣೆಗೆ ಮುಂದುವರಿಯಿರಿ",
    // Screenshot content translations
    stockStatusOverview: "ಸ್ಟಾಕ್ ಸ್ಥಿತಿ ಅವಲೋಕನ",
    fastMoving: "ವೇಗವಾಗಿ ಚಲಿಸುವ",
    slowMoving: "ನಿಧಾನವಾಗಿ ಚಲಿಸುವ",
    nonMoving: "ಚಲಿಸದ",
    outOfStock: "ಸ್ಟಾಕ್ ಮೀರಿದ",
    nearExpiry: "ಅವಧಿ ಮೀರುವ ಸಮೀಪದಲ್ಲಿ (≤30ದಿ)",
    expired: "ಅವಧಿ ಮೀರಿದ",
    understandingEachStatus: "ಪ್ರತಿಯೊಂದು ಸ್ಥಿತಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು:",
    fastMovingDesc: "ಹೆಚ್ಚಿನ ಮಾರಾಟದ ವೇಗವುಳ್ಳ ಉತ್ಪನ್ನಗಳು - ಚೆನ್ನಾಗಿ ಸಂಗ್ರಹಿಸಿ",
    slowMovingDesc: "ಸರಾಸರಿಗಿಂತ ನಿಧಾನವಾಗಿ ಚಲಿಸುವ ಉತ್ಪನ್ನಗಳು - ಎಚ್ಚರಿಕೆಯಿಂದ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",
    nonMovingDesc: "ಇತ್ತೀಚಿನ ಮಾರಾಟವಿಲ್ಲದ ಉತ್ಪನ್ನಗಳು - ಪ್ರಚಾರಗಳನ್ನು ಪರಿಗಣಿಸಿ",
    outOfStockDesc: "ತಕ್ಷಣದ ಮರುಕ್ರಮಾಂಕ ಅಗತ್ಯ",
    nearExpiryDesc: "30 ದಿನಗಳಲ್ಲಿ ಅವಧಿ ಮೀರುವ ಉತ್ಪನ್ನಗಳು - ಮಾರಾಟಕ್ಕೆ ಆದ್ಯತೆ ನೀಡಿ",
    expiredDesc: "ಅವಧಿ ಮೀರಿದ ಉತ್ಪನ್ನಗಳು - ರಿಟರ್ನ್ ಅಥವಾ ವಿಲೇವಾರಿ",
    productInventory: "ಉತ್ಪನ್ನ ದಾಸ್ತಾನು",
    headerSectionControls: "ಶೀರ್ಷಿಕೆ ವಿಭಾಗ ಮತ್ತು ನಿಯಂತ್ರಣಗಳು",
    searchAndFilterControls: "ಹುಡುಕಾಟ ಮತ್ತು ಫಿಲ್ಟರ್ ನಿಯಂತ್ರಣಗಳು",
    searchProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ...",
    allStockStatus: "ಎಲ್ಲಾ ಸ್ಟಾಕ್ ಸ್ಥಿತಿ",
    inStock: "ಸ್ಟಾಕ್‌ನಲ್ಲಿದೆ",
    lowStockAlert: "ಕಡಿಮೆ ಸ್ಟಾಕ್",
    outOfStockAlert: "ಸ್ಟಾಕ್ ಮೀರಿದ",
    allCategories: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
    beverages: "ಪಾನೀಯಗಳು",
    snacks: "ಲಘು ಆಹಾರಗಳು",
    personalCare: "ವೈಯಕ್ತಿಕ ಆರೈಕೆ",
    productTableColumnBreakdown: "ಉತ್ಪನ್ನ ಟೇಬಲ್ - ಕಾಲಂಗಳ ವಿವರಣೆ",
    product: "ಉತ್ಪನ್ನ",
    stockStatus: "ಸ್ಟಾಕ್ ಸ್ಥಿತಿ",
    inventoryValue: "ದಾಸ್ತಾನು ಮೌಲ್ಯ",
    poStatus: "PO ಸ್ಥಿತಿ",
    activity: "ಚಟುವಟಿಕೆ",
    status: "ಸ್ಥಿತಿ",
    actions: "ಕ್ರಿಯೆಗಳು",
    units: "ಘಟಕಗಳು",
    cost: "ವೆಚ್ಚ",
    price: "ಬೆಲೆ",
    onOrder: "ಆದೇಶದಲ್ಲಿ",
    noRecentSales: "ಇತ್ತೀಚಿನ ಮಾರಾಟವಿಲ್ಲ",
    soldDaysAgo: "7 ದಿನಗಳ ಹಿಂದೆ ಮಾರಾಟವಾಗಿದೆ",
    active: "ಸಕ್ರಿಯ",
    basket: "ಬುಟ್ಟಿ",
    allocate: "ಹಂಚಿಕೆ",
    details: "ವಿವರಗಳು",
    sku: "SKU:",
    understandingEachColumn: "ಪ್ರತಿಯೊಂದು ಕಾಲಂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು:",
    productColumnDesc: "ಗುರುತಿಸುವಿಕೆಗಾಗಿ ಉತ್ಪನ್ನದ ಚಿತ್ರ, ಹೆಸರು, ಬ್ರಾಂಡ್ ಮತ್ತು SKU ಅನ್ನು ತೋರಿಸುತ್ತದೆ",
    stockStatusColumnDesc: "ವೇಗ ಬ್ಯಾಡ್ಜ್‌ನೊಂದಿಗೆ ಪ್ರಸ್ತುತ ಸ್ಟಾಕ್ ಪ್ರಮಾಣ (ವೇಗ/ನಿಧಾನ/ಚಲನೆಯಿಲ್ಲದ/ಸ್ಟಾಕ್ ಮೀರಿದ)",
    inventoryValueColumnDesc: "ಪ್ರಸ್ತುತ ಸ್ಟಾಕ್ ಮೌಲ್ಯ + ಪ್ರತಿ ಘಟಕದ ವೆಚ್ಚ ಮತ್ತು ಮಾರಾಟ ಬೆಲೆ",
    poStatusColumnDesc: "ಬಾಕಿ ಇರುವ ಖರೀದಿ ಆದೇಶಗಳಿಂದ ಆದೇಶದಲ್ಲಿರುವ ಪ್ರಮಾಣವನ್ನು ತೋರಿಸುತ್ತದೆ",
    activityColumnDesc: "ಇತ್ತೀಚಿನ ಮಾರಾಟದ ಚಟುವಟಿಕೆ ಮತ್ತು ಶೆಲ್ಫ್ ಲೈಫ್ ಮಾಹಿತಿ",
    statusColumnDesc: "ಉತ್ಪನ್ನವು ಮಾರಾಟಕ್ಕೆ ಸಕ್ರಿಯವಾಗಿದೆಯೇ ಅಥವಾ ನಿಷ್ಕ್ರಿಯವಾಗಿದೆಯೇ ಎಂಬುದು",
    actionsColumnDesc: "ಬುಟ್ಟಿ, ಸ್ವಯಂ-ಹಂಚಿಕೆ ಮತ್ತು ವಿವರಗಳಿಗಾಗಿ ತ್ವರಿತ ಕ್ರಿಯೆ ಬಟನ್‌ಗಳು",
    actionButtonsExplained: "ಕ್ರಿಯೆ ಬಟನ್‌ಗಳ ವಿವರಣೆ",
    basketDesc: "ನಂತರ ಖರೀದಿ ಆದೇಶವನ್ನು ರಚಿಸಲು ಈ ಉತ್ಪನ್ನವನ್ನು ನಿಮ್ಮ ಖರೀದಿ ಬುಟ್ಟಿಗೆ ಸೇರಿಸಿ",
    allocateDesc: "ಈ ಉತ್ಪನ್ನಕ್ಕೆ ಸೂಕ್ತ ಗೋದಾಮಿನ ಸ್ಥಳವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಹುಡುಕಿ ಮತ್ತು ಹಂಚಿಸಿ",
    detailsDesc: "ಸಂಪೂರ್ಣ ಉತ್ಪನ್ನ ಮಾಹಿತಿಯನ್ನು ವೀಕ್ಷಿಸಿ, ವಿವರಗಳನ್ನು ಎಡಿಟ್ ಮಾಡಿ ಮತ್ತು ಮಾರಾಟದ ಇತಿಹಾಸವನ್ನು ನೋಡಿ",
    browseCategories: "ವರ್ಗಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ",
    categories: "ವರ್ಗಗಳು",
    brandsIn: "", // Kannada doesn't naturally combine this way, will handle in JSX
    productsText: "ಉತ್ಪನ್ನಗಳು",
    productsCount: "{count} ಉತ್ಪನ್ನಗಳು",
    brandsCount: "{count} ಬ್ರಾಂಡ್‌ಗಳು",
    stock: "ಸ್ಟಾಕ್",
    value: "ಮೌಲ್ಯ",
    addStock: "ಸ್ಟಾಕ್ ಸೇರಿಸಿ",
    browseCategoriesWorkflow: "ವರ್ಗಗಳ ಬ್ರೌಸಿಂಗ್ ಕಾರ್ಯವಿಧಾನ:",
    selectCategory: "ಎಡ ಕಾಲಂನಿಂದ ವರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ (ಆಯ್ಕೆ ಮಾಡಿದಾಗ ನೀಲಿ ಬಣ್ಣದಲ್ಲಿ ಹೈಲೈಟ್ ಆಗುತ್ತದೆ)",
    chooseBrand: "ಮಧ್ಯದ ಕಾಲಂನಿಂದ ಬ್ರಾಂಡ್ ಆಯ್ಕೆಮಾಡಿ (ಆಯ್ಕೆ ಮಾಡಿದಾಗ ಹಸಿರು ಬಣ್ಣದಲ್ಲಿ ಹೈಲೈಟ್ ಆಗುತ್ತದೆ)",
    browseManageProducts: "ಬಲ ಕಾಲಂನಲ್ಲಿ ಹುಡುಕಾಟ ಮತ್ತು ಕ್ರಿಯೆಗಳೊಂದಿಗೆ ಉತ್ಪನ್ನಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",
    manualInventoryAdditions: "ಹಸ್ತಚಾಲಿತ ದಾಸ್ತಾನು ಸೇರ್ಪಡೆಗಳಿಗಾಗಿ \"ಸ್ಟಾಕ್ ಸೇರಿಸಿ\" ಅಥವಾ ಖರೀದಿ ಯೋಜನೆಯಿಗಾಗಿ \"ಬುಟ್ಟಿ\" ಬಳಸಿ",
    alertCategoriesAndPriorityLevels: "ಎಚ್ಚರಿಕೆ ವರ್ಗಗಳು ಮತ್ತು ಆದ್ಯತೆಯ ಮಟ್ಟಗಳು",
    stockAlerts: "ಸ್ಟಾಕ್ ಎಚ್ಚರಿಕೆಗಳು",
    allAlertTypes: "ಎಲ್ಲಾ ಎಚ್ಚರಿಕೆ ಪ್ರಕಾರಗಳು",
    critical: "ನಿರ್ಣಾಯಕ",
    high: "ಹೆಚ್ಚು",
    medium: "ಮಧ್ಯಮ",
    low: "ಕಡಿಮೆ",
    nearExpiryAlert: "ಅವಧಿ ಮೀರುವ ಸಮೀಪದಲ್ಲಿ",
    expiredAlert: "ಅವಧಿ ಮೀರಿದ",
    slowMovingAlert: "ನಿಧಾನವಾಗಿ ಚಲಿಸುವ",
    allPriorities: "ಎಲ್ಲಾ ಆದ್ಯತೆಗಳು",
    criticalOutOfStock: "ನಿರ್ಣಾಯಕ - ಸ್ಟಾಕ್ ಮೀರಿದ",
    lastSold: "ಕೊನೆಯ ಮಾರಾಟ:",
    expectedDemand: "ನಿರೀಕ್ಷಿತ ಬೇಡಿಕೆ:",
    reorderNow: "ಈಗಲೇ ಮರುಕ್ರಮಾಂಕಿಸಿ",
    highLowStock: "ಹೆಚ್ಚು - ಕಡಿಮೆ ಸ್ಟಾಕ್ ({count} ಘಟಕಗಳು)",
    minLevel: "ಕನಿಷ್ಠ ಮಟ್ಟ:",
    avgDailySales: "ಸರಾಸರಿ ದೈನಂದಿನ ಮಾರಾಟ:",
    addToBasket: "ಬುಟ್ಟಿಗೆ ಸೇರಿಸಿ",
    mediumNearExpiry: "ಮಧ್ಯಮ - ಅವಧಿ ಮೀರುವ ಸಮೀಪದಲ್ಲಿ ({count} ದಿನಗಳು)",
    unitsInStock: "{count} ಘಟಕಗಳು ಸ್ಟಾಕ್‌ನಲ್ಲಿ",
    considerPromotionalPricing: "ಪ್ರಚಾರದ ಬೆಲೆಗಳನ್ನು ಪರಿಗಣಿಸಿ",
    promote: "ಪ್ರಚಾರ ಮಾಡಿ",
    alertPrioritySystem: "ಎಚ್ಚರಿಕೆ ಆದ್ಯತೆಯ ವ್ಯವಸ್ಥೆ:",
    criticalRed: "ನಿರ್ಣಾಯಕ (ಕೆಂಪು): ಇತ್ತೀಚಿನ ಮಾರಾಟ ಚಟುವಟಿಕೆಯೊಂದಿಗೆ ಸ್ಟಾಕ್ ಮೀರಿದ ವಸ್ತುಗಳು - ತಕ್ಷಣದ ಮರುಕ್ರಮಾಂಕ ಅಗತ್ಯ",
    highOrange: "ಹೆಚ್ಚು (ಕಿತ್ತಳೆ): ಕನಿಷ್ಠ ಮಟ್ಟಕ್ಕಿಂತ ಕಡಿಮೆ ಸ್ಟಾಕ್ ವಸ್ತುಗಳು - ಖರೀದಿ ಬುಟ್ಟಿಗೆ ಸೇರಿಸಿ",
    mediumYellow: "ಮಧ್ಯಮ (ಹಳದಿ): ಅವಧಿ ಮೀರುವ ಸಮೀಪದ ವಸ್ತುಗಳು - ಪ್ರಚಾರಗಳು ಅಥವಾ ರಿಯಾಯಿತಿಗಳನ್ನು ಪರಿಗಣಿಸಿ",
    lowBlue: "ಕಡಿಮೆ (ನೀಲಿ): ನಿಧಾನವಾಗಿ ಚಲಿಸುವ ವಸ್ತುಗಳು - ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ ಮತ್ತು ತೆರವುಗೊಳಿಸುವ ತಂತ್ರಗಳನ್ನು ಯೋಜಿಸಿ",
    productHeaderAndBasicInformation: "ಉತ್ಪನ್ನ ಶೀರ್ಷಿಕೆ ಮತ್ತು ಮೂಲಭೂತ ಮಾಹಿತಿ",
    productDetailHeader: "ಉತ್ಪನ್ನ ವಿವರ",
    editProduct: "ಉತ್ಪನ್ನವನ್ನು ಸಂಪಾದಿಸಿ",
    currentStock: "ಪ್ರಸ್ತುತ ಸ್ಟಾಕ್",
    min: "ಕನಿಷ್ಠ:",
    max: "ಗರಿಷ್ಠ:",
    sellingPrices: "ಮಾರಾಟ ಬೆಲೆಗಳು",
    b2c: "B2C:",
    b2b: "B2B:",
    locationAndVendorInformation: "ಸ್ಥಳ ಮತ್ತು ಮಾರಾಟಗಾರರ ಮಾಹಿತಿ",
    warehouseLocation: "ಗೋದಾಮಿನ ಸ್ಥಳ",
    primaryLocation: "ಪ್ರಾಥಮಿಕ ಸ್ಥಳ:",
    binCapacity: "ಬಿನ್ ಸಾಮರ್ಥ್ಯ:",
    currentUsage: "ಪ್ರಸ್ತುತ ಬಳಕೆ:",
    changeLocation: "ಸ್ಥಳ ಬದಲಿಸಿ",
    vendorInformation: "ಮಾರಾಟಗಾರರ ಮಾಹಿತಿ",
    primaryVendor: "ಪ್ರಾಥಮಿಕ ಮಾರಾಟಗಾರ:",
    lastOrder: "ಕೊನೆಯ ಆದೇಶ:",
    leadTime: "ಲೀಡ್ ಸಮಯ:",
    createPurchaseOrder: "ಖರೀದಿ ಆದೇಶವನ್ನು ರಚಿಸಿ",
    salesAnalyticsAndMovementHistory: "ಮಾರಾಟ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಚಲನೆಯ ಇತಿಹಾಸ",
    totalSales: "ಒಟ್ಟು ಮಾರಾಟ",
    revenue: "ಆದಾಯ",
    turnoverRate: "ತಿರುಗುವಿಕೆ ದರ",
    recentStockMovements: "ಇತ್ತೀಚಿನ ಸ್ಟಾಕ್ ಚಲನೆಗಳು",
    stockAdded: "ಸ್ಟಾಕ್ ಸೇರಿಸಲಾಗಿದೆ",
    poReceived: "{poNumber} ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
    sale: "ಮಾರಾಟ",
    orderNum: "ಆದೇಶ #{orderNumber}",
    stockAdjustment: "ಸ್ಟಾಕ್ ಹೊಂದಾಣಿಕೆ",
    inventoryAuditCorrection: "ದಾಸ್ತಾನು ಲೆಕ್ಕಪರಿಶೋಧನೆ ತಿದ್ದುಪಡಿ",
    usingProductDetailData: "ಉತ್ಪನ್ನ ವಿವರ ಡೇಟಾವನ್ನು ಬಳಸುವುದು:",
    monitorStockMovementsDesc: "ಮರುಕ್ರಮಾಂಕದ ಸಮಯವನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಸ್ಟಾಕ್ ಚಲನೆಗಳು ಮತ್ತು ಮಾರಾಟದ ಮಾದರಿಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",
    useTurnoverRateDesc: "ಉತ್ಪನ್ನಗಳನ್ನು ವೇಗವಾಗಿ/ನಿಧಾನವಾಗಿ ಚಲಿಸುವಂತೆ ವರ್ಗೀಕರಿಸಲು ತಿರುಗುವಿಕೆ ದರವನ್ನು ಬಳಸಿ",
    trackVendorPerformanceDesc: "ಉತ್ತಮ ಯೋಜನೆಗಾಗಿ ಮಾರಾಟಗಾರರ ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಲೀಡ್ ಸಮಯವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    analyzeLocationEfficiencyDesc: "ಸ್ಥಳದ ದಕ್ಷತೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಮತ್ತು ನಿಧಾನವಾಗಿ ಚಲಿಸುವ ವಸ್ತುಗಳನ್ನು ಸ್ಥಳಾಂತರಿಸುವುದನ್ನು ಪರಿಗಣಿಸಿ",
    reviewPricePerformanceDesc: "ಬೆಲೆ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಅಗತ್ಯವಿರುವಂತೆ ಬೆಲೆ ತಂತ್ರಗಳನ್ನು ಹೊಂದಿಸಿ",
    // Product names translations
    cleanClearFaceWash: "ಕ್ಲೀನ್ & ಕ್ಲಿಯರ್ ಫೇಸ್ ವಾಷ್ - ಅಕ್ವಾ, 50ml",
    dettolSpiceRoute: "ಡೆಟ್ಟಾಲ್ 300ml ಸ್ಪೈಸ್ ರೂಟ್",
    sunflowerCookingOil: "ಸೂರ್ಯಕಾಂತಿ ಅಡುಗೆ ಎಣ್ಣೆ 1L",
    freshMilk: "ತಾಜಾ ಹಾಲು 1L ಪ್ಯಾಕೆಟ್",
    organicGreekYogurt: "ಜೈವಿಕ ಗ್ರೀಕ್ ಯೋಗರ್ಟ್ 200g",
    healthyHarvest: "ಆರೋಗ್ಯಕರ ಕೊಯ್ಲು",
    dettol: "ಡೆಟ್ಟಾಲ್",
    goldenValley: "ಗೋಲ್ಡನ್ ವ್ಯಾಲಿ",
    dairyFresh: "ಡೇರಿ ಫ್ರೆಶ್",
    naturesBest: "ನೇಚರ್‌ಸ್ ಬೆಸ್ಟ್",
    globalSupplies: "ಗ್ಲೋಬಲ್ ಸಪ್ಲೈಸ್ ಲಿಮಿಟೆಡ್",
  },
  ta: {
    pageTitle: "சரக்கு மேலாண்மை கையேடு",
    backToManual: "கையேட்டிற்கு திரும்பு",
    description: "சிறந்த சரக்கு அளவுகள் மற்றும் திறமையான செயல்பாடுகளை பராமரிக்க சரக்கு கண்காணிப்பு, சரக்கு மேலாண்மை, விற்பனையாளர் உறவுகள் மற்றும் கொள்முதல் ஆணை பணி நீரோட்டங்களை மாஸ்டர் செய்யுங்கள்.",
    step1Title: "சரக்கு டாஷ்போர்டு கண்ணோட்டம்",
    step1Intro: "சரக்கு டாஷ்போர்டு உங்கள் சரக்கு அளவுகள், எச்சரிக்கைகள் மற்றும் செயல்திறன் அளவீடுகளுக்கு நிகழ்நேர பார்வையை வழங்குகிறது. இது அனைத்து சரக்கு தொடர்பான செயல்பாடுகளுக்கும் உங்கள் மைய கட்டளை மையமாகும்.",
    step1Description: "விரிவான சரக்கு கண்காணிப்பு கருவிகள், வேக பகுப்பாய்வு மற்றும் தானியங்கி மறு ஆர்டர் பரிந்துரைகளை அணுக சரக்கு மேலாண்மை டாஷ்போர்டுக்கு செல்லுங்கள்.",
    step2Title: "சரக்கு அளவு மேலாண்மை & எச்சரிக்கைகள்",
    step2Intro: "தானியங்கி எச்சரிக்கைகள், மறு ஆர்டர் பரிந்துரைகள் மற்றும் அனைத்து பொருள் வகைகளிலும் விரிவான கண்காணிப்புடன் சரக்கு அளவுகளை கண்காணித்து மேலாண்மை செய்யுங்கள்.",
    step2Description: "சரக்கு எச்சரிக்கைகள் டேப் குறைந்த சரக்கு சூழ்நிலைகள், காலாவதியான பொருட்கள் மற்றும் மெதுவாக நகரும் பொருட்களை அவை பிரச்சினைகளாக மாறுவதற்கு முன் கண்டறிவதன் மூலம் சரக்குகளை முன்கூட்டியே மேலாண்மை செய்ய உதவுகிறது.",
    step3Title: "கிடங்கு இருப்பிட மேலாண்மை",
    step3Intro: "விரிவான இருப்பிட கண்காணிப்பு, பின் மேலாண்மை மற்றும் திறமையான பொருள் வைப்பு உத்திகளுடன் உங்கள் உடல் சரக்குகளை ஒழுங்கமைக்கவும்.",
    step3Description: "கிடங்கு இருப்பிட அமைப்பு உங்கள் சேமிப்பு பகுதிகளின் காட்சி மேப்பிங்கை வழங்குகிறது, பணியாளர்கள் பொருட்களை விரைவாக கண்டறியவும் இடத்தின் பயன்பாட்டை உகந்ததாக்கவும் உதவுகிறது.",
    step4Title: "கொள்முதல் கூடை & விற்பனையாளர் திருப்பங்கள்",
    step4Intro: "ஸ்மார்ட் கொள்முதல் கூடைகளுடன் கொள்முதல் முடிவுகளை எளிதாக்கவும், ஆரோக்கியமான சப்ளையர் உறவுகளை பராமரிக்க விற்பனையாளர் திருப்பங்களை திறமையாக மேலாண்மை செய்யவும்.",
    step4Description: "கொள்முதல் கூடை உங்கள் அனைத்து கொள்முதல் தேவைகளையும் ஒன்றிணைக்கிறது, விற்பனையாளர் திருப்பங்கள் அமைப்பு சேதமடைந்த அல்லது காலாவதியான சரக்கு திருப்பங்களை சப்ளையர்களுக்கு கையாளுகிறது.",
    step5Title: "சரக்கு பகுப்பாய்வு & செயல்திறன்",
    step5Intro: "பொருள் வேகம், பருவகால போக்குகளை புரிந்துகொள்ளவும், அதிகபட்ச லாபத்திற்காக உங்கள் சரக்கு முதலீட்டை உகந்ததாக்கவும் விரிவான பகுப்பாய்வைப் பயன்படுத்துங்கள்.",
    step5Description: "மேம்பட்ட பகுப்பாய்வு உங்களுக்கு இயக்க வேகத்தால் பொருட்களை வகைப்படுத்தவும், போக்குகளை கண்டறியவும், சரக்கு அளவுகள் மற்றும் கொள்முதல் பற்றி தரவு-ஆதாரமான முடிவுகளை எடுக்க உதவுகிறது.",
    nextStepsTitle: "சரக்கு மேலாண்மை முடிந்தது!",
    nextStepsDescription: "உங்கள் சரக்கு அமைப்பு கட்டமைக்கப்பட்டதால், இப்போது நீங்கள் விலை மேலாண்மைக்கு சென்று விலை உத்திகளை மேம்படுத்தலாம் மற்றும் வரம்பு மேலாண்மையை செய்யலாம்.",
    nextStepsButton: "விலை மேலாண்மைக்கு தொடரவும்",
    // Screenshot content translations
    stockStatusOverview: "சரக்கு நிலை கண்ணோட்டம்",
    fastMoving: "விரைவாக நகரும்",
    slowMoving: "மெதுவாக நகரும்",
    nonMoving: "நகராத",
    outOfStock: "சரக்கு இல்லை",
    nearExpiry: "காலாவதி நெருக்கம் (≤30நா)",
    expired: "காலாவதி",
    understandingEachStatus: "ஒவ்வொரு நிலையையும் புரிந்துகொள்வது:",
    fastMovingDesc: "அதிக விற்பனை வேகம் கொண்ட பொருட்கள் - நன்கு சரக்கு வைக்கவும்",
    slowMovingDesc: "சராசரியை விட மெதுவாக நகரும் பொருட்கள் - கவனமாக கண்காணிக்கவும்",
    nonMovingDesc: "சமீபத்திய விற்பனை இல்லாத பொருட்கள் - விளம்பரங்களை கருத்தில் கொள்ளவும்",
    outOfStockDesc: "உடனடி மறு ஆர்டர் தேவை",
    nearExpiryDesc: "30 நாட்களில் காலாவதியாகும் பொருட்கள் - விற்பனைக்கு முன்னுரிமை",
    expiredDesc: "காலாவதியான பொருட்கள் - திருப்ப அல்லது அகற்று",
    productInventory: "பொருள் சரக்கு",
    headerSectionControls: "தலைப்பு பிரிவு மற்றும் கட்டுப்பாடுகள்",
    searchAndFilterControls: "தேடல் மற்றும் வடிப்பான் கட்டுப்பாடுகள்",
    searchProducts: "பொருட்களை தேடு...",
    allStockStatus: "அனைத்து சரக்கு நிலைகள்",
    inStock: "சரக்கில் உள்ளது",
    lowStockAlert: "குறைந்த சரக்கு",
    outOfStockAlert: "சரக்கு இல்லை",
    allCategories: "அனைத்து வகைகள்",
    beverages: "பானங்கள்",
    snacks: "சிற்றுண்டிகள்",
    personalCare: "தனிப்பட்ட பராமரிப்பு",
    productTableColumnBreakdown: "பொருள் அட்டவணை - நெடுவரிசைகளின் விளக்கம்",
    product: "பொருள்",
    stockStatus: "சரக்கு நிலை",
    inventoryValue: "சரக்கு மதிப்பு",
    poStatus: "PO நிலை",
    activity: "செயல்பாடு",
    status: "நிலை",
    actions: "செயல்கள்",
    units: "அலகுகள்",
    cost: "செலவு",
    price: "விலை",
    onOrder: "ஆர்டரில்",
    noRecentSales: "சமீபத்திய விற்பனை இல்லை",
    soldDaysAgo: "7 நாட்களுக்கு முன் விற்கப்பட்டது",
    active: "செயலில்",
    basket: "கூடை",
    allocate: "ஒதுக்கீடு",
    details: "விவரங்கள்",
    sku: "SKU:",
    understandingEachColumn: "ஒவ்வொரு நெடுவரிசையையும் புரிந்துகொள்வது:",
    productColumnDesc: "அடையாளம் காண்பதற்கு பொருளின் படம், பெயர், பிராண்ட் மற்றும் SKU ஐ காட்டுகிறது",
    stockStatusColumnDesc: "வேக பேட்ஜுடன் தற்போதைய சரக்கு அளவு (விரைவு/மெதுவாக/நகராத/சரக்கு இல்லை)",
    inventoryValueColumnDesc: "தற்போதைய சரக்கு மதிப்பு + ஒரு அலகுக்கு செலவு மற்றும் விற்பனை விலை",
    poStatusColumnDesc: "நிலுவையில் உள்ள கொள்முதல் ஆர்டர்களிலிருந்து ஆர்டரில் உள்ள அளவை காட்டுகிறது",
    activityColumnDesc: "சமீபத்திய விற்பனை செயல்பாடு மற்றும் அலமாரி வாழ்க்கை தகவல்",
    statusColumnDesc: "பொருள் விற்பனைக்கு செயலில் உள்ளதா அல்லது செயலற்றதா என்பது",
    actionsColumnDesc: "கூடை, தானியங்கி-ஒதுக்கீடு மற்றும் விவரங்களுக்கான விரைவு செயல் பொத்தான்கள்",
    actionButtonsExplained: "செயல் பொத்தான்கள் விளக்கப்பட்டுள்ளன",
    basketDesc: "பின்னர் கொள்முதல் ஆர்டர் உருவாக்க இந்த பொருளை உங்கள் கொள்முதல் கூடையில் சேர்க்கவும்",
    allocateDesc: "இந்த பொருளுக்கு உகந்த கிடங்கு இருப்பிடத்தை தானாக கண்டறிந்து ஒதுக்கீடு செய்யவும்",
    detailsDesc: "முழுமையான பொருள் தகவலை காண்க, விவரங்களை திருத்து மற்றும் விற்பனை வரலாற்றை பார்க்கவும்",
    browseCategories: "வகைகளை உலாவு",
    categories: "வகைகள்",
    brandsIn: "",
    productsText: "பொருட்கள்",
    productsCount: "{count} பொருட்கள்",
    brandsCount: "{count} பிராண்டுகள்",
    stock: "சரக்கு",
    value: "மதிப்பு",
    addStock: "சரக்கு சேர்",
    browseCategoriesWorkflow: "வகைகளை உலாவும் பணி நீரோட்டம்:",
    selectCategory: "இடது நெடுவரிசையிலிருந்து வகையைத் தேர்ந்தெடுக்கவும் (தேர்ந்தெடுக்கும்போது நீல நிறத்தில் முன்னிலைப்படுத்தப்படும்)",
    chooseBrand: "நடு நெடுவரிசையிலிருந்து பிராண்டைத் தேர்ந்தெடுக்கவும் (தேர்ந்தெடுக்கும்போது பச்சை நிறத்தில் முன்னிலைப்படுத்தப்படும்)",
    browseManageProducts: "வலது நெடுவரிசையில் தேடல் மற்றும் செயல்களுடன் பொருட்களை உலாவி மேலாண்மை செய்யவும்",
    manualInventoryAdditions: "கைமுறை சரக்கு சேர்ப்புகளுக்கு \"சரக்கு சேர்\" அல்லது கொள்முதல் திட்டமிடலுக்கு \"கூடை\" பயன்படுத்தவும்",
    alertCategoriesAndPriorityLevels: "எச்சரிக்கை வகைகள் மற்றும் முன்னுரிமை நிலைகள்",
    stockAlerts: "சரக்கு எச்சரிக்கைகள்",
    allAlertTypes: "அனைத்து எச்சரிக்கை வகைகள்",
    critical: "முக்கியமான",
    high: "உயர்",
    medium: "நடுத்தர",
    low: "குறைந்த",
    nearExpiryAlert: "காலாவதி நெருக்கம்",
    expiredAlert: "காலாவதி",
    slowMovingAlert: "மெதுவாக நகரும்",
    allPriorities: "அனைத்து முன்னுரிமைகள்",
    criticalOutOfStock: "முக்கியமான - சரக்கு இல்லை",
    lastSold: "கடைசியாக விற்கப்பட்டது:",
    expectedDemand: "எதிர்பார்க்கப்படும் தேவை:",
    reorderNow: "இப்போது மறு ஆர்டர் செய்",
    highLowStock: "உயர் - குறைந்த சரக்கு ({count} அலகுகள்)",
    minLevel: "குறைந்தபட்ச நிலை:",
    avgDailySales: "சராசரி தினசரி விற்பனை:",
    addToBasket: "கூடையில் சேர்",
    mediumNearExpiry: "நடுத்தர - காலாவதி நெருக்கம் ({count} நாட்கள்)",
    unitsInStock: "{count} அலகுகள் சரக்கில்",
    considerPromotionalPricing: "விளம்பர விலைகளை கருத்தில் கொள்ளவும்",
    promote: "விளம்பரப்படுத்து",
    alertPrioritySystem: "எச்சரிக்கை முன்னுரிமை அமைப்பு:",
    criticalRed: "முக்கியமான (சிவப்பு): சமீபத்திய விற்பனை செயல்பாட்டுடன் சரக்கு இல்லாத பொருட்கள் - உடனடி மறு ஆர்டர் தேவை",
    highOrange: "உயர் (ஆரஞ்சு): குறைந்தபட்ச நிலைக்கு கீழே குறைந்த சரக்கு பொருட்கள் - கொள்முதல் கூடையில் சேர்க்கவும்",
    mediumYellow: "நடுத்தர (மஞ்சள்): காலாவதி நெருக்கமான பொருட்கள் - விளம்பரங்கள் அல்லது குறைப்புகளை கருத்தில் கொள்ளவும்",
    lowBlue: "குறைந்த (நீலம்): மெதுவாக நகரும் பொருட்கள் - கண்காணிக்கவும் மற்றும் அழிப்பு உத்திகளை திட்டமிடவும்",
    productHeaderAndBasicInformation: "பொருள் தலைப்பு மற்றும் அடிப்படை தகவல்",
    productDetailHeader: "பொருள் விவரம்",
    editProduct: "பொருளைத் திருத்து",
    currentStock: "தற்போதைய சரக்கு",
    min: "குறைந்தபட்சம்:",
    max: "அதிகபட்சம்:",
    sellingPrices: "விற்பனை விலைகள்",
    b2c: "B2C:",
    b2b: "B2B:",
    locationAndVendorInformation: "இருப்பிடம் மற்றும் விற்பனையாளர் தகவல்",
    warehouseLocation: "கிடங்கு இருப்பிடம்",
    primaryLocation: "முதன்மை இருப்பிடம்:",
    binCapacity: "பின் கொள்ளளவு:",
    currentUsage: "தற்போதைய பயன்பாடு:",
    changeLocation: "இருப்பிடத்தை மாற்று",
    vendorInformation: "விற்பனையாளர் தகவல்",
    primaryVendor: "முதன்மை விற்பனையாளர்:",
    lastOrder: "கடைசி ஆர்டர்:",
    leadTime: "முன்னோடி நேரம்:",
    createPurchaseOrder: "கொள்முதல் ஆர்டரை உருவாக்கு",
    salesAnalyticsAndMovementHistory: "விற்பனை பகுப்பாய்வு மற்றும் இயக்க வரலாறு",
    totalSales: "மொத்த விற்பனை",
    revenue: "வருவாய்",
    turnoverRate: "திருப்பு விகிதம்",
    recentStockMovements: "சமீபத்திய சரக்கு இயக்கங்கள்",
    stockAdded: "சரக்கு சேர்க்கப்பட்டது",
    poReceived: "{poNumber} பெறப்பட்டது",
    sale: "விற்பனை",
    orderNum: "ஆர்டர் #{orderNumber}",
    stockAdjustment: "சரக்கு சரிசெய்தல்",
    inventoryAuditCorrection: "சரக்கு தணிக்கை திருத்தம்",
    usingProductDetailData: "பொருள் விவர தரவைப் பயன்படுத்துதல்:",
    monitorStockMovementsDesc: "மறு ஆர்டர் நேரத்தை உகந்ததாக்க சரக்கு இயக்கங்கள் மற்றும் விற்பனை வடிவங்களை கண்காணிக்கவும்",
    useTurnoverRateDesc: "பொருட்களை விரைவாக/மெதுவாக நகரும் வகையாக வகைப்படுத்த திருப்பு விகிதத்தைப் பயன்படுத்தவும்",
    trackVendorPerformanceDesc: "சிறந்த திட்டமிடலுக்கு விற்பனையாளர் செயல்திறன் மற்றும் முன்னோடி நேரத்தை கண்காணிக்கவும்",
    analyzeLocationEfficiencyDesc: "இருப்பிட திறனை பகுப்பாய்வு செய்து மெதுவாக நகரும் பொருட்களை மாற்றுவதை கருத்தில் கொள்ளவும்",
    reviewPricePerformanceDesc: "விலை செயல்திறனை மதிப்பாய்வு செய்து தேவையானபடி விலை உத்திகளை சரிசெய்யவும்",
    // Product names translations
    cleanClearFaceWash: "க்ளீன் & க்ளியர் ஃபேஸ் வாஷ் - அக்வா, 50ml",
    dettolSpiceRoute: "டெட்டால் 300ml ஸ்பைஸ் ரூட்",
    sunflowerCookingOil: "சூரியகாந்தி சமையல் எண்ணெய் 1L",
    freshMilk: "புதிய பால் 1L பேக்கெட்",
    organicGreekYogurt: "கரிம கிரேக்க தயிர் 200g",
    healthyHarvest: "ஆரோக்கியமான அறுவடை",
    dettol: "டெட்டால்",
    goldenValley: "கோல்டன் வாலி",
    dairyFresh: "பால் புதியது",
    naturesBest: "இயற்கையின் சிறந்தது",
    globalSupplies: "குளோபல் சப்ளைஸ் லிமிடெட்",
  },
  te: {
    pageTitle: "ఇన్వెంటరీ నిర్వహణ మాన్యువల్",
    backToManual: "మాన్యువల్‌కి తిరిగి వెళ్ళు",
    description: "సరైన స్టాక్ స్థాయిలు మరియు సమర్థవంతమైన కార్యకలాపాలను నిర్వహించడానికి ఇన్వెంటరీ ట్రాకింగ్, స్టాక్ నిర్వహణ, వెండర్ సంబంధాలు మరియు పర్చేస్ ఆర్డర్ వర్క్‌ఫ్లోలను మాస్టర్ చేయండి.",
    step1Title: "ఇన్వెంటరీ డాష్‌బోర్డ్ అవలోకనం",
    step1Intro: "ఇన్వెంటరీ డాష్‌బోర్డ్ మీ స్టాక్ స్థాయిలు, అలర్ట్లు మరియు పనితీరు మెట్రిక్స్‌కు రియల్-టైమ్ విజిబిలిటీని అందిస్తుంది. ఇది అన్ని ఇన్వెంటరీ-సంబంధిత కార్యకలాపాలకు మీ కేంద్ర కమాండ్ సెంటర్.",
    step1Description: "సమగ్ర స్టాక్ మానిటరింగ్ టూల్స్, వెలాసిటీ అనాలిసిస్ మరియు ఆటోమేటెడ్ రీఆర్డర్ సూచనలను యాక్సెస్ చేయడానికి ఇన్వెంటరీ మేనేజ్‌మెంట్ డాష్‌బోర్డ్‌కి నావిగేట్ చేయండి.",
    step2Title: "స్టాక్ స్థాయి నిర్వహణ & అలర్ట్లు",
    step2Intro: "ఆటోమేటెడ్ అలర్ట్లు, రీఆర్డర్ సూచనలు మరియు అన్ని ఉత్పత్తి వర్గాలలో వివరణాత్మక ట్రాకింగ్‌తో స్టాక్ స్థాయిలను పర్యవేక్షించండి మరియు నిర్వహించండి.",
    step2Description: "స్టాక్ అలర్ట్స్ ట్యాబ్ తక్కువ స్టాక్ పరిస్థితులు, గడువు మీరిన ఉత్పత్తులు మరియు నెమ్మదిగా కదులుతున్న వస్తువులను అవి సమస్యలుగా మారే ముందు గుర్తించడం ద్వారా ఇన్వెంటరీని ప్రాక్టివ్‌గా నిర్వహించడానికి సహాయపడుతుంది.",
    step3Title: "వేర్‌హౌస్ లొకేషన్ నిర్వహణ",
    step3Intro: "వివరణాత్మక లొకేషన్ ట్రాకింగ్, బిన్ నిర్వహణ మరియు సమర్థవంతమైన ఉత్పత్తి ప్లేస్‌మెంట్ వ్యూహాలతో మీ భౌతిక ఇన్వెంటరీని నిర్వహించండి.",
    step3Description: "వేర్‌హౌస్ లొకేషన్ సిస్టమ్ మీ నిల్వ ప్రాంతాల విజువల్ మ్యాపింగ్‌ని అందిస్తుంది, సిబ్బంది ఉత్పత్తులను త్వరగా గుర్తించడానికి మరియు స్థల వినియోగాన్ని ఆప్టిమైజ్ చేయడానికి సహాయపడుతుంది.",
    step4Title: "పర్చేస్ బాస్కెట్ & వెండర్ రిటర్న్లు",
    step4Intro: "స్మార్ట్ పర్చేస్ బాస్కెట్లతో కొనుగోలు నిర్ణయాలను సులభతరం చేయండి మరియు ఆరోగ్యకరమైన సప్లయర్ సంబంధాలను నిర్వహించడానికి వెండర్ రిటర్న్లను సమర్థవంతంగా నిర్వహించండి.",
    step4Description: "పర్చేస్ బాస్కెట్ మీ అన్ని కొనుగోలు అవసరాలను సమ్మేళనం చేస్తుంది, వెండర్ రిటర్న్స్ సిస్టమ్ దెబ్బతిన్న లేదా గడువు మీరిన ఇన్వెంటరీ రిటర్న్లను సప్లయర్లకు నిర్వహిస్తుంది.",
    step5Title: "ఇన్వెంటరీ అనాలిటిక్స్ & పనితీరు",
    step5Intro: "ఉత్పత్తి వెలాసిటీ, ఋతుమాన ధోరణులను అర్థం చేసుకోవడానికి మరియు గరిష్ట లాభదాయకత కోసం మీ ఇన్వెంటరీ పెట్టుబడిని ఆప్టిమైజ్ చేయడానికి వివరణాత్మక అనాలిటిక్స్‌ని ఉపయోగించండి.",
    step5Description: "అధునాతన అనాలిటిక్స్ మీకు కదలిక వేగం ద్వారా ఉత్పత్తులను వర్గీకరించడానికి, ధోరణులను గుర్తించడానికి మరియు స్టాక్ స్థాయిలు మరియు కొనుగోలు గురించి డేటా-ఆధారిత నిర్ణయాలు తీసుకోవడానికి సహాయపడుతుంది.",
    nextStepsTitle: "ఇన్వెంటరీ నిర్వహణ పూర్తయింది!",
    nextStepsDescription: "మీ ఇన్వెంటరీ సిస్టమ్ కాన్ఫిగర్ చేయబడినందున, మీరు ఇప్పుడు ధర నిర్వహణకు వెళ్లి ధర వ్యూహాలను మరియు మార్జిన్ నిర్వహణను ఆప్టిమైజ్ చేయవచ్చు.",
    nextStepsButton: "ధర నిర్వహణకు కొనసాగండి",
    // Screenshot content translations
    stockStatusOverview: "స్టాక్ స్థితి అవలోకనం",
    fastMoving: "వేగంగా కదులుతున్న",
    slowMoving: "నెమ్మదిగా కదులుతున్న",
    nonMoving: "కదలని",
    outOfStock: "స్టాక్ లేదు",
    nearExpiry: "గడువు దగ్గర (≤30రో)",
    expired: "గడువు మీరింది",
    understandingEachStatus: "ప్రతి స్థితిని అర్థం చేసుకోవడం:",
    fastMovingDesc: "అధిక అమ్మకాల వేగం కలిగిన ఉత్పత్తులు - బాగా స్టాక్ చేయండి",
    slowMovingDesc: "సగటు కంటే నెమ్మదిగా కదులుతున్న ఉత్పత్తులు - జాగ్రత్తగా పర్యవేక్షించండి",
    nonMovingDesc: "ఇటీవలి అమ్మకాలు లేని ఉత్పత్తులు - ప్రమోషన్లను పరిగణించండి",
    outOfStockDesc: "వెంటనే రీఆర్డర్ అవసరం",
    nearExpiryDesc: "30 రోజుల్లో గడువు మీరే ఉత్పత్తులు - అమ్మకాలకు ప్రాధాన్యం",
    expiredDesc: "గడువు మీరిన ఉత్పత్తులు - తిరిగి ఇవ్వండి లేదా పారవేయండి",
    productInventory: "ఉత్పత్తి ఇన్వెంటరీ",
    headerSectionControls: "హెడర్ సెక్షన్ మరియు నియంత్రణలు",
    searchAndFilterControls: "శోధన మరియు ఫిల్టర్ నియంత్రణలు",
    searchProducts: "ఉత్పత్తులను శోధించండి...",
    allStockStatus: "అన్ని స్టాక్ స్థితులు",
    inStock: "స్టాక్‌లో ఉంది",
    lowStockAlert: "తక్కువ స్టాక్",
    outOfStockAlert: "స్టాక్ లేదు",
    allCategories: "అన్ని వర్గాలు",
    beverages: "పానీయాలు",
    snacks: "చిరుతిండి",
    personalCare: "వ్యక్తిగత సంరక్షణ",
    productTableColumnBreakdown: "ఉత్పత్తి పట్టిక - నిలువు వరుసల వివరణ",
    product: "ఉత్పత్తి",
    stockStatus: "స్టాక్ స్థితి",
    inventoryValue: "ఇన్వెంటరీ విలువ",
    poStatus: "PO స్థితి",
    activity: "కార్యకలాపం",
    status: "స్థితి",
    actions: "చర్యలు",
    units: "యూనిట్లు",
    cost: "ఖర్చు",
    price: "ధర",
    onOrder: "ఆర్డర్‌లో",
    noRecentSales: "ఇటీవలి అమ్మకాలు లేవు",
    soldDaysAgo: "7 రోజుల క్రితం అమ్మబడింది",
    active: "క్రియాశీల",
    basket: "బుట్ట",
    allocate: "కేటాయించు",
    details: "వివరాలు",
    sku: "SKU:",
    understandingEachColumn: "ప్రతి నిలువు వరుసను అర్థం చేసుకోవడం:",
    productColumnDesc: "గుర్తింపు కోసం ఉత్పత్తి చిత్రం, పేరు, బ్రాండ్ మరియు SKU ని చూపిస్తుంది",
    stockStatusColumnDesc: "వేగ బ్యాడ్జ్‌తో ప్రస్తుత స్టాక్ పరిమాణం (వేగవంతం/నెమ్మది/కదలని/స్టాక్ లేదు)",
    inventoryValueColumnDesc: "ప్రస్తుత స్టాక్ విలువ + యూనిట్‌కు ఖర్చు మరియు అమ్మక ధర",
    poStatusColumnDesc: "పెండింగ్ పర్చేస్ ఆర్డర్ల నుండి ఆర్డర్‌లో ఉన్న పరిమాణాన్ని చూపిస్తుంది",
    activityColumnDesc: "ఇటీవలి అమ్మకాల కార్యకలాపం మరియు షెల్ఫ్ లైఫ్ సమాచారం",
    statusColumnDesc: "ఉత్పత్తి అమ్మకాలకు క్రియాశీలంగా ఉందా లేదా నిష్క్రియంగా ఉందా",
    actionsColumnDesc: "బుట్ట, ఆటో-అలోకేట్ మరియు వివరాల కోసం త్వరిత చర్య బటన్లు",
    actionButtonsExplained: "చర్య బటన్ల వివరణ",
    basketDesc: "తదుపరి పర్చేస్ ఆర్డర్ సృష్టించడానికి ఈ ఉత్పత్తిని మీ కొనుగోలు బుట్టలో జోడించండి",
    allocateDesc: "ఈ ఉత్పత్తికి సరైన వేర్‌హౌస్ స్థానాన్ని ఆటోమేటిక్‌గా కనుగొని కేటాయించండి",
    detailsDesc: "పూర్తి ఉత్పత్తి సమాచారాన్ని చూడండి, వివరాలను సవరించండి మరియు అమ్మకాల చరిత్రను చూడండి",
    browseCategories: "వర్గాలను బ్రౌజ్ చేయండి",
    categories: "వర్గాలు",
    brandsIn: "",
    productsText: "ఉత్పత్తులు",
    productsCount: "{count} ఉత్పత్తులు",
    brandsCount: "{count} బ్రాండ్లు",
    stock: "స్టాక్",
    value: "విలువ",
    addStock: "స్టాక్ జోడించండి",
    browseCategoriesWorkflow: "వర్గాలను బ్రౌజ్ చేయడం వర్క్‌ఫ్లో:",
    selectCategory: "ఎడమ నిలువు వరుస నుండి వర్గాన్ని ఎంచుకోండి (ఎంచుకున్నప్పుడు నీలం రంగులో హైలైట్ చేయబడుతుంది)",
    chooseBrand: "మధ్య నిలువు వరుస నుండి బ్రాండ్‌ని ఎంచుకోండి (ఎంచుకున్నప్పుడు ఆకుపచ్చ రంగులో హైలైట్ చేయబడుతుంది)",
    browseManageProducts: "కుడి నిలువు వరుసలో శోధన మరియు చర్యలతో ఉత్పత్తులను బ్రౌజ్ చేయండి మరియు నిర్వహించండి",
    manualInventoryAdditions: "మాన్యువల్ ఇన్వెంటరీ జోడింపుల కోసం \"స్టాక్ జోడించండి\" లేదా కొనుగోలు ప్లానింగ్ కోసం \"బుట్ట\" ఉపయోగించండి",
    alertCategoriesAndPriorityLevels: "అలర్ట్ వర్గాలు మరియు ప్రాధాన్య స్థాయిలు",
    stockAlerts: "స్టాక్ అలర్ట్లు",
    allAlertTypes: "అన్ని అలర్ట్ రకాలు",
    critical: "క్లిష్టమైన",
    high: "అధిక",
    medium: "మధ్యస్థ",
    low: "తక్కువ",
    nearExpiryAlert: "గడువు దగ్గర",
    expiredAlert: "గడువు మీరింది",
    slowMovingAlert: "నెమ్మదిగా కదులుతున్న",
    allPriorities: "అన్ని ప్రాధాన్యతలు",
    criticalOutOfStock: "క్లిష్టమైన - స్టాక్ లేదు",
    lastSold: "చివరిసారి అమ్మబడింది:",
    expectedDemand: "అంచనా డిమాండ్:",
    reorderNow: "ఇప్పుడే రీఆర్డర్ చేయండి",
    highLowStock: "అధిక - తక్కువ స్టాక్ ({count} యూనిట్లు)",
    minLevel: "కనిష్ట స్థాయి:",
    avgDailySales: "సగటు రోజువారీ అమ్మకాలు:",
    addToBasket: "బుట్టలో జోడించండి",
    mediumNearExpiry: "మధ్యస్థ - గడువు దగ్గర ({count} రోజులు)",
    unitsInStock: "{count} యూనిట్లు స్టాక్‌లో",
    considerPromotionalPricing: "ప్రమోషనల్ ధరలను పరిగణించండి",
    promote: "ప్రోమోట్ చేయండి",
    alertPrioritySystem: "అలర్ట్ ప్రాధాన్య వ్యవస్థ:",
    criticalRed: "క్లిష్టమైన (ఎరుపు): ఇటీవలి అమ్మకాల కార్యకలాపంతో స్టాక్ లేని వస్తువులు - వెంటనే రీఆర్డర్ అవసరం",
    highOrange: "అధిక (నారింజ): కనిష్ట స్థాయికి దిగువన తక్కువ స్టాక్ వస్తువులు - కొనుగోలు బుట్టలో జోడించండి",
    mediumYellow: "మధ్యస్థ (పసుపు): గడువు దగ్గర ఉన్న వస్తువులు - ప్రమోషన్లు లేదా మార్క్‌డౌన్లను పరిగణించండి",
    lowBlue: "తక్కువ (నీలం): నెమ్మదిగా కదులుతున్న వస్తువులు - పర్యవేక్షించండి మరియు క్లియరెన్స్ వ్యూహాలను ప్లాన్ చేయండి",
    productHeaderAndBasicInformation: "ఉత్పత్తి హెడర్ మరియు ప్రాథమిక సమాచారం",
    productDetailHeader: "ఉత్పత్తి వివరం",
    editProduct: "ఉత్పత్తిని సవరించండి",
    currentStock: "ప్రస్తుత స్టాక్",
    min: "కనిష్ట:",
    max: "గరిష్ట:",
    sellingPrices: "అమ్మక ధరలు",
    b2c: "B2C:",
    b2b: "B2B:",
    locationAndVendorInformation: "స్థానం మరియు వెండర్ సమాచారం",
    warehouseLocation: "వేర్‌హౌస్ స్థానం",
    primaryLocation: "ప్రాథమిక స్థానం:",
    binCapacity: "బిన్ సామర్థ్యం:",
    currentUsage: "ప్రస్తుత వినియోగం:",
    changeLocation: "స్థానాన్ని మార్చండి",
    vendorInformation: "వెండర్ సమాచారం",
    primaryVendor: "ప్రాథమిక వెండర్:",
    lastOrder: "చివరి ఆర్డర్:",
    leadTime: "లీడ్ సమయం:",
    createPurchaseOrder: "పర్చేస్ ఆర్డర్ సృష్టించండి",
    salesAnalyticsAndMovementHistory: "అమ్మకాల విశ్లేషణ మరియు కదలిక చరిత్ర",
    totalSales: "మొత్తం అమ్మకాలు",
    revenue: "రెవెన్యూ",
    turnoverRate: "టర్నోవర్ రేట్",
    recentStockMovements: "ఇటీవలి స్టాక్ కదలికలు",
    stockAdded: "స్టాక్ జోడించబడింది",
    poReceived: "{poNumber} స్వీకరించబడింది",
    sale: "అమ్మకం",
    orderNum: "ఆర్డర్ #{orderNumber}",
    stockAdjustment: "స్టాక్ సర్దుబాటు",
    inventoryAuditCorrection: "ఇన్వెంటరీ ఆడిట్ సర్దుబాటు",
    usingProductDetailData: "ఉత్పత్తి వివర డేటాను ఉపయోగించడం:",
    monitorStockMovementsDesc: "రీఆర్డర్ సమయాన్ని ఆప్టిమైజ్ చేయడానికి స్టాక్ కదలికలు మరియు అమ్మకాల నమూనాలను పర్యవేక్షించండి",
    useTurnoverRateDesc: "ఉత్పత్తులను వేగవంతంగా/నెమ్మదిగా కదులుతున్నవిగా వర్గీకరించడానికి టర్నోవర్ రేట్‌ని ఉపయోగించండి",
    trackVendorPerformanceDesc: "మెరుగైన ప్లానింగ్ కోసం వెండర్ పనితీరు మరియు లీడ్ సమయాన్ని ట్రాక్ చేయండి",
    analyzeLocationEfficiencyDesc: "స్థాన సమర్థతను విశ్లేషించండి మరియు నెమ్మదిగా కదులుతున్న వస్తువులను తరలించడాన్ని పరిగణించండి",
    reviewPricePerformanceDesc: "ధర పనితీరును సమీక్షించండి మరియు అవసరమైనప్పుడు ధర వ్యూహాలను సర్దుబాటు చేయండి",
    // Product names translations
    cleanClearFaceWash: "క్లీన్ & క్లియర్ ఫేస్ వాష్ - అక్వా, 50ml",
    dettolSpiceRoute: "డెట్టాల్ 300ml స్పైస్ రూట్",
    sunflowerCookingOil: "సూర్యకాంతి వంటకాల నూనె 1L",
    freshMilk: "తాజా పాలు 1L ప్యాకెట్",
    organicGreekYogurt: "జీవ సంబంధ గ్రీక్ పెరుగు 200g",
    healthyHarvest: "ఆరోగ్యకరమైన పంట",
    dettol: "డెట్టాల్",
    goldenValley: "గోల్డెన్ వాలీ",
    dairyFresh: "పాల పెరుగు",
    naturesBest: "ప్రకృతి యొక్క ఉత్తమమైనది",
    globalSupplies: "గ్లోబల్ సప్లైస్ లిమిటెడ్",
  },
  hi: {
    pageTitle: "इन्वेंटरी प्रबंधन मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "इष्टतम स्टॉक स्तरों और कुशल संचालन को बनाए रखने के लिए इन्वेंटरी ट्रैकिंग, स्टॉक प्रबंधन, वेंडर संबंधों और खरीद आदेश वर्कफ्लो को मास्टर करें।",
    step1Title: "इन्वेंटरी डैशबोर्ड अवलोकन",
    step1Intro: "इन्वेंटरी डैशबोर्ड आपके स्टॉक स्तरों, अलर्ट और प्रदर्शन मेट्रिक्स के लिए रीयल-टाइम विजिबिलिटी प्रदान करता है। यह सभी इन्वेंटरी-संबंधित गतिविधियों के लिए आपका केंद्रीय कमांड सेंटर है।",
    step1Description: "व्यापक स्टॉक मॉनिटरिंग टूल्स, वेलोसिटी विश्लेषण और स्वचालित रीऑर्डर सुझावों तक पहुंचने के लिए इन्वेंटरी प्रबंधन डैशबोर्ड पर नेविगेट करें।",
    step2Title: "स्टॉक स्तर प्रबंधन और अलर्ट",
    step2Intro: "स्वचालित अलर्ट, रीऑर्डर सुझाव और सभी उत्पाद श्रेणियों में विस्तृत ट्रैकिंग के साथ स्टॉक स्तरों की निगरानी और प्रबंधन करें।",
    step2Description: "स्टॉक अलर्ट्स टैब कम स्टॉक स्थितियों, एक्सपायर्ड उत्पादों और धीमी गति से चलने वाले आइटमों की पहचान करके उन्हें समस्याओं में बदलने से पहले इन्वेंटरी को प्रोएक्टिव रूप से प्रबंधित करने में मदद करता है।",
    step3Title: "वेयरहाउस स्थान प्रबंधन",
    step3Intro: "विस्तृत स्थान ट्रैकिंग, बिन प्रबंधन और कुशल उत्पाद प्लेसमेंट रणनीतियों के साथ अपने भौतिक इन्वेंटरी को व्यवस्थित करें।",
    step3Description: "वेयरहाउस स्थान प्रणाली आपके भंडारण क्षेत्रों का विजुअल मैपिंग प्रदान करती है, जो कर्मचारियों को उत्पादों को तुरंत खोजने और स्थान उपयोग को अनुकूलित करने में मदद करती है।",
    step4Title: "खरीद बास्केट और वेंडर रिटर्न",
    step4Intro: "स्मार्ट खरीद बास्केट के साथ खरीद निर्णयों को सुविधाजनक बनाएं और स्वस्थ आपूर्तिकर्ता संबंधों को बनाए रखने के लिए वेंडर रिटर्न का कुशलतापूर्वक प्रबंधन करें।",
    step4Description: "खरीद बास्केट आपकी सभी खरीद आवश्यकताओं को एकत्रित करता है जबकि वेंडर रिटर्न सिस्टम क्षतिग्रस्त या एक्सपायर्ड इन्वेंटरी रिटर्न को आपूर्तिकर्ताओं को संभालता है।",
    step5Title: "इन्वेंटरी विश्लेषण और प्रदर्शन",
    step5Intro: "उत्पाद वेग, मौसमी प्रवृत्तियों को समझने और अधिकतम लाभप्रदता के लिए अपने इन्वेंटरी निवेश को अनुकूलित करने के लिए विस्तृत विश्लेषण का लाभ उठाएं।",
    step5Description: "उन्नत विश्लेषण आपको गति वेग द्वारा उत्पादों को वर्गीकृत करने, प्रवृत्तियों की पहचान करने और स्टॉक स्तरों और खरीद के बारे में डेटा-संचालित निर्णय लेने में मदद करता है।",
    nextStepsTitle: "इन्वेंटरी प्रबंधन पूरा हुआ!",
    nextStepsDescription: "आपके इन्वेंटरी सिस्टम के कॉन्फ़िगर होने के साथ, अब आप मूल्य प्रबंधन पर जा सकते हैं ताकि मूल्य रणनीतियों और मार्जिन प्रबंधन को अनुकूलित कर सकें।",
    nextStepsButton: "मूल्य प्रबंधन पर जारी रखें",
    // Screenshot content translations
    stockStatusOverview: "स्टॉक स्थिति अवलोकन",
    fastMoving: "तेजी से चलने वाला",
    slowMoving: "धीमी गति से चलने वाला",
    nonMoving: "गतिहीन",
    outOfStock: "स्टॉक में नहीं",
    nearExpiry: "समाप्ति के निकट (≤30दि)",
    expired: "समाप्त",
    understandingEachStatus: "प्रत्येक स्थिति को समझना:",
    fastMovingDesc: "उच्च बिक्री वेग वाले उत्पाद - अच्छी तरह से स्टॉक रखें",
    slowMovingDesc: "औसत से धीमी गति से चलने वाले उत्पाद - बारीकी से निगरानी करें",
    nonMovingDesc: "हाल के बिक्री के बिना उत्पाद - प्रचार पर विचार करें",
    outOfStockDesc: "तत्काल रीऑर्डर आवश्यक",
    nearExpiryDesc: "30 दिनों में समाप्त होने वाले उत्पाद - बिक्री को प्राथमिकता दें",
    expiredDesc: "समाप्त उत्पाद - वापस करें या निपटाएं",
    productInventory: "उत्पाद इन्वेंटरी",
    headerSectionControls: "हेडर सेक्शन और नियंत्रण",
    searchAndFilterControls: "खोज और फ़िल्टर नियंत्रण",
    searchProducts: "उत्पादों को खोजें...",
    allStockStatus: "सभी स्टॉक स्थिति",
    inStock: "स्टॉक में",
    lowStockAlert: "कम स्टॉक",
    outOfStockAlert: "स्टॉक में नहीं",
    allCategories: "सभी श्रेणियां",
    beverages: "पेय पदार्थ",
    snacks: "नाश्ता",
    personalCare: "व्यक्तिगत देखभाल",
    productTableColumnBreakdown: "उत्पाद तालिका - कॉलम दर कॉलम विवरण",
    product: "उत्पाद",
    stockStatus: "स्टॉक स्थिति",
    inventoryValue: "इन्वेंटरी मूल्य",
    poStatus: "PO स्थिति",
    activity: "गतिविधि",
    status: "स्थिति",
    actions: "कार्य",
    units: "इकाइयां",
    cost: "लागत",
    price: "मूल्य",
    onOrder: "ऑर्डर में",
    noRecentSales: "हाल की बिक्री नहीं",
    soldDaysAgo: "7 दिन पहले बिका",
    active: "सक्रिय",
    basket: "बास्केट",
    allocate: "आवंटित करें",
    details: "विवरण",
    sku: "SKU:",
    understandingEachColumn: "प्रत्येक कॉलम को समझना:",
    productColumnDesc: "पहचान के लिए उत्पाद छवि, नाम, ब्रांड और SKU दिखाता है",
    stockStatusColumnDesc: "वेग बैज के साथ वर्तमान स्टॉक मात्रा (तेज/धीमा/गतिहीन/स्टॉक में नहीं)",
    inventoryValueColumnDesc: "वर्तमान स्टॉक मूल्य + प्रति इकाई लागत और बिक्री मूल्य",
    poStatusColumnDesc: "लंबित खरीद आदेशों से ऑर्डर में मात्रा दिखाता है",
    activityColumnDesc: "हाल की बिक्री गतिविधि और शेल्फ लाइफ जानकारी",
    statusColumnDesc: "क्या उत्पाद बिक्री के लिए सक्रिय है या निष्क्रिय है",
    actionsColumnDesc: "बास्केट, ऑटो-एलोकेट और विवरण के लिए त्वरित कार्य बटन",
    actionButtonsExplained: "कार्य बटन समझाया गया",
    basketDesc: "बाद में खरीद आदेश बनाने के लिए इस उत्पाद को अपने खरीद बास्केट में जोड़ें",
    allocateDesc: "इस उत्पाद के लिए इष्टतम वेयरहाउस स्थान को स्वचालित रूप से खोजें और आवंटित करें",
    detailsDesc: "पूर्ण उत्पाद जानकारी देखें, विवरण संपादित करें और बिक्री इतिहास देखें",
    browseCategories: "श्रेणियां ब्राउज़ करें",
    categories: "श्रेणियां",
    brandsIn: "",
    productsText: "उत्पाद",
    productsCount: "{count} उत्पाद",
    brandsCount: "{count} ब्रांड",
    stock: "स्टॉक",
    value: "मूल्य",
    addStock: "स्टॉक जोड़ें",
    browseCategoriesWorkflow: "श्रेणियां ब्राउज़ करने का वर्कफ्लो:",
    selectCategory: "बाएं कॉलम से श्रेणी चुनें (चुने जाने पर नीले रंग में हाइलाइट)",
    chooseBrand: "मध्य कॉलम से ब्रांड चुनें (चुने जाने पर हरे रंग में हाइलाइट)",
    browseManageProducts: "दाएं कॉलम में खोज और कार्यों के साथ उत्पादों को ब्राउज़ और प्रबंधित करें",
    manualInventoryAdditions: "मैनुअल इन्वेंटरी जोड़ने के लिए \"स्टॉक जोड़ें\" या खरीद योजना के लिए \"बास्केट\" का उपयोग करें",
    alertCategoriesAndPriorityLevels: "अलर्ट श्रेणियां और प्राथमिकता स्तर",
    stockAlerts: "स्टॉक अलर्ट",
    allAlertTypes: "सभी अलर्ट प्रकार",
    critical: "महत्वपूर्ण",
    high: "उच्च",
    medium: "मध्यम",
    low: "कम",
    nearExpiryAlert: "समाप्ति के निकट",
    expiredAlert: "समाप्त",
    slowMovingAlert: "धीमी गति से चलने वाला",
    allPriorities: "सभी प्राथमिकताएं",
    criticalOutOfStock: "महत्वपूर्ण - स्टॉक में नहीं",
    lastSold: "अंतिम बिक्री:",
    expectedDemand: "अपेक्षित मांग:",
    reorderNow: "अभी रीऑर्डर करें",
    highLowStock: "उच्च - कम स्टॉक ({count} इकाइयां)",
    minLevel: "न्यूनतम स्तर:",
    avgDailySales: "औसत दैनिक बिक्री:",
    addToBasket: "बास्केट में जोड़ें",
    mediumNearExpiry: "मध्यम - समाप्ति के निकट ({count} दिन)",
    unitsInStock: "{count} इकाइयां स्टॉक में",
    considerPromotionalPricing: "प्रचार मूल्य पर विचार करें",
    promote: "प्रचार करें",
    alertPrioritySystem: "अलर्ट प्राथमिकता प्रणाली:",
    criticalRed: "महत्वपूर्ण (लाल): हाल की बिक्री गतिविधि के साथ स्टॉक में नहीं - तत्काल रीऑर्डर आवश्यक",
    highOrange: "उच्च (नारंगी): न्यूनतम स्तर से नीचे कम स्टॉक आइटम - खरीद बास्केट में जोड़ें",
    mediumYellow: "मध्यम (पीला): समाप्ति के निकट आइटम - प्रचार या मार्कडाउन पर विचार करें",
    lowBlue: "कम (नीला): धीमी गति से चलने वाले आइटम - निगरानी करें और क्लीयरेंस रणनीतियों की योजना बनाएं",
    productHeaderAndBasicInformation: "उत्पाद हेडर और बुनियादी जानकारी",
    productDetailHeader: "उत्पाद विवरण",
    editProduct: "उत्पाद संपादित करें",
    currentStock: "वर्तमान स्टॉक",
    min: "न्यूनतम:",
    max: "अधिकतम:",
    sellingPrices: "बिक्री मूल्य",
    b2c: "B2C:",
    b2b: "B2B:",
    locationAndVendorInformation: "स्थान और वेंडर जानकारी",
    warehouseLocation: "वेयरहाउस स्थान",
    primaryLocation: "प्राथमिक स्थान:",
    binCapacity: "बिन क्षमता:",
    currentUsage: "वर्तमान उपयोग:",
    changeLocation: "स्थान बदलें",
    vendorInformation: "वेंडर जानकारी",
    primaryVendor: "प्राथमिक वेंडर:",
    lastOrder: "अंतिम आदेश:",
    leadTime: "लीड टाइम:",
    createPurchaseOrder: "खरीद आदेश बनाएं",
    salesAnalyticsAndMovementHistory: "बिक्री विश्लेषण और आंदोलन इतिहास",
    totalSales: "कुल बिक्री",
    revenue: "राजस्व",
    turnoverRate: "टर्नओवर दर",
    recentStockMovements: "हाल के स्टॉक आंदोलन",
    stockAdded: "स्टॉक जोड़ा गया",
    poReceived: "{poNumber} प्राप्त हुआ",
    sale: "बिक्री",
    orderNum: "ऑर्डर #{orderNumber}",
    stockAdjustment: "स्टॉक समायोजन",
    inventoryAuditCorrection: "इन्वेंटरी ऑडिट सुधार",
    usingProductDetailData: "उत्पाद विवरण डेटा का उपयोग:",
    monitorStockMovementsDesc: "रीऑर्डर समय को अनुकूलित करने के लिए स्टॉक आंदोलनों और बिक्री पैटर्न की निगरानी करें",
    useTurnoverRateDesc: "उत्पादों को तेज/धीमी गति से चलने वाले के रूप में वर्गीकृत करने के लिए टर्नओवर दर का उपयोग करें",
    trackVendorPerformanceDesc: "बेहतर योजना के लिए वेंडर प्रदर्शन और लीड टाइम को ट्रैक करें",
    analyzeLocationEfficiencyDesc: "स्थान दक्षता का विश्लेषण करें और धीमी गति से चलने वाले आइटमों को स्थानांतरित करने पर विचार करें",
    reviewPricePerformanceDesc: "मूल्य प्रदर्शन की समीक्षा करें और आवश्यकतानुसार मूल्य रणनीतियों को समायोजित करें",
    // Product names translations
    cleanClearFaceWash: "क्लीन & क्लियर फेस वॉश - एक्वा, 50ml",
    dettolSpiceRoute: "डेटॉल 300ml स्पाइस रूट",
    sunflowerCookingOil: "सूरजमुखी खाना पकाने का तेल 1L",
    freshMilk: "ताजा दूध 1L पैकेट",
    organicGreekYogurt: "ऑर्गेनिक ग्रीक दही 200g",
    healthyHarvest: "स्वस्थ फसल",
    dettol: "डेटॉल",
    goldenValley: "गोल्डन वैली",
    dairyFresh: "डेयरी फ्रेश",
    naturesBest: "नेचर बेस्ट",
    globalSupplies: "ग्लोबल सप्लाईज लिमिटेड",
  },
  ml: {
    pageTitle: "ഇൻവെന്ററി മാനേജ്മെന്റ് മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് തിരികെ പോകുക",
    description: "ഒപ്റ്റിമൽ സ്റ്റോക്ക് ലെവലുകളും കാര്യക്ഷമമായ പ്രവർത്തനങ്ങളും നിലനിർത്താൻ ഇൻവെന്ററി ട്രാക്കിംഗ്, സ്റ്റോക്ക് മാനേജ്മെന്റ്, വെൻഡർ ബന്ധങ്ങൾ, പർച്ചേസ് ഓർഡർ വർക്ക്‌ഫ്ലോകൾ എന്നിവ മാസ്റ്റർ ചെയ്യുക.",
    step1Title: "ഇൻവെന്ററി ഡാഷ്‌ബോർഡ് അവലോകനം",
    step1Intro: "ഇൻവെന്ററി ഡാഷ്‌ബോർഡ് നിങ്ങളുടെ സ്റ്റോക്ക് ലെവലുകൾ, അലേർട്ടുകൾ, പ്രകടന മെട്രിക്സുകൾ എന്നിവയ്ക്ക് റിയൽ-ടൈം വിജിബിലിറ്റി നൽകുന്നു. ഇത് എല്ലാ ഇൻവെന്ററി-ബന്ധപ്പെട്ട പ്രവർത്തനങ്ങൾക്കും നിങ്ങളുടെ കേന്ദ്ര കമാൻഡ് സെന്റർ ആണ്.",
    step1Description: "വ്യാപകമായ സ്റ്റോക്ക് മോണിറ്ററിംഗ് ടൂളുകൾ, വെലോസിറ്റി അനാലിസിസ്, ഓട്ടോമേറ്റഡ് റീഓർഡർ നിർദ്ദേശങ്ങൾ എന്നിവയിലേക്ക് ആക്സസ് ലഭിക്കാൻ ഇൻവെന്ററി മാനേജ്മെന്റ് ഡാഷ്‌ബോർഡിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക.",
    step2Title: "സ്റ്റോക്ക് ലെവൽ മാനേജ്മെന്റ് & അലേർട്ടുകൾ",
    step2Intro: "ഓട്ടോമേറ്റഡ് അലേർട്ടുകൾ, റീഓർഡർ നിർദ്ദേശങ്ങൾ, എല്ലാ ഉത്പന്ന വിഭാഗങ്ങളിലും വിശദമായ ട്രാക്കിംഗ് എന്നിവയോടെ സ്റ്റോക്ക് ലെവലുകൾ നിരീക്ഷിക്കുകയും മാനേജ് ചെയ്യുകയും ചെയ്യുക.",
    step2Description: "സ്റ്റോക്ക് അലേർട്ട്സ് ടാബ് കുറഞ്ഞ സ്റ്റോക്ക് സാഹചര്യങ്ങൾ, കാലഹരണപ്പെട്ട ഉത്പന്നങ്ങൾ, മന്ദഗതിയിൽ നീങ്ങുന്ന ഇനങ്ങൾ എന്നിവ അവ പ്രശ്നങ്ങളായി മാറുന്നതിന് മുമ്പ് തിരിച്ചറിയുന്നതിലൂടെ ഇൻവെന്ററി പ്രോആക്റ്റിവായി മാനേജ് ചെയ്യാൻ സഹായിക്കുന്നു.",
    step3Title: "വെയർ‌ഹൗസ് ലൊക്കേഷൻ മാനേജ്മെന്റ്",
    step3Intro: "വിശദമായ ലൊക്കേഷൻ ട്രാക്കിംഗ്, ബിൻ മാനേജ്മെന്റ്, കാര്യക്ഷമമായ ഉത്പന്ന സ്ഥാപന തന്ത്രങ്ങൾ എന്നിവയോടെ നിങ്ങളുടെ ഭൗതിക ഇൻവെന്ററി ഓർഗനൈസ് ചെയ്യുക.",
    step3Description: "വെയർ‌ഹൗസ് ലൊക്കേഷൻ സിസ്റ്റം നിങ്ങളുടെ സംഭരണ മേഖലകളുടെ വിഷ്വൽ മാപ്പിംഗ് നൽകുന്നു, സ്റ്റാഫിനെ ഉത്പന്നങ്ങൾ വേഗത്തിൽ കണ്ടെത്താനും സ്ഥല ഉപയോഗം ഒപ്റ്റിമൈസ് ചെയ്യാനും സഹായിക്കുന്നു.",
    step4Title: "പർച്ചേസ് ബാസ്കറ്റ് & വെൻഡർ റിടേൺസ്",
    step4Intro: "സ്മാർട്ട് പർച്ചേസ് ബാസ്കറ്റുകളോടെ വാങ്ങൽ തീരുമാനങ്ങൾ എളുപ്പമാക്കുക, ആരോഗ്യകരമായ സപ്ലയർ ബന്ധങ്ങൾ നിലനിർത്താൻ വെൻഡർ റിടേൺസ് കാര്യക്ഷമമായി മാനേജ് ചെയ്യുക.",
    step4Description: "പർച്ചേസ് ബാസ്കറ്റ് നിങ്ങളുടെ എല്ലാ വാങ്ങൽ ആവശ്യങ്ങളും ഒത്തുചേർക്കുന്നു, വെൻഡർ റിടേൺസ് സിസ്റ്റം കേടായ അല്ലെങ്കിൽ കാലഹരണപ്പെട്ട ഇൻവെന്ററി റിടേൺസ് സപ്ലയർമാർക്ക് കൈകാര്യം ചെയ്യുന്നു.",
    step5Title: "ഇൻവെന്ററി അനാലിറ്റിക്സ് & പ്രകടനം",
    step5Intro: "ഉത്പന്ന വേഗത, ഋതുമാന പ്രവണതകൾ മനസ്സിലാക്കാൻ, പരമാവധി ലാഭക്ഷമതയ്ക്കായി നിങ്ങളുടെ ഇൻവെന്ററി നിക്ഷേപം ഒപ്റ്റിമൈസ് ചെയ്യാൻ വിശദമായ അനാലിറ്റിക്സ് ഉപയോഗിക്കുക.",
    step5Description: "വിപുലമായ അനാലിറ്റിക്സ് നിങ്ങളെ ചലന വേഗതയനുസരിച്ച് ഉത്പന്നങ്ങൾ വർഗ്ഗീകരിക്കാനും, പ്രവണതകൾ തിരിച്ചറിയാനും, സ്റ്റോക്ക് ലെവലുകളും വാങ്ങലും സംബന്ധിച്ച ഡാറ്റ-ആധാരിത തീരുമാനങ്ങൾ എടുക്കാനും സഹായിക്കുന്നു.",
    nextStepsTitle: "ഇൻവെന്ററി മാനേജ്മെന്റ് പൂർത്തിയായി!",
    nextStepsDescription: "നിങ്ങളുടെ ഇൻവെന്ററി സിസ്റ്റം കോൺഫിഗർ ചെയ്തതിനാൽ, ഇപ്പോൾ നിങ്ങൾക്ക് വില മാനേജ്മെന്റിലേക്ക് പോകാം, വില തന്ത്രങ്ങളും മാർജിൻ മാനേജ്മെന്റും ഒപ്റ്റിമൈസ് ചെയ്യാം.",
    nextStepsButton: "വില മാനേജ്മെന്റിലേക്ക് തുടരുക",
    // Screenshot content translations
    stockStatusOverview: "സ്റ്റോക്ക് നില അവലോകനം",
    fastMoving: "വേഗത്തിൽ നീങ്ങുന്ന",
    slowMoving: "മന്ദഗതിയിൽ നീങ്ങുന്ന",
    nonMoving: "നീങ്ങാത്ത",
    outOfStock: "സ്റ്റോക്കില്ല",
    nearExpiry: "കാലഹരണത്തിന് അടുത്ത് (≤30ദി)",
    expired: "കാലഹരണപ്പെട്ട",
    understandingEachStatus: "ഓരോ നിലയും മനസ്സിലാക്കുക:",
    fastMovingDesc: "ഉയർന്ന വിൽപ്പന വേഗതയുള്ള ഉത്പന്നങ്ങൾ - നന്നായി സ്റ്റോക്ക് ചെയ്യുക",
    slowMovingDesc: "ശരാശരിയേക്കാൾ മന്ദഗതിയിൽ നീങ്ങുന്ന ഉത്പന്നങ്ങൾ - ശ്രദ്ധാപൂർവ്വം നിരീക്ഷിക്കുക",
    nonMovingDesc: "സമീപകാല വിൽപ്പനയില്ലാത്ത ഉത്പന്നങ്ങൾ - പ്രചാരങ്ങൾ പരിഗണിക്കുക",
    outOfStockDesc: "ഉടനടി റീഓർഡർ ആവശ്യം",
    nearExpiryDesc: "30 ദിവസത്തിനുള്ളിൽ കാലഹരണപ്പെടുന്ന ഉത്പന്നങ്ങൾ - വിൽപ്പനയ്ക്ക് മുൻഗണന",
    expiredDesc: "കാലഹരണപ്പെട്ട ഉത്പന്നങ്ങൾ - തിരികെ കൊടുക്കുക അല്ലെങ്കിൽ ഉപേക്ഷിക്കുക",
    productInventory: "ഉത്പന്ന ഇൻവെന്ററി",
    headerSectionControls: "ഹെഡർ സെക്ഷൻ & നിയന്ത്രണങ്ങൾ",
    searchAndFilterControls: "തിരയൽ & ഫിൽറ്റർ നിയന്ത്രണങ്ങൾ",
    searchProducts: "ഉത്പന്നങ്ങൾ തിരയുക...",
    allStockStatus: "എല്ലാ സ്റ്റോക്ക് നിലകളും",
    inStock: "സ്റ്റോക്കിലുണ്ട്",
    lowStockAlert: "കുറഞ്ഞ സ്റ്റോക്ക്",
    outOfStockAlert: "സ്റ്റോക്കില്ല",
    allCategories: "എല്ലാ വിഭാഗങ്ങളും",
    beverages: "പാനീയങ്ങൾ",
    snacks: "ലഘുഭക്ഷണങ്ങൾ",
    personalCare: "വ്യക്തിഗത സംരക്ഷണം",
    productTableColumnBreakdown: "ഉത്പന്ന പട്ടിക - കോളം ഓരോന്നായി വിശദീകരണം",
    product: "ഉത്പന്നം",
    stockStatus: "സ്റ്റോക്ക് നില",
    inventoryValue: "ഇൻവെന്ററി മൂല്യം",
    poStatus: "PO നില",
    activity: "പ്രവർത്തനം",
    status: "നില",
    actions: "പ്രവർത്തനങ്ങൾ",
    units: "യൂണിറ്റുകൾ",
    cost: "ചെലവ്",
    price: "വില",
    onOrder: "ഓർഡറിൽ",
    noRecentSales: "സമീപകാല വിൽപ്പനയില്ല",
    soldDaysAgo: "7 ദിവസം മുമ്പ് വിറ്റു",
    active: "സജീവം",
    basket: "ബാസ്കറ്റ്",
    allocate: "നിയോഗിക്കുക",
    details: "വിവരങ്ങൾ",
    sku: "SKU:",
    understandingEachColumn: "ഓരോ കോളവും മനസ്സിലാക്കുക:",
    productColumnDesc: "തിരിച്ചറിയലിനായി ഉത്പന്ന ചിത്രം, പേര്, ബ്രാൻഡ്, SKU എന്നിവ കാണിക്കുന്നു",
    stockStatusColumnDesc: "വേഗത ബാഡ്ജിനൊപ്പം നിലവിലെ സ്റ്റോക്ക് അളവ് (വേഗം/മന്ദം/നീങ്ങാത്ത/സ്റ്റോക്കില്ല)",
    inventoryValueColumnDesc: "നിലവിലെ സ്റ്റോക്ക് മൂല്യം + യൂണിറ്റിന് ചെലവ്, വിൽപ്പന വില",
    poStatusColumnDesc: "തീരാത്ത പർച്ചേസ് ഓർഡറുകളിൽ നിന്ന് ഓർഡറിലുള്ള അളവ് കാണിക്കുന്നു",
    activityColumnDesc: "സമീപകാല വിൽപ്പന പ്രവർത്തനം, ഷെൽഫ് ലൈഫ് വിവരങ്ങൾ",
    statusColumnDesc: "ഉത്പന്നം വിൽപ്പനയ്ക്ക് സജീവമാണോ അല്ലയോ എന്നത്",
    actionsColumnDesc: "ബാസ്കറ്റ്, ഓട്ടോ-അലോക്കേറ്റ്, വിവരങ്ങൾ എന്നിവയ്ക്കുള്ള വേഗ പ്രവർത്തന ബട്ടണുകൾ",
    actionButtonsExplained: "പ്രവർത്തന ബട്ടണുകൾ വിശദീകരിച്ചു",
    basketDesc: "പിന്നീട് പർച്ചേസ് ഓർഡർ സൃഷ്ടിക്കാൻ ഈ ഉത്പന്നം നിങ്ങളുടെ വാങ്ങൽ ബാസ്കറ്റിൽ ചേർക്കുക",
    allocateDesc: "ഈ ഉത്പന്നത്തിന് ഒപ്റ്റിമൽ വെയർ‌ഹൗസ് ലൊക്കേഷൻ ഓട്ടോമാറ്റിക്കായി കണ്ടെത്തി നിയോഗിക്കുക",
    detailsDesc: "പൂർണ്ണ ഉത്പന്ന വിവരങ്ങൾ കാണുക, വിവരങ്ങൾ എഡിറ്റ് ചെയ്യുക, വിൽപ്പന ചരിത്രം കാണുക",
    browseCategories: "വിഭാഗങ്ങൾ ബ്രൗസ് ചെയ്യുക",
    categories: "വിഭാഗങ്ങൾ",
    brandsIn: "",
    productsText: "ഉത്പന്നങ്ങൾ",
    productsCount: "{count} ഉത്പന്നങ്ങൾ",
    brandsCount: "{count} ബ്രാൻഡുകൾ",
    stock: "സ്റ്റോക്ക്",
    value: "മൂല്യം",
    addStock: "സ്റ്റോക്ക് ചേർക്കുക",
    browseCategoriesWorkflow: "വിഭാഗങ്ങൾ ബ്രൗസ് ചെയ്യുന്ന വർക്ക്‌ഫ്ലോ:",
    selectCategory: "ഇടത് കോളത്തിൽ നിന്ന് വിഭാഗം തിരഞ്ഞെടുക്കുക (തിരഞ്ഞെടുക്കുമ്പോൾ നീല നിറത്തിൽ ഹൈലൈറ്റ്)",
    chooseBrand: "മധ്യ കോളത്തിൽ നിന്ന് ബ്രാൻഡ് തിരഞ്ഞെടുക്കുക (തിരഞ്ഞെടുക്കുമ്പോൾ പച്ച നിറത്തിൽ ഹൈലൈറ്റ്)",
    browseManageProducts: "വലത് കോളത്തിൽ തിരയൽ, പ്രവർത്തനങ്ങളോടെ ഉത്പന്നങ്ങൾ ബ്രൗസ് ചെയ്ത് മാനേജ് ചെയ്യുക",
    manualInventoryAdditions: "മാനുവൽ ഇൻവെന്ററി കൂട്ടിച്ചേർക്കലുകൾക്ക് \"സ്റ്റോക്ക് ചേർക്കുക\" അല്ലെങ്കിൽ വാങ്ങൽ ആസൂത്രണത്തിന് \"ബാസ്കറ്റ്\" ഉപയോഗിക്കുക",
    alertCategoriesAndPriorityLevels: "അലേർട്ട് വിഭാഗങ്ങളും മുൻഗണന ലെവലുകളും",
    stockAlerts: "സ്റ്റോക്ക് അലേർട്ടുകൾ",
    allAlertTypes: "എല്ലാ അലേർട്ട് തരങ്ങളും",
    critical: "നിർണായകം",
    high: "ഉയർന്നത്",
    medium: "ഇടത്തരം",
    low: "കുറഞ്ഞത്",
    nearExpiryAlert: "കാലഹരണത്തിന് അടുത്ത്",
    expiredAlert: "കാലഹരണപ്പെട്ട",
    slowMovingAlert: "മന്ദഗതിയിൽ നീങ്ങുന്ന",
    allPriorities: "എല്ലാ മുൻഗണനകളും",
    criticalOutOfStock: "നിർണായകം - സ്റ്റോക്കില്ല",
    lastSold: "അവസാനമായി വിറ്റത്:",
    expectedDemand: "പ്രതീക്ഷിത ആവശ്യം:",
    reorderNow: "ഇപ്പോൾ റീഓർഡർ ചെയ്യുക",
    highLowStock: "ഉയർന്നത് - കുറഞ്ഞ സ്റ്റോക്ക് ({count} യൂണിറ്റുകൾ)",
    minLevel: "കുറഞ്ഞത് ലെവൽ:",
    avgDailySales: "ശരാശരി ദൈനിക വിൽപ്പന:",
    addToBasket: "ബാസ്കറ്റിലേക്ക് ചേർക്കുക",
    mediumNearExpiry: "ഇടത്തരം - കാലഹരണത്തിന് അടുത്ത് ({count} ദിവസം)",
    unitsInStock: "{count} യൂണിറ്റുകൾ സ്റ്റോക്കിലുണ്ട്",
    considerPromotionalPricing: "പ്രചാര വിലകൾ പരിഗണിക്കുക",
    promote: "പ്രചാരം ചെയ്യുക",
    alertPrioritySystem: "അലേർട്ട് മുൻഗണന സിസ്റ്റം:",
    criticalRed: "നിർണായകം (ചുവപ്പ്): സമീപകാല വിൽപ്പന പ്രവർത്തനത്തോടെ സ്റ്റോക്കില്ലാത്ത ഇനങ്ങൾ - ഉടനടി റീഓർഡർ ആവശ്യം",
    highOrange: "ഉയർന്നത് (ഓറഞ്ച്): കുറഞ്ഞത് ലെവലിന് താഴെ കുറഞ്ഞ സ്റ്റോക്ക് ഇനങ്ങൾ - വാങ്ങൽ ബാസ്കറ്റിലേക്ക് ചേർക്കുക",
    mediumYellow: "ഇടത്തരം (മഞ്ഞ): കാലഹരണത്തിന് അടുത്തുള്ള ഇനങ്ങൾ - പ്രചാരങ്ങൾ അല്ലെങ്കിൽ മാർക്ക്‌ഡൗൺ പരിഗണിക്കുക",
    lowBlue: "കുറഞ്ഞത് (നീല): മന്ദഗതിയിൽ നീങ്ങുന്ന ഇനങ്ങൾ - നിരീക്ഷിക്കുക, ക്ലിയറൻസ് തന്ത്രങ്ങൾ ആസൂത്രണം ചെയ്യുക",
    productHeaderAndBasicInformation: "ഉത്പന്ന ഹെഡർ & അടിസ്ഥാന വിവരങ്ങൾ",
    productDetailHeader: "ഉത്പന്ന വിവരങ്ങൾ",
    editProduct: "ഉത്പന്നം എഡിറ്റ് ചെയ്യുക",
    currentStock: "നിലവിലെ സ്റ്റോക്ക്",
    min: "കുറഞ്ഞത്:",
    max: "കൂടിയത്:",
    sellingPrices: "വിൽപ്പന വിലകൾ",
    b2c: "B2C:",
    b2b: "B2B:",
    locationAndVendorInformation: "ലൊക്കേഷൻ & വെൻഡർ വിവരങ്ങൾ",
    warehouseLocation: "വെയർ‌ഹൗസ് ലൊക്കേഷൻ",
    primaryLocation: "പ്രാഥമിക ലൊക്കേഷൻ:",
    binCapacity: "ബിൻ ശേഷി:",
    currentUsage: "നിലവിലെ ഉപയോഗം:",
    changeLocation: "ലൊക്കേഷൻ മാറ്റുക",
    vendorInformation: "വെൻഡർ വിവരങ്ങൾ",
    primaryVendor: "പ്രാഥമിക വെൻഡർ:",
    lastOrder: "അവസാന ഓർഡർ:",
    leadTime: "ലീഡ് സമയം:",
    createPurchaseOrder: "പർച്ചേസ് ഓർഡർ സൃഷ്ടിക്കുക",
    salesAnalyticsAndMovementHistory: "വിൽപ്പന അനാലിറ്റിക്സ് & ചലന ചരിത്രം",
    totalSales: "ആകെ വിൽപ്പന",
    revenue: "വരുമാനം",
    turnoverRate: "ടേൺഓവർ നിരക്ക്",
    recentStockMovements: "സമീപകാല സ്റ്റോക്ക് ചലനങ്ങൾ",
    stockAdded: "സ്റ്റോക്ക് ചേർത്തു",
    poReceived: "{poNumber} ലഭിച്ചു",
    sale: "വിൽപ്പന",
    orderNum: "ഓർഡർ #{orderNumber}",
    stockAdjustment: "സ്റ്റോക്ക് ക്രമീകരണം",
    inventoryAuditCorrection: "ഇൻവെന്ററി ഓഡിറ്റ് തിരുത്തൽ",
    usingProductDetailData: "ഉത്പന്ന വിവര ഡാറ്റ ഉപയോഗിക്കുക:",
    monitorStockMovementsDesc: "റീഓർഡർ സമയം ഒപ്റ്റിമൈസ് ചെയ്യാൻ സ്റ്റോക്ക് ചലനങ്ങളും വിൽപ്പന പാറ്റേണുകളും നിരീക്ഷിക്കുക",
    useTurnoverRateDesc: "ഉത്പന്നങ്ങളെ വേഗത്തിൽ/മന്ദഗതിയിൽ നീങ്ങുന്നതായി വർഗ്ഗീകരിക്കാൻ ടേൺഓവർ നിരക്ക് ഉപയോഗിക്കുക",
    trackVendorPerformanceDesc: "മികച്ച ആസൂത്രണത്തിനായി വെൻഡർ പ്രകടനവും ലീഡ് സമയവും ട്രാക്ക് ചെയ്യുക",
    analyzeLocationEfficiencyDesc: "ലൊക്കേഷൻ കാര്യക്ഷമത വിശകലനം ചെയ്ത് മന്ദഗതിയിൽ നീങ്ങുന്ന ഇനങ്ങൾ മാറ്റുന്നത് പരിഗണിക്കുക",
    reviewPricePerformanceDesc: "വില പ്രകടനം അവലോകനം ചെയ്ത് ആവശ്യമെങ്കിൽ വില തന്ത്രങ്ങൾ ക്രമീകരിക്കുക",
    // Product names translations
    cleanClearFaceWash: "ക്ലീൻ & ക്ലിയർ ഫേസ് വാഷ് - അക്വ, 50ml",
    dettolSpiceRoute: "ഡെറ്റോൾ 300ml സ്പൈസ് റൂട്ട്",
    sunflowerCookingOil: "സൂര്യകാന്തി പാചക എണ്ണ 1L",
    freshMilk: "പുതിയ പാൽ 1L പാക്കറ്റ്",
    organicGreekYogurt: "ജൈവ ഗ്രീക്ക് തൈർ 200g",
    healthyHarvest: "ആരോഗ്യകരമായ വിളവ്",
    dettol: "ഡെറ്റോൾ",
    goldenValley: "ഗോൾഡൻ വാലി",
    dairyFresh: "പാൽ പുതിയത്",
    naturesBest: "പ്രകൃതിയുടെ മികച്ചത്",
    globalSupplies: "ഗ്ലോബൽ സപ്ലൈസ് ലിമിറ്റഡ്",
  },
};

const Screenshot = ({ title, children }) => (
  <div className="my-6 border bg-slate-100 rounded-xl shadow-md overflow-hidden">
    <div className="bg-slate-200 px-4 py-2 border-b border-slate-300">
      <h5 className="font-semibold text-slate-700">{title}</h5>
    </div>
    <div className="p-4 md:p-6 bg-white">
      {children}
    </div>
  </div>
);

const Step = ({ number, title, children }) => (
  <div className="flex items-start gap-4 mt-8 w-full">
    <div className="flex-shrink-0 w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow min-w-0">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-6 sm:mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base break-words -ml-12 sm:ml-0">
        {children}
      </div>
    </div>
  </div>
);

const TabSection = ({ icon, title, children, color = "slate" }) => (
  <div className={`border-l-4 border-${color}-500 pl-6 py-6 my-8`}>
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h5 className="text-xl font-semibold text-slate-800">{title}</h5>
    </div>
    <div className="text-sm sm:text-base text-slate-700 space-y-4">
      {children}
    </div>
  </div>
);

export default function ManualInventory() {
  const [language] = useManualLanguage();

  const t = (key, variables = {}) => {
    let translation = translations[language]?.[key] || translations['en']?.[key] || key;
    // Replace placeholders like {count}
    for (const varName in variables) {
      translation = translation.replace(new RegExp(`\\{${varName}\\}`, 'g'), variables[varName]);
    }
    return translation;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="mb-6 flex justify-between items-center">
          <Link to={createPageUrl('Manual')}>
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToManual')}
            </Button>
          </Link>
          <LanguageSelector language={language} setLanguage={() => {}} readOnly />
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                {t('pageTitle')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                {t('description')}
              </p>
            </div>

            <section className="space-y-10">
              <Step number="1" title={t('step1Title')}>
                <p>{t('step1Intro')}</p>
                <p>{t('step1Description')}</p>

                <Screenshot title={`${t('stockStatusOverview')} - Real Interface`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-slate-600" />
                      <h3 className="text-lg font-semibold text-slate-800">{t('stockStatusOverview')}</h3>
                    </div>

                    {/* Realistic Stock Status Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                      <div className="bg-emerald-100 rounded-lg p-3 text-center border">
                        <div className="text-xs font-medium text-emerald-800 mb-1">{t('fastMoving')}</div>
                        <div className="text-2xl font-bold text-emerald-900">3</div>
                      </div>
                      <div className="bg-orange-100 rounded-lg p-3 text-center border">
                        <div className="text-xs font-medium text-orange-800 mb-1">{t('slowMoving')}</div>
                        <div className="text-2xl font-bold text-orange-900">32</div>
                      </div>
                      <div className="bg-gray-200 rounded-lg p-3 text-center border">
                        <div className="text-xs font-medium text-gray-800 mb-1">{t('nonMoving')}</div>
                        <div className="text-2xl font-bold text-gray-900">61</div>
                      </div>
                      <div className="bg-red-100 rounded-lg p-3 text-center border">
                        <div className="text-xs font-medium text-red-800 mb-1">{t('outOfStock')}</div>
                        <div className="text-2xl font-bold text-red-900">6</div>
                      </div>
                      <div className="bg-yellow-100 rounded-lg p-3 text-center border">
                        <div className="text-xs font-medium text-yellow-800 mb-1">{t('nearExpiry')}</div>
                        <div className="text-2xl font-bold text-yellow-900">7</div>
                      </div>
                      <div className="bg-pink-100 rounded-lg p-3 text-center border">
                        <div className="text-xs font-medium text-pink-800 mb-1">{t('expired')}</div>
                        <div className="text-2xl font-bold text-pink-900">11</div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h6 className="font-semibold text-blue-800 mb-2">{t('understandingEachStatus')}</h6>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li><strong>{t('fastMoving')} (3):</strong> {t('fastMovingDesc')}</li>
                    <li><strong>{t('slowMoving')} (32):</strong> {t('slowMovingDesc')}</li>
                    <li><strong>{t('nonMoving')} (61):</strong> {t('nonMovingDesc')}</li>
                    <li><strong>{t('outOfStock')} (6):</strong> {t('outOfStockDesc')}</li>
                    <li><strong>{t('nearExpiry')} (7):</strong> {t('nearExpiryDesc')}</li>
                    <li><strong>{t('expired')} (11):</strong> {t('expiredDesc')}</li>
                  </ul>
                </div>
              </Step>

              <Step number="2" title={t('step2Title')}>
                <p>{t('step2Intro')}</p>
                <p>{t('step2Description')}</p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. {t('headerSectionControls')}</h6>
                <Screenshot title={`${t('productInventory')} - ${t('headerSectionControls')}`}>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4">
                      <div className="flex items-center gap-2">
                        <Package className="w-5 h-5 text-slate-600" />
                        <h3 className="text-lg font-semibold text-slate-800">{t('productInventory')} (111)</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                          <Button size="sm" className="h-8 px-2 bg-slate-800 text-white">
                            <List className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 px-2">
                            <Grid className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <p className="text-sm text-slate-600">
                  <strong>{t('keyElements')}:</strong> {t('keyElementsDesc')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. {t('searchAndFilterControls')}</h6>
                <Screenshot title={`${t('productInventory')} - ${t('searchAndFilterControls')}`}>
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                      <Input placeholder={t('searchProducts')} className="pl-10" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <select className="border border-slate-200 rounded-md px-3 py-2 text-sm bg-white">
                        <option>{t('allStockStatus')}</option>
                        <option>{t('inStock')}</option>
                        <option>{t('lowStockAlert')}</option>
                        <option>{t('outOfStockAlert')}</option>
                      </select>

                      <select className="border border-slate-200 rounded-md px-3 py-2 text-sm bg-white">
                        <option>{t('allCategories')}</option>
                        <option>{t('beverages')}</option>
                        <option>{t('snacks')}</option>
                        <option>{t('personalCare')}</option>
                      </select>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">C. {t('productTableColumnBreakdown')}</h6>
                <Screenshot title={`${t('productInventory')} - ${t('productTableColumnBreakdown')}`}>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-slate-200 rounded-lg">
                      <thead className="bg-slate-50 border-b">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">
                            <div className="flex items-center gap-1">
                              {t('product')}
                              <ArrowUpDown className="w-3 h-3" />
                            </div>
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">
                            <div className="flex items-center gap-1">
                              {t('stockStatus')}
                              <ArrowUpDown className="w-3 h-3" />
                            </div>
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">
                            <div className="flex items-center gap-1">
                              {t('inventoryValue')}
                              <ArrowUpDown className="w-3 h-3" />
                            </div>
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">{t('poStatus')}</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">
                            <div className="flex items-center gap-1">
                              {t('activity')}
                              <ArrowUpDown className="w-3 h-3" />
                            </div>
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">{t('status')}</th>
                          <th className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase">{t('actions')}</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200">
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg border bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                <Package className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                                  {t('cleanClearFaceWash')}
                                </p>
                                <p className="text-xs text-slate-500">{t('healthyHarvest')}</p>
                                <p className="text-xs text-slate-400">{t('sku')} 3517688815842</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex flex-col gap-1">
                              <div className="font-medium text-red-600">0 {t('units')}</div>
                              <Badge className="bg-red-100 text-red-800 w-fit text-xs">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                {t('outOfStock')}
                              </Badge>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm">
                              <div className="font-medium text-slate-900">$0.00</div>
                              <div className="text-xs text-slate-500">
                                $76.00 {t('cost')} / $100.00 {t('price')}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-xs text-slate-500">60 {t('onOrder')}</div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex flex-col gap-1 text-xs">
                              <div className="flex items-center gap-1.5 text-slate-600">
                                <ShoppingCart className="w-3 h-3"/>
                                <span>{t('noRecentSales')}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <Badge className="bg-green-100 text-green-800">{t('active')}</Badge>
                          </td>
                          <td className="px-4 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button size="sm" variant="outline" className="h-7 px-2">
                                <ShoppingCart className="w-3 h-3" />
                                <span className="hidden sm:inline ml-1">{t('basket')}</span>
                              </Button>
                              <Button size="sm" variant="outline" className="h-7 px-2">
                                <Zap className="w-3 h-3" />
                                <span className="hidden sm:inline ml-1">{t('allocate')}</span>
                              </Button>
                              <Button size="sm" variant="ghost" className="h-7 px-2">
                                <Eye className="w-3 h-3" />
                                <span className="hidden sm:inline ml-1">{t('details')}</span>
                              </Button>
                            </div>
                          </td>
                        </tr>

                        {/* Additional realistic rows */}
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg border bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                                <Package className="w-5 h-5 text-green-600" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                                  {t('dettolSpiceRoute')}
                                </p>
                                <p className="text-xs text-slate-500">{t('dettol')}</p>
                                <p className="text-xs text-slate-400">{t('sku')} DET300SR</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex flex-col gap-1">
                              <div className="font-medium text-red-600">0 {t('units')}</div>
                              <Badge className="bg-red-100 text-red-800 w-fit text-xs">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                {t('outOfStock')}
                              </Badge>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm">
                              <div className="font-medium text-slate-900">$0.00</div>
                              <div className="text-xs text-slate-500">
                                $9.00 {t('cost')} / $19.00 {t('price')}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-xs text-slate-500">None</div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex flex-col gap-1 text-xs">
                              <div className="flex items-center gap-1.5 text-slate-600">
                                <Clock className="w-3 h-3"/>
                                <span>{t('soldDaysAgo')}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <Badge className="bg-green-100 text-green-800">{t('active')}</Badge>
                          </td>
                          <td className="px-4 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button size="sm" variant="outline" className="h-7 px-2">
                                <ShoppingCart className="w-3 h-3" />
                                <span className="hidden sm:inline ml-1">{t('basket')}</span>
                              </Button>
                              <Button size="sm" variant="outline" className="h-7 px-2">
                                <Zap className="w-3 h-3" />
                                <span className="hidden sm:inline ml-1">{t('allocate')}</span>
                              </Button>
                              <Button size="sm" variant="ghost" className="h-7 px-2">
                                <Eye className="w-3 h-3" />
                                <span className="hidden sm:inline ml-1">{t('details')}</span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Screenshot>

                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <h6 className="font-semibold text-green-800 mb-2">{t('understandingEachColumn')}</h6>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li><strong>{t('product')}:</strong> {t('productColumnDesc')}</li>
                    <li><strong>{t('stockStatus')}:</strong> {t('stockStatusColumnDesc')}</li>
                    <li><strong>{t('inventoryValue')}:</strong> {t('inventoryValueColumnDesc')}</li>
                    <li><strong>{t('poStatus')}:</strong> {t('poStatusColumnDesc')}</li>
                    <li><strong>{t('activity')}:</strong> {t('activityColumnDesc')}</li>
                    <li><strong>{t('status')}:</strong> {t('statusColumnDesc')}</li>
                    <li><strong>{t('actions')}:</strong> {t('actionsColumnDesc')}</li>
                  </ul>
                </div>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3  sm:ml-0">D. { t('actionButtonsExplained')}</h6>
                <Screenshot title={`${t('productInventory')} - ${t('actionButtonsExplained')}`}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 p-4 bg-slate-50 rounded-lg">
                      <Button size="sm" variant="outline" className="h-8 px-3">
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        {t('basket')}
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 px-3">
                        <Zap className="w-4 h-4 mr-1" />
                        {t('allocate')}
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 px-3">
                        <Eye className="w-4 h-4 mr-1" />
                        {t('details')}
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="p-3 bg-white border rounded-lg">
                        <h6 className="font-semibold text-slate-800 mb-1 flex items-center gap-1">
                          <ShoppingCart className="w-4 h-4" /> {t('basket')}
                        </h6>
                        <p className="text-xs text-slate-600">{t('basketDesc')}</p>
                      </div>
                      <div className="p-3 bg-white border rounded-lg">
                        <h6 className="font-semibold text-slate-800 mb-1 flex items-center gap-1">
                          <Zap className="w-4 h-4" /> {t('allocate')}
                        </h6>
                        <p className="text-xs text-slate-600">{t('allocateDesc')}</p>
                      </div>
                      <div className="p-3 bg-white border rounded-lg">
                        <h6 className="font-semibold text-slate-800 mb-1 flex items-center gap-1">
                          <Eye className="w-4 h-4" /> {t('details')}
                        </h6>
                        <p className="text-xs text-slate-600">{t('detailsDesc')}</p>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="3" title={t('step3Title')}>
                <p>{t('step3Intro')}</p>
                <p>{t('step3Description')}</p>

                <Screenshot title={t('browseCategories')}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Categories Column */}
                    <div className="border rounded-lg">
                      <div className="bg-slate-100 px-4 py-2 border-b">
                        <h6 className="font-semibold text-slate-700">{t('categories')} (8)</h6>
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="p-3 border border-blue-200 bg-blue-50 rounded-lg cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Grid className="w-4 h-4 text-blue-600" />
                            <span className="font-medium text-blue-800">{t('personalCare')}</span>
                          </div>
                          <div className="text-xs text-blue-600 mt-1">{t('productsCount', { count: 42 })} • {t('brandsCount', { count: 8 })}</div>
                        </div>
                        <div className="p-3 border rounded-lg cursor-pointer hover:bg-slate-50">
                          <div className="flex items-center gap-2">
                            <Grid className="w-4 h-4 text-slate-500" />
                            <span className="font-medium">{t('beverages')}</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1">{t('productsCount', { count: 28 })} • {t('brandsCount', { count: 5 })}</div>
                        </div>
                        <div className="p-3 border rounded-lg cursor-pointer hover:bg-slate-50">
                          <div className="flex items-center gap-2">
                            <Grid className="w-4 h-4 text-slate-500" />
                            <span className="font-medium">{t('snacks')}</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1">{t('productsCount', { count: 19 })} • {t('brandsCount', { count: 6 })}</div>
                        </div>
                      </div>
                    </div>

                    {/* Brands Column */}
                    <div className="border rounded-lg">
                      <div className="bg-slate-100 px-4 py-2 border-b">
                        <h6 className="font-semibold text-slate-700">{t('brandsIn')} {t('personalCare')} (8)</h6>
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="p-3 border border-green-200 bg-green-50 rounded-lg cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-green-800">Dettol</span>
                          </div>
                          <div className="text-xs text-green-600 mt-1">{t('productsCount', { count: 12 })}</div>
                        </div>
                        <div className="p-3 border rounded-lg cursor-pointer hover:bg-slate-50">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-slate-500" />
                            <span className="font-medium">Healthy Harvest</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1">{t('productsCount', { count: 8 })}</div>
                        </div>
                        <div className="p-3 border rounded-lg cursor-pointer hover:bg-slate-50">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-slate-500" />
                            <span className="font-medium">Ocean's Catch</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1">{t('productsCount', { count: 5 })}</div>
                        </div>
                      </div>
                    </div>

                    {/* Products Column */}
                    <div className="border rounded-lg">
                      <div className="bg-slate-100 px-4 py-2 border-b">
                        <h6 className="font-semibold text-slate-700">Dettol {t('productsText')} (12)</h6>
                      </div>
                      <div className="p-4">
                        <div className="relative mb-4">
                          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                          <Input placeholder={t('searchProducts')} className="pl-10" />
                        </div>
                        <div className="space-y-3">
                          <div className="border rounded-lg p-3 hover:bg-slate-50">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-lg border bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                                <Package className="w-5 h-5 text-purple-600" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                                  {t('dettolSpiceRoute')}
                                </p>
                                <p className="text-xs text-slate-500">{t('sku')} DET300SR</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge className="bg-red-100 text-red-800 text-xs">{t('outOfStock')}</Badge>
                                </div>
                                <div className="text-xs text-slate-600 mt-1">{t('stock')}: 0 {t('units')} • {t('value')}: $0.00</div>
                              </div>
                            </div>
                            <div className="mt-3 grid grid-cols-2 gap-2">
                              <Button size="sm" variant="outline" className="h-7 text-xs">
                                <Plus className="w-3 h-3 mr-1" />{t('addStock')}
                              </Button>
                              <Button size="sm" variant="outline" className="h-7 text-xs">
                                <ShoppingCart className="w-3 h-3 mr-1" />{t('basket')}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <div className="bg-purple-50 p-4 rounded-lg mt-4">
                  <h6 className="font-semibold text-purple-800 mb-2">{t('browseCategoriesWorkflow')}</h6>
                  <ol className="text-sm text-purple-700 space-y-1 list-decimal list-inside">
                    <li>{t('selectCategory')}</li>
                    <li>{t('chooseBrand')}</li>
                    <li>{t('browseManageProducts')}</li>
                    <li>{t('manualInventoryAdditions')}</li>
                  </ol>
                </div>
              </Step>

              <Step number="4" title={t('step4Title')}>
                <p>{t('step4Intro')}</p>
                <p>{t('step4Description')}</p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('alertCategoriesAndPriorityLevels')}</h6>
                <Screenshot title={`${t('stockAlerts')} - ${t('alertCategoriesAndPriorityLevels')}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      <h3 className="text-lg font-semibold text-slate-800">{t('stockAlerts')} (24)</h3>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <select className="border border-slate-200 rounded-md px-3 py-2 text-sm bg-white">
                        <option>{t('allAlertTypes')}</option>
                        <option>{t('outOfStockAlert')}</option>
                        <option>{t('lowStockAlert')}</option>
                        <option>{t('nearExpiryAlert')}</option>
                        <option>{t('expiredAlert')}</option>
                        <option>{t('slowMovingAlert')}</option>
                      </select>

                      <select className="border border-slate-200 rounded-md px-3 py-2 text-sm bg-white">
                        <option>{t('allPriorities')}</option>
                        <option>{t('critical')}</option>
                        <option>{t('high')}</option>
                        <option>{t('medium')}</option>
                        <option>{t('low')}</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      {/* Critical Alert */}
                      <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                        <div className="flex items-start justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg border bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                              <Package className="w-5 h-5 text-yellow-600" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-800">{t('sunflowerCookingOil')}</p>
                              <p className="text-xs text-slate-500">{t('goldenValley')} • {t('sku')} GV-OIL-SF-1L</p>
                              <div className="flex sm:items-center gap-2 mt-1 flex-col sm:flex-row gap-1">
                                <Badge className="bg-red-100 text-red-800 text-xs">{t('criticalOutOfStock')}</Badge>
                                <span className="text-xs text-slate-600">{t('lastSold')} 2 days ago</span>
                              </div>
                              <p className="text-xs text-slate-600 mt-1">{t('expectedDemand')} 15 {t('units')} this week</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-red-600 text-white hover:bg-red-700 h-8">
                              <Plus className="w-3 h-3 mr-1" />
                              {t('reorderNow')}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* High Priority Alert */}
                      <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                        <div className="flex items-start justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg border bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                              <Package className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-800">{t('freshMilk')}</p>
                              <p className="text-xs text-slate-500">{t('dairyFresh')} • {t('sku')} DF-MILK-1L</p>
                              <div className="flex sm:items-center gap-2 mt-1 flex-col sm:flex-row gap-1">
                                <Badge className="bg-orange-100 text-orange-800 text-xs">{t('highLowStock', { count: 8 })}</Badge>
                                <span className="text-xs text-slate-600">{t('minLevel')} 20</span>
                              </div>
                              <p className="text-xs text-slate-600 mt-1">{t('avgDailySales')} 12 {t('units')}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="h-8">
                              <ShoppingCart className="w-3 h-3 mr-1" />
                              {t('addToBasket')}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Medium Priority Alert */}
                      <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                        <div className="flex items-start justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg border bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                              <Package className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-800">{t('organicGreekYogurt')}</p>
                              <p className="text-xs text-slate-500">{t('naturesBest')} • {t('sku')} NB-YGT-GR-200</p>
                              <div className="flex sm:items-center gap-2 mt-1 flex-col sm:flex-row gap-1">
                                <Badge className="bg-yellow-100 text-yellow-800 text-xs">{t('mediumNearExpiry', { count: 15 })}</Badge>
                                <span className="text-xs text-slate-600">{t('unitsInStock', { count: 25 })}</span>
                              </div>
                              <p className="text-xs text-slate-600 mt-1">{t('considerPromotionalPricing')}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="h-8">
                              <Star className="w-3 h-3 mr-1" />
                              {t('promote')}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <div className="bg-orange-50 p-4 rounded-lg mt-4">
                  <h6 className="font-semibold text-orange-800 mb-2">{t('alertPrioritySystem')}</h6>
                  <ul className="text-sm text-orange-700 space-y-2">
                    <li>{t('criticalRed')}</li>
                    <li>{t('highOrange')}</li>
                    <li>{t('mediumYellow')}</li>
                    <li>{t('lowBlue')}</li>
                  </ul>
                </div>
              </Step>

              <Step number="5" title={t('step5Title')}>
                <p>{t('step5Intro')}</p>
                <p>{t('step5Description')}</p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. {t('productHeaderAndBasicInformation')}</h6>
                <Screenshot title={`${t('productDetailHeader')} - ${t('productHeaderAndBasicInformation')}`}>
                  <div className="space-y-6">
                    <div className="flex items-start gap-6">
                      <div className="w-30 h-30 rounded-lg border hidden sm:block shadow-sm bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                        <Package className="w-16 h-16 text-slate-400 " />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4 flex-col-reverse sm:flex-row gap-3 sm:gap-0">
                          <div>
                            <h1 className="text-2xl font-bold text-slate-900">{t('cleanClearFaceWash')}</h1>
                            <p className="text-slate-600 mt-1">{t('personalCare')} • {t('healthyHarvest')}</p>
                            <div className="flex sm:items-center gap-4 mt-2 text-sm flex-col sm:flex-row gap-1">
                              <span className="font-mono bg-slate-100 px-2 py-1 rounded">{t('sku')} 3517688815842</span>
                              <Badge className="bg-green-100 text-green-800">{t('active')}</Badge>
                              <Badge className="bg-red-100 text-red-800">{t('outOfStock')}</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <Button className="mb-2">
                              <Edit className="w-4 h-4 mr-2" />
                              {t('editProduct')}
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h6 className="font-semibold text-slate-700 mb-2">{t('currentStock')}</h6>
                            <div className="text-2xl font-bold text-red-600">0 {t('units')}</div>
                            <p className="text-xs text-slate-500">{t('min')} 10 • {t('max')} 100</p>
                          </div>
                          <div>
                            <h6 className="font-semibold text-slate-700 mb-2">{t('inventoryValue')}</h6>
                            <div className="text-2xl font-bold text-slate-900">$0.00</div>
                            <p className="text-xs text-slate-500">{t('cost')}: $76.00/{t('unit')}</p>
                          </div>
                          <div>
                            <h6 className="font-semibold text-slate-700 mb-2">{t('sellingPrices')}</h6>
                            <div className="text-lg font-bold text-slate-900">{t('b2c')} $100.00</div>
                            <div className="text-lg font-bold text-slate-900">{t('b2b')} $95.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. {t('locationAndVendorInformation')}</h6>
                <Screenshot title={`${t('productDetailHeader')} - ${t('locationAndVendorInformation')}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4">
                      <h6 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {t('warehouseLocation')}
                      </h6>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-600">{t('primaryLocation')}</span>
                          <code className="text-sm font-mono bg-slate-100 px-2 py-1 rounded">A-2-05</code>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-600">{t('binCapacity')}</span>
                          <span className="text-sm">100 {t('units')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-600">{t('currentUsage')}</span>
                          <span className="text-sm">0% (0/100)</span>
                        </div>
                        <Button size="sm" variant="outline" className="w-full mt-3">
                          <MapPin className="w-3 h-3 mr-1" />
                          {t('changeLocation')}
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h6 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {t('vendorInformation')}
                      </h6>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-600">{t('primaryVendor')}</span>
                          <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                            {t('globalSupplies')}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-600">{t('lastOrder')}</span>
                          <span className="text-sm">Jan 15, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-600">{t('leadTime')}</span>
                          <span className="text-sm">5-7 days</span>
                        </div>
                        <Button size="sm" variant="outline" className="w-full mt-3">
                          <Plus className="w-3 h-3 mr-1" />
                          {t('createPurchaseOrder')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">C. {t('salesAnalyticsAndMovementHistory')}</h6>
                <Screenshot title={`${t('productDetailHeader')} - ${t('salesAnalyticsAndMovementHistory')}`}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">124</div>
                        <div className="text-xs text-blue-700">{t('totalSales')} (30d)</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">$3,200</div>
                        <div className="text-xs text-green-700">{t('revenue')} (30d)</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">4.1</div>
                        <div className="text-xs text-orange-700">{t('avgDailySales')}</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">2.4</div>
                        <div className="text-xs text-purple-700">{t('turnoverRate')}</div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h6 className="font-semibold text-slate-700 mb-3">{t('recentStockMovements')}</h6>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between py-2 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div>
                              <p className="text-sm font-medium">{t('stockAdded')}</p>
                              <p className="text-xs text-slate-500">{t('poReceived', { poNumber: 'PO-2025-001' })}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-green-600">+60 {t('units')}</div>
                            <div className="text-xs text-slate-500">Jan 15, 2025</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between py-2 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div>
                              <p className="text-sm font-medium">{t('sale')}</p>
                              <p className="text-xs text-slate-500">{t('orderNum', { orderNumber: 'ORD-2025-0156' })}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-blue-600">-3 {t('units')}</div>
                            <div className="text-xs text-slate-500">Jan 14, 2025</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <div>
                              <p className="text-sm font-medium">{t('stockAdjustment')}</p>
                              <p className="text-xs text-slate-500">{t('inventoryAuditCorrection')}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-orange-600">-2 {t('units')}</div>
                            <div className="text-xs text-slate-500">Jan 12, 2025</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <div className="bg-indigo-50 p-4 rounded-lg mt-4">
                  <h6 className="font-semibold text-indigo-800 mb-2">{t('usingProductDetailData')}</h6>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li>• {t('monitorStockMovementsDesc')}</li>
                    <li>• {t('useTurnoverRateDesc')}</li>
                    <li>• {t('trackVendorPerformanceDesc')}</li>
                    <li>• {t('analyzeLocationEfficiencyDesc')}</li>
                    <li>• {t('reviewPricePerformanceDesc')}</li>
                  </ul>
                </div>
              </Step>

              <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{t('nextStepsTitle')}</h3>
                <p className="text-blue-700 mb-4">
                  {t('nextStepsDescription')}
                </p>
                <Link to={createPageUrl('ManualPricing')} className="inline-block">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    {t('nextStepsButton')}
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Button>
                </Link>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


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
  <div className="flex items-start gap-4 mt-8">
    <div className="flex-shrink-0 w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base">
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
                                  Clean & Clear Face Wash - Aqua, 50ml
                                </p>
                                <p className="text-xs text-slate-500">Healthy Harvest</p>
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
                                  Dettol 300ml Spice Route
                                </p>
                                <p className="text-xs text-slate-500">Dettol</p>
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

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">D. {t('actionButtonsExplained')}</h6>
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
                                  Dettol 300ml Spice Route
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
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg border bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                              <Package className="w-5 h-5 text-yellow-600" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-800">Sunflower Cooking Oil 1L</p>
                              <p className="text-xs text-slate-500">Golden Valley • {t('sku')} GV-OIL-SF-1L</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge className="bg-red-100 text-red-800 text-xs">{t('criticalOutOfStock')}</Badge>
                                <span className="text-xs text-slate-600">{t('lastSold')} 2 days ago</span>
                              </div>
                              <p className="text-xs text-slate-600 mt-1">{t('expectedDemand')} 15 {t('units')} this week</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-red-600 hover:bg-red-700 h-8">
                              <Plus className="w-3 h-3 mr-1" />
                              {t('reorderNow')}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* High Priority Alert */}
                      <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg border bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                              <Package className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-800">Fresh Milk 1L Packet</p>
                              <p className="text-xs text-slate-500">Dairy Fresh • {t('sku')} DF-MILK-1L</p>
                              <div className="flex items-center gap-2 mt-1">
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
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg border bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                              <Package className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-800">Organic Greek Yogurt 200g</p>
                              <p className="text-xs text-slate-500">Nature's Best • {t('sku')} NB-YGT-GR-200</p>
                              <div className="flex items-center gap-2 mt-1">
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
                      <div className="w-30 h-30 rounded-lg border shadow-sm bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                        <Package className="w-16 h-16 text-slate-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h1 className="text-2xl font-bold text-slate-900">Clean & Clear Face Wash - Aqua, 50ml</h1>
                            <p className="text-slate-600 mt-1">{t('personalCare')} • Healthy Harvest</p>
                            <div className="flex items-center gap-4 mt-2 text-sm">
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
                            Global Supplies Ltd.
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

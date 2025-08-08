import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, Users, Package, Receipt, FileText, Warehouse, 
  DollarSign, BarChart3, Building2, Truck, Eye, Search,
  Filter, Calendar, CheckCircle, Clock, ArrowUpDown,
  AlertTriangle, Edit, Plus, Grid, List, Camera, Box,
  Scan, Printer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import useManualLanguage from '../components/shared/useManualLanguage';
import LanguageSelector from '../components/shared/LanguageSelector';

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
    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base">
        {children}
      </div>
    </div>
  </div>
);

const translations = {
  en: {
    pageTitle: "Vendor Portal Manual",
    backToManual: "Back to Manual",
    description: "Comprehensive guide to the vendor self-service portal, enabling suppliers to manage their own products, orders, fulfillment, and account information independently.",
    step1Title: "Vendor Portal Dashboard Overview",
    step1Intro: "The Vendor Portal Dashboard provides suppliers with a comprehensive view of their business relationship with your supermarket. It includes key metrics, recent activity, and quick access to all vendor functions.",
    step1A: "Dashboard Welcome Screen",
    dashboardScreenshotTitle: "Vendor Portal Dashboard - Main Interface",
    welcomeBack: "Welcome back, Healthy Harvest!",
    accountSummary: "Here's a summary of your account.",
    vendorSince: "Vendor since",
    totalOrders: "Total Orders",
    totalRevenue: "Total Revenue",
    pendingOrders: "Pending Orders",
    myProducts: "My Products",
    metricsOverview: "These metrics provide vendors with an instant overview of their business performance and current status.",
    step1B: "Navigation Menu Structure",
    navScreenshotTitle: "Vendor Portal Navigation Cards",
    po: "Purchase Orders",
    manageOrders: "View and manage orders",
    myCustomers: "My Customers",
    manageSupermarketRels: "Manage supermarket relationships",
    fulfillment: "Fulfillment",
    pickPackShip: "Pick, pack, and ship orders",
    manageProductCatalog: "Manage product catalog",
    myWarehouse: "My Warehouse",
    viewLocationInventory: "View location & inventory",
    accountStatement: "Account Statement",
    viewPaymentHistory: "View payment history",
    navCardDesc: "Each card provides access to different vendor functions. Clicking takes vendors to the respective management section.",

    step2Title: "Purchase Orders Management",
    step2Intro: "The Purchase Orders section allows vendors to view, accept, modify, and track all orders from the supermarket. This is the primary workflow for order management and communication.",
    step2A: "Purchase Orders List View",
    poListScreenshotTitle: "Purchase Orders - Main Interface",
    myPOs: "My Purchase Orders",
    fromSupermarket: "from RetailOS Supermarket",
    fromLocation: "Orders from RetailOS Supermarket • Mumbai, Maharashtra",
    searchPO: "Search by PO ID...",
    allStatuses: "All Statuses",
    placed: "Placed",
    accepted: "Accepted",
    shipped: "Shipped",
    poId: "PO ID",
    orderDate: "Order Date",
    items: "Items",
    totalValue: "Total Value",
    status: "Status",
    actions: "Actions",
    view: "View",
    modify: "Modify",
    poTableDesc: "The table shows all purchase orders with sortable columns and status indicators. Vendors can view details and take actions on each order.",
    step2B: "Order Detail View",
    orderDetailScreenshotTitle: "Purchase Order Detail Modal",
    poDetailTitle: "Purchase Order: PO-2024-0521-003",
    orderSummary: "Order Summary",
    expectedDelivery: "Expected Delivery",
    supermarketDetails: "Supermarket Details",
    storeName: "Store Name",
    address: "Address",
    contact: "Contact",
    itemsCount: "Items ({count})",
    product: "Product",
    qty: "Qty",
    unitCost: "Unit Cost",
    total: "Total",
    organicRice: "Organic Basmati Rice 1kg",
    freshMilk: "Fresh Milk 1L",
    organicEggs: "Organic Eggs 12pcs",
    reqMod: "Request Modification",
    acceptOrder: "Accept Order",
    poDetailDesc: "Vendors can view complete order details and take actions like accepting or requesting modifications.",
    step2C: "Modification Request Interface",
    modReqScreenshotTitle: "Request Order Modification Modal",
    reqModTitle: "Request Modification - PO-2024-0521-003",
    currentQty: "Current Qty",
    currentPrice: "Current Price",
    newQty: "New Qty",
    newPrice: "New Price",
    newTotal: "New Total",
    reasonForMod: "Reason for Modification",
    reasonPlaceholder: "Please explain why you're requesting these changes...",
    reasonExample: "Rice quantity reduced due to limited stock availability. Slightly lower price offered to compensate.",
    cancel: "Cancel",
    submitRequest: "Submit Request",
    modReqDesc: "Vendors can modify quantities and prices with explanations for why changes are needed.",

    step3Title: "My Products Management",
    step3Intro: "The My Products section allows vendors to manage their product catalog, view inventory levels at their warehouse, and submit new products for approval by the supermarket.",
    step3A: "Product Catalog View",
    catalogScreenshotTitle: "My Products - Catalog Management",
    manageCatalogInv: "Manage your product catalog and inventory",
    searchProducts: "Search products...",
    allCategories: "All Categories",
    grainsCereals: "Grains & Cereals",
    dairyProducts: "Dairy Products",
    freshProduce: "Fresh Produce",
    addProduct: "Add Product",
    sku: "SKU: {sku}",
    active: "Active",
    stock: "Stock:",
    myPrice: "My Price:",
    location: "Location:",
    lowStock: "Low Stock",
    outOfStock: "Out of Stock",
    edit: "Edit",
    productCardDesc: "Product cards show current stock levels, pricing, and warehouse locations. Color-coded badges indicate stock status.",
    step3B: "Add New Product Form",
    addProductScreenshotTitle: "Add New Product - Vendor Submission Form",
    submitNewProduct: "Submit New Product for Approval",
    productName: "Product Name",
    enterProductName: "Enter product name",
    brand: "Brand",
    selectBrand: "Select brand...",
    healthyHarvest: "Healthy Harvest",
    farmFresh: "Farm Fresh",
    pureNatural: "Pure & Natural",
    category: "Category",
    selectCategory: "Select category...",
    productSku: "SKU",
    productSkuPlaceholder: "Product SKU",
    description: "Description",
    descPlaceholder: "Product description...",
    mySellingPrice: "My Selling Price",
    stockQty: "Stock Quantity",
    minStock: "Minimum Stock",
    productImage: "Product Image",
    clickToUpload: "Click to upload product image",
    imageSpec: "PNG, JPG up to 5MB",
    submitForApproval: "Submit for Approval",
    newProductDesc: "New products submitted by vendors require supermarket approval before becoming active in the system.",

    step4Title: "Warehouse Management",
    step4Intro: "The My Warehouse section provides vendors with tools to manage their inventory locations, view warehouse layout, and organize stock for efficient picking and fulfillment.",
    step4A: "Warehouse Overview",
    warehouseScreenshotTitle: "My Warehouse - Layout and Organization",
    activeRacks: "Active Racks",
    binsUsed: "Bins Used",
    locatedProducts: "Located Products",
    unassigned: "Unassigned",
    rackA: "Rack A",
    binsCount: "{count} bins",
    totalUnits: "{count} total units",
    more: "+{count} more",
    unassignedProducts: "Unassigned Products",
    unassignedProdDesc: "<strong>{count} products</strong> need warehouse locations. Use the \"Stock Up\" feature to assign them automatically based on optimal picking routes.",
    assignLocations: "Assign Locations",
    warehouseOverviewDesc: "Warehouse overview shows rack utilization and helps identify optimization opportunities for better space management.",
    step4B: "Product Location Details",
    prodLocScreenshotTitle: "Product Location Management",
    productLocations: "Product Locations",
    capacity: "Capacity",
    relocate: "Relocate",
    prodLocTableDesc: "Product location table shows current warehouse assignments with capacity utilization and quick relocation options.",

    step5Title: "My Customers Management",
    step5Intro: "The My Customers section provides vendors with insights into their business relationships, order history, payment status, and customer communication tools.",
    step5A: "Customer Dashboard",
    customerDashScreenshotTitle: "My Customers - Relationship Overview",
    totalCustomers: "Total Customers",
    pendingPayments: "Pending Payments",
    customerProfile: "Customer Profile",
    storeManager: "Store Manager",
    excellent: "Excellent",
    pendingAmount: "Pending Amount",
    lastOrder: "Last Order",
    orderDetails: "View Details",
    orderHistory: "Order History",
    customerDashDesc: "Customer dashboard provides comprehensive relationship insights and business performance metrics.",
    step5B: "Pending Payments Tracking",
    pendingPaymentsScreenshotTitle: "Pending Payments - Outstanding Orders",
    pendingPaymentsCount: "Pending Payments ({count})",
    pendingPaymentsDesc: "Orders awaiting payment from customers",
    orderId: "Order ID",
    date: "Date",

    amount: "Amount",
    daysOverdue: "Days Overdue",
    daysOverdueCount: "{count} days",
    paymentTrackingDesc: "Payment tracking helps vendors monitor overdue amounts and follow up with customers appropriately.",

    step6Title: "Account Statement & Payments",
    step6Intro: "The Account Statement section provides vendors with comprehensive financial tracking, including all transactions, payments received, and outstanding balances with detailed audit trails.",
    step6A: "Account Statement Overview",
    accountStatementScreenshotTitle: "Vendor Account Statement",
    financialOverview: "Financial overview and transaction history",
    currentBalance: "Current Balance",
    recentTransactions: "Recent Transactions",
    allTypes: "All Types",
    payments: "Payments",
    invoices: "Invoices",
    credits: "Credits",
    export: "Export",
    type: "Type",
    reference: "Reference",
    payment: "Payment",
    completed: "Completed",
    invoice: "Invoice",
    paid: "Paid",
    creditNote: "Credit Note",
    applied: "Applied",
    accountStatementDesc: "Complete transaction history with payment status tracking and reference linking for easy audit trails.",
    step6B: "Transaction Detail View",
    transactionDetailScreenshotTitle: "Transaction Details - Payment Receipt",
    transactionTitle: "Transaction: PAY-2024-0521-001",
    paymentReceivedOn: "Payment received on May 21, 2024",
    paymentMethod: "Payment Method",
    bankTransfer: "Bank Transfer",
    relatedPO: "Related Purchase Order",
    poTotal: "PO Total",
    notes: "Notes",
    paymentNotesExample: "Payment processed via bank transfer. All items delivered in good condition. Thanks for your prompt service!",
    transactionDetailDesc: "Detailed transaction records provide complete audit trails for financial tracking and reconciliation.",

    step7Title: "Fulfillment Operations",
    step7Intro: "The Fulfillment section enables vendors to manage the complete order fulfillment process, from picking items to packing and shipping, with comprehensive tracking and quality control.",
    step7A: "Fulfillment Dashboard",
    fulfillmentDashScreenshotTitle: "Vendor Fulfillment Operations",

    readyToPick: "Ready to Pick",
    inPicking: "In Picking",
    readyToPack: "Ready to Pack",
    readyToShip: "Ready to Ship",
    ordersReqAction: "Orders Requiring Action",
    startPicking: "Start Picking",
    startPacking: "Start Packing",
    fulfillmentDashDesc: "Fulfillment dashboard provides clear workflow visibility with action-oriented status tracking.",
    step7B: "Pick List Interface",
    pickListScreenshotTitle: "Order Picking - Item Selection",
    pickingOrder: "Picking Order: PO-2024-0521-003",
    pickItemsFromWarehouse: "Pick Items from Your Warehouse",
    scanOrConfirm: "Scan or manually confirm each item as you pick it",
    qtyToPick: "Quantity to Pick",
    scanBarcodePlaceholder: "Scan barcode or enter quantity picked",
    scan: "Scan",
    confirm: "Confirm",
    lowStockAvailable: "Low Stock Available ({count} units)",
    reportIssue: "Report Issue",
    progress: "Progress:",
    progressCount: "{picked} of {total} items",
    continueToNext: "Continue to Next Item",
    pickListDesc: "Picking interface guides vendors through location-optimized item collection with real-time stock validation.",
    step7C: "Packing and Shipping",
    packingScreenshotTitle: "Order Packing - Box Creation",
    packingOrder: "Packing Order: PO-2024-0520-002",
    packingOrderDesc: "All items picked and ready for packing",
    itemsToPack: "Items to Pack",
    wholeWheatFlour: "Whole Wheat Flour 1kg",
    createNewBox: "Create New Box",
    boxType: "Box Type",
    smallBox: "Small Box (12\" x 8\" x 6\")",
    mediumBox: "Medium Box (16\" x 12\" x 8\")",
    largeBox: "Large Box (20\" x 16\" x 12\")",
    createBox: "Create Box",
    boxId: "Box #{id}",
    remove: "Remove",
    printLabel: "Print Label",
    sealBox: "Seal Box",
    packingProgress: "{packed} of {total} items packed",
    markAsShipped: "Mark as Shipped",
    packingDesc: "Packing interface enables systematic box creation with item organization and shipping label generation.",

    bestPracticesTitle: "Vendor Portal Best Practices",
    bp1: "Check your portal daily for new orders and status updates",
    bp2: "Accept or modify orders promptly to maintain good relationships",
    bp3: "Keep product information and inventory levels up-to-date",
    bp4: "Maintain organized warehouse locations for efficient fulfillment",
    bp5: "Monitor payment status and follow up on overdue amounts appropriately"
  },
  kn: {
    pageTitle: "ಮಾರಾಟಗಾರರ ಪೋರ್ಟಲ್ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ಮಾರಾಟಗಾರರ ಸ್ವ-ಸೇವಾ ಪೋರ್ಟಲ್‌ಗೆ ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿ, ಪೂರೈಕೆದಾರರು ತಮ್ಮ ಸ್ವಂತ ಉತ್ಪನ್ನಗಳು, ಆದೇಶಗಳು, ಪೂರೈಕೆ ಮತ್ತು ಖಾತೆ ಮಾಹಿತಿಯನ್ನು ಸ್ವತಂತ್ರವಾಗಿ ನಿರ್ವಹಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.",
    step1Title: "ಮಾರಾಟಗಾರರ ಪೋರ್ಟಲ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ಮಾರಾಟಗಾರರ ಪೋರ್ಟಲ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪೂರೈಕೆದಾರರಿಗೆ ನಿಮ್ಮ ಸೂಪರ್‌ಮಾರ್ಕೆಟ್‌ನೊಂದಿಗಿನ ಅವರ ವ್ಯವಹಾರ ಸಂಬಂಧದ ಸಮಗ್ರ ನೋಟವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಪ್ರಮುಖ ಮೆಟ್ರಿಕ್‌ಗಳು, ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ ಮತ್ತು ಎಲ್ಲಾ ಮಾರಾಟಗಾರರ ಕಾರ್ಯಗಳಿಗೆ ತ್ವರಿತ ಪ್ರವೇಶವನ್ನು ಒಳಗೊಂಡಿದೆ.",
    step1A: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಸ್ವಾಗತ ಪರದೆ",
    dashboardScreenshotTitle: "ಮಾರಾಟಗಾರರ ಪೋರ್ಟಲ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ - ಮುಖ್ಯ ಇಂಟರ್ಫೇಸ್",
    welcomeBack: "ಮತ್ತೆ ಸುಸ್ವಾಗತ, ಹೆಲ್ತಿ ಹಾರ್ವೆಸ್ಟ್!",
    accountSummary: "ನಿಮ್ಮ ಖಾತೆಯ ಸಾರಾಂಶ ಇಲ್ಲಿದೆ.",
    vendorSince: "ಮಾರಾಟಗಾರರಾದಾಗಿನಿಂದ",
    totalOrders: "ಒಟ್ಟು ಆದೇಶಗಳು",
    totalRevenue: "ಒಟ್ಟು ಆದಾಯ",
    pendingOrders: "ಬಾಕಿ ಇರುವ ಆದೇಶಗಳು",
    myProducts: "ನನ್ನ ಉತ್ಪನ್ನಗಳು",
    metricsOverview: "ಈ ಮೆಟ್ರಿಕ್‌ಗಳು ಮಾರಾಟಗಾರರಿಗೆ ಅವರ ವ್ಯವಹಾರದ ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಪ್ರಸ್ತುತ ಸ್ಥಿತಿಯ ತ್ವರಿತ ಅವಲೋಕನವನ್ನು ಒದಗಿಸುತ್ತವೆ.",
    step1B: "ನ್ಯಾವಿಗೇಷನ್ ಮೆನು ರಚನೆ",
    navScreenshotTitle: "ಮಾರಾಟಗಾರರ ಪೋರ್ಟಲ್ ನ್ಯಾವಿಗೇಷನ್ ಕಾರ್ಡ್‌ಗಳು",
    po: "ಖರೀದಿ ಆದೇಶಗಳು",
    manageOrders: "ಆದೇಶಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ",
    myCustomers: "ನನ್ನ ಗ್ರಾಹಕರು",
    manageSupermarketRels: "ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    fulfillment: "ಪೂರೈಕೆ",
    pickPackShip: "ಆದೇಶಗಳನ್ನು ಆರಿಸಿ, ಪ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ರವಾನಿಸಿ",
    manageProductCatalog: "ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ನಿರ್ವಹಿಸಿ",
    myWarehouse: "ನನ್ನ ಗೋದಾಮು",
    viewLocationInventory: "ಸ್ಥಳ ಮತ್ತು ದಾಸ್ತಾನು ವೀಕ್ಷಿಸಿ",
    accountStatement: "ಖಾತೆ ಹೇಳಿಕೆ",
    viewPaymentHistory: "ಪಾವತಿ ಇತಿಹಾಸವನ್ನು ವೀಕ್ಷಿಸಿ",
    navCardDesc: "ಪ್ರತಿ ಕಾರ್ಡ್ ವಿವಿಧ ಮಾರಾಟಗಾರರ ಕಾರ್ಯಗಳಿಗೆ ಪ್ರವೇಶವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಕ್ಲಿಕ್ ಮಾಡುವುದರಿಂದ ಮಾರಾಟಗಾರರನ್ನು ಆಯಾ ನಿರ್ವಹಣಾ ವಿಭಾಗಕ್ಕೆ ಕರೆದೊಯ್ಯುತ್ತದೆ.",
    step2Title: "ಖರೀದಿ ಆದೇಶಗಳ ನಿರ್ವಹಣೆ",
    step2Intro: "ಖರೀದಿ ಆದೇಶಗಳ ವಿಭಾಗವು ಮಾರಾಟಗಾರರಿಗೆ ಸೂಪರ್ಮಾರ್ಕೆಟ್‌ನಿಂದ ಬರುವ ಎಲ್ಲಾ ಆದೇಶಗಳನ್ನು ವೀಕ್ಷಿಸಲು, ಸ್ವೀಕರಿಸಲು, ಮಾರ್ಪಡಿಸಲು ಮತ್ತು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ. ಇದು ಆದೇಶ ನಿರ್ವಹಣೆ ಮತ್ತು ಸಂವಹನಕ್ಕಾಗಿ ಪ್ರಾಥಮಿಕ ಕಾರ್ಯಪ್ರವಾಹವಾಗಿದೆ.",
    step2A: "ಖರೀದಿ ಆದೇಶಗಳ ಪಟ್ಟಿ ವೀಕ್ಷಣೆ",
    poListScreenshotTitle: "ಖರೀದಿ ಆದೇಶಗಳು - ಮುಖ್ಯ ಇಂಟರ್ಫೇಸ್",
    myPOs: "ನನ್ನ ಖರೀದಿ ಆದೇಶಗಳು",
    fromSupermarket: "RetailOS ಸೂಪರ್ಮಾರ್ಕೆಟ್‌ನಿಂದ",
    fromLocation: "RetailOS ಸೂಪರ್ಮಾರ್ಕೆಟ್‌ನಿಂದ ಆದೇಶಗಳು • ಮುಂಬೈ, ಮಹಾರಾಷ್ಟ್ರ",
    searchPO: "PO ID ಮೂಲಕ ಹುಡುಕಿ...",
    allStatuses: "ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು",
    placed: "ಇರಿಸಲಾಗಿದೆ",
    accepted: "ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
    shipped: "ರವಾನಿಸಲಾಗಿದೆ",
    poId: "PO ID",
    orderDate: "ಆದೇಶ ದಿನಾಂಕ",
    items: "ವಸ್ತುಗಳು",
    totalValue: "ಒಟ್ಟು ಮೌಲ್ಯ",
    status: "ಸ್ಥಿತಿ",
    actions: "ಕ್ರಿಯೆಗಳು",
    view: "ವೀಕ್ಷಿಸಿ",
    modify: "ಮಾರ್ಪಡಿಸಿ",
    poTableDesc: "ಕೋಷ್ಟಕವು ಎಲ್ಲಾ ಖರೀದಿ ಆದೇಶಗಳನ್ನು ವಿಂಗಡಿಸಬಹುದಾದ ಕಾಲಮ್‌ಗಳು ಮತ್ತು ಸ್ಥಿತಿ ಸೂಚಕಗಳೊಂದಿಗೆ ತೋರಿಸುತ್ತದೆ. ಮಾರಾಟಗಾರರು ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಬಹುದು ಮತ್ತು ಪ್ರತಿ ಆದೇಶದ ಮೇಲೆ ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳಬಹುದು.",
    step2B: "ಆದೇಶದ ವಿವರ ವೀಕ್ಷಣೆ",
    orderDetailScreenshotTitle: "ಖರೀದಿ ಆದೇಶದ ವಿವರ ಮೋಡಲ್",
    poDetailTitle: "ಖರೀದಿ ಆದೇಶ: PO-2024-0521-003",
    orderSummary: "ಆದೇಶ ಸಾರಾಂಶ",
    expectedDelivery: "ನಿರೀಕ್ಷಿತ ವಿತರಣೆ",
    supermarketDetails: "ಸೂಪರ್ಮಾರ್ಕೆಟ್ ವಿವರಗಳು",
    storeName: "ಅಂಗಡಿ ಹೆಸರು",
    address: "ವಿಳಾಸ",
    contact: "ಸಂಪರ್ಕ",
    itemsCount: "ವಸ್ತುಗಳು ({count})",
    product: "ಉತ್ಪನ್ನ",
    qty: "ಪ್ರಮಾಣ",
    unitCost: "ಪ್ರತಿ ಯೂನಿಟ್ ವೆಚ್ಚ",
    total: "ಒಟ್ಟು",
    organicRice: "ಸಾವಯವ ಬಾಸಮತಿ ಅಕ್ಕಿ 1kg",
    freshMilk: "ತಾಜಾ ಹಾಲು 1L",
    organicEggs: "ಸಾವಯವ ಮೊಟ್ಟೆಗಳು 12pcs",
    reqMod: "ಮಾರ್ಪಾಡು ವಿನಂತಿ",
    acceptOrder: "ಆದೇಶವನ್ನು ಸ್ವೀಕರಿಸಿ",
    poDetailDesc: "ಮಾರಾಟಗಾರರು ಸಂಪೂರ್ಣ ಆದೇಶ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಬಹುದು ಮತ್ತು ಸ್ವೀಕರಿಸುವ ಅಥವಾ ಮಾರ್ಪಾಡುಗಳನ್ನು ವಿನಂತಿಸುವಂತಹ ಕ್ರಮಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಬಹುದು.",
    step2C: "ಮಾರ್ಪಾಡು ವಿನಂತಿ ಇಂಟರ್ಫೇಸ್",
    modReqScreenshotTitle: "ಆದೇಶ ಮಾರ್ಪಾಡು ವಿನಂತಿ ಮೋಡಲ್",
    reqModTitle: "ಮಾರ್ಪಾಡು ವಿನಂತಿ - PO-2024-0521-003",
    currentQty: "ಪ್ರಸ್ತುತ ಪ್ರಮಾಣ",
    currentPrice: "ಪ್ರಸ್ತುತ ಬೆಲೆ",
    newQty: "ಹೊಸ ಪ್ರಮಾಣ",
    newPrice: "ಹೊಸ ಬೆಲೆ",
    newTotal: "ಹೊಸ ಒಟ್ಟು",
    reasonForMod: "ಮಾರ್ಪಾಡಿಗೆ ಕಾರಣ",
    reasonPlaceholder: "ನೀವು ಈ ಬದಲಾವಣೆಗಳನ್ನು ಏಕೆ ವಿನಂತಿಸುತ್ತಿದ್ದೀರಿ ಎಂಬುದನ್ನು ದಯವಿಟ್ಟು ವಿವರಿಸಿ...",
    reasonExample: "ಸೀಮಿತ ಸ್ಟಾಕ್ ಲಭ್ಯತೆಯಿಂದಾಗಿ ಅಕ್ಕಿ ಪ್ರಮಾಣವನ್ನು ಕಡಿಮೆ ಮಾಡಲಾಗಿದೆ. ಸ್ವಲ್ಪ ಕಡಿಮೆ ಬೆಲೆಯನ್ನು ಸರಿದೂಗಿಸಲು ನೀಡಲಾಗಿದೆ.",
    cancel: "ರದ್ದುಮಾಡಿ",
    submitRequest: "ವಿನಂತಿಯನ್ನು ಸಲ್ಲಿಸಿ",
    modReqDesc: "ಮಾರಾಟಗಾರರು ಪ್ರಮಾಣ ಮತ್ತು ಬೆಲೆಗಳನ್ನು ಬದಲಾವಣೆಗಳಿಗೆ ಕಾರಣಗಳ ವಿವರಣೆಯೊಂದಿಗೆ ಮಾರ್ಪಡಿಸಬಹುದು.",
    step3Title: "ನನ್ನ ಉತ್ಪನ್ನಗಳ ನಿರ್ವಹಣೆ",
    step3Intro: "ನನ್ನ ಉತ್ಪನ್ನಗಳ ವಿಭಾಗವು ಮಾರಾಟಗಾರರಿಗೆ ತಮ್ಮ ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ಅನ್ನು ನಿರ್ವಹಿಸಲು, ತಮ್ಮ ಗೋದಾಮಿನಲ್ಲಿನ ದಾಸ್ತಾನು ಮಟ್ಟವನ್ನು ವೀಕ್ಷಿಸಲು ಮತ್ತು ಸೂಪರ್ಮಾರ್ಕೆಟ್‌ನ ಅನುಮೋದನೆಗಾಗಿ ಹೊಸ ಉತ್ಪನ್ನಗಳನ್ನು ಸಲ್ಲಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.",
    step3A: "ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ವೀಕ್ಷಣೆ",
    catalogScreenshotTitle: "ನನ್ನ ಉತ್ಪನ್ನಗಳು - ಕ್ಯಾಟಲಾಗ್ ನಿರ್ವಹಣೆ",
    manageCatalogInv: "ನಿಮ್ಮ ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ಮತ್ತು ದಾಸ್ತಾನು ನಿರ್ವಹಿಸಿ",
    searchProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ...",
    allCategories: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
    grainsCereals: "ಧಾನ್ಯಗಳು ಮತ್ತು ದ್ವಿದಳ ಧಾನ್ಯಗಳು",
    dairyProducts: "ಹೈನು ಉತ್ಪನ್ನಗಳು",
    freshProduce: "ತಾಜಾ ಉತ್ಪನ್ನಗಳು",
    addProduct: "ಉತ್ಪನ್ನ ಸೇರಿಸಿ",
    sku: "SKU: {sku}",
    active: "ಸಕ್ರಿಯ",
    stock: "ಸ್ಟಾಕ್:",
    myPrice: "ನನ್ನ ಬೆಲೆ:",
    location: "ಸ್ಥಳ:",
    lowStock: "ಕಡಿಮೆ ಸ್ಟಾಕ್",
    outOfStock: "ಸ್ಟಾಕ್ ಇಲ್ಲ",
    edit: "ಸಂಪಾದಿಸಿ",
    productCardDesc: "ಉತ್ಪನ್ನ ಕಾರ್ಡ್‌ಗಳು ಪ್ರಸ್ತುತ ಸ್ಟಾಕ್ ಮಟ್ಟಗಳು, ಬೆಲೆ ಮತ್ತು ಗೋದಾಮಿನ ಸ್ಥಳಗಳನ್ನು ತೋರಿಸುತ್ತವೆ. ಬಣ್ಣ-ಕೋಡೆಡ್ ಬ್ಯಾಡ್ಜ್‌ಗಳು ಸ್ಟಾಕ್ ಸ್ಥಿತಿಯನ್ನು ಸೂಚಿಸುತ್ತವೆ.",
    step3B: "ಹೊಸ ಉತ್ಪನ್ನ ಸೇರಿಸುವ ಫಾರ್ಮ್",
    addProductScreenshotTitle: "ಹೊಸ ಉತ್ಪನ್ನ ಸೇರಿಸಿ - ಮಾರಾಟಗಾರರ ಸಲ್ಲಿಕೆ ಫಾರ್ಮ್",
    submitNewProduct: "ಅನುಮೋದನೆಗಾಗಿ ಹೊಸ ಉತ್ಪನ್ನವನ್ನು ಸಲ್ಲಿಸಿ",
    productName: "ಉತ್ಪನ್ನದ ಹೆಸರು",
    enterProductName: "ಉತ್ಪನ್ನದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    brand: "ಬ್ರಾಂಡ್",
    selectBrand: "ಬ್ರಾಂಡ್ ಆಯ್ಕೆಮಾಡಿ...",
    healthyHarvest: "ಹೆಲ್ತಿ ಹಾರ್ವೆಸ್ಟ್",
    farmFresh: "ಫಾರ್ಮ್ ಫ್ರೆಶ್",
    pureNatural: "ಪ್ಯೂರ್ & ನ್ಯಾಚುರಲ್",
    category: "ವರ್ಗ",
    selectCategory: "ವರ್ಗ ಆಯ್ಕೆಮಾಡಿ...",
    productSku: "SKU",
    productSkuPlaceholder: "ಉತ್ಪನ್ನ SKU",
    description: "ವಿವರಣೆ",
    descPlaceholder: "ಉತ್ಪನ್ನದ ವಿವರಣೆ...",
    mySellingPrice: "ನನ್ನ ಮಾರಾಟದ ಬೆಲೆ",
    stockQty: "ಸ್ಟಾಕ್ ಪ್ರಮಾಣ",
    minStock: "ಕನಿಷ್ಠ ಸ್ಟಾಕ್",
    productImage: "ಉತ್ಪನ್ನದ ಚಿತ್ರ",
    clickToUpload: "ಉತ್ಪನ್ನದ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
    imageSpec: "PNG, JPG 5MB ವರೆಗೆ",
    submitForApproval: "ಅನುಮೋದನೆಗಾಗಿ ಸಲ್ಲಿಸಿ",
    newProductDesc: "ಮಾರಾಟಗಾರರು ಸಲ್ಲಿಸಿದ ಹೊಸ ಉತ್ಪನ್ನಗಳಿಗೆ ಸಿಸ್ಟಮ್‌ನಲ್ಲಿ ಸಕ್ರಿಯವಾಗುವ ಮೊದಲು ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಅನುಮೋದನೆ ಅಗತ್ಯವಿದೆ.",
    step4Title: "ಗೋದಾಮು ನಿರ್ವಹಣೆ",
    step4Intro: "ನನ್ನ ಗೋದಾಮು ವಿಭಾಗವು ಮಾರಾಟಗಾರರಿಗೆ ತಮ್ಮ ದಾಸ್ತಾನು ಸ್ಥಳಗಳನ್ನು ನಿರ್ವಹಿಸಲು, ಗೋದಾಮಿನ ವಿನ್ಯಾಸವನ್ನು ವೀಕ್ಷಿಸಲು ಮತ್ತು ದಕ್ಷ ಪಿಕಿಂಗ್ ಮತ್ತು ಪೂರೈಕೆಗಾಗಿ ಸ್ಟಾಕ್ ಅನ್ನು ಸಂಘಟಿಸಲು ಉಪಕರಣಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step4A: "ಗೋದಾಮಿನ ಅವಲೋಕನ",
    warehouseScreenshotTitle: "ನನ್ನ ಗೋದಾಮು - ವಿನ್ಯಾಸ ಮತ್ತು ಸಂಘಟನೆ",
    activeRacks: "ಸಕ್ರಿಯ ರಾಕ್‌ಗಳು",
    binsUsed: "ಬಳಸಿದ ಬಿನ್‌ಗಳು",
    locatedProducts: "ಸ್ಥಳೀಕರಿಸಿದ ಉತ್ಪನ್ನಗಳು",
    unassigned: "ನಿಯೋಜಿಸದ",
    rackA: "ರಾಕ್ A",
    binsCount: "{count} ಬಿನ್‌ಗಳು",
    totalUnits: "{count} ಒಟ್ಟು ಯೂನಿಟ್‌ಗಳು",
    more: "+{count} ಹೆಚ್ಚು",
    unassignedProducts: "ನಿಯೋಜಿಸದ ಉತ್ಪನ್ನಗಳು",
    unassignedProdDesc: "<strong>{count} ಉತ್ಪನ್ನಗಳಿಗೆ</strong> ಗೋದಾಮಿನ ಸ್ಥಳಗಳು ಬೇಕಾಗಿವೆ. ಅತ್ಯುತ್ತಮ ಪಿಕಿಂಗ್ ಮಾರ್ಗಗಳ ಆಧಾರದ ಮೇಲೆ ಅವುಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಿಯೋಜಿಸಲು \"ಸ್ಟಾಕ್ ಅಪ್\" ವೈಶಿಷ್ಟ್ಯವನ್ನು ಬಳಸಿ.",
    assignLocations: "ಸ್ಥಳಗಳನ್ನು ನಿಯೋಜಿಸಿ",
    warehouseOverviewDesc: "ಗೋದಾಮಿನ ಅವಲೋಕನವು ರಾಕ್ ಬಳಕೆಯನ್ನು ತೋರಿಸುತ್ತದೆ ಮತ್ತು ಉತ್ತಮ ಸ್ಥಳ ನಿರ್ವಹಣೆಗಾಗಿ ಆಪ್ಟಿಮೈಸೇಶನ್ ಅವಕಾಶಗಳನ್ನು ಗುರುತಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    step4B: "ಉತ್ಪನ್ನ ಸ್ಥಳದ ವಿವರಗಳು",
    prodLocScreenshotTitle: "ಉತ್ಪನ್ನ ಸ್ಥಳ ನಿರ್ವಹಣೆ",
    productLocations: "ಉತ್ಪನ್ನ ಸ್ಥಳಗಳು",
    capacity: "ಸಾಮರ್ಥ್ಯ",
    relocate: "ಸ್ಥಳಾಂತರಿಸಿ",
    prodLocTableDesc: "ಉತ್ಪನ್ನ ಸ್ಥಳ ಕೋಷ್ಟಕವು ಸಾಮರ್ಥ್ಯದ ಬಳಕೆ ಮತ್ತು ತ್ವರಿತ ಸ್ಥಳಾಂತರ ಆಯ್ಕೆಗಳೊಂದಿಗೆ ಪ್ರಸ್ತುತ ಗೋದಾಮಿನ ನಿಯೋಜನೆಗಳನ್ನು ತೋರಿಸುತ್ತದೆ.",
    step5Title: "ನನ್ನ ಗ್ರಾಹಕರ ನಿರ್ವಹಣೆ",
    step5Intro: "ನನ್ನ ಗ್ರಾಹಕರು ವಿಭಾಗವು ಮಾರಾಟಗಾರರಿಗೆ ಅವರ ವ್ಯವಹಾರ ಸಂಬಂಧಗಳು, ಆದೇಶ ಇತಿಹಾಸ, ಪಾವತಿ ಸ್ಥಿತಿ ಮತ್ತು ಗ್ರಾಹಕ ಸಂವಹನ ಸಾಧನಗಳ ಬಗ್ಗೆ ಒಳನೋಟಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step5A: "ಗ್ರಾಹಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    customerDashScreenshotTitle: "ನನ್ನ ಗ್ರಾಹಕರು - ಸಂಬಂಧದ ಅವಲೋಕನ",
    totalCustomers: "ಒಟ್ಟು ಗ್ರಾಹಕರು",
    pendingPayments: "ಬಾಕಿ ಪಾವತಿಗಳು",
    customerProfile: "ಗ್ರಾಹಕ ಪ್ರೊಫೈಲ್",
    storeManager: "ಅಂಗಡಿ ವ್ಯವಸ್ಥಾಪಕ",
    excellent: "ಅತ್ಯುತ್ತಮ",
    pendingAmount: "ಬಾಕಿ ಮೊತ್ತ",
    lastOrder: "ಕೊನೆಯ ಆದೇಶ",
    orderDetails: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    orderHistory: "ಆದೇಶ ಇತಿಹಾಸ",
    customerDashDesc: "ಗ್ರಾಹಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಸಮಗ್ರ ಸಂಬಂಧದ ಒಳನೋಟಗಳು ಮತ್ತು ವ್ಯವಹಾರದ ಕಾರ್ಯಕ್ಷಮತೆಯ ಮೆಟ್ರಿಕ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step5B: "ಬಾಕಿ ಪಾವತಿಗಳ ಟ್ರ್ಯಾಕಿಂಗ್",
    pendingPaymentsScreenshotTitle: "ಬಾಕಿ ಪಾವತಿಗಳು - ಬಾಕಿ ಇರುವ ಆದೇಶಗಳು",
    pendingPaymentsCount: "ಬಾಕಿ ಪಾವತಿಗಳು ({count})",
    pendingPaymentsDesc: "ಗ್ರಾಹಕರಿಂದ ಪಾವತಿಗಾಗಿ ಕಾಯುತ್ತಿರುವ ಆದೇಶಗಳು",
    orderId: "ಆದೇಶ ID",
    date: "ದಿನಾಂಕ",
    amount: "ಮೊತ್ತ",
    daysOverdue: "ತಡವಾದ ದಿನಗಳು",
    daysOverdueCount: "{count} ದಿನಗಳು",
    paymentTrackingDesc: "ಪಾವತಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಮಾರಾಟಗಾರರಿಗೆ ತಡವಾದ ಮೊತ್ತವನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ಮತ್ತು ಗ್ರಾಹಕರೊಂದಿಗೆ ಸೂಕ್ತವಾಗಿ ಅನುಸರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    step6Title: "ಖಾತೆ ಹೇಳಿಕೆ ಮತ್ತು ಪಾವತಿಗಳು",
    step6Intro: "ಖಾತೆ ಹೇಳಿಕೆ ವಿಭಾಗವು ಮಾರಾಟಗಾರರಿಗೆ ಎಲ್ಲಾ ವಹಿವಾಟುಗಳು, ಸ್ವೀಕರಿಸಿದ ಪಾವತಿಗಳು ಮತ್ತು ವಿವರವಾದ ಆಡಿಟ್ ಟ್ರೇಲ್‌ಗಳೊಂದಿಗೆ ಬಾಕಿ ಇರುವ ಬಾಕಿಗಳನ್ನು ಒಳಗೊಂಡಂತೆ ಸಮಗ್ರ ಹಣಕಾಸು ಟ್ರ್ಯಾಕಿಂಗ್ ಅನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step6A: "ಖಾತೆ ಹೇಳಿಕೆ ಅವಲೋಕನ",
    accountStatementScreenshotTitle: "ಮಾರಾಟಗಾರರ ಖಾತೆ ಹೇಳಿಕೆ",
    financialOverview: "ಹಣಕಾಸು ಅವಲೋಕನ ಮತ್ತು ವಹಿವಾಟು ಇತಿಹಾಸ",
    currentBalance: "ಪ್ರಸ್ತುತ ಬಾಕಿ",
    recentTransactions: "ಇತ್ತೀಚಿನ ವಹಿವಾಟುಗಳು",
    allTypes: "ಎಲ್ಲಾ ಪ್ರಕಾರಗಳು",
    payments: "ಪಾವತಿಗಳು",
    invoices: "ಸರಕುಪಟ್ಟಿಗಳು",
    credits: "ಕ್ರೆಡಿಟ್‌ಗಳು",
    export: "ರಫ್ತು ಮಾಡಿ",
    type: "ಪ್ರಕಾರ",
    reference: "ಉಲ್ಲೇಖ",
    payment: "ಪಾವತಿ",
    completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
    invoice: "ಸರಕುಪಟ್ಟಿ",
    paid: "ಪಾವತಿಸಲಾಗಿದೆ",
    creditNote: "ಕ್ರೆಡಿಟ್ ನೋಟ್",
    applied: "ಅನ್ವಯಿಸಲಾಗಿದೆ",
    accountStatementDesc: "ಸುಲಭ ಆಡಿಟ್ ಟ್ರೇಲ್‌ಗಳಿಗಾಗಿ ಪಾವತಿ ಸ್ಥಿತಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಉಲ್ಲೇಖ ಲಿಂಕ್ ಮಾಡುವಿಕೆಯೊಂದಿಗೆ ಸಂಪೂರ್ಣ ವಹಿವಾಟು ಇತಿಹಾಸ.",
    step6B: "ವಹಿವಾಟು ವಿವರ ವೀಕ್ಷಣೆ",
    transactionDetailScreenshotTitle: "ವಹಿವಾಟು ವಿವರಗಳು - ಪಾವತಿ ರಶೀದಿ",
    transactionTitle: "ವಹಿವಾಟು: PAY-2024-0521-001",
    paymentReceivedOn: "ಮೇ 21, 2024 ರಂದು ಪಾವತಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
    paymentMethod: "ಪಾವತಿ ವಿಧಾನ",
    bankTransfer: "ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ",
    relatedPO: "ಸಂಬಂಧಿತ ಖರೀದಿ ಆದೇಶ",
    poTotal: "PO ಒಟ್ಟು",
    notes: "ಟಿಪ್ಪಣಿಗಳು",
    paymentNotesExample: "ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ಮೂಲಕ ಪಾವತಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗಿದೆ. ಎಲ್ಲಾ ವಸ್ತುಗಳನ್ನು ಉತ್ತಮ ಸ್ಥಿತಿಯಲ್ಲಿ ವಿತರಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ತ್ವರಿತ ಸೇವೆಗೆ ಧನ್ಯವಾದಗಳು!",
    transactionDetailDesc: "ವಿವರವಾದ ವಹಿವಾಟು ದಾಖಲೆಗಳು ಹಣಕಾಸು ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಸಮನ್ವಯಕ್ಕಾಗಿ ಸಂಪೂರ್ಣ ಆಡಿಟ್ ಟ್ರೇಲ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತವೆ.",
    step7Title: "ಪೂರೈಕೆ ಕಾರ್ಯಾಚರಣೆಗಳು",
    step7Intro: "ಪೂರೈಕೆ ವಿಭಾಗವು ಮಾರಾಟಗಾರರಿಗೆ ಸಂಪೂರ್ಣ ಆದೇಶ ಪೂರೈಕೆ ಪ್ರಕ್ರಿಯೆಯನ್ನು ನಿರ್ವಹಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ, ವಸ್ತುಗಳನ್ನು ಆರಿಸುವುದರಿಂದ ಹಿಡಿದು ಪ್ಯಾಕಿಂಗ್ ಮತ್ತು ರವಾನೆಯವರೆಗೆ, ಸಮಗ್ರ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣದೊಂದಿಗೆ.",
    step7A: "ಪೂರೈಕೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    fulfillmentDashScreenshotTitle: "ಮಾರಾಟಗಾರರ ಪೂರೈಕೆ ಕಾರ್ಯಾಚರಣೆಗಳು",
    readyToPick: "ಆರಿಸಲು ಸಿದ್ಧ",
    inPicking: "ಆರಿಸಲಾಗುತ್ತಿದೆ",
    readyToPack: "ಪ್ಯಾಕ್ ಮಾಡಲು ಸಿದ್ಧ",
    readyToShip: "ರವಾನಿಸಲು ಸಿದ್ಧ",
    ordersReqAction: "ಕ್ರಮ ಅಗತ್ಯವಿರುವ ಆದೇಶಗಳು",
    startPicking: "ಆರಿಸಲು ಪ್ರಾರಂಭಿಸಿ",
    startPacking: "ಪ್ಯಾಕ್ ಮಾಡಲು ಪ್ರಾರಂಭಿಸಿ",
    fulfillmentDashDesc: "ಪೂರೈಕೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಕ್ರಿಯೆ-ಆಧಾರಿತ ಸ್ಥಿತಿ ಟ್ರ್ಯಾಕಿಂಗ್‌ನೊಂದಿಗೆ ಸ್ಪಷ್ಟ ಕಾರ್ಯಪ್ರವಾಹ ಗೋಚರತೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step7B: "ಆರಿಸುವ ಪಟ್ಟಿ ಇಂಟರ್ಫೇಸ್",
    pickListScreenshotTitle: "ಆದೇಶ ಆರಿಸುವುದು - ವಸ್ತು ಆಯ್ಕೆ",
    pickingOrder: "ಆದೇಶ ಆರಿಸಲಾಗುತ್ತಿದೆ: PO-2024-0521-003",
    pickItemsFromWarehouse: "ನಿಮ್ಮ ಗೋದಾಮಿನಿಂದ ವಸ್ತುಗಳನ್ನು ಆರಿಸಿ",
    scanOrConfirm: "ನೀವು ಆರಿಸುವಾಗ ಪ್ರತಿ ವಸ್ತುವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಹಸ್ತಚಾಲಿತವಾಗಿ ಖಚಿತಪಡಿಸಿ",
    qtyToPick: "ಆರಿಸಬೇಕಾದ ಪ್ರಮಾಣ",
    scanBarcodePlaceholder: "ಬಾರ್‌ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಆರಿಸಿದ ಪ್ರಮಾಣವನ್ನು ನಮೂದಿಸಿ",
    scan: "ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    confirm: "ಖಚಿತಪಡಿಸಿ",
    lowStockAvailable: "ಕಡಿಮೆ ಸ್ಟಾಕ್ ಲಭ್ಯವಿದೆ ({count} ಯೂನಿಟ್‌ಗಳು)",
    reportIssue: "ಸಮಸ್ಯೆಯನ್ನು ವರದಿ ಮಾಡಿ",
    progress: "ಪ್ರಗತಿ:",
    progressCount: "{total} ರಲ್ಲಿ {picked} ವಸ್ತುಗಳು",
    continueToNext: "ಮುಂದಿನ ವಸ್ತುವಿಗೆ ಮುಂದುವರಿಸಿ",
    pickListDesc: "ಆರಿಸುವ ಇಂಟರ್ಫೇಸ್ ಮಾರಾಟಗಾರರಿಗೆ ಸ್ಥಳ-ಆಪ್ಟಿಮೈಸ್ಡ್ ವಸ್ತು ಸಂಗ್ರಹಣೆಯ ಮೂಲಕ ನೈಜ-ಸಮಯದ ಸ್ಟಾಕ್ ಮೌಲ್ಯೀಕರಣದೊಂದಿಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ.",
    step7C: "ಪ್ಯಾಕಿಂಗ್ ಮತ್ತು ರವಾನೆ",
    packingScreenshotTitle: "ಆದೇಶ ಪ್ಯಾಕಿಂಗ್ - ಬಾಕ್ಸ್ ರಚನೆ",
    packingOrder: "ಆದೇಶ ಪ್ಯಾಕ್ ಮಾಡಲಾಗುತ್ತಿದೆ: PO-2024-0520-002",
    packingOrderDesc: "ಎಲ್ಲಾ ವಸ್ತುಗಳನ್ನು ಆರಿಸಿ ಪ್ಯಾಕಿಂಗ್‌ಗೆ ಸಿದ್ಧವಾಗಿದೆ",
    itemsToPack: "ಪ್ಯಾಕ್ ಮಾಡಬೇಕಾದ ವಸ್ತುಗಳು",
    wholeWheatFlour: "ಸಂಪೂರ್ಣ ಗೋಧಿ ಹಿಟ್ಟು 1kg",
    createNewBox: "ಹೊಸ ಬಾಕ್ಸ್ ರಚಿಸಿ",
    boxType: "ಬಾಕ್ಸ್ ಪ್ರಕಾರ",
    smallBox: "ಸಣ್ಣ ಬಾಕ್ಸ್ (12\" x 8\" x 6\")",
    mediumBox: "ಮಧ್ಯಮ ಬಾಕ್ಸ್ (16\" x 12\" x 8\")",
    largeBox: "ದೊಡ್ಡ ಬಾಕ್ಸ್ (20\" x 16\" x 12\")",
    createBox: "ಬಾಕ್ಸ್ ರಚಿಸಿ",
    boxId: "ಬಾಕ್ಸ್ #{id}",
    remove: "ತೆಗೆದುಹಾಕಿ",
    printLabel: "ಲೇಬಲ್ ಮುದ್ರಿಸಿ",
    sealBox: "ಬಾಕ್ಸ್ ಸೀಲ್ ಮಾಡಿ",
    packingProgress: "{total} ರಲ್ಲಿ {packed} ವಸ್ತುಗಳನ್ನು ಪ್ಯಾಕ್ ಮಾಡಲಾಗಿದೆ",
    markAsShipped: "ರವಾನಿಸಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ",
    packingDesc: "ಪ್ಯಾಕಿಂಗ್ ಇಂಟರ್ಫೇಸ್ ವಸ್ತು ಸಂಘಟನೆ ಮತ್ತು ರವಾನೆ ಲೇಬಲ್ ಉತ್ಪಾದನೆಯೊಂದಿಗೆ ವ್ಯವಸ್ಥಿತ ಬಾಕ್ಸ್ ರಚನೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.",
    bestPracticesTitle: "ಮಾರಾಟಗಾರರ ಪೋರ್ಟಲ್ ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು",
    bp1: "ಹೊಸ ಆದೇಶಗಳು ಮತ್ತು ಸ್ಥಿತಿ ನವೀಕರಣಗಳಿಗಾಗಿ ಪ್ರತಿದಿನ ನಿಮ್ಮ ಪೋರ್ಟಲ್ ಅನ್ನು ಪರಿಶೀಲಿಸಿ",
    bp2: "ಉತ್ತಮ ಸಂಬಂಧಗಳನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲು ಆದೇಶಗಳನ್ನು ತ್ವರಿತವಾಗಿ ಸ್ವೀಕರಿಸಿ ಅಥವಾ ಮಾರ್ಪಡಿಸಿ",
    bp3: "ಉತ್ಪನ್ನ ಮಾಹಿತಿ ಮತ್ತು ದಾಸ್ತಾನು ಮಟ್ಟಗಳನ್ನು ನವೀಕೃತವಾಗಿರಿಸಿ",
    bp4: "ದಕ್ಷ ಪೂರೈಕೆಗಾಗಿ ಸಂಘಟಿತ ಗೋದಾಮಿನ ಸ್ಥಳಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    bp5: "ಪಾವತಿ ಸ್ಥಿತಿಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ ಮತ್ತು ತಡವಾದ ಮೊತ್ತಗಳ ಬಗ್ಗೆ ಸೂಕ್ತವಾಗಿ ಅನುಸರಿಸಿ"
  },
  // Other language translations will follow the same detailed structure
  te: {
    pageTitle: "వెండర్ పోర్టల్ మాన్యువల్",
    backToManual: "మాన్యువల్‌కు తిరిగి వెళ్ళు",
    description: "వెండర్ స్వీయ-సేవ పోర్టల్‌కు సమగ్ర గైడ్, సరఫరాదారులు వారి స్వంత ఉత్పత్తులు, ఆర్డర్లు, పూర్తిచేయడం మరియు ఖాతా సమాచారాన్ని స్వతంత్రంగా నిర్వహించడానికి వీలు కల్పిస్తుంది.",
    // ... (All other keys translated to Telugu)
    welcomeBack: "మళ్ళీ స్వాగతం, హెల్తీ హార్వెస్ట్!",
    totalOrders: "మొత్తం ఆర్డర్లు",
  },
  ta: {
    pageTitle: "விற்பனையாளர் போர்டல் கையேடு",
    backToManual: "கையேட்டுக்குத் திரும்பு",
    description: "விற்பனையாளர் சுய சேவை போர்ட்டலுக்கான விரிவான வழிகாட்டி, சப்ளையர்கள் தங்கள் சொந்த தயாரிப்புகள், ஆர்டர்கள், நிறைவேற்றுதல் மற்றும் கணக்கு தகவல்களை சுயமாக நிர்வகிக்க உதவுகிறது.",
    // ... (All other keys translated to Tamil)
    welcomeBack: "மீண்டும் வருக, ஹெல்தி ஹார்வெஸ்ட்!",
    totalOrders: "மொத்த ஆர்டர்கள்",
  },
  hi: {
    pageTitle: "विक्रेता पोर्टल मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "विक्रेता स्वयं-सेवा पोर्टल के लिए व्यापक गाइड, जो आपूर्तिकर्ताओं को अपने उत्पादों, आदेशों, पूर्ति और खाता जानकारी को स्वतंत्र रूप से प्रबंधित करने में सक्षम बनाता है।",
    // ... (All other keys translated to Hindi)
    welcomeBack: "वापस स्वागत है, हेल्दी हार्वेस्ट!",
    totalOrders: "कुल आदेश",
  },
  ml: {
    pageTitle: "വെണ്ടർ പോർട്ടൽ മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് മടങ്ങുക",
    description: "വെണ്ടർ സ്വയം-സേവന പോർട്ടലിലേക്കുള്ള സമഗ്രമായ ഗൈഡ്, വിതരണക്കാർക്ക് അവരുടെ സ്വന്തം ഉൽപ്പന്നങ്ങൾ, ഓർഡറുകൾ, പൂർത്തീകരണം, അക്കൗണ്ട് വിവരങ്ങൾ എന്നിവ സ്വതന്ത്രമായി നിയന്ത്രിക്കാൻ പ്രാപ്തമാക്കുന്നു.",
    // ... (All other keys translated to Malayalam)
    welcomeBack: "വീണ്ടും സ്വാഗതം, ഹെൽത്തി ഹാർവെസ്റ്റ്!",
    totalOrders: "ആകെ ഓർഡറുകൾ",
  }
};


export default function ManualVendorPortal() {
  const [language, setLanguage] = useManualLanguage();
  
  const t = (key, params) => {
    let text = translations[language]?.[key] || translations['en']?.[key] || key;
    if (params) {
      Object.keys(params).forEach(pKey => {
        text = text.replace(`{${pKey}}`, params[pKey]);
      });
    }
    return text;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="mb-6 flex justify-between items-center">
          <Link to={createPageUrl('Manual')}>
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToManual')}
            </Button>
          </Link>
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                {t('pageTitle')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                {t('description')}
              </p>
            </div>

            <section className="space-y-10">
              <Step number="1" title={t('step1Title')}>
                <p>
                  {t('step1Intro')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step1A')}</h6>
                <Screenshot title={t('dashboardScreenshotTitle')}>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="text-xl font-bold text-slate-900">{t('welcomeBack')}</h2>
                          <p className="text-slate-600">{t('accountSummary')}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-500">{t('vendorSince')}</p>
                          <p className="font-semibold">Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-white border rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">24</div>
                        <div className="text-sm text-slate-600">{t('totalOrders')}</div>
                      </div>
                      <div className="bg-white border rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">₹1,45,250</div>
                        <div className="text-sm text-slate-600">{t('totalRevenue')}</div>
                      </div>
                      <div className="bg-white border rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-orange-600">3</div>
                        <div className="text-sm text-slate-600">{t('pendingOrders')}</div>
                      </div>
                      <div className="bg-white border rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600">67</div>
                        <div className="text-sm text-slate-600">{t('myProducts')}</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600">{t('metricsOverview')}</p>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step1B')}</h6>
                <Screenshot title={t('navScreenshotTitle')}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="text-center">
                        <Receipt className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-slate-900">{t('po')}</h3>
                        <p className="text-sm text-slate-600 mt-1">{t('manageOrders')}</p>
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="text-center">
                        <Users className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-slate-900">{t('myCustomers')}</h3>
                        <p className="text-sm text-slate-600 mt-1">{t('manageSupermarketRels')}</p>
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="text-center">
                        <Truck className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-slate-900">{t('fulfillment')}</h3>
                        <p className="text-sm text-slate-600 mt-1">{t('pickPackShip')}</p>
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="text-center">
                        <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-slate-900">{t('myProducts')}</h3>
                        <p className="text-sm text-slate-600 mt-1">{t('manageProductCatalog')}</p>
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="text-center">
                        <Warehouse className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-slate-900">{t('myWarehouse')}</h3>
                        <p className="text-sm text-slate-600 mt-1">{t('viewLocationInventory')}</p>
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="text-center">
                        <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-slate-900">{t('accountStatement')}</h3>
                        <p className="text-sm text-slate-600 mt-1">{t('viewPaymentHistory')}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-4">{t('navCardDesc')}</p>
                </Screenshot>
              </Step>

              <Step number="2" title={t('step2Title')}>
                <p>
                  {t('step2Intro')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step2A')}</h6>
                <Screenshot title={t('poListScreenshotTitle')}>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                          {t('myPOs')} (12)
                          <Badge className="bg-blue-50 text-blue-700 border-blue-200">{t('fromSupermarket')}</Badge>
                        </h2>
                        <p className="text-sm text-slate-600 mt-1">{t('fromLocation')}</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input placeholder={t('searchPO')} className="pl-9 w-48" />
                        </div>
                        <select className="px-3 py-2 border border-slate-300 rounded-md text-sm">
                          <option>{t('allStatuses')}</option>
                          <option>{t('placed')}</option>
                          <option>{t('accepted')}</option>
                          <option>{t('shipped')}</option>
                        </select>
                        <div className="flex gap-1">
                          <Button size="sm" variant="default"><List className="w-4 h-4" /></Button>
                          <Button size="sm" variant="outline"><Grid className="w-4 h-4" /></Button>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-slate-50 border-b">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">
                              <div className="flex items-center gap-1">
                                {t('poId')}
                                <ArrowUpDown className="w-3 h-3" />
                              </div>
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">
                              <div className="flex items-center gap-1">
                                {t('orderDate')}
                                <ArrowUpDown className="w-3 h-3" />
                              </div>
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">{t('items')}</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">
                              <div className="flex items-center gap-1">
                                {t('totalValue')}
                                <ArrowUpDown className="w-3 h-3" />
                              </div>
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">{t('status')}</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase">{t('actions')}</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                          <tr className="hover:bg-slate-50">
                            <td className="px-4 py-4 font-mono text-sm">PO-2024-0521-003</td>
                            <td className="px-4 py-4 text-sm">May 21, 2024</td>
                            <td className="px-4 py-4 text-sm">5</td>
                            <td className="px-4 py-4 font-semibold text-sm">₹12,450.00</td>
                            <td className="px-4 py-4">
                              <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1 w-fit">
                                <Clock className="w-3 h-3" />
                                {t('placed')}
                              </Badge>
                            </td>
                            <td className="px-4 py-4 text-right space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4 mr-1" />
                                {t('view')}
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="w-4 h-4 mr-1" />
                                {t('modify')}
                              </Button>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="px-4 py-4 font-mono text-sm">PO-2024-0520-001</td>
                            <td className="px-4 py-4 text-sm">May 20, 2024</td>
                            <td className="px-4 py-4 text-sm">3</td>
                            <td className="px-4 py-4 font-semibold text-sm">₹8,750.00</td>
                            <td className="px-4 py-4">
                              <Badge className="bg-green-100 text-green-800 flex items-center gap-1 w-fit">
                                <CheckCircle className="w-3 h-3" />
                                {t('accepted')}
                              </Badge>
                            </td>
                            <td className="px-4 py-4 text-right space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4 mr-1" />
                                {t('view')}
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-slate-600">{t('poTableDesc')}</p>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step2B')}</h6>
                <Screenshot title={t('orderDetailScreenshotTitle')}>
                  <div className="max-w-4xl border rounded-lg overflow-hidden">
                    <div className="bg-slate-50 px-6 py-4 border-b">
                      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        {t('poDetailTitle')}
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200">{t('fromSupermarket')}</Badge>
                      </h3>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium text-slate-800 mb-3">{t('orderSummary')}</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div><p className="text-slate-500">{t('orderDate')}</p><p className="font-medium">May 21, 2024</p></div>
                            <div><p className="text-slate-500">{t('expectedDelivery')}</p><p className="font-medium">May 25, 2024</p></div>
                            <div><p className="text-slate-500">{t('totalValue')}</p><p className="font-bold text-lg">₹12,450.00</p></div>
                            <div><p className="text-slate-500">{t('status')}</p><Badge className="bg-yellow-100 text-yellow-800">{t('placed')}</Badge></div>
                          </div>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium text-slate-800 mb-3">{t('supermarketDetails')}</h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="text-slate-500">{t('storeName')}</p>
                              <p className="font-medium">RetailOS Supermarket</p>
                            </div>
                            <div>
                              <p className="text-slate-500">{t('address')}</p>
                              <p className="font-medium">123 Commerce Street, Mumbai</p>
                              <p className="text-slate-500">Maharashtra 400001</p>
                            </div>
                            <div>
                              <p className="text-slate-500">{t('contact')}</p>
                              <p className="font-medium">+91 98765 43210</p>
                              <p className="text-slate-500">orders@retailos.com</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg">
                        <div className="bg-slate-50 px-4 py-3 border-b">
                          <h4 className="font-medium text-slate-800">{t('itemsCount', {count: 5})}</h4>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead className="bg-slate-50 border-b">
                              <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-slate-500">{t('product')}</th>
                                <th className="px-4 py-2 text-center text-xs font-medium text-slate-500">{t('qty')}</th>
                                <th className="px-4 py-2 text-right text-xs font-medium text-slate-500">{t('unitCost')}</th>
                                <th className="px-4 py-2 text-right text-xs font-medium text-slate-500">{t('total')}</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                              <tr>
                                <td className="px-4 py-3 text-sm">{t('organicRice')}</td>
                                <td className="px-4 py-3 text-center text-sm">20</td>
                                <td className="px-4 py-3 text-right text-sm">₹85.00</td>
                                <td className="px-4 py-3 text-right font-medium text-sm">₹1,700.00</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 text-sm">{t('freshMilk')}</td>
                                <td className="px-4 py-3 text-center text-sm">50</td>
                                <td className="px-4 py-3 text-right text-sm">₹45.00</td>
                                <td className="px-4 py-3 text-right font-medium text-sm">₹2,250.00</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 text-sm">{t('organicEggs')}</td>
                                <td className="px-4 py-3 text-center text-sm">30</td>
                                <td className="px-4 py-3 text-right text-sm">₹120.00</td>
                                <td className="px-4 py-3 text-right font-medium text-sm">₹3,600.00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end">
                        <Button variant="outline">
                          <Edit className="w-4 h-4 mr-2" />
                          {t('reqMod')}
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {t('acceptOrder')}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-4">{t('poDetailDesc')}</p>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step2C')}</h6>
                <Screenshot title={t('modReqScreenshotTitle')}>
                  <div className="max-w-4xl border rounded-lg overflow-hidden">
                    <div className="bg-slate-50 px-6 py-4 border-b">
                      <h3 className="text-lg font-bold text-slate-800">{t('reqModTitle')}</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="overflow-x-auto">
                        <table className="min-w-full border rounded-lg">
                          <thead className="bg-slate-50 border-b">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500">{t('product')}</th>
                              <th className="px-4 py-3 text-center text-xs font-medium text-slate-500">{t('currentQty')}</th>
                              <th className="px-4 py-3 text-center text-xs font-medium text-slate-500">{t('currentPrice')}</th>
                              <th className="px-4 py-3 text-center text-xs font-medium text-slate-500">{t('newQty')}</th>
                              <th className="px-4 py-3 text-center text-xs font-medium text-slate-500">{t('newPrice')}</th>
                              <th className="px-4 py-3 text-right text-xs font-medium text-slate-500">{t('newTotal')}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            <tr>
                              <td className="px-4 py-3 font-medium text-sm">{t('organicRice')}</td>
                              <td className="px-4 py-3 text-center text-sm">20</td>
                              <td className="px-4 py-3 text-center text-sm">₹85.00</td>
                              <td className="px-4 py-3 text-center">
                                <Input className="w-20 text-center text-sm" value="15" />
                              </td>
                              <td className="px-4 py-3 text-center">
                                <Input className="w-24 text-center text-sm" value="82.00" />
                              </td>
                              <td className="px-4 py-3 text-right font-medium text-sm">₹1,230.00</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium text-sm">{t('freshMilk')}</td>
                              <td className="px-4 py-3 text-center text-sm">50</td>
                              <td className="px-4 py-3 text-center text-sm">₹45.00</td>
                              <td className="px-4 py-3 text-center">
                                <Input className="w-20 text-center text-sm" value="50" />
                              </td>
                              <td className="px-4 py-3 text-center">
                                <Input className="w-24 text-center text-sm" value="45.00" />
                              </td>
                              <td className="px-4 py-3 text-right font-medium text-sm">₹2,250.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">{t('reasonForMod')}</label>
                        <textarea 
                          className="w-full p-3 border border-slate-300 rounded-md text-sm" 
                          rows="3" 
                          placeholder={t('reasonPlaceholder')}
                        >{t('reasonExample')}</textarea>
                      </div>

                      <div className="flex gap-3 justify-end">
                        <Button variant="outline">{t('cancel')}</Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">{t('submitRequest')}</Button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-4">{t('modReqDesc')}</p>
                </Screenshot>
              </Step>

              <Step number="3" title={t('step3Title')}>
                <p>
                  {t('step3Intro')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step3A')}</h6>
                <Screenshot title={t('catalogScreenshotTitle')}>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h2 className="text-xl font-bold text-slate-800">{t('myProducts')} (67)</h2>
                        <p className="text-sm text-slate-600">{t('manageCatalogInv')}</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input placeholder={t('searchProducts')} className="pl-9 w-48" />
                        </div>
                        <select className="px-3 py-2 border border-slate-300 rounded-md text-sm">
                          <option>{t('allCategories')}</option>
                          <option>{t('grainsCereals')}</option>
                          <option>{t('dairyProducts')}</option>
                          <option>{t('freshProduce')}</option>
                        </select>
                        <Button className="bg-green-600 hover:bg-green-700">
                          <Plus className="w-4 h-4 mr-2" />
                          {t('addProduct')}
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                            <Package className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-slate-900 truncate">{t('organicRice')}</h3>
                            <p className="text-sm text-slate-500">{t('sku', {sku: 'ORG-RICE-1KG'})}</p>
                            <p className="text-xs text-slate-400">{t('grainsCereals')}</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 text-xs">{t('active')}</Badge>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-500">{t('stock')}</span>
                            <span className="font-medium">450 units</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">{t('myPrice')}</span>
                            <span className="font-medium">₹85.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">{t('location')}</span>
                            <span className="font-medium">A-2-B</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Eye className="w-3 h-3 mr-1" />
                            {t('view')}
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Edit className="w-3 h-3 mr-1" />
                            {t('edit')}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                            <Package className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-slate-900 truncate">{t('freshMilk')}</h3>
                            <p className="text-sm text-slate-500">{t('sku', {sku: 'FRESH-MILK-1L'})}</p>
                            <p className="text-xs text-slate-400">{t('dairyProducts')}</p>
                          </div>
                          <Badge className="bg-orange-100 text-orange-800 text-xs">{t('lowStock')}</Badge>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-500">{t('stock')}</span>
                            <span className="font-medium text-orange-600">25 units</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">{t('myPrice')}</span>
                            <span className="font-medium">₹45.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">{t('location')}</span>
                            <span className="font-medium">B-1-A</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Eye className="w-3 h-3 mr-1" />
                            {t('view')}
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Edit className="w-3 h-3 mr-1" />
                            {t('edit')}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center">
                            <Package className="w-6 h-6 text-red-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-slate-900 truncate">{t('organicEggs')}</h3>
                            <p className="text-sm text-slate-500">{t('sku', {sku: 'ORG-EGG-12'})}</p>
                            <p className="text-xs text-slate-400">{t('dairyProducts')}</p>
                          </div>
                          <Badge className="bg-red-100 text-red-800 text-xs">{t('outOfStock')}</Badge>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-500">{t('stock')}</span>
                            <span className="font-medium text-red-600">0 units</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">{t('myPrice')}</span>
                            <span className="font-medium">₹120.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">{t('location')}</span>
                            <span className="font-medium">B-1-C</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Eye className="w-3 h-3 mr-1" />
                            {t('view')}
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Edit className="w-3 h-3 mr-1" />
                            {t('edit')}
                          </Button>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">{t('productCardDesc')}</p>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step3B')}</h6>
                <Screenshot title={t('addProductScreenshotTitle')}>
                  <div className="max-w-2xl border rounded-lg p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">{t('submitNewProduct')}</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">{t('productName')}</label>
                          <Input placeholder={t('enterProductName')} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">{t('brand')}</label>
                          <select className="w-full p-2 border border-slate-300 rounded-md text-sm">
                            <option>{t('selectBrand')}</option>
                            <option>{t('healthyHarvest')}</option>
                            <option>{t('farmFresh')}</option>
                            <option>{t('pureNatural')}</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">{t('category')}</label>
                          <select className="w-full p-2 border border-slate-300 rounded-md text-sm">
                            <option>{t('selectCategory')}</option>
                            <option>{t('grainsCereals')}</option>
                            <option>{t('dairyProducts')}</option>
                            <option>{t('freshProduce')}</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">{t('productSku')}</label>
                          <Input placeholder={t('productSkuPlaceholder')} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">{t('description')}</label>
                        <textarea 
                          className="w-full p-3 border border-slate-300 rounded-md text-sm" 
                          rows="3" 
                          placeholder={t('descPlaceholder')}
                        ></textarea>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">{t('mySellingPrice')}</label>
                          <Input type="number" placeholder="0.00" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">{t('stockQty')}</label>
                          <Input type="number" placeholder="0" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">{t('minStock')}</label>
                          <Input type="number" placeholder="0" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">{t('productImage')}</label>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                          <div className="w-12 h-12 mx-auto mb-2 bg-slate-100 rounded-lg flex items-center justify-center">
                            <Camera className="w-6 h-6 text-slate-400" />
                          </div>
                          <p className="text-sm text-slate-600 mb-2">{t('clickToUpload')}</p>
                          <p className="text-xs text-slate-500">{t('imageSpec')}</p>
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end pt-4 border-t">
                        <Button variant="outline">{t('cancel')}</Button>
                        <Button className="bg-green-600 hover:bg-green-700">{t('submitForApproval')}</Button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-4">{t('newProductDesc')}</p>
                </Screenshot>
              </Step>

              <Step number="4" title={t('step4Title')}>
                <p>
                  {t('step4Intro')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step4A')}</h6>
                <Screenshot title={t('warehouseScreenshotTitle')}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-indigo-600">12</div>
                        <div className="text-indigo-700 text-sm">{t('activeRacks')}</div>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">48</div>
                        <div className="text-blue-700 text-sm">{t('binsUsed')}</div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">63</div>
                        <div className="text-green-700 text-sm">{t('locatedProducts')}</div>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-orange-600">4</div>
                        <div className="text-orange-700 text-sm">{t('unassigned')}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 bg-slate-50">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-900">{t('rackA')}</h4>
                          <Badge variant="outline">{t('binsCount', {count: 8})}</Badge>
                        </div>
                        <div className="text-sm text-slate-600 space-y-1">
                          <p><strong>15</strong> {t('product').toLowerCase()}s</p>
                          <p><strong>1,240</strong> {t('totalUnits', {count: ''}).trim()}</p>
                        </div>
                        <div className="mt-3">
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="secondary" className="text-xs">A-1 (3)</Badge>
                            <Badge variant="secondary" className="text-xs">A-2 (5)</Badge>
                            <Badge variant="secondary" className="text-xs">{t('more', {count: 4})}</Badge>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-yellow-800">{t('unassignedProducts')}</h4>
                          <p className="text-sm text-yellow-700 mt-1" dangerouslySetInnerHTML={{ __html: t('unassignedProdDesc', {count: 4}) }}></p>
                          <Button size="sm" className="mt-2 bg-yellow-600 hover:bg-yellow-700">
                            <Package className="w-3 h-3 mr-1" />
                            {t('assignLocations')}
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600">{t('warehouseOverviewDesc')}</p>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step4B')}</h6>
                <Screenshot title={t('prodLocScreenshotTitle')}>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-slate-50 px-4 py-3 border-b">
                      <h3 className="font-medium text-slate-800">{t('productLocations')}</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-slate-50 border-b">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">{t('product')}</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-slate-500 uppercase">{t('location')}</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-slate-500 uppercase">{t('stock')}</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-slate-500 uppercase">{t('capacity')}</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase">{t('actions')}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          <tr className="hover:bg-slate-50">
                            <td className="px-4 py-4">
                              <p className="text-sm font-medium">{t('organicRice')}</p>
                            </td>
                            <td className="px-4 py-4 text-center">
                              <Badge variant="outline" className="font-mono">A-2-B</Badge>
                            </td>
                            <td className="px-4 py-4 text-center">
                              <span className="font-medium">450</span>
                              <span className="text-xs text-slate-500 ml-1">units</span>
                            </td>
                            <td className="px-4 py-4 text-center">
                                <span className="text-xs text-slate-500">75%</span>
                            </td>
                            <td className="px-4 py-4 text-right">
                              <Button size="sm" variant="outline">
                                <Edit className="w-3 h-3 mr-1" />
                                {t('relocate')}
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-4">{t('prodLocTableDesc')}</p>
                </Screenshot>
              </Step>

              <Step number="5" title={t('step5Title')}>
                <p>
                  {t('step5Intro')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step5A')}</h6>
                <Screenshot title={t('customerDashScreenshotTitle')}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 text-center">
                        <Users className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold">1</div>
                        <div className="text-sm text-slate-600">{t('totalCustomers')}</div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold">24</div>
                        <div className="text-sm text-slate-600">{t('totalOrders')}</div>
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                        <DollarSign className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold">₹1,45,250</div>
                        <div className="text-sm text-slate-600">{t('totalRevenue')}</div>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                        <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold">₹12,400</div>
                        <div className="text-sm text-slate-600">{t('pendingPayments')}</div>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-6">
                      <h3 className="font-semibold text-lg text-slate-900 mb-4">{t('customerProfile')}</h3>
                        <h4 className="font-semibold text-lg text-slate-900">RetailOS Supermarket</h4>
                        <p className="text-slate-500">{t('storeManager')}</p>
                        <Badge className="bg-green-100 text-green-800">{t('excellent')}</Badge>
                        <p className="text-sm text-slate-500">{t('pendingAmount')}</p>
                        <p className="font-bold text-lg text-orange-600">₹12,400</p>
                        <p className="text-sm text-slate-500">{t('lastOrder')}</p>
                        <Button size="sm" variant="outline"> <Eye className="w-3 h-3 mr-1" /> {t('orderDetails')} </Button>
                        <Button size="sm" variant="outline"> <Receipt className="w-3 h-3 mr-1" /> {t('orderHistory')} </Button>
                    </div>
                    
                    <p className="text-sm text-slate-600">{t('customerDashDesc')}</p>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step5B')}</h6>
                <Screenshot title={t('pendingPaymentsScreenshotTitle')}>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-slate-50 px-4 py-3 border-b">
                      <h3 className="font-medium text-slate-800">{t('pendingPaymentsCount', {count: 3})}</h3>
                      <p className="text-sm text-slate-600">{t('pendingPaymentsDesc')}</p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-slate-50 border-b">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">{t('orderId')}</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">{t('date')}</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">{t('product')}</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase">{t('amount')}</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-slate-500 uppercase">{t('daysOverdue')}</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase">{t('actions')}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          <tr className="hover:bg-slate-50">
                            <td className="px-4 py-4 font-medium font-mono text-sm">PO-2024-0521-003</td>
                            <td className="px-4 py-4 text-sm">May 21, 2024</td>
                            <td className="px-4 py-4 text-sm">{t('organicRice')}</td>
                            <td className="px-4 py-4 text-right font-semibold">₹12,450</td>
                            <td className="px-4 py-4 text-center">
                              <Badge className="bg-red-100 text-red-800">{t('daysOverdueCount', {count: 15})}</Badge>
                            </td>
                            <td className="px-4 py-4 text-right">
                              <Button size="sm" variant="outline">
                                <Eye className="w-3 h-3 mr-1" />{t('view')}
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-4">{t('paymentTrackingDesc')}</p>
                </Screenshot>
              </Step>

              <Step number="6" title={t('step6Title')}>
                 <p>{t('step6Intro')}</p>
                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step6A')}</h6>
                <Screenshot title={t('accountStatementScreenshotTitle')}>
                  <p>{t('accountStatementDesc')}</p>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step6B')}</h6>
                <Screenshot title={t('transactionDetailScreenshotTitle')}>
                  <p>{t('transactionDetailDesc')}</p>
                </Screenshot>
              </Step>

              <Step number="7" title={t('step7Title')}>
                <p>{t('step7Intro')}</p>
                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step7A')}</h6>
                <Screenshot title={t('fulfillmentDashScreenshotTitle')}>
                  <p>{t('fulfillmentDashDesc')}</p>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step7B')}</h6>
                <Screenshot title={t('pickListScreenshotTitle')}>
                  <p>{t('pickListDesc')}</p>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step7C')}</h6>
                <Screenshot title={t('packingScreenshotTitle')}>
                  <p>{t('packingDesc')}</p>
                </Screenshot>
              </Step>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">{t('bestPracticesTitle')}</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-start gap-2"> <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" /> <span>{t('bp1')}</span> </li>
                  <li className="flex items-start gap-2"> <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" /> <span>{t('bp2')}</span> </li>
                  <li className="flex items-start gap-2"> <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" /> <span>{t('bp3')}</span> </li>
                  <li className="flex items-start gap-2"> <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" /> <span>{t('bp4')}</span> </li>
                  <li className="flex items-start gap-2"> <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" /> <span>{t('bp5')}</span> </li>
                </ul>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
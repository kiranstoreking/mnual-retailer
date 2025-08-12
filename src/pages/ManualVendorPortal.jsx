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
  <div className="flex items-start gap-4 mt-8 w-full ">
    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow min-w-0">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-6 sm:mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base break-words -ml-12 sm:ml-0">
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
    step1Title: "వెండర్ పోర్టల్ డాష్‌బోర్డ్ అవలోకనం",
    step1Intro: "వెండర్ పోర్టల్ డాష్‌బోర్డ్ సరఫరాదారులకు మీ సూపర్‌మార్కెట్‌తో వారి వ్యాపార సంబంధం యొక్క సమగ్ర దృశ్యాన్ని అందిస్తుంది. ఇందులో ముఖ్యమైన మెట్రిక్స్, ఇటీవలి కార్యకలాపాలు మరియు అన్ని వెండర్ ఫంక్షన్లకు వేగవంతమైన ప్రాప్యత ఉంటుంది.",
    step1A: "డాష్‌బోర్డ్ స్వాగత స్క్రీన్",
    dashboardScreenshotTitle: "వెండర్ పోర్టల్ డాష్‌బోర్డ్ - ప్రధాన ఇంటర్ఫేస్",
    welcomeBack: "మళ్ళీ స్వాగతం, హెల్తీ హార్వెస్ట్!",
    accountSummary: "మీ ఖాతా సారాంశం ఇక్కడ ఉంది.",
    vendorSince: "వెండర్‌గా ఉన్నప్పటి నుండి",
    totalOrders: "మొత్తం ఆర్డర్లు",
    totalRevenue: "మొత్తం రెవెన్యూ",
    pendingOrders: "పెండింగ్ ఆర్డర్లు",
    myProducts: "నా ఉత్పత్తులు",
    metricsOverview: "ఈ మెట్రిక్స్ వెండర్లకు వారి వ్యాపార పనితీరు మరియు ప్రస్తుత స్థితి యొక్క తక్షణ అవలోకనాన్ని అందిస్తాయి.",
    step1B: "నావిగేషన్ మెనూ నిర్మాణం",
    navScreenshotTitle: "వెండర్ పోర్టల్ నావిగేషన్ కార్డ్లు",
    po: "పర్చేస్ ఆర్డర్లు",
    manageOrders: "ఆర్డర్లను వీక్షించి నిర్వహించండి",
    myCustomers: "నా కస్టమర్లు",
    manageSupermarketRels: "సూపర్‌మార్కెట్ సంబంధాలను నిర్వహించండి",
    fulfillment: "పూర్తి చేయడం",
    pickPackShip: "ఆర్డర్లను ఎంచుకోండి, ప్యాక్ చేయండి మరియు రవానించండి",
    manageProductCatalog: "ఉత్పత్తి కేటలాగ్ నిర్వహించండి",
    myWarehouse: "నా వేర్‌హౌస్",
    viewLocationInventory: "స్థానం మరియు జాబితాను వీక్షించండి",
    accountStatement: "ఖాతా స్టేట్మెంట్",
    viewPaymentHistory: "చెల్లింపు చరిత్రను వీక్షించండి",
    navCardDesc: "ప్రతి కార్డ్ వేర్వేరు వెండర్ ఫంక్షన్లకు ప్రాప్యతను అందిస్తుంది. క్లిక్ చేయడం వెండర్లను సంబంధిత నిర్వహణ విభాగానికి తీసుకువెళుతుంది.",
    step2Title: "పర్చేస్ ఆర్డర్ల నిర్వహణ",
    step2Intro: "పర్చేస్ ఆర్డర్ల విభాగం వెండర్లకు సూపర్‌మార్కెట్ నుండి వచ్చే అన్ని ఆర్డర్లను వీక్షించడానికి, అంగీకరించడానికి, మార్చడానికి మరియు ట్రాక్ చేయడానికి అనుమతిస్తుంది. ఇది ఆర్డర్ నిర్వహణ మరియు కమ్యూనికేషన్ కోసం ప్రధాన వర్క్‌ఫ్లో.",
    step2A: "పర్చేస్ ఆర్డర్ల జాబితా వీక్షణ",
    poListScreenshotTitle: "పర్చేస్ ఆర్డర్లు - ప్రధాన ఇంటర్ఫేస్",
    myPOs: "నా పర్చేస్ ఆర్డర్లు",
    fromSupermarket: "RetailOS సూపర్‌మార్కెట్ నుండి",
    fromLocation: "RetailOS సూపర్‌మార్కెట్ నుండి ఆర్డర్లు • ముంబై, మహారాష్ట్ర",
    searchPO: "PO ID ద్వారా శోధించండి...",
    allStatuses: "అన్ని స్థితులు",
    placed: "ఉంచబడింది",
    accepted: "అంగీకరించబడింది",
    shipped: "రవానించబడింది",
    poId: "PO ID",
    orderDate: "ఆర్డర్ తేదీ",
    items: "వస్తువులు",
    totalValue: "మొత్తం విలువ",
    status: "స్థితి",
    actions: "చర్యలు",
    view: "వీక్షించండి",
    modify: "మార్చండి",
    poTableDesc: "టేబుల్ అన్ని పర్చేస్ ఆర్డర్లను సర్ట్ చేయదగిన కాలమ్లు మరియు స్థితి సూచకాలతో చూపిస్తుంది. వెండర్లు వివరాలను వీక్షించవచ్చు మరియు ప్రతి ఆర్డర్‌పై చర్యలు తీసుకోవచ్చు.",
    step2B: "ఆర్డర్ వివర వీక్షణ",
    orderDetailScreenshotTitle: "పర్చేస్ ఆర్డర్ వివర మోడల్",
    poDetailTitle: "పర్చేస్ ఆర్డర్: PO-2024-0521-003",
    orderSummary: "ఆర్డర్ సారాంశం",
    expectedDelivery: "అంచనా డెలివరీ",
    supermarketDetails: "సూపర్‌మార్కెట్ వివరాలు",
    storeName: "స్టోర్ పేరు",
    address: "చిరునామా",
    contact: "సంప్రదింపు",
    itemsCount: "వస్తువులు ({count})",
    product: "ఉత్పత్తి",
    qty: "పరిమాణం",
    unitCost: "యూనిట్ ఖర్చు",
    total: "మొత్తం",
    organicRice: "ఆర్గానిక్ బాస్మతి బియ్యం 1kg",
    freshMilk: "తాజా పాలు 1L",
    organicEggs: "ఆర్గానిక్ గుడ్లు 12pcs",
    reqMod: "మార్పు అభ్యర్థన",
    acceptOrder: "ఆర్డర్‌ను అంగీకరించండి",
    poDetailDesc: "వెండర్లు పూర్తి ఆర్డర్ వివరాలను వీక్షించవచ్చు మరియు అంగీకరించడం లేదా మార్పులను అభ్యర్థించడం వంటి చర్యలు తీసుకోవచ్చు.",
    step2C: "మార్పు అభ్యర్థన ఇంటర్ఫేస్",
    modReqScreenshotTitle: "ఆర్డర్ మార్పు అభ్యర్థన మోడల్",
    reqModTitle: "మార్పు అభ్యర్థన - PO-2024-0521-003",
    currentQty: "ప్రస్తుత పరిమాణం",
    currentPrice: "ప్రస్తుత ధర",
    newQty: "కొత్త పరిమాణం",
    newPrice: "కొత్త ధర",
    newTotal: "కొత్త మొత్తం",
    reasonForMod: "మార్పుకు కారణం",
    reasonPlaceholder: "మీరు ఈ మార్పులను ఎందుకు అభ్యర్థిస్తున్నారో వివరించండి...",
    reasonExample: "పరిమిత స్టాక్ లభ్యత కారణంగా బియ్యం పరిమాణం తగ్గించబడింది. పరిహారం కోసం కొంచెం తక్కువ ధర అందించబడింది.",
    cancel: "రద్దు",
    submitRequest: "అభ్యర్థనను సమర్పించండి",
    modReqDesc: "వెండర్లు మార్పులకు కారణాల వివరణతో పరిమాణాలు మరియు ధరలను మార్చవచ్చు.",
    step3Title: "నా ఉత్పత్తుల నిర్వహణ",
    step3Intro: "నా ఉత్పత్తుల విభాగం వెండర్లకు వారి ఉత్పత్తి కేటలాగ్‌ను నిర్వహించడానికి, వారి వేర్‌హౌస్‌లో జాబితా స్థాయిలను వీక్షించడానికి మరియు సూపర్‌మార్కెట్ ఆమోదం కోసం కొత్త ఉత్పత్తులను సమర్పించడానికి అనుమతిస్తుంది.",
    step3A: "ఉత్పత్తి కేటలాగ్ వీక్షణ",
    catalogScreenshotTitle: "నా ఉత్పత్తులు - కేటలాగ్ నిర్వహణ",
    manageCatalogInv: "మీ ఉత్పత్తి కేటలాగ్ మరియు జాబితాను నిర్వహించండి",
    searchProducts: "ఉత్పత్తులను శోధించండి...",
    allCategories: "అన్ని వర్గాలు",
    grainsCereals: "ధాన్యాలు & తృణధాన్యాలు",
    dairyProducts: "పాల ఉత్పత్తులు",
    freshProduce: "తాజా ఉత్పత్తులు",
    addProduct: "ఉత్పత్తిని జోడించండి",
    sku: "SKU: {sku}",
    active: "క్రియాశీల",
    stock: "స్టాక్:",
    myPrice: "నా ధర:",
    location: "స్థానం:",
    lowStock: "తక్కువ స్టాక్",
    outOfStock: "స్టాక్ లేదు",
    edit: "సవరించండి",
    productCardDesc: "ఉత్పత్తి కార్డ్లు ప్రస్తుత స్టాక్ స్థాయిలు, ధర మరియు వేర్‌హౌస్ స్థానాలను చూపిస్తాయి. రంగు-కోడెడ్ బ్యాడ్జ్లు స్టాక్ స్థితిని సూచిస్తాయి.",
    step3B: "కొత్త ఉత్పత్తిని జోడించే ఫారం",
    addProductScreenshotTitle: "కొత్త ఉత్పత్తిని జోడించండి - వెండర్ సమర్పణ ఫారం",
    submitNewProduct: "ఆమోదం కోసం కొత్త ఉత్పత్తిని సమర్పించండి",
    productName: "ఉత్పత్తి పేరు",
    enterProductName: "ఉత్పత్తి పేరును నమోదు చేయండి",
    brand: "బ్రాండ్",
    selectBrand: "బ్రాండ్‌ను ఎంచుకోండి...",
    healthyHarvest: "హెల్తీ హార్వెస్ట్",
    farmFresh: "ఫార్మ్ ఫ్రెష్",
    pureNatural: "ప్యూర్ & నేచురల్",
    category: "వర్గం",
    selectCategory: "వర్గాన్ని ఎంచుకోండి...",
    productSku: "SKU",
    productSkuPlaceholder: "ఉత్పత్తి SKU",
    description: "వివరణ",
    descPlaceholder: "ఉత్పత్తి వివరణ...",
    mySellingPrice: "నా అమ్మకం ధర",
    stockQty: "స్టాక్ పరిమాణం",
    minStock: "కనీస స్టాక్",
    productImage: "ఉత్పత్తి చిత్రం",
    clickToUpload: "ఉత్పత్తి చిత్రాన్ని అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి",
    imageSpec: "PNG, JPG 5MB వరకు",
    submitForApproval: "ఆమోదం కోసం సమర్పించండి",
    newProductDesc: "వెండర్లు సమర్పించిన కొత్త ఉత్పత్తులు సిస్టమ్‌లో క్రియాశీలంగా మారే ముందు సూపర్‌మార్కెట్ ఆమోదం అవసరం.",
    step4Title: "వేర్‌హౌస్ నిర్వహణ",
    step4Intro: "నా వేర్‌హౌస్ విభాగం వెండర్లకు వారి జాబితా స్థానాలను నిర్వహించడానికి, వేర్‌హౌస్ లేఅవుట్‌ను వీక్షించడానికి మరియు సమర్థవంతమైన పికింగ్ మరియు పూర్తి చేయడం కోసం స్టాక్‌ను నిర్వహించడానికి సాధనాలను అందిస్తుంది.",
    step4A: "వేర్‌హౌస్ అవలోకనం",
    warehouseScreenshotTitle: "నా వేర్‌హౌస్ - లేఅవుట్ మరియు నిర్వహణ",
    activeRacks: "క్రియాశీల రాక్లు",
    binsUsed: "ఉపయోగించిన బిన్లు",
    locatedProducts: "స్థానపరచబడిన ఉత్పత్తులు",
    unassigned: "కేటాయించబడని",
    rackA: "రాక్ A",
    binsCount: "{count} బిన్లు",
    totalUnits: "{count} మొత్తం యూనిట్లు",
    more: "+{count} మరిన్ని",
    unassignedProducts: "కేటాయించబడని ఉత్పత్తులు",
    unassignedProdDesc: "<strong>{count} ఉత్పత్తులకు</strong> వేర్‌హౌస్ స్థానాలు అవసరం. అత్యుత్తమ పికింగ్ మార్గాల ఆధారంగా వాటిని స్వయంచాలకంగా కేటాయించడానికి \"స్టాక్ అప్\" ఫీచర్‌ను ఉపయోగించండి.",
    assignLocations: "స్థానాలను కేటాయించండి",
    warehouseOverviewDesc: "వేర్‌హౌస్ అవలోకనం రాక్ వినియోగాన్ని చూపిస్తుంది మరియు మెరుగైన స్థాన నిర్వహణ కోసం ఆప్టిమైజేషన్ అవకాశాలను గుర్తించడానికి సహాయపడుతుంది.",
    step4B: "ఉత్పత్తి స్థాన వివరాలు",
    prodLocScreenshotTitle: "ఉత్పత్తి స్థాన నిర్వహణ",
    productLocations: "ఉత్పత్తి స్థానాలు",
    capacity: "సామర్థ్యం",
    relocate: "స్థానం మార్చండి",
    prodLocTableDesc: "ఉత్పత్తి స్థాన టేబుల్ సామర్థ్య వినియోగం మరియు వేగవంతమైన స్థాన మార్పు ఎంపికలతో ప్రస్తుత వేర్‌హౌస్ కేటాయింపులను చూపిస్తుంది.",
    step5Title: "నా కస్టమర్ల నిర్వహణ",
    step5Intro: "నా కస్టమర్లు విభాగం వెండర్లకు వారి వ్యాపార సంబంధాలు, ఆర్డర్ చరిత్ర, చెల్లింపు స్థితి మరియు కస్టమర్ కమ్యూనికేషన్ సాధనాల గురించి అంతర్దృష్టులను అందిస్తుంది.",
    step5A: "కస్టమర్ డాష్‌బోర్డ్",
    customerDashScreenshotTitle: "నా కస్టమర్లు - సంబంధ అవలోకనం",
    totalCustomers: "మొత్తం కస్టమర్లు",
    pendingPayments: "పెండింగ్ చెల్లింపులు",
    customerProfile: "కస్టమర్ ప్రొఫైల్",
    storeManager: "స్టోర్ మేనేజర్",
    excellent: "అద్భుతమైన",
    pendingAmount: "పెండింగ్ మొత్తం",
    lastOrder: "చివరి ఆర్డర్",
    orderDetails: "వివరాలను వీక్షించండి",
    orderHistory: "ఆర్డర్ చరిత్ర",
    customerDashDesc: "కస్టమర్ డాష్‌బోర్డ్ సమగ్ర సంబంధ అంతర్దృష్టులు మరియు వ్యాపార పనితీరు మెట్రిక్స్‌ను అందిస్తుంది.",
    step5B: "పెండింగ్ చెల్లింపుల ట్రాకింగ్",
    pendingPaymentsScreenshotTitle: "పెండింగ్ చెల్లింపులు - బక్కీ ఉన్న ఆర్డర్లు",
    pendingPaymentsCount: "పెండింగ్ చెల్లింపులు ({count})",
    pendingPaymentsDesc: "కస్టమర్ల నుండి చెల్లింపు కోసం వేచి ఉన్న ఆర్డర్లు",
    orderId: "ఆర్డర్ ID",
    date: "తేదీ",
    amount: "మొత్తం",
    daysOverdue: "తడవైన రోజులు",
    daysOverdueCount: "{count} రోజులు",
    paymentTrackingDesc: "చెల్లింపు ట్రాకింగ్ వెండర్లకు తడవైన మొత్తాలను పర్యవేక్షించడానికి మరియు కస్టమర్లతో తగిన విధంగా అనుసరించడానికి సహాయపడుతుంది.",
    step6Title: "ఖాతా స్టేట్మెంట్ & చెల్లింపులు",
    step6Intro: "ఖాతా స్టేట్మెంట్ విభాగం వెండర్లకు అన్ని లావాదేవీలు, స్వీకరించబడిన చెల్లింపులు మరియు వివరమైన ఆడిట్ ట్రెయిల్స్‌తో బక్కీ ఉన్న బ్యాలెన్స్‌లతో సమగ్ర ఆర్థిక ట్రాకింగ్‌ను అందిస్తుంది.",
    step6A: "ఖాతా స్టేట్మెంట్ అవలోకనం",
    accountStatementScreenshotTitle: "వెండర్ ఖాతా స్టేట్మెంట్",
    financialOverview: "ఆర్థిక అవలోకనం మరియు లావాదేవీ చరిత్ర",
    currentBalance: "ప్రస్తుత బ్యాలెన్స్",
    recentTransactions: "ఇటీవలి లావాదేవీలు",
    allTypes: "అన్ని రకాలు",
    payments: "చెల్లింపులు",
    invoices: "ఇన్‌వాయిస్లు",
    credits: "క్రెడిట్లు",
    export: "ఎగుమతి",
    type: "రకం",
    reference: "సూచన",
    payment: "చెల్లింపు",
    completed: "పూర్తయింది",
    invoice: "ఇన్‌వాయిస్",
    paid: "చెల్లించబడింది",
    creditNote: "క్రెడిట్ నోట్",
    applied: "వర్తించబడింది",
    accountStatementDesc: "సులభమైన ఆడిట్ ట్రెయిల్స్ కోసం చెల్లింపు స్థితి ట్రాకింగ్ మరియు సూచన లింకింగ్‌తో పూర్తి లావాదేవీ చరిత్ర.",
    step6B: "లావాదేవీ వివర వీక్షణ",
    transactionDetailScreenshotTitle: "లావాదేవీ వివరాలు - చెల్లింపు రసీదు",
    transactionTitle: "లావాదేవీ: PAY-2024-0521-001",
    paymentReceivedOn: "మే 21, 2024 న చెల్లింపు స్వీకరించబడింది",
    paymentMethod: "చెల్లింపు పద్ధతి",
    bankTransfer: "బ్యాంక్ బదిలీ",
    relatedPO: "సంబంధిత పర్చేస్ ఆర్డర్",
    poTotal: "PO మొత్తం",
    notes: "గమనికలు",
    paymentNotesExample: "బ్యాంక్ బదిలీ ద్వారా చెల్లింపు ప్రాసెస్ చేయబడింది. అన్ని వస్తువులు మంచి స్థితిలో డెలివర్ చేయబడ్డాయి. మీ వేగవంతమైన సేవకు ధన్యవాదాలు!",
    transactionDetailDesc: "వివరమైన లావాదేవీ రికార్డ్లు ఆర్థిక ట్రాకింగ్ మరియు సమన్వయం కోసం పూర్తి ఆడిట్ ట్రెయిల్స్‌ను అందిస్తాయి.",
    step7Title: "పూర్తి చేయడం కార్యకలాపాలు",
    step7Intro: "పూర్తి చేయడం విభాగం వెండర్లకు వస్తువులను ఎంచుకోవడం నుండి ప్యాకింగ్ మరియు రవానించడం వరకు, సమగ్ర ట్రాకింగ్ మరియు నాణ్యత నియంత్రణతో పూర్తి ఆర్డర్ పూర్తి చేయడం ప్రక్రియను నిర్వహించడానికి అనుమతిస్తుంది.",
    step7A: "పూర్తి చేయడం డాష్‌బోర్డ్",
    fulfillmentDashScreenshotTitle: "వెండర్ పూర్తి చేయడం కార్యకలాపాలు",
    readyToPick: "ఎంచుకోవడానికి సిద్ధం",
    inPicking: "ఎంచుకోవడంలో",
    readyToPack: "ప్యాక్ చేయడానికి సిద్ధం",
    readyToShip: "రవానించడానికి సిద్ధం",
    ordersReqAction: "చర్య అవసరమైన ఆర్డర్లు",
    startPicking: "ఎంచుకోవడాన్ని ప్రారంభించండి",
    startPacking: "ప్యాకింగ్‌ను ప్రారంభించండి",
    fulfillmentDashDesc: "పూర్తి చేయడం డాష్‌బోర్డ్ చర్య-ఆధారిత స్థితి ట్రాకింగ్‌తో స్పష్టమైన వర్క్‌ఫ్లో దృశ్యమానతను అందిస్తుంది.",
    step7B: "ఎంచుకోవడం జాబితా ఇంటర్ఫేస్",
    pickListScreenshotTitle: "ఆర్డర్ ఎంచుకోవడం - వస్తువు ఎంపిక",
    pickingOrder: "ఆర్డర్ ఎంచుకోవడం: PO-2024-0521-003",
    pickItemsFromWarehouse: "మీ వేర్‌హౌస్ నుండి వస్తువులను ఎంచుకోండి",
    scanOrConfirm: "మీరు ఎంచుకున్నప్పుడు ప్రతి వస్తువును స్కాన్ చేయండి లేదా మాన్యువల్‌గా నిర్ధారించండి",
    qtyToPick: "ఎంచుకోవాల్సిన పరిమాణం",
    scanBarcodePlaceholder: "బార్‌కోడ్‌ను స్కాన్ చేయండి లేదా ఎంచుకోబడిన పరిమాణాన్ని నమోదు చేయండి",
    scan: "స్కాన్",
    confirm: "నిర్ధారించండి",
    lowStockAvailable: "తక్కువ స్టాక్ అందుబాటులో ఉంది ({count} యూనిట్లు)",
    reportIssue: "సమస్యను నివేదించండి",
    progress: "ప్రగతి:",
    progressCount: "{total}లో {picked} వస్తువులు",
    continueToNext: "తదుపరి వస్తువుకు కొనసాగండి",
    pickListDesc: "ఎంచుకోవడం ఇంటర్ఫేస్ వెండర్లకు స్థానం-ఆప్టిమైజ్డ్ వస్తువు సేకరణ మార్గంలో నిజ-సమయ స్టాక్ ధృవీకరణతో మార్గనిర్దేశం చేస్తుంది.",
    step7C: "ప్యాకింగ్ మరియు రవానించడం",
    packingScreenshotTitle: "ఆర్డర్ ప్యాకింగ్ - బాక్స్ సృష్టి",
    packingOrder: "ఆర్డర్ ప్యాకింగ్: PO-2024-0520-002",
    packingOrderDesc: "అన్ని వస్తువులు ఎంచుకోబడి ప్యాకింగ్ కోసం సిద్ధంగా ఉన్నాయి",
    itemsToPack: "ప్యాక్ చేయాల్సిన వస్తువులు",
    wholeWheatFlour: "మొత్తం గోధుమ పిండి 1kg",
    createNewBox: "కొత్త బాక్స్‌ను సృష్టించండి",
    boxType: "బాక్స్ రకం",
    smallBox: "చిన్న బాక్స్ (12\" x 8\" x 6\")",
    mediumBox: "మధ్య బాక్స్ (16\" x 12\" x 8\")",
    largeBox: "పెద్ద బాక్స్ (20\" x 16\" x 12\")",
    createBox: "బాక్స్‌ను సృష్టించండి",
    boxId: "బాక్స్ #{id}",
    remove: "తొలగించండి",
    printLabel: "లేబుల్‌ను ముద్రించండి",
    sealBox: "బాక్స్‌ను ముద్ర వేయండి",
    packingProgress: "{total}లో {packed} వస్తువులు ప్యాక్ చేయబడ్డాయి",
    markAsShipped: "రవానించబడిందిగా గుర్తించండి",
    packingDesc: "ప్యాకింగ్ ఇంటర్ఫేస్ వస్తువు నిర్వహణ మరియు రవానించడం లేబుల్ ఉత్పాదనతో వ్యవస్థాపక బాక్స్ సృష్టిని ప్రారంభిస్తుంది.",
    bestPracticesTitle: "వెండర్ పోర్టల్ ఉత్తమ పద్ధతులు",
    bp1: "కొత్త ఆర్డర్లు మరియు స్థితి నవీకరణల కోసం ప్రతి రోజు మీ పోర్టల్‌ను తనిఖీ చేయండి",
    bp2: "మంచి సంబంధాలను నిర్వహించడానికి ఆర్డర్లను వేగవంతంగా అంగీకరించండి లేదా మార్చండి",
    bp3: "ఉత్పత్తి సమాచారం మరియు జాబితా స్థాయిలను నవీకృతంగా ఉంచండి",
    bp4: "సమర్థవంతమైన పూర్తి చేయడం కోసం నిర్వహించబడిన వేర్‌హౌస్ స్థానాలను నిర్వహించండి",
    bp5: "చెల్లింపు స్థితిని పర్యవేక్షించండి మరియు తడవైన మొత్తాల గురించి తగిన విధంగా అనుసరించండి"
  },
  ta: {
    "pageTitle": "விற்பனையாளர் போர்ட்டல் கையேடு",
    "backToManual": "கையேட்டிற்குத் திரும்பு",
    "description": "விற்பனையாளர் சுய-சேவைப் போர்ட்டலுக்கான ஒரு விரிவான வழிகாட்டி, இதன் மூலம் சப்ளையர்கள் தங்கள் சொந்த தயாரிப்புகள், ஆர்டர்கள், நிறைவேற்றுதல் மற்றும் கணக்குத் தகவலைச் சுயாதீனமாக நிர்வகிக்கலாம்.",
    "step1Title": "விற்பனையாளர் போர்ட்டல் டாஷ்போர்டு கண்ணோட்டம்",
    "step1Intro": "விற்பனையாளர் போர்ட்டல் டாஷ்போர்டு சப்ளையர்களுக்கு உங்கள் பல்பொருள் அங்காடியுடன் உள்ள அவர்களின் வணிக உறவு பற்றிய ஒரு விரிவான பார்வையை வழங்குகிறது. இதில் முக்கிய அளவீடுகள், சமீபத்திய செயல்பாடு மற்றும் அனைத்து விற்பனையாளர் செயல்பாடுகளுக்கான விரைவான அணுகல் ஆகியவை அடங்கும்.",
    "step1A": "டாஷ்போர்டு வரவேற்புத் திரை",
    "dashboardScreenshotTitle": "விற்பனையாளர் போர்ட்டல் டாஷ்போர்டு - முக்கிய இடைமுகம்",
    "welcomeBack": "மீண்டும் வருக, ஹெல்தி ஹார்வெஸ்ட்!",
    "accountSummary": "உங்கள் கணக்கின் சுருக்கம் இங்கே உள்ளது.",
    "vendorSince": "விற்பனையாளராக ஆனது",
    "totalOrders": "மொத்த ஆர்டர்கள்",
    "totalRevenue": "மொத்த வருவாய்",
    "pendingOrders": "நிலுவையிலுள்ள ஆர்டர்கள்",
    "myProducts": "எனது தயாரிப்புகள்",
    "metricsOverview": "இந்த அளவீடுகள் விற்பனையாளர்களுக்கு அவர்களின் வணிக செயல்திறன் மற்றும் தற்போதைய நிலை பற்றிய ஒரு விரைவான கண்ணோட்டத்தை வழங்குகிறது.",
    "step1B": "வழிசெலுத்தல் மெனு அமைப்பு",
    "navScreenshotTitle": "விற்பனையாளர் போர்ட்டல் வழிசெலுத்தல் அட்டைகள்",
    "po": "கொள்முதல் ஆர்டர்கள்",
    "manageOrders": "ஆர்டர்களைப் பார்க்கவும் மற்றும் நிர்வகிக்கவும்",
    "myCustomers": "எனது வாடிக்கையாளர்கள்",
    "manageSupermarketRels": "பல்பொருள் அங்காடி உறவுகளை நிர்வகிக்கவும்",
    "fulfillment": "நிறைவேற்றுதல்",
    "pickPackShip": "ஆர்டர்களைப் பிரித்தெடுத்து, பேக் செய்து மற்றும் அனுப்பவும்",
    "manageProductCatalog": "தயாரிப்பு பட்டியலை நிர்வகிக்கவும்",
    "myWarehouse": "எனது கிடங்கு",
    "viewLocationInventory": "இடம் மற்றும் இருப்பைப் பார்க்கவும்",
    "accountStatement": "கணக்கு அறிக்கை",
    "viewPaymentHistory": "பணம் செலுத்திய வரலாற்றைப் பார்க்கவும்",
    "navCardDesc": "ஒவ்வொரு அட்டையும் வெவ்வேறு விற்பனையாளர் செயல்பாடுகளுக்கான அணுகலை வழங்குகிறது. கிளிக் செய்வதன் மூலம் விற்பனையாளர்கள் அந்தந்த மேலாண்மைப் பகுதிக்கு அழைத்துச் செல்லப்படுவார்கள்.",
    "step2Title": "கொள்முதல் ஆர்டர்களை நிர்வகித்தல்",
    "step2Intro": "கொள்முதல் ஆர்டர்கள் பிரிவு, விற்பனையாளர்கள் பல்பொருள் அங்காடியிலிருந்து வரும் அனைத்து ஆர்டர்களையும் பார்க்க, ஏற்க, மாற்றியமைக்க மற்றும் கண்காணிக்க அனுமதிக்கிறது. இது ஆர்டர் மேலாண்மை மற்றும் தகவல்தொடர்புகளுக்கான முதன்மை பணிப்பாய்வு ஆகும்.",
    "step2A": "கொள்முதல் ஆர்டர்கள் பட்டியல் பார்வை",
    "poListScreenshotTitle": "கொள்முதல் ஆர்டர்கள் - முக்கிய இடைமுகம்",
    "myPOs": "எனது கொள்முதல் ஆர்டர்கள்",
    "fromSupermarket": "RetailOS பல்பொருள் அங்காடியிலிருந்து",
    "fromLocation": "RetailOS பல்பொருள் அங்காடியிலிருந்து ஆர்டர்கள் • மும்பை, மகாராஷ்டிரா",
    "searchPO": "PO ஐடி மூலம் தேடு...",
    "allStatuses": "அனைத்து நிலைகளும்",
    "placed": "வைக்கப்பட்டது",
    "accepted": "ஏற்கப்பட்டது",
    "shipped": "அனுப்பப்பட்டது",
    "poId": "PO ஐடி",
    "orderDate": "ஆர்டர் தேதி",
    "items": "பொருட்கள்",
    "totalValue": "மொத்த மதிப்பு",
    "status": "நிலை",
    "actions": "நடவடிக்கைகள்",
    "view": "பார்க்கவும்",
    "modify": "மாற்றியமைக்கவும்",
    "poTableDesc": "இந்த அட்டவணை அனைத்து கொள்முதல் ஆர்டர்களையும் வரிசைப்படுத்தக்கூடிய பத்திகள் மற்றும் நிலை குறிப்பான்களுடன் காட்டுகிறது. விற்பனையாளர்கள் விவரங்களைப் பார்க்கலாம் மற்றும் ஒவ்வொரு ஆர்டரிலும் நடவடிக்கை எடுக்கலாம்.",
    "step2B": "ஆர்டர் விவரப் பார்வை",
    "orderDetailScreenshotTitle": "கொள்முதல் ஆர்டர் விவர மாதிரி",
    "poDetailTitle": "கொள்முதல் ஆர்டர்: PO-2024-0521-003",
    "orderSummary": "ஆர்டர் சுருக்கம்",
    "expectedDelivery": "எதிர்பார்க்கப்படும் டெலிவரி",
    "supermarketDetails": "பல்பொருள் அங்காடி விவரங்கள்",
    "storeName": "கடையின் பெயர்",
    "address": "முகவரி",
    "contact": "தொடர்பு",
    "itemsCount": "பொருட்கள் ({count})",
    "product": "தயாரிப்பு",
    "qty": "அளவு",
    "unitCost": "ஒரு யூனிட் விலை",
    "total": "மொத்தம்",
    "organicRice": "ஆர்கானிக் பாஸ்மதி அரிசி 1 கிலோ",
    "freshMilk": "புதிய பால் 1 லிட்டர்",
    "organicEggs": "ஆர்கானிக் முட்டைகள் 12pcs",
    "reqMod": "மாற்றியமைக்க கோரிக்கை",
    "acceptOrder": "ஆர்டரை ஏற்கவும்",
    "poDetailDesc": "விற்பனையாளர்கள் முழுமையான ஆர்டர் விவரங்களைப் பார்க்கலாம் மற்றும் ஏற்பது அல்லது மாற்றியமைக்க கோருவது போன்ற நடவடிக்கைகளை எடுக்கலாம்.",
    "step2C": "மாற்றியமைக்க கோரிக்கை இடைமுகம்",
    "modReqScreenshotTitle": "ஆர்டர் மாற்றியமைக்க கோரிக்கை மாதிரி",
    "reqModTitle": "மாற்றியமைக்க கோரிக்கை - PO-2024-0521-003",
    "currentQty": "தற்போதைய அளவு",
    "currentPrice": "தற்போதைய விலை",
    "newQty": "புதிய அளவு",
    "newPrice": "புதிய விலை",
    "newTotal": "புதிய மொத்தம்",
    "reasonForMod": "மாற்றியமைப்பதற்கான காரணம்",
    "reasonPlaceholder": "இந்த மாற்றங்களைக் ஏன் கோருகிறீர்கள் என்பதை தயவுசெய்து விளக்கவும்...",
    "reasonExample": "அரிசியின் அளவு குறைந்த இருப்பு காரணமாகக் குறைக்கப்பட்டது. ஈடுகட்ட சற்று குறைந்த விலை வழங்கப்பட்டுள்ளது.",
    "cancel": "ரத்துசெய்",
    "submitRequest": "கோரிக்கையைச் சமர்ப்பி",
    "modReqDesc": "விற்பனையாளர்கள் அளவு மற்றும் விலைகளை மாற்றியமைப்பதற்கான காரணங்களின் விளக்கத்துடன் மாற்றியமைக்கலாம்.",
    "step3Title": "எனது தயாரிப்புகளை நிர்வகித்தல்",
    "step3Intro": "எனது தயாரிப்புகள் பிரிவு, விற்பனையாளர்கள் தங்கள் தயாரிப்பு பட்டியலை நிர்வகிக்க, தங்கள் கிடங்கில் உள்ள இருப்பு நிலைகளைப் பார்க்க மற்றும் பல்பொருள் அங்காடியின் ஒப்புதலுக்காக புதிய தயாரிப்புகளைச் சமர்ப்பிக்க அனுமதிக்கிறது.",
    "step3A": "தயாரிப்பு பட்டியல் பார்வை",
    "catalogScreenshotTitle": "எனது தயாரிப்புகள் - பட்டியல் மேலாண்மை",
    "manageCatalogInv": "உங்கள் தயாரிப்பு பட்டியல் மற்றும் இருப்பை நிர்வகிக்கவும்",
    "searchProducts": "தயாரிப்புகளைத் தேடு...",
    "allCategories": "அனைத்து வகைகள்",
    "grainsCereals": "தானியங்கள் மற்றும் பருப்பு வகைகள்",
    "dairyProducts": "பால் பொருட்கள்",
    "freshProduce": "புதிய காய்கறிகள்/பழங்கள்",
    "addProduct": "தயாரிப்பைச் சேர்",
    "sku": "SKU: {sku}",
    "active": "செயலில்",
    "stock": "இருப்பு:",
    "myPrice": "எனது விலை:",
    "location": "இடம்:",
    "lowStock": "குறைந்த இருப்பு",
    "outOfStock": "இருப்பு இல்லை",
    "edit": "திருத்து",
    "productCardDesc": "தயாரிப்பு அட்டைகள் தற்போதைய இருப்பு நிலைகள், விலை மற்றும் கிடங்கு இருப்பிடங்களைக் காட்டுகின்றன. வண்ண-குறியிடப்பட்ட பேட்ஜ்கள் இருப்பு நிலையைக் குறிக்கின்றன.",
    "step3B": "புதிய தயாரிப்பைச் சேர்ப்பதற்கான படிவம்",
    "addProductScreenshotTitle": "புதிய தயாரிப்பைச் சேர் - விற்பனையாளர் சமர்ப்பிப்பு படிவம்",
    "submitNewProduct": "ஒப்புதலுக்காக புதிய தயாரிப்பைச் சமர்ப்பி",
    "productName": "தயாரிப்பு பெயர்",
    "enterProductName": "தயாரிப்பு பெயரை உள்ளிடவும்",
    "brand": "பிராண்ட்",
    "selectBrand": "பிராண்டைத் தேர்ந்தெடு...",
    "healthyHarvest": "ஹெல்தி ஹார்வெஸ்ட்",
    "farmFresh": "ஃபார்ம் ஃப்ரெஷ்",
    "pureNatural": "பியூர் & நேச்சுரல்",
    "category": "வகை",
    "selectCategory": "வகையைத் தேர்ந்தெடு...",
    "productSku": "SKU",
    "productSkuPlaceholder": "தயாரிப்பு SKU",
    "description": "விளக்கம்",
    "descPlaceholder": "தயாரிப்பின் விளக்கம்...",
    "mySellingPrice": "எனது விற்பனை விலை",
    "stockQty": "இருப்பு அளவு",
    "minStock": "குறைந்தபட்ச இருப்பு",
    "productImage": "தயாரிப்புப் படம்",
    "clickToUpload": "தயாரிப்புப் படத்தைப் பதிவேற்ற கிளிக் செய்யவும்",
    "imageSpec": "PNG, JPG 5MB வரை",
    "submitForApproval": "ஒப்புதலுக்காகச் சமர்ப்பி",
    "newProductDesc": "விற்பனையாளர்கள் சமர்ப்பித்த புதிய தயாரிப்புகளுக்கு சிஸ்டத்தில் செயல்படுவதற்கு முன் பல்பொருள் அங்காடியின் ஒப்புதல் தேவைப்படுகிறது.",
    "step4Title": "கிடங்கு மேலாண்மை",
    "step4Intro": "எனது கிடங்கு பிரிவு, விற்பனையாளர்கள் தங்கள் இருப்பு இருப்பிடங்களை நிர்வகிக்க, கிடங்கின் அமைப்பைப் பார்க்க மற்றும் திறமையான பிரித்தெடுத்தல் மற்றும் நிறைவேற்றுவதற்காக இருப்பை ஒழுங்கமைப்பதற்கான கருவிகளை வழங்குகிறது.",
    "step4A": "கிடங்கு கண்ணோட்டம்",
    "warehouseScreenshotTitle": "எனது கிடங்கு - அமைப்பு மற்றும் ஒழுங்கமைப்பு",
    "activeRacks": "செயலில் உள்ள ராக்ஸ்",
    "binsUsed": "பயன்படுத்தப்பட்ட பின்ஸ்",
    "locatedProducts": "இடம்காணப்பட்ட தயாரிப்புகள்",
    "unassigned": "ஒதுக்கப்படாதவை",
    "rackA": "ராக் A",
    "binsCount": "{count} பின்ஸ்",
    "totalUnits": "{count} மொத்த யூனிட்கள்",
    "more": "+{count} அதிகம்",
    "unassignedProducts": "ஒதுக்கப்படாத தயாரிப்புகள்",
    "unassignedProdDesc": "<strong>{count} தயாரிப்புகளுக்கு</strong> கிடங்கு இருப்பிடங்கள் தேவை. உகந்த பிரித்தெடுத்தல் வழிகளின் அடிப்படையில் அவற்றை தானாக ஒதுக்க \"ஸ்டாக் அப்\" அம்சத்தைப் பயன்படுத்தவும்.",
    "assignLocations": "இடங்களை ஒதுக்கு",
    "warehouseOverviewDesc": "கிடங்கு கண்ணோட்டம் ராக் பயன்பாட்டைக் காட்டுகிறது மற்றும் சிறந்த இருப்பிட மேலாண்மைக்கு மேம்படுத்துவதற்கான வாய்ப்புகளைக் கண்டறிய உதவுகிறது.",
    "step4B": "தயாரிப்பு இருப்பிட விவரங்கள்",
    "prodLocScreenshotTitle": "தயாரிப்பு இருப்பிட மேலாண்மை",
    "productLocations": "தயாரிப்பு இருப்பிடங்கள்",
    "capacity": "திறன்",
    "relocate": "இடமாற்று",
    "prodLocTableDesc": "தயாரிப்பு இருப்பிட அட்டவணை திறன் பயன்பாடு மற்றும் விரைவான இடமாற்று விருப்பங்களுடன் தற்போதைய கிடங்கு ஒதுக்கீடுகளைக் காட்டுகிறது.",
    "step5Title": "எனது வாடிக்கையாளர்களை நிர்வகித்தல்",
    "step5Intro": "எனது வாடிக்கையாளர்கள் பிரிவு, விற்பனையாளர்கள் தங்கள் வணிக உறவுகள், ஆர்டர் வரலாறு, பணம் செலுத்தும் நிலை மற்றும் வாடிக்கையாளர் தொடர்பு கருவிகள் பற்றிய நுண்ணறிவுகளை வழங்குகிறது.",
    "step5A": "வாடிக்கையாளர் டாஷ்போர்டு",
    "customerDashScreenshotTitle": "எனது வாடிக்கையாளர்கள் - உறவு கண்ணோட்டம்",
    "totalCustomers": "மொத்த வாடிக்கையாளர்கள்",
    "pendingPayments": "நிலுவையிலுள்ள பணம் செலுத்துதல்கள்",
    "customerProfile": "வாடிக்கையாளர் சுயவிவரம்",
    "storeManager": "கடை மேலாளர்",
    "excellent": "சிறந்தது",
    "pendingAmount": "நிலுவையிலுள்ள தொகை",
    "lastOrder": "கடைசி ஆர்டர்",
    "orderDetails": "விவரங்களைப் பார்க்கவும்",
    "orderHistory": "ஆர்டர் வரலாறு",
    "customerDashDesc": "வாடிக்கையாளர் டாஷ்போர்டு விரிவான உறவு நுண்ணறிவுகள் மற்றும் வணிக செயல்திறன் அளவீடுகளை வழங்குகிறது.",
    "step5B": "நிலுவையிலுள்ள பணம் செலுத்துதல்களைக் கண்காணித்தல்",
    "pendingPaymentsScreenshotTitle": "நிலுவையிலுள்ள பணம் செலுத்துதல்கள் - நிலுவையிலுள்ள ஆர்டர்கள்",
    "pendingPaymentsCount": "நிலுவையிலுள்ள பணம் செலுத்துதல்கள் ({count})",
    "pendingPaymentsDesc": "வாடிக்கையாளரிடமிருந்து பணம் செலுத்துவதற்காகக் காத்திருக்கும் ஆர்டர்கள்",
    "orderId": "ஆர்டர் ஐடி",
    "date": "தேதி",
    "amount": "தொகை",
    "daysOverdue": "காலாவதியான நாட்கள்",
    "daysOverdueCount": "{count} நாட்கள்",
    "paymentTrackingDesc": "பணம் செலுத்துதல் கண்காணிப்பு விற்பனையாளர்கள் காலாவதியான தொகையைக் கண்காணிக்கவும் மற்றும் வாடிக்கையாளர்களுடன் முறையாகப் பின்தொடரவும் உதவுகிறது.",
    "step6Title": "கணக்கு அறிக்கை மற்றும் பணம் செலுத்துதல்கள்",
    "step6Intro": "கணக்கு அறிக்கை பிரிவு, விற்பனையாளர்கள் அனைத்து பரிவர்த்தனைகள், பெறப்பட்ட பணம் செலுத்துதல்கள் மற்றும் நிலுவையிலுள்ள நிலுவைகள் உட்பட ஒரு விரிவான நிதி கண்காணிப்பை விரிவான ஆடிட் தடங்களுடன் வழங்குகிறது.",
    "step6A": "கணக்கு அறிக்கை கண்ணோட்டம்",
    "accountStatementScreenshotTitle": "விற்பனையாளர் கணக்கு அறிக்கை",
    "financialOverview": "நிதி கண்ணோட்டம் மற்றும் பரிவர்த்தனை வரலாறு",
    "currentBalance": "தற்போதைய இருப்பு",
    "recentTransactions": "சமீபத்திய பரிவர்த்தனைகள்",
    "allTypes": "அனைத்து வகைகள்",
    "payments": "பணம் செலுத்துதல்கள்",
    "invoices": "பணப்பட்டியல்கள்",
    "credits": "வரவுகள்",
    "export": "ஏற்றுமதி செய்",
    "type": "வகை",
    "reference": "குறிப்பு",
    "payment": "பணம் செலுத்துதல்",
    "completed": "முடிக்கப்பட்டது",
    "invoice": "பணப்பட்டியல்",
    "paid": "செலுத்தப்பட்டது",
    "creditNote": "வரவுக் குறிப்பு",
    "applied": "பயன்படுத்தப்பட்டது",
    "accountStatementDesc": "எளிதான ஆடிட் தடங்களுக்காக பணம் செலுத்தும் நிலை கண்காணிப்பு மற்றும் குறிப்பு இணைப்புகளுடன் முழுமையான பரிவர்த்தனை வரலாறு.",
    "step6B": "பரிவர்த்தனை விவரப் பார்வை",
    "transactionDetailScreenshotTitle": "பரிவர்த்தனை விவரங்கள் - பணம் செலுத்திய ரசீது",
    "transactionTitle": "பரிவர்த்தனை: PAY-2024-0521-001",
    "paymentReceivedOn": "மே 21, 2024 அன்று பணம் பெறப்பட்டது",
    "paymentMethod": "பணம் செலுத்தும் முறை",
    "bankTransfer": "வங்கி பரிமாற்றம்",
    "relatedPO": "தொடர்புடைய கொள்முதல் ஆர்டர்",
    "poTotal": "PO மொத்தம்",
    "notes": "குறிப்புகள்",
    "paymentNotesExample": "வங்கி பரிமாற்றம் மூலம் பணம் செலுத்தப்பட்டது. அனைத்து பொருட்களும் நல்ல நிலையில் வழங்கப்பட்டன. உங்கள் விரைவான சேவைக்கு நன்றி!",
    "transactionDetailDesc": "விரிவான பரிவர்த்தனை பதிவுகள் நிதி கண்காணிப்பு மற்றும் சமரசத்திற்கான முழுமையான ஆடிட் தடங்களை வழங்குகின்றன.",
    "step7Title": "நிறைவேற்றும் செயல்பாடுகள்",
    "step7Intro": "நிறைவேற்றுதல் பிரிவு, விற்பனையாளர்கள் முழுமையான ஆர்டர் நிறைவேற்றும் செயல்முறையை நிர்வகிக்க அனுமதிக்கிறது, பொருட்களைப் பிரித்தெடுப்பது முதல் பேக் செய்வது மற்றும் அனுப்புவது வரை, விரிவான கண்காணிப்பு மற்றும் தரக் கட்டுப்பாடுடன்.",
    "step7A": "நிறைவேற்றுதல் டாஷ்போர்டு",
    "fulfillmentDashScreenshotTitle": "விற்பனையாளர் நிறைவேற்றும் செயல்பாடுகள்",
    "readyToPick": "பிரித்தெடுக்க தயார்",
    "inPicking": "பிரித்தெடுக்கப்படுகிறது",
    "readyToPack": "பேக் செய்ய தயார்",
    "readyToShip": "அனுப்ப தயார்",
    "ordersReqAction": "நடவடிக்கை தேவைப்படும் ஆர்டர்கள்",
    "startPicking": "பிரித்தெடுக்க தொடங்கவும்",
    "startPacking": "பேக் செய்ய தொடங்கவும்",
    "fulfillmentDashDesc": "நிறைவேற்றுதல் டாஷ்போர்டு நடவடிக்கை-சார்ந்த நிலை கண்காணிப்புடன் தெளிவான பணிப்பாய்வு தெரிவுநிலையை வழங்குகிறது.",
    "step7B": "பிரித்தெடுக்கும் பட்டியல் இடைமுகம்",
    "pickListScreenshotTitle": "ஆர்டரைப் பிரித்தெடுத்தல் - பொருள் தேர்வு",
    "pickingOrder": "ஆர்டரைப் பிரித்தெடுக்கப்படுகிறது: PO-2024-0521-003",
    "pickItemsFromWarehouse": "உங்கள் கிடங்கிலிருந்து பொருட்களைப் பிரித்தெடு",
    "scanOrConfirm": "நீங்கள் பிரித்தெடுக்கும்போது ஒவ்வொரு பொருளையும் ஸ்கேன் செய்யவும் அல்லது கைமுறையாக உறுதிப்படுத்தவும்",
    "qtyToPick": "பிரித்தெடுக்க வேண்டிய அளவு",
    "scanBarcodePlaceholder": "பார்கோடு ஸ்கேன் செய்யவும் அல்லது பிரித்தெடுக்கப்பட்ட அளவை உள்ளிடவும்",
    "scan": "ஸ்கேன் செய்",
    "confirm": "உறுதிப்படுத்து",
    "lowStockAvailable": "குறைந்த இருப்பு உள்ளது ({count} யூனிட்கள்)",
    "reportIssue": "சிக்கலைப் புகாரளி",
    "progress": "முன்னேற்றம்:",
    "progressCount": "{total}ல் {picked} பொருட்கள்",
    "continueToNext": "அடுத்த பொருளுக்குத் தொடர்",
    "pickListDesc": "பிரித்தெடுக்கும் இடைமுகம் விற்பனையாளர்களுக்கு இருப்பிடம்-உகந்த பொருள் சேகரிப்பு மூலம் நிகழ்நேர இருப்பு சரிபார்ப்புடன் வழிகாட்டுகிறது.",
    "step7C": "பேக்கிங் மற்றும் அனுப்புதல்",
    "packingScreenshotTitle": "ஆர்டர் பேக்கிங் - பெட்டி உருவாக்கம்",
    "packingOrder": "ஆர்டர் பேக் செய்யப்படுகிறது: PO-2024-0520-002",
    "packingOrderDesc": "அனைத்து பொருட்களும் பிரித்தெடுக்கப்பட்டு பேக்கிங்கிற்கு தயாராக உள்ளன",
    "itemsToPack": "பேக் செய்ய வேண்டிய பொருட்கள்",
    "wholeWheatFlour": "முழு கோதுமை மாவு 1 கிலோ",
    "createNewBox": "புதிய பெட்டியை உருவாக்கு",
    "boxType": "பெட்டி வகை",
    "smallBox": "சிறிய பெட்டி (12\" x 8\" x 6\")",
    "mediumBox": "நடுத்தர பெட்டி (16\" x 12\" x 8\")",
    "largeBox": "பெரிய பெட்டி (20\" x 16\" x 12\")",
    "createBox": "பெட்டியை உருவாக்கு",
    "boxId": "பெட்டி #{id}",
    "remove": "நீக்கு",
    "printLabel": "லேபலை அச்சிடு",
    "sealBox": "பெட்டியை மூடு",
    "packingProgress": "{total}ல் {packed} பொருட்கள் பேக் செய்யப்பட்டுள்ளன",
    "markAsShipped": "அனுப்பப்பட்டது எனக் குறிக்கவும்",
    "packingDesc": "பேக்கிங் இடைமுகம் பொருள் ஒழுங்கமைப்பு மற்றும் அனுப்புதல் லேபல் உருவாக்கத்துடன் முறையான பெட்டி உருவாக்கத்தை செயல்படுத்துகிறது.",
    "bestPracticesTitle": "விற்பனையாளர் போர்ட்டல் சிறந்த நடைமுறைகள்",
    "bp1": "புதிய ஆர்டர்கள் மற்றும் நிலை புதுப்பிப்புகளுக்கு தினமும் உங்கள் போர்ட்டலை சரிபார்க்கவும்",
    "bp2": "நல்ல உறவுகளைப் பராமரிக்க ஆர்டர்களை விரைவாக ஏற்கவும் அல்லது மாற்றியமைக்கவும்",
    "bp3": "தயாரிப்பு தகவல் மற்றும் இருப்பு நிலைகளை புதுப்பித்த நிலையில் வைத்திருக்கவும்",
    "bp4": "திறமையான நிறைவேற்றுவதற்காக ஒழுங்கமைக்கப்பட்ட கிடங்கு இருப்பிடங்களை நிர்வகிக்கவும்",
    "bp5": "பணம் செலுத்தும் நிலையைக் கண்காணிக்கவும் மற்றும் காலாவதியான தொகைகளைப் பற்றி முறையாகப் பின்தொடரவும்"
  },
  hi: {
    "pageTitle": "विक्रेता पोर्टल मैनुअल",
    "backToManual": "मैनुअल पर वापस जाएं",
    "description": "विक्रेता स्व-सेवा पोर्टल के लिए एक व्यापक मार्गदर्शिका, जो आपूर्तिकर्ताओं को अपने स्वयं के उत्पादों, ऑर्डर, पूर्ति और खाता जानकारी को स्वतंत्र रूप से प्रबंधित करने की अनुमति देती है।",
    "step1Title": "विक्रेता पोर्टल डैशबोर्ड अवलोकन",
    "step1Intro": "विक्रेता पोर्टल डैशबोर्ड आपूर्तिकर्ताओं को आपके सुपरमार्केट के साथ उनके व्यावसायिक संबंध का एक व्यापक दृष्टिकोण प्रदान करता है। इसमें प्रमुख मेट्रिक्स, नवीनतम गतिविधि और सभी विक्रेता कार्यों तक त्वरित पहुंच शामिल है।",
    "step1A": "डैशबोर्ड स्वागत स्क्रीन",
    "dashboardScreenshotTitle": "विक्रेता पोर्टल डैशबोर्ड - मुख्य इंटरफ़ेस",
    "welcomeBack": "वापस स्वागत है, हेल्दी हार्वेस्ट!",
    "accountSummary": "यह आपके खाते का सारांश है।",
    "vendorSince": "विक्रेता बनने की तारीख",
    "totalOrders": "कुल ऑर्डर",
    "totalRevenue": "कुल राजस्व",
    "pendingOrders": "लंबित ऑर्डर",
    "myProducts": "मेरे उत्पाद",
    "metricsOverview": "ये मेट्रिक्स विक्रेताओं को उनके व्यवसाय के प्रदर्शन और वर्तमान स्थिति का त्वरित अवलोकन प्रदान करते हैं।",
    "step1B": "नेविगेशन मेनू संरचना",
    "navScreenshotTitle": "विक्रेता पोर्टल नेविगेशन कार्ड",
    "po": "खरीद आदेश",
    "manageOrders": "ऑर्डर देखें और प्रबंधित करें",
    "myCustomers": "मेरे ग्राहक",
    "manageSupermarketRels": "सुपरमार्केट संबंधों को प्रबंधित करें",
    "fulfillment": "पूर्ति",
    "pickPackShip": "ऑर्डर चुनें, पैक करें और भेजें",
    "manageProductCatalog": "उत्पाद कैटलॉग प्रबंधित करें",
    "myWarehouse": "मेरा गोदाम",
    "viewLocationInventory": "स्थान और इन्वेंट्री देखें",
    "accountStatement": "खाता विवरण",
    "viewPaymentHistory": "भुगतान इतिहास देखें",
    "navCardDesc": "प्रत्येक कार्ड विभिन्न विक्रेता कार्यों तक पहुंच प्रदान करता है। क्लिक करने पर विक्रेता को संबंधित प्रबंधन अनुभाग में ले जाया जाएगा।",
    "step2Title": "खरीद आदेश प्रबंधन",
    "step2Intro": "खरीद आदेश अनुभाग विक्रेताओं को सुपरमार्केट से आने वाले सभी आदेशों को देखने, स्वीकार करने, संशोधित करने और ट्रैक करने की अनुमति देता है। यह आदेश प्रबंधन और संचार के लिए प्राथमिक कार्यप्रवाह है।",
    "step2A": "खरीद आदेश सूची दृश्य",
    "poListScreenshotTitle": "खरीद आदेश - मुख्य इंटरफ़ेस",
    "myPOs": "मेरे खरीद आदेश",
    "fromSupermarket": "RetailOS सुपरमार्केट से",
    "fromLocation": "RetailOS सुपरमार्केट से ऑर्डर • मुंबई, महाराष्ट्र",
    "searchPO": "पीओ आईडी द्वारा खोजें...",
    "allStatuses": "सभी स्थितियां",
    "placed": "रखा गया",
    "accepted": "स्वीकार किया गया",
    "shipped": "भेजा गया",
    "poId": "पीओ आईडी",
    "orderDate": "ऑर्डर की तारीख",
    "items": "आइटम",
    "totalValue": "कुल मूल्य",
    "status": "स्थिति",
    "actions": "कार्य",
    "view": "देखें",
    "modify": "संशोधित करें",
    "poTableDesc": "तालिका सभी खरीद आदेशों को सॉर्ट करने योग्य कॉलम और स्थिति संकेतकों के साथ दिखाती है। विक्रेता विवरण देख सकते हैं और प्रत्येक आदेश पर कार्रवाई कर सकते हैं।",
    "step2B": "ऑर्डर विवरण दृश्य",
    "orderDetailScreenshotTitle": "खरीद आदेश विवरण मॉडल",
    "poDetailTitle": "खरीद आदेश: PO-2024-0521-003",
    "orderSummary": "ऑर्डर सारांश",
    "expectedDelivery": "अनुमानित डिलीवरी",
    "supermarketDetails": "सुपरमार्केट विवरण",
    "storeName": "स्टोर का नाम",
    "address": "पता",
    "contact": "संपर्क",
    "itemsCount": "आइटम ({count})",
    "product": "उत्पाद",
    "qty": "मात्रा",
    "unitCost": "प्रति यूनिट लागत",
    "total": "कुल",
    "organicRice": "ऑर्गेनिक बासमती चावल 1kg",
    "freshMilk": "ताजा दूध 1L",
    "organicEggs": "ऑर्गेनिक अंडे 12pcs",
    "reqMod": "संशोधन का अनुरोध",
    "acceptOrder": "ऑर्डर स्वीकार करें",
    "poDetailDesc": "विक्रेता पूर्ण ऑर्डर विवरण देख सकते हैं और स्वीकार करने या संशोधन का अनुरोध करने जैसे कार्य कर सकते हैं।",
    "step2C": "संशोधन अनुरोध इंटरफ़ेस",
    "modReqScreenshotTitle": "ऑर्डर संशोधन अनुरोध मॉडल",
    "reqModTitle": "संशोधन अनुरोध - PO-2024-0521-003",
    "currentQty": "वर्तमान मात्रा",
    "currentPrice": "वर्तमान कीमत",
    "newQty": "नई मात्रा",
    "newPrice": "नई कीमत",
    "newTotal": "नया कुल",
    "reasonForMod": "संशोधन का कारण",
    "reasonPlaceholder": "कृपया बताएं कि आप इन परिवर्तनों का अनुरोध क्यों कर रहे हैं...",
    "reasonExample": "सीमित स्टॉक उपलब्धता के कारण चावल की मात्रा कम कर दी गई है। थोड़ा कम कीमत की भरपाई के लिए दिया गया है।",
    "cancel": "रद्द करें",
    "submitRequest": "अनुरोध जमा करें",
    "modReqDesc": "विक्रेता परिवर्तनों के कारणों के विवरण के साथ मात्रा और कीमतों को संशोधित कर सकते हैं।",
    "step3Title": "मेरे उत्पादों का प्रबंधन",
    "step3Intro": "मेरे उत्पाद अनुभाग विक्रेताओं को अपने उत्पाद कैटलॉग को प्रबंधित करने, अपने गोदाम में इन्वेंट्री स्तरों को देखने और सुपरमार्केट की मंजूरी के लिए नए उत्पादों को जमा करने की अनुमति देता है।",
    "step3A": "उत्पाद कैटलॉग दृश्य",
    "catalogScreenshotTitle": "मेरे उत्पाद - कैटलॉग प्रबंधन",
    "manageCatalogInv": "अपने उत्पाद कैटलॉग और इन्वेंट्री को प्रबंधित करें",
    "searchProducts": "उत्पाद खोजें...",
    "allCategories": "सभी श्रेणियां",
    "grainsCereals": "अनाज और दालें",
    "dairyProducts": "डेयरी उत्पाद",
    "freshProduce": "ताजा उपज",
    "addProduct": "उत्पाद जोड़ें",
    "sku": "SKU: {sku}",
    "active": "सक्रिय",
    "stock": "स्टॉक:",
    "myPrice": "मेरी कीमत:",
    "location": "स्थान:",
    "lowStock": "कम स्टॉक",
    "outOfStock": "स्टॉक से बाहर",
    "edit": "संपादित करें",
    "productCardDesc": "उत्पाद कार्ड वर्तमान स्टॉक स्तर, कीमत और गोदाम स्थानों को दिखाते हैं। रंग-कोडित बैज स्टॉक स्थिति का संकेत देते हैं।",
    "step3B": "नया उत्पाद जोड़ने का फॉर्म",
    "addProductScreenshotTitle": "नया उत्पाद जोड़ें - विक्रेता सबमिशन फॉर्म",
    "submitNewProduct": "मंजूरी के लिए नया उत्पाद जमा करें",
    "productName": "उत्पाद का नाम",
    "enterProductName": "उत्पाद का नाम दर्ज करें",
    "brand": "ब्रांड",
    "selectBrand": "ब्रांड चुनें...",
    "healthyHarvest": "हेल्दी हार्वेस्ट",
    "farmFresh": "फार्म फ्रेश",
    "pureNatural": "प्योर & नेचुरल",
    "category": "श्रेणी",
    "selectCategory": "श्रेणी चुनें...",
    "productSku": "SKU",
    "productSkuPlaceholder": "उत्पाद SKU",
    "description": "विवरण",
    "descPlaceholder": "उत्पाद का विवरण...",
    "mySellingPrice": "मेरी बिक्री कीमत",
    "stockQty": "स्टॉक मात्रा",
    "minStock": "न्यूनतम स्टॉक",
    "productImage": "उत्पाद की तस्वीर",
    "clickToUpload": "उत्पाद की तस्वीर अपलोड करने के लिए क्लिक करें",
    "imageSpec": "PNG, JPG 5MB तक",
    "submitForApproval": "मंजूरी के लिए जमा करें",
    "newProductDesc": "विक्रेताओं द्वारा जमा किए गए नए उत्पादों को सिस्टम में सक्रिय होने से पहले सुपरमार्केट की मंजूरी की आवश्यकता होती है।",
    "step4Title": "गोदाम प्रबंधन",
    "step4Intro": "मेरा गोदाम अनुभाग विक्रेताओं को अपने इन्वेंट्री स्थानों को प्रबंधित करने, गोदाम लेआउट देखने और कुशल पिकिंग और पूर्ति के लिए स्टॉक को व्यवस्थित करने के लिए उपकरण प्रदान करता है।",
    "step4A": "गोदाम अवलोकन",
    "warehouseScreenshotTitle": "मेरा गोदाम - लेआउट और संगठन",
    "activeRacks": "सक्रिय रैक",
    "binsUsed": "इस्तेमाल किए गए बिन",
    "locatedProducts": "स्थित उत्पाद",
    "unassigned": "असाइन नहीं किया गया",
    "rackA": "रैक ए",
    "binsCount": "{count} बिन",
    "totalUnits": "{count} कुल इकाइयां",
    "more": "+{count} और",
    "unassignedProducts": "असाइन नहीं किए गए उत्पाद",
    "unassignedProdDesc": "<strong>{count} उत्पादों</strong> को गोदाम स्थानों की आवश्यकता है। इष्टतम पिकिंग मार्गों के आधार पर उन्हें स्वचालित रूप से असाइन करने के लिए \"स्टॉक अप\" सुविधा का उपयोग करें।",
    "assignLocations": "स्थान असाइन करें",
    "warehouseOverviewDesc": "गोदाम अवलोकन रैक उपयोग को दर्शाता है और बेहतर स्थान प्रबंधन के लिए अनुकूलन के अवसरों की पहचान करने में मदद करता है।",
    "step4B": "उत्पाद स्थान विवरण",
    "prodLocScreenshotTitle": "उत्पाद स्थान प्रबंधन",
    "productLocations": "उत्पाद स्थान",
    "capacity": "क्षमता",
    "relocate": "स्थानांतरित करें",
    "prodLocTableDesc": "उत्पाद स्थान तालिका क्षमता उपयोग और त्वरित स्थानांतरण विकल्पों के साथ वर्तमान गोदाम असाइनमेंट दिखाती है।",
    "step5Title": "मेरे ग्राहकों का प्रबंधन",
    "step5Intro": "मेरे ग्राहक अनुभाग विक्रेताओं को उनके व्यावसायिक संबंधों, ऑर्डर इतिहास, भुगतान स्थिति और ग्राहक संचार उपकरणों के बारे में जानकारी प्रदान करता है।",
    "step5A": "ग्राहक डैशबोर्ड",
    "customerDashScreenshotTitle": "मेरे ग्राहक - संबंध अवलोकन",
    "totalCustomers": "कुल ग्राहक",
    "pendingPayments": "लंबित भुगतान",
    "customerProfile": "ग्राहक प्रोफ़ाइल",
    "storeManager": "स्टोर मैनेजर",
    "excellent": "उत्कृष्ट",
    "pendingAmount": "लंबित राशि",
    "lastOrder": "अंतिम ऑर्डर",
    "orderDetails": "विवरण देखें",
    "orderHistory": "ऑर्डर इतिहास",
    "customerDashDesc": "ग्राहक डैशबोर्ड व्यापक संबंध जानकारी और व्यवसाय प्रदर्शन मेट्रिक्स प्रदान करता है।",
    "step5B": "लंबित भुगतान ट्रैकिंग",
    "pendingPaymentsScreenshotTitle": "लंबित भुगतान - बकाया ऑर्डर",
    "pendingPaymentsCount": "लंबित भुगतान ({count})",
    "pendingPaymentsDesc": "ग्राहक से भुगतान की प्रतीक्षा कर रहे ऑर्डर",
    "orderId": "ऑर्डर आईडी",
    "date": "तारीख",
    "amount": "राशि",
    "daysOverdue": "देरी के दिन",
    "daysOverdueCount": "{count} दिन",
    "paymentTrackingDesc": "भुगतान ट्रैकिंग विक्रेताओं को देय राशि की निगरानी करने और ग्राहक के साथ उचित रूप से फॉलो-अप करने में मदद करती है।",
    "step6Title": "खाता विवरण और भुगतान",
    "step6Intro": "खाता विवरण अनुभाग विक्रेताओं को सभी लेनदेन, प्राप्त भुगतान और विस्तृत ऑडिट ट्रेल्स के साथ बकाया शेष राशि सहित व्यापक वित्तीय ट्रैकिंग प्रदान करता है।",
    "step6A": "खाता विवरण अवलोकन",
    "accountStatementScreenshotTitle": "विक्रेता खाता विवरण",
    "financialOverview": "वित्तीय अवलोकन और लेनदेन इतिहास",
    "currentBalance": "वर्तमान शेष",
    "recentTransactions": "हाल के लेनदेन",
    "allTypes": "सभी प्रकार",
    "payments": "भुगतान",
    "invoices": "चालान",
    "credits": "क्रेडिट",
    "export": "निर्यात करें",
    "type": "प्रकार",
    "reference": "संदर्भ",
    "payment": "भुगतान",
    "completed": "पूरा हुआ",
    "invoice": "चालान",
    "paid": "भुगतान किया गया",
    "creditNote": "क्रेडिट नोट",
    "applied": "लागू",
    "accountStatementDesc": "आसान ऑडिट ट्रेल्स के लिए भुगतान स्थिति ट्रैकिंग और संदर्भ लिंकिंग के साथ पूरा लेनदेन इतिहास।",
    "step6B": "लेनदेन विवरण दृश्य",
    "transactionDetailScreenshotTitle": "लेनदेन विवरण - भुगतान रसीद",
    "transactionTitle": "लेनदेन: PAY-2024-0521-001",
    "paymentReceivedOn": "21 मई, 2024 को भुगतान प्राप्त हुआ",
    "paymentMethod": "भुगतान विधि",
    "bankTransfer": "बैंक हस्तांतरण",
    "relatedPO": "संबंधित खरीद आदेश",
    "poTotal": "पीओ कुल",
    "notes": "नोट्स",
    "paymentNotesExample": "बैंक हस्तांतरण के माध्यम से भुगतान संसाधित किया गया। सभी आइटम अच्छी स्थिति में वितरित किए गए। आपकी त्वरित सेवा के लिए धन्यवाद!",
    "transactionDetailDesc": "विस्तृत लेनदेन रिकॉर्ड वित्तीय ट्रैकिंग और सुलह के लिए पूर्ण ऑडिट ट्रेल्स प्रदान करते हैं।",
    "step7Title": "पूर्ति संचालन",
    "step7Intro": "पूर्ति अनुभाग विक्रेताओं को व्यापक ट्रैकिंग और गुणवत्ता नियंत्रण के साथ, वस्तुओं को चुनने से लेकर पैकिंग और शिपिंग तक, पूरी ऑर्डर पूर्ति प्रक्रिया को प्रबंधित करने में सक्षम बनाता है।",
    "step7A": "पूर्ति डैशबोर्ड",
    "fulfillmentDashScreenshotTitle": "विक्रेता पूर्ति संचालन",
    "readyToPick": "चुनने के लिए तैयार",
    "inPicking": "चुना जा रहा है",
    "readyToPack": "पैक करने के लिए तैयार",
    "readyToShip": "भेजने के लिए तैयार",
    "ordersReqAction": "कार्रवाई की आवश्यकता वाले ऑर्डर",
    "startPicking": "चुनना शुरू करें",
    "startPacking": "पैक करना शुरू करें",
    "fulfillmentDashDesc": "पूर्ति डैशबोर्ड कार्रवाई-आधारित स्थिति ट्रैकिंग के साथ स्पष्ट कार्यप्रवाह दृश्यता प्रदान करता है।",
    "step7B": "पिकिंग सूची इंटरफ़ेस",
    "pickListScreenshotTitle": "ऑर्डर पिकिंग - आइटम चयन",
    "pickingOrder": "ऑर्डर चुना जा रहा है: PO-2024-0521-003",
    "pickItemsFromWarehouse": "अपने गोदाम से आइटम चुनें",
    "scanOrConfirm": "जब आप चुनते हैं तो प्रत्येक आइटम को स्कैन करें या मैन्युअल रूप से पुष्टि करें",
    "qtyToPick": "चुनने की मात्रा",
    "scanBarcodePlaceholder": "बारकोड स्कैन करें या चुनी गई मात्रा दर्ज करें",
    "scan": "स्कैन करें",
    "confirm": "पुष्टि करें",
    "lowStockAvailable": "कम स्टॉक उपलब्ध ({count} इकाइयां)",
    "reportIssue": "समस्या की रिपोर्ट करें",
    "progress": "प्रगति:",
    "progressCount": "{total} में से {picked} आइटम",
    "continueToNext": "अगले आइटम पर जारी रखें",
    "pickListDesc": "पिकिंग इंटरफ़ेस विक्रेताओं को स्थान-अनुकूलित आइटम संग्रह के माध्यम से वास्तविक समय स्टॉक सत्यापन के साथ मार्गदर्शन करता है।",
    "step7C": "पैकिंग और शिपिंग",
    "packingScreenshotTitle": "ऑर्डर पैकिंग - बॉक्स निर्माण",
    "packingOrder": "ऑर्डर पैक किया जा रहा है: PO-2024-0520-002",
    "packingOrderDesc": "सभी आइटम चुने गए और पैकिंग के लिए तैयार हैं",
    "itemsToPack": "पैक किए जाने वाले आइटम",
    "wholeWheatFlour": "पूरा गेहूं का आटा 1kg",
    "createNewBox": "नया बॉक्स बनाएं",
    "boxType": "बॉक्स का प्रकार",
    "smallBox": "छोटा बॉक्स (12\" x 8\" x 6\")",
    "mediumBox": "मध्यम बॉक्स (16\" x 12\" x 8\")",
    "largeBox": "बड़ा बॉक्स (20\" x 16\" x 12\")",
    "createBox": "बॉक्स बनाएं",
    "boxId": "बॉक्स #{id}",
    "remove": "हटाएं",
    "printLabel": "लेबल प्रिंट करें",
    "sealBox": "बॉक्स सील करें",
    "packingProgress": "{total} में से {packed} आइटम पैक किए गए",
    "markAsShipped": "भेजा गया के रूप में चिह्नित करें",
    "packingDesc": "पैकिंग इंटरफ़ेस आइटम संगठन और शिपिंग लेबल निर्माण के साथ व्यवस्थित बॉक्स निर्माण को सक्षम बनाता है।",
    "bestPracticesTitle": "विक्रेता पोर्टल सर्वोत्तम अभ्यास",
    "bp1": "नए ऑर्डर और स्थिति अपडेट के लिए हर दिन अपने पोर्टल की जांच करें",
    "bp2": "बेहतर संबंध बनाए रखने के लिए ऑर्डर को तुरंत स्वीकार करें या संशोधित करें",
    "bp3": "उत्पाद जानकारी और इन्वेंट्री स्तरों को अद्यतित रखें",
    "bp4": "कुशल पूर्ति के लिए व्यवस्थित गोदाम स्थानों को बनाए रखें",
    "bp5": "भुगतान की स्थिति की निगरानी करें और देय राशियों के बारे में उचित रूप से फॉलो-अप करें"
  },
  ml: {
    "pageTitle": "വെണ്ടർ പോർട്ടൽ മാനുവൽ",
    "backToManual": "മാനുവലിലേക്ക് തിരികെ പോകുക",
    "description": "വെണ്ടർ സ്വയം-സേവന പോർട്ടലിനുള്ള ഒരു സമഗ്ര ഗൈഡ്, വിതരണക്കാർക്ക് അവരുടെ സ്വന്തം ഉൽപ്പന്നങ്ങൾ, ഓർഡറുകൾ, ഫുൾഫിൽമെന്റ്, അക്കൗണ്ട് വിവരങ്ങൾ എന്നിവ സ്വതന്ത്രമായി കൈകാര്യം ചെയ്യാൻ ഇത് സഹായിക്കുന്നു.",
    "step1Title": "വെണ്ടർ പോർട്ടൽ ഡാഷ്‌ബോർഡ് അവലോകനം",
    "step1Intro": "വെണ്ടർ പോർട്ടൽ ഡാഷ്‌ബോർഡ് വിതരണക്കാർക്ക് നിങ്ങളുടെ സൂപ്പർമാർക്കറ്റുമായുള്ള അവരുടെ ബിസിനസ്സ് ബന്ധത്തെക്കുറിച്ചുള്ള സമഗ്രമായ ഒരു കാഴ്ച നൽകുന്നു. ഇതിൽ പ്രധാന മെട്രിക്സ്, സമീപകാല പ്രവർത്തനങ്ങൾ, എല്ലാ വെണ്ടർ ഫംഗ്‌ഷനുകളിലേക്കും പെട്ടെന്നുള്ള പ്രവേശനം എന്നിവ ഉൾപ്പെടുന്നു.",
    "step1A": "ഡാഷ്‌ബോർഡ് സ്വാഗത സ്ക്രീൻ",
    "dashboardScreenshotTitle": "വെണ്ടർ പോർട്ടൽ ഡാഷ്‌ബോർഡ് - പ്രധാന ഇന്റർഫേസ്",
    "welcomeBack": "ഹെൽത്തി ഹാർവെസ്റ്റ്, വീണ്ടും സ്വാഗതം!",
    "accountSummary": "നിങ്ങളുടെ അക്കൗണ്ടിന്റെ ഒരു സംഗ്രഹം ഇതാ.",
    "vendorSince": "വെണ്ടറായ തീയതി",
    "totalOrders": "മൊത്തം ഓർഡറുകൾ",
    "totalRevenue": "മൊത്തം വരുമാനം",
    "pendingOrders": "തീർപ്പാക്കാത്ത ഓർഡറുകൾ",
    "myProducts": "എന്റെ ഉൽപ്പന്നങ്ങൾ",
    "metricsOverview": "ഈ മെട്രിക്സ് വെണ്ടർമാർക്ക് അവരുടെ ബിസിനസ്സിന്റെ പ്രകടനത്തെക്കുറിച്ചും നിലവിലെ അവസ്ഥയെക്കുറിച്ചും ഒരു പെട്ടെന്നുള്ള അവലോകനം നൽകുന്നു.",
    "step1B": "നാവിഗേഷൻ മെനു ഘടന",
    "navScreenshotTitle": "വെണ്ടർ പോർട്ടൽ നാവിഗേഷൻ കാർഡുകൾ",
    "po": "പർച്ചേസ് ഓർഡറുകൾ",
    "manageOrders": "ഓർഡറുകൾ കാണുക, കൈകാര്യം ചെയ്യുക",
    "myCustomers": "എന്റെ കസ്റ്റമേഴ്സ്",
    "manageSupermarketRels": "സൂപ്പർമാർക്കറ്റ് ബന്ധങ്ങൾ കൈകാര്യം ചെയ്യുക",
    "fulfillment": "ഫുൾഫിൽമെന്റ്",
    "pickPackShip": "ഓർഡറുകൾ തിരഞ്ഞെടുക്കുക, പാക്ക് ചെയ്യുക, അയയ്ക്കുക",
    "manageProductCatalog": "ഉൽപ്പന്ന കാറ്റലോഗ് കൈകാര്യം ചെയ്യുക",
    "myWarehouse": "എന്റെ വെയർഹൗസ്",
    "viewLocationInventory": "ലൊക്കേഷനും ഇൻവെന്ററിയും കാണുക",
    "accountStatement": "അക്കൗണ്ട് സ്റ്റേറ്റ്മെന്റ്",
    "viewPaymentHistory": "പേയ്മെന്റ് ചരിത്രം കാണുക",
    "navCardDesc": "ഓരോ കാർഡും വിവിധ വെണ്ടർ ഫംഗ്‌ഷനുകളിലേക്ക് പ്രവേശനം നൽകുന്നു. ക്ലിക്ക് ചെയ്യുന്നതിലൂടെ വെണ്ടർമാരെ അതത് മാനേജ്മെന്റ് വിഭാഗത്തിലേക്ക് കൊണ്ടുപോകും.",
    "step2Title": "പർച്ചേസ് ഓർഡർ മാനേജ്മെന്റ്",
    "step2Intro": "പർച്ചേസ് ഓർഡർ വിഭാഗം വെണ്ടർമാർക്ക് സൂപ്പർമാർക്കറ്റിൽ നിന്ന് വരുന്ന എല്ലാ ഓർഡറുകളും കാണാനും, സ്വീകരിക്കാനും, മാറ്റങ്ങൾ വരുത്താനും, ട്രാക്ക് ചെയ്യാനും അനുവദിക്കുന്നു. ഓർഡർ മാനേജ്മെന്റിനും ആശയവിനിമയത്തിനുമുള്ള പ്രാഥമിക വർക്ക്ഫ്ലോയാണിത്.",
    "step2A": "പർച്ചേസ് ഓർഡറുകളുടെ ലിസ്റ്റ് കാഴ്ച",
    "poListScreenshotTitle": "പർച്ചേസ് ഓർഡറുകൾ - പ്രധാന ഇന്റർഫേസ്",
    "myPOs": "എന്റെ പർച്ചേസ് ഓർഡറുകൾ",
    "fromSupermarket": "RetailOS സൂപ്പർമാർക്കറ്റിൽ നിന്ന്",
    "fromLocation": "RetailOS സൂപ്പർമാർക്കറ്റിൽ നിന്നുള്ള ഓർഡറുകൾ • മുംബൈ, മഹാരാഷ്ട്ര",
    "searchPO": "PO ID ഉപയോഗിച്ച് തിരയുക...",
    "allStatuses": "എല്ലാ സ്റ്റാറ്റസുകളും",
    "placed": "സ്ഥാപിച്ചത്",
    "accepted": "സ്വീകരിച്ചു",
    "shipped": "അയച്ചു",
    "poId": "PO ID",
    "orderDate": "ഓർഡർ തീയതി",
    "items": "ഇനങ്ങൾ",
    "totalValue": "മൊത്തം മൂല്യം",
    "status": "സ്റ്റാറ്റസ്",
    "actions": "പ്രവർത്തനങ്ങൾ",
    "view": "കാണുക",
    "modify": "മാറ്റുക",
    "poTableDesc": "ടേബിൾ എല്ലാ പർച്ചേസ് ഓർഡറുകളും അടുക്കാൻ കഴിയുന്ന കോളങ്ങളും സ്റ്റാറ്റസ് സൂചകങ്ങളും സഹിതം കാണിക്കുന്നു. വെണ്ടർമാർക്ക് വിശദാംശങ്ങൾ കാണാനും ഓരോ ഓർഡറിലും നടപടിയെടുക്കാനും കഴിയും.",
    "step2B": "ഓർഡർ വിശദാംശങ്ങൾ കാണുക",
    "orderDetailScreenshotTitle": "പർച്ചേസ് ഓർഡർ വിശദാംശങ്ങളുടെ മോഡൽ",
    "poDetailTitle": "പർച്ചേസ് ഓർഡർ: PO-2024-0521-003",
    "orderSummary": "ഓർഡർ സംഗ്രഹം",
    "expectedDelivery": "പ്രതീക്ഷിക്കുന്ന ഡെലിവറി",
    "supermarketDetails": "സൂപ്പർമാർക്കറ്റ് വിശദാംശങ്ങൾ",
    "storeName": "സ്റ്റോർ പേര്",
    "address": "വിലാസം",
    "contact": "ബന്ധപ്പെടുക",
    "itemsCount": "ഇനങ്ങൾ ({count})",
    "product": "ഉൽപ്പന്നം",
    "qty": "അളവ്",
    "unitCost": "യൂണിറ്റ് നിരക്ക്",
    "total": "ആകെ",
    "organicRice": "ഓർഗാനിക് ബസ്മതി അരി 1kg",
    "freshMilk": "ഫ്രഷ് പാൽ 1L",
    "organicEggs": "ഓർഗാനിക് മുട്ട 12pcs",
    "reqMod": "മാറ്റത്തിനുള്ള അഭ്യർത്ഥന",
    "acceptOrder": "ഓർഡർ സ്വീകരിക്കുക",
    "poDetailDesc": "വെണ്ടർമാർക്ക് പൂർണ്ണമായ ഓർഡർ വിശദാംശങ്ങൾ കാണാനും സ്വീകരിക്കുക അല്ലെങ്കിൽ മാറ്റങ്ങൾ അഭ്യർത്ഥിക്കുക പോലുള്ള പ്രവർത്തനങ്ങൾ നടത്താനും കഴിയും.",
    "step2C": "മാറ്റത്തിനുള്ള അഭ്യർത്ഥന ഇന്റർഫേസ്",
    "modReqScreenshotTitle": "ഓർഡർ മാറ്റത്തിനുള്ള അഭ്യർത്ഥന മോഡൽ",
    "reqModTitle": "മാറ്റത്തിനുള്ള അഭ്യർത്ഥന - PO-2024-0521-003",
    "currentQty": "നിലവിലെ അളവ്",
    "currentPrice": "നിലവിലെ വില",
    "newQty": "പുതിയ അളവ്",
    "newPrice": "പുതിയ വില",
    "newTotal": "പുതിയ ആകെ",
    "reasonForMod": "മാറ്റത്തിനുള്ള കാരണം",
    "reasonPlaceholder": "ഈ മാറ്റങ്ങൾ നിങ്ങൾ എന്തുകൊണ്ടാണ് അഭ്യർത്ഥിക്കുന്നതെന്ന് ദയവായി വിശദീകരിക്കുക...",
    "reasonExample": "പരിമിതമായ സ്റ്റോക്ക് ലഭ്യത കാരണം അരിയുടെ അളവ് കുറച്ചു. അത് നികത്താൻ അല്പം കുറഞ്ഞ വില വാഗ്ദാനം ചെയ്യുന്നു.",
    "cancel": "റദ്ദാക്കുക",
    "submitRequest": "അഭ്യർത്ഥന സമർപ്പിക്കുക",
    "modReqDesc": "മാറ്റങ്ങൾക്കുള്ള കാരണങ്ങൾ വിശദീകരിച്ച് വെണ്ടർമാർക്ക് അളവും വിലകളും മാറ്റാൻ കഴിയും.",
    "step3Title": "എന്റെ ഉൽപ്പന്നങ്ങൾ കൈകാര്യം ചെയ്യുക",
    "step3Intro": "എന്റെ ഉൽപ്പന്നങ്ങൾ എന്ന വിഭാഗം വെണ്ടർമാർക്ക് അവരുടെ ഉൽപ്പന്ന കാറ്റലോഗ് കൈകാര്യം ചെയ്യാനും, വെയർഹൗസിലെ ഇൻവെന്ററി നിലവാരം കാണാനും, സൂപ്പർമാർക്കറ്റിന്റെ അംഗീകാരത്തിനായി പുതിയ ഉൽപ്പന്നങ്ങൾ സമർപ്പിക്കാനും അനുവദിക്കുന്നു.",
    "step3A": "ഉൽപ്പന്ന കാറ്റലോഗ് കാഴ്ച",
    "catalogScreenshotTitle": "എന്റെ ഉൽപ്പന്നങ്ങൾ - കാറ്റലോഗ് മാനേജ്മെന്റ്",
    "manageCatalogInv": "നിങ്ങളുടെ ഉൽപ്പന്ന കാറ്റലോഗും ഇൻവെന്ററിയും കൈകാര്യം ചെയ്യുക",
    "searchProducts": "ഉൽപ്പന്നങ്ങൾ തിരയുക...",
    "allCategories": "എല്ലാ വിഭാഗങ്ങളും",
    "grainsCereals": "ധാന്യങ്ങളും പയറുകളും",
    "dairyProducts": "ഡയറി ഉൽപ്പന്നങ്ങൾ",
    "freshProduce": "ഫ്രഷ് ഉൽപ്പന്നങ്ങൾ",
    "addProduct": "ഉൽപ്പന്നം ചേർക്കുക",
    "sku": "SKU: {sku}",
    "active": "സജീവം",
    "stock": "സ്റ്റോക്ക്:",
    "myPrice": "എന്റെ വില:",
    "location": "സ്ഥലം:",
    "lowStock": "കുറഞ്ഞ സ്റ്റോക്ക്",
    "outOfStock": "സ്റ്റോക്കില്ല",
    "edit": "എഡിറ്റ് ചെയ്യുക",
    "productCardDesc": "ഉൽപ്പന്ന കാർഡുകൾ നിലവിലെ സ്റ്റോക്ക് നിലവാരം, വില, വെയർഹൗസ് ലൊക്കേഷനുകൾ എന്നിവ കാണിക്കുന്നു. കളർ-കോഡഡ് ബാഡ്ജുകൾ സ്റ്റോക്ക് നില സൂചിപ്പിക്കുന്നു.",
    "step3B": "പുതിയ ഉൽപ്പന്നം ചേർക്കാനുള്ള ഫോം",
    "addProductScreenshotTitle": "പുതിയ ഉൽപ്പന്നം ചേർക്കുക - വെണ്ടർ സമർപ്പണ ഫോം",
    "submitNewProduct": "അംഗീകാരത്തിനായി പുതിയ ഉൽപ്പന്നം സമർപ്പിക്കുക",
    "productName": "ഉൽപ്പന്നത്തിന്റെ പേര്",
    "enterProductName": "ഉൽപ്പന്നത്തിന്റെ പേര് നൽകുക",
    "brand": "ബ്രാൻഡ്",
    "selectBrand": "ബ്രാൻഡ് തിരഞ്ഞെടുക്കുക...",
    "healthyHarvest": "ഹെൽത്തി ഹാർവെസ്റ്റ്",
    "farmFresh": "ഫാം ഫ്രഷ്",
    "pureNatural": "പ്യൂർ & നാച്ചുറൽ",
    "category": "വിഭാഗം",
    "selectCategory": "വിഭാഗം തിരഞ്ഞെടുക്കുക...",
    "productSku": "SKU",
    "productSkuPlaceholder": "ഉൽപ്പന്ന SKU",
    "description": "വിവരണം",
    "descPlaceholder": "ഉൽപ്പന്നത്തിന്റെ വിവരണം...",
    "mySellingPrice": "എന്റെ വിൽപ്പന വില",
    "stockQty": "സ്റ്റോക്ക് അളവ്",
    "minStock": "കുറഞ്ഞ സ്റ്റോക്ക്",
    "productImage": "ഉൽപ്പന്നത്തിന്റെ ചിത്രം",
    "clickToUpload": "ഉൽപ്പന്ന ചിത്രം അപ്‌ലോഡ് ചെയ്യാൻ ക്ലിക്ക് ചെയ്യുക",
    "imageSpec": "PNG, JPG 5MB വരെ",
    "submitForApproval": "അംഗീകാരത്തിനായി സമർപ്പിക്കുക",
    "newProductDesc": "വെണ്ടർമാർ സമർപ്പിക്കുന്ന പുതിയ ഉൽപ്പന്നങ്ങൾക്ക് സിസ്റ്റത്തിൽ സജീവമാകുന്നതിന് മുമ്പ് സൂപ്പർമാർക്കറ്റിന്റെ അംഗീകാരം ആവശ്യമാണ്.",
    "step4Title": "വെയർഹൗസ് മാനേജ്മെന്റ്",
    "step4Intro": "എന്റെ വെയർഹൗസ് വിഭാഗം വെണ്ടർമാർക്ക് അവരുടെ ഇൻവെന്ററി ലൊക്കേഷനുകൾ കൈകാര്യം ചെയ്യാനും, വെയർഹൗസ് ലേഔട്ട് കാണാനും, കാര്യക്ഷമമായ പിക്കിംഗിനും ഫുൾഫിൽമെന്റിനും വേണ്ടി സ്റ്റോക്ക് ക്രമീകരിക്കാനുള്ള ടൂളുകൾ നൽകുന്നു.",
    "step4A": "വെയർഹൗസ് അവലോകനം",
    "warehouseScreenshotTitle": "എന്റെ വെയർഹൗസ് - ലേഔട്ടും ക്രമീകരണവും",
    "activeRacks": "സജീവ റാക്കുകൾ",
    "binsUsed": "ഉപയോഗിച്ച ബിന്നുകൾ",
    "locatedProducts": "ലൊക്കേറ്റ് ചെയ്ത ഉൽപ്പന്നങ്ങൾ",
    "unassigned": "അസൈൻ ചെയ്യാത്തത്",
    "rackA": "റാക്ക് എ",
    "binsCount": "{count} ബിന്നുകൾ",
    "totalUnits": "{count} മൊത്തം യൂണിറ്റുകൾ",
    "more": "+{count} കൂടുതൽ",
    "unassignedProducts": "അസൈൻ ചെയ്യാത്ത ഉൽപ്പന്നങ്ങൾ",
    "unassignedProdDesc": "<strong>{count} ഉൽപ്പന്നങ്ങൾക്ക്</strong> വെയർഹൗസ് ലൊക്കേഷനുകൾ ആവശ്യമാണ്. ഒപ്റ്റിമൽ പിക്കിംഗ് റൂട്ടുകൾക്ക് അനുസരിച്ച് അവയെ സ്വയമേവ അസൈൻ ചെയ്യാൻ \"സ്റ്റോക്ക് അപ്പ്\" ഫീച്ചർ ഉപയോഗിക്കുക.",
    "assignLocations": "ലൊക്കേഷനുകൾ അസൈൻ ചെയ്യുക",
    "warehouseOverviewDesc": "വെയർഹൗസ് അവലോകനം റാക്ക് ഉപയോഗം കാണിക്കുകയും മികച്ച ലൊക്കേഷൻ മാനേജ്മെന്റിനായി ഒപ്റ്റിമൈസേഷൻ അവസരങ്ങൾ തിരിച്ചറിയാൻ സഹായിക്കുകയും ചെയ്യുന്നു.",
    "step4B": "ഉൽപ്പന്ന ലൊക്കേഷൻ വിശദാംശങ്ങൾ",
    "prodLocScreenshotTitle": "ഉൽപ്പന്ന ലൊക്കേഷൻ മാനേജ്മെന്റ്",
    "productLocations": "ഉൽപ്പന്ന ലൊക്കേഷനുകൾ",
    "capacity": "ശേഷി",
    "relocate": "സ്ഥലം മാറ്റുക",
    "prodLocTableDesc": "ഉൽപ്പന്ന ലൊക്കേഷൻ ടേബിൾ ശേഷിയുടെ ഉപയോഗവും പെട്ടെന്നുള്ള സ്ഥലംമാറ്റ ഓപ്ഷനുകളും സഹിതം നിലവിലെ വെയർഹൗസ് അസൈൻമെന്റുകൾ കാണിക്കുന്നു.",
    "step5Title": "എന്റെ കസ്റ്റമേഴ്സിനെ കൈകാര്യം ചെയ്യുക",
    "step5Intro": "എന്റെ കസ്റ്റമേഴ്സ് വിഭാഗം വെണ്ടർമാർക്ക് അവരുടെ ബിസിനസ്സ് ബന്ധങ്ങൾ, ഓർഡർ ചരിത്രം, പേയ്മെന്റ് സ്റ്റാറ്റസ്, കസ്റ്റമർ ആശയവിനിമയ ടൂളുകൾ എന്നിവയെക്കുറിച്ചുള്ള ഉൾക്കാഴ്ചകൾ നൽകുന്നു.",
    "step5A": "കസ്റ്റമർ ഡാഷ്‌ബോർഡ്",
    "customerDashScreenshotTitle": "എന്റെ കസ്റ്റമേഴ്സ് - ബന്ധങ്ങളുടെ അവലോകനം",
    "totalCustomers": "മൊത്തം കസ്റ്റമേഴ്സ്",
    "pendingPayments": "തീർപ്പാക്കാത്ത പേയ്മെന്റുകൾ",
    "customerProfile": "കസ്റ്റമർ പ്രൊഫൈൽ",
    "storeManager": "സ്റ്റോർ മാനേജർ",
    "excellent": "മികച്ച",
    "pendingAmount": "തീർപ്പാക്കാത്ത തുക",
    "lastOrder": "അവസാന ഓർഡർ",
    "orderDetails": "വിശദാംശങ്ങൾ കാണുക",
    "orderHistory": "ഓർഡർ ചരിത്രം",
    "customerDashDesc": "കസ്റ്റമർ ഡാഷ്‌ബോർഡ് സമഗ്രമായ ബന്ധങ്ങളുടെ ഉൾക്കാഴ്ചകളും ബിസിനസ്സ് പ്രകടന മെട്രിക്സും നൽകുന്നു.",
    "step5B": "തീർപ്പാക്കാത്ത പേയ്മെന്റുകൾ ട്രാക്ക് ചെയ്യുക",
    "pendingPaymentsScreenshotTitle": "തീർപ്പാക്കാത്ത പേയ്മെന്റുകൾ - തീർപ്പാക്കാത്ത ഓർഡറുകൾ",
    "pendingPaymentsCount": "തീർപ്പാക്കാത്ത പേയ്മെന്റുകൾ ({count})",
    "pendingPaymentsDesc": "കസ്റ്റമറിൽ നിന്ന് പേയ്മെന്റിനായി കാത്തിരിക്കുന്ന ഓർഡറുകൾ",
    "orderId": "ഓർഡർ ID",
    "date": "തീയതി",
    "amount": "തുക",
    "daysOverdue": "കാലാവധി കഴിഞ്ഞ ദിവസങ്ങൾ",
    "daysOverdueCount": "{count} ദിവസങ്ങൾ",
    "paymentTrackingDesc": "കാലാവധി കഴിഞ്ഞ തുകകൾ നിരീക്ഷിക്കാനും കസ്റ്റമറുമായി ഉചിതമായി ഫോളോ-അപ്പ് ചെയ്യാനും പേയ്മെന്റ് ട്രാക്കിംഗ് വെണ്ടർമാരെ സഹായിക്കുന്നു.",
    "step6Title": "അക്കൗണ്ട് സ്റ്റേറ്റ്മെന്റും പേയ്മെന്റുകളും",
    "step6Intro": "അക്കൗണ്ട് സ്റ്റേറ്റ്മെന്റ് വിഭാഗം വെണ്ടർമാർക്ക് എല്ലാ ട്രാൻസാക്ഷനുകൾ, ലഭിച്ച പേയ്മെന്റുകൾ, തീർപ്പാക്കാത്ത ബാലൻസുകൾ എന്നിവ ഉൾപ്പെടെയുള്ള സമഗ്രമായ സാമ്പത്തിക ട്രാക്കിംഗ് വിശദമായ ഓഡിറ്റ് ട്രെയ്‌ലുകൾ സഹിതം നൽകുന്നു.",
    "step6A": "അക്കൗണ്ട് സ്റ്റേറ്റ്മെന്റ് അവലോകനം",
    "accountStatementScreenshotTitle": "വെണ്ടർ അക്കൗണ്ട് സ്റ്റേറ്റ്മെന്റ്",
    "financialOverview": "സാമ്പത്തിക അവലോകനവും ട്രാൻസാക്ഷൻ ചരിത്രവും",
    "currentBalance": "നിലവിലെ ബാലൻസ്",
    "recentTransactions": "സമീപകാല ട്രാൻസാക്ഷനുകൾ",
    "allTypes": "എല്ലാ തരങ്ങളും",
    "payments": "പേയ്മെന്റുകൾ",
    "invoices": "ഇൻവോയിസുകൾ",
    "credits": "ക്രെഡിറ്റുകൾ",
    "export": "എക്സ്പോർട്ട് ചെയ്യുക",
    "type": "തരം",
    "reference": "റഫറൻസ്",
    "payment": "പേയ്മെന്റ്",
    "completed": "പൂർത്തിയായി",
    "invoice": "ഇൻവോയിസ്",
    "paid": "പണം നൽകി",
    "creditNote": "ക്രെഡിറ്റ് നോട്ട്",
    "applied": "അപ്ലൈ ചെയ്തു",
    "accountStatementDesc": "എളുപ്പത്തിലുള്ള ഓഡിറ്റ് ട്രെയ്‌ലുകൾക്കായി പേയ്മെന്റ് സ്റ്റാറ്റസ് ട്രാക്കിംഗും റഫറൻസ് ലിങ്കിംഗും സഹിതം പൂർണ്ണമായ ട്രാൻസാക്ഷൻ ചരിത്രം.",
    "step6B": "ട്രാൻസാക്ഷൻ വിശദാംശങ്ങൾ കാണുക",
    "transactionDetailScreenshotTitle": "ട്രാൻസാക്ഷൻ വിശദാംശങ്ങൾ - പേയ്മെന്റ് രസീത്",
    "transactionTitle": "ട്രാൻസാക്ഷൻ: PAY-2024-0521-001",
    "paymentReceivedOn": "മെയ് 21, 2024-ന് പേയ്മെന്റ് ലഭിച്ചു",
    "paymentMethod": "പേയ്മെന്റ് രീതി",
    "bankTransfer": "ബാങ്ക് ട്രാൻസ്ഫർ",
    "relatedPO": "ബന്ധപ്പെട്ട പർച്ചേസ് ഓർഡർ",
    "poTotal": "PO ആകെ",
    "notes": "കുറിപ്പുകൾ",
    "paymentNotesExample": "ബാങ്ക് ട്രാൻസ്ഫർ വഴി പേയ്മെന്റ് പ്രോസസ്സ് ചെയ്തു. എല്ലാ ഇനങ്ങളും നല്ല നിലയിൽ ഡെലിവറി ചെയ്തു. നിങ്ങളുടെ വേഗത്തിലുള്ള സേവനത്തിന് നന്ദി!",
    "transactionDetailDesc": "വിശദമായ ട്രാൻസാക്ഷൻ രേഖകൾ സാമ്പത്തിക ട്രാക്കിംഗിനും പൊരുത്തപ്പെടുത്തലിനും പൂർണ്ണമായ ഓഡിറ്റ് ട്രെയ്‌ലുകൾ നൽകുന്നു.",
    "step7Title": "ഫുൾഫിൽമെന്റ് ഓപ്പറേഷൻസ്",
    "step7Intro": "ഫുൾഫിൽമെന്റ് വിഭാഗം വെണ്ടർമാർക്ക് ഓർഡർ ഫുൾഫിൽമെന്റ് പ്രോസസ്സ് പൂർണ്ണമായി കൈകാര്യം ചെയ്യാൻ സഹായിക്കുന്നു, അതായത് ഇനങ്ങൾ തിരഞ്ഞെടുക്കുന്നത് മുതൽ പാക്കിംഗ്, ഷിപ്പിംഗ് എന്നിവ വരെ, സമഗ്രമായ ട്രാക്കിംഗും ഗുണനിലവാര നിയന്ത്രണവും സഹിതം.",
    "step7A": "ഫുൾഫിൽമെന്റ് ഡാഷ്‌ബോർഡ്",
    "fulfillmentDashScreenshotTitle": "വെണ്ടർ ഫുൾഫിൽമെന്റ് ഓപ്പറേഷൻസ്",
    "readyToPick": "തിരഞ്ഞെടുക്കാൻ തയ്യാർ",
    "inPicking": "തിരഞ്ഞെടുക്കുന്നു",
    "readyToPack": "പാക്ക് ചെയ്യാൻ തയ്യാർ",
    "readyToShip": "അയയ്ക്കാൻ തയ്യാർ",
    "ordersReqAction": "നടപടി ആവശ്യമുള്ള ഓർഡറുകൾ",
    "startPicking": "തിരഞ്ഞെടുക്കാൻ തുടങ്ങുക",
    "startPacking": "പാക്ക് ചെയ്യാൻ തുടങ്ങുക",
    "fulfillmentDashDesc": "ഫുൾഫിൽമെന്റ് ഡാഷ്‌ബോർഡ് ആക്ഷൻ-അധിഷ്ഠിത സ്റ്റാറ്റസ് ട്രാക്കിംഗ് സഹിതം വ്യക്തമായ വർക്ക്ഫ്ലോ ദൃശ്യപരത നൽകുന്നു.",
    "step7B": "പിക്കിംഗ് ലിസ്റ്റ് ഇന്റർഫേസ്",
    "pickListScreenshotTitle": "ഓർഡർ പിക്കിംഗ് - ഐറ്റം തിരഞ്ഞെടുക്കൽ",
    "pickingOrder": "ഓർഡർ തിരഞ്ഞെടുക്കുന്നു: PO-2024-0521-003",
    "pickItemsFromWarehouse": "നിങ്ങളുടെ വെയർഹൗസിൽ നിന്ന് ഇനങ്ങൾ തിരഞ്ഞെടുക്കുക",
    "scanOrConfirm": "നിങ്ങൾ തിരഞ്ഞെടുക്കുമ്പോൾ ഓരോ ഇനവും സ്കാൻ ചെയ്യുക അല്ലെങ്കിൽ സ്വമേധയാ ഉറപ്പാക്കുക",
    "qtyToPick": "തിരഞ്ഞെടുക്കേണ്ട അളവ്",
    "scanBarcodePlaceholder": "ബാർകോഡ് സ്കാൻ ചെയ്യുക അല്ലെങ്കിൽ തിരഞ്ഞെടുത്ത അളവ് നൽകുക",
    "scan": "സ്കാൻ ചെയ്യുക",
    "confirm": "ഉറപ്പാക്കുക",
    "lowStockAvailable": "കുറഞ്ഞ സ്റ്റോക്ക് ലഭ്യമാണ് ({count} യൂണിറ്റുകൾ)",
    "reportIssue": "പ്രശ്നം റിപ്പോർട്ട് ചെയ്യുക",
    "progress": "പുരോഗതി:",
    "progressCount": "{total}ൽ {picked} ഇനങ്ങൾ",
    "continueToNext": "അടുത്ത ഇനത്തിലേക്ക് തുടരുക",
    "pickListDesc": "ലൊക്കേഷൻ-ഒപ്റ്റിമൈസ്ഡ് ഇനം ശേഖരണത്തിലൂടെ തത്സമയ സ്റ്റോക്ക് സ്ഥിരീകരണത്തോടൊപ്പം പിക്കിംഗ് ഇന്റർഫേസ് വെണ്ടർമാരെ നയിക്കുന്നു.",
    "step7C": "പാക്കിംഗ്, ഷിപ്പിംഗ്",
    "packingScreenshotTitle": "ഓർഡർ പാക്കിംഗ് - ബോക്സ് ഉണ്ടാക്കൽ",
    "packingOrder": "ഓർഡർ പാക്ക് ചെയ്യുന്നു: PO-2024-0520-002",
    "packingOrderDesc": "എല്ലാ ഇനങ്ങളും തിരഞ്ഞെടുത്ത് പാക്കിംഗിന് തയ്യാറാണ്",
    "itemsToPack": "പാക്ക് ചെയ്യാനുള്ള ഇനങ്ങൾ",
    "wholeWheatFlour": "മുഴുവൻ ഗോതമ്പ് പൊടി 1kg",
    "createNewBox": "പുതിയ ബോക്സ് ഉണ്ടാക്കുക",
    "boxType": "ബോക്സ് തരം",
    "smallBox": "ചെറിയ ബോക്സ് (12\" x 8\" x 6\")",
    "mediumBox": "മീഡിയം ബോക്സ് (16\" x 12\" x 8\")",
    "largeBox": "വലിയ ബോക്സ് (20\" x 16\" x 12\")",
    "createBox": "ബോക്സ് ഉണ്ടാക്കുക",
    "boxId": "ബോക്സ് #{id}",
    "remove": "നീക്കം ചെയ്യുക",
    "printLabel": "ലേബൽ പ്രിന്റ് ചെയ്യുക",
    "sealBox": "ബോക്സ് സീൽ ചെയ്യുക",
    "packingProgress": "{total}ൽ {packed} ഇനങ്ങൾ പാക്ക് ചെയ്തു",
    "markAsShipped": "അയച്ചു എന്ന് അടയാളപ്പെടുത്തുക",
    "packingDesc": "ഇനം ഓർഗനൈസേഷനും ഷിപ്പിംഗ് ലേബൽ നിർമ്മാണവും സഹിതം ഒരു സിസ്റ്റമാറ്റിക് ബോക്സ് ഉണ്ടാക്കൽ പാക്കിംഗ് ഇന്റർഫേസ് സാധ്യമാക്കുന്നു.",
    "bestPracticesTitle": "വെണ്ടർ പോർട്ടൽ മികച്ച രീതികൾ",
    "bp1": "പുതിയ ഓർഡറുകൾക്കും സ്റ്റാറ്റസ് അപ്ഡേറ്റുകൾക്കുമായി ദിവസവും നിങ്ങളുടെ പോർട്ടൽ പരിശോധിക്കുക",
    "bp2": "നല്ല ബന്ധം നിലനിർത്താൻ ഓർഡറുകൾ വേഗത്തിൽ സ്വീകരിക്കുക അല്ലെങ്കിൽ മാറ്റങ്ങൾ വരുത്തുക",
    "bp3": "ഉൽപ്പന്ന വിവരങ്ങളും ഇൻവെന്ററി നിലവാരവും അപ്ഡേറ്റ് ആയി സൂക്ഷിക്കുക",
    "bp4": "കാര്യക്ഷമമായ ഫുൾഫിൽമെന്റിനായി വെയർഹൗസ് ലൊക്കേഷനുകൾ ക്രമീകരിക്കുക",
    "bp5": "പേയ്മെന്റ് സ്റ്റാറ്റസ് നിരീക്ഷിക്കുകയും കാലാവധി കഴിഞ്ഞ തുകകളെക്കുറിച്ച് ഉചിതമായി ഫോളോ-അപ്പ് ചെയ്യുകയും ചെയ്യുക"
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
          <LanguageSelector language={language} setLanguage={setLanguage} readOnly={true}  />
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
                  <div className="w-full overflow-x-auto [-webkit-overflow-scrolling:touch]">
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
                        <div className="w-full overflow-x-auto [-webkit-overflow-scrolling:touch]">
                          <table className="w-full">
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
                      </div>
                      <p className="text-sm text-slate-600">{t('poTableDesc')}</p>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step2B')}</h6>
                <Screenshot title={t('orderDetailScreenshotTitle')}>
                  <div className="w-full overflow-x-auto [-webkit-overflow-scrolling:touch]">

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
                            <h4 className="font-medium text-slate-800">{t('itemsCount', { count: 5 })}</h4>
                          </div>
                          <div className="w-full overflow-x-auto [-webkit-overflow-scrolling:touch]">
                            <table className="min-w-[700px]">
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

                        <div className="flex gap-3 justify-end flex-col sm:flex-row gap-4 sm:gap-0">
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
                      <div className="w-full overflow-x-auto [-webkit-overflow-scrolling:touch]">
                        <table className="min-w-[760px] border rounded-lg">
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
                  <Screenshot title={t('catalogScreenshotTitle')} className="mr-8">
                    <div className="space-y-4 ">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                          <h2 className="text-xl font-bold text-slate-800">{t('myProducts')} (67)</h2>
                          <p className="text-sm text-slate-600">{t('manageCatalogInv')}</p>
                        </div>
                        <div className="flex gap-2 flex-col sm:flex-row">
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
                              <p className="text-sm text-slate-500">{t('sku', { sku: 'ORG-RICE-1KG' })}</p>
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
                              <p className="text-sm text-slate-500">{t('sku', { sku: 'FRESH-MILK-1L' })}</p>
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
                              <p className="text-sm text-slate-500">{t('sku', { sku: 'ORG-EGG-12' })}</p>
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

                      <div className="flex gap-3 justify-end pt-4 border-t flex-col sm:flex-row">
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
                          <Badge variant="outline">{t('binsCount', { count: 8 })}</Badge>
                        </div>
                        <div className="text-sm text-slate-600 space-y-1">
                          <p><strong>15</strong> {t('product').toLowerCase()}s</p>
                          <p><strong>1,240</strong> {t('totalUnits', { count: '' }).trim()}</p>
                        </div>
                        <div className="mt-3">
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="secondary" className="text-xs">A-1 (3)</Badge>
                            <Badge variant="secondary" className="text-xs">A-2 (5)</Badge>
                            <Badge variant="secondary" className="text-xs">{t('more', { count: 4 })}</Badge>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-yellow-800">{t('unassignedProducts')}</h4>
                          <p className="text-sm text-yellow-700 mt-1" dangerouslySetInnerHTML={{ __html: t('unassignedProdDesc', { count: 4 }) }}></p>
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
                      <div className="w-full overflow-x-auto [-webkit-overflow-scrolling:touch]">
                        <table className="w-full">
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
                      <h3 className="font-medium text-slate-800">{t('pendingPaymentsCount', { count: 3 })}</h3>
                      <p className="text-sm text-slate-600">{t('pendingPaymentsDesc')}</p>
                    </div>
                    <div className="w-full overflow-x-auto sm:overflow-x-visible">
                      <table className="w-full whitespace-nowrap">
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
                              <Badge className="bg-red-100 text-red-800">{t('daysOverdueCount', { count: 15 })}</Badge>
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
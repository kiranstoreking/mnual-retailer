import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft, Receipt, Package, Truck, CheckCircle, Clock,
  AlertTriangle, Eye, Edit, Plus, Search, Filter, Calendar,
  DollarSign, Building2, BarChart3, MapPin, Zap, Grid, List,
  User, FileText, Camera, Scan
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
  <div className="flex items-start gap-4 mt-8 w-full">
    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
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
    pageTitle: "Purchase Orders Manual",
    backToManual: "Back to Manual",
    description: "Comprehensive guide to managing purchase orders from creation to receipt, including vendor negotiations, auto-allocation, purchase baskets, and detailed tracking throughout the procurement lifecycle.",

    step1Title: "Purchase Order Dashboard Overview",
    step1Intro: "The Purchase Order Dashboard is your command center for all procurement activities. It provides real-time statistics, workflow management, and comprehensive tracking of orders from placement to receipt.",
    step1A: "Accessing Purchase Orders Dashboard",
    navScreenshotTitle: "Navigate to Purchase Orders from Inventory Dashboard",
    inventoryDashboard: "Inventory Dashboard",
    manageInv: "Manage your products, stock levels, and procurement",
    poButton: "Purchase Orders",
    productsButton: "Products",
    accessNote: "Access Purchase Orders either from the Inventory Dashboard or directly from the sidebar navigation.",
    step1B: "Purchase Order Statistics Overview",
    statsScreenshotTitle: "Purchase Order Dashboard - Key Statistics",
    poPageTitle: "Purchase Orders",
    trackOrders: "Track orders from vendors and manage incoming stock.",
    createPO: "Create Purchase Order",
    totalPOs: "Total POs",
    pending: "Pending",
    inTransit: "In Transit",
    totalValue: "Total Value",

    step2Title: "Overview Tab - Recent Purchase Orders",
    step2Intro: "The Overview tab displays your most recent purchase orders with comprehensive details including order status, vendor information, and quick action buttons for efficient management.",
    step2A: "Recent Purchase Orders Table View",
    listScreenshotTitle: "Overview Tab - Purchase Orders List",
    recentPOs: "Recent Purchase Orders",
    list: "List",
    cards: "Cards",
    poId: "PO ID",
    product: "Product",
    vendor: "Vendor",
    orderDate: "Order Date",
    totalCost: "Total Cost",
    status: "Status",
    actions: "Actions",
    freshSpinach: "Fresh Spinach",
    units: "{count} units",
    healthyHarvest: "Healthy Harvest",
    shipped: "Shipped",
    basmatiRice: "Organic Basmati Rice",
    goldenGrains: "Golden Grains",
    receivedFull: "Received Full",
    step2B: "Card View for Purchase Orders",
    cardScreenshotTitle: "Overview Tab - Purchase Orders Card View",
    viewDetails: "View Details",

    step3Title: "Pending Modifications Tab - Vendor Negotiations",
    step3Intro: "This critical tab handles vendor modification requests when suppliers propose changes to quantity, pricing, or delivery terms. It provides a negotiation interface for approving or countering vendor proposals.",
    step3A: "Modification Requests Overview",
    modScreenshotTitle: "Pending Modifications Tab Interface",
    vendorModReqs: "Vendor Modification Requests",
    reviewModReqs: "Review and respond to change requests from your vendors.",
    itemsChanged: "Items Changed",
    review: "Review",
    freshValleyFarms: "Fresh Valley Farms",
    step3B: "Vendor Modification Review Modal",
    reviewModalScreenshotTitle: "PO Review Modal - Negotiation Interface",
    negotiatePO: "Negotiate Purchase Order: PO-2024-0521-002",
    vendorReviewNote: "Vendor: Fresh Valley Farms. Review their request and submit your response.",
    itemMods: "Item Modifications",
    original: "Original",
    vendorRequest: "Vendor Request",
    yourProposal: "Your Proposal",
    freshTomatoes: "Fresh Tomatoes",
    negotiationHistory: "Negotiation History",
    vendorKey: "Vendor",
    vendorNote: "Requested quantity reduction due to supply constraints",
    notesForVendor: "Notes for Vendor",
    explainCounter: "Explain your counter-proposal...",
    cancel: "Cancel",
    acceptChanges: "Accept Vendor's Changes",
    submitCounter: "Submit Counter-Offer",

    step4Title: "Purchase Basket Tab - Smart Procurement Planning",
    step4Intro: "The Purchase Basket is an intelligent procurement planning tool that helps you collect products needed for purchase, analyze requirements, and create optimized purchase orders with vendor suggestions and pricing intelligence.",
    step4A: "Purchase Basket Overview Statistics",
    basketStatsScreenshotTitle: "Purchase Basket Tab - Statistics Overview",
    totalItems: "Total Items",
    estTotalValue: "Est. Total Value",
    urgentItems: "Urgent Items",
    vendors: "Vendors",
    step4B: "Purchase Basket Items Management",
    basketItemsScreenshotTitle: "Purchase Basket - Items List with Controls",
    purchaseBasketTitle: "Purchase Basket ({count} items)",
    allPriorities: "All Priorities",
    urgent: "Urgent",
    high: "High",
    medium: "Medium",
    low: "Low",
    addItem: "Add Item",
    createPOs: "Create POs ({count})",
    searchProducts: "Search products...",
    itemsSelected: "{count} items selected • Est. value: ₹{value}",
    clearSelection: "Clear Selection",
    currentStock: "Current Stock",
    desiredQty: "Desired Qty",
    unitPrice: "Unit Price",
    priority: "Priority",
    reason: "Reason",
    suggestedVendor: "Suggested Vendor",
    estTotal: "Est. Total",
    targetDate: "Target Date",
    addedBy: "Added By",
    freshMilk: "Fresh Milk 1L",
    min: "Min: {count}",
    clickToEdit: "Click to edit",
    lowStock: "low stock",
    selectVendor: "Select Vendor",
    dairyFresh: "Dairy Fresh Co.",
    pureMilk: "Pure Milk Ltd.",
    step4C: "Adding Products to Purchase Basket",
    addProductModalScreenshotTitle: "Product Selection Modal for Basket",
    addProductToBasket: "Add Products to Purchase Basket",
    addProductNote: "Select products and quantities to add to your procurement planning.",
    searchProductsSku: "Search products by name or SKU...",
    allCategories: "All Categories",
    dairyProducts: "Dairy Products",
    vegetables: "Vegetables",
    grainsCereals: "Grains & Cereals",
    organicBananas: "Organic Bananas",
    minLevel: "Min Level",
    costPrice: "Cost Price",
    quantity: "Quantity",
    lowInStock: "Low",
    freshOranges: "Fresh Oranges",
    add_to_basket: "Add to Basket",
    numSelected: "{count} products selected",

    step5Title: "Receive Orders Tab & Goods Receipt Process",
    step5Intro: "This tab is the entry point for the entire goods receipt process. It lists all incoming shipments and allows you to initiate the receiving process, where you verify quantities, record damages, and update stock levels with precision.",
    step5A: "Receive Orders Interface",
    receiveOrdersScreenshotTitle: "Receive Orders Tab - Dashboard View",
    ordersReadyToReceive: "Orders Ready to Receive ({count})",
    searchPOVendor: "Search PO ID, Vendor...",
    allStatuses: "All Statuses",
    partiallyReceived: "Partially Received",
    receiveOrdersNote: "This dashboard shows all purchase orders that are currently in transit or partially received. To begin the goods receipt process for an order, click the green \"Receive\" button.",
    receive: "Receive",
    step5B: "The Goods Receipt Modal - Detailed Walkthrough",
    goodsReceiptNote: "Clicking \"Receive\" opens the comprehensive Goods Receipt modal. This is where the physical process of verifying and documenting the received items takes place.",
    goodsReceiptModalScreenshotTitle: "Goods Receipt Modal - Initial View",

    receivePurchaseOrder: "Receive Purchase Order: PO-2024-0521-001",
    vendorInvoiceDetails: "Vendor Invoice Details",
    invoiceNumber: "Invoice Number",
    invoiceAmount: "Invoice Amount",
    uploadInvoice: "Upload Invoice",
    attachFile: "Attach File",
    scanBarcode: "Scan Barcode to Receive",
    scanBarcodePlaceholder: "Scan product barcode to automatically select and update quantity...",
    ordered: "Ordered",
    receivedQty: "Received Qty",
    damagedQty: "Damaged Qty",
    mfgExpDate: "MFG / EXP Date",
    unitCost: "Unit Cost",
    notes: "Notes",
    addNotes: "Add notes...",
    brokenBox: "Broken box",
    discrepancyFound: "Discrepancy Found",
    discrepancyDetails: "<strong>Organic Tomatoes:</strong> Ordered 100, Received 80, Damaged 5. <strong>Missing 15 units.</strong> This will be recorded in the system.",
    overallReceivingNotes: "Overall Receiving Notes",
    overallNotesPlaceholder: "e.g., Shipment arrived on time, one box was damaged.",
    confirmReceiveGoods: "Confirm & Receive Goods",
    step5C: "Field-by-Field Explanation",
    barcodeScannerHelp: "The most efficient way to receive items. Scanning a product's barcode will automatically highlight its row and place the cursor in the \"Received Qty\" field.",
    receivedQtyHelp: "Enter the actual count of goods received in sellable condition. The system automatically calculates any shortfalls.",
    damagedQtyHelp: "Enter the count of items that arrived damaged or are otherwise unsellable.",
    cameraIconHelp: "Crucial for accountability. Click this to upload photos of damaged items. This provides evidence for claims or returns to the vendor.",
    unitCostHelp: "This field shows the agreed-upon cost. If the vendor's invoice shows a different price, you can update it here. This ensures your Cost of Goods Sold (COGS) is accurate from the moment of receipt.",
    mfgExpDateHelp: "Enter the manufacturing and expiry dates from the product packaging. This is essential for FEFO (First-Expired, First-Out) inventory management and quality control.",
    notesHelp: "Use this for any item-specific comments, such as \"packaging slightly torn but product okay.\"",
    confirmReceiveHelp: "Clicking this button finalizes the process. It updates product stock levels, moves damaged goods to a non-sellable category, creates ledger entries for accounting, and updates the PO status to \"Received Full\" or \"Received Partial\".",
    step5D: "Post-Receipt Confirmation",
    postReceiptScreenshotTitle: "Goods Receipt Success Confirmation",
    goodsReceivedSuccess: "Goods Received Successfully!",
    stockLevelsUpdated: "Stock levels for PO-2024-0521-001 have been updated.",
    spinachUpdate: "- Fresh Spinach: 50 units added to sellable stock.",
    tomatoesUpdate: "- Organic Tomatoes: 80 units added to sellable stock, 5 units added to non-sellable.",
    backToDashboard: "Back to Dashboard",

    step6Title: "Auto-Allocation Tab - Smart Warehouse Location Assignment",
    step6Intro: "The Auto-Allocation system intelligently assigns warehouse locations to products from active purchase orders that haven't been allocated yet. It uses smart algorithms to optimize storage efficiency and accessibility.",
    step6A: "Auto-Allocation Dashboard",
    autoAllocScreenshotTitle: "Auto-Allocation Tab - Products Awaiting Location Assignment",
    autoAllocLocation: "Auto Allocation Location",
    autoAllocNote: "Products from active purchase orders awaiting warehouse location assignment",
    autoAllocate: "Auto Allocate {count}",
    searchByNamePOVendor: "Search by product name, PO ID, or vendor...",
    allVendors: "All Vendors",
    allStatus: "All Status",
    placed: "Placed",
    numProducts: "{count} Products",
    numSelectedCards: "{count} Selected",
    selectAll: "Select All ({count} products)",
    step6B: "Product Allocation Cards",
    allocCardsScreenshotTitle: "Auto-Allocation Cards - Products Needing Location Assignment",
    numReceived: "({count} received)",
    expectedDelivery: "Expected Delivery",
    step6C: "Auto-Allocation Results",
    allocResultsScreenshotTitle: "Allocation Results - Success and Error Summary",
    allocationResults: "Allocation Results",
    location: "Location",
    successfullyAllocated: "Successfully allocated",
    capacityExceeded: "Capacity exceeded",
    manualAllocRequired: "Manual allocation required",
    closeLogs: "Close Logs",

    step7Title: "Recently Received Tab - Goods Receipt History",
    step7Intro: "This tab provides comprehensive visibility into recently received goods with detailed filters, damage tracking, and location information. It supports both product-focused and vendor-focused views for different analytical needs.",
    step7A: "Recently Received Statistics Dashboard",
    recentStatsScreenshotTitle: "Recently Received Tab - Summary Statistics",
    orders: "Orders",
    items: "Items",
    damaged: "Damaged",
    ordersWithIssues: "Orders w/ Issues",
    step7B: "By Product Tab - Detailed Product View",
    byProductScreenshotTitle: "Recently Received - By Product View with Filters",

    recentlyReceivedProducts: "Recently Received Products ({count} items)",
    searchPOVendorProduct: "Search by PO ID, vendor, or product...",
    last7Days: "Last 7 Days",
    last24Hours: "Last 24 Hours",
    last30Days: "Last 30 Days",
    last90Days: "Last 90 Days",
    allReceived: "All Received",
    fullyReceived: "Fully Received",
    orderedQty: "Ordered Qty",
    deliveryDate: "Delivery Date",
    missing: "Missing: {count}",
    damagedUnits: "Damaged: {count} units",
    damageReason: "Packaging damage during transport",
    notAllocated: "Not Allocated",
    step7C: "By Vendor Tab - Vendor Performance Analysis",
    byVendorScreenshotTitle: "Recently Received - By Vendor Performance Analysis",
    recentlyReceivedByVendor: "Recently Received by Vendor ({count} vendors)",
    searchVendors: "Search vendors...",
    numOrdersProducts: "{orders} orders • {products} products",
    itemsReceived: "Items Received",
    productLines: "Product Lines",
    recentOrders: "Recent Orders:",
    moreProducts: "+{count} more products",
    viewVendor: "View Vendor",

    step8Title: "Creating New Purchase Orders",
    step8Intro: "The Purchase Order creation process is streamlined and intelligent, allowing you to quickly select products, choose vendors, and generate professional purchase orders with automatic calculations and smart suggestions.",
    step8A: "Accessing the Create Purchase Order Function",
    createPOScreenshotTitle: "Create Purchase Order Button Access",
    createPONote: "Clicking the \"Create Purchase Order\" button will redirect you to a comprehensive order creation interface where you can build your purchase orders step by step with intelligent product suggestions and vendor recommendations.",
  },
  kn: {
    pageTitle: "ಖರೀದಿ ಆದೇಶಗಳ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ರಚನೆಯಿಂದ ಹಿಡಿದು ಸ್ವೀಕೃತಿಯವರೆಗೆ ಖರೀದಿ ಆದೇಶಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿ, ಇದರಲ್ಲಿ ಮಾರಾಟಗಾರರ ಮಾತುಕತೆ, ಸ್ವಯಂ-ಹಂಚಿಕೆ, ಖರೀದಿ ಬುಟ್ಟಿಗಳು ಮತ್ತು ಸಂಗ್ರಹಣಾ ಜೀವನಚಕ್ರದಾದ್ಯಂತ ವಿವರವಾದ ಟ್ರ್ಯಾಕಿಂಗ್ ಸೇರಿವೆ.",
    step1Title: "ಖರೀದಿ ಆದೇಶ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ಖರೀದಿ ಆದೇಶ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ನಿಮ್ಮ ಎಲ್ಲಾ ಖರೀದಿ ಚಟುವಟಿಕೆಗಳಿಗೆ ನಿಮ್ಮ ಆಜ್ಞಾ ಕೇಂದ್ರವಾಗಿದೆ. ಇದು ನೈಜ-ಸಮಯದ ಅಂಕಿಅಂಶಗಳು, ಕೆಲಸದ ಹರಿವಿನ ನಿರ್ವಹಣೆ ಮತ್ತು ಆದೇಶಗಳ ನಿಯೋಜನೆಯಿಂದ ಸ್ವೀಕೃತಿಯವರೆಗೆ ಸಮಗ್ರ ಟ್ರ್ಯಾಕಿಂಗ್ ಅನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step1A: "ಖರೀದಿ ಆದೇಶ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರವೇಶಿಸಲಾಗುತ್ತಿದೆ",
    navScreenshotTitle: "ಇನ್ವೆಂಟರಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಿಂದ ಖರೀದಿ ಆದೇಶಗಳಿಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ",
    inventoryDashboard: "ದಾಸ್ತಾನು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    manageInv: "ನಿಮ್ಮ ಉತ್ಪನ್ನಗಳು, ಸ್ಟಾಕ್ ಮಟ್ಟಗಳು ಮತ್ತು ಸಂಗ್ರಹಣೆಯನ್ನು ನಿರ್ವಹಿಸಿ",
    poButton: "ಖರೀದಿ ಆದೇಶಗಳು",
    productsButton: "ಉತ್ಪನ್ನಗಳು",
    accessNote: "ಇನ್ವೆಂಟರಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಿಂದ ಅಥವಾ ನೇರವಾಗಿ ಸೈಡ್‌ಬಾರ್ ನ್ಯಾವಿಗೇಷನ್‌ನಿಂದ ಖರೀದಿ ಆದೇಶಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.",
    step1B: "ಖರೀದಿ ಆದೇಶ ಅಂಕಿಅಂಶಗಳ ಅವಲೋಕನ",
    statsScreenshotTitle: "ಖರೀದಿ ಆದೇಶ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ - ಪ್ರಮುಖ ಅಂಕಿಅಂಶಗಳು",
    poPageTitle: "ಖರೀದಿ ಆದೇಶಗಳು",
    trackOrders: "ಮಾರಾಟಗಾರರಿಂದ ಆದೇಶಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ಒಳಬರುವ ಸ್ಟಾಕ್ ಅನ್ನು ನಿರ್ವಹಿಸಿ.",
    createPO: "ಖರೀದಿ ಆದೇಶವನ್ನು ರಚಿಸಿ",
    totalPOs: "ಒಟ್ಟು ಪಿಒಗಳು",
    pending: "ಬಾಕಿಯಿದೆ",
    inTransit: "ಸಾಗಣೆಯಲ್ಲಿದೆ",
    totalValue: "ಒಟ್ಟು ಮೌಲ್ಯ",
    step2Title: "ಅವಲೋಕನ ಟ್ಯಾಬ್ - ಇತ್ತೀಚಿನ ಖರೀದಿ ಆದೇಶಗಳು",
    step2Intro: "ಅವಲೋಕನ ಟ್ಯಾಬ್ ನಿಮ್ಮ ತೀರಾ ಇತ್ತೀಚಿನ ಖರೀದಿ ಆದೇಶಗಳನ್ನು ಆದೇಶದ ಸ್ಥಿತಿ, ಮಾರಾಟಗಾರರ ಮಾಹಿತಿ ಮತ್ತು ದಕ್ಷ ನಿರ್ವಹಣೆಗಾಗಿ ತ್ವರಿತ ಕ್ರಿಯಾ ಬಟನ್‌ಗಳನ್ನು ಒಳಗೊಂಡಂತೆ ಸಮಗ್ರ ವಿವರಗಳೊಂದಿಗೆ ಪ್ರದರ್ಶಿಸುತ್ತದೆ.",
    step2A: "ಇತ್ತೀಚಿನ ಖರೀದಿ ಆದೇಶಗಳ ಟೇಬಲ್ ವೀಕ್ಷಣೆ",
    listScreenshotTitle: "ಅವಲೋಕನ ಟ್ಯಾಬ್ - ಖರೀದಿ ಆದೇಶಗಳ ಪಟ್ಟಿ",
    recentPOs: "ಇತ್ತೀಚಿನ ಖರೀದಿ ಆದೇಶಗಳು",
    list: "ಪಟ್ಟಿ",
    cards: "ಕಾರ್ಡ್‌ಗಳು",
    poId: "ಪಿಒ ಐಡಿ",
    product: "ಉತ್ಪನ್ನ",
    vendor: "ಮಾರಾಟಗಾರ",
    orderDate: "ಆದೇಶದ ದಿನಾಂಕ",
    totalCost: "ಒಟ್ಟು ವೆಚ್ಚ",
    status: "ಸ್ಥಿತಿ",
    actions: "ಕ್ರಿಯೆಗಳು",
    freshSpinach: "ತಾಜಾ ಪಾಲಕ್",
    units: "{count} ಘಟಕಗಳು",
    healthyHarvest: "ಆರೋಗ್ಯಕರ ಫಸಲು",
    shipped: "ರವಾನಿಸಲಾಗಿದೆ",
    basmatiRice: "ಸಾವಯವ ಬಾಸಮತಿ ಅಕ್ಕಿ",
    goldenGrains: "ಗೋಲ್ಡನ್ ಗ್ರೇನ್ಸ್",
    receivedFull: "ಪೂರ್ಣವಾಗಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
    step2B: "ಖರೀದಿ ಆದೇಶಗಳಿಗಾಗಿ ಕಾರ್ಡ್ ವೀಕ್ಷಣೆ",
    cardScreenshotTitle: "ಅವಲೋಕನ ಟ್ಯಾಬ್ - ಖರೀದಿ ಆದೇಶಗಳ ಕಾರ್ಡ್ ವೀಕ್ಷಣೆ",
    viewDetails: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    step3Title: "ಬಾಕಿ ಇರುವ ಮಾರ್ಪಾಡುಗಳ ಟ್ಯಾಬ್ - ಮಾರಾಟಗಾರರ ಮಾತುಕತೆಗಳು",
    step3Intro: "ಪೂರೈಕೆದಾರರು ಪ್ರಮಾಣ, ಬೆಲೆ ಅಥವಾ ವಿತರಣಾ ನಿಯಮಗಳಿಗೆ ಬದಲಾವಣೆಗಳನ್ನು ಪ್ರಸ್ತಾಪಿಸಿದಾಗ ಈ ನಿರ್ಣಾಯಕ ಟ್ಯಾಬ್ ಮಾರಾಟಗಾರರ ಮಾರ್ಪಾಡು ವಿನಂತಿಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ. ಇದು ಮಾರಾಟಗಾರರ ಪ್ರಸ್ತಾಪಗಳನ್ನು ಅನುಮೋದಿಸಲು ಅಥವಾ ಎದುರಿಸಲು ಮಾತುಕತೆ ಇಂಟರ್ಫೇಸ್ ಅನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step3A: "ಮಾರ್ಪಾಡು ವಿನಂತಿಗಳ ಅವಲೋಕನ",
    modScreenshotTitle: "ಬಾಕಿ ಇರುವ ಮಾರ್ಪಾಡುಗಳ ಟ್ಯಾಬ್ ಇಂಟರ್ಫೇಸ್",
    vendorModReqs: "ಮಾರಾಟಗಾರರ ಮಾರ್ಪಾಡು ವಿನಂತಿಗಳು",
    reviewModReqs: "ನಿಮ್ಮ ಮಾರಾಟಗಾರರಿಂದ ಬದಲಾವಣೆ ವಿನಂತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಪ್ರತಿಕ್ರಿಯಿಸಿ.",
    itemsChanged: "ಬದಲಾದ ವಸ್ತುಗಳು",
    review: "ಪರಿಶೀಲಿಸಿ",
    freshValleyFarms: "ಫ್ರೆಶ್ ವ್ಯಾಲಿ ಫಾರ್ಮ್ಸ್",
    step3B: "ಮಾರಾಟಗಾರರ ಮಾರ್ಪಾಡು ಪರಿಶೀಲನಾ ಮಾದರಿ",
    reviewModalScreenshotTitle: "ಪಿಒ ಪರಿಶೀಲನಾ ಮಾದರಿ - ಮಾತುಕತೆ ಇಂಟರ್ಫೇಸ್",
    negotiatePO: "ಖರೀದಿ ಆದೇಶ ಮಾತುಕತೆ: ಪಿಒ-2024-0521-002",
    vendorReviewNote: "ಮಾರಾಟಗಾರ: ಫ್ರೆಶ್ ವ್ಯಾಲಿ ಫಾರ್ಮ್ಸ್. ಅವರ ವಿನಂತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಸಲ್ಲಿಸಿ.",
    itemMods: "ವಸ್ತು ಮಾರ್ಪಾಡುಗಳು",
    original: "ಮೂಲ",
    vendorRequest: "ಮಾರಾಟಗಾರರ ವಿನಂತಿ",
    yourProposal: "ನಿಮ್ಮ ಪ್ರಸ್ತಾಪ",
    freshTomatoes: "ತಾಜಾ ಟೊಮ್ಯಾಟೊ",
    negotiationHistory: "ಮಾತುಕತೆಯ ಇತಿಹಾಸ",
    vendorKey: "ಮಾರಾಟಗಾರ",
    vendorNote: "ಪೂರೈಕೆ ನಿರ್ಬಂಧಗಳಿಂದಾಗಿ ಪ್ರಮಾಣ ಕಡಿತವನ್ನು ವಿನಂತಿಸಲಾಗಿದೆ",
    notesForVendor: "ಮಾರಾಟಗಾರರಿಗೆ ಟಿಪ್ಪಣಿಗಳು",
    explainCounter: "ನಿಮ್ಮ ಪ್ರತಿ-ಪ್ರಸ್ತಾಪವನ್ನು ವಿವರಿಸಿ...",
    cancel: "ರದ್ದುಮಾಡಿ",
    acceptChanges: "ಮಾರಾಟಗಾರರ ಬದಲಾವಣೆಗಳನ್ನು ಸ್ವೀಕರಿಸಿ",
    submitCounter: "ಪ್ರತಿ-ಆಫರ್ ಸಲ್ಲಿಸಿ",
    step4Title: "ಖರೀದಿ ಬುಟ್ಟಿ ಟ್ಯಾಬ್ - ಸ್ಮಾರ್ಟ್ ಖರೀದಿ ಯೋಜನೆ",
    step4Intro: "ಖರೀದಿ ಬುಟ್ಟಿಯು ಒಂದು ಬುದ್ಧಿವಂತ ಖರೀದಿ ಯೋಜನಾ ಸಾಧನವಾಗಿದ್ದು, ಇದು ಖರೀದಿಗೆ ಅಗತ್ಯವಿರುವ ಉತ್ಪನ್ನಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು, ಅವಶ್ಯಕತೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಮತ್ತು ಮಾರಾಟಗಾರರ ಸಲಹೆಗಳು ಮತ್ತು ಬೆಲೆ ಬುದ್ಧಿವಂತಿಕೆಯೊಂದಿಗೆ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಿದ ಖರೀದಿ ಆದೇಶಗಳನ್ನು ರಚಿಸಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    step4A: "ಖರೀದಿ ಬುಟ್ಟಿ ಅವಲೋಕನ ಅಂಕಿಅಂಶಗಳು",
    basketStatsScreenshotTitle: "ಖರೀದಿ ಬುಟ್ಟಿ ಟ್ಯಾಬ್ - ಅಂಕಿಅಂಶಗಳ ಅವಲೋಕನ",
    totalItems: "ಒಟ್ಟು ವಸ್ತುಗಳು",
    estTotalValue: "ಅಂದಾಜು. ಒಟ್ಟು ಮೌಲ್ಯ",
    urgentItems: "ತುರ್ತು ವಸ್ತುಗಳು",
    vendors: "ಮಾರಾಟಗಾರರು",
    step4B: "ಖರೀದಿ ಬುಟ್ಟಿ ವಸ್ತುಗಳ ನಿರ್ವಹಣೆ",
    basketItemsScreenshotTitle: "ಖರೀದಿ ಬುಟ್ಟಿ - ನಿಯಂತ್ರಣಗಳೊಂದಿಗೆ ವಸ್ತುಗಳ ಪಟ್ಟಿ",
    purchaseBasketTitle: "ಖರೀದಿ ಬುಟ್ಟಿ ({count} ವಸ್ತುಗಳು)",
    allPriorities: "ಎಲ್ಲಾ ಆದ್ಯತೆಗಳು",
    urgent: "ತುರ್ತು",
    high: "ಹೆಚ್ಚು",
    medium: "ಮಧ್ಯಮ",
    low: "ಕಡಿಮೆ",
    addItem: "ವಸ್ತುವನ್ನು ಸೇರಿಸಿ",
    createPOs: "ಪಿಒಗಳನ್ನು ರಚಿಸಿ ({count})",
    searchProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ...",
    itemsSelected: "{count} ವಸ್ತುಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ • ಅಂದಾಜು. ಮೌಲ್ಯ: ₹{value}",
    clearSelection: "ಆಯ್ಕೆಯನ್ನು ತೆರವುಗೊಳಿಸಿ",
    currentStock: "ಪ್ರಸ್ತುತ ಸ್ಟಾಕ್",
    desiredQty: "ಬಯಸಿದ ಪ್ರಮಾಣ",
    unitPrice: "ಘಟಕ ಬೆಲೆ",
    priority: "ಆದ್ಯತೆ",
    reason: "ಕಾರಣ",
    suggestedVendor: "ಸಲಹೆ ಮಾಡಿದ ಮಾರಾಟಗಾರ",
    estTotal: "ಅಂದಾಜು. ಒಟ್ಟು",
    targetDate: "ಗುರಿ ದಿನಾಂಕ",
    addedBy: "ಸೇರಿಸಿದವರು",
    freshMilk: "ತಾಜಾ ಹಾಲು 1L",
    min: "ಕನಿಷ್ಠ: {count}",
    clickToEdit: "ತಿದ್ದುಪಡಿ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
    lowStock: "ಕಡಿಮೆ ಸ್ಟಾಕ್",
    selectVendor: "ಮಾರಾಟಗಾರರನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    dairyFresh: "ಡೈರಿ ಫ್ರೆಶ್ ಕಂ.",
    pureMilk: "ಪ್ಯೂರ್ ಮಿಲ್ಕ್ ಲಿ.",
    step4C: "ಖರೀದಿ ಬುಟ್ಟಿಗೆ ಉತ್ಪನ್ನಗಳನ್ನು ಸೇರಿಸುವುದು",
    addProductModalScreenshotTitle: "ಬುಟ್ಟಿಗಾಗಿ ಉತ್ಪನ್ನ ಆಯ್ಕೆ ಮಾದರಿ",
    addProductToBasket: "ಖರೀದಿ ಬುಟ್ಟಿಗೆ ಉತ್ಪನ್ನಗಳನ್ನು ಸೇರಿಸಿ",
    addProductNote: "ನಿಮ್ಮ ಖರೀದಿ ಯೋಜನೆಗೆ ಸೇರಿಸಲು ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಪ್ರಮಾಣಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    searchProductsSku: "ಹೆಸರು ಅಥವಾ SKU ಮೂಲಕ ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ...",
    allCategories: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
    dairyProducts: "ಡೈರಿ ಉತ್ಪನ್ನಗಳು",
    vegetables: "ತರಕಾರಿಗಳು",
    grainsCereals: "ಧಾನ್ಯಗಳು ಮತ್ತು ದ್ವಿದಳ ಧಾನ್ಯಗಳು",
    organicBananas: "ಸಾವಯವ ಬಾಳೆಹಣ್ಣುಗಳು",
    minLevel: "ಕನಿಷ್ಠ ಮಟ್ಟ",
    costPrice: "ಖರೀದಿ ಬೆಲೆ",
    quantity: "ಪ್ರಮಾಣ",
    lowInStock: "ಕಡಿಮೆ",
    freshOranges: "ತಾಜಾ ಕಿತ್ತಳೆ",
    add_to_basket: "ಬುಟ್ಟಿಗೆ ಸೇರಿಸಿ",
    numSelected: "{count} ಉತ್ಪನ್ನಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ",
    step5Title: "ಆದೇಶಗಳನ್ನು ಸ್ವೀಕರಿಸಿ ಟ್ಯಾಬ್ ಮತ್ತು ಸರಕು ಸ್ವೀಕೃತಿ ಪ್ರಕ್ರಿಯೆ",
    step5Intro: "ಈ ಟ್ಯಾಬ್ ಸಂಪೂರ್ಣ ಸರಕು ಸ್ವೀಕೃತಿ ಪ್ರಕ್ರಿಯೆಗೆ ಪ್ರವೇಶ ಬಿಂದುವಾಗಿದೆ. ಇದು ಎಲ್ಲಾ ಒಳಬರುವ ಸಾಗಣೆಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ ಮತ್ತು ಸ್ವೀಕರಿಸುವ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ನಿಮಗೆ ಅನುಮತಿಸುತ್ತದೆ, ಅಲ್ಲಿ ನೀವು ಪ್ರಮಾಣಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತೀರಿ, ಹಾನಿಗಳನ್ನು ದಾಖಲಿಸುತ್ತೀರಿ ಮತ್ತು ನಿಖರವಾಗಿ ಸ್ಟಾಕ್ ಮಟ್ಟಗಳನ್ನು ನವೀಕರಿಸುತ್ತೀರಿ.",
    step5A: "ಆದೇಶಗಳನ್ನು ಸ್ವೀಕರಿಸಿ ಇಂಟರ್ಫೇಸ್",
    receiveOrdersScreenshotTitle: "ಆದೇಶಗಳನ್ನು ಸ್ವೀಕರಿಸಿ ಟ್ಯಾಬ್ - ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ವೀಕ್ಷಣೆ",
    ordersReadyToReceive: "ಸ್ವೀಕರಿಸಲು ಸಿದ್ಧವಾಗಿರುವ ಆದೇಶಗಳು ({count})",
    searchPOVendor: "ಪಿಒ ಐಡಿ, ಮಾರಾಟಗಾರರನ್ನು ಹುಡುಕಿ...",
    allStatuses: "ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು",
    partiallyReceived: "ಭಾಗಶಃ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
    receiveOrdersNote: "ಈ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರಸ್ತುತ ಸಾಗಣೆಯಲ್ಲಿರುವ ಅಥವಾ ಭಾಗಶಃ ಸ್ವೀಕರಿಸಿದ ಎಲ್ಲಾ ಖರೀದಿ ಆದೇಶಗಳನ್ನು ತೋರಿಸುತ್ತದೆ. ಆದೇಶಕ್ಕಾಗಿ ಸರಕು ಸ್ವೀಕೃತಿ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲು, ಹಸಿರು \"ಸ್ವೀಕರಿಸಿ\" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    receive: "ಸ್ವೀಕರಿಸಿ",
    step5B: "ಸರಕು ಸ್ವೀಕೃತಿ ಮಾದರಿ - ವಿವರವಾದ ನಡಿಗೆ",
    goodsReceiptNote: "\"ಸ್ವೀಕರಿಸಿ\" ಕ್ಲಿಕ್ ಮಾಡುವುದರಿಂದ ಸಮಗ್ರ ಸರಕು ಸ್ವೀಕೃತಿ ಮಾದರಿ ತೆರೆಯುತ್ತದೆ. ಇಲ್ಲಿ ಸ್ವೀಕರಿಸಿದ ವಸ್ತುಗಳನ್ನು ಪರಿಶೀಲಿಸುವ ಮತ್ತು ದಾಖಲಿಸುವ ಭೌತಿಕ ಪ್ರಕ್ರಿಯೆ ನಡೆಯುತ್ತದೆ.",
    goodsReceiptModalScreenshotTitle: "ಸರಕು ಸ್ವೀಕೃತಿ ಮಾದರಿ - ಆರಂಭಿಕ ವೀಕ್ಷಣೆ",
    receivePurchaseOrder: "ಖರೀದಿ ಆದೇಶವನ್ನು ಸ್ವೀಕರಿಸಿ: ಪಿಒ-2024-0521-001",
    vendorInvoiceDetails: "ಮಾರಾಟಗಾರರ ಸರಕುಪಟ್ಟಿ ವಿವರಗಳು",
    invoiceNumber: "ಸರಕುಪಟ್ಟಿ ಸಂಖ್ಯೆ",
    invoiceAmount: "ಸರಕುಪಟ್ಟಿ ಮೊತ್ತ",
    uploadInvoice: "ಸರಕುಪಟ್ಟಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    attachFile: "ಫೈಲ್ ಲಗತ್ತಿಸಿ",
    scanBarcode: "ಸ್ವೀಕರಿಸಲು ಬಾರ್‌ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    scanBarcodePlaceholder: "ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಆಯ್ಕೆ ಮಾಡಲು ಮತ್ತು ಪ್ರಮಾಣವನ್ನು ನವೀಕರಿಸಲು ಉತ್ಪನ್ನ ಬಾರ್‌ಕೋಡ್ ಅನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ...",
    ordered: "ಆದೇಶಿಸಲಾಗಿದೆ",
    receivedQty: "ಸ್ವೀಕರಿಸಿದ ಪ್ರಮಾಣ",
    damagedQty: "ಹಾನಿಗೊಳಗಾದ ಪ್ರಮಾಣ",
    mfgExpDate: "ತಯಾರಿಕೆ / ಅವಧಿ ದಿನಾಂಕ",
    unitCost: "ಘಟಕ ವೆಚ್ಚ",
    notes: "ಟಿಪ್ಪಣಿಗಳು",
    addNotes: "ಟಿಪ್ಪಣಿಗಳನ್ನು ಸೇರಿಸಿ...",
    brokenBox: "ಮುರಿದ ಪೆಟ್ಟಿಗೆ",
    discrepancyFound: "ವ್ಯತ್ಯಾಸ ಕಂಡುಬಂದಿದೆ",
    discrepancyDetails: "<strong>ಸಾವಯವ ಟೊಮ್ಯಾಟೊ:</strong> 100 ಆದೇಶಿಸಲಾಗಿದೆ, 80 ಸ್ವೀಕರಿಸಲಾಗಿದೆ, 5 ಹಾನಿಗೊಳಗಾಗಿದೆ. <strong>15 ಘಟಕಗಳು ಕಾಣೆಯಾಗಿವೆ.</strong> ಇದನ್ನು ಸಿಸ್ಟಮ್‌ನಲ್ಲಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ.",
    overallReceivingNotes: "ಒಟ್ಟಾರೆ ಸ್ವೀಕರಿಸುವ ಟಿಪ್ಪಣಿಗಳು",
    overallNotesPlaceholder: "ಉದಾ., ಸಾಗಣೆ ಸಮಯಕ್ಕೆ ಬಂದಿತು, ಒಂದು ಪೆಟ್ಟಿಗೆ ಹಾನಿಗೊಳಗಾಗಿತ್ತು.",
    confirmReceiveGoods: "ಸರಕುಗಳನ್ನು ಖಚಿತಪಡಿಸಿ ಮತ್ತು ಸ್ವೀಕರಿಸಿ",
    step5C: "ಕ್ಷೇತ್ರ-ಕ್ಷೇತ್ರದ ವಿವರಣೆ",
    barcodeScannerHelp: "ವಸ್ತುಗಳನ್ನು ಸ್ವೀಕರಿಸಲು ಅತ್ಯಂತ ಪರಿಣಾಮಕಾರಿ ಮಾರ್ಗ. ಉತ್ಪನ್ನದ ಬಾರ್‌ಕೋಡ್ ಅನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡುವುದರಿಂದ ಅದರ ಸಾಲನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಹೈಲೈಟ್ ಮಾಡುತ್ತದೆ ಮತ್ತು ಕರ್ಸರ್ ಅನ್ನು \"ಸ್ವೀಕರಿಸಿದ ಪ್ರಮಾಣ\" ಕ್ಷೇತ್ರದಲ್ಲಿ ಇರಿಸುತ್ತದೆ.",
    receivedQtyHelp: "ಮಾರಾಟ ಮಾಡಬಹುದಾದ ಸ್ಥಿತಿಯಲ್ಲಿ ಸ್ವೀಕರಿಸಿದ ಸರಕುಗಳ ನೈಜ ಎಣಿಕೆಯನ್ನು ನಮೂದಿಸಿ. ಸಿಸ್ಟಮ್ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಯಾವುದೇ ಕೊರತೆಗಳನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತದೆ.",
    damagedQtyHelp: "ಹಾನಿಗೊಳಗಾದ ಅಥವಾ ಮಾರಾಟ ಮಾಡಲಾಗದ ವಸ್ತುಗಳ ಎಣಿಕೆಯನ್ನು ನಮೂದಿಸಿ.",
    cameraIconHelp: "ಜವಾಬ್ದಾರಿಗಾಗಿ ನಿರ್ಣಾಯಕ. ಹಾನಿಗೊಳಗಾದ ವಸ್ತುಗಳ ಫೋಟೋಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಇದನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ. ಇದು ಮಾರಾಟಗಾರರಿಗೆ ಹಕ್ಕುಗಳು ಅಥವಾ ಹಿಂತಿರುಗಿಸುವಿಕೆಗೆ ಸಾಕ್ಷ್ಯವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    unitCostHelp: "ಈ ಕ್ಷೇತ್ರವು ಒಪ್ಪಿದ ವೆಚ್ಚವನ್ನು ತೋರಿಸುತ್ತದೆ. ಮಾರಾಟಗಾರರ ಸರಕುಪಟ್ಟಿಯಲ್ಲಿ ಬೇರೆ ಬೆಲೆ ತೋರಿಸಿದರೆ, ನೀವು ಅದನ್ನು ಇಲ್ಲಿ ನವೀಕರಿಸಬಹುದು. ಇದು ನಿಮ್ಮ ಮಾರಾಟವಾದ ಸರಕುಗಳ ವೆಚ್ಚ (COGS) ಸ್ವೀಕೃತಿಯ ಕ್ಷಣದಿಂದ ನಿಖರವಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ.",
    mfgExpDateHelp: "ಉತ್ಪನ್ನ ಪ್ಯಾಕೇಜಿಂಗ್‌ನಿಂದ ತಯಾರಿಕೆ ಮತ್ತು ಅವಧಿ ದಿನಾಂಕಗಳನ್ನು ನಮೂದಿಸಿ. ಇದು FEFO (ಮೊದಲು-ಅವಧಿ ಮುಗಿದ, ಮೊದಲು-ಹೊರಗೆ) ದಾಸ್ತಾನು ನಿರ್ವಹಣೆ ಮತ್ತು ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣಕ್ಕೆ ಅತ್ಯಗತ್ಯ.",
    notesHelp: "ಯಾವುದೇ ವಸ್ತುವಿನ-ನಿರ್ದಿಷ್ಟ ಕಾಮೆಂಟ್‌ಗಳಿಗಾಗಿ ಇದನ್ನು ಬಳಸಿ, ಉದಾಹರಣೆಗೆ \"ಪ್ಯಾಕೇಜಿಂಗ್ ಸ್ವಲ್ಪ ಹರಿದಿದೆ ಆದರೆ ಉತ್ಪನ್ನ ಸರಿಯಾಗಿದೆ.\"",
    confirmReceiveHelp: "ಈ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡುವುದರಿಂದ ಪ್ರಕ್ರಿಯೆಯು ಅಂತಿಮಗೊಳ್ಳುತ್ತದೆ. ಇದು ಉತ್ಪನ್ನ ಸ್ಟಾಕ್ ಮಟ್ಟಗಳನ್ನು ನವೀಕರಿಸುತ್ತದೆ, ಹಾನಿಗೊಳಗಾದ ಸರಕುಗಳನ್ನು ಮಾರಾಟ ಮಾಡಲಾಗದ ವರ್ಗಕ್ಕೆ ಸರಿಸುತ್ತದೆ, ಲೆಕ್ಕಪತ್ರ ನಿರ್ವಹಣೆಗಾಗಿ ಲೆಡ್ಜರ್ ನಮೂದುಗಳನ್ನು ರಚಿಸುತ್ತದೆ ಮತ್ತು ಪಿಒ ಸ್ಥಿತಿಯನ್ನು \"ಪೂರ್ಣವಾಗಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ\" ಅಥವಾ \"ಭಾಗಶಃ ಸ್ವೀಕರಿಸಲಾಗಿದೆ\" ಎಂದು ನವೀಕರಿಸುತ್ತದೆ.",
    step5D: "ಸ್ವೀಕೃತಿಯ ನಂತರದ ದೃಢೀಕರಣ",
    postReceiptScreenshotTitle: "ಸರಕುಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ ದೃಢೀಕರಣ",
    goodsReceivedSuccess: "ಸರಕುಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ!",
    stockLevelsUpdated: "ಪಿಒ-2024-0521-001 ಗಾಗಿ ಸ್ಟಾಕ್ ಮಟ್ಟಗಳನ್ನು ನವೀಕರಿಸಲಾಗಿದೆ.",
    spinachUpdate: "- ತಾಜಾ ಪಾಲಕ್: ಮಾರಾಟ ಮಾಡಬಹುದಾದ ಸ್ಟಾಕ್‌ಗೆ 50 ಘಟಕಗಳನ್ನು ಸೇರಿಸಲಾಗಿದೆ.",
    tomatoesUpdate: "- ಸಾವಯವ ಟೊಮ್ಯಾಟೊ: ಮಾರಾಟ ಮಾಡಬಹುದಾದ ಸ್ಟಾಕ್‌ಗೆ 80 ಘಟಕಗಳನ್ನು ಸೇರಿಸಲಾಗಿದೆ, ಮಾರಾಟ ಮಾಡಲಾಗದ ಸ್ಟಾಕ್‌ಗೆ 5 ಘಟಕಗಳನ್ನು ಸೇರಿಸಲಾಗಿದೆ.",
    backToDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",
    step6Title: "ಸ್ವಯಂ-ಹಂಚಿಕೆ ಟ್ಯಾಬ್ - ಸ್ಮಾರ್ಟ್ ವೇರ್‌ಹೌಸ್ ಸ್ಥಳ ನಿಯೋಜನೆ",
    step6Intro: "ಸ್ವಯಂ-ಹಂಚಿಕೆ ವ್ಯವಸ್ಥೆಯು ಇನ್ನೂ ಹಂಚಿಕೆಯಾಗದ ಸಕ್ರಿಯ ಖರೀದಿ ಆದೇಶಗಳಿಂದ ಉತ್ಪನ್ನಗಳಿಗೆ ಗೋದಾಮಿನ ಸ್ಥಳಗಳನ್ನು ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ನಿಯೋಜಿಸುತ್ತದೆ. ಇದು ಶೇಖರಣಾ ದಕ್ಷತೆ ಮತ್ತು ಪ್ರವೇಶವನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಸ್ಮಾರ್ಟ್ ಅಲ್ಗಾರಿದಮ್‌ಗಳನ್ನು ಬಳಸುತ್ತದೆ.",
    step6A: "ಸ್ವಯಂ-ಹಂಚಿಕೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    autoAllocScreenshotTitle: "ಸ್ವಯಂ-ಹಂಚಿಕೆ ಟ್ಯಾಬ್ - ಸ್ಥಳ ನಿಯೋಜನೆಗಾಗಿ ಕಾಯುತ್ತಿರುವ ಉತ್ಪನ್ನಗಳು",
    autoAllocLocation: "ಸ್ವಯಂ ಹಂಚಿಕೆ ಸ್ಥಳ",
    autoAllocNote: "ಗೋದಾಮಿನ ಸ್ಥಳ ನಿಯೋಜನೆಗಾಗಿ ಕಾಯುತ್ತಿರುವ ಸಕ್ರಿಯ ಖರೀದಿ ಆದೇಶಗಳಿಂದ ಉತ್ಪನ್ನಗಳು",
    autoAllocate: "ಸ್ವಯಂ ಹಂಚಿಕೆ {count}",
    searchByNamePOVendor: "ಉತ್ಪನ್ನದ ಹೆಸರು, ಪಿಒ ಐಡಿ ಅಥವಾ ಮಾರಾಟಗಾರರಿಂದ ಹುಡುಕಿ...",
    allVendors: "ಎಲ್ಲಾ ಮಾರಾಟಗಾರರು",
    allStatus: "ಎಲ್ಲಾ ಸ್ಥಿತಿ",
    placed: "ಇರಿಸಲಾಗಿದೆ",
    numProducts: "{count} ಉತ್ಪನ್ನಗಳು",
    numSelectedCards: "{count} ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ",
    selectAll: "ಎಲ್ಲವನ್ನೂ ಆಯ್ಕೆಮಾಡಿ ({count} ಉತ್ಪನ್ನಗಳು)",
    step6B: "ಉತ್ಪನ್ನ ಹಂಚಿಕೆ ಕಾರ್ಡ್‌ಗಳು",
    allocCardsScreenshotTitle: "ಸ್ವಯं-ಹಂಚಿಕೆ ಕಾರ್ಡ್‌ಗಳು - ಸ್ಥಳ ನಿಯೋಜನೆ ಅಗತ್ಯವಿರುವ ಉತ್ಪನ್ನಗಳು",
    numReceived: "({count} ಸ್ವೀಕರಿಸಲಾಗಿದೆ)",
    expectedDelivery: "ನಿರೀಕ್ಷಿತ ವಿತರಣೆ",
    step6C: "ಸ್ವಯಂ-ಹಂಚಿಕೆ ಫಲಿತಾಂಶಗಳು",
    allocResultsScreenshotTitle: "ಹಂಚಿಕೆ ಫಲಿತಾಂಶಗಳು - ಯಶಸ್ಸು ಮತ್ತು ದೋಷ ಸಾರಾಂಶ",
    allocationResults: "ಹಂಚಿಕೆ ಫಲಿತಾಂಶಗಳು",
    location: "ಸ್ಥಳ",
    successfullyAllocated: "ಯಶಸ್ವಿಯಾಗಿ ಹಂಚಲಾಗಿದೆ",
    capacityExceeded: "ಸಾಮರ್ಥ್ಯ ಮೀರಿದೆ",
    manualAllocRequired: "ಹಸ್ತಚಾಲಿತ ಹಂಚಿಕೆ ಅಗತ್ಯವಿದೆ",
    closeLogs: "ಲಾಗ್‌ಗಳನ್ನು ಮುಚ್ಚಿ",
    step7Title: "ಇತ್ತೀಚೆಗೆ ಸ್ವೀಕರಿಸಿದ ಟ್ಯಾಬ್ - ಸರಕು ಸ್ವೀಕೃತಿ ಇತಿಹಾಸ",
    step7Intro: "ಈ ಟ್ಯಾಬ್ ವಿವರವಾದ ಫಿಲ್ಟರ್‌ಗಳು, ಹಾನಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಸ್ಥಳ ಮಾಹಿತಿಯೊಂದಿಗೆ ಇತ್ತೀಚೆಗೆ ಸ್ವೀಕರಿಸಿದ ಸರಕುಗಳ ಬಗ್ಗೆ ಸಮಗ್ರ ಗೋಚರತೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ವಿಭಿನ್ನ ವಿಶ್ಲೇಷಣಾತ್ಮಕ ಅಗತ್ಯಗಳಿಗಾಗಿ ಉತ್ಪನ್ನ-ಕೇಂದ್ರಿತ ಮತ್ತು ಮಾರಾಟಗಾರ-ಕೇಂದ್ರಿತ ವೀಕ್ಷಣೆಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.",
    step7A: "ಇತ್ತೀಚೆಗೆ ಸ್ವೀಕರಿಸಿದ ಅಂಕಿಅಂಶಗಳ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    recentStatsScreenshotTitle: "ಇತ್ತೀಚೆಗೆ ಸ್ವೀಕರಿಸಿದ ಟ್ಯಾಬ್ - ಸಾರಾಂಶ ಅಂಕಿಅಂಶಗಳು",
    orders: "ಆದೇಶಗಳು",
    items: "ವಸ್ತುಗಳು",
    damaged: "ಹಾನಿಗೊಳಗಾಗಿದೆ",
    ordersWithIssues: "ಸಮಸ್ಯೆಗಳಿರುವ ಆದೇಶಗಳು",
    step7B: "ಉತ್ಪನ್ನದ ಪ್ರಕಾರ ಟ್ಯಾಬ್ - ವಿವರವಾದ ಉತ್ಪನ್ನ ವೀಕ್ಷಣೆ",
    byProductScreenshotTitle: "ಇತ್ತೀಚೆಗೆ ಸ್ವೀಕರಿಸಲಾಗಿದೆ - ಉತ್ಪನ್ನದ ಪ್ರಕಾರ ವೀಕ್ಷಣೆ ಫಿಲ್ಟರ್‌ಗಳೊಂದಿಗೆ",
    recentlyReceivedProducts: "ಇತ್ತೀಚೆಗೆ ಸ್ವೀಕರಿಸಿದ ಉತ್ಪನ್ನಗಳು ({count} ವಸ್ತುಗಳು)",
    searchPOVendorProduct: "ಪಿಒ ಐಡಿ, ಮಾರಾಟಗಾರ ಅಥವಾ ಉತ್ಪನ್ನದ ಪ್ರಕಾರ ಹುಡುಕಿ...",
    last7Days: "ಕಳೆದ 7 ದಿನಗಳು",
    last24Hours: "ಕಳೆದ 24 ಗಂಟೆಗಳು",
    last30Days: "ಕಳೆದ 30 ದಿನಗಳು",
    last90Days: "ಕಳೆದ 90 ದಿನಗಳು",
    allReceived: "ಎಲ್ಲವೂ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
    fullyReceived: "ಸಂಪೂರ್ಣವಾಗಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
    orderedQty: "ಆದೇಶಿಸಿದ ಪ್ರಮಾಣ",
    deliveryDate: "ವಿತರಣಾ ದಿನಾಂಕ",
    missing: "ಕಾಣೆಯಾಗಿದೆ: {count}",
    damagedUnits: "ಹಾನಿಗೊಳಗಾದ: {count} ಘಟಕಗಳು",
    damageReason: "ಸಾರಿಗೆ ಸಮಯದಲ್ಲಿ ಪ್ಯಾಕೇಜಿಂಗ್ ಹಾನಿ",
    notAllocated: "ಹಂಚಿಕೆಯಾಗಿಲ್ಲ",
    step7C: "ಮಾರಾಟಗಾರರ ಪ್ರಕಾರ ಟ್ಯಾಬ್ - ಮಾರಾಟಗಾರರ ಕಾರ್ಯಕ್ಷಮತೆ ವಿಶ್ಲೇಷಣೆ",
    byVendorScreenshotTitle: "ಇತ್ತೀಚೆಗೆ ಸ್ವೀಕರಿಸಲಾಗಿದೆ - ಮಾರಾಟಗಾರರ ಕಾರ್ಯಕ್ಷಮತೆ ವಿಶ್ಲೇಷಣೆ",
    recentlyReceivedByVendor: "ಮಾರಾಟಗಾರರ ಪ್ರಕಾರ ಇತ್ತೀಚೆಗೆ ಸ್ವೀಕರಿಸಲಾಗಿದೆ ({count} ಮಾರಾಟಗಾರರು)",
    searchVendors: "ಮಾರಾಟಗಾರರನ್ನು ಹುಡುಕಿ...",
    numOrdersProducts: "{orders} ಆದೇಶಗಳು • {products} ಉತ್ಪನ್ನಗಳು",
    itemsReceived: "ಸ್ವೀಕರಿಸಿದ ವಸ್ತುಗಳು",
    productLines: "ಉತ್ಪನ್ನ ಸಾಲುಗಳು",
    recentOrders: "ಇತ್ತೀಚಿನ ಆದೇಶಗಳು:",
    moreProducts: "+{count} ಹೆಚ್ಚು ಉತ್ಪನ್ನಗಳು",
    viewVendor: "ಮಾರಾಟಗಾರರನ್ನು ವೀಕ್ಷಿಸಿ",
    step8Title: "ಹೊಸ ಖರೀದಿ ಆದೇಶಗಳನ್ನು ರಚಿಸುವುದು",
    step8Intro: "ಖರೀದಿ ಆದೇಶ ರಚನೆ ಪ್ರಕ್ರಿಯೆಯು ಸುಗಮ ಮತ್ತು ಬುದ್ಧಿವಂತವಾಗಿದೆ, ಇದು ನಿಮಗೆ ಉತ್ಪನ್ನಗಳನ್ನು ತ್ವರಿತವಾಗಿ ಆಯ್ಕೆ ಮಾಡಲು, ಮಾರಾಟಗಾರರನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ಮತ್ತು ಸ್ವಯಂಚಾಲಿತ ಲೆಕ್ಕಾಚಾರಗಳು ಮತ್ತು ಸ್ಮಾರ್ಟ್ ಸಲಹೆಗಳೊಂದಿಗೆ ವೃತ್ತಿಪರ ಖರೀದಿ ಆದೇಶಗಳನ್ನು ರಚಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.",
    step8A: "ಖರೀದಿ ಆದೇಶ ರಚನೆ ಕಾರ್ಯವನ್ನು ಪ್ರವೇಶಿಸುವುದು",
    createPOScreenshotTitle: "ಖರೀದಿ ಆದೇಶ ರಚಿಸಿ ಬಟನ್ ಪ್ರವೇಶ",
    createPONote: "\"ಖರೀದಿ ಆದೇಶವನ್ನು ರಚಿಸಿ\" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡುವುದರಿಂದ ನಿಮ್ಮನ್ನು ಸಮಗ್ರ ಆದೇಶ ರಚನೆ ಇಂಟರ್ಫೇಸ್‌ಗೆ ಮರುನಿರ್ದೇಶಿಸುತ್ತದೆ, ಅಲ್ಲಿ ನೀವು ಬುದ್ಧಿವಂತ ಉತ್ಪನ್ನ ಸಲಹೆಗಳು ಮತ್ತು ಮಾರಾಟಗಾರರ ಶಿಫಾರಸುಗಳೊಂದಿಗೆ ಹಂತ ಹಂತವಾಗಿ ನಿಮ್ಮ ಖರೀದಿ ಆದೇಶಗಳನ್ನು ನಿರ್ಮಿಸಬಹುದು."
  },
  te: {
    "pageTitle": "కొనుగోలు ఆర్డర్‌ల మాన్యువల్",
    "backToManual": "మాన్యువల్‌కు తిరిగి వెళ్లు",
    "description": "విక్రేతల చర్చలు, ఆటో-అలొకేషన్, కొనుగోలు బాస్కెట్లు మరియు సేకరణ జీవితచక్రం అంతటా వివరణాత్మక ట్రాకింగ్‌తో సహా కొనుగోలు ఆర్డర్‌లను సృష్టించడం నుండి స్వీకరించడం వరకు నిర్వహించడానికి పూర్తి గైడ్.",

    "step1Title": "కొనుగోలు ఆర్డర్ డాష్‌బోర్డ్ అవలోకనం",
    "step1Intro": "కొనుగోలు ఆర్డర్ డాష్‌బోర్డ్ అనేది మీ అన్ని సేకరణ కార్యకలాపాలకు మీ కమాండ్ సెంటర్. ఇది నిజ-సమయ గణాంకాలు, వర్క్‌ఫ్లో నిర్వహణ మరియు ప్లేస్‌మెంట్ నుండి రసీదు వరకు ఆర్డర్‌ల యొక్క సమగ్ర ట్రాకింగ్‌ను అందిస్తుంది.",
    "step1A": "కొనుగోలు ఆర్డర్‌ల డాష్‌బోర్డ్‌ను యాక్సెస్ చేయడం",
    "navScreenshotTitle": "ఇన్వెంటరీ డాష్‌బోర్డ్ నుండి కొనుగోలు ఆర్డర్‌లకు నావిగేట్ చేయండి",
    "inventoryDashboard": "ఇన్వెంటరీ డాష్‌బోర్డ్",
    "manageInv": "మీ ఉత్పత్తులు, స్టాక్ స్థాయిలు మరియు సేకరణను నిర్వహించండి",
    "poButton": "కొనుగోలు ఆర్డర్‌లు",
    "productsButton": "ఉత్పత్తులు",
    "accessNote": "ఇన్వెంటరీ డాష్‌బోర్డ్ నుండి లేదా నేరుగా సైడ్‌బార్ నావిగేషన్ నుండి కొనుగోలు ఆర్డర్‌లను యాక్సెస్ చేయండి.",
    "step1B": "కొనుగోలు ఆర్డర్ గణాంకాల అవలోకనం",
    "statsScreenshotTitle": "కొనుగోలు ఆర్డర్ డాష్‌బోర్డ్ - ముఖ్య గణాంకాలు",
    "poPageTitle": "కొనుగోలు ఆర్డర్‌లు",
    "trackOrders": "విక్రేతల నుండి ఆర్డర్‌లను ట్రాక్ చేయండి మరియు ఇన్‌కమింగ్ స్టాక్‌ను నిర్వహించండి.",
    "createPO": "కొనుగోలు ఆర్డర్‌ను సృష్టించండి",
    "totalPOs": "మొత్తం POలు",
    "pending": "పెండింగ్‌లో ఉంది",
    "inTransit": "రవాణాలో ఉంది",
    "totalValue": "మొత్తం విలువ",

    "step2Title": "అవలోకనం ట్యాబ్ - ఇటీవలి కొనుగోలు ఆర్డర్‌లు",
    "step2Intro": "అవలోకనం ట్యాబ్ మీ ఇటీవలి కొనుగోలు ఆర్డర్‌లను ఆర్డర్ స్థితి, విక్రేత సమాచారం మరియు సమర్థవంతమైన నిర్వహణ కోసం శీఘ్ర చర్య బటన్‌లతో సహా సమగ్ర వివరాలతో ప్రదర్శిస్తుంది.",
    "step2A": "ఇటీవలి కొనుగోలు ఆర్డర్‌ల పట్టిక వీక్షణ",
    "listScreenshotTitle": "అవలోకనం ట్యాబ్ - కొనుగోలు ఆర్డర్‌ల జాబితా",
    "recentPOs": "ఇటీవలి కొనుగోలు ఆర్డర్‌లు",
    "list": "జాబితా",
    "cards": "కార్డులు",
    "poId": "PO ID",
    "product": "ఉత్పత్తి",
    "vendor": "విక్రేత",
    "orderDate": "ఆర్డర్ తేదీ",
    "totalCost": "మొత్తం ఖర్చు",
    "status": "స్థితి",
    "actions": "చర్యలు",
    "freshSpinach": "తాజా పాలకూర",
    "units": "{count} యూనిట్లు",
    "healthyHarvest": "హెల్తీ హార్వెస్ట్",
    "shipped": "రవాణా చేయబడింది",
    "basmatiRice": "సేంద్రీయ బాస్మతి బియ్యం",
    "goldenGrains": "గోల్డెన్ గ్రైన్స్",
    "receivedFull": "పూర్తిగా స్వీకరించబడింది",
    "step2B": "కొనుగోలు ఆర్డర్‌ల కోసం కార్డ్ వీక్షణ",
    "cardScreenshotTitle": "అవలోకనం ట్యాబ్ - కొనుగోలు ఆర్డర్‌ల కార్డ్ వీక్షణ",
    "viewDetails": "వివరాలను వీక్షించండి",

    "step3Title": "పెండింగ్ మోడిఫికేషన్స్ ట్యాబ్ - విక్రేతల చర్చలు",
    "step3Intro": "సరఫరాదారులు పరిమాణం, ధర లేదా డెలివరీ నిబంధనలకు మార్పులను ప్రతిపాదించినప్పుడు ఈ కీలకమైన ట్యాబ్ విక్రేతల సవరణ అభ్యర్థనలను నిర్వహిస్తుంది. ఇది విక్రేతల ప్రతిపాదనలను ఆమోదించడానికి లేదా ప్రతిఘటించడానికి చర్చల ఇంటర్‌ఫేస్‌ను అందిస్తుంది.",
    "step3A": "సవరణ అభ్యర్థనల అవలోకనం",
    "modScreenshotTitle": "పెండింగ్ మోడిఫికేషన్స్ ట్యాబ్ ఇంటర్‌ఫేస్",
    "vendorModReqs": "విక్రేత సవరణ అభ్యర్థనలు",
    "reviewModReqs": "మీ విక్రేతల నుండి మార్పు అభ్యర్థనలను సమీక్షించండి మరియు ప్రతిస్పందించండి.",
    "itemsChanged": "మార్చబడిన వస్తువులు",
    "review": "సమీక్షించండి",
    "freshValleyFarms": "ఫ్రెష్ వ్యాలీ ఫార్మ్స్",
    "step3B": "విక్రేత సవరణ సమీక్ష మోడల్",
    "reviewModalScreenshotTitle": "PO సమీక్ష మోడల్ - చర్చల ఇంటర్‌ఫేస్",
    "negotiatePO": "కొనుగోలు ఆర్డర్ చర్చలు: PO-2024-0521-002",
    "vendorReviewNote": "విక్రేత: ఫ్రెష్ వ్యాలీ ఫార్మ్స్. వారి అభ్యర్థనను సమీక్షించి, మీ ప్రతిస్పందనను సమర్పించండి.",
    "itemMods": "వస్తువు సవరణలు",
    "original": "అసలైనది",
    "vendorRequest": "విక్రేత అభ్యర్థన",
    "yourProposal": "మీ ప్రతిపాదన",
    "freshTomatoes": "తాజా టమోటాలు",
    "negotiationHistory": "చర్చల చరిత్ర",
    "vendorKey": "విక్రేత",
    "vendorNote": "సరఫరా పరిమితుల కారణంగా పరిమాణాన్ని తగ్గించమని అభ్యర్థించారు",
    "notesForVendor": "విక్రేత కోసం గమనికలు",
    "explainCounter": "మీ ప్రతిపాదనను వివరించండి...",
    "cancel": "రద్దు చేయండి",
    "acceptChanges": "విక్రేత మార్పులను అంగీకరించండి",
    "submitCounter": "ప్రతిపాదనను సమర్పించండి",

    "step4Title": "కొనుగోలు బాస్కెట్ ట్యాబ్ - స్మార్ట్ సేకరణ ప్రణాళిక",
    "step4Intro": "కొనుగోలు బాస్కెట్ అనేది ఒక తెలివైన సేకరణ ప్రణాళిక సాధనం, ఇది కొనుగోలు కోసం అవసరమైన ఉత్పత్తులను సేకరించడానికి, అవసరాలను విశ్లేషించడానికి మరియు విక్రేతల సూచనలు మరియు ధరల ఇంటెలిజెన్స్‌తో ఆప్టిమైజ్ చేయబడిన కొనుగోలు ఆర్డర్‌లను సృష్టించడానికి మీకు సహాయపడుతుంది.",
    "step4A": "కొనుగోలు బాస్కెట్ అవలోకనం గణాంకాలు",
    "basketStatsScreenshotTitle": "కొనుగోలు బాస్కెట్ ట్యాబ్ - గణాంకాల అవలోకనం",
    "totalItems": "మొత్తం వస్తువులు",
    "estTotalValue": "అంచనా. మొత్తం విలువ",
    "urgentItems": "అత్యవసర వస్తువులు",
    "vendors": "విక్రేతలు",
    "step4B": "కొనుగోలు బాస్కెట్ వస్తువుల నిర్వహణ",
    "basketItemsScreenshotTitle": "కొనుగోలు బాస్కెట్ - నియంత్రణలతో వస్తువుల జాబితా",
    "purchaseBasketTitle": "కొనుగోలు బాస్కెట్ ({count} వస్తువులు)",
    "allPriorities": "అన్ని ప్రాధాన్యతలు",
    "urgent": "అత్యవసరమైనది",
    "high": "అధిక",
    "medium": "మధ్యస్థం",
    "low": "తక్కువ",
    "addItem": "వస్తువును జోడించండి",
    "createPOs": "POలను సృష్టించండి ({count})",
    "searchProducts": "ఉత్పత్తులను శోధించండి...",
    "itemsSelected": "{count} వస్తువులు ఎంచుకోబడ్డాయి • అంచనా. విలువ: ₹{value}",
    "clearSelection": "ఎంపికను క్లియర్ చేయండి",
    "currentStock": "ప్రస్తుత స్టాక్",
    "desiredQty": "కావాల్సిన పరిమాణం",
    "unitPrice": "యూనిట్ ధర",
    "priority": "ప్రాధాన్యత",
    "reason": "కారణం",
    "suggestedVendor": "సూచించిన విక్రేత",
    "estTotal": "అంచనా. మొత్తం",
    "targetDate": "లక్ష్య తేదీ",
    "addedBy": "చేర్చినది",
    "freshMilk": "తాజా పాలు 1L",
    "min": "కనిష్ట: {count}",
    "clickToEdit": "సవరించడానికి క్లిక్ చేయండి",
    "lowStock": "తక్కువ స్టాక్",
    "selectVendor": "విక్రేతను ఎంచుకోండి",
    "dairyFresh": "డైరీ ఫ్రెష్ కో.",
    "pureMilk": "ప్యూర్ మిల్క్ లిమిటెడ్.",
    "step4C": "కొనుగోలు బాస్కెట్‌కు ఉత్పత్తులను జోడించడం",
    "addProductModalScreenshotTitle": "బాస్కెట్ కోసం ఉత్పత్తి ఎంపిక మోడల్",
    "addProductToBasket": "కొనుగోలు బాస్కెట్‌కు ఉత్పత్తులను జోడించండి",
    "addProductNote": "మీ సేకరణ ప్రణాళికకు జోడించడానికి ఉత్పత్తులు మరియు పరిమాణాలను ఎంచుకోండి.",
    "searchProductsSku": "పేరు లేదా SKU ద్వారా ఉత్పత్తులను శోధించండి...",
    "allCategories": "అన్ని వర్గాలు",
    "dairyProducts": "డైరీ ఉత్పత్తులు",
    "vegetables": "కూరగాయలు",
    "grainsCereals": "ధాన్యాలు & తృణధాన్యాలు",
    "organicBananas": "సేంద్రీయ అరటిపండ్లు",
    "minLevel": "కనిష్ట స్థాయి",
    "costPrice": "ధర",
    "quantity": "పరిమాణం",
    "lowInStock": "తక్కువ",
    "freshOranges": "తాజా నారింజ",
    "add_to_basket": "బాస్కెట్‌కు జోడించండి",
    "numSelected": "{count} ఉత్పత్తులు ఎంచుకోబడ్డాయి",

    "step5Title": "ఆర్డర్‌లను స్వీకరించండి ట్యాబ్ & వస్తువుల రసీదు ప్రక్రియ",
    "step5Intro": "ఈ ట్యాబ్ మొత్తం వస్తువుల రసీదు ప్రక్రియకు ఎంట్రీ పాయింట్. ఇది అన్ని ఇన్‌కమింగ్ షిప్‌మెంట్‌లను జాబితా చేస్తుంది మరియు మీరు స్వీకరించే ప్రక్రియను ప్రారంభించడానికి మిమ్మల్ని అనుమతిస్తుంది, ఇక్కడ మీరు పరిమాణాలను ధృవీకరిస్తారు, నష్టాలను రికార్డ్ చేస్తారు మరియు స్టాక్ స్థాయిలను ఖచ్చితత్వంతో అప్‌డేట్ చేస్తారు.",
    "step5A": "ఆర్డర్‌లను స్వీకరించండి ఇంటర్‌ఫేస్",
    "receiveOrdersScreenshotTitle": "ఆర్డర్‌లను స్వీకరించండి ట్యాబ్ - డాష్‌బోర్డ్ వీక్షణ",
    "ordersReadyToReceive": "స్వీకరించడానికి సిద్ధంగా ఉన్న ఆర్డర్‌లు ({count})",
    "searchPOVendor": "PO ID, విక్రేతను శోధించండి...",
    "allStatuses": "అన్ని స్థితులు",
    "partiallyReceived": "పాక్షికంగా స్వీకరించబడింది",
    "receiveOrdersNote": "ఈ డాష్‌బోర్డ్ ప్రస్తుతం రవాణాలో ఉన్న లేదా పాక్షికంగా స్వీకరించబడిన అన్ని కొనుగోలు ఆర్డర్‌లను చూపుతుంది. ఆర్డర్ కోసం వస్తువుల రసీదు ప్రక్రియను ప్రారంభించడానికి, ఆకుపచ్చ \"స్వీకరించు\" బటన్‌ను క్లిక్ చేయండి.",
    "receive": "స్వీకరించండి",
    "step5B": "వస్తువుల రసీదు మోడల్ - వివరణాత్మక వాక్‌త్రూ",
    "goodsReceiptNote": "\"స్వీకరించు\" క్లిక్ చేయడం వల్ల సమగ్ర వస్తువుల రసీదు మోడల్ తెరవబడుతుంది. ఇక్కడ స్వీకరించిన వస్తువులను ధృవీకరించడం మరియు డాక్యుమెంట్ చేయడం యొక్క భౌతిక ప్రక్రియ జరుగుతుంది.",
    "goodsReceiptModalScreenshotTitle": "వస్తువుల రసీదు మోడల్ - ప్రారంభ వీక్షణ",

    "receivePurchaseOrder": "కొనుగోలు ఆర్డర్‌ను స్వీకరించండి: PO-2024-0521-001",
    "vendorInvoiceDetails": "విక్రేత ఇన్‌వాయిస్ వివరాలు",
    "invoiceNumber": "ఇన్‌వాయిస్ సంఖ్య",
    "invoiceAmount": "ఇన్‌వాయిస్ మొత్తం",
    "uploadInvoice": "ఇన్‌వాయిస్‌ను అప్‌లోడ్ చేయండి",
    "attachFile": "ఫైల్‌ను అటాచ్ చేయండి",
    "scanBarcode": "స్వీకరించడానికి బార్‌కోడ్‌ను స్కాన్ చేయండి",
    "scanBarcodePlaceholder": "ఉత్పత్తి బార్‌కోడ్‌ను స్కాన్ చేసి స్వయంచాలకంగా పరిమాణాన్ని ఎంచుకుని మరియు అప్‌డేట్ చేయండి...",
    "ordered": "ఆర్డర్ చేయబడింది",
    "receivedQty": "స్వీకరించబడిన పరిమాణం",
    "damagedQty": "దెబ్బతిన్న పరిమాణం",
    "mfgExpDate": "MFG / EXP తేదీ",
    "unitCost": "యూనిట్ ఖర్చు",
    "notes": "గమనికలు",
    "addNotes": "గమనికలను జోడించండి...",
    "brokenBox": "విరిగిన పెట్టె",
    "discrepancyFound": "తేడా కనుగొనబడింది",
    "discrepancyDetails": "<strong>సేంద్రీయ టమోటాలు:</strong> ఆర్డర్ చేయబడినవి 100, స్వీకరించబడినవి 80, దెబ్బతిన్నవి 5. <strong>15 యూనిట్లు లేదు.</strong> ఇది సిస్టమ్‌లో నమోదు చేయబడుతుంది.",
    "overallReceivingNotes": "మొత్తం స్వీకరించే గమనికలు",
    "overallNotesPlaceholder": "ఉదా. షిప్‌మెంట్ సమయానికి వచ్చింది, ఒక పెట్టె దెబ్బతింది.",
    "confirmReceiveGoods": "ధృవీకరించి & వస్తువులను స్వీకరించండి",
    "step5C": "ఫీల్డ్-వారీ వివరణ",
    "barcodeScannerHelp": "వస్తువులను స్వీకరించడానికి అత్యంత సమర్థవంతమైన మార్గం. ఉత్పత్తి బార్‌కోడ్‌ను స్కాన్ చేయడం దాని పంక్తిని స్వయంచాలకంగా హైలైట్ చేస్తుంది మరియు కర్సర్‌ను \"స్వీకరించబడిన పరిమాణం\" ఫీల్డ్‌లో ఉంచుతుంది.",
    "receivedQtyHelp": "విక్రయించదగిన స్థితిలో స్వీకరించబడిన వస్తువుల యొక్క అసలు సంఖ్యను నమోదు చేయండి. సిస్టమ్ స్వయంచాలకంగా ఏ లోపాలను అయినా లెక్కిస్తుంది.",
    "damagedQtyHelp": "దెబ్బతిన్న లేదా విక్రయించలేని స్థితిలో ఉన్న వస్తువుల సంఖ్యను నమోదు చేయండి.",
    "cameraIconHelp": "జవాబుదారీతనం కోసం చాలా కీలకం. దెబ్బతిన్న వస్తువుల ఫోటోలను అప్‌లోడ్ చేయడానికి దీన్ని క్లిక్ చేయండి. ఇది విక్రేతకు క్లెయిమ్‌లు లేదా రిటర్న్‌ల కోసం సాక్ష్యాన్ని అందిస్తుంది.",
    "unitCostHelp": "ఈ ఫీల్డ్ అంగీకరించబడిన ఖర్చును చూపుతుంది. విక్రేత ఇన్‌వాయిస్ వేరే ధరను చూపితే, మీరు దానిని ఇక్కడ అప్‌డేట్ చేయవచ్చు. ఇది రసీదు సమయంలో మీ వస్తువుల అమ్మకం ఖర్చు (COGS) ఖచ్చితమైనదని నిర్ధారిస్తుంది.",
    "mfgExpDateHelp": "ఉత్పత్తి ప్యాకేజింగ్ నుండి తయారీ మరియు గడువు తేదీలను నమోదు చేయండి. FEFO (ఫస్ట్-ఎక్స్‌పైర్డ్, ఫస్ట్-అవుట్) ఇన్వెంటరీ నిర్వహణ మరియు నాణ్యత నియంత్రణకు ఇది చాలా అవసరం.",
    "notesHelp": "ప్యాకేజింగ్ కొద్దిగా చిరిగిపోయింది కానీ ఉత్పత్తి బాగానే ఉంది వంటి ఏవైనా వస్తువు-నిర్దిష్ట వ్యాఖ్యల కోసం దీన్ని ఉపయోగించండి.",
    "confirmReceiveHelp": "ఈ బటన్‌ను క్లిక్ చేయడం ప్రక్రియను ఖరారు చేస్తుంది. ఇది ఉత్పత్తి స్టాక్ స్థాయిలను అప్‌డేట్ చేస్తుంది, దెబ్బతిన్న వస్తువులను విక్రయించలేని వర్గానికి తరలిస్తుంది, అకౌంటింగ్ కోసం లెడ్జర్ ఎంట్రీలను సృష్టిస్తుంది మరియు PO స్థితిని \"పూర్తిగా స్వీకరించబడింది\" లేదా \"పాక్షికంగా స్వీకరించబడింది\"కి అప్‌డేట్ చేస్తుంది.",
    "step5D": "రసీదు తర్వాత ధృవీకరణ",
    "postReceiptScreenshotTitle": "వస్తువులు విజయవంతంగా స్వీకరించబడ్డాయి ధృవీకరణ",
    "goodsReceivedSuccess": "వస్తువులు విజయవంతంగా స్వీకరించబడ్డాయి!",
    "stockLevelsUpdated": "PO-2024-0521-001 కోసం స్టాక్ స్థాయిలు అప్‌డేట్ చేయబడ్డాయి.",
    "spinachUpdate": "- తాజా పాలకూర: 50 యూనిట్లు విక్రయించదగిన స్టాక్‌కు జోడించబడ్డాయి.",
    "tomatoesUpdate": "- సేంద్రీయ టమోటాలు: 80 యూనిట్లు విక్రయించదగిన స్టాక్‌కు జోడించబడ్డాయి, 5 యూనిట్లు విక్రయించలేని వాటికి జోడించబడ్డాయి.",
    "backToDashboard": "డాష్‌బోర్డ్‌కు తిరిగి వెళ్లు",

    "step6Title": "ఆటో-అలొకేషన్ ట్యాబ్ - స్మార్ట్ వేర్‌హౌస్ లొకేషన్ అసైన్‌మెంట్",
    "step6Intro": "ఆటో-అలొకేషన్ సిస్టమ్ ఇంకా కేటాయించబడని సక్రియ కొనుగోలు ఆర్డర్‌ల నుండి ఉత్పత్తులకు తెలివిగా వేర్‌హౌస్ లొకేషన్‌లను కేటాయిస్తుంది. ఇది నిల్వ సామర్థ్యం మరియు యాక్సెసిబిలిటీని ఆప్టిమైజ్ చేయడానికి స్మార్ట్ అల్గారిథమ్‌లను ఉపయోగిస్తుంది.",
    "step6A": "ఆటో-అలొకేషన్ డాష్‌బోర్డ్",
    "autoAllocScreenshotTitle": "ఆటో-అలొకేషన్ ట్యాబ్ - లొకేషన్ అసైన్‌మెంట్ కోసం ఎదురుచూస్తున్న ఉత్పత్తులు",
    "autoAllocLocation": "ఆటో అలొకేషన్ లొకేషన్",
    "autoAllocNote": "సక్రియ కొనుగోలు ఆర్డర్‌ల నుండి వేర్‌హౌస్ లొకేషన్ అసైన్‌మెంట్ కోసం ఎదురుచూస్తున్న ఉత్పత్తులు",
    "autoAllocate": "ఆటో అలొకేట్ {count}",
    "searchByNamePOVendor": "ఉత్పత్తి పేరు, PO ID లేదా విక్రేత ద్వారా శోధించండి...",
    "allVendors": "అన్ని విక్రేతలు",
    "allStatus": "అన్ని స్థితులు",
    "placed": "ఉంచబడింది",
    "numProducts": "{count} ఉత్పత్తులు",
    "numSelectedCards": "{count} ఎంపిక చేయబడింది",
    "selectAll": "అన్నింటినీ ఎంచుకోండి ({count} ఉత్పత్తులు)",
    "step6B": "ఉత్పత్తి కేటాయింపు కార్డులు",
    "allocCardsScreenshotTitle": "ఆటో-అలొకేషన్ కార్డులు - లొకేషన్ అసైన్‌మెంట్ అవసరమైన ఉత్పత్తులు",
    "numReceived": "({count} స్వీకరించబడింది)",
    "expectedDelivery": "ఆశించిన డెలివరీ",
    "step6C": "ఆటో-అలొకేషన్ ఫలితాలు",
    "allocResultsScreenshotTitle": "కేటాయింపు ఫలితాలు - విజయం మరియు లోపం యొక్క సారాంశం",
    "allocationResults": "కేటాయింపు ఫలితాలు",
    "location": "లొకేషన్",
    "successfullyAllocated": "విజయవంతంగా కేటాయించబడింది",
    "capacityExceeded": "సామర్థ్యం మించిపోయింది",
    "manualAllocRequired": "మాన్యువల్ కేటాయింపు అవసరం",
    "closeLogs": "లాగ్‌లను మూసివేయండి",

    "step7Title": "ఇటీవలిగా స్వీకరించబడిన ట్యాబ్ - వస్తువుల రసీదు చరిత్ర",
    "step7Intro": "ఈ ట్యాబ్ వివరణాత్మక ఫిల్టర్లు, నష్టాల ట్రాకింగ్ మరియు లొకేషన్ సమాచారంతో ఇటీవల స్వీకరించబడిన వస్తువుల యొక్క సమగ్ర దృశ్యమానతను అందిస్తుంది. ఇది వివిధ విశ్లేషణాత్మక అవసరాల కోసం ఉత్పత్తి-కేంద్రీకృత మరియు విక్రేత-కేంద్రీకృత వీక్షణలు రెండింటినీ కూడా సపోర్ట్ చేస్తుంది.",
    "step7A": "ఇటీవలిగా స్వీకరించబడిన గణాంకాల డాష్‌బోర్డ్",
    "recentStatsScreenshotTitle": "ఇటీవలిగా స్వీకరించబడిన ట్యాబ్ - సారాంశ గణాంకాలు",
    "orders": "ఆర్డర్‌లు",
    "items": "వస్తువులు",
    "damaged": "దెబ్బతిన్నవి",
    "ordersWithIssues": "సమస్యలతో ఉన్న ఆర్డర్‌లు",
    "step7B": "ఉత్పత్తి ట్యాబ్ ద్వారా - వివరణాత్మక ఉత్పత్తి వీక్షణ",
    "byProductScreenshotTitle": "ఇటీవలిగా స్వీకరించబడినవి - ఫిల్టర్‌లతో ఉత్పత్తి వీక్షణ ద్వారా",

    "recentlyReceivedProducts": "ఇటీవలిగా స్వీకరించబడిన ఉత్పత్తులు ({count} వస్తువులు)",
    "searchPOVendorProduct": "PO ID, విక్రేత లేదా ఉత్పత్తి ద్వారా శోధించండి...",
    "last7Days": "గత 7 రోజులు",
    "last24Hours": "గత 24 గంటలు",
    "last30Days": "గత 30 రోజులు",
    "last90Days": "గత 90 రోజులు",
    "allReceived": "అన్ని స్వీకరించబడినవి",
    "fullyReceived": "పూర్తిగా స్వీకరించబడింది",
    "orderedQty": "ఆర్డర్ చేయబడిన పరిమాణం",
    "deliveryDate": "డెలివరీ తేదీ",
    "missing": "లేదు: {count}",
    "damagedUnits": "దెబ్బతిన్నవి: {count} యూనిట్లు",
    "damageReason": "రవాణా సమయంలో ప్యాకేజింగ్‌కు నష్టం",
    "notAllocated": "కేటాయించబడలేదు",
    "step7C": "విక్రేత ట్యాబ్ ద్వారా - విక్రేత పనితీరు విశ్లేషణ",
    "byVendorScreenshotTitle": "ఇటీవలిగా స్వీకరించబడినవి - విక్రేత పనితీరు విశ్లేషణ ద్వారా",
    "recentlyReceivedByVendor": "విక్రేత ద్వారా ఇటీవల స్వీకరించబడినవి ({count} విక్రేతలు)",
    "searchVendors": "విక్రేతలను శోధించండి...",
    "numOrdersProducts": "{orders} ఆర్డర్‌లు • {products} ఉత్పత్తులు",
    "itemsReceived": "స్వీకరించబడిన వస్తువులు",
    "productLines": "ఉత్పత్తి పంక్తులు",
    "recentOrders": "ఇటీవలి ఆర్డర్‌లు:",
    "moreProducts": "+{count} మరిన్ని ఉత్పత్తులు",
    "viewVendor": "విక్రేతను వీక్షించండి",

    "step8Title": "కొత్త కొనుగోలు ఆర్డర్‌లను సృష్టించడం",
    "step8Intro": "కొనుగోలు ఆర్డర్ సృష్టి ప్రక్రియ స్ట్రీమ్‌లైన్ చేయబడింది మరియు తెలివైనది, ఇది ఉత్పత్తులను త్వరగా ఎంచుకోవడానికి, విక్రేతలను ఎంచుకోవడానికి మరియు ఆటోమేటిక్ గణాంకాలు మరియు స్మార్ట్ సూచనలతో వృత్తిపరమైన కొనుగోలు ఆర్డర్‌లను రూపొందించడానికి మిమ్మల్ని అనుమతిస్తుంది.",
    "step8A": "కొనుగోలు ఆర్డర్‌ను సృష్టించు ఫంక్షన్‌ను యాక్సెస్ చేయడం",
    "createPOScreenshotTitle": "కొనుగోలు ఆర్డర్‌ను సృష్టించు బటన్ యాక్సెస్",
    "createPONote": "\"కొనుగోలు ఆర్డర్‌ను సృష్టించు\" బటన్‌ను క్లిక్ చేయడం ద్వారా మీరు సమగ్ర ఆర్డర్ సృష్టి ఇంటర్‌ఫేస్‌కు మళ్లించబడతారు, ఇక్కడ మీరు తెలివైన ఉత్పత్తి సూచనలు మరియు విక్రేతల సిఫార్సులతో దశలవారీగా మీ కొనుగోలు ఆర్డర్‌లను నిర్మించవచ్చు."
  },
  ta: {
    pageTitle: "கொள்முதல் ஆணைகள் கையேடு",
    backToManual: "கையேடுக்குத் திரும்பு",
    description: "உருவாக்குவதிலிருந்து பெறுவது வரை கொள்முதல் ஆணைகளை நிர்வகிப்பதற்கான விரிவான வழிகாட்டி, இதில் விற்பனையாளர் பேச்சுவார்த்தைகள், தானியங்கி ஒதுக்கீடு, கொள்முதல் கூடைகள் மற்றும் கொள்முதல் வாழ்க்கைச் சுழற்சி முழுவதும் விரிவான கண்காணிப்பு ஆகியவை அடங்கும்.",

    step1Title: "கொள்முதல் ஆணை டாஷ்போர்டு கண்ணோட்டம்",
    step1Intro: "கொள்முதல் ஆணை டாஷ்போர்டு என்பது உங்கள் அனைத்து கொள்முதல் செயல்பாடுகளுக்கான கட்டளை மையமாகும். இது நிகழ்நேர புள்ளிவிவரங்கள், பணிப்பாய்வு நிர்வாகம் மற்றும் வைப்பு முதல் பெறுதல் வரை ஆணைகளின் விரிவான கண்காணிப்பை வழங்குகிறது.",
    step1A: "கொள்முதல் ஆணைகள் டாஷ்போர்டுக்கு அணுகுதல்",
    navScreenshotTitle: "சரக்கு டாஷ்போர்டிலிருந்து கொள்முதல் ஆணைகளுக்கு செல்லவும்",
    inventoryDashboard: "சரக்கு டாஷ்போர்டு",
    manageInv: "உங்கள் பொருட்கள், பங்கு அளவுகள் மற்றும் கொள்முதலை நிர்வகிக்கவும்",
    poButton: "கொள்முதல் ஆணைகள்",
    productsButton: "பொருட்கள்",
    accessNote: "சரக்கு டாஷ்போர்டிலிருந்து அல்லது நேரடியாக பக்கப்பட்டை வழிசெலுத்தலிலிருந்து கொள்முதல் ஆணைகளை அணுகவும்.",
    step1B: "கொள்முதல் ஆணை புள்ளிவிவரங்கள் கண்ணோட்டம்",
    statsScreenshotTitle: "கொள்முதல் ஆணை டாஷ்போர்டு - முக்கிய புள்ளிவிவரங்கள்",
    poPageTitle: "கொள்முதல் ஆணைகள்",
    trackOrders: "விற்பனையாளர்களிடமிருந்து ஆர்டர்களைக் கண்காணித்து உள்வரும் பங்குகளை நிர்வகிக்கவும்.",
    createPO: "கொள்முதல் ஆணையை உருவாக்கவும்",
    totalPOs: "மொத்த பிஓக்கள்",
    pending: "நிலுவையில் உள்ளது",
    inTransit: "பயணத்தில் உள்ளது",
    totalValue: "மொத்த மதிப்பு",

    step2Title: "கண்ணோட்டம் தாவல் - சமீபத்திய கொள்முதல் ஆணைகள்",
    step2Intro: "கண்ணோட்டம் தாவல் உங்கள் சமீபத்திய கொள்முதல் ஆணைகளை ஆணை நிலை, விற்பனையாளர் தகவல் மற்றும் திறமையான நிர்வாகத்திற்கான விரைவு செயல் பொத்தான்களுடன் விரிவான விவரங்களுடன் காட்டுகிறது.",
    step2A: "சமீபத்திய கொள்முதல் ஆணைகளின் அட்டவணை காட்சி",
    listScreenshotTitle: "கண்ணோட்டம் தாவல் - கொள்முதல் ஆணைகள் பட்டியல்",
    recentPOs: "சமீபத்திய கொள்முதல் ஆணைகள்",
    list: "பட்டியல்",
    cards: "அட்டைகள்",
    poId: "பிஓ ஐடி",
    product: "தயாரிப்பு",
    vendor: "விற்பனையாளர்",
    orderDate: "ஆர்டர் தேதி",
    totalCost: "மொத்த செலவு",
    status: "நிலை",
    actions: "செயல்கள்",
    freshSpinach: "புதிய கீரை",
    units: "{count} அலகுகள்",
    healthyHarvest: "ஆரோக்கியமான அறுவடை",
    shipped: "அனுப்பப்பட்டது",
    basmatiRice: "ஆர்கானிக் பாஸ்மதி அரிசி",
    goldenGrains: "கோல்டன் கிரைன்ஸ்",
    receivedFull: "முழுமையாகப் பெறப்பட்டது",
    step2B: "கொள்முதல் ஆணைகளுக்கான அட்டை காட்சி",
    cardScreenshotTitle: "கண்ணோட்டம் தாவல் - கொள்முதல் ஆணைகள் அட்டை காட்சி",
    viewDetails: "விவரங்களைக் காண்க",

    step3Title: "நிலுவையில் உள்ள மாற்றங்கள் தாவல் - விற்பனையாளர் பேச்சுவார்த்தைகள்",
    step3Intro: "இந்த முக்கியமான தாவல் விற்பனையாளர்கள் அளவு, விலை அல்லது விநியோக விதிமுறைகளில் மாற்றங்களை முன்மொழியும்போது விற்பனையாளர் மாற்ற கோரிக்கைகளை கையாளுகிறது. இது விற்பனையாளர்களின் முன்மொழிவுகளை ஒப்புக்கொள்ள அல்லது எதிர்க்க பேச்சுவார்த்தை இடைமுகத்தை வழங்குகிறது.",
    step3A: "மாற்ற கோரிக்கைகள் கண்ணோட்டம்",
    modScreenshotTitle: "நிலுவையில் உள்ள மாற்றங்கள் தாவல் இடைமுகம்",
    vendorModReqs: "விற்பனையாளர் மாற்ற கோரிக்கைகள்",
    reviewModReqs: "உங்கள் விற்பனையாளர்களிடமிருந்து மாற்ற கோரிக்கைகளை மதிப்பாய்வு செய்து பதிலளிக்கவும்.",
    itemsChanged: "மாற்றப்பட்ட பொருட்கள்",
    review: "மதிப்பாய்வு",
    freshValleyFarms: "புதிய பள்ளத்தாக்கு பண்ணைகள்",
    step3B: "விற்பனையாளர் மாற்ற மதிப்பாய்வு மாடல்",
    reviewModalScreenshotTitle: "பிஓ மதிப்பாய்வு மாடல் - பேச்சுவார்த்தை இடைமுகம்",
    negotiatePO: "கொள்முதல் ஆணை பேச்சுவார்த்தை: பிஓ-2024-0521-002",
    vendorReviewNote: "விற்பனையாளர்: புதிய பள்ளத்தாக்கு பண்ணைகள். அவர்களின் கோரிக்கையை மதிப்பாய்வு செய்து உங்கள் பதிலை சமர்ப்பிக்கவும்.",
    itemMods: "பொருள் மாற்றங்கள்",
    original: "அசல்",
    vendorRequest: "விற்பனையாளர் கோரிக்கை",
    yourProposal: "உங்கள் முன்மொழிவு",
    freshTomatoes: "புதிய தக்காளிகள்",
    negotiationHistory: "பேச்சுவார்த்தை வரலாறு",
    vendorKey: "விற்பனையாளர்",
    vendorNote: "விநியோக கட்டுப்பாடுகள் காரணமாக அளவு குறைப்பு கோரப்பட்டது",
    notesForVendor: "விற்பனையாளருக்கான குறிப்புகள்",
    explainCounter: "உங்கள் எதிர்-முன்மொழிவை விளக்குங்கள்...",
    cancel: "ரத்துசெய்",
    acceptChanges: "விற்பனையாளரின் மாற்றங்களை ஏற்கவும்",
    submitCounter: "எதிர்-சலுகையைச் சமர்ப்பிக்கவும்",

    step4Title: "கொள்முதல் கூடை தாவல் - புத்திசாலித்தனமான கொள்முதல் திட்டமிடல்",
    step4Intro: "கொள்முதல் கூடை என்பது ஒரு புத்திசாலித்தனமான கொள்முதல் திட்டமிடல் கருவியாகும், இது கொள்முதலுக்கு தேவையான பொருட்களை சேகரிக்க, தேவைகளை பகுப்பாய்வு செய்ய மற்றும் விற்பனையாளர் பரிந்துரைகள் மற்றும் விலை நுண்ணறிவுடன் உகந்த கொள்முதல் ஆணைகளை உருவாக்க உதவுகிறது.",
    step4A: "கொள்முதல் கூடை கண்ணோட்டம் புள்ளிவிவரங்கள்",
    basketStatsScreenshotTitle: "கொள்முதல் கூடை தாவல் - புள்ளிவிவரங்கள் கண்ணோட்டம்",
    totalItems: "மொத்த பொருட்கள்",
    estTotalValue: "மதிப்பிடப்பட்ட. மொத்த மதிப்பு",
    urgentItems: "அவசர பொருட்கள்",
    vendors: "விற்பனையாளர்கள்",
    step4B: "கொள்முதல் கூடை பொருட்கள் நிர்வாகம்",
    basketItemsScreenshotTitle: "கொள்முதல் கூடை - கட்டுப்பாடுகளுடன் பொருட்கள் பட்டியல்",
    purchaseBasketTitle: "கொள்முதல் கூடை ({count} பொருட்கள்)",
    allPriorities: "அனைத்து முன்னுரிமைகள்",
    urgent: "அவசரம்",
    high: "அதிகம்",
    medium: "நடுத்தரம்",
    low: "குறைவு",
    addItem: "பொருளைச் சேர்",
    createPOs: "பிஓக்களை உருவாக்கவும் ({count})",
    searchProducts: "தயாரிப்புகளைத் தேடு...",
    itemsSelected: "{count} பொருட்கள் தேர்ந்தெடுக்கப்பட்டன • மதிப்பிடப்பட்ட. மதிப்பு: ₹{value}",
    clearSelection: "தேர்வை அழி",
    currentStock: "தற்போதைய இருப்பு",
    desiredQty: "விரும்பிய அளவு",
    unitPrice: "அலகு விலை",
    priority: "முன்னுரிமை",
    reason: "காரணம்",
    suggestedVendor: "பரிந்துரைக்கப்பட்ட விற்பனையாளர்",
    estTotal: "மதிப்பிடப்பட்ட. மொத்தம்",
    targetDate: "இலக்கு தேதி",
    addedBy: "சேர்த்தவர்",
    freshMilk: "புதிய பால் 1L",
    min: "குறைந்தபட்சம்: {count}",
    clickToEdit: "திருத்த கிளிக் செய்க",
    lowStock: "குறைந்த இருப்பு",
    selectVendor: "விற்பனையாளரைத் தேர்ந்தெடு",
    dairyFresh: "டெய்ரி ஃப்ரெஷ் கோ.",
    pureMilk: "பியூர் மில்க் லிமிடெட்.",
    step4C: "கொள்முதல் கூடைக்கு தயாரிப்புகளைச் சேர்த்தல்",
    addProductModalScreenshotTitle: "கூடைக்கான தயாரிப்பு தேர்வு மாடல்",
    addProductToBasket: "கொள்முதல் கூடைக்கு தயாரிப்புகளைச் சேர்க்கவும்",
    addProductNote: "உங்கள் கொள்முதல் திட்டத்திற்கு சேர்க்க பொருட்கள் மற்றும் அளவுகளைத் தேர்ந்தெடுக்கவும்.",
    searchProductsSku: "பெயர் அல்லது SKU மூலம் பொருட்களைத் தேடு...",
    allCategories: "அனைத்து வகைகள்",
    dairyProducts: "பால் பொருட்கள்",
    vegetables: "காய்கறிகள்",
    grainsCereals: "தானியங்கள் & தானியங்கள்",
    organicBananas: "ஆர்கானிக் வாழைப்பழங்கள்",
    minLevel: "குறைந்தபட்ச அளவு",
    costPrice: "செலவு விலை",
    quantity: "அளவு",
    lowInStock: "குறைவு",
    freshOranges: "புதிய ஆரஞ்சு",
    add_to_basket: "கூடைக்குச் சேர்",
    numSelected: "{count} தயாரிப்புகள் தேர்ந்தெடுக்கப்பட்டன",

    step5Title: "ஆணைகளைப் பெறுதல் தாவல் & பொருட்கள் பெறுதல் செயல்முறை",
    step5Intro: "இந்த தாவல் முழு பொருட்கள் பெறுதல் செயல்முறைக்கான நுழைவு புள்ளியாகும். இது அனைத்து உள்வரும் ஷிப்ப்மென்ட்களையும் பட்டியலிடுகிறது மற்றும் பெறுதல் செயல்முறையைத் தொடங்க உங்களை அனுமதிக்கிறது, அங்கு நீங்கள் அளவுகளை சரிபார்க்கிறீர்கள், சேதங்களை பதிவு செய்கிறீர்கள் மற்றும் துல்லியமாக பங்கு அளவுகளை புதுப்பிக்கிறீர்கள்.",
    step5A: "ஆணைகளைப் பெறுதல் இடைமுகம்",
    receiveOrdersScreenshotTitle: "ஆணைகளைப் பெறுதல் தாவல் - டாஷ்போர்டு காட்சி",
    ordersReadyToReceive: "பெற தயாராக உள்ள ஆணைகள் ({count})",
    searchPOVendor: "பிஓ ஐடி, விற்பனையாளரைத் தேடு...",
    allStatuses: "அனைத்து நிலைகள்",
    partiallyReceived: "பகுதியாகப் பெறப்பட்டது",
    receiveOrdersNote: "இந்த டாஷ்போர்டு தற்போது போக்குவரத்தில் உள்ள அல்லது பகுதியாகப் பெறப்பட்ட அனைத்து கொள்முதல் ஆணைகளையும் காட்டுகிறது. ஒரு ஆணைக்கான பொருட்கள் பெறுதல் செயல்முறையைத் தொடங்க, பச்சை \"பெறு\" பொத்தானைக் கிளிக் செய்யவும்.",
    receive: "பெறு",
    step5B: "பொருட்கள் பெறுதல் மாடல் - விரிவான விளக்கம்",
    goodsReceiptNote: "\"பெறு\" கிளிக் செய்வது விரிவான பொருட்கள் பெறுதல் மாடலைத் திறக்கிறது. இங்குதான் பெறப்பட்ட பொருட்களை சரிபார்த்து ஆவணப்படுத்தும் உடல் செயல்முறை நடைபெறுகிறது.",
    goodsReceiptModalScreenshotTitle: "பொருட்கள் பெறுதல் மாடல் - ஆரம்ப காட்சி",
    receivePurchaseOrder: "கொள்முதல் ஆணையைப் பெறுங்கள்: பிஓ-2024-0521-001",
    vendorInvoiceDetails: "விற்பனையாளர் விலைப்பட்டி விவரங்கள்",
    invoiceNumber: "விலைப்பட்டி எண்",
    invoiceAmount: "விலைப்பட்டி தொகை",
    uploadInvoice: "விலைப்பட்டியை பதிவேற்று",
    attachFile: "கோப்பை இணைக்கவும்",
    scanBarcode: "பெறுவதற்கு பார்கோடை ஸ்கேன் செய்யவும்",
    scanBarcodePlaceholder: "தானாக தேர்ந்தெடுக்கவும் மற்றும் அளவைப் புதுப்பிக்கவும் பொருள் பார்கோடை ஸ்கேன் செய்யவும்...",
    ordered: "ஆர்டர் செய்யப்பட்டது",
    receivedQty: "பெறப்பட்ட அளவு",
    damagedQty: "சேதமடைந்த அளவு",
    mfgExpDate: "உற்பத்தி / காலாவதி தேதி",
    unitCost: "அலகு செலவு",
    notes: "குறிப்புகள்",
    addNotes: "குறிப்புகளைச் சேர்க்கவும்...",
    brokenBox: "உடைந்த பெட்டி",
    discrepancyFound: "முரண்பாடு கண்டுபிடிக்கப்பட்டது",
    discrepancyDetails: "<strong>ஆர்கானிக் தக்காளிகள்:</strong> 100 ஆர்டர் செய்யப்பட்டது, 80 பெறப்பட்டது, 5 சேதமடைந்தது. <strong>15 அலகுகள் காணவில்லை.</strong> இது கணினியில் பதிவு செய்யப்படும்.",
    overallReceivingNotes: "மொத்த பெறுதல் குறிப்புகள்",
    overallNotesPlaceholder: "எ.கா., ஷிப்ப்மென்ட் சரியான நேரத்தில் வந்தது, ஒரு பெட்டி சேதமடைந்தது.",
    confirmReceiveGoods: "பொருட்களை உறுதிசெய்து பெறவும்",
    step5C: "புலம்-புலம் விளக்கம்",
    barcodeScannerHelp: "பொருட்களைப் பெறுவதற்கான மிகவும் திறமையான வழி. ஒரு பொருளின் பார்கோடை ஸ்கேன் செய்வது தானாகவே அதன் வரிசையை முன்னிலைப்படுத்தி கர்சரை \"பெறப்பட்ட அளவு\" புலத்தில் வைக்கிறது.",
    receivedQtyHelp: "விற்பனை செய்யக்கூடிய நிலையில் பெறப்பட்ட பொருட்களின் உண்மையான எண்ணிக்கையை உள்ளிடவும். கணினி தானாகவே எந்த குறைபாடுகளையும் கணக்கிடுகிறது.",
    damagedQtyHelp: "சேதமடைந்த அல்லது விற்பனை செய்ய முடியாத பொருட்களின் எண்ணிக்கையை உள்ளிடவும்.",
    cameraIconHelp: "பொறுப்புக்காக முக்கியமானது. சேதமடைந்த பொருட்களின் புகைப்படங்களை பதிவேற்ற இதைக் கிளிக் செய்யவும். இது விற்பனையாளருக்கான கோரிக்கைகள் அல்லது திருப்பங்களுக்கான சான்றை வழங்குகிறது.",
    unitCostHelp: "இந்த புலம் ஒப்புக்கொள்ளப்பட்ட செலவைக் காட்டுகிறது. விற்பனையாளரின் விலைப்பட்டியில் வேறு விலை காட்டப்பட்டால், நீங்கள் அதை இங்கே புதுப்பிக்கலாம். இது உங்கள் விற்பனையான பொருட்களின் செலவு (COGS) பெறுதல் தருணத்திலிருந்து துல்லியமாக இருப்பதை உறுதிசெய்கிறது.",
    mfgExpDateHelp: "பொருள் பேக்கேஜிங்கிலிருந்து உற்பத்தி மற்றும் காலாவதி தேதிகளை உள்ளிடவும். இது FEFO (முதலில்-காலாவதி, முதலில்-வெளியே) சரக்கு நிர்வாகம் மற்றும் தரக் கட்டுப்பாட்டிற்கு மிகவும் அவசியமானது.",
    notesHelp: "எந்தவொரு பொருள்-குறிப்பிட்ட கருத்துக்களுக்கும் இதைப் பயன்படுத்தவும், எ.கா. \"பேக்கேஜிங் சிறிது கிழிந்துள்ளது ஆனால் பொருள் சரியாக உள்ளது.\"",
    confirmReceiveHelp: "இந்த பொத்தானைக் கிளிக் செய்வது செயல்முறையை முடிக்கிறது. இது பொருள் பங்கு அளவுகளைப் புதுப்பிக்கிறது, சேதமடைந்த பொருட்களை விற்பனை செய்ய முடியாத வகைக்கு நகர்த்துகிறது, கணக்கியலுக்கான லெட்ஜர் நுழைவுகளை உருவாக்குகிறது மற்றும் பிஓ நிலையை \"முழுமையாகப் பெறப்பட்டது\" அல்லது \"பகுதியாகப் பெறப்பட்டது\" என புதுப்பிக்கிறது.",
    step5D: "பெறுதல் பிறகு உறுதிப்படுத்தல்",
    postReceiptScreenshotTitle: "பொருட்கள் வெற்றிகரமாகப் பெறப்பட்டது உறுதிப்படுத்தல்",
    goodsReceivedSuccess: "பொருட்கள் வெற்றிகரமாகப் பெறப்பட்டன!",
    stockLevelsUpdated: "பிஓ-2024-0521-001 க்கான பங்கு அளவுகள் புதுப்பிக்கப்பட்டன.",
    spinachUpdate: "- புதிய கீரை: விற்பனை செய்யக்கூடிய பங்குக்கு 50 அலகுகள் சேர்க்கப்பட்டன.",
    tomatoesUpdate: "- ஆர்கானிக் தக்காளிகள்: விற்பனை செய்யக்கூடிய பங்குக்கு 80 அலகுகள் சேர்க்கப்பட்டன, விற்பனை செய்ய முடியாத பங்குக்கு 5 அலகுகள் சேர்க்கப்பட்டன.",
    backToDashboard: "டாஷ்போர்டுக்குத் திரும்பு",

    step6Title: "தானியங்கி ஒதுக்கீடு தாவல் - புத்திசாலித்தனமான கிடங்கு இடம் ஒதுக்கீடு",
    step6Intro: "தானியங்கி ஒதுக்கீடு அமைப்பு இன்னும் ஒதுக்கப்படாத செயலில் உள்ள கொள்முதல் ஆணைகளிலிருந்து பொருட்களுக்கு கிடங்கு இடங்களை புத்திசாலித்தனமாக ஒதுக்குகிறது. இது சேமிப்பு திறன் மற்றும் அணுகலை உகந்தமாக்க புத்திசாலித்தனமான வழிமுறைகளைப் பயன்படுத்துகிறது.",
    step6A: "தானியங்கி ஒதுக்கீடு டாஷ்போர்டு",
    autoAllocScreenshotTitle: "தானியங்கி ஒதுக்கீடு தாவல் - இடம் ஒதுக்கீட்டிற்காக காத்திருக்கும் பொருட்கள்",
    autoAllocLocation: "தானியங்கி ஒதுக்கீடு இடம்",
    autoAllocNote: "கிடங்கு இடம் ஒதுக்கீட்டிற்காக காத்திருக்கும் செயலில் உள்ள கொள்முதல் ஆணைகளிலிருந்து பொருட்கள்",
    autoAllocate: "தானாக ஒதுக்கு {count}",
    searchByNamePOVendor: "பொருள் பெயர், பிஓ ஐடி அல்லது விற்பனையாளர் மூலம் தேடு...",
    allVendors: "அனைத்து விற்பனையாளர்கள்",
    allStatus: "அனைத்து நிலைகள்",
    placed: "வைக்கப்பட்டது",
    numProducts: "{count} பொருட்கள்",
    numSelectedCards: "{count} தேர்ந்தெடுக்கப்பட்டது",
    selectAll: "அனைத்தையும் தேர்ந்தெடு ({count} பொருட்கள்)",
    step6B: "தயாரிப்பு ஒதுக்கீடு அட்டைகள்",
    allocCardsScreenshotTitle: "தானியங்கி ஒதுக்கீடு அட்டைகள் - இடம் ஒதுக்கீடு தேவையான பொருட்கள்",
    numReceived: "({count} பெறப்பட்டது)",
    expectedDelivery: "எதிர்பார்க்கப்படும் விநியோகம்",
    step6C: "தானியங்கி ஒதுக்கீடு முடிவுகள்",
    allocResultsScreenshotTitle: "ஒதுக்கீடு முடிவுகள் - வெற்றி மற்றும் பிழை சுருக்கம்",
    allocationResults: "ஒதுக்கீடு முடிவுகள்",
    location: "இடம்",
    successfullyAllocated: "வெற்றிகரமாக ஒதுக்கப்பட்டது",
    capacityExceeded: "திறன் மீறியது",
    manualAllocRequired: "கையேடு ஒதுக்கீடு தேவை",
    closeLogs: "பதிவுகளை மூடு",

    step7Title: "சமீபத்தில் பெறப்பட்ட தாவல் - பொருட்கள் பெறுதல் வரலாறு",
    step7Intro: "இந்த தாவல் விரிவான வடிப்பான்கள், சேத கண்காணிப்பு மற்றும் இட தகவலுடன் சமீபத்தில் பெறப்பட்ட பொருட்களின் விரிவான காட்சியை வழங்குகிறது. இது வெவ்வேறு பகுப்பாய்வு தேவைகளுக்காக பொருள்-மையப்படுத்தப்பட்ட மற்றும் விற்பனையாளர்-மையப்படுத்தப்பட்ட காட்சிகளை ஆதரிக்கிறது.",
    step7A: "சமீபத்தில் பெறப்பட்ட புள்ளிவிவரங்கள் டாஷ்போர்டு",
    recentStatsScreenshotTitle: "சமீபத்தில் பெறப்பட்ட தாவல் - சுருக்க புள்ளிவிவரங்கள்",
    orders: "ஆணைகள்",
    items: "பொருட்கள்",
    damaged: "சேதமடைந்தது",
    ordersWithIssues: "சிக்கல்களுடன் ஆணைகள்",
    step7B: "தயாரிப்பு வாரியாக தாவல் - விரிவான தயாரிப்பு காட்சி",
    byProductScreenshotTitle: "சமீபத்தில் பெறப்பட்டவை - வடிப்பான்களுடன் தயாரிப்பு காட்சி வாரியாக",
    recentlyReceivedProducts: "சமீபத்தில் பெறப்பட்ட தயாரிப்புகள் ({count} பொருட்கள்)",
    searchPOVendorProduct: "பிஓ ஐடி, விற்பனையாளர் அல்லது தயாரிப்பு வாரியாக தேடு...",
    last7Days: "கடந்த 7 நாட்கள்",
    last24Hours: "கடந்த 24 மணி நேரம்",
    last30Days: "கடந்த 30 நாட்கள்",
    last90Days: "கடந்த 90 நாட்கள்",
    allReceived: "அனைத்தும் பெறப்பட்டவை",
    fullyReceived: "முழுமையாகப் பெறப்பட்டது",
    orderedQty: "ஆர்டர் செய்யப்பட்ட அளவு",
    deliveryDate: "விநியோக தேதி",
    missing: "காணவில்லை: {count}",
    damagedUnits: "சேதமடைந்த: {count} அலகுகள்",
    damageReason: "போக்குவரத்தின் போது பேக்கேஜிங் சேதம்",
    notAllocated: "ஒதுக்கப்படவில்லை",
    step7C: "விற்பனையாளர் வாரியாக தாவல் - விற்பனையாளர் செயல்திறன் பகுப்பாய்வு",
    byVendorScreenshotTitle: "சமீபத்தில் பெறப்பட்டவை - விற்பனையாளர் செயல்திறன் பகுப்பாய்வு வாரியாக",
    recentlyReceivedByVendor: "விற்பனையாளர் வாரியாக சமீபத்தில் பெறப்பட்டவை ({count} விற்பனையாளர்கள்)",
    searchVendors: "விற்பனையாளர்களைத் தேடு...",
    numOrdersProducts: "{orders} ஆணைகள் • {products} பொருட்கள்",
    itemsReceived: "பெறப்பட்ட பொருட்கள்",
    productLines: "தயாரிப்பு கோடுகள்",
    recentOrders: "சமீபத்திய ஆணைகள்:",
    moreProducts: "+{count} மேலும் பொருட்கள்",
    viewVendor: "விற்பனையாளரைக் காண்க",

    step8Title: "புதிய கொள்முதல் ஆணைகளை உருவாக்குதல்",
    step8Intro: "கொள்முதல் ஆணை உருவாக்கும் செயல்முறை மென்மையாகவும் புத்திசாலித்தனமாகவும் உள்ளது, இது நீங்கள் பொருட்களை விரைவாகத் தேர்ந்தெடுக்க, விற்பனையாளர்களைத் தேர்ந்தெடுக்க மற்றும் தானியங்கி கணக்கீடுகள் மற்றும் புத்திசாலித்தனமான பரிந்துரைகளுடன் தொழில்முறை கொள்முதல் ஆணைகளை உருவாக்க அனுமதிக்கிறது.",
    step8A: "கொள்முதல் ஆணை உருவாக்கும் செயல்பாட்டை அணுகுதல்",
    createPOScreenshotTitle: "கொள்முதல் ஆணை உருவாக்கு பொத்தான் அணுகல்",
    createPONote: "\"கொள்முதல் ஆணையை உருவாக்கு\" பொத்தானைக் கிளிக் செய்வது உங்களை விரிவான ஆணை உருவாக்கும் இடைமுகத்திற்கு மறுவழிசெலுத்தும், அங்கு நீங்கள் புத்திசாலித்தனமான பொருள் பரிந்துரைகள் மற்றும் விற்பனையாளர் பரிந்துரைகளுடன் படிப்படியாக உங்கள் கொள்முதல் ஆணைகளை உருவாக்கலாம்."
  },
  hi: {
    "pageTitle": "खरीद आदेश मैनुअल",
    "backToManual": "मैनुअल पर वापस जाएं",
    "description": "खरीद आदेशों को बनाने से लेकर प्राप्त करने तक, जिसमें विक्रेता के साथ बातचीत, ऑटो-अलॉकेशन, खरीद बास्केट और खरीद जीवनचक्र के दौरान विस्तृत ट्रैकिंग शामिल है, का एक व्यापक गाइड।",

    "step1Title": "खरीद आदेश डैशबोर्ड अवलोकन",
    "step1Intro": "खरीद आदेश डैशबोर्ड सभी खरीद गतिविधियों के लिए आपका कमांड सेंटर है। यह वास्तविक समय के आँकड़े, वर्कफ़्लो प्रबंधन और ऑर्डर को रखने से लेकर प्राप्त करने तक की विस्तृत ट्रैकिंग प्रदान करता है।",
    "step1A": "खरीद आदेश डैशबोर्ड तक पहुँचना",
    "navScreenshotTitle": "इन्वेंटरी डैशबोर्ड से खरीद आदेशों पर नेविगेट करें",
    "inventoryDashboard": "इन्वेंटरी डैशबोर्ड",
    "manageInv": "अपने उत्पादों, स्टॉक स्तरों और खरीद का प्रबंधन करें",
    "poButton": "खरीद आदेश",
    "productsButton": "उत्पाद",
    "accessNote": "खरीद आदेशों को इन्वेंटरी डैशबोर्ड से या सीधे साइडबार नेविगेशन से एक्सेस करें।",
    "step1B": "खरीद आदेश आँकड़े अवलोकन",
    "statsScreenshotTitle": "खरीद आदेश डैशबोर्ड - मुख्य आँकड़े",
    "poPageTitle": "खरीद आदेश",
    "trackOrders": "विक्रेताओं से ऑर्डर ट्रैक करें और आने वाले स्टॉक का प्रबंधन करें।",
    "createPO": "खरीद आदेश बनाएँ",
    "totalPOs": "कुल POs",
    "pending": "लंबित",
    "inTransit": "परिवहन में",
    "totalValue": "कुल मूल्य",

    "step2Title": "अवलोकन टैब - हाल के खरीद आदेश",
    "step2Intro": "अवलोकन टैब आपके सबसे हाल के खरीद आदेशों को व्यापक विवरणों के साथ प्रदर्शित करता है, जिसमें ऑर्डर की स्थिति, विक्रेता की जानकारी और कुशल प्रबंधन के लिए त्वरित कार्रवाई बटन शामिल हैं।",
    "step2A": "हाल के खरीद आदेशों की तालिका दृश्य",
    "listScreenshotTitle": "अवलोकन टैब - खरीद आदेशों की सूची",
    "recentPOs": "हाल के खरीद आदेश",
    "list": "सूची",
    "cards": "कार्ड",
    "poId": "PO ID",
    "product": "उत्पाद",
    "vendor": "विक्रेता",
    "orderDate": "ऑर्डर की तारीख",
    "totalCost": "कुल लागत",
    "status": "स्थिति",
    "actions": "कार्य",
    "freshSpinach": "ताजा पालक",
    "units": "{count} यूनिट",
    "healthyHarvest": "हेल्दी हार्वेस्ट",
    "shipped": "भेजा गया",
    "basmatiRice": "ऑर्गेनिक बासमती चावल",
    "goldenGrains": "गोल्डन ग्रेन्स",
    "receivedFull": "पूरा प्राप्त हुआ",
    "step2B": "खरीद आदेशों के लिए कार्ड दृश्य",
    "cardScreenshotTitle": "अवलोकन टैब - खरीद आदेशों का कार्ड दृश्य",
    "viewDetails": "विवरण देखें",

    "step3Title": "लंबित संशोधन टैब - विक्रेता के साथ बातचीत",
    "step3Intro": "जब आपूर्तिकर्ता मात्रा, मूल्य निर्धारण या डिलीवरी की शर्तों में बदलाव का प्रस्ताव करते हैं तो यह महत्वपूर्ण टैब विक्रेता संशोधन अनुरोधों को संभालता है। यह विक्रेता के प्रस्तावों को स्वीकार करने या उनका मुकाबला करने के लिए एक बातचीत इंटरफ़ेस प्रदान करता है।",
    "step3A": "संशोधन अनुरोधों का अवलोकन",
    "modScreenshotTitle": "लंबित संशोधन टैब इंटरफ़ेस",
    "vendorModReqs": "विक्रेता संशोधन अनुरोध",
    "reviewModReqs": "अपने विक्रेताओं से बदलाव के अनुरोधों की समीक्षा करें और उनका जवाब दें।",
    "itemsChanged": "बदले गए आइटम",
    "review": "समीक्षा करें",
    "freshValleyFarms": "फ्रेश वैली फ़ार्म्स",
    "step3B": "विक्रेता संशोधन समीक्षा मॉडल",
    "reviewModalScreenshotTitle": "PO समीक्षा मॉडल - बातचीत इंटरफ़ेस",
    "negotiatePO": "खरीद आदेश पर बातचीत करें: PO-2024-0521-002",
    "vendorReviewNote": "विक्रेता: फ्रेश वैली फ़ार्म्स। उनके अनुरोध की समीक्षा करें और अपनी प्रतिक्रिया सबमिट करें।",
    "itemMods": "आइटम संशोधन",
    "original": "मूल",
    "vendorRequest": "विक्रेता का अनुरोध",
    "yourProposal": "आपका प्रस्ताव",
    "freshTomatoes": "ताजे टमाटर",
    "negotiationHistory": "बातचीत का इतिहास",
    "vendorKey": "विक्रेता",
    "vendorNote": "आपूर्ति की कमी के कारण मात्रा में कमी का अनुरोध किया",
    "notesForVendor": "विक्रेता के लिए नोट्स",
    "explainCounter": "अपने काउंटर-प्रस्ताव को समझाएँ...",
    "cancel": "रद्द करें",
    "acceptChanges": "विक्रेता के बदलावों को स्वीकार करें",
    "submitCounter": "काउंटर-ऑफर सबमिट करें",

    "step4Title": "खरीद बास्केट टैब - स्मार्ट खरीद योजना",
    "step4Intro": "खरीद बास्केट एक बुद्धिमान खरीद योजना उपकरण है जो आपको खरीद के लिए आवश्यक उत्पादों को इकट्ठा करने, आवश्यकताओं का विश्लेषण करने और विक्रेता के सुझावों और मूल्य निर्धारण के साथ अनुकूलित खरीद आदेश बनाने में मदद करता है।",
    "step4A": "खरीद बास्केट अवलोकन आँकड़े",
    "basketStatsScreenshotTitle": "खरीद बास्केट टैब - आँकड़े अवलोकन",
    "totalItems": "कुल आइटम",
    "estTotalValue": "अनुमानित कुल मूल्य",
    "urgentItems": "अति आवश्यक आइटम",
    "vendors": "विक्रेता",
    "step4B": "खरीद बास्केट आइटम प्रबंधन",
    "basketItemsScreenshotTitle": "खरीद बास्केट - नियंत्रणों के साथ आइटमों की सूची",
    "purchaseBasketTitle": "खरीद बास्केट ({count} आइटम)",
    "allPriorities": "सभी प्राथमिकताएं",
    "urgent": "अति आवश्यक",
    "high": "उच्च",
    "medium": "मध्यम",
    "low": "कम",
    "addItem": "आइटम जोड़ें",
    "createPOs": "POs बनाएँ ({count})",
    "searchProducts": "उत्पादों को खोजें...",
    "itemsSelected": "{count} आइटम चुने गए • अनुमानित मूल्य: ₹{value}",
    "clearSelection": "चयन हटाएँ",
    "currentStock": "वर्तमान स्टॉक",
    "desiredQty": "वांछित मात्रा",
    "unitPrice": "यूनिट मूल्य",
    "priority": "प्राथमिकता",
    "reason": "कारण",
    "suggestedVendor": "सुझाया गया विक्रेता",
    "estTotal": "अनुमानित कुल",
    "targetDate": "लक्ष्य तिथि",
    "addedBy": "द्वारा जोड़ा गया",
    "freshMilk": "ताजा दूध 1L",
    "min": "न्यूनतम: {count}",
    "clickToEdit": "संपादित करने के लिए क्लिक करें",
    "lowStock": "कम स्टॉक",
    "selectVendor": "विक्रेता का चयन करें",
    "dairyFresh": "डेयरी फ्रेश को.",
    "pureMilk": "प्योर मिल्क लि.",
    "step4C": "खरीद बास्केट में उत्पादों को जोड़ना",
    "addProductModalScreenshotTitle": "बास्केट के लिए उत्पाद चयन मॉडल",
    "addProductToBasket": "खरीद बास्केट में उत्पादों को जोड़ें",
    "addProductNote": "अपनी खरीद योजना में जोड़ने के लिए उत्पादों और मात्राओं का चयन करें।",
    "searchProductsSku": "नाम या SKU द्वारा उत्पादों को खोजें...",
    "allCategories": "सभी श्रेणियां",
    "dairyProducts": "डेयरी उत्पाद",
    "vegetables": "सब्जियां",
    "grainsCereals": "अनाज और खाद्य",
    "organicBananas": "ऑर्गेनिक केले",
    "minLevel": "न्यूनतम स्तर",
    "costPrice": "लागत मूल्य",
    "quantity": "मात्रा",
    "lowInStock": "कम",
    "freshOranges": "ताजे संतरे",
    "add_to_basket": "बास्केट में जोड़ें",
    "numSelected": "{count} उत्पाद चुने गए",

    "step5Title": "ऑर्डर प्राप्त करें टैब और सामान प्राप्त करने की प्रक्रिया",
    "step5Intro": "यह टैब पूरी सामान प्राप्त करने की प्रक्रिया के लिए प्रवेश बिंदु है। यह सभी आने वाली शिपमेंट को सूचीबद्ध करता है और आपको प्राप्त करने की प्रक्रिया शुरू करने की अनुमति देता है, जहाँ आप मात्राओं को सत्यापित करते हैं, क्षति को रिकॉर्ड करते हैं और स्टॉक स्तरों को सटीकता के साथ अपडेट करते हैं।",
    "step5A": "ऑर्डर प्राप्त करें इंटरफ़ेस",
    "receiveOrdersScreenshotTitle": "ऑर्डर प्राप्त करें टैब - डैशबोर्ड दृश्य",
    "ordersReadyToReceive": "प्राप्त करने के लिए तैयार ऑर्डर ({count})",
    "searchPOVendor": "PO ID, विक्रेता खोजें...",
    "allStatuses": "सभी स्थितियाँ",
    "partiallyReceived": "आंशिक रूप से प्राप्त",
    "receiveOrdersNote": "यह डैशबोर्ड उन सभी खरीद आदेशों को दिखाता है जो वर्तमान में परिवहन में हैं या आंशिक रूप से प्राप्त हुए हैं। किसी ऑर्डर के लिए सामान प्राप्त करने की प्रक्रिया शुरू करने के लिए, हरे रंग के \"प्राप्त करें\" बटन पर क्लिक करें।",
    "receive": "प्राप्त करें",
    "step5B": "सामान प्राप्त करने का मॉडल - विस्तृत वाकथ्रू",
    "goodsReceiptNote": "\"प्राप्त करें\" पर क्लिक करने से व्यापक सामान प्राप्त करने का मॉडल खुलता है। यह वह जगह है जहाँ प्राप्त किए गए आइटमों को सत्यापित करने और दस्तावेज़ करने की भौतिक प्रक्रिया होती है।",
    "goodsReceiptModalScreenshotTitle": "सामान प्राप्त करने का मॉडल - प्रारंभिक दृश्य",

    "receivePurchaseOrder": "खरीद आदेश प्राप्त करें: PO-2024-0521-001",
    "vendorInvoiceDetails": "विक्रेता चालान विवरण",
    "invoiceNumber": "चालान संख्या",
    "invoiceAmount": "चालान राशि",
    "uploadInvoice": "चालान अपलोड करें",
    "attachFile": "फाइल संलग्न करें",
    "scanBarcode": "प्राप्त करने के लिए बारकोड स्कैन करें",
    "scanBarcodePlaceholder": "उत्पाद बारकोड को स्कैन करें ताकि मात्रा स्वचालित रूप से चुनी और अपडेट हो...",
    "ordered": "ऑर्डर किया गया",
    "receivedQty": "प्राप्त मात्रा",
    "damagedQty": "क्षतिग्रस्त मात्रा",
    "mfgExpDate": "MFG / EXP तिथि",
    "unitCost": "यूनिट लागत",
    "notes": "नोट्स",
    "addNotes": "नोट्स जोड़ें...",
    "brokenBox": "टूटा हुआ बॉक्स",
    "discrepancyFound": "विसंगति मिली",
    "discrepancyDetails": "<strong>ऑर्गेनिक टमाटर:</strong> 100 का ऑर्डर दिया गया, 80 प्राप्त हुए, 5 क्षतिग्रस्त। <strong>15 यूनिट गायब हैं।</strong> इसे सिस्टम में रिकॉर्ड किया जाएगा।",
    "overallReceivingNotes": "कुल मिलाकर प्राप्त करने के नोट्स",
    "overallNotesPlaceholder": "उदाहरण के लिए, शिपमेंट समय पर आया, एक बॉक्स क्षतिग्रस्त था।",
    "confirmReceiveGoods": "पुष्टि करें और सामान प्राप्त करें",
    "step5C": "फील्ड-दर-फील्ड स्पष्टीकरण",
    "barcodeScannerHelp": "आइटम प्राप्त करने का सबसे कुशल तरीका। किसी उत्पाद के बारकोड को स्कैन करने से उसकी पंक्ति स्वचालित रूप से हाइलाइट हो जाएगी और कर्सर \"प्राप्त मात्रा\" फ़ील्ड में चला जाएगा।",
    "receivedQtyHelp": "बिक्री योग्य स्थिति में प्राप्त माल की वास्तविक संख्या दर्ज करें। सिस्टम स्वचालित रूप से किसी भी कमी की गणना करता है।",
    "damagedQtyHelp": "उन आइटमों की संख्या दर्ज करें जो क्षतिग्रस्त होकर आए हैं या अन्यथा बिक्री योग्य नहीं हैं।",
    "cameraIconHelp": "जवाबदेही के लिए महत्वपूर्ण। क्षतिग्रस्त आइटमों की तस्वीरें अपलोड करने के लिए इस पर क्लिक करें। यह विक्रेता से दावों या वापसी के लिए सबूत प्रदान करता है।",
    "unitCostHelp": "यह फ़ील्ड सहमत लागत को दिखाता है। यदि विक्रेता का चालान एक अलग मूल्य दिखाता है, तो आप इसे यहां अपडेट कर सकते हैं। यह सुनिश्चित करता है कि आपके बेचे गए माल की लागत (COGS) प्राप्त होने के क्षण से ही सटीक हो।",
    "mfgExpDateHelp": "उत्पाद पैकेजिंग से निर्माण और समाप्ति तिथियां दर्ज करें। यह FEFO (फर्स्ट-एक्सपायर्ड, फर्स्ट-आउट) इन्वेंटरी प्रबंधन और गुणवत्ता नियंत्रण के लिए आवश्यक है।",
    "notesHelp": "किसी भी आइटम-विशिष्ट टिप्पणियों के लिए इसका उपयोग करें, जैसे \"पैकेजिंग थोड़ी फटी हुई है लेकिन उत्पाद ठीक है।\"",
    "confirmReceiveHelp": "इस बटन पर क्लिक करने से प्रक्रिया को अंतिम रूप दिया जाता है। यह उत्पाद स्टॉक स्तरों को अपडेट करता है, क्षतिग्रस्त सामान को एक गैर-बिक्री योग्य श्रेणी में ले जाता है, लेखांकन के लिए लेजर प्रविष्टियां बनाता है, और PO की स्थिति को \"पूरा प्राप्त हुआ\" या \"आंशिक रूप से प्राप्त हुआ\" में अपडेट करता है।",
    "step5D": "रसीद के बाद की पुष्टि",
    "postReceiptScreenshotTitle": "सामान प्राप्त करने की सफलता की पुष्टि",
    "goodsReceivedSuccess": "सामान सफलतापूर्वक प्राप्त हुआ!",
    "stockLevelsUpdated": "PO-2024-0521-001 के लिए स्टॉक स्तर अपडेट किए गए हैं।",
    "spinachUpdate": "- ताजा पालक: 50 यूनिट बिक्री योग्य स्टॉक में जोड़ी गईं।",
    "tomatoesUpdate": "- ऑर्गेनिक टमाटर: 80 यूनिट बिक्री योग्य स्टॉक में जोड़ी गईं, 5 यूनिट गैर-बिक्री योग्य में जोड़ी गईं।",
    "backToDashboard": "डैशबोर्ड पर वापस जाएं",

    "step6Title": "ऑटो-अलॉकेशन टैब - स्मार्ट वेयरहाउस स्थान असाइनमेंट",
    "step6Intro": "ऑटो-अलॉकेशन सिस्टम सक्रिय खरीद आदेशों से उन उत्पादों को बुद्धिमानी से वेयरहाउस स्थान आवंटित करता है जिन्हें अभी तक आवंटित नहीं किया गया है। यह भंडारण दक्षता और पहुंच को अनुकूलित करने के लिए स्मार्ट एल्गोरिदम का उपयोग करता है।",
    "step6A": "ऑटो-अलॉकेशन डैशबोर्ड",
    "autoAllocScreenshotTitle": "ऑटो-अलॉकेशन टैब - स्थान असाइनमेंट की प्रतीक्षा कर रहे उत्पाद",
    "autoAllocLocation": "ऑटो अलॉकेशन स्थान",
    "autoAllocNote": "सक्रिय खरीद आदेशों से उत्पाद जो वेयरहाउस स्थान असाइनमेंट की प्रतीक्षा कर रहे हैं",
    "autoAllocate": "ऑटो अलॉकेट {count}",
    "searchByNamePOVendor": "उत्पाद के नाम, PO ID, या विक्रेता द्वारा खोजें...",
    "allVendors": "सभी विक्रेता",
    "allStatus": "सभी स्थिति",
    "placed": "रखा गया",
    "numProducts": "{count} उत्पाद",
    "numSelectedCards": "{count} चुने गए",
    "selectAll": "सभी चुनें ({count} उत्पाद)",
    "step6B": "उत्पाद अलॉकेशन कार्ड",
    "allocCardsScreenshotTitle": "ऑटो-अलॉकेशन कार्ड - स्थान असाइनमेंट की आवश्यकता वाले उत्पाद",
    "numReceived": "({count} प्राप्त)",
    "expectedDelivery": "अनुमानित डिलीवरी",
    "step6C": "ऑटो-अलॉकेशन परिणाम",
    "allocResultsScreenshotTitle": "अलॉकेशन परिणाम - सफलता और त्रुटि सारांश",
    "allocationResults": "अलॉकेशन परिणाम",
    "location": "स्थान",
    "successfullyAllocated": "सफलतापूर्वक आवंटित",
    "capacityExceeded": "क्षमता से अधिक",
    "manualAllocRequired": "मैनुअल आवंटन आवश्यक",
    "closeLogs": "लॉग बंद करें",

    "step7Title": "हाल ही में प्राप्त टैब - सामान प्राप्त करने का इतिहास",
    "step7Intro": "यह टैब विस्तृत फिल्टर, क्षति ट्रैकिंग और स्थान की जानकारी के साथ हाल ही में प्राप्त सामानों की व्यापक दृश्यता प्रदान करता है। यह विभिन्न विश्लेषणात्मक जरूरतों के लिए उत्पाद-केंद्रित और विक्रेता-केंद्रित दोनों दृश्यों का समर्थन करता है।",
    "step7A": "हाल ही में प्राप्त आँकड़े डैशबोर्ड",
    "recentStatsScreenshotTitle": "हाल ही में प्राप्त टैब - सारांश आँकड़े",
    "orders": "ऑर्डर",
    "items": "आइटम",
    "damaged": "क्षतिग्रस्त",
    "ordersWithIssues": "समस्याओं वाले ऑर्डर",
    "step7B": "उत्पाद टैब द्वारा - विस्तृत उत्पाद दृश्य",
    "byProductScreenshotTitle": "हाल ही में प्राप्त - फिल्टर के साथ उत्पाद दृश्य द्वारा",

    "recentlyReceivedProducts": "हाल ही में प्राप्त उत्पाद ({count} आइटम)",
    "searchPOVendorProduct": "PO ID, विक्रेता, या उत्पाद द्वारा खोजें...",
    "last7Days": "पिछले 7 दिन",
    "last24Hours": "पिछले 24 घंटे",
    "last30Days": "पिछले 30 दिन",
    "last90Days": "पिछले 90 दिन",
    "allReceived": "सभी प्राप्त",
    "fullyReceived": "पूरी तरह से प्राप्त",
    "orderedQty": "ऑर्डर की गई मात्रा",
    "deliveryDate": "डिलीवरी की तारीख",
    "missing": "लापता: {count}",
    "damagedUnits": "क्षतिग्रस्त: {count} यूनिट",
    "damageReason": "परिवहन के दौरान पैकेजिंग क्षति",
    "notAllocated": "आवंटित नहीं",
    "step7C": "विक्रेता टैब द्वारा - विक्रेता प्रदर्शन विश्लेषण",
    "byVendorScreenshotTitle": "हाल ही में प्राप्त - विक्रेता प्रदर्शन विश्लेषण द्वारा",
    "recentlyReceivedByVendor": "विक्रेता द्वारा हाल ही में प्राप्त ({count} विक्रेता)",
    "searchVendors": "विक्रेताओं को खोजें...",
    "numOrdersProducts": "{orders} ऑर्डर • {products} उत्पाद",
    "itemsReceived": "प्राप्त आइटम",
    "productLines": "उत्पाद लाइनें",
    "recentOrders": "हाल के ऑर्डर:",
    "moreProducts": "+{count} और उत्पाद",
    "viewVendor": "विक्रेता देखें",

    "step8Title": "नए खरीद आदेश बनाना",
    "step8Intro": "खरीद आदेश बनाने की प्रक्रिया सुव्यवस्थित और बुद्धिमान है, जिससे आप उत्पादों को जल्दी से चुन सकते हैं, विक्रेताओं का चयन कर सकते हैं, और स्वचालित गणना और स्मार्ट सुझावों के साथ पेशेवर खरीद आदेश बना सकते हैं।",
    "step8A": "खरीद आदेश बनाएँ फ़ंक्शन तक पहुँचना",
    "createPOScreenshotTitle": "खरीद आदेश बनाएँ बटन तक पहुँच",
    "createPONote": "\"खरीद आदेश बनाएँ\" बटन पर क्लिक करने से आपको एक व्यापक आदेश निर्माण इंटरफ़ेस पर भेज दिया जाएगा जहाँ आप बुद्धिमान उत्पाद सुझावों और विक्रेता की सिफारिशों के साथ चरण-दर-चरण अपने खरीद आदेश बना सकते हैं।"
  },
  ml: {
    "pageTitle": "പർച്ചേസ് ഓർഡർ മാനുവൽ",
    "backToManual": "മാനുവലിലേക്ക് തിരികെ പോകുക",
    "description": "വിക്രേതാക്കളുമായിട്ടുള്ള ചർച്ചകൾ, ഓട്ടോ-അലോക്കേഷൻ, പർച്ചേസ് ബാസ്കറ്റുകൾ, സംഭരണത്തിന്റെ മുഴുവൻ കാലയളവിലുമുള്ള വിശദമായ ട്രാക്കിംഗ് എന്നിവയുൾപ്പെടെ, പർച്ചേസ് ഓർഡറുകൾ നിർമ്മിക്കുന്നത് മുതൽ സ്വീകരിക്കുന്നത് വരെയുള്ള കാര്യങ്ങൾ കൈകാര്യം ചെയ്യുന്നതിനുള്ള സമഗ്രമായ ഒരു ഗൈഡ്.",

    "step1Title": "പർച്ചേസ് ഓർഡർ ഡാഷ്ബോർഡ് അവലോകനം",
    "step1Intro": "എല്ലാ സംഭരണ പ്രവർത്തനങ്ങൾക്കുമുള്ള നിങ്ങളുടെ കമാൻഡ് സെന്ററാണ് പർച്ചേസ് ഓർഡർ ഡാഷ്ബോർഡ്. ഇത് തത്സമയ സ്ഥിതിവിവരക്കണക്കുകൾ, വർക്ക്ഫ്ലോ മാനേജ്മെന്റ്, ഓർഡർ നൽകുന്നത് മുതൽ അത് സ്വീകരിക്കുന്നത് വരെയുള്ള സമഗ്രമായ ട്രാക്കിംഗ് എന്നിവ നൽകുന്നു.",
    "step1A": "പർച്ചേസ് ഓർഡർ ഡാഷ്ബോർഡ് ആക്സസ് ചെയ്യുക",
    "navScreenshotTitle": "ഇൻവെന്ററി ഡാഷ്ബോർഡിൽ നിന്ന് പർച്ചേസ് ഓർഡറുകളിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക",
    "inventoryDashboard": "ഇൻവെന്ററി ഡാഷ്ബോർഡ്",
    "manageInv": "നിങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ, സ്റ്റോക്ക് ലെവലുകൾ, സംഭരണം എന്നിവ കൈകാര്യം ചെയ്യുക",
    "poButton": "പർച്ചേസ് ഓർഡറുകൾ",
    "productsButton": "ഉൽപ്പന്നങ്ങൾ",
    "accessNote": "ഇൻവെന്ററി ഡാഷ്ബോർഡിൽ നിന്നോ അല്ലെങ്കിൽ സൈഡ്ബാർ നാവിഗേഷനിൽ നിന്ന് നേരിട്ടോ പർച്ചേസ് ഓർഡറുകൾ ആക്സസ് ചെയ്യുക.",
    "step1B": "പർച്ചേസ് ഓർഡർ സ്ഥിതിവിവരക്കണക്ക് അവലോകനം",
    "statsScreenshotTitle": "പർച്ചേസ് ഓർഡർ ഡാഷ്ബോർഡ് - പ്രധാന സ്ഥിതിവിവരക്കണക്കുകൾ",
    "poPageTitle": "പർച്ചേസ് ഓർഡറുകൾ",
    "trackOrders": "വിക്രേതാക്കളിൽ നിന്നുള്ള ഓർഡറുകൾ ട്രാക്ക് ചെയ്യുകയും വരുന്ന സ്റ്റോക്ക് കൈകാര്യം ചെയ്യുകയും ചെയ്യുക.",
    "createPO": "പർച്ചേസ് ഓർഡർ നിർമ്മിക്കുക",
    "totalPOs": "മൊത്തം PO-കൾ",
    "pending": "തീർപ്പാക്കാത്തത്",
    "inTransit": "ട്രാൻസിറ്റിൽ",
    "totalValue": "മൊത്തം മൂല്യം",

    "step2Title": "അവലോകനം ടാബ് - ഏറ്റവും പുതിയ പർച്ചേസ് ഓർഡറുകൾ",
    "step2Intro": "ഓർഡർ നില, വിക്രേതാവിന്റെ വിവരങ്ങൾ, കാര്യക്ഷമമായ മാനേജ്മെന്റിനായുള്ള ദ്രുത പ്രവർത്തന ബട്ടണുകൾ എന്നിവയുൾപ്പെടെയുള്ള സമഗ്രമായ വിവരങ്ങളോടുകൂടിയ ഏറ്റവും പുതിയ പർച്ചേസ് ഓർഡറുകൾ അവലോകനം ടാബ് പ്രദർശിപ്പിക്കുന്നു.",
    "step2A": "ഏറ്റവും പുതിയ പർച്ചേസ് ഓർഡറുകളുടെ ടേബിൾ കാഴ്ച",
    "listScreenshotTitle": "അവലോകനം ടാബ് - പർച്ചേസ് ഓർഡറുകളുടെ ലിസ്റ്റ്",
    "recentPOs": "ഏറ്റവും പുതിയ പർച്ചേസ് ഓർഡറുകൾ",
    "list": "ലിസ്റ്റ്",
    "cards": "കാർഡുകൾ",
    "poId": "PO ID",
    "product": "ഉൽപ്പന്നം",
    "vendor": "വിക്രേതാവ്",
    "orderDate": "ഓർഡർ തീയതി",
    "totalCost": "മൊത്തം ചെലവ്",
    "status": "നില",
    "actions": "പ്രവർത്തനങ്ങൾ",
    "freshSpinach": "ഫ്രഷ് സ്പിനാച്ച്",
    "units": "{count} യൂണിറ്റുകൾ",
    "healthyHarvest": "ഹെൽത്തി ഹാർവസ്റ്റ്",
    "shipped": "ഷിപ്പ് ചെയ്തു",
    "basmatiRice": "ഓർഗാനിക് ബസുമതി അരി",
    "goldenGrains": "ഗോൾഡൻ ഗ്രെയിൻസ്",
    "receivedFull": "പൂർണ്ണമായി ലഭിച്ചു",
    "step2B": "പർച്ചേസ് ഓർഡറുകൾക്കായുള്ള കാർഡ് കാഴ്ച",
    "cardScreenshotTitle": "അവലോകനം ടാബ് - പർച്ചേസ് ഓർഡറുകളുടെ കാർഡ് കാഴ്ച",
    "viewDetails": "വിശദാംശങ്ങൾ കാണുക",

    "step3Title": "തീർപ്പാക്കാത്ത മാറ്റങ്ങൾ ടാബ് - വിക്രേതാവുമായിട്ടുള്ള ചർച്ചകൾ",
    "step3Intro": "വിതരണക്കാർ അളവ്, വില, അല്ലെങ്കിൽ ഡെലിവറി വ്യവസ്ഥകളിൽ മാറ്റങ്ങൾ വരുത്താൻ നിർദ്ദേശിക്കുമ്പോൾ ഈ നിർണായക ടാബ് വിക്രേതാവിന്റെ മാറ്റങ്ങൾക്കായുള്ള അഭ്യർത്ഥനകൾ കൈകാര്യം ചെയ്യുന്നു. ഇത് വിക്രേതാവിന്റെ നിർദ്ദേശങ്ങൾ അംഗീകരിക്കുന്നതിനോ അല്ലെങ്കിൽ എതിർക്കുന്നതിനോ ഉള്ള ഒരു ചർച്ചാ ഇന്റർഫേസ് നൽകുന്നു.",
    "step3A": "മാറ്റങ്ങൾക്കായുള്ള അഭ്യർത്ഥനകളുടെ അവലോകനം",
    "modScreenshotTitle": "തീർപ്പാക്കാത്ത മാറ്റങ്ങൾ ടാബ് ഇന്റർഫേസ്",
    "vendorModReqs": "വിക്രേതാവിന്റെ മാറ്റങ്ങൾക്കായുള്ള അഭ്യർത്ഥനകൾ",
    "reviewModReqs": "നിങ്ങളുടെ വിക്രേതാക്കളിൽ നിന്നുള്ള മാറ്റങ്ങൾക്കായുള്ള അഭ്യർത്ഥനകൾ അവലോകനം ചെയ്യുകയും പ്രതികരിക്കുകയും ചെയ്യുക.",
    "itemsChanged": "മാറ്റിയ ഇനങ്ങൾ",
    "review": "അവലോകനം ചെയ്യുക",
    "freshValleyFarms": "ഫ്രഷ് വാലി ഫാംസ്",
    "step3B": "വിക്രേതാവിന്റെ മാറ്റങ്ങൾ അവലോകനം ചെയ്യുന്ന മോഡൽ",
    "reviewModalScreenshotTitle": "PO അവലോകനം ചെയ്യുന്ന മോഡൽ - ചർച്ചാ ഇന്റർഫേസ്",
    "negotiatePO": "പർച്ചേസ് ഓർഡർ ചർച്ച ചെയ്യുക: PO-2024-0521-002",
    "vendorReviewNote": "വിക്രേതാവ്: ഫ്രഷ് വാലി ഫാംസ്. അവരുടെ അഭ്യർത്ഥന അവലോകനം ചെയ്യുകയും നിങ്ങളുടെ പ്രതികരണം സമർപ്പിക്കുകയും ചെയ്യുക.",
    "itemMods": "ഇനങ്ങളിലെ മാറ്റങ്ങൾ",
    "original": "യഥാർത്ഥം",
    "vendorRequest": "വിക്രേതാവിന്റെ അഭ്യർത്ഥന",
    "yourProposal": "നിങ്ങളുടെ നിർദ്ദേശം",
    "freshTomatoes": "ഫ്രഷ് ടൊമാറ്റോസ്",
    "negotiationHistory": "ചർച്ചകളുടെ ചരിത്രം",
    "vendorKey": "വിക്രേതാവ്",
    "vendorNote": "വിതരണത്തിലെ പരിമിതികൾ കാരണം അളവ് കുറയ്ക്കാൻ അഭ്യർത്ഥിച്ചു",
    "notesForVendor": "വിക്രേതാവിനുള്ള കുറിപ്പുകൾ",
    "explainCounter": "നിങ്ങളുടെ പ്രതിനിർദ്ദേശം വിശദീകരിക്കുക...",
    "cancel": "റദ്ദാക്കുക",
    "acceptChanges": "വിക്രേതാവിന്റെ മാറ്റങ്ങൾ അംഗീകരിക്കുക",
    "submitCounter": "പ്രതിനിർദ്ദേശം സമർപ്പിക്കുക",

    "step4Title": "പർച്ചേസ് ബാസ്കറ്റ് ടാബ് - സ്മാർട്ട് പ്രൊക്യൂർമെന്റ് പ്ലാനിംഗ്",
    "step4Intro": "പർച്ചേസ് ബാസ്കറ്റ് ഒരു ബുദ്ധിപരമായ സംഭരണ ​​ആസൂത്രണ ഉപകരണമാണ്. ഇത് നിങ്ങൾക്ക് വാങ്ങേണ്ട ഉൽപ്പന്നങ്ങൾ ശേഖരിക്കാനും, ആവശ്യകതകൾ വിശകലനം ചെയ്യാനും, വിക്രേതാവിന്റെ നിർദ്ദേശങ്ങളും വിലനിർണ്ണയ ഇന്റലിജൻസും ഉപയോഗിച്ച് ഒപ്റ്റിമൈസ് ചെയ്ത പർച്ചേസ് ഓർഡറുകൾ നിർമ്മിക്കാനും സഹായിക്കുന്നു.",
    "step4A": "പർച്ചേസ് ബാസ്കറ്റ് അവലോകന സ്ഥിതിവിവരക്കണക്കുകൾ",
    "basketStatsScreenshotTitle": "പർച്ചേസ് ബാസ്കറ്റ് ടാബ് - സ്ഥിതിവിവരക്കണക്ക് അവലോകനം",
    "totalItems": "മൊത്തം ഇനങ്ങൾ",
    "estTotalValue": "അനുമാനിച്ച മൊത്തം മൂല്യം",
    "urgentItems": "അത്യാവശ്യ ഇനങ്ങൾ",
    "vendors": "വിക്രേതാക്കൾ",
    "step4B": "പർച്ചേസ് ബാസ്കറ്റ് ഇനങ്ങൾ കൈകാര്യം ചെയ്യൽ",
    "basketItemsScreenshotTitle": "പർച്ചേസ് ബാസ്കറ്റ് - നിയന്ത്രണങ്ങളോടുകൂടിയ ഇനങ്ങളുടെ ലിസ്റ്റ്",
    "purchaseBasketTitle": "പർച്ചേസ് ബാസ്കറ്റ് ({count} ഇനങ്ങൾ)",
    "allPriorities": "എല്ലാ മുൻഗണനകളും",
    "urgent": "അത്യാവശ്യം",
    "high": "ഉയർന്നത്",
    "medium": "ഇടത്തരം",
    "low": "കുറഞ്ഞത്",
    "addItem": "ഇനം ചേർക്കുക",
    "createPOs": "PO-കൾ നിർമ്മിക്കുക ({count})",
    "searchProducts": "ഉൽപ്പന്നങ്ങൾ തിരയുക...",
    "itemsSelected": "{count} ഇനങ്ങൾ തിരഞ്ഞെടുത്തു • അനുമാനിച്ച മൂല്യം: ₹{value}",
    "clearSelection": "തിരഞ്ഞെടുപ്പ് മായ്ക്കുക",
    "currentStock": "നിലവിലെ സ്റ്റോക്ക്",
    "desiredQty": "ആവശ്യമായ അളവ്",
    "unitPrice": "യൂണിറ്റ് വില",
    "priority": "മുൻഗണന",
    "reason": "കാരണം",
    "suggestedVendor": "നിർദ്ദേശിച്ച വിക്രേതാവ്",
    "estTotal": "അനുമാനിച്ച മൊത്തം",
    "targetDate": "ലക്ഷ്യ തീയതി",
    "addedBy": "ചേർത്തത്",
    "freshMilk": "ഫ്രഷ് മിൽക്ക് 1L",
    "min": "മിനിമം: {count}",
    "clickToEdit": "എഡിറ്റ് ചെയ്യാൻ ക്ലിക്ക് ചെയ്യുക",
    "lowStock": "സ്റ്റോക്ക് കുറവ്",
    "selectVendor": "വിക്രേതാവിനെ തിരഞ്ഞെടുക്കുക",
    "dairyFresh": "ഡെയ്ലി ഫ്രഷ് കോ.",
    "pureMilk": "പ്യുവർ മിൽക്ക് ലിമിറ്റഡ്.",
    "step4C": "പർച്ചേസ് ബാസ്കറ്റിലേക്ക് ഉൽപ്പന്നങ്ങൾ ചേർക്കുക",
    "addProductModalScreenshotTitle": "ബാസ്കറ്റിനായുള്ള ഉൽപ്പന്ന തിരഞ്ഞെടുപ്പ് മോഡൽ",
    "addProductToBasket": "പർച്ചേസ് ബാസ്കറ്റിലേക്ക് ഉൽപ്പന്നങ്ങൾ ചേർക്കുക",
    "addProductNote": "നിങ്ങളുടെ സംഭരണ ​​ആസൂത്രണത്തിലേക്ക് ചേർക്കുന്നതിന് ഉൽപ്പന്നങ്ങളും അളവുകളും തിരഞ്ഞെടുക്കുക.",
    "searchProductsSku": "പേര് അല്ലെങ്കിൽ SKU ഉപയോഗിച്ച് ഉൽപ്പന്നങ്ങൾ തിരയുക...",
    "allCategories": "എല്ലാ വിഭാഗങ്ങളും",
    "dairyProducts": "ഡെയ്ലി ഉൽപ്പന്നങ്ങൾ",
    "vegetables": "പച്ചക്കറികൾ",
    "grainsCereals": "ധാന്യങ്ങൾ & സിറിയലുകൾ",
    "organicBananas": "ഓർഗാനിക് ബനാനാസ്",
    "minLevel": "മിനിമം ലെവൽ",
    "costPrice": "വില",
    "quantity": "അളവ്",
    "lowInStock": "കുറവ്",
    "freshOranges": "ഫ്രഷ് ഓറഞ്ചുകൾ",
    "add_to_basket": "ബാസ്കറ്റിലേക്ക് ചേർക്കുക",
    "numSelected": "{count} ഉൽപ്പന്നങ്ങൾ തിരഞ്ഞെടുത്തു",

    "step5Title": "ഓർഡറുകൾ സ്വീകരിക്കുക ടാബ് & ഗുഡ്സ് രസീത് പ്രോസസ്",
    "step5Intro": "ഈ ടാബ് മുഴുവൻ ഗുഡ്സ് രസീത് പ്രോസസിനുമുള്ള ഒരു എൻട്രി പോയിന്റാണ്. ഇത് വരുന്ന എല്ലാ ഷിപ്പ്മെന്റുകളും ലിസ്റ്റ് ചെയ്യുകയും, അളവ് പരിശോധിക്കുകയും, കേടുപാടുകൾ രേഖപ്പെടുത്തുകയും, സ്റ്റോക്ക് ലെവലുകൾ കൃത്യമായി അപ്ഡേറ്റ് ചെയ്യുകയും ചെയ്യുന്ന രസീത് പ്രോസസ് ആരംഭിക്കാൻ നിങ്ങളെ അനുവദിക്കുന്നു.",
    "step5A": "ഓർഡറുകൾ സ്വീകരിക്കുക ഇന്റർഫേസ്",
    "receiveOrdersScreenshotTitle": "ഓർഡറുകൾ സ്വീകരിക്കുക ടാബ് - ഡാഷ്ബോർഡ് കാഴ്ച",
    "ordersReadyToReceive": "സ്വീകരിക്കാൻ തയ്യാറായ ഓർഡറുകൾ ({count})",
    "searchPOVendor": "PO ID, വിക്രേതാവിനെ തിരയുക...",
    "allStatuses": "എല്ലാ സ്റ്റാറ്റസുകളും",
    "partiallyReceived": "ഭാഗികമായി ലഭിച്ചു",
    "receiveOrdersNote": "ഈ ഡാഷ്ബോർഡ് നിലവിൽ ട്രാൻസിറ്റിലുള്ള അല്ലെങ്കിൽ ഭാഗികമായി ലഭിച്ച എല്ലാ പർച്ചേസ് ഓർഡറുകളും കാണിക്കുന്നു. ഒരു ഓർഡറിനായുള്ള ഗുഡ്സ് രസീത് പ്രോസസ് ആരംഭിക്കാൻ, പച്ച \"സ്വീകരിക്കുക\" ബട്ടണിൽ ക്ലിക്ക് ചെയ്യുക.",
    "receive": "സ്വീകരിക്കുക",
    "step5B": "ഗുഡ്സ് രസീത് മോഡൽ - വിശദമായ വഴി",
    "goodsReceiptNote": "\"സ്വീകരിക്കുക\" ക്ലിക്ക് ചെയ്യുമ്പോൾ സമഗ്രമായ ഗുഡ്സ് രസീത് മോഡൽ തുറക്കും. ഇവിടെയാണ് ലഭിച്ച ഇനങ്ങൾ പരിശോധിക്കുന്നതിന്റെയും രേഖപ്പെടുത്തുന്നതിന്റെയും ഭൗതിക പ്രക്രിയ നടക്കുന്നത്.",
    "goodsReceiptModalScreenshotTitle": "ഗുഡ്സ് രസീത് മോഡൽ - പ്രാരംഭ കാഴ്ച",

    "receivePurchaseOrder": "പർച്ചേസ് ഓർഡർ സ്വീകരിക്കുക: PO-2024-0521-001",
    "vendorInvoiceDetails": "വിക്രേതാവിന്റെ ഇൻവോയ്സ് വിശദാംശങ്ങൾ",
    "invoiceNumber": "ഇൻവോയ്സ് നമ്പർ",
    "invoiceAmount": "ഇൻവോയ്സ് തുക",
    "uploadInvoice": "ഇൻവോയ്സ് അപ്ലോഡ് ചെയ്യുക",
    "attachFile": "ഫയൽ അറ്റാച്ച് ചെയ്യുക",
    "scanBarcode": "സ്വീകരിക്കാൻ ബാർകോഡ് സ്കാൻ ചെയ്യുക",
    "scanBarcodePlaceholder": "അളവ് സ്വയമേവ തിരഞ്ഞെടുക്കാനും അപ്ഡേറ്റ് ചെയ്യാനും ഉൽപ്പന്ന ബാർകോഡ് സ്കാൻ ചെയ്യുക...",
    "ordered": "ഓർഡർ ചെയ്തത്",
    "receivedQty": "ലഭിച്ച അളവ്",
    "damagedQty": "കേടുപാടുകൾ സംഭവിച്ച അളവ്",
    "mfgExpDate": "MFG / EXP തീയതി",
    "unitCost": "യൂണിറ്റ് വില",
    "notes": "കുറിപ്പുകൾ",
    "addNotes": "കുറിപ്പുകൾ ചേർക്കുക...",
    "brokenBox": "പൊട്ടിയ ബോക്സ്",
    "discrepancyFound": "വ്യത്യാസം കണ്ടെത്തി",
    "discrepancyDetails": "<strong>ഓർഗാനിക് ടൊമാറ്റോസ്:</strong> 100 എണ്ണം ഓർഡർ ചെയ്തു, 80 എണ്ണം ലഭിച്ചു, 5 എണ്ണം കേടുപാടുകൾ സംഭവിച്ചു. <strong>15 എണ്ണം കാണുന്നില്ല.</strong> ഇത് സിസ്റ്റത്തിൽ രേഖപ്പെടുത്തും.",
    "overallReceivingNotes": "മൊത്തത്തിലുള്ള രസീത് കുറിപ്പുകൾ",
    "overallNotesPlaceholder": "ഉദാ: ഷിപ്പ്മെന്റ് സമയത്തിന് എത്തി, ഒരു ബോക്സിന് കേടുപാടുകൾ സംഭവിച്ചിരുന്നു.",
    "confirmReceiveGoods": "ഗുഡ്സ് സ്ഥിരീകരിക്കുകയും സ്വീകരിക്കുകയും ചെയ്യുക",
    "step5C": "ഓരോ ഫീൽഡിന്റെയും വിശദീകരണം",
    "barcodeScannerHelp": "ഇനങ്ങൾ സ്വീകരിക്കുന്നതിനുള്ള ഏറ്റവും കാര്യക്ഷമമായ മാർഗ്ഗം. ഒരു ഉൽപ്പന്നത്തിന്റെ ബാർകോഡ് സ്കാൻ ചെയ്യുമ്പോൾ അതിന്റെ നിര സ്വയമേവ ഹൈലൈറ്റ് ചെയ്യപ്പെടുകയും കഴ്സർ \"ലഭിച്ച അളവ്\" ഫീൽഡിൽ വരികയും ചെയ്യും.",
    "receivedQtyHelp": "വിൽപ്പനയ്ക്ക് അനുയോജ്യമായ അവസ്ഥയിൽ ലഭിച്ച സാധനങ്ങളുടെ യഥാർത്ഥ എണ്ണം രേഖപ്പെടുത്തുക. സിസ്റ്റം എന്തെങ്കിലും കുറവുകൾ ഉണ്ടെങ്കിൽ സ്വയമേവ കണക്കാക്കുന്നു.",
    "damagedQtyHelp": "കേടുപാടുകൾ സംഭവിച്ചതോ അല്ലെങ്കിൽ വിൽക്കാൻ കഴിയാത്തതോ ആയ ഇനങ്ങളുടെ എണ്ണം രേഖപ്പെടുത്തുക.",
    "cameraIconHelp": "ഉത്തരവാദിത്തത്തിന് ഇത് നിർണായകമാണ്. കേടുപാടുകൾ സംഭവിച്ച ഇനങ്ങളുടെ ഫോട്ടോകൾ അപ്‌ലോഡ് ചെയ്യാൻ ഇത് ക്ലിക്ക് ചെയ്യുക. ഇത് വിക്രേതാവിനോടുള്ള അവകാശവാദങ്ങൾക്കും റിട്ടേണുകൾക്കും തെളിവ് നൽകുന്നു.",
    "unitCostHelp": "ഈ ഫീൽഡ് അംഗീകരിച്ച വില കാണിക്കുന്നു. വിക്രേതാവിന്റെ ഇൻവോയ്സിൽ മറ്റൊരു വിലയാണ് കാണിക്കുന്നതെങ്കിൽ, നിങ്ങൾക്ക് അത് ഇവിടെ അപ്ഡേറ്റ് ചെയ്യാം. ഇത് നിങ്ങളുടെ കോസ്റ്റ് ഓഫ് ഗുഡ്സ് സോൾഡ് (COGS) രസീത് ലഭിക്കുന്ന സമയം മുതൽ കൃത്യമാണെന്ന് ഉറപ്പാക്കുന്നു.",
    "mfgExpDateHelp": "ഉൽപ്പന്നത്തിന്റെ പാക്കേജിംഗിൽ നിന്ന് നിർമ്മാണ തീയതിയും കാലാവധി തീരുന്ന തീയതിയും രേഖപ്പെടുത്തുക. FEFO (ഫസ്റ്റ്-എക്സ്പയർഡ്, ഫസ്റ്റ്-ഔട്ട്) ഇൻവെന്ററി മാനേജ്മെന്റിനും ഗുണനിലവാര നിയന്ത്രണത്തിനും ഇത് അത്യന്താപേക്ഷിതമാണ്.",
    "notesHelp": "ഏതെങ്കിലും ഇനത്തിന്-നിർദ്ദിഷ്ട കുറിപ്പുകൾക്കായി ഇത് ഉപയോഗിക്കുക, ഉദാഹരണത്തിന് \"പാക്കേജിംഗ് ചെറുതായി കീറി, പക്ഷേ ഉൽപ്പന്നം ശരിയാണ്\".",
    "confirmReceiveHelp": "ഈ ബട്ടണിൽ ക്ലിക്ക് ചെയ്യുന്നത് പ്രോസസ് പൂർത്തിയാക്കുന്നു. ഇത് ഉൽപ്പന്ന സ്റ്റോക്ക് ലെവലുകൾ അപ്ഡേറ്റ് ചെയ്യുകയും, കേടുപാടുകൾ സംഭവിച്ച സാധനങ്ങൾ വിൽപ്പനയ്ക്ക് അനുയോജ്യമല്ലാത്ത വിഭാഗത്തിലേക്ക് മാറ്റുകയും, അക്കൗണ്ടിംഗിനായി ലെഡ്ജർ എൻട്രികൾ നിർമ്മിക്കുകയും, PO നില \"പൂർണ്ണമായി ലഭിച്ചു\" അല്ലെങ്കിൽ \"ഭാഗികമായി ലഭിച്ചു\" എന്ന് അപ്ഡേറ്റ് ചെയ്യുകയും ചെയ്യുന്നു.",
    "step5D": "രസീത് ലഭിച്ചതിന് ശേഷമുള്ള സ്ഥിരീകരണം",
    "postReceiptScreenshotTitle": "ഗുഡ്സ് രസീത് വിജയകരമായി സ്ഥിരീകരിച്ചു",
    "goodsReceivedSuccess": "ഗുഡ്സ് വിജയകരമായി ലഭിച്ചു!",
    "stockLevelsUpdated": "PO-2024-0521-001-ന്റെ സ്റ്റോക്ക് ലെവലുകൾ അപ്ഡേറ്റ് ചെയ്തിരിക്കുന്നു.",
    "spinachUpdate": "- ഫ്രഷ് സ്പിനാച്ച്: 50 യൂണിറ്റുകൾ വിൽപ്പനയ്ക്ക് അനുയോജ്യമായ സ്റ്റോക്കിലേക്ക് ചേർത്തു.",
    "tomatoesUpdate": "- ഓർഗാനിക് ടൊമാറ്റോസ്: 80 യൂണിറ്റുകൾ വിൽപ്പനയ്ക്ക് അനുയോജ്യമായ സ്റ്റോക്കിലേക്ക് ചേർത്തു, 5 യൂണിറ്റുകൾ വിൽപ്പനയ്ക്ക് അനുയോജ്യമല്ലാത്തതിലേക്ക് ചേർത്തു.",
    "backToDashboard": "ഡാഷ്ബോർഡിലേക്ക് തിരികെ പോകുക",

    "step6Title": "ഓട്ടോ-അലോക്കേഷൻ ടാബ് - സ്മാർട്ട് വെയർഹൗസ് ലൊക്കേഷൻ അസൈൻമെന്റ്",
    "step6Intro": "ഓട്ടോ-അലോക്കേഷൻ സിസ്റ്റം, ഇതുവരെ അലോക്കേറ്റ് ചെയ്തിട്ടില്ലാത്ത സജീവ പർച്ചേസ് ഓർഡറുകളിൽ നിന്നുള്ള ഉൽപ്പന്നങ്ങൾക്ക് ബുദ്ധിപരമായി വെയർഹൗസ് ലൊക്കേഷനുകൾ അസൈൻ ചെയ്യുന്നു. ഇത് സ്റ്റോറേജ് കാര്യക്ഷമതയും ആക്സസിബിലിറ്റിയും ഒപ്റ്റിമൈസ് ചെയ്യുന്നതിന് സ്മാർട്ട് അൽഗോരിതങ്ങൾ ഉപയോഗിക്കുന്നു.",
    "step6A": "ഓട്ടോ-അലോക്കേഷൻ ഡാഷ്ബോർഡ്",
    "autoAllocScreenshotTitle": "ഓട്ടോ-അലോക്കേഷൻ ടാബ് - ലൊക്കേഷൻ അസൈൻമെന്റിനായി കാത്തിരിക്കുന്ന ഉൽപ്പന്നങ്ങൾ",
    "autoAllocLocation": "ഓട്ടോ അലോക്കേഷൻ ലൊക്കേഷൻ",
    "autoAllocNote": "വെയർഹൗസ് ലൊക്കേഷൻ അസൈൻമെന്റിനായി കാത്തിരിക്കുന്ന സജീവ പർച്ചേസ് ഓർഡറുകളിൽ നിന്നുള്ള ഉൽപ്പന്നങ്ങൾ",
    "autoAllocate": "ഓട്ടോ അലോക്കേറ്റ് {count}",
    "searchByNamePOVendor": "ഉൽപ്പന്നത്തിന്റെ പേര്, PO ID, അല്ലെങ്കിൽ വിക്രേതാവ് ഉപയോഗിച്ച് തിരയുക...",
    "allVendors": "എല്ലാ വിക്രേതാക്കളും",
    "allStatus": "എല്ലാ സ്റ്റാറ്റസുകളും",
    "placed": "നൽകിയത്",
    "numProducts": "{count} ഉൽപ്പന്നങ്ങൾ",
    "numSelectedCards": "{count} എണ്ണം തിരഞ്ഞെടുത്തു",
    "selectAll": "എല്ലാം തിരഞ്ഞെടുക്കുക ({count} ഉൽപ്പന്നങ്ങൾ)",
    "step6B": "ഉൽപ്പന്ന അലോക്കേഷൻ കാർഡുകൾ",
    "allocCardsScreenshotTitle": "ഓട്ടോ-അലോക്കേഷൻ കാർഡുകൾ - ലൊക്കേഷൻ അസൈൻമെന്റ് ആവശ്യമുള്ള ഉൽപ്പന്നങ്ങൾ",
    "numReceived": "({count} ലഭിച്ചത്)",
    "expectedDelivery": "പ്രതീക്ഷിക്കുന്ന ഡെലിവറി",
    "step6C": "ഓട്ടോ-അലോക്കേഷൻ ഫലങ്ങൾ",
    "allocResultsScreenshotTitle": "അലോക്കേഷൻ ഫലങ്ങൾ - വിജയവും പിശകും സംബന്ധിച്ച സംഗ്രഹം",
    "allocationResults": "അലോക്കേഷൻ ഫലങ്ങൾ",
    "location": "ലൊക്കേഷൻ",
    "successfullyAllocated": "വിജയകരമായി അലോക്കേറ്റ് ചെയ്തു",
    "capacityExceeded": "ശേഷി കവിഞ്ഞു",
    "manualAllocRequired": "മാനുവൽ അലോക്കേഷൻ ആവശ്യമാണ്",
    "closeLogs": "ലോഗുകൾ അടയ്ക്കുക",

    "step7Title": "പുതിയതായി ലഭിച്ച ടാബ് - ഗുഡ്സ് രസീത് ചരിത്രം",
    "step7Intro": "ഈ ടാബ്, വിശദമായ ഫിൽട്ടറുകൾ, കേടുപാടുകൾ ട്രാക്കിംഗ്, ലൊക്കേഷൻ വിവരങ്ങൾ എന്നിവയോടുകൂടിയ പുതിയതായി ലഭിച്ച ഗുഡ്സുകളിലേക്കുള്ള സമഗ്രമായ ദൃശ്യപരത നൽകുന്നു. ഇത് വ്യത്യസ്ത വിശകലന ആവശ്യങ്ങൾക്കായി ഉൽപ്പന്നം-കേന്ദ്രീകൃതവും വിക്രേതാവ്-കേന്ദ്രീകൃതവുമായ കാഴ്ചകളെ പിന്തുണയ്ക്കുന്നു.",
    "step7A": "പുതിയതായി ലഭിച്ച സ്ഥിതിവിവരക്കണക്കുകൾ ഡാഷ്ബോർഡ്",
    "recentStatsScreenshotTitle": "പുതിയതായി ലഭിച്ച ടാബ് - സംഗ്രഹ സ്ഥിതിവിവരക്കണക്കുകൾ",
    "orders": "ഓർഡറുകൾ",
    "items": "ഇനങ്ങൾ",
    "damaged": "കേടുപാടുകൾ സംഭവിച്ചത്",
    "ordersWithIssues": "പ്രശ്നങ്ങളുള്ള ഓർഡറുകൾ",
    "step7B": "ഉൽപ്പന്ന ടാബ് വഴി - വിശദമായ ഉൽപ്പന്ന കാഴ്ച",
    "byProductScreenshotTitle": "പുതിയതായി ലഭിച്ചത് - ഫിൽട്ടറുകളുള്ള ഉൽപ്പന്ന കാഴ്ച വഴി",

    "recentlyReceivedProducts": "പുതിയതായി ലഭിച്ച ഉൽപ്പന്നങ്ങൾ ({count} ഇനങ്ങൾ)",
    "searchPOVendorProduct": "PO ID, വിക്രേതാവ്, അല്ലെങ്കിൽ ഉൽപ്പന്നം ഉപയോഗിച്ച് തിരയുക...",
    "last7Days": "കഴിഞ്ഞ 7 ദിവസങ്ങൾ",
    "last24Hours": "കഴിഞ്ഞ 24 മണിക്കൂറുകൾ",
    "last30Days": "കഴിഞ്ഞ 30 ദിവസങ്ങൾ",
    "last90Days": "കഴിഞ്ഞ 90 ദിവസങ്ങൾ",
    "allReceived": "എല്ലാം ലഭിച്ചത്",
    "fullyReceived": "പൂർണ്ണമായി ലഭിച്ചത്",
    "orderedQty": "ഓർഡർ ചെയ്ത അളവ്",
    "deliveryDate": "ഡെലിവറി തീയതി",
    "missing": "കാണുന്നില്ല: {count}",
    "damagedUnits": "കേടുപാടുകൾ: {count} യൂണിറ്റുകൾ",
    "damageReason": "ട്രാൻസ്പോർട്ട് സമയത്ത് പാക്കേജിംഗിന് കേടുപാടുകൾ സംഭവിച്ചു",
    "notAllocated": "അലോക്കേറ്റ് ചെയ്തിട്ടില്ല",
    "step7C": "വിക്രേതാവ് ടാബ് വഴി - വിക്രേതാവിന്റെ പ്രകടന വിശകലനം",
    "byVendorScreenshotTitle": "പുതിയതായി ലഭിച്ചത് - വിക്രേതാവിന്റെ പ്രകടന വിശകലനം വഴി",
    "recentlyReceivedByVendor": "പുതിയതായി ലഭിച്ചത് വിക്രേതാവ് വഴി ({count} വിക്രേതാക്കൾ)",
    "searchVendors": "വിക്രേതാക്കളെ തിരയുക...",
    "numOrdersProducts": "{orders} ഓർഡറുകൾ • {products} ഉൽപ്പന്നങ്ങൾ",
    "itemsReceived": "ലഭിച്ച ഇനങ്ങൾ",
    "productLines": "ഉൽപ്പന്ന ലൈനുകൾ",
    "recentOrders": "പുതിയ ഓർഡറുകൾ:",
    "moreProducts": "+{count} കൂടുതൽ ഉൽപ്പന്നങ്ങൾ",
    "viewVendor": "വിക്രേതാവിനെ കാണുക",

    "step8Title": "പുതിയ പർച്ചേസ് ഓർഡറുകൾ നിർമ്മിക്കുക",
    "step8Intro": "പർച്ചേസ് ഓർഡർ നിർമ്മിക്കുന്ന പ്രക്രിയ ലളിതവും ബുദ്ധിപരവുമാണ്. ഇത് നിങ്ങൾക്ക് ഉൽപ്പന്നങ്ങൾ വേഗത്തിൽ തിരഞ്ഞെടുക്കാനും, വിക്രേതാക്കളെ തിരഞ്ഞെടുക്കാനും, സ്വയമേവയുള്ള കണക്കുകൂട്ടലുകളും സ്മാർട്ട് നിർദ്ദേശങ്ങളും ഉപയോഗിച്ച് പ്രൊഫഷണൽ പർച്ചേസ് ഓർഡറുകൾ നിർമ്മിക്കാനും സഹായിക്കുന്നു.",
    "step8A": "പർച്ചേസ് ഓർഡർ നിർമ്മിക്കുക ഫംഗ്ഷൻ ആക്സസ് ചെയ്യുക",
    "createPOScreenshotTitle": "പർച്ചേസ് ഓർഡർ നിർമ്മിക്കുക ബട്ടൺ ആക്സസ്",
    "createPONote": "\"പർച്ചേസ് ഓർഡർ നിർമ്മിക്കുക\" ബട്ടണിൽ ക്ലിക്ക് ചെയ്യുമ്പോൾ നിങ്ങൾക്ക് സമഗ്രമായ ഓർഡർ നിർമ്മാണ ഇന്റർഫേസിലേക്ക് എത്താൻ കഴിയും. അവിടെ നിങ്ങൾക്ക് ഉൽപ്പന്നങ്ങളുടെ ബുദ്ധിപരമായ നിർദ്ദേശങ്ങളും വിക്രേതാക്കളുടെ ശുപാർശകളും ഉപയോഗിച്ച് ഘട്ടം ഘട്ടമായി നിങ്ങളുടെ പർച്ചേസ് ഓർഡറുകൾ നിർമ്മിക്കാം."
  }
};

export default function ManualPurchaseOrders() {
  const [language, setLanguage] = useManualLanguage();

  const t = (key, params = {}) => {
    let text = translations[language]?.[key] || translations['en']?.[key];
    if (text) {
      for (const [param, value] of Object.entries(params)) {
        text = text.replace(`{${param}}`, value);
      }
    }
    return text;
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
          <LanguageSelector language={language} setLanguage={setLanguage} readOnly={true} />
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <Receipt className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                {t('pageTitle')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                {t('description')}
              </p>
            </div>

            <section className="space-y-10">
              <Step number="1" title={t('step1Title')}>
                <p>{t('step1Intro')}</p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step1A')}</h6>
                <Screenshot title={t('navScreenshotTitle')}>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                          <h2 className="text-xl font-bold text-slate-900">{t('inventoryDashboard')}</h2>
                          <p className="text-slate-600">{t('manageInv')}</p>
                        </div>
                        <div className="flex gap-3 flex-col md:flex-row">
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            <Receipt className="w-4 h-4 mr-2" />
                            {t('poButton')}
                          </Button>
                          <Button variant="outline">
                            <Package className="w-4 h-4 mr-2" />
                            {t('productsButton')}
                          </Button>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">{t('accessNote')}</p>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step1B')}</h6>
                <Screenshot title={t('statsScreenshotTitle')}>
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h1 className="text-2xl font-bold text-slate-900">{t('poPageTitle')}</h1>
                        <p className="text-slate-600">{t('trackOrders')}</p>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Plus className="w-4 h-4 mr-2" />
                        {t('createPO')}
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-medium text-slate-600">{t('totalPOs')}</h3>
                          <Truck className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-slate-900">156</div>
                      </div>
                      <div className="bg-white border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-medium text-slate-600">{t('pending')}</h3>
                          <Clock className="w-4 h-4 text-orange-600" />
                        </div>
                        <div className="text-2xl font-bold text-slate-900">23</div>
                      </div>
                      <div className="bg-white border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-medium text-slate-600">{t('inTransit')}</h3>
                          <AlertTriangle className="w-4 h-4 text-yellow-600" />
                        </div>
                        <div className="text-2xl font-bold text-slate-900">12</div>
                      </div>
                      <div className="bg-white border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-medium text-slate-600">{t('totalValue')}</h3>
                          <DollarSign className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="text-2xl font-bold text-slate-900">₹4,89,250</div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="2" title={t('step2Title')}>
                <p>{t('step2Intro')}</p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step2A')}</h6>
                <Screenshot title={t('listScreenshotTitle')}>
                  <div className="bg-white border rounded-lg">
                    <div className="p-4 border-b flex justify-between items-center">
                      <h3 className="font-semibold text-slate-800">{t('recentPOs')}</h3>
                      <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                        <Button variant="ghost" size="sm" className="bg-white shadow-sm">
                          <List className="w-4 h-4 mr-1" />
                          {t('list')}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Grid className="w-4 h-4 mr-1" />
                          {t('cards')}
                        </Button>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-slate-50 border-b">
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('poId')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('product')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('vendor')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('orderDate')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('totalCost')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('status')}</th>
                            <th className="py-3 px-4 text-center font-medium text-slate-600">{t('actions')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-slate-50">
                            <td className="py-3 px-4">
                              <code className="text-xs bg-slate-100 px-2 py-1 rounded">PO-2024-0521-001</code>
                            </td>
                            <td className="py-3 px-4">
                              <p className="font-medium">{t('freshSpinach')}</p>
                              <p className="text-xs text-slate-500">{t('units', { count: 50 })}</p>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-slate-400" />
                                <span>{t('healthyHarvest')}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">May 21, 2024</td>
                            <td className="py-3 px-4 font-semibold">₹32,500.00</td>
                            <td className="py-3 px-4">
                              <Badge className="bg-blue-100 text-blue-800">{t('shipped')}</Badge>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <Button variant="ghost" size="icon">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-slate-50">
                            <td className="py-3 px-4">
                              <code className="text-xs bg-slate-100 px-2 py-1 rounded">PO-2024-0520-003</code>
                            </td>
                            <td className="py-3 px-4">
                              <p className="font-medium">{t('basmatiRice')}</p>
                              <p className="text-xs text-slate-500">{t('units', { count: 25 })}</p>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-slate-400" />
                                <span>{t('goldenGrains')}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">May 20, 2024</td>
                            <td className="py-3 px-4 font-semibold">₹25,900.00</td>
                            <td className="py-3 px-4">
                              <Badge className="bg-emerald-100 text-emerald-800">{t('receivedFull')}</Badge>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <Button variant="ghost" size="icon">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step2B')}</h6>
                <Screenshot title={t('cardScreenshotTitle')}>
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-all p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <code className="text-xs bg-slate-100 px-2 py-1 rounded mb-2 inline-block">PO-2024-0521-001</code>
                          <h3 className="font-semibold text-slate-900">{t('freshSpinach')}</h3>
                          <p className="text-sm text-slate-500">{t('units', { count: 50 })}</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">{t('shipped')}</Badge>
                      </div>

                      <div className="space-y-3 text-sm border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-3">
                          <Building2 className="w-4 h-4 text-slate-400" />
                          <span>{t('healthyHarvest')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <span>May 21, 2024</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <DollarSign className="w-4 h-4 text-slate-400" />
                          <span className="font-semibold">₹32,500.00</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <Button variant="outline" size="sm" className="w-full">
                          <Eye className="w-4 h-4 mr-2" />
                          {t('viewDetails')}
                        </Button>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-all p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <code className="text-xs bg-slate-100 px-2 py-1 rounded mb-2 inline-block">PO-2024-0520-003</code>
                          <h3 className="font-semibold text-slate-900">{t('basmatiRice')}</h3>
                          <p className="text-sm text-slate-500">{t('units', { count: 25 })}</p>
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-800">{t('receivedFull')}</Badge>
                      </div>

                      <div className="space-y-3 text-sm border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-3">
                          <Building2 className="w-4 h-4 text-slate-400" />
                          <span>{t('goldenGrains')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <span>May 20, 2024</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <DollarSign className="w-4 h-4 text-slate-400" />
                          <span className="font-semibold">₹25,900.00</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <Button variant="outline" size="sm" className="w-full">
                          <Eye className="w-4 h-4 mr-2" />
                          {t('viewDetails')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="3" title={t('step3Title')}>
                <p>{t('step3Intro')}</p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step3A')}</h6>
                <Screenshot title={t('modScreenshotTitle')}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                      <div>
                        <h4 className="font-medium text-amber-800">{t('vendorModReqs')}</h4>
                        <p className="text-sm text-amber-700">{t('reviewModReqs')}</p>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-slate-50 border-b">
                              <th className="py-3 px-4 text-left font-medium text-slate-600">{t('poId')}</th>
                              <th className="py-3 px-4 text-left font-medium text-slate-600">{t('vendor')}</th>
                              <th className="py-3 px-4 text-left font-medium text-slate-600">{t('orderDate')}</th>
                              <th className="py-3 px-4 text-left font-medium text-slate-600">{t('itemsChanged')}</th>
                              <th className="py-3 px-4 text-center font-medium text-slate-600">{t('actions')}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b hover:bg-slate-50">
                              <td className="py-3 px-4">PO-2024-0521-002</td>
                              <td className="py-3 px-4">{t('freshValleyFarms')}</td>
                              <td className="py-3 px-4">May 21, 2024</td>
                              <td className="py-3 px-4">
                                <Badge className="bg-orange-100 text-orange-800">{t('units', { count: 3 })}</Badge>
                              </td>
                              <td className="py-3 px-4 text-center">
                                <Button size="sm">
                                  <Edit className="w-4 h-4 mr-2" />
                                  {t('review')}
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step3B')}</h6>
                <Screenshot title={t('reviewModalScreenshotTitle')}>
                  <div className="max-w-4xl mx-auto bg-white border rounded-lg shadow-lg">
                    <div className="p-6 border-b">
                      <h2 className="text-xl font-bold text-slate-900">{t('negotiatePO')}</h2>
                      <p className="text-slate-600">{t('vendorReviewNote')}</p>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                          <h4 className="font-semibold text-slate-800 mb-4">{t('itemMods')}</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm border">
                              <thead>
                                <tr className="bg-slate-50">
                                  <th className="py-2 px-3 text-left">{t('product')}</th>
                                  <th className="py-2 px-3 text-left">{t('original')}</th>
                                  <th className="py-2 px-3 text-left">{t('vendorRequest')}</th>
                                  <th className="py-2 px-3 text-left bg-blue-50">{t('yourProposal')}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b">
                                  <td className="py-2 px-3 font-medium">{t('freshTomatoes')}</td>
                                  <td className="py-2 px-3">
                                    <div>{t('units', { count: 100 })}</div>
                                    <div className="text-xs text-slate-500">@ ₹45.00</div>
                                  </td>
                                  <td className="py-2 px-3">
                                    <div>{t('units', { count: 80 })}</div>
                                    <div className="text-xs text-slate-500">@ ₹48.00</div>
                                  </td>
                                  <td className="py-2 px-3 bg-blue-50">
                                    <div className="flex gap-2">
                                      <Input className="w-16 h-6 text-xs" defaultValue="90" />
                                      <Input className="w-20 h-6 text-xs" defaultValue="46.50" />
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-slate-800 mb-2">{t('negotiationHistory')}</h5>
                              <div className="bg-slate-50 rounded-lg p-3 text-xs space-y-2">
                                <div className="flex items-start gap-2">
                                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Building2 className="w-3 h-3 text-orange-600" />
                                  </div>
                                  <div>
                                    <p className="font-medium">{t('vendorKey')}</p>
                                    <p>{t('vendorNote')}</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-1">{t('notesForVendor')}</label>
                              <textarea
                                className="w-full p-2 border rounded text-xs h-16"
                                placeholder={t('explainCounter')}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border-t flex justify-end gap-3 flex-wrap">
                      <Button variant="outline">{t('cancel')}</Button>
                      <Button className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {t('acceptChanges')}
                      </Button>
                      <Button>
                        <Edit className="w-4 h-4 mr-2" />
                        {t('submitCounter')}
                      </Button>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="4" title={t('step4Title')}>
                <p>{t('step4Intro')}</p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step4A')}</h6>
                <Screenshot title={t('basketStatsScreenshotTitle')}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-white border rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Package className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-slate-600">{t('totalItems')}</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-900">47</p>
                      </div>
                      <div className="bg-white border rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-slate-600">{t('estTotalValue')}</span>
                        </div>
                        <p className="text-2xl font-bold text-green-600">₹1,89,750</p>
                      </div>
                      <div className="bg-white border rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          <span className="text-sm font-medium text-slate-600">{t('urgentItems')}</span>
                        </div>
                        <p className="text-2xl font-bold text-red-600">12</p>
                      </div>
                      <div className="bg-white border rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Building2 className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-medium text-slate-600">{t('vendors')}</span>
                        </div>
                        <p className="text-2xl font-bold text-purple-600">8</p>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step4B')}</h6>
                <Screenshot title={t('basketItemsScreenshotTitle')}>
                  <div className="bg-white border rounded-lg">
                    <div className="p-4 border-b">
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center flex-wrap gap-3">
                          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                            <Package className="w-5 h-5 text-blue-600" />
                            {t('purchaseBasketTitle', { count: 47 })}
                          </h3>
                          <div className="flex items-center gap-3 flex-wrap">
                            <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                              <option>{t('allPriorities')}</option>
                              <option>{t('urgent')}</option>
                              <option>{t('high')}</option>
                              <option>{t('medium')}</option>
                              <option>{t('low')}</option>
                            </select>

                            <Button className="bg-blue-600 hover:bg-blue-700">
                              <Plus className="w-4 h-4 mr-2" />
                              {t('addItem')}
                            </Button>

                            <Button className="bg-green-600 hover:bg-green-700">
                              <Zap className="w-4 h-4 mr-2" />
                              {t('createPOs', { count: 12 })}
                            </Button>
                          </div>
                        </div>

                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                          <Input placeholder={t('searchProducts')} className="pl-9" />
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <input type="checkbox" className="w-4 h-4" />
                              <span className="text-sm font-medium text-blue-900">
                                {t('itemsSelected', { count: 12, value: '89,450.00' })}
                              </span>
                            </div>
                            <Button variant="outline" size="sm">{t('clearSelection')}</Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-slate-50 border-b">
                            <th className="py-3 px-4 w-12">
                              <input type="checkbox" className="w-4 h-4" />
                            </th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('product')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('currentStock')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('desiredQty')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('unitPrice')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('priority')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('reason')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('suggestedVendor')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('estTotal')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('targetDate')}</th>
                            <th className="py-3 px-4 text-left font-medium text-slate-600">{t('addedBy')}</th>
                            <th className="py-3 px-4 text-center font-medium text-slate-600">{t('actions')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-slate-50">
                            <td className="py-3 px-4">
                              <input type="checkbox" className="w-4 h-4" />
                            </td>
                            <td className="py-3 px-4">
                              <div>
                                <p className="font-medium text-blue-600 hover:underline cursor-pointer">{t('freshMilk')}</p>
                                <p className="text-xs text-slate-500">SKU: MILK-001</p>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span className="font-medium text-red-600">8</span>
                              <p className="text-xs text-slate-500">{t('min', { count: 25 })}</p>
                            </td>
                            <td className="py-3 px-4">
                              <Input className="w-20" defaultValue="50" />
                            </td>
                            <td className="py-3 px-4">
                              <div className="space-y-1">
                                <button className="text-left hover:bg-slate-50 p-1 rounded w-full">
                                  <div className="font-semibold text-slate-900">₹28.50</div>
                                  <div className="text-xs text-blue-600 hover:text-blue-800">{t('clickToEdit')}</div>
                                </button>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <Badge className="bg-red-100 text-red-800">{t('urgent')}</Badge>
                            </td>
                            <td className="py-3 px-4">
                              <Badge variant="secondary" className="bg-orange-100 text-orange-800">{t('lowStock')}</Badge>
                            </td>
                            <td className="py-3 px-4">
                              <select className="text-xs border border-slate-200 rounded px-2 py-1 bg-white w-full">
                                <option>{t('selectVendor')}</option>
                                <option selected>{t('dairyFresh')}</option>
                                <option>{t('pureMilk')}</option>
                              </select>
                            </td>
                            <td className="py-3 px-4">
                              <span className="font-semibold">₹1,425.00</span>
                            </td>
                            <td className="py-3 px-4">May 25, 2024</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-1 text-sm">
                                <User className="w-3 h-3 text-slate-400" />
                                <span className="text-slate-600">admin@store.com</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-800">
                                <AlertTriangle className="w-4 h-4" />
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step4C')}</h6>
                <Screenshot title={t('addProductModalScreenshotTitle')}>
                  <div className="max-w-4xl mx-auto bg-white border rounded-lg shadow-lg">
                    <div className="p-6 border-b">
                      <h2 className="text-xl font-bold text-slate-900">{t('addProductToBasket')}</h2>
                      <p className="text-slate-600">{t('addProductNote')}</p>
                    </div>
                    <div className="p-6">
                      <div className="flex gap-4 mb-4 flex-wrap">
                        <div className="relative flex-grow">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                          <Input placeholder={t('searchProductsSku')} className="pl-9" />
                        </div>
                        <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                          <option>{t('allCategories')}</option>
                          <option>{t('dairyProducts')}</option>
                          <option>{t('vegetables')}</option>
                          <option>{t('grainsCereals')}</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <input type="checkbox" className="w-4 h-4" />
                            <div className="flex-grow">
                              <p className="font-medium">{t('organicBananas')}</p>
                              <p className="text-xs text-slate-500">SKU: FRT-BAN-01</p>
                            </div>
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span>{t('currentStock')}:</span>
                              <span className="font-medium text-orange-600">12 ({t('lowInStock')})</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t('minLevel')}:</span>
                              <span>30</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t('costPrice')}:</span>
                              <span>₹65.00</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                              <span>{t('quantity')}:</span>
                              <Input className="w-16 h-6 text-xs" defaultValue="50" />
                            </div>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <input type="checkbox" className="w-4 h-4" />
                            <div className="flex-grow">
                              <p className="font-medium">{t('freshOranges')}</p>
                              <p className="text-xs text-slate-500">SKU: FRT-ORG-01</p>
                            </div>
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span>{t('currentStock')}:</span>
                              <span className="font-medium text-green-600">85</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t('minLevel')}:</span>
                              <span>40</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t('costPrice')}:</span>
                              <span>₹78.50</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                              <span>{t('quantity')}:</span>
                              <Input className="w-16 h-6 text-xs" defaultValue="30" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border-t flex justify-between items-center flex-wrap gap-3">
                      <div className="text-sm text-slate-600">
                        <span className="font-medium">{t('numSelected', { count: 3 })}</span> • {t('estTotalValue')}: ₹12,450.00
                      </div>
                      <div className="flex gap-3 ">
                        <Button variant="outline">{t('cancel')}</Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          {t('add_to_basket')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="5" title={t('step5Title')}>
                <p>{t('step5Intro')}</p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step5A')}</h6>
                <Screenshot title={t('receiveOrdersScreenshotTitle')}>
                  <div className="space-y-6">
                    <div className="bg-white border rounded-lg shadow-sm">
                      <div className="p-4 border-b">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                            <Package className="w-5 h-5 text-blue-600" />
                            {t('ordersReadyToReceive', { count: 28 })}
                          </h3>
                          <div className="flex flex-col md:flex-row gap-3 w-full lg:w-auto">
                            <div className="relative flex-1 lg:w-64">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                              <Input placeholder={t('searchPOVendor')} className="pl-9" />
                            </div>
                            <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                              <option>{t('allStatuses')}</option>
                              <option>{t('shipped')}</option>
                              <option>{t('partiallyReceived')}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: t('receiveOrdersNote') }}></p>
                        <div className="mt-4 p-4 border rounded-lg bg-slate-50 flex justify-between items-center">
                          <div>
                            <code className="text-xs bg-slate-200 px-2 py-1 rounded">PO-2024-0521-001</code>
                            <p className="font-medium">{t('healthyHarvest')}</p>
                          </div>
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            {t('receive')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step5B')}</h6>
                <p>{t('goodsReceiptNote')}</p>
                <Screenshot title={t('goodsReceiptModalScreenshotTitle')}>
                  <div className="max-w-5xl mx-auto bg-white border rounded-lg shadow-lg">
                    <div className="p-6 border-b">
                      <h2 className="text-xl font-bold text-slate-900">{t('receivePurchaseOrder')}</h2>
                      <p className="text-slate-600">{t('vendor')}: {t('healthyHarvest')}</p>
                    </div>
                    <div className="p-6 space-y-6">
                      {/* Invoice Details */}
                      <div className="bg-slate-50 p-4 rounded-lg border">
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-slate-600" />
                          {t('vendorInvoiceDetails')}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="text-sm font-medium text-slate-600">{t('invoiceNumber')}</label>
                            <Input placeholder="e.g., INV-HH-584" />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-600">{t('invoiceAmount')}</label>
                            <Input type="number" placeholder="e.g., 32450.00" />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-600">{t('uploadInvoice')}</label>
                            <Button variant="outline" className="w-full">
                              <Camera className="w-4 h-4 mr-2" /> {t('attachFile')}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Barcode Scanner */}
                      <div className="relative">
                        <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                          <Scan className="w-5 h-5 text-slate-600" />
                          {t('scanBarcode')}
                        </h4>
                        <Input placeholder={t('scanBarcodePlaceholder')} className="text-lg p-4 pl-10" />
                        <Scan className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      </div>

                      {/* Product List */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-slate-100">
                              <th className="py-2 px-3 text-left font-medium">{t('product')}</th>
                              <th className="py-2 px-3 text-center font-medium">{t('ordered')}</th>
                              <th className="py-2 px-3 text-center font-medium bg-green-50">{t('receivedQty')}</th>
                              <th className="py-2 px-3 text-center font-medium bg-red-50">{t('damagedQty')}</th>
                              <th className="py-2 px-3 text-center font-medium">{t('unitCost')}</th>
                              <th className="py-2 px-3 text-center font-medium">{t('mfgExpDate')}</th>
                              <th className="py-2 px-3 text-center font-medium">{t('notes')}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-3">
                                <p className="font-medium">{t('freshSpinach')}</p>
                                <p className="text-xs text-slate-500">SKU: VEG-SPN-01</p>
                              </td>
                              <td className="p-3 text-center font-medium">50</td>
                              <td className="p-3 bg-green-50">
                                <Input className="w-20 mx-auto text-center" defaultValue="50" />
                              </td>
                              <td className="p-3 bg-red-50">
                                <div className="flex items-center justify-center gap-2">
                                  <Input className="w-20 mx-auto text-center" defaultValue="0" />
                                  <Button variant="outline" size="icon" className="w-8 h-8">
                                    <Camera className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                              <td className="p-3">
                                <Input className="w-24 mx-auto text-center" defaultValue="65.00" />
                              </td>
                              <td className="p-3">
                                <div className="flex flex-col gap-2">
                                  <Input type="date" className="text-xs p-1 h-8" />
                                  <Input type="date" className="text-xs p-1 h-8" />
                                </div>
                              </td>
                              <td className="p-3">
                                <Input placeholder={t('addNotes')} className="text-xs" />
                              </td>
                            </tr>
                            <tr className="border-b bg-orange-50">
                              <td className="p-3">
                                <p className="font-medium">{t('freshTomatoes')}</p>
                                <p className="text-xs text-slate-500">SKU: VEG-TMT-03</p>
                              </td>
                              <td className="p-3 text-center font-medium">100</td>
                              <td className="p-3 bg-green-50">
                                <Input className="w-20 mx-auto text-center" defaultValue="80" />
                              </td>
                              <td className="p-3 bg-red-50">
                                <div className="flex items-center justify-center gap-2">
                                  <Input className="w-20 mx-auto text-center" defaultValue="5" />
                                  <Button variant="outline" size="icon" className="w-8 h-8">
                                    <Camera className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                              <td className="p-3">
                                <Input className="w-24 mx-auto text-center" defaultValue="42.50" />
                              </td>
                              <td className="p-3">
                                <div className="flex flex-col gap-2">
                                  <Input type="date" className="text-xs p-1 h-8" />
                                  <Input type="date" className="text-xs p-1 h-8" />
                                </div>
                              </td>
                              <td className="p-3">
                                <Input placeholder={t('brokenBox')} className="text-xs border-red-300" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Discrepancy Alert */}
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-orange-800">{t('discrepancyFound')}</p>
                          <p className="text-sm text-orange-700" dangerouslySetInnerHTML={{ __html: t('discrepancyDetails') }}></p>
                        </div>
                      </div>

                      {/* Finalization */}
                      <div>
                        <label className="text-sm font-medium text-slate-600">{t('overallReceivingNotes')}</label>
                        <textarea className="w-full p-2 border rounded" placeholder={t('overallNotesPlaceholder')}></textarea>
                      </div>
                    </div>
                    <div className="p-6 border-t flex justify-end gap-3 flex-col md:flex-row">
                      <Button variant="outline">{t('cancel')}</Button>
                      <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {t('confirmReceiveGoods')}
                      </Button>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step5C')}</h6>
                <ul className="list-disc list-inside space-y-3">
                  <li><strong>{t('scanBarcode')}:</strong> {t('barcodeScannerHelp')}</li>
                  <li><strong>{t('receivedQty')}:</strong> {t('receivedQtyHelp')}</li>
                  <li><strong>{t('damagedQty')}:</strong> {t('damagedQtyHelp')}</li>
                  <li><strong>{t('cameraIconHelp').split(':')[0]}:</strong> {t('cameraIconHelp').split(':')[1]}</li>
                  <li><strong>{t('unitCost')}:</strong> {t('unitCostHelp')}</li>
                  <li><strong>{t('mfgExpDate')}:</strong> {t('mfgExpDateHelp')}</li>
                  <li><strong>{t('notes')}:</strong> {t('notesHelp')}</li>
                  <li><strong>{t('confirmReceiveGoods')}:</strong> {t('confirmReceiveHelp')}</li>
                </ul>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step5D')}</h6>
                <Screenshot title={t('postReceiptScreenshotTitle')}>
                  <div className="p-8 text-center bg-emerald-50 rounded-lg">
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-emerald-900">{t('goodsReceivedSuccess')}</h3>
                    <p className="text-slate-600 mt-2">{t('stockLevelsUpdated')}</p>
                    <ul className="text-sm text-left mt-4 inline-block">
                      <li>{t('spinachUpdate')}</li>
                      <li>{t('tomatoesUpdate')}</li>
                    </ul>
                    <div className="mt-6">
                      <Button variant="outline">{t('backToDashboard')}</Button>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="6" title={t('step6Title')}>
                <p>{t('step6Intro')}</p>
                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step6A')}</h6>
                <Screenshot title={t('autoAllocScreenshotTitle')}>
                  <div className="space-y-6">
                    <div className="bg-white border rounded-lg shadow-sm">
                      <div className="p-4 border-b">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                          <div>
                            <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                              <MapPin className="w-5 h-5" />
                              {t('autoAllocLocation')}
                            </h3>
                            <p className="text-sm text-slate-600 mt-1">
                              {t('autoAllocNote')}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            {/* Card/List view toggles removed as per outline */}
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              <Zap className="w-4 h-4 mr-2" />
                              {t('autoAllocate', { count: 15 })}
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-4 mt-4">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <Input placeholder={t('searchByNamePOVendor')} className="pl-9" />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                              <option>{t('allVendors')}</option>
                              <option>{t('healthyHarvest')}</option>
                              <option>{t('goldenGrains')}</option>
                              <option>{t('freshValleyFarms')}</option>
                            </select>

                            <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                              <option>{t('allStatus')}</option>
                              <option>{t('placed')}</option>
                              <option>{t('shipped')}</option>
                              <option>{t('receivedFull')}</option>
                              <option>{t('partiallyReceived')}</option>
                            </select>

                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Package className="w-3 h-3" />
                                {t('numProducts', { count: 47 })}
                              </Badge>
                              <Badge className="bg-blue-100 text-blue-800">{t('numSelectedCards', { count: 15 })}</Badge>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-sm text-slate-600">
                              {t('selectAll', { count: 47 })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step6B')}</h6>
                <Screenshot title={t('allocCardsScreenshotTitle')}>
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
                      <div className="p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <input type="checkbox" className="w-4 h-4 mt-1" />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-1">
                              {t('freshSpinach')}
                            </h3>
                            <div className="flex flex-wrap gap-1 mb-2">
                              <Badge variant="outline" className="text-xs">
                                ID: VEG-SPN-01
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                PO: PO-2024-0521-001
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                          <div>
                            <p className="text-xs text-slate-500">{t('vendor')}</p>
                            <p className="font-medium text-slate-700 truncate">{t('healthyHarvest')}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">{t('quantity')}</p>
                            <div className="flex items-center gap-1">
                              <span className="font-medium">50</span>
                              <span className="text-xs text-emerald-600">{t('numReceived', { count: 45 })}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">{t('status')}</p>
                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                              {t('receivedFull')}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">{t('expectedDelivery')}</p>
                            <p className="text-xs text-slate-700">May 23, 2024</p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 text-xs">
                            <Eye className="w-3 h-3 mr-1" />
                            {t('viewDetails')}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
                      <div className="p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <input type="checkbox" className="w-4 h-4 mt-1" />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-1">
                              {t('basmatiRice')}
                            </h3>
                            <div className="flex flex-wrap gap-1 mb-2">
                              <Badge variant="outline" className="text-xs">
                                ID: RICE-BSM-02
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                PO: PO-2024-0520-003
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                          <div>
                            <p className="text-xs text-slate-500">{t('vendor')}</p>
                            <p className="font-medium text-slate-700 truncate">{t('goldenGrains')}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">{t('quantity')}</p>
                            <div className="flex items-center gap-1">
                              <span className="font-medium">25</span>
                              <span className="text-xs text-emerald-600">{t('numReceived', { count: 25 })}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">{t('status')}</p>
                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                              {t('receivedFull')}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">{t('expectedDelivery')}</p>
                            <p className="text-xs text-slate-700">May 22, 2024</p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 text-xs">
                            <Eye className="w-3 h-3 mr-1" />
                            {t('viewDetails')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step6C')}</h6>
                <Screenshot title={t('allocResultsScreenshotTitle')}>
                  <div className="bg-white border rounded-lg shadow-sm">
                    <div className="p-4 border-b">
                      <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                        {t('allocationResults')}
                      </h4>
                    </div>
                    <div className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                            <div>
                              <p className="font-medium text-slate-900">{t('freshSpinach')}</p>
                              <p className="text-sm text-slate-600">PO: PO-2024-0521-001</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-emerald-700">{t('location')}: A-3-2</p>
                            <p className="text-xs text-slate-500">{t('successfullyAllocated')}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                            <div>
                              <p className="font-medium text-slate-900">{t('basmatiRice')}</p>
                              <p className="text-sm text-slate-600">PO: PO-2024-0520-003</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-emerald-700">{t('location')}: B-1-4</p>
                            <p className="text-xs text-slate-500">{t('successfullyAllocated')}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 border border-red-200">
                          <div className="flex items-center gap-3">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                            <div>
                              <p className="font-medium text-slate-900">{t('freshTomatoes')}</p>
                              <p className="text-sm text-slate-600">PO: PO-2024-0519-005</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-red-700">{t('capacityExceeded')}</p>
                            <p className="text-xs text-slate-500">{t('manualAllocRequired')}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <Button variant="outline" className="w-full">
                          {t('closeLogs')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="7" title={t('step7Title')}>
                <p>{t('step7Intro')}</p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step7A')}</h6>
                <Screenshot title={t('recentStatsScreenshotTitle')}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="bg-white border rounded-lg shadow-sm p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Package className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-slate-600">{t('orders')}</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-900">24</p>
                      </div>

                      <div className="bg-white border rounded-lg shadow-sm p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-medium text-slate-600">{t('totalValue')}</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-900">₹6,89,500</p>
                      </div>

                      <div className="bg-white border rounded-lg shadow-sm p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Package className="w-4 h-4 text-slate-600" />
                          <span className="text-sm font-medium text-slate-600">{t('items')}</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-900">1,247</p>
                      </div>

                      <div className="bg-white border rounded-lg shadow-sm p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm font-medium text-slate-600">{t('damaged')}</span>
                        </div>
                        <p className="text-2xl font-bold text-orange-600">18</p>
                      </div>

                      <div className="bg-white border rounded-lg shadow-sm p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          <span className="text-sm font-medium text-slate-600">{t('ordersWithIssues')}</span>
                        </div>
                        <p className="text-2xl font-bold text-red-600">5</p>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step7B')}</h6>
                <Screenshot title={t('byProductScreenshotTitle')}>
                  <div className="bg-white border rounded-lg shadow-sm">
                    <div className="p-4 border-b">
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                            {t('recentlyReceivedProducts', { count: 89 })}
                          </h3>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="relative flex-grow">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <Input placeholder={t('searchPOVendorProduct')} className="pl-9" />
                          </div>

                          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                            <option>{t('last7Days')}</option>
                            <option>{t('last24Hours')}</option>
                            <option>{t('last30Days')}</option>
                            <option>{t('last90Days')}</option>
                          </select>

                          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                            <option>{t('allVendors')}</option>
                            <option>{t('healthyHarvest')}</option>
                            <option>{t('goldenGrains')}</option>
                            <option>{t('freshValleyFarms')}</option>
                          </select>

                          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                            <option>{t('allReceived')}</option>
                            <option>{t('fullyReceived')}</option>
                            <option>{t('partiallyReceived')}</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      <div className="border rounded-lg shadow-sm hover:shadow-md transition-all bg-white p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <code className="text-xs bg-slate-100 px-2 py-1 rounded mb-2 inline-block">PO-2024-0521-001</code>
                            <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-1">
                              {t('freshSpinach')}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <Building2 className="w-3 h-3" />
                              <span>{t('healthyHarvest')}</span>
                            </div>
                          </div>
                          <Badge className="bg-emerald-100 text-emerald-800">{t('fullyReceived')}</Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                          <div>
                            <p className="text-xs text-slate-500">{t('orderedQty')}</p>
                            <p className="font-medium">50</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">{t('receivedQty')}</p>
                            <p className="font-medium text-emerald-600">50</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">{t('deliveryDate')}</p>
                            <p className="font-medium">May 23, 2024</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">{t('totalCost')}</p>
                            <p className="font-medium">₹3,250.00</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">
                            {t('location')}: <code className="bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs">A-3-2</code>
                          </span>
                        </div>

                        <div className="flex gap-2 pt-4 border-t border-slate-100">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="w-4 h-4 mr-2" />
                            {t('viewDetails')}
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg shadow-sm hover:shadow-md transition-all bg-white p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <code className="text-xs bg-slate-100 px-2 py-1 rounded mb-2 inline-block">PO-2024-0520-007</code>
                            <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-1">
                              {t('freshTomatoes')}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <Building2 className="w-3 h-3" />
                              <span>{t('freshValleyFarms')}</span>
                            </div>
                          </div>
                          <Badge className="bg-orange-100 text-orange-800">{t('partiallyReceived')}</Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                          <div>
                            <p className="text-xs text-slate-500">{t('orderedQty')}</p>
                            <p className="font-medium">100</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">{t('receivedQty')}</p>
                            <p className="font-medium text-emerald-600">85</p>
                            <p className="text-xs text-orange-600">{t('missing', { count: 15 })}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">{t('deliveryDate')}</p>
                            <p className="font-medium">May 22, 2024</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">{t('totalCost')}</p>
                            <p className="font-medium">₹4,250.00</p>
                          </div>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-medium text-red-700">{t('damagedUnits', { count: 5 })}</span>
                          </div>
                          <p className="text-xs text-red-600">{t('damageReason')}</p>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          <Badge variant="outline" className="text-orange-600">{t('notAllocated')}</Badge>
                        </div>

                        <div className="flex gap-2 pt-4 border-t border-slate-100">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="w-4 h-4 mr-2" />
                            {t('viewDetails')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step7C')}</h6>
                <Screenshot title={t('byVendorScreenshotTitle')}>
                  <div className="bg-white border rounded-lg shadow-sm">
                    <div className="p-4 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-blue-600" />
                          {t('recentlyReceivedByVendor', { count: 8 })}
                        </h3>
                      </div>

                      <div className="relative mt-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <Input placeholder={t('searchVendors')} className="pl-9" />
                      </div>
                    </div>

                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      <div className="border rounded-lg shadow-sm hover:shadow-md transition-all bg-white p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-slate-900 text-lg mb-1">{t('healthyHarvest')}</h3>
                            <p className="text-sm text-slate-500">{t('numOrdersProducts', { orders: 3, products: 12 })}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg text-emerald-600">₹89,750.00</p>
                            <p className="text-xs text-slate-500">{t('totalValue')}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                          <div className="text-center">
                            <p className="font-semibold text-slate-900">347</p>
                            <p className="text-xs text-slate-500">{t('itemsReceived')}</p>
                          </div>
                          <div className="text-center">
                            <p className="font-semibold text-slate-900">12</p>
                            <p className="text-xs text-slate-500">{t('productLines')}</p>
                          </div>
                          <div className="text-center">
                            <p className="font-semibold text-slate-900">0</p>
                            <p className="text-xs text-slate-500">{t('damaged')}</p>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <p className="text-sm font-medium text-slate-700">{t('recentOrders')}:</p>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-600">{t('freshSpinach')} (50 {t('units', { count: '' }).trim()})</span>
                            <span className="text-slate-500">May 23</span>
                          </div>
                          <p className="text-xs text-slate-500">{t('moreProducts', { count: 9 })}</p>
                        </div>

                        <div className="flex gap-2 pt-4 border-t border-slate-100">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Building2 className="w-4 h-4 mr-2" />
                            {t('viewVendor')}
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg shadow-sm hover:shadow-md transition-all bg-white p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-slate-900 text-lg mb-1">{t('freshValleyFarms')}</h3>
                            <p className="text-sm text-slate-500">{t('numOrdersProducts', { orders: 2, products: 8 })}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg text-emerald-600">₹65,200.00</p>
                            <p className="text-xs text-slate-500">{t('totalValue')}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                          <div className="text-center">
                            <p className="font-semibold text-slate-900">245</p>
                            <p className="text-xs text-slate-500">{t('itemsReceived')}</p>
                          </div>
                          <div className="text-center">
                            <p className="font-semibold text-slate-900">8</p>
                            <p className="text-xs text-slate-500">{t('productLines')}</p>
                          </div>
                          <div className="text-center">
                            <p className="font-semibold text-red-600">12</p>
                            <p className="text-xs text-slate-500">{t('damaged')}</p>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <p className="text-sm font-medium text-slate-700">{t('recentOrders')}:</p>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-600">{t('freshTomatoes')} (100 {t('units', { count: '' }).trim()})</span>
                            <span className="text-slate-500">May 22</span>
                          </div>
                          <p className="text-xs text-slate-500">{t('moreProducts', { count: 5 })}</p>
                        </div>

                        <div className="flex gap-2 pt-4 border-t border-slate-100">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Building2 className="w-4 h-4 mr-2" />
                            {t('viewVendor')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="8" title={t('step8Title')}>
                <p>{t('step8Intro')}</p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step8A')}</h6>
                <Screenshot title={t('createPOScreenshotTitle')}>
                  <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-0 items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">{t('poPageTitle')}</h2>
                      <p className="text-slate-600">{t('trackOrders')}</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg">
                      <Plus className="w-4 h-4 mr-2" />
                      {t('createPO')}
                    </Button>
                  </div>
                </Screenshot>

                <p className="mt-4">
                  {t('createPONote')}
                </p>
              </Step>

            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
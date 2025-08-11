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
    pageTitle: "కొనుగోలు ఆర్డర్ల మాన్యువల్",
    backToManual: "మాన్యువల్‌కు తిరిగి వెళ్ళు",
    description: "సృష్టి నుండి స్వీకరణ వరకు కొనుగోలు ఆర్డర్‌లను నిర్వహించడానికి సమగ్ర గైడ్, ఇందులో విక్రేత చర్చలు, ఆటో-కేటాయింపు, కొనుగోలు బుట్టలు మరియు సేకరణ జీవితచక్రం అంతటా వివరణాత్మక ట్రాకింగ్ ఉన్నాయి.",
    step1Title: "కొనుగోలు ఆర్డర్ డాష్‌బోర్డ్ అవలోకనం",
    step1Intro: "కొనుగోలు ఆర్డర్ డాష్‌బోర్డ్ మీ అన్ని సేకరణ కార్యకలాపాలకు మీ కమాండ్ సెంటర్. ఇది నిజ-సమయ గణాంకాలు, వర్క్‌ఫ్లో నిర్వహణ మరియు ఆర్డర్‌ల ప్లేస్‌మెంట్ నుండి స్వీకరణ వరకు సమగ్ర ట్రాకింగ్‌ను అందిస్తుంది.",
    poPageTitle: "కొనుగోలు ఆర్డర్లు",
    trackOrders: "విక్రేతల నుండి ఆర్డర్‌లను ట్రాక్ చేయండి మరియు ఇన్‌కమింగ్ స్టాక్‌ను నిర్వహించండి.",
    createPO: "కొనుగోలు ఆర్డర్ సృష్టించు",
    totalPOs: "మొత్తం పీఓలు",
    pending: "పెండింగ్‌లో ఉంది",
    inTransit: "రవాణాలో ఉంది",
    totalValue: "మొత్తం విలువ",
    recentPOs: "ఇటీవలి కొనుగోలు ఆర్డర్లు",
    list: "జాబితా",
    cards: "కార్డులు",
    poId: "పీఓ ఐడి",
    product: "ఉత్పత్తి",
    vendor: "విక్రేత",
    orderDate: "ఆర్డర్ తేదీ",
    totalCost: "మొత్తం ఖర్చు",
    status: "స్థితి",
    actions: "చర్యలు",
    freshSpinach: "తాజా పాలకూర",
    units: "{count} యూనిట్లు",
    healthyHarvest: "ఆరోగ్యకరమైన పంట",
    shipped: "రవాణా చేయబడింది",
    basmatiRice: "సేంద్రీయ బాస్మతి బియ్యం",
    goldenGrains: "గోల్డెన్ గ్రెయిన్స్",
    receivedFull: "పూర్తిగా స్వీకరించబడింది",
    viewDetails: "వివరాలను వీక్షించండి",
    negotiatePO: "కొనుగోలు ఆర్డర్‌ను చర్చించండి: పీఓ-2024-0521-002",
    vendorKey: "విక్రేత",
    cancel: "రద్దు చేయి",
    acceptChanges: "విక్రేత మార్పులను అంగీకరించండి",
    submitCounter: "ప్రతి-ఆఫర్‌ను సమర్పించండి",
    purchaseBasketTitle: "కొనుగోలు బుట్ట ({count} వస్తువులు)",
    urgent: "అత్యవసరం",
    high: "అధిక",
    medium: "మధ్యస్థ",
    low: "తక్కువ",
    addItem: "వస్తువును జోడించు",
    createPOs: "పీఓలను సృష్టించు ({count})",
    searchProducts: "ఉత్పత్తులను శోధించు...",
    itemsSelected: "{count} వస్తువులు ఎంచుకోబడ్డాయి • అంచనా. విలువ: ₹{value}",
    clearSelection: "ఎంపికను క్లియర్ చేయండి",
    currentStock: "ప్రస్తుత స్టాక్",
    desiredQty: "కోరిన పరిమాణం",
    unitPrice: "యూనిట్ ధర",
    priority: "ప్రాధాన్యత",
    reason: "కారణం",
    suggestedVendor: "సూచించబడిన విక్రేత",
    estTotal: "అంచనా. మొత్తం",
    targetDate: "లక్ష్య తేదీ",
    addedBy: "జోడించిన వారు",
    freshMilk: "తాజా పాలు 1L",
    min: "కనిష్టం: {count}",
    clickToEdit: "సవరించడానికి క్లిక్ చేయండి",
    lowStock: "తక్కువ స్టాక్",
    selectVendor: "విక్రేతను ఎంచుకోండి",
    dairyFresh: "డెయిరీ ఫ్రెష్ కో.",
    pureMilk: "ప్యూర్ మిల్క్ లి.",
    quantity: "పరిమాణం",
    lowInStock: "తక్కువ",
    add_to_basket: "బుట్టకు జోడించు",
    numSelected: "{count} ఉత్పత్తులు ఎంచుకోబడ్డాయి",
    receive: "స్వీకరించు",
    receivePurchaseOrder: "కొనుగోలు ఆర్డర్‌ను స్వీకరించండి: పీఓ-2024-0521-001",
    ordered: "ఆర్డర్ చేయబడింది",
    receivedQty: "స్వీకరించిన పరిమాణం",
    damagedQty: "దెబ్బతిన్న పరిమాణం",
    confirmReceiveGoods: "వస్తువులను నిర్ధారించి స్వీకరించండి",
    goodsReceivedSuccess: "వస్తువులు విజయవంతంగా స్వీకరించబడ్డాయి!",
    backToDashboard: "డాష్‌బోర్డ్‌కు తిరిగి వెళ్ళు",
    autoAllocate: "స్వయంచాలకంగా కేటాయించు {count}",
    selectAll: "అన్నీ ఎంచుకోండి ({count} ఉత్పత్తులు)",
    successfullyAllocated: "విజయవంతంగా కేటాయించబడింది",
    capacityExceeded: "సామర్థ్యం మించిపోయింది",
    manualAllocRequired: "మాన్యువల్ కేటాయింపు అవసరం",
    closeLogs: "లాగ్‌లను మూసివేయండి",
    orders: "ఆర్డర్లు",
    items: "వస్తువులు",
    damaged: "దెబ్బతిన్నది",
    ordersWithIssues: "సమస్యలతో కూడిన ఆర్డర్లు",
    orderedQty: "ఆర్డర్ చేసిన పరిమాణం",
    deliveryDate: "డెలివరీ తేదీ",
    missing: "తప్పిపోయినవి: {count}",
    damagedUnits: "దెబ్బతిన్నవి: {count} యూనిట్లు",
    damageReason: "రవాణా సమయంలో ప్యాకేజింగ్ దెబ్బతిన్నది",
    notAllocated: "కేటాయించబడలేదు",
    productLines: "ఉత్పత్తి శ్రేణులు",
    recentOrders: "ఇటీవలి ఆర్డర్లు:",
    moreProducts: "+{count} మరిన్ని ఉత్పత్తులు",
    viewVendor: "విక్రేతను వీక్షించండి",
  },
  ta: {
    pageTitle: "கொள்முதல் ஆணைகள் கையேடு",
    backToManual: "கையேடுக்குத் திரும்பு",
    description: "உருவாக்குவதிலிருந்து பெறுவது வரை கொள்முதல் ஆணைகளை நிர்வகிப்பதற்கான விரிவான வழிகாட்டி, இதில் விற்பனையாளர் பேச்சுவார்த்தைகள், தானியங்கி ஒதுக்கீடு, கொள்முதல் கூடைகள் மற்றும் கொள்முதல் வாழ்க்கைச் சுழற்சி முழுவதும் விரிவான கண்காணிப்பு ஆகியவை அடங்கும்.",
    poPageTitle: "கொள்முதல் ஆணைகள்",
    trackOrders: "விற்பனையாளர்களிடமிருந்து ஆர்டர்களைக் கண்காணித்து உள்வரும் பங்குகளை நிர்வகிக்கவும்.",
    createPO: "கொள்முதல் ஆணையை உருவாக்கவும்",
    totalPOs: "மொத்த பிஓக்கள்",
    pending: "நிலுவையில் உள்ளது",
    inTransit: "பயணத்தில் உள்ளது",
    totalValue: "மொத்த மதிப்பு",
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
    viewDetails: "விவரங்களைக் காண்க",
    negotiatePO: "கொள்முதல் ஆணையை பேச்சுவார்த்தை நடத்துங்கள்: பிஓ-2024-0521-002",
    vendorKey: "விற்பனையாளர்",
    cancel: "ரத்துசெய்",
    acceptChanges: "விற்பனையாளரின் மாற்றங்களை ஏற்கவும்",
    submitCounter: "எதிர்-சலுகையைச் சமர்ப்பிக்கவும்",
    purchaseBasketTitle: "கொள்முதல் கூடை ({count} பொருட்கள்)",
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
    quantity: "அளவு",
    lowInStock: "குறைவு",
    add_to_basket: "கூடைக்குச் சேர்",
    numSelected: "{count} தயாரிப்புகள் தேர்ந்தெடுக்கப்பட்டன",
    receive: "பெறு",
    receivePurchaseOrder: "கொள்முதல் ஆணையைப் பெறுங்கள்: பிஓ-2024-0521-001",
    ordered: "ஆர்டர் செய்யப்பட்டது",
    receivedQty: "பெறப்பட்ட அளவு",
    damagedQty: "சேதமடைந்த அளவு",
    confirmReceiveGoods: "பொருட்களை உறுதிசெய்து பெறவும்",
    goodsReceivedSuccess: "பொருட்கள் வெற்றிகரமாகப் பெறப்பட்டன!",
    backToDashboard: "டாஷ்போர்டுக்குத் திரும்பு",
    autoAllocate: "தானாக ஒதுக்கு {count}",
    selectAll: "அனைத்தையும் தேர்ந்தெடு ({count} தயாரிப்புகள்)",
    successfullyAllocated: "வெற்றிகரமாக ஒதுக்கப்பட்டது",
    capacityExceeded: "கொள்ளளவு மீறியது",
    manualAllocRequired: "கையேடு ஒதுக்கீடு தேவை",
    closeLogs: "பதிவுகளை மூடு",
    orders: "ஆணைகள்",
    items: "பொருட்கள்",
    damaged: "சேதமடைந்தது",
    ordersWithIssues: "சிக்கல்களுடன் ஆணைகள்",
    orderedQty: "ஆர்டர் செய்யப்பட்ட அளவு",
    deliveryDate: "டெலிவரி தேதி",
    missing: "காணவில்லை: {count}",
    damagedUnits: "சேதமடைந்த: {count} அலகுகள்",
    damageReason: "போக்குவரத்தின் போது பேக்கேஜிங் சேதம்",
    notAllocated: "ஒதுக்கப்படவில்லை",
    productLines: "தயாரிப்பு கோடுகள்",
    recentOrders: "சமீபத்திய ஆணைகள்:",
    moreProducts: "+{count} மேலும் தயாரிப்புகள்",
    viewVendor: "விற்பனையாளரைக் காண்க",
  },
  hi: {
    pageTitle: "क्रय आदेश मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "निर्माण से लेकर प्राप्ति तक खरीद आदेशों के प्रबंधन के लिए व्यापक गाइड, जिसमें विक्रेता वार्ता, ऑटो-आवंटन, खरीद टोकरी और खरीद जीवनचक्र में विस्तृत ट्रैकिंग शामिल है।",
    poPageTitle: "क्रय आदेश",
    trackOrders: "विक्रेताओं से ऑर्डर ट्रैक करें और आने वाले स्टॉक का प्रबंधन करें।",
    createPO: "क्रय आदेश बनाएँ",
    totalPOs: "कुल पीओ",
    pending: "लंबित",
    inTransit: "पारगमन में",
    totalValue: "कुल मूल्य",
    recentPOs: "हाल के क्रय आदेश",
    list: "सूची",
    cards: "कार्ड",
    poId: "पीओ आईडी",
    product: "उत्पाद",
    vendor: "विक्रेता",
    orderDate: "आदेश तिथि",
    totalCost: "कुल लागत",
    status: "स्थिति",
    actions: "कार्रवाइयाँ",
    freshSpinach: "ताजा पालक",
    units: "{count} इकाइयाँ",
    healthyHarvest: "स्वस्थ फसल",
    shipped: "भेज दिया गया",
    basmatiRice: "ऑर्गेनिक बासमती चावल",
    goldenGrains: "गोल्डन ग्रेन्स",
    receivedFull: "पूरी तरह से प्राप्त",
    viewDetails: "विवरण देखें",
    negotiatePO: "क्रय आदेश पर बातचीत करें: पीओ-2024-0521-002",
    vendorKey: "विक्रेता",
    cancel: "रद्द करें",
    acceptChanges: "विक्रेता के परिवर्तन स्वीकार करें",
    submitCounter: "काउंटर-ऑफ़र सबमिट करें",
    purchaseBasketTitle: "खरीद टोकरी ({count} आइटम)",
    urgent: "अत्यावश्यक",
    high: "उच्च",
    medium: "मध्यम",
    low: "कम",
    addItem: "आइटम जोड़ें",
    createPOs: "पीओ बनाएँ ({count})",
    searchProducts: "उत्पाद खोजें...",
    itemsSelected: "{count} आइटम चयनित • अनुमानित। मूल्य: ₹{value}",
    clearSelection: "चयन साफ़ करें",
    currentStock: "वर्तमान स्टॉक",
    desiredQty: "वांछित मात्रा",
    unitPrice: "इकाई मूल्य",
    priority: "प्राथमिकता",
    reason: "कारण",
    suggestedVendor: "सुझाया गया विक्रेता",
    estTotal: "अनुमानित। कुल",
    targetDate: "लक्ष्य तिथि",
    addedBy: "द्वारा जोड़ा गया",
    freshMilk: "ताजा दूध 1L",
    min: "न्यूनतम: {count}",
    clickToEdit: "संपादित करने के लिए क्लिक करें",
    lowStock: "कम स्टॉक",
    selectVendor: "विक्रेता चुनें",
    dairyFresh: "डेयरी फ्रेश कंपनी",
    pureMilk: "प्योर मिल्क लिमिटेड",
    quantity: "मात्रा",
    lowInStock: "कम",
    add_to_basket: "टोकरी में डालें",
    numSelected: "{count} उत्पाद चयनित",
    receive: "प्राप्त करें",
    receivePurchaseOrder: "क्रय आदेश प्राप्त करें: पीओ-2024-0521-001",
    ordered: "आदेश दिया गया",
    receivedQty: "प्राप्त मात्रा",
    damagedQty: "क्षतिग्रस्त मात्रा",
    confirmReceiveGoods: "माल की पुष्टि करें और प्राप्त करें",
    goodsReceivedSuccess: "माल सफलतापूर्वक प्राप्त हुआ!",
    backToDashboard: "डैशबोर्ड पर वापस जाएं",
    autoAllocate: "स्वतः आवंटित करें {count}",
    selectAll: "सभी का चयन करें ({count} उत्पाद)",
    successfullyAllocated: "सफलतापूर्वक आवंटित",
    capacityExceeded: "क्षमता से अधिक",
    manualAllocRequired: "मैनुअल आवंटन आवश्यक",
    closeLogs: "लॉग बंद करें",
    orders: "आदेश",
    items: "आइटम",
    damaged: "क्षतिग्रस्त",
    ordersWithIssues: "समस्याओं वाले आदेश",
    orderedQty: "आदेशित मात्रा",
    deliveryDate: "वितरण तिथि",
    missing: "लापता: {count}",
    damagedUnits: "क्षतिग्रस्त: {count} इकाइयाँ",
    damageReason: "परिवहन के दौरान पैकेजिंग क्षति",
    notAllocated: "आवंटित नहीं",
    productLines: "उत्पाद लाइनें",
    recentOrders: "हाल के आदेश:",
    moreProducts: "+{count} और उत्पाद",
    viewVendor: "विक्रेता देखें",
  },
  ml: {
    pageTitle: "വാങ്ങൽ ഓർഡറുകളുടെ മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് മടങ്ങുക",
    description: "രൂപീകരണം മുതൽ രസീത് വരെ വാങ്ങൽ ഓർഡറുകൾ കൈകാര്യം ചെയ്യുന്നതിനുള്ള സമഗ്രമായ ഗൈഡ്, വെണ്ടർ ചർച്ചകൾ, ഓട്ടോ-അലോക്കേഷൻ, വാങ്ങൽ കൊട്ടകൾ, സംഭരണ ​​ജീവിതചക്രത്തിലുടനീളം വിശദമായ ട്രാക്കിംഗ് എന്നിവ ഉൾപ്പെടുന്നു.",
    poPageTitle: "വാങ്ങൽ ഓർഡറുകൾ",
    trackOrders: "വെണ്ടർമാരിൽ നിന്നുള്ള ഓർഡറുകൾ ട്രാക്ക് ചെയ്യുകയും ഇൻകമിംഗ് സ്റ്റോക്ക് നിയന്ത്രിക്കുകയും ചെയ്യുക.",
    createPO: "വാങ്ങൽ ഓർഡർ സൃഷ്ടിക്കുക",
    totalPOs: "ആകെ പിഒകൾ",
    pending: "തീരുമാനമായിട്ടില്ല",
    inTransit: "യാത്രയിൽ",
    totalValue: "ആകെ മൂല്യം",
    recentPOs: "അടുത്തകാലത്തെ വാങ്ങൽ ഓർഡറുകൾ",
    list: "പട്ടിക",
    cards: "കാർഡുകൾ",
    poId: "പിഒ ഐഡി",
    product: "ഉൽപ്പന്നം",
    vendor: "വെണ്ടർ",
    orderDate: "ഓർഡർ തീയതി",
    totalCost: "ആകെ ചെലവ്",
    status: "നില",
    actions: "പ്രവർത്തനങ്ങൾ",
    freshSpinach: "ഫ്രഷ് ചീര",
    units: "{count} യൂണിറ്റുകൾ",
    healthyHarvest: "ആരോഗ്യകരമായ വിളവെടുപ്പ്",
    shipped: "കയറ്റി അയച്ചു",
    basmatiRice: "ഓർഗാനിക് ബസുമതി അരി",
    goldenGrains: "ഗോൾഡൻ ഗ്രെയിൻസ്",
    receivedFull: "പൂർണ്ണമായി ലഭിച്ചു",
    viewDetails: "വിശദാംശങ്ങൾ കാണുക",
    negotiatePO: "വാങ്ങൽ ഓർഡർ ചർച്ച ചെയ്യുക: പിഒ-2024-0521-002",
    vendorKey: "വെണ്ടർ",
    cancel: "റദ്ദാക്കുക",
    acceptChanges: "വെണ്ടറുടെ മാറ്റങ്ങൾ അംഗീകരിക്കുക",
    submitCounter: "കൗണ്ടർ-ഓഫർ സമർപ്പിക്കുക",
    purchaseBasketTitle: "വാങ്ങൽ കൊട്ട ({count} ഇനങ്ങൾ)",
    urgent: "അടിയന്തിരം",
    high: "ഉയർന്നത്",
    medium: "ഇടത്തരം",
    low: "കുറഞ്ഞത്",
    addItem: "ഇനം ചേർക്കുക",
    createPOs: "പിഒകൾ സൃഷ്ടിക്കുക ({count})",
    searchProducts: "ഉൽപ്പന്നങ്ങൾ തിരയുക...",
    itemsSelected: "{count} ഇനങ്ങൾ തിരഞ്ഞെടുത്തു • കണക്കാക്കിയ. മൂല്യം: ₹{value}",
    clearSelection: "തിരഞ്ഞെടുപ്പ് മായ്‌ക്കുക",
    currentStock: "നിലവിലെ സ്റ്റോക്ക്",
    desiredQty: "ആവശ്യമുള്ള അളവ്",
    unitPrice: "യൂണിറ്റ് വില",
    priority: "മുൻഗണന",
    reason: "കാരണം",
    suggestedVendor: "നിർദ്ദേശിച്ച വെണ്ടർ",
    estTotal: "കണക്കാക്കിയ. ആകെ",
    targetDate: "ലക്ഷ്യ തീയതി",
    addedBy: "ചേർത്തത്",
    freshMilk: "ഫ്രഷ് പാൽ 1L",
    min: "കുറഞ്ഞത്: {count}",
    clickToEdit: "എഡിറ്റുചെയ്യാൻ ക്ലിക്കുചെയ്യുക",
    lowStock: "കുറഞ്ഞ സ്റ്റോക്ക്",
    selectVendor: "വെണ്ടറെ തിരഞ്ഞെടുക്കുക",
    dairyFresh: "ഡയറി ഫ്രഷ് കോ.",
    pureMilk: "പ്യൂർ മിൽക്ക് ലിമിറ്റഡ്.",
    quantity: "അളവ്",
    lowInStock: "കുറഞ്ഞത്",
    add_to_basket: "കൊട്ടയിലേക്ക് ചേർക്കുക",
    numSelected: "{count} ഉൽപ്പന്നങ്ങൾ തിരഞ്ഞെടുത്തു",
    receive: "സ്വീകരിക്കുക",
    receivePurchaseOrder: "വാങ്ങൽ ഓർഡർ സ്വീകരിക്കുക: പിഒ-2024-0521-001",
    ordered: "ഓർഡർ ചെയ്തു",
    receivedQty: "ലഭിച്ച അളവ്",
    damagedQty: "കേടായ അളവ്",
    confirmReceiveGoods: "സാധനങ്ങൾ സ്ഥിരീകരിച്ച് സ്വീകരിക്കുക",
    goodsReceivedSuccess: "സാധനങ്ങൾ വിജയകരമായി ലഭിച്ചു!",
    backToDashboard: "ഡാഷ്‌ബോർഡിലേക്ക് മടങ്ങുക",
    autoAllocate: "യാന്ത്രികമായി അനുവദിക്കുക {count}",
    selectAll: "എല്ലാം തിരഞ്ഞെടുക്കുക ({count} ഉൽപ്പന്നങ്ങൾ)",
    successfullyAllocated: "വിജയകരമായി അനുവദിച്ചു",
    capacityExceeded: "ശേഷി കവിഞ്ഞു",
    manualAllocRequired: "മാനുവൽ അലോക്കേഷൻ ആവശ്യമാണ്",
    closeLogs: "ലോഗുകൾ അടയ്ക്കുക",
    orders: "ഓർഡറുകൾ",
    items: "ഇനങ്ങൾ",
    damaged: "കേടായി",
    ordersWithIssues: "പ്രശ്നങ്ങളുള്ള ഓർഡറുകൾ",
    orderedQty: "ഓർഡർ ചെയ്ത അളവ്",
    deliveryDate: "ഡെലിവറി തീയതി",
    missing: "കാണാതായവ: {count}",
    damagedUnits: "കേടായവ: {count} യൂണിറ്റുകൾ",
    damageReason: "ഗതാഗത സമയത്ത് പാക്കേജിംഗ് കേടുപാട്",
    notAllocated: "അനുവദിച്ചിട്ടില്ല",
    productLines: "ഉൽപ്പന്ന നിരകൾ",
    recentOrders: "അടുത്തകാലത്തെ ഓർഡറുകൾ:",
    moreProducts: "+{count} കൂടുതൽ ഉൽപ്പന്നങ്ങൾ",
    viewVendor: "വെണ്ടറെ കാണുക",
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
                              <p className="text-xs text-slate-500">{t('units', {count: 50})}</p>
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
                              <p className="text-xs text-slate-500">{t('units', {count: 25})}</p>
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
                          <p className="text-sm text-slate-500">{t('units', {count: 50})}</p>
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
                          <p className="text-sm text-slate-500">{t('units', {count: 25})}</p>
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
                                <Badge className="bg-orange-100 text-orange-800">{t('units', {count: 3})}</Badge>
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
                                    <div>{t('units', {count: 100})}</div>
                                    <div className="text-xs text-slate-500">@ ₹45.00</div>
                                  </td>
                                  <td className="py-2 px-3">
                                    <div>{t('units', {count: 80})}</div>
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
                            {t('purchaseBasketTitle', {count: 47})}
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
                              {t('createPOs', {count: 12})}
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
                                {t('itemsSelected', {count: 12, value: '89,450.00'})}
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
                              <p className="text-xs text-slate-500">{t('min', {count: 25})}</p>
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
                        <span className="font-medium">{t('numSelected', {count: 3})}</span> • {t('estTotalValue')}: ₹12,450.00
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
                            {t('ordersReadyToReceive', {count: 28})}
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
                          <FileText className="w-5 h-5 text-slate-600"/>
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
                          <Scan className="w-5 h-5 text-slate-600"/>
                          {t('scanBarcode')}
                        </h4>
                        <Input placeholder={t('scanBarcodePlaceholder')} className="text-lg p-4 pl-10"/>
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
                                    <Input className="w-20 mx-auto text-center" defaultValue="50"/>
                                </td>
                                <td className="p-3 bg-red-50">
                                    <div className="flex items-center justify-center gap-2">
                                        <Input className="w-20 mx-auto text-center" defaultValue="0"/>
                                        <Button variant="outline" size="icon" className="w-8 h-8">
                                            <Camera className="w-4 h-4"/>
                                        </Button>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <Input className="w-24 mx-auto text-center" defaultValue="65.00"/>
                                </td>
                                <td className="p-3">
                                    <div className="flex flex-col gap-2">
                                        <Input type="date" className="text-xs p-1 h-8"/>
                                        <Input type="date" className="text-xs p-1 h-8"/>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <Input placeholder={t('addNotes')} className="text-xs"/>
                                </td>
                            </tr>
                            <tr className="border-b bg-orange-50">
                                <td className="p-3">
                                    <p className="font-medium">{t('freshTomatoes')}</p>
                                    <p className="text-xs text-slate-500">SKU: VEG-TMT-03</p>
                                </td>
                                <td className="p-3 text-center font-medium">100</td>
                                <td className="p-3 bg-green-50">
                                    <Input className="w-20 mx-auto text-center" defaultValue="80"/>
                                </td>
                                <td className="p-3 bg-red-50">
                                    <div className="flex items-center justify-center gap-2">
                                        <Input className="w-20 mx-auto text-center" defaultValue="5"/>
                                        <Button variant="outline" size="icon" className="w-8 h-8">
                                            <Camera className="w-4 h-4"/>
                                        </Button>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <Input className="w-24 mx-auto text-center" defaultValue="42.50"/>
                                </td>
                                <td className="p-3">
                                    <div className="flex flex-col gap-2">
                                        <Input type="date" className="text-xs p-1 h-8"/>
                                        <Input type="date" className="text-xs p-1 h-8"/>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <Input placeholder={t('brokenBox')} className="text-xs border-red-300"/>
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
                              {t('autoAllocate', {count: 15})}
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
                                {t('numProducts', {count: 47})}
                              </Badge>
                              <Badge className="bg-blue-100 text-blue-800">{t('numSelectedCards', {count: 15})}</Badge>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-sm text-slate-600">
                              {t('selectAll', {count: 47})}
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
                              <span className="text-xs text-emerald-600">{t('numReceived', {count: 45})}</span>
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
                              <span className="text-xs text-emerald-600">{t('numReceived', {count: 25})}</span>
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
                            {t('recentlyReceivedProducts', {count: 89})}
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
                            <p className="text-xs text-orange-600">{t('missing', {count: 15})}</p>
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
                            <span className="text-sm font-medium text-red-700">{t('damagedUnits', {count: 5})}</span>
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
                          {t('recentlyReceivedByVendor', {count: 8})}
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
                            <p className="text-sm text-slate-500">{t('numOrdersProducts', {orders: 3, products: 12})}</p>
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
                            <span className="text-slate-600">{t('freshSpinach')} (50 {t('units', {count: ''}).trim()})</span>
                            <span className="text-slate-500">May 23</span>
                          </div>
                          <p className="text-xs text-slate-500">{t('moreProducts', {count: 9})}</p>
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
                            <p className="text-sm text-slate-500">{t('numOrdersProducts', {orders: 2, products: 8})}</p>
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
                            <span className="text-slate-600">{t('freshTomatoes')} (100 {t('units', {count: ''}).trim()})</span>
                            <span className="text-slate-500">May 22</span>
                          </div>
                          <p className="text-xs text-slate-500">{t('moreProducts', {count: 5})}</p>
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
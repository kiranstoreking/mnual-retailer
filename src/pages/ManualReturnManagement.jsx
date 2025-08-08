import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, RotateCcw, AlertTriangle, Package, Building2, FileText,
  Plus, Search, Filter, List, Grid, Eye, CheckCircle, Clock,
  DollarSign, Calendar, ArrowUpDown, Truck, XCircle
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
    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
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
    pageTitle: "Return Management Manual",
    backToManual: "Back to Manual",
    description: "Master the complete return management process including handling damaged goods, processing product returns to vendors, managing vendor returns, and tracking debit notes with comprehensive audit trails.",
    step1Title: "Return Management Dashboard Overview",
    step1Intro: "The Return Management Dashboard is your central command center for handling all types of returns in your retail operation. It provides comprehensive tracking and management of product returns to vendors, vendor returns for inventory optimization, and complete financial reconciliation through debit notes.",
    step2Title: "Damaged Goods Tab - Identifying Return Opportunities",
    step2Intro: "This tab identifies damaged goods from purchase orders that haven't been returned yet, essentially creating a 'to-do' list for processing returns. It's your starting point for converting damaged inventory into vendor returns.",
    step3Title: "Active Returns Tab - Managing All Return Types",
    step3Intro: "The Active Returns tab consolidates both Product Returns (damaged goods) and Vendor Returns (inventory optimization) into a single, manageable view. This is where you monitor progress and take action on all ongoing returns.",
    step4Title: "Debit Notes Tab - Financial Reconciliation",
    step4Intro: "The Debit Notes tab tracks all financial documents generated from returns. These are critical for accounting purposes and vendor reconciliation, ensuring proper documentation of credits owed by vendors.",
    step5Title: "Creating Returns - Workflow Management",
    step5Intro: "The Return Management system supports two primary workflows: Product Returns (for damaged/defective items) and Vendor Returns (for inventory optimization). Each has its own creation process and approval workflow.",
    step6Title: "Return Status Workflow & Processing",
    step6Intro: "Returns follow a structured workflow from creation to completion. Understanding these statuses helps you manage the process efficiently and communicate effectively with vendors.",
    step7Title: "Integration with Purchase Orders & Inventory",
    step7Intro: "Return Management is tightly integrated with your Purchase Order and Inventory systems, ensuring data consistency and complete traceability from initial receipt through return completion.",
    
    // Screenshot specific keys
    dashboardScreenshotTitle: "Return Management Dashboard - Main View",
    returnManagement: "Return Management",
    manageAllReturns: "Manage all product and vendor returns, track statuses, and handle debit notes.",
    createProductReturn: "Create Product Return",
    createVendorReturn: "Create Vendor Return",
    productReturns: "Product Returns",
    vendorReturns: "Vendor Returns",
    pending: "Pending",
    totalValue: "Total Value",
    completed: "Completed",
    debitNotes: "Debit Notes",
    statsDescProduct: "Returns of damaged/defective items to vendors",
    statsDescVendor: "Inventory optimization returns (slow-moving, near-expiry)",
    statsDescPending: "Returns awaiting approval or processing",
    statsDescValue: "Financial impact of all returns",
    statsDescCompleted: "Successfully processed returns",
    statsDescDebit: "Financial documents generated for vendor reconciliation",

    damagedGoodsScreenshotTitle: "Damaged Goods Tab - Items Awaiting Return",
    damagedGoodsAwaiting: "Damaged Goods Awaiting Return ({count})",
    list: "List",
    grid: "Grid",
    poReference: "PO-2024-0521-001",
    organicApples: "Organic Apples - Premium",
    waterDamage: "Water damage during transport",
    units: "{count} units",
    vendor: "Vendor",
    freshFarmSupplies: "Fresh Farm Supplies",
    receivedDate: "Received Date",
    may20: "May 20, 2024",
    unitCost: "Unit Cost",
    initiateReturn: "Initiate Return",
    dairyMilk: "Dairy Milk - 1L Cartons",
    packagingDefect: "Packaging defect, leakage",
    sunriseDairy: "Sunrise Dairy Co.",
    may18: "May 18, 2024",

    activeReturnsScreenshotTitle: "Active Returns Tab - Unified Return Management",
    allReturns: "All Returns ({count})",
    searchReturns: "Search by return ID, vendor, or product...",
    allVendors: "All Vendors",
    allStatuses: "All Statuses",
    pendingApproval: "Pending Approval",
    approved: "Approved",
    readyForPickup: "Ready for Pickup",
    returnId: "Return ID",
    returnType: "Return Type",
    product: "Product",
    quantity: "Quantity",
    reason: "Reason",
    status: "Status",
    actions: "Actions",
    retId1: "RET-2024-001",
    productReturnType: "Product Return",
    sku: "SKU",
    damaged: "damaged",
    approve: "Approve",
    vrId1: "VR-2024-008",
    vendorReturnType: "Vendor Return",
    seasonalDecorations: "Seasonal Decorations",
    holidaySupplies: "Holiday Supplies Inc",
    nonMoving: "non moving",
    markPickedUp: "Mark Picked Up",

    debitNotesScreenshotTitle: "Debit Notes Tab - Financial Documentation",
    returnDebitNotes: "Return-Related Debit Notes",
    dnId1: "DN-2024-0015",
    dnDesc1: "Debit note for damaged organic apples - water damage during transport",
    dnId2: "DN-2024-0014",
    dnDesc2: "Vendor return - seasonal items non-moving inventory optimization",

    createProductReturnScreenshotTitle: "Create Product Return Form",
    createProductReturnFormTitle: "Create Product Return",
    createProductReturnFormDesc: "Return damaged or defective products to vendors",
    purchaseOrder: "Purchase Order *",
    selectPO: "Select a received purchase order",
    returnQuantity: "Return Quantity *",
    returnReason: "Return Reason *",
    selectReason: "Select return reason",
    expired: "Expired",
    qualityIssue: "Quality Issue",
    wrongItem: "Wrong Item",
    defective: "Defective",
    descriptionField: "Description",
    describeIssue: "Describe the issue with the product...",
    cancel: "Cancel",
    createReturn: "Create Return",

    createVendorReturnScreenshotTitle: "Create Vendor Return Form",
    createVendorReturnFormTitle: "Create Vendor Return",
    createVendorReturnFormDesc: "Return inventory to vendors for optimization",
    selectVendor: "Select vendor",
    selectReturnType: "Select return type",
    nearExpiry: "Near Expiry",
    slowMoving: "Slow Moving",
    overstock: "Overstock",
    addProductsToReturn: "Add Products to Return",
    searchAndSelect: "Search and select products to include in this return",
    searchProducts: "Search products...",
    stock: "Stock: {count} units",
    cost: "Cost: ₹{value}",
    add: "Add",
    createVendorReturnButton: "Create Vendor Return",

    statusWorkflowScreenshotTitle: "Return Status Progression",
    productReturnWorkflow: "Product Return Workflow",
    pickedUp: "Picked Up",
    statusPending: "Pending Approval: Return request created, awaiting management approval",
    statusApproved: "Approved: Return approved, preparing items for vendor pickup",
    statusReady: "Ready for Pickup: Items ready, vendor notified for collection",
    statusPicked: "Picked Up: Vendor has collected items, awaiting final processing",
    statusCompleted: "Completed: Return processed, debit note generated, financial reconciliation complete",

    integrationScreenshotTitle: "Integration Points",
    integrationOverview: "System Integration Overview",
    poIntegration: "Purchase Orders Integration",
    poIntegrationDesc: "Product returns automatically link to original PO for complete traceability",
    inventoryUpdates: "Inventory Updates",
    inventoryUpdatesDesc: "Stock levels automatically adjust when returns are processed",
    financialReconciliation: "Financial Reconciliation",
    financialReconciliationDesc: "Debit notes automatically generated and linked to vendor accounts",
  },
  kn: {
    pageTitle: "ರಿಟರ್ನ್ ನಿರ್ವಹಣೆ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ಹಾನಿಗೊಳಗಾದ ಸರಕುಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು, ಮಾರಾಟಗಾರರಿಗೆ ಉತ್ಪನ್ನ ರಿಟರ್ನ್‌ಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವುದು, ವೆಂಡರ್ ರಿಟರ್ನ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು, ಮತ್ತು ಸಮಗ್ರ ಆಡಿಟ್ ಟ್ರೇಲ್‌ಗಳೊಂದಿಗೆ ಡೆಬಿಟ್ ನೋಟ್‌ಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದು ಸೇರಿದಂತೆ ಸಂಪೂರ್ಣ ರಿಟರ್ನ್ ನಿರ್ವಹಣಾ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ.",
    step1Title: "ರಿಟರ್ನ್ ನಿರ್ವಹಣೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ನಿಮ್ಮ ಚಿಲ್ಲರೆ ಕಾರ್ಯಾಚರಣೆಯಲ್ಲಿ ಎಲ್ಲಾ ರೀತಿಯ ರಿಟರ್ನ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಲು ರಿಟರ್ನ್ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ನಿಮ್ಮ ಕೇಂದ್ರ ಆಜ್ಞಾ ಕೇಂದ್ರವಾಗಿದೆ. ಇದು ಮಾರಾಟಗಾರರಿಗೆ ಉತ್ಪನ್ನ ರಿಟರ್ನ್‌ಗಳ ಸಮಗ್ರ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ನಿರ್ವಹಣೆ, ದಾಸ್ತಾನು ಆಪ್ಟಿಮೈಸೇಶನ್‌ಗಾಗಿ ವೆಂಡರ್ ರಿಟರ್ನ್‌ಗಳು ಮತ್ತು ಡೆಬಿಟ್ ನೋಟ್‌ಗಳ ಮೂಲಕ ಸಂಪೂರ್ಣ ಆರ್ಥಿಕ ಸಮನ್ವಯವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step2Title: "ಹಾನಿಗೊಳಗಾದ ಸರಕುಗಳ ಟ್ಯಾಬ್ - ರಿಟರ್ನ್ ಅವಕಾಶಗಳನ್ನು ಗುರುತಿಸುವುದು",
    step2Intro: "ಈ ಟ್ಯಾಬ್ ಇನ್ನೂ ಹಿಂತಿರುಗಿಸದ ಖರೀದಿ ಆದೇಶಗಳಿಂದ ಹಾನಿಗೊಳಗಾದ ಸರಕುಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ, ಇದು ರಿಟರ್ನ್‌ಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು 'ಮಾಡಬೇಕಾದ' ಪಟ್ಟಿಯನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ. ಹಾನಿಗೊಳಗಾದ ದಾಸ್ತಾನನ್ನು ಮಾರಾಟಗಾರರ ರಿಟರ್ನ್‌ಗಳಾಗಿ ಪರಿವರ್ತಿಸಲು ಇದು ನಿಮ್ಮ ಆರಂಭಿಕ ಹಂತವಾಗಿದೆ.",
    step3Title: "ಸಕ್ರಿಯ ರಿಟರ್ನ್ಸ್ ಟ್ಯಾಬ್ - ಎಲ್ಲಾ ರಿಟರ್ನ್ ಪ್ರಕಾರಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು",
    step3Intro: "ಸಕ್ರಿಯ ರಿಟರ್ನ್ಸ್ ಟ್ಯಾಬ್ ಉತ್ಪನ್ನ ರಿಟರ್ನ್‌ಗಳು (ಹಾನಿಗೊಳಗಾದ ಸರಕುಗಳು) ಮತ್ತು ವೆಂಡರ್ ರಿಟರ್ನ್‌ಗಳು (ದಾಸ್ತಾನು ಆಪ್ಟಿಮೈಸೇಶನ್) ಎರಡನ್ನೂ ಒಂದೇ, ನಿರ್ವಹಿಸಬಹುದಾದ ವೀಕ್ಷಣೆಯಲ್ಲಿ ಕ್ರೋಢೀಕರಿಸುತ್ತದೆ. ಇಲ್ಲಿ ನೀವು ಪ್ರಗತಿಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುತ್ತೀರಿ ಮತ್ತು ಎಲ್ಲಾ ನಡೆಯುತ್ತಿರುವ ರಿಟರ್ನ್‌ಗಳ ಮೇಲೆ ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳುತ್ತೀರಿ.",
    step4Title: "ಡೆಬಿಟ್ ನೋಟ್ಸ್ ಟ್ಯಾಬ್ - ಆರ್ಥಿಕ ಸಮನ್ವಯ",
    step4Intro: "ಡೆಬಿಟ್ ನೋಟ್ಸ್ ಟ್ಯಾಬ್ ರಿಟರ್ನ್‌ಗಳಿಂದ ಉತ್ಪತ್ತಿಯಾದ ಎಲ್ಲಾ ಆರ್ಥಿಕ ದಾಖಲೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ. ಇವು ಲೆಕ್ಕಪತ್ರ ಉದ್ದೇಶಗಳಿಗೆ ಮತ್ತು ಮಾರಾಟಗಾರರ ಸಮನ್ವಯಕ್ಕೆ ನಿರ್ಣಾಯಕವಾಗಿವೆ, ಮಾರಾಟಗಾರರಿಂದ ಬರಬೇಕಾದ ಕ್ರೆಡಿಟ್‌ಗಳ ಸರಿಯಾದ ದಾಖಲಾತಿಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತವೆ.",
    step5Title: "ರಿಟರ್ನ್ಸ್ ರಚಿಸುವುದು - ಕೆಲಸದ ಹರಿವು ನಿರ್ವಹಣೆ",
    step5Intro: "ರಿಟರ್ನ್ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆಯು ಎರಡು ಪ್ರಾಥಮಿಕ ಕೆಲಸದ ಹರಿವುಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ: ಉತ್ಪನ್ನ ರಿಟರ್ನ್ಸ್ (ಹಾನಿಗೊಳಗಾದ/ದೋಷಯುಕ್ತ ವಸ್ತುಗಳಿಗಾಗಿ) ಮತ್ತು ವೆಂಡರ್ ರಿಟರ್ನ್ಸ್ (ದಾಸ್ತಾನು ಆಪ್ಟಿಮೈಸೇಶನ್‌ಗಾಗಿ). ಪ್ರತಿಯೊಂದಕ್ಕೂ ತನ್ನದೇ ಆದ ರಚನೆ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಅನುಮೋದನೆ ಕೆಲಸದ ಹರಿವು ಇದೆ.",
    step6Title: "ರಿಟರ್ನ್ ಸ್ಥಿತಿ ಕೆಲಸದ ಹರಿವು ಮತ್ತು ಪ್ರಕ್ರಿಯೆ",
    step6Intro: "ರಿಟರ್ನ್‌ಗಳು ರಚನೆಯಿಂದ ಪೂರ್ಣಗೊಳ್ಳುವವರೆಗೆ ಒಂದು ರಚನಾತ್ಮಕ ಕೆಲಸದ ಹರಿವನ್ನು ಅನುಸರಿಸುತ್ತವೆ. ಈ ಸ್ಥಿತಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಪ್ರಕ್ರಿಯೆಯನ್ನು ಸಮರ್ಥವಾಗಿ ನಿರ್ವಹಿಸಲು ಮತ್ತು ಮಾರಾಟಗಾರರೊಂದಿಗೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಸಂವಹನ ನಡೆಸಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    step7Title: "ಖರೀದಿ ಆದೇಶಗಳು ಮತ್ತು ದಾಸ್ತಾನುಗಳೊಂದಿಗೆ ಏಕೀಕರಣ",
    step7Intro: "ರಿಟರ್ನ್ ನಿರ್ವಹಣೆಯು ನಿಮ್ಮ ಖರೀದಿ ಆದೇಶ ಮತ್ತು ದಾಸ್ತಾನು ವ್ಯವಸ್ಥೆಗಳೊಂದಿಗೆ ಬಿಗಿಯಾಗಿ ಸಂಯೋಜಿಸಲ್ಪಟ್ಟಿದೆ, ಆರಂಭಿಕ ಸ್ವೀಕೃತಿಯಿಂದ ಹಿಂತಿರುಗಿಸುವಿಕೆಯ ಪೂರ್ಣಗೊಳ್ಳುವವರೆಗೆ ಡೇಟಾ ಸ್ಥಿರತೆ ಮತ್ತು ಸಂಪೂರ್ಣ ಪತ್ತೆಹಚ್ಚುವಿಕೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.",

    dashboardScreenshotTitle: "ರಿಟರ್ನ್ ನಿರ್ವಹಣೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ - ಮುಖ್ಯ ನೋಟ",
    returnManagement: "ರಿಟರ್ನ್ ನಿರ್ವಹಣೆ",
    manageAllReturns: "ಎಲ್ಲಾ ಉತ್ಪನ್ನ ಮತ್ತು ಮಾರಾಟಗಾರರ ರಿಟರ್ನ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ, ಸ್ಥಿತಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ಡೆಬಿಟ್ ನೋಟ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
    createProductReturn: "ಉತ್ಪನ್ನ ರಿಟರ್ನ್ ರಚಿಸಿ",
    createVendorReturn: "ವೆಂಡರ್ ರಿಟರ್ನ್ ರಚಿಸಿ",
    productReturns: "ಉತ್ಪನ್ನ ರಿಟರ್ನ್ಸ್",
    vendorReturns: "ವೆಂಡರ್ ರಿಟರ್ನ್ಸ್",
    pending: "ಬಾಕಿ ಇದೆ",
    totalValue: "ಒಟ್ಟು ಮೌಲ್ಯ",
    completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
    debitNotes: "ಡೆಬಿಟ್ ನೋಟ್ಸ್",
    statsDescProduct: "ಮಾರಾಟಗಾರರಿಗೆ ಹಾನಿಗೊಳಗಾದ/ದೋಷಯುಕ್ತ ವಸ್ತುಗಳ ರಿಟರ್ನ್ಸ್",
    statsDescVendor: "ದಾಸ್ತಾನು ಆಪ್ಟಿಮೈಸೇಶನ್ ರಿಟರ್ನ್ಸ್ (ನಿಧಾನ ಚಲನೆ, ಅವಧಿ ಸಮೀಪ)",
    statsDescPending: "ಅನುಮೋದನೆ ಅಥವಾ ಪ್ರಕ್ರಿಯೆಗಾಗಿ ಕಾಯುತ್ತಿರುವ ರಿಟರ್ನ್ಸ್",
    statsDescValue: "ಎಲ್ಲಾ ರಿಟರ್ನ್‌ಗಳ ಆರ್ಥಿಕ ಪರಿಣಾಮ",
    statsDescCompleted: "ಯಶಸ್ವಿಯಾಗಿ ಸಂಸ್ಕರಿಸಿದ ರಿಟರ್ನ್ಸ್",
    statsDescDebit: "ಮಾರಾಟಗಾರರ ಸಮನ್ವಯಕ್ಕಾಗಿ ರಚಿಸಲಾದ ಆರ್ಥಿಕ ದಾಖಲೆಗಳು",
    
    damagedGoodsScreenshotTitle: "ಹಾನಿಗೊಳಗಾದ ಸರಕುಗಳ ಟ್ಯಾಬ್ - ರಿಟರ್ನ್‌ಗಾಗಿ ಕಾಯುತ್ತಿರುವ ವಸ್ತುಗಳು",
    damagedGoodsAwaiting: "ರಿಟರ್ನ್‌ಗಾಗಿ ಕಾಯುತ್ತಿರುವ ಹಾನಿಗೊಳಗಾದ ಸರಕುಗಳು ({count})",
    list: "ಪಟ್ಟಿ",
    grid: "ಗ್ರಿಡ್",
    poReference: "PO-2024-0521-001",
    organicApples: "ಸಾವಯವ ಸೇಬುಗಳು - ಪ್ರೀಮಿಯಂ",
    waterDamage: "ಸಾರಿಗೆ ಸಮಯದಲ್ಲಿ ನೀರಿನ ಹಾನಿ",
    units: "{count} ಘಟಕಗಳು",
    vendor: "ಮಾರಾಟಗಾರ",
    freshFarmSupplies: "ಫ್ರೆಶ್ ಫಾರ್ಮ್ ಸಪ್ಲೈಸ್",
    receivedDate: "ಸ್ವೀಕರಿಸಿದ ದಿನಾಂಕ",
    may20: "ಮೇ 20, 2024",
    unitCost: "ಘಟಕ ವೆಚ್ಚ",
    initiateReturn: "ರಿಟರ್ನ್ ಪ್ರಾರಂಭಿಸಿ",
    dairyMilk: "ಡೈರಿ ಹಾಲು - 1L ಕಾರ್ಟನ್‌ಗಳು",
    packagingDefect: "ಪ್ಯಾಕೇಜಿಂಗ್ ದೋಷ, ಸೋರಿಕೆ",
    sunriseDairy: "ಸನ್‌ರೈಸ್ ಡೈರಿ ಕಂ.",
    may18: "ಮೇ 18, 2024",

    activeReturnsScreenshotTitle: "ಸಕ್ರಿಯ ರಿಟರ್ನ್ಸ್ ಟ್ಯಾಬ್ - ಏಕೀಕೃತ ರಿಟರ್ನ್ ನಿರ್ವಹಣೆ",
    allReturns: "ಎಲ್ಲಾ ರಿಟರ್ನ್ಸ್ ({count})",
    searchReturns: "ರಿಟರ್ನ್ ಐಡಿ, ಮಾರಾಟಗಾರ ಅಥವಾ ಉತ್ಪನ್ನದ ಮೂಲಕ ಹುಡುಕಿ...",
    allVendors: "ಎಲ್ಲಾ ಮಾರಾಟಗಾರರು",
    allStatuses: "ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು",
    pendingApproval: "ಅನುಮೋದನೆಗಾಗಿ ಬಾಕಿ ಇದೆ",
    approved: "ಅನುಮೋದಿಸಲಾಗಿದೆ",
    readyForPickup: "ಪಿಕಪ್‌ಗೆ ಸಿದ್ಧ",
    returnId: "ರಿಟರ್ನ್ ಐಡಿ",
    returnType: "ರಿಟರ್ನ್ ಪ್ರಕಾರ",
    product: "ಉತ್ಪನ್ನ",
    quantity: "ಪ್ರಮಾಣ",
    reason: "ಕಾರಣ",
    status: "ಸ್ಥಿತಿ",
    actions: "ಕ್ರಿಯೆಗಳು",
    retId1: "RET-2024-001",
    productReturnType: "ಉತ್ಪನ್ನ ರಿಟರ್ನ್",
    sku: "SKU",
    damaged: "ಹಾನಿಗೊಳಗಾಗಿದೆ",
    approve: "ಅನುಮೋದಿಸಿ",
    vrId1: "VR-2024-008",
    vendorReturnType: "ವೆಂಡರ್ ರಿಟರ್ನ್",
    seasonalDecorations: "ಋತುಮಾನದ ಅಲಂಕಾರಗಳು",
    holidaySupplies: "ಹಾಲಿಡೇ ಸಪ್ಲೈಸ್ ಇಂಕ್",
    nonMoving: "ಚಲಿಸದ",
    markPickedUp: "ಪಿಕಪ್ ಮಾಡಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ",

    debitNotesScreenshotTitle: "ಡೆಬಿಟ್ ನೋಟ್ಸ್ ಟ್ಯಾಬ್ - ಆರ್ಥಿಕ ದಾಖಲಾತಿ",
    returnDebitNotes: "ರಿಟರ್ನ್-ಸಂಬಂಧಿತ ಡೆಬಿಟ್ ನೋಟ್ಸ್",
    dnId1: "DN-2024-0015",
    dnDesc1: "ಹಾನಿಗೊಳಗಾದ ಸಾವಯವ ಸೇಬುಗಳಿಗೆ ಡೆಬಿಟ್ ನೋಟ್ - ಸಾರಿಗೆ ಸಮಯದಲ್ಲಿ ನೀರಿನ ಹಾನಿ",
    dnId2: "DN-2024-0014",
    dnDesc2: "ವೆಂಡರ್ ರಿಟರ್ನ್ - ಋತುಮಾನದ ವಸ್ತುಗಳು ಚಲಿಸದ ದಾಸ್ತಾನು ಆಪ್ಟಿಮೈಸೇಶನ್",
    
    createProductReturnScreenshotTitle: "ಉತ್ಪನ್ನ ರಿಟರ್ನ್ ಫಾರ್ಮ್ ರಚಿಸಿ",
    createProductReturnFormTitle: "ಉತ್ಪನ್ನ ರಿಟರ್ನ್ ರಚಿಸಿ",
    createProductReturnFormDesc: "ಹಾನಿಗೊಳಗಾದ ಅಥವಾ ದೋಷಯುಕ್ತ ಉತ್ಪನ್ನಗಳನ್ನು ಮಾರಾಟಗಾರರಿಗೆ ಹಿಂತಿರುಗಿಸಿ",
    purchaseOrder: "ಖರೀದಿ ಆದೇಶ *",
    selectPO: "ಸ್ವೀಕರಿಸಿದ ಖರೀದಿ ಆದೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    returnQuantity: "ರಿಟರ್ನ್ ಪ್ರಮಾಣ *",
    returnReason: "ರಿಟರ್ನ್ ಕಾರಣ *",
    selectReason: "ರಿಟರ್ನ್ ಕಾರಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    expired: "ಅವಧಿ ಮುಗಿದಿದೆ",
    qualityIssue: "ಗುಣಮಟ್ಟದ ಸಮಸ್ಯೆ",
    wrongItem: "ತಪ್ಪು ವಸ್ತು",
    defective: "ದೋಷಯುಕ್ತ",
    descriptionField: "ವಿವರಣೆ",
    describeIssue: "ಉತ್ಪನ್ನದ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ...",
    cancel: "ರದ್ದುಮಾಡಿ",
    createReturn: "ರಿಟರ್ನ್ ರಚಿಸಿ",

    createVendorReturnScreenshotTitle: "ವೆಂಡರ್ ರಿಟರ್ನ್ ಫಾರ್ಮ್ ರಚಿಸಿ",
    createVendorReturnFormTitle: "ವೆಂಡರ್ ರಿಟರ್ನ್ ರಚಿಸಿ",
    createVendorReturnFormDesc: "ದಾಸ್ತಾನು ಆಪ್ಟಿಮೈಸೇಶನ್‌ಗಾಗಿ ಮಾರಾಟಗಾರರಿಗೆ ದಾಸ್ತಾನು ಹಿಂತಿರುಗಿಸಿ",
    selectVendor: "ಮಾರಾಟಗಾರರನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    selectReturnType: "ರಿಟರ್ನ್ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    nearExpiry: "ಅವಧಿ ಸಮೀಪ",
    slowMoving: "ನಿಧಾನ ಚಲನೆ",
    overstock: "ಅತಿ ದಾಸ್ತಾನು",
    addProductsToReturn: "ರಿಟರ್ನ್‌ಗೆ ಉತ್ಪನ್ನಗಳನ್ನು ಸೇರಿಸಿ",
    searchAndSelect: "ಈ ರಿಟರ್ನ್‌ನಲ್ಲಿ ಸೇರಿಸಲು ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ ಮತ್ತು ಆಯ್ಕೆಮಾಡಿ",
    searchProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ...",
    stock: "ದಾಸ್ತಾನು: {count} ಘಟಕಗಳು",
    cost: "ವೆಚ್ಚ: ₹{value}",
    add: "ಸೇರಿಸಿ",
    createVendorReturnButton: "ವೆಂಡರ್ ರಿಟರ್ನ್ ರಚಿಸಿ",

    statusWorkflowScreenshotTitle: "ರಿಟರ್ನ್ ಸ್ಥಿತಿ ಪ್ರಗತಿ",
    productReturnWorkflow: "ಉತ್ಪನ್ನ ರಿಟರ್ನ್ ಕೆಲಸದ ಹರಿವು",
    pickedUp: "ಪಿಕಪ್ ಮಾಡಲಾಗಿದೆ",
    statusPending: "ಅನುಮೋದನೆಗಾಗಿ ಬಾಕಿ ಇದೆ: ರಿಟರ್ನ್ ವಿನಂತಿಯನ್ನು ರಚಿಸಲಾಗಿದೆ, ನಿರ್ವಹಣಾ ಅನುಮೋದನೆಗಾಗಿ ಕಾಯುತ್ತಿದೆ",
    statusApproved: "ಅನುಮೋದಿಸಲಾಗಿದೆ: ರಿಟರ್ನ್ ಅನುಮೋದಿಸಲಾಗಿದೆ, ಮಾರಾಟಗಾರರ ಪಿಕಪ್‌ಗಾಗಿ ವಸ್ತುಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ",
    statusReady: "ಪಿಕಪ್‌ಗೆ ಸಿದ್ಧ: ವಸ್ತುಗಳು ಸಿದ್ಧವಾಗಿವೆ, ಸಂಗ್ರಹಕ್ಕಾಗಿ ಮಾರಾಟಗಾರರಿಗೆ ಸೂಚಿಸಲಾಗಿದೆ",
    statusPicked: "ಪಿಕಪ್ ಮಾಡಲಾಗಿದೆ: ಮಾರಾಟಗಾರರು ವಸ್ತುಗಳನ್ನು ಸಂಗ್ರಹಿಸಿದ್ದಾರೆ, ಅಂತಿಮ ಪ್ರಕ್ರಿಯೆಗಾಗಿ ಕಾಯುತ್ತಿದ್ದಾರೆ",
    statusCompleted: "ಪೂರ್ಣಗೊಂಡಿದೆ: ರಿಟರ್ನ್ ಸಂಸ್ಕರಿಸಲಾಗಿದೆ, ಡೆಬಿಟ್ ನೋಟ್ ರಚಿಸಲಾಗಿದೆ, ಆರ್ಥಿಕ ಸಮನ್ವಯ ಪೂರ್ಣಗೊಂಡಿದೆ",

    integrationScreenshotTitle: "ಏಕೀಕರಣ ಬಿಂದುಗಳು",
    integrationOverview: "ವ್ಯವಸ್ಥೆಯ ಏಕೀಕರಣ ಅವಲೋಕನ",
    poIntegration: "ಖರೀದಿ ಆದೇಶಗಳ ಏಕೀಕರಣ",
    poIntegrationDesc: "ಉತ್ಪನ್ನ ರಿಟರ್ನ್‌ಗಳು ಸಂಪೂರ್ಣ ಪತ್ತೆಹಚ್ಚುವಿಕೆಗಾಗಿ ಮೂಲ ಪಿಒಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಲಿಂಕ್ ಆಗುತ್ತವೆ",
    inventoryUpdates: "ದಾಸ್ತಾನು ನವೀಕರಣಗಳು",
    inventoryUpdatesDesc: "ರಿಟರ್ನ್‌ಗಳನ್ನು ಸಂಸ್ಕರಿಸಿದಾಗ ಸ್ಟಾಕ್ ಮಟ್ಟಗಳು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸರಿಹೊಂದುತ್ತವೆ",
    financialReconciliation: "ಆರ್ಥಿಕ ಸಮನ್ವಯ",
    financialReconciliationDesc: "ಡೆಬಿಟ್ ನೋಟ್‌ಗಳು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ರಚಿಸಲ್ಪಡುತ್ತವೆ ಮತ್ತು ಮಾರಾಟಗಾರರ ಖಾತೆಗಳಿಗೆ ಲಿಂಕ್ ಮಾಡಲ್ಪಡುತ್ತವೆ",
  },
  // Other language translations would follow a similar pattern
  te: {
    pageTitle: "రిటర్న్ నిర్వహణ మాన్యువల్",
    backToManual: "మాన్యువల్‌కు తిరిగి వెళ్ళు",
    description: "దెబ్బతిన్న వస్తువులను నిర్వహించడం, విక్రేతలకు ఉత్పత్తి రిటర్న్‌లను ప్రాసెస్ చేయడం, వెండర్ రిటర్న్‌లను నిర్వహించడం మరియు సమగ్ర ఆడిట్ ట్రయల్స్‌తో డెబిట్ నోట్‌లను ట్రాక్ చేయడం సహా పూర్తి రిటర్న్ నిర్వహణ ప్రక్రియను నేర్చుకోండి.",
    step1Title: "రిటర్న్ నిర్వహణ డాష్‌బోర్డ్ అవలోకనం",
    step1Intro: "మీ రిటైల్ ఆపరేషన్‌లో అన్ని రకాల రిటర్న్‌లను నిర్వహించడానికి రిటర్న్ మేనేజ్‌మెంట్ డాష్‌బోర్డ్ మీ సెంట్రల్ కమాండ్ సెంటర్. ఇది విక్రేతలకు ఉత్పత్తి రిటర్న్‌ల సమగ్ర ట్రాకింగ్ మరియు నిర్వహణ, ఇన్వెంటరీ ఆప్టిమైజేషన్ కోసం వెండర్ రిటర్న్‌లు మరియు డెబిట్ నోట్‌ల ద్వారా పూర్తి ఆర్థిక సయోధ్యను అందిస్తుంది.",
  },
  ta: {
    pageTitle: "திரும்பப் பெறுதல் மேலாண்மை கையேடு",
    backToManual: "கையேடுக்குத் திரும்பு",
    description: "சேதமடைந்த பொருட்களைக் கையாளுதல், விற்பனையாளர்களுக்கு தயாரிப்புத் திரும்புதல்களைச் செயலாக்குதல், விற்பனையாளர் திரும்புதல்களை நிர்வகித்தல் மற்றும் விரிவான தணிக்கைப் தடங்களுடன் பற்றுச் சீட்டுகளைக் கண்காணிப்பது உள்ளிட்ட முழுமையான திரும்பப் பெறுதல் மேலாண்மை செயல்முறையை மாஸ்டர் செய்யுங்கள்.",
    step1Title: "திரும்பப் பெறுதல் மேலாண்மை டாஷ்போர்டு மேலோட்டம்",
    step1Intro: "உங்கள் சில்லறை செயல்பாட்டில் அனைத்து வகையான திரும்பப் பெறுதல்களையும் கையாளுவதற்கான உங்கள் மத்திய கட்டளை மையம் திரும்பப் பெறுதல் மேலாண்மை டாஷ்போர்டு ஆகும். இது விற்பனையாளர்களுக்கு தயாரிப்புத் திரும்புதல்களின் விரிவான கண்காணிப்பு மற்றும் மேலாண்மை, சரக்கு மேம்படுத்தலுக்கான விற்பனையாளர் திரும்புதல்கள் மற்றும் பற்றுச் சீட்டுகள் மூலம் முழுமையான நிதிச் சரிபார்ப்பை வழங்குகிறது.",
  },
  hi: {
    pageTitle: "वापसी प्रबंधन मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "क्षतिग्रस्त माल को संभालने, विक्रेताओं को उत्पाद वापसी की प्रक्रिया करने, विक्रेता वापसी का प्रबंधन करने और व्यापक ऑडिट ट्रेल्स के साथ डेबिट नोटों को ट्रैक करने सहित पूरी वापसी प्रबंधन प्रक्रिया में महारत हासिल करें।",
    step1Title: "वापसी प्रबंधन डैशबोर्ड अवलोकन",
    step1Intro: "रिटर्न मैनेजमेंट डैशबोर्ड आपके रिटेल ऑपरेशन में सभी प्रकार के रिटर्न को संभालने के लिए आपका केंद्रीय कमांड सेंटर है। यह विक्रेताओं को उत्पाद रिटर्न की व्यापक ट्रैकिंग और प्रबंधन, इन्वेंट्री ऑप्टिमाइज़ेशन के लिए विक्रेता रिटर्न और डेबिट नोट के माध्यम से पूर्ण वित्तीय सुलह प्रदान करता है।",
  },
  ml: {
    pageTitle: "റിട്ടേൺ മാനേജ്മെന്റ് മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് മടങ്ങുക",
    description: "കേടായ സാധനങ്ങൾ കൈകാര്യം ചെയ്യൽ, വെണ്ടർമാർക്ക് ഉൽപ്പന്ന റിട്ടേണുകൾ പ്രോസസ്സ് ചെയ്യൽ, വെണ്ടർ റിട്ടേണുകൾ നിയന്ത്രിക്കൽ, സമഗ്രമായ ഓഡിറ്റ് ട്രെയിലുകളോടുകൂടിയ ഡെബിറ്റ് നോട്ടുകൾ ട്രാക്കുചെയ്യൽ എന്നിവയുൾപ്പെടെയുള്ള പൂർണ്ണമായ റിട്ടേൺ മാനേജ്മെന്റ് പ്രക്രിയയിൽ വൈദഗ്ദ്ധ്യം നേടുക.",
    step1Title: "റിട്ടേൺ മാനേജ്മെന്റ് ഡാഷ്‌ബോർഡ് അവലോകനം",
    step1Intro: "നിങ്ങളുടെ റീട്ടെയിൽ പ്രവർത്തനത്തിലെ എല്ലാത്തരം റിട്ടേണുകളും കൈകാര്യം ചെയ്യുന്നതിനുള്ള നിങ്ങളുടെ സെൻട്രൽ കമാൻഡ് സെന്ററാണ് റിട്ടേൺ മാനേജ്മെന്റ് ഡാഷ്‌ബോർഡ്. ഇത് വെണ്ടർമാർക്കുള്ള ഉൽപ്പന്ന റിട്ടേണുകളുടെ സമഗ്രമായ ട്രാക്കിംഗും മാനേജ്മെന്റും, ഇൻവെന്ററി ഒപ്റ്റിമൈസേഷനായുള്ള വെണ്ടർ റിട്ടേണുകളും ഡെബിറ്റ് നോട്ടുകളിലൂടെ പൂർണ്ണമായ സാമ്പത്തിക അനുരഞ്ജനവും നൽകുന്നു.",
  }
};

export default function ManualReturnManagement() {
  const [language, setLanguage] = useManualLanguage();
  
  const t = (key, params = {}) => {
    let text = translations[language]?.[key] || translations['en']?.[key] || key;
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
            <Button variant="outline" className="mb-4">
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
                <RotateCcw className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                {t('pageTitle')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                {t('description')}
              </p>
            </div>

            <div className="space-y-8">
              <Step number="1" title={t('step1Title')}>
                <p>
                  {t('step1Intro')}
                </p>
                <Screenshot title={t('dashboardScreenshotTitle')}>
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-100 rounded-xl">
                          <RotateCcw className="w-8 h-8 text-red-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-slate-900">{t('returnManagement')}</h2>
                          <p className="text-slate-600">{t('manageAllReturns')}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button className="bg-red-600 hover:bg-red-700 flex items-center gap-2">
                          <Plus className="w-4 h-4" />
                          {t('createProductReturn')}
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Plus className="w-4 h-4" />
                          {t('createVendorReturn')}
                        </Button>
                      </div>
                    </div>

                    {/* Summary Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                      <div className="border rounded-lg p-4 text-center bg-white shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Package className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-slate-600">{t('productReturns')}</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-900">28</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center bg-white shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Building2 className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-medium text-slate-600">{t('vendorReturns')}</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-900">12</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center bg-white shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm font-medium text-slate-600">{t('pending')}</span>
                        </div>
                        <p className="text-2xl font-bold text-yellow-600">8</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center bg-white shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-red-600" />
                          <span className="text-sm font-medium text-slate-600">{t('totalValue')}</span>
                        </div>
                        <p className="text-2xl font-bold text-red-600">₹1,54,200</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center bg-white shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-medium text-slate-600">{t('completed')}</span>
                        </div>
                        <p className="text-2xl font-bold text-emerald-600">32</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center bg-white shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <FileText className="w-4 h-4 text-indigo-600" />
                          <span className="text-sm font-medium text-slate-600">{t('debitNotes')}</span>
                        </div>
                        <p className="text-2xl font-bold text-indigo-600">15</p>
                      </div>
                    </div>
                  </div>
                </Screenshot>
                <p>
                  {t('these_stats_provide_overview')}
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li><strong>{t('productReturns')}:</strong> {t('statsDescProduct')}</li>
                  <li><strong>{t('vendorReturns')}:</strong> {t('statsDescVendor')}</li>
                  <li><strong>{t('pending')}:</strong> {t('statsDescPending')}</li>
                  <li><strong>{t('totalValue')}:</strong> {t('statsDescValue')}</li>
                  <li><strong>{t('completed')}:</strong> {t('statsDescCompleted')}</li>
                  <li><strong>{t('debitNotes')}:</strong> {t('statsDescDebit')}</li>
                </ul>
              </Step>

              <Step number="2" title={t('step2Title')}>
                <p>
                  {t('step2Intro')}
                </p>

                <Screenshot title={t('damagedGoodsScreenshotTitle')}>
                  <div className="border rounded-lg shadow-sm bg-white">
                    <div className="p-4 border-b border-slate-100">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                          {t('damagedGoodsAwaiting', {count: 5})}
                        </h3>
                        <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                          <Button variant="ghost" size="sm" className="h-8 px-3">
                            <List className="w-4 h-4" />
                          </Button>
                          <Button variant="default" size="sm" className="h-8 px-3">
                            <Grid className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <code className="text-xs bg-slate-100 px-2 py-1 rounded">{t('poReference')}</code>
                              <h4 className="font-medium text-slate-900 mt-2">{t('organicApples')}</h4>
                              <p className="text-xs text-red-600 mt-1">{t('waterDamage')}</p>
                            </div>
                            <Badge variant="destructive">{t('units', {count: 15})}</Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4 text-slate-400" />
                              <span>{t('freshFarmSupplies')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-slate-400" />
                              <span>{t('may20')}</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-slate-100">
                            <div>
                              <span className="text-xs text-slate-500">{t('unitCost')}</span>
                              <p className="font-semibold">₹230.50</p>
                            </div>
                            <div>
                              <span className="text-xs text-slate-500">{t('totalValue')}</span>
                              <p className="font-semibold text-red-600">₹3,457.50</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                              <ArrowUpDown className="w-4 h-4 mr-2" />
                              {t('initiateReturn')}
                            </Button>
                          </div>
                        </div>
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <code className="text-xs bg-slate-100 px-2 py-1 rounded">PO-2024-0518-003</code>
                              <h4 className="font-medium text-slate-900 mt-2">{t('dairyMilk')}</h4>
                              <p className="text-xs text-red-600 mt-1">{t('packagingDefect')}</p>
                            </div>
                            <Badge variant="destructive">{t('units', {count: 8})}</Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4 text-slate-400" />
                              <span>{t('sunriseDairy')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-slate-400" />
                              <span>{t('may18')}</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-slate-100">
                            <div>
                              <span className="text-xs text-slate-500">{t('unitCost')}</span>
                              <p className="font-semibold">₹52.25</p>
                            </div>
                            <div>
                              <span className="text-xs text-slate-500">{t('totalValue')}</span>
                              <p className="font-semibold text-red-600">₹418.00</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                              <ArrowUpDown className="w-4 h-4 mr-2" />
                              {t('initiateReturn')}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
                
                <p>{t('key_info_for_damaged')}</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li><strong>{t('poReferenceKey')}:</strong> {t('poReferenceDesc')}</li>
                  <li><strong>{t('damageDetailsKey')}:</strong> {t('damageDetailsDesc')}</li>
                  <li><strong>{t('financialImpactKey')}:</strong> {t('financialImpactDesc')}</li>
                  <li><strong>{t('vendorInfoKey')}:</strong> {t('vendorInfoDesc')}</li>
                  <li><strong>{t('initiateReturnKey')}:</strong> {t('initiateReturnDesc')}</li>
                </ul>
              </Step>

              <Step number="3" title={t('step3Title')}>
                <p>
                  {t('step3Intro')}
                </p>

                <Screenshot title={t('activeReturnsScreenshotTitle')}>
                  <div className="border rounded-lg shadow-sm bg-white">
                    <div className="p-4 border-b border-slate-100">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                            <Package className="w-5 h-5 text-blue-600" />
                            {t('allReturns', {count: 24})}
                          </h3>
                          <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                            <Button variant="default" size="sm" className="h-8 px-3">
                              <List className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-3">
                              <Grid className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="relative flex-grow">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <Input placeholder={t('searchReturns')} className="pl-9" />
                          </div>
                          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                            <option>{t('allVendors')}</option>
                            <option>{t('freshFarmSupplies')}</option>
                            <option>{t('sunriseDairy')}</option>
                          </select>
                          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                            <option>{t('allStatuses')}</option>
                            <option>{t('pendingApproval')}</option>
                            <option>{t('approved')}</option>
                            <option>{t('readyForPickup')}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="p-0 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-slate-50 border-b">
                            <th className="text-left p-4 font-medium">{t('returnId')}</th>
                            <th className="text-left p-4 font-medium">{t('returnType')}</th>
                            <th className="text-left p-4 font-medium">{t('product')}</th>
                            <th className="text-left p-4 font-medium">{t('vendor')}</th>
                            <th className="text-left p-4 font-medium">{t('quantity')}</th>
                            <th className="text-left p-4 font-medium">{t('reason')}</th>
                            <th className="text-left p-4 font-medium">{t('totalValue')}</th>
                            <th className="text-left p-4 font-medium">{t('status')}</th>
                            <th className="text-left p-4 font-medium">{t('actions')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-slate-50">
                            <td className="p-4">
                              <code className="text-xs bg-slate-100 px-2 py-1 rounded">{t('retId1')}</code>
                            </td>
                            <td className="p-4">
                              <Badge variant="default" className="bg-red-100 text-red-800">{t('productReturnType')}</Badge>
                            </td>
                            <td className="p-4">
                              <p className="font-medium">{t('organicApples')}</p>
                              <p className="text-xs text-slate-500">{t('sku')}: APL-ORG-001</p>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-slate-400" />
                                <span>{t('freshFarmSupplies')}</span>
                              </div>
                            </td>
                            <td className="p-4"><span className="font-medium">{t('units', {count: 15})}</span></td>
                            <td className="p-4">
                              <Badge variant="secondary" className="bg-red-100 text-red-800">{t('damaged')}</Badge>
                            </td>
                            <td className="p-4"><span className="font-semibold">₹3,457.50</span></td>
                            <td className="p-4">
                              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{t('pendingApproval')}</Badge>
                            </td>
                            <td className="p-4">
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">{t('approve')}</Button>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-slate-50">
                            <td className="p-4">
                              <code className="text-xs bg-slate-100 px-2 py-1 rounded">{t('vrId1')}</code>
                            </td>
                            <td className="p-4">
                              <Badge variant="outline" className="bg-teal-100 text-teal-800">{t('vendorReturnType')}</Badge>
                            </td>
                            <td className="p-4">
                              <p className="font-medium">{t('seasonalDecorations')}</p>
                              <p className="text-xs text-slate-500">{t('sku')}: DEC-SEA-045</p>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-slate-400" />
                                <span>{t('holidaySupplies')}</span>
                              </div>
                            </td>
                            <td className="p-4"><span className="font-medium">{t('units', {count: 50})}</span></td>
                            <td className="p-4">
                              <Badge variant="secondary" className="bg-gray-100 text-gray-800">{t('nonMoving')}</Badge>
                            </td>
                            <td className="p-4"><span className="font-semibold">₹18,750.00</span></td>
                            <td className="p-4">
                              <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">{t('readyForPickup')}</Badge>
                            </td>
                            <td className="p-4">
                              <Button size="sm" className="bg-orange-600 hover:bg-orange-700">{t('markPickedUp')}</Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Screenshot>

                <p>{t('active_returns_capabilities')}</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li><strong>{t('returnTypesKey')}:</strong> {t('returnTypesDesc')}</li>
                  <li><strong>{t('searchFiltersKey')}:</strong> {t('searchFiltersDesc')}</li>
                  <li><strong>{t('statusTrackingKey')}:</strong> {t('statusTrackingDesc')}</li>
                  <li><strong>{t('actionButtonsKey')}:</strong> {t('actionButtonsDesc')}</li>
                  <li><strong>{t('financialVisibilityKey')}:</strong> {t('financialVisibilityDesc')}</li>
                </ul>
              </Step>

              <Step number="4" title={t('step4Title')}>
                <p>
                  {t('step4Intro')}
                </p>

                <Screenshot title={t('debitNotesScreenshotTitle')}>
                  <div className="border rounded-lg shadow-sm bg-white">
                    <div className="p-4 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-red-600" />
                        {t('returnDebitNotes')}
                      </h3>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <code className="text-xs bg-slate-100 px-2 py-1 rounded">{t('dnId1')}</code>
                              <div className="mt-2">
                                <Badge variant="default" className="bg-green-100 text-green-800">{t('completed')}</Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="font-semibold text-red-600 text-lg">₹3,457.50</span>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm mb-3">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4 text-slate-400" />
                              <span>{t('freshFarmSupplies')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-slate-400" />
                              <span>May 21, 2024</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-slate-600" title={t('dnDesc1')}>
                              {t('dnDesc1')}
                            </p>
                          </div>
                        </div>
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <code className="text-xs bg-slate-100 px-2 py-1 rounded">{t('dnId2')}</code>
                              <div className="mt-2">
                                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{t('pending')}</Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="font-semibold text-red-600 text-lg">₹18,750.00</span>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm mb-3">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4 text-slate-400" />
                              <span>{t('holidaySupplies')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-slate-400" />
                              <span>May 20, 2024</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-slate-600" title={t('dnDesc2')}>
                              {t('dnDesc2')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
                
                <p>{t('debit_note_doc_provide')}</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li><strong>{t('refNumbersKey')}:</strong> {t('refNumbersDesc')}</li>
                  <li><strong>{t('statusTrackingKey2')}:</strong> {t('statusTrackingDesc2')}</li>
                  <li><strong>{t('vendorAssocKey')}:</strong> {t('vendorAssocDesc')}</li>
                  <li><strong>{t('amountDueKey')}:</strong> {t('amountDueDesc')}</li>
                  <li><strong>{t('documentationKey')}:</strong> {t('documentationDesc')}</li>
                </ul>
              </Step>

              <Step number="5" title={t('step5Title')}>
                <p>
                  {t('step5Intro')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. {t('creatingProductReturns')}</h6>
                <p>
                  {t('productReturnsDesc')}
                </p>

                <Screenshot title={t('createProductReturnScreenshotTitle')}>
                  <div className="max-w-4xl bg-white border rounded-lg shadow-sm">
                    <div className="p-6 border-b">
                      <h3 className="text-xl font-bold text-slate-900">{t('createProductReturnFormTitle')}</h3>
                      <p className="text-slate-600">{t('createProductReturnFormDesc')}</p>
                    </div>
                    <div className="p-6 space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('purchaseOrder')}</label>
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg">
                          <option>{t('selectPO')}</option>
                          <option>PO-2024-0521-001 - {t('organicApples')} ({t('freshFarmSupplies')})</option>
                          <option>PO-2024-0518-003 - {t('dairyMilk')} ({t('sunriseDairy')})</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">{t('returnQuantity')}</label>
                          <Input type="number" placeholder="Max: 50" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">{t('returnReason')}</label>
                          <select className="w-full px-3 py-2 border border-slate-200 rounded-lg">
                            <option>{t('selectReason')}</option>
                            <option>{t('damaged')}</option>
                            <option>{t('expired')}</option>
                            <option>{t('qualityIssue')}</option>
                            <option>{t('wrongItem')}</option>
                            <option>{t('defective')}</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('descriptionField')}</label>
                        <textarea className="w-full px-3 py-2 border border-slate-200 rounded-lg" rows={4} placeholder={t('describeIssue')}></textarea>
                      </div>
                      <div className="flex justify-end gap-3">
                        <Button variant="outline">{t('cancel')}</Button>
                        <Button className="bg-red-600 hover:bg-red-700">{t('createReturn')}</Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. {t('creatingVendorReturns')}</h6>
                <p>
                  {t('vendorReturnsDesc')}
                </p>

                <Screenshot title={t('createVendorReturnScreenshotTitle')}>
                  <div className="max-w-6xl bg-white border rounded-lg shadow-sm">
                    <div className="p-6 border-b">
                      <h3 className="text-xl font-bold text-slate-900">{t('createVendorReturnFormTitle')}</h3>
                      <p className="text-slate-600">{t('createVendorReturnFormDesc')}</p>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">{t('vendor')} *</label>
                          <select className="w-full px-3 py-2 border border-slate-200 rounded-lg">
                            <option>{t('selectVendor')}</option>
                            <option>{t('freshFarmSupplies')}</option>
                            <option>{t('holidaySupplies')}</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">{t('returnType')} *</label>
                          <select className="w-full px-3 py-2 border border-slate-200 rounded-lg">
                            <option>{t('selectReturnType')}</option>
                            <option>{t('nonMoving')}</option>
                            <option>{t('nearExpiry')}</option>
                            <option>{t('slowMoving')}</option>
                            <option>{t('overstock')}</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg">
                        <div className="p-4 border-b bg-slate-50">
                          <h4 className="font-semibold">{t('addProductsToReturn')}</h4>
                          <p className="text-sm text-slate-600 mt-1">{t('searchAndSelect')}</p>
                        </div>
                        <div className="p-4">
                          <div className="relative mb-4">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <Input placeholder={t('searchProducts')} className="pl-9" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="border rounded-lg p-3 hover:bg-slate-50">
                              <h5 className="font-medium text-slate-900">{t('seasonalDecorations')}</h5>
                              <p className="text-sm text-slate-600">{t('sku')}: DEC-SEA-045</p>
                              <p className="text-sm text-slate-600">{t('stock', {count: 75})}</p>
                              <p className="text-sm text-slate-600">{t('cost', {value: '7.50'})}</p>
                              <Button size="sm" className="mt-2 w-full">
                                <Plus className="w-4 h-4 mr-2" />
                                {t('add')}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-3">
                        <Button variant="outline">{t('cancel')}</Button>
                        <Button className="bg-red-600 hover:bg-red-700">{t('createVendorReturnButton')}</Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="6" title={t('step6Title')}>
                <p>
                  {t('step6Intro')}
                </p>

                <Screenshot title={t('statusWorkflowScreenshotTitle')}>
                  <div className="bg-white border rounded-lg shadow-sm p-6">
                    <h4 className="font-semibold text-slate-800 mb-4">{t('productReturnWorkflow')}</h4>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <span className="text-xs mt-1 text-center">{t('pendingApproval')}</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-slate-200 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <span className="text-xs mt-1 text-center">{t('approved')}</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-slate-200 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <span className="text-xs mt-1 text-center">{t('readyForPickup')}</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-slate-200 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                        <span className="text-xs mt-1 text-center">{t('pickedUp')}</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-slate-200 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                        <span className="text-xs mt-1 text-center">{t('completed')}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        {t('statusPending')}
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        {t('statusApproved')}
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        {t('statusReady')}
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        {t('statusPicked')}
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-lg">
                        {t('statusCompleted')}
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <p>{t('each_status_change_triggers')}</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li><strong>{t('approvalKey')}:</strong> {t('approvalDesc')}</li>
                  <li><strong>{t('preparationKey')}:</strong> {t('preparationDesc')}</li>
                  <li><strong>{t('vendorNotifKey')}:</strong> {t('vendorNotifDesc')}</li>
                  <li><strong>{t('documentationKey2')}:</strong> {t('documentationDesc2')}</li>
                  <li><strong>{t('financialProcessingKey')}:</strong> {t('financialProcessingDesc')}</li>
                </ul>
              </Step>

              <Step number="7" title={t('step7Title')}>
                <p>
                  {t('step7Intro')}
                </p>

                <Screenshot title={t('integrationScreenshotTitle')}>
                  <div className="bg-white border rounded-lg shadow-sm p-6">
                    <h4 className="font-semibold text-slate-800 mb-4">{t('integrationOverview')}</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Truck className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-medium text-blue-800">{t('poIntegration')}</h5>
                          <p className="text-sm text-blue-700">{t('poIntegrationDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h5 className="font-medium text-green-800">{t('inventoryUpdates')}</h5>
                          <p className="text-sm text-green-700">{t('inventoryUpdatesDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h5 className="font-medium text-purple-800">{t('financialReconciliation')}</h5>
                          <p className="text-sm text-purple-700">{t('financialReconciliationDesc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <p>{t('this_integration_ensures')}</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li><strong>{t('dataIntegrityKey')}:</strong> {t('dataIntegrityDesc')}</li>
                  <li><strong>{t('auditTrailKey')}:</strong> {t('auditTrailDesc')}</li>
                  <li><strong>{t('autoUpdatesKey')}:</strong> {t('autoUpdatesDesc')}</li>
                  <li><strong>{t('vendorCommKey')}:</strong> {t('vendorCommDesc')}</li>
                </ul>
              </Step>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
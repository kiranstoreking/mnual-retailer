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
  <div className="flex items-start gap-4 mt-8 w-full">
    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow min-w-0">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-6 sm:mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base break-words -ml-12 sm:ml-0 ">
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

    // Add missing translation keys
    step2Intro: "This tab identifies damaged goods from purchase orders that haven't been returned yet, essentially creating a 'to-do' list for processing returns. It's your starting point for converting damaged inventory into vendor returns.",
    step3Intro: "The Active Returns tab consolidates both Product Returns (damaged goods) and Vendor Returns (inventory optimization) into a single, manageable view. This is where you monitor progress and take action on all ongoing returns.",
    step4Intro: "The Debit Notes tab tracks all financial documents generated from returns. These are critical for accounting purposes and vendor reconciliation, ensuring proper documentation of credits owed by vendors.",
    step5Intro: "The Return Management system supports two primary workflows: Product Returns (for damaged/defective items) and Vendor Returns (for inventory optimization). Each has its own creation process and approval workflow.",
    step6Intro: "Returns follow a structured workflow from creation to completion. Understanding these statuses helps you manage the process efficiently and communicate effectively with vendors.",
    step7Intro: "Return Management is tightly integrated with your Purchase Order and Inventory systems, ensuring data consistency and complete traceability from initial receipt through return completion.",

    // Add other missing keys
    sku: "SKU",
    product: "Product",
    quantity: "Quantity",
    reason: "Reason",
    status: "Status",
    actions: "Actions",
    returnId: "Return ID",
    returnType: "Return Type",
    searchReturns: "Search by return ID, vendor, or product...",
    allVendors: "All Vendors",
    allStatuses: "All Statuses",
    pendingApproval: "Pending Approval",
    approved: "Approved",
    readyForPickup: "Ready for Pickup",
    pickedUp: "Picked Up",
    nonMoving: "non moving",
    creatingProductReturns: "Creating Product Returns",
    creatingVendorReturns: "Creating Vendor Returns",
    productReturnsDesc: "Create product returns to return damaged or defective products to vendors.",
    vendorReturnsDesc: "Create vendor returns to return inventory to vendors for optimization.",
    each_status_change_triggers: "Each status change triggers these actions:",
    approvalKey: "Approval",
    approvalDesc: "Request for management approval",
    preparationKey: "Preparation",
    preparationDesc: "Prepare items for vendor pickup",
    vendorNotifKey: "Vendor Notification",
    vendorNotifDesc: "Notify vendor for pickup",
    documentationKey2: "Documentation",
    documentationDesc2: "Document return process",
    financialProcessingKey: "Financial Processing",
    financialProcessingDesc: "Generate debit note and update accounts",
    this_integration_ensures: "This integration ensures these benefits:",
    dataIntegrityKey: "Data Integrity",
    dataIntegrityDesc: "Consistent and accurate information across all systems",
    auditTrailKey: "Audit Trail",
    auditTrailDesc: "Complete history and actions for each return",
    autoUpdatesKey: "Auto Updates",
    autoUpdatesDesc: "Other systems automatically update when return statuses change",
    vendorCommKey: "Vendor Communication",
    vendorCommDesc: "Automatic notifications to vendors about return statuses and pickup times",
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

    // Missing translation keys
    these_stats_provide_overview: "ಈ ಅಂಕಿಅಂಶಗಳು ನಿಮ್ಮ ರಿಟರ್ನ್ ನಿರ್ವಹಣೆಯ ಸಮಗ್ರ ಅವಲೋಕನವನ್ನು ಒದಗಿಸುತ್ತವೆ:",
    key_info_for_damaged: "ಹಾನಿಗೊಳಗಾದ ಸರಕುಗಳಿಗಾಗಿ ಪ್ರಮುಖ ಮಾಹಿತಿ:",
    poReferenceKey: "ಪಿಒ ಉಲ್ಲೇಖ",
    poReferenceDesc: "ಮೂಲ ಖರೀದಿ ಆದೇಶವನ್ನು ಗುರುತಿಸಲು",
    damageDetailsKey: "ಹಾನಿ ವಿವರಗಳು",
    damageDetailsDesc: "ರಿಟರ್ನ್ ಕಾರಣವನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ತಿಳಿಸಲು",
    financialImpactKey: "ಆರ್ಥಿಕ ಪರಿಣಾಮ",
    financialImpactDesc: "ರಿಟರ್ನ್‌ನಿಂದ ಒಟ್ಟು ವೆಚ್ಚ ಮತ್ತು ಉಳಿತಾಯ",
    vendorInfoKey: "ಮಾರಾಟಗಾರರ ಮಾಹಿತಿ",
    vendorInfoDesc: "ರಿಟರ್ನ್ ಪ್ರಕ್ರಿಯೆಗಾಗಿ ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    initiateReturnKey: "ರಿಟರ್ನ್ ಪ್ರಾರಂಭಿಸಿ",
    initiateReturnDesc: "ರಿಟರ್ನ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ಬಟನ್",
    active_returns_capabilities: "ಸಕ್ರಿಯ ರಿಟರ್ನ್ಸ್ ಟ್ಯಾಬ್‌ನ ಸಾಮರ್ಥ್ಯಗಳು:",
    returnTypesKey: "ರಿಟರ್ನ್ ಪ್ರಕಾರಗಳು",
    returnTypesDesc: "ಉತ್ಪನ್ನ ಮತ್ತು ವೆಂಡರ್ ರಿಟರ್ನ್ಸ್ ಎರಡನ್ನೂ ಏಕೀಕೃತ ವೀಕ್ಷಣೆಯಲ್ಲಿ",
    searchFiltersKey: "ಹುಡುಕಾಟ ಫಿಲ್ಟರ್‌ಗಳು",
    searchFiltersDesc: "ರಿಟರ್ನ್ ಐಡಿ, ಮಾರಾಟಗಾರ ಅಥವಾ ಸ್ಥಿತಿಯ ಮೂಲಕ ಹುಡುಕಿ",
    statusTrackingKey: "ಸ್ಥಿತಿ ಟ್ರ್ಯಾಕಿಂಗ್",
    statusTrackingDesc: "ಪ್ರತಿ ರಿಟರ್ನ್‌ನ ಪ್ರಗತಿಯನ್ನು ನಿಜ-ಸಮಯದಲ್ಲಿ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",
    actionButtonsKey: "ಕ್ರಿಯೆ ಬಟನ್‌ಗಳು",
    actionButtonsDesc: "ಅನುಮೋದನೆ, ಪಿಕಪ್ ಮತ್ತು ಇತರ ಕ್ರಿಯೆಗಳಿಗಾಗಿ",
    financialVisibilityKey: "ಆರ್ಥಿಕ ಗೋಚರತೆ",
    financialVisibilityDesc: "ಎಲ್ಲಾ ರಿಟರ್ನ್‌ಗಳ ಒಟ್ಟು ಮೌಲ್ಯ ಮತ್ತು ವೆಚ್ಚಗಳು",
    debit_note_doc_provide: "ಡೆಬಿಟ್ ನೋಟ್ ದಾಖಲೆಗಳು ಈ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುತ್ತವೆ:",
    refNumbersKey: "ಉಲ್ಲೇಖ ಸಂಖ್ಯೆಗಳು",
    refNumbersDesc: "ಪ್ರತಿ ಡೆಬಿಟ್ ನೋಟ್‌ಗೆ ವಿಶಿಷ್ಟ ಐಡಿ",
    statusTrackingKey2: "ಸ್ಥಿತಿ ಟ್ರ್ಯಾಕಿಂಗ್",
    statusTrackingDesc2: "ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿರುವ ಮತ್ತು ಪೂರ್ಣಗೊಂಡ ಡೆಬಿಟ್ ನೋಟ್‌ಗಳು",
    vendorAssocKey: "ಮಾರಾಟಗಾರರ ಸಂಬಂಧ",
    vendorAssocDesc: "ಪ್ರತಿ ಡೆಬಿಟ್ ನೋಟ್‌ಗೆ ಸಂಬಂಧಿತ ಮಾರಾಟಗಾರರನ್ನು ಗುರುತಿಸಿ",
    amountDueKey: "ಬಾಕಿ ಮೊತ್ತ",
    amountDueDesc: "ಮಾರಾಟಗಾರರಿಂದ ವಸೂಲಿ ಮಾಡಬೇಕಾದ ಒಟ್ಟು ಮೊತ್ತ",
    documentationKey: "ದಾಖಲಾತಿ",
    documentationDesc: "ರಿಟರ್ನ್ ಕಾರಣಗಳು ಮತ್ತು ವಿವರಗಳು",
    creatingProductReturns: "ಉತ್ಪನ್ನ ರಿಟರ್ನ್ಸ್ ರಚಿಸುವುದು",
    productReturnsDesc: "ಹಾನಿಗೊಳಗಾದ ಅಥವಾ ದೋಷಯುಕ್ತ ಉತ್ಪನ್ನಗಳನ್ನು ಮಾರಾಟಗಾರರಿಗೆ ಹಿಂತಿರುಗಿಸಲು ಉತ್ಪನ್ನ ರಿಟರ್ನ್‌ಗಳನ್ನು ರಚಿಸಿ.",
    creatingVendorReturns: "ವೆಂಡರ್ ರಿಟರ್ನ್ಸ್ ರಚಿಸುವುದು",
    vendorReturnsDesc: "ದಾಸ್ತಾನು ಆಪ್ಟಿಮೈಸೇಶನ್‌ಗಾಗಿ ಮಾರಾಟಗಾರರಿಗೆ ದಾಸ್ತಾನು ಹಿಂತಿರುಗಿಸಲು ವೆಂಡರ್ ರಿಟರ್ನ್‌ಗಳನ್ನು ರಚಿಸಿ.",
    each_status_change_triggers: "ಪ್ರತಿ ಸ್ಥಿತಿ ಬದಲಾವಣೆಯು ಈ ಕ್ರಿಯೆಗಳನ್ನು ಪ್ರಚೋದಿಸುತ್ತದೆ:",
    approvalKey: "ಅನುಮೋದನೆ",
    approvalDesc: "ನಿರ್ವಹಣಾ ಅನುಮೋದನೆಗಾಗಿ ವಿನಂತಿ",
    preparationKey: "ಸಿದ್ಧತೆ",
    preparationDesc: "ಮಾರಾಟಗಾರರ ಪಿಕಪ್‌ಗಾಗಿ ವಸ್ತುಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಿ",
    vendorNotifKey: "ಮಾರಾಟಗಾರರ ಸೂಚನೆ",
    vendorNotifDesc: "ಪಿಕಪ್‌ಗಾಗಿ ಮಾರಾಟಗಾರರಿಗೆ ಸೂಚಿಸಿ",
    documentationKey2: "ದಾಖಲಾತಿ",
    documentationDesc2: "ರಿಟರ್ನ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ದಾಖಲಿಸಿ",
    financialProcessingKey: "ಆರ್ಥಿಕ ಪ್ರಕ್ರಿಯೆ",
    financialProcessingDesc: "ಡೆಬಿಟ್ ನೋಟ್ ರಚಿಸಿ ಮತ್ತು ಖಾತೆಗಳನ್ನು ನವೀಕರಿಸಿ",
    this_integration_ensures: "ಈ ಏಕೀಕರಣವು ಈ ಪ್ರಯೋಜನಗಳನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ:",
    dataIntegrityKey: "ಡೇಟಾ ಸಮಗ್ರತೆ",
    dataIntegrityDesc: "ಎಲ್ಲಾ ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಸ್ಥಿರ ಮತ್ತು ನಿಖರವಾದ ಮಾಹಿತಿ",
    auditTrailKey: "ಆಡಿಟ್ ಟ್ರೇಲ್",
    auditTrailDesc: "ಪ್ರತಿ ರಿಟರ್ನ್‌ನ ಸಂಪೂರ್ಣ ಇತಿಹಾಸ ಮತ್ತು ಕ್ರಿಯೆಗಳು",
    autoUpdatesKey: "ಸ್ವಯಂಚಾಲಿತ ನವೀಕರಣಗಳು",
    autoUpdatesDesc: "ರಿಟರ್ನ್ ಸ್ಥಿತಿಗಳು ಬದಲಾದಾಗ ಇತರ ವ್ಯವಸ್ಥೆಗಳು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನವೀಕರಿಸಲ್ಪಡುತ್ತವೆ",
    vendorCommKey: "ಮಾರಾಟಗಾರರ ಸಂವಹನ",
    vendorCommDesc: "ರಿಟರ್ನ್ ಸ್ಥಿತಿಗಳು ಮತ್ತು ಪಿಕಪ್ ವೇಳೆಗಳ ಬಗ್ಗೆ ಮಾರಾಟಗಾರರಿಗೆ ಸ್ವಯಂಚಾಲಿತ ಸೂಚನೆಗಳು",

    // Add missing translation keys
    step2Intro: "ಈ ಟ್ಯಾಬ್ ಇನ್ನೂ ಹಿಂತಿರುಗಿಸದ ಖರೀದಿ ಆದೇಶಗಳಿಂದ ಹಾನಿಗೊಳಗಾದ ಸರಕುಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ, ಇದು ರಿಟರ್ನ್‌ಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು 'ಮಾಡಬೇಕಾದ' ಪಟ್ಟಿಯನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ. ಹಾನಿಗೊಳಗಾದ ದಾಸ್ತಾನನ್ನು ಮಾರಾಟಗಾರರ ರಿಟರ್ನ್‌ಗಳಾಗಿ ಪರಿವರ್ತಿಸಲು ಇದು ನಿಮ್ಮ ಆರಂಭಿಕ ಹಂತವಾಗಿದೆ.",
    step3Intro: "ಸಕ್ರಿಯ ರಿಟರ್ನ್ಸ್ ಟ್ಯಾಬ್ ಉತ್ಪನ್ನ ರಿಟರ್ನ್‌ಗಳು (ಹಾನಿಗೊಳಗಾದ ಸರಕುಗಳು) ಮತ್ತು ವೆಂಡರ್ ರಿಟರ್ನ್‌ಗಳು (ದಾಸ್ತಾನು ಆಪ್ಟಿಮೈಸೇಶನ್) ಎರಡನ್ನೂ ಒಂದೇ, ನಿರ್ವಹಿಸಬಹುದಾದ ವೀಕ್ಷಣೆಯಲ್ಲಿ ಕ್ರೋಢೀಕರಿಸುತ್ತದೆ. ಇಲ್ಲಿ ನೀವು ಪ್ರಗತಿಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುತ್ತೀರಿ ಮತ್ತು ಎಲ್ಲಾ ನಡೆಯುತ್ತಿರುವ ರಿಟರ್ನ್‌ಗಳ ಮೇಲೆ ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳುತ್ತೀರಿ.",
    step4Intro: "ಡೆಬಿಟ್ ನೋಟ್ಸ್ ಟ್ಯಾಬ್ ರಿಟರ್ನ್‌ಗಳಿಂದ ಉತ್ಪತ್ತಿಯಾದ ಎಲ್ಲಾ ಆರ್ಥಿಕ ದಾಖಲೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ. ಇವು ಲೆಕ್ಕಪತ್ರ ಉದ್ದೇಶಗಳಿಗೆ ಮತ್ತು ಮಾರಾಟಗಾರರ ಸಮನ್ವಯಕ್ಕೆ ನಿರ್ಣಾಯಕವಾಗಿವೆ, ಮಾರಾಟಗಾರರಿಂದ ಬರಬೇಕಾದ ಕ್ರೆಡಿಟ್‌ಗಳ ಸರಿಯಾದ ದಾಖಲಾತಿಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತವೆ.",
    step5Intro: "ರಿಟರ್ನ್ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆಯು ಎರಡು ಪ್ರಾಥಮಿಕ ಕೆಲಸದ ಹರಿವುಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ: ಉತ್ಪನ್ನ ರಿಟರ್ನ್ಸ್ (ಹಾನಿಗೊಳಗಾದ/ದೋಷಯುಕ್ತ ವಸ್ತುಗಳಿಗಾಗಿ) ಮತ್ತು ವೆಂಡರ್ ರಿಟರ್ನ್ಸ್ (ದಾಸ್ತಾನು ಆಪ್ಟಿಮೈಸೇಶನ್‌ಗಾಗಿ). ಪ್ರತಿಯೊಂದಕ್ಕೂ ತನ್ನದೇ ಆದ ರಚನೆ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಅನುಮೋದನೆ ಕೆಲಸದ ಹರಿವು ಇದೆ.",
    step6Intro: "ರಿಟರ್ನ್‌ಗಳು ರಚನೆಯಿಂದ ಪೂರ್ಣಗೊಳ್ಳುವವರೆಗೆ ಒಂದು ರಚನಾತ್ಮಕ ಕೆಲಸದ ಹರಿವನ್ನು ಅನುಸರಿಸುತ್ತವೆ. ಈ ಸ್ಥಿತಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಪ್ರಕ್ರಿಯೆಯನ್ನು ಸಮರ್ಥವಾಗಿ ನಿರ್ವಹಿಸಲು ಮತ್ತು ಮಾರಾಟಗಾರರೊಂದಿಗೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಸಂವಹನ ನಡೆಸಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    step7Intro: "ರಿಟರ್ನ್ ನಿರ್ವಹಣೆಯು ನಿಮ್ಮ ಖರೀದಿ ಆದೇಶ ಮತ್ತು ದಾಸ್ತಾನು ವ್ಯವಸ್ಥೆಗಳೊಂದಿಗೆ ಬಿಗಿಯಾಗಿ ಸಂಯೋಜಿಸಲ್ಪಟ್ಟಿದೆ, ಆರಂಭಿಕ ಸ್ವೀಕೃತಿಯಿಂದ ಹಿಂತಿರುಗಿಸುವಿಕೆಯ ಪೂರ್ಣಗೊಳ್ಳುವವರೆಗೆ ಡೇಟಾ ಸ್ಥಿರತೆ ಮತ್ತು ಸಂಪೂರ್ಣ ಪತ್ತೆಹಚ್ಚುವಿಕೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.",

    // Add other missing keys
    sku: "SKU",
    product: "ಉತ್ಪನ್ನ",
    quantity: "ಪ್ರಮಾಣ",
    reason: "ಕಾರಣ",
    status: "ಸ್ಥಿತಿ",
    actions: "ಕ್ರಿಯೆಗಳು",
    returnId: "ರಿಟರ್ನ್ ಐಡಿ",
    returnType: "ರಿಟರ್ನ್ ಪ್ರಕಾರ",
    searchReturns: "ರಿಟರ್ನ್ ಐಡಿ, ಮಾರಾಟಗಾರ ಅಥವಾ ಉತ್ಪನ್ನದ ಮೂಲಕ ಹುಡುಕಿ...",
    allVendors: "ಎಲ್ಲಾ ಮಾರಾಟಗಾರರು",
    allStatuses: "ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು",
    pendingApproval: "ಅನುಮೋದನೆಗಾಗಿ ಬಾಕಿ ಇದೆ",
    approved: "ಅನುಮೋದಿಸಲಾಗಿದೆ",
    readyForPickup: "ಪಿಕಪ್‌ಗೆ ಸಿದ್ಧ",
    pickedUp: "ಪಿಕಪ್ ಮಾಡಲಾಗಿದೆ",
    nonMoving: "ಚಲಿಸದ",
    creatingProductReturns: "ಉತ್ಪನ್ನ ರಿಟರ್ನ್ಸ್ ರಚಿಸುವುದು",
    creatingVendorReturns: "ವೆಂಡರ್ ರಿಟರ್ನ್ಸ್ ರಚಿಸುವುದು",
    productReturnsDesc: "ಹಾನಿಗೊಳಗಾದ ಅಥವಾ ದೋಷಯುಕ್ತ ಉತ್ಪನ್ನಗಳನ್ನು ಮಾರಾಟಗಾರರಿಗೆ ಹಿಂತಿರುಗಿಸಲು ಉತ್ಪನ್ನ ರಿಟರ್ನ್‌ಗಳನ್ನು ರಚಿಸಿ.",
    vendorReturnsDesc: "ದಾಸ್ತಾನು ಆಪ್ಟಿಮೈಸೇಶನ್‌ಗಾಗಿ ಮಾರಾಟಗಾರರಿಗೆ ದಾಸ್ತಾನು ಹಿಂತಿರುಗಿಸಲು ವೆಂಡರ್ ರಿಟರ್ನ್‌ಗಳನ್ನು ರಚಿಸಿ.",
    each_status_change_triggers: "ಪ್ರತಿ ಸ್ಥಿತಿ ಬದಲಾವಣೆಯು ಈ ಕ್ರಿಯೆಗಳನ್ನು ಪ್ರಚೋದಿಸುತ್ತದೆ:",
    approvalKey: "ಅನುಮೋದನೆ",
    approvalDesc: "ನಿರ್ವಹಣಾ ಅನುಮೋದನೆಗಾಗಿ ವಿನಂತಿ",
    preparationKey: "ಸಿದ್ಧತೆ",
    preparationDesc: "ಮಾರಾಟಗಾರರ ಪಿಕಪ್‌ಗಾಗಿ ವಸ್ತುಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಿ",
    vendorNotifKey: "ಮಾರಾಟಗಾರರ ಸೂಚನೆ",
    vendorNotifDesc: "ಪಿಕಪ್‌ಗಾಗಿ ಮಾರಾಟಗಾರರಿಗೆ ಸೂಚಿಸಿ",
    documentationKey2: "ದಾಖಲಾತಿ",
    documentationDesc2: "ರಿಟರ್ನ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ದಾಖಲಿಸಿ",
    financialProcessingKey: "ಆರ್ಥಿಕ ಪ್ರಕ್ರಿಯೆ",
    financialProcessingDesc: "ಡೆಬಿಟ್ ನೋಟ್ ರಚಿಸಿ ಮತ್ತು ಖಾತೆಗಳನ್ನು ನವೀಕರಿಸಿ",
    this_integration_ensures: "ಈ ಏಕೀಕರಣವು ಈ ಪ್ರಯೋಜನಗಳನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ:",
    dataIntegrityKey: "ಡೇಟಾ ಸಮಗ್ರತೆ",
    dataIntegrityDesc: "ಎಲ್ಲಾ ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಸ್ಥಿರ ಮತ್ತು ನಿಖರವಾದ ಮಾಹಿತಿ",
    auditTrailKey: "ಆಡಿಟ್ ಟ್ರೇಲ್",
    auditTrailDesc: "ಪ್ರತಿ ರಿಟರ್ನ್‌ನ ಸಂಪೂರ್ಣ ಇತಿಹಾಸ ಮತ್ತು ಕ್ರಿಯೆಗಳು",
    autoUpdatesKey: "ಸ್ವಯಂಚಾಲಿತ ನವೀಕರಣಗಳು",
    autoUpdatesDesc: "ರಿಟರ್ನ್ ಸ್ಥಿತಿಗಳು ಬದಲಾದಾಗ ಇತರ ವ್ಯವಸ್ಥೆಗಳು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನವೀಕರಿಸಲ್ಪಡುತ್ತವೆ",
    vendorCommKey: "ಮಾರಾಟಗಾರರ ಸಂವಹನ",
    vendorCommDesc: "ರಿಟರ್ನ್ ಸ್ಥಿತಿಗಳು ಮತ್ತು ಪಿಕಪ್ ವೇಳೆಗಳ ಬಗ್ಗೆ ಮಾರಾಟಗಾರರಿಗೆ ಸ್ವಯಂಚಾಲಿತ ಸೂಚನೆಗಳು",
  },
  // Other language translations would follow a similar pattern
  te: {
    "pageTitle": "రిటర్న్ మేనేజ్‌మెంట్ మాన్యువల్",
    "backToManual": "మాన్యువల్‌కు తిరిగి వెళ్లు",
    "description": "దెబ్బతిన్న వస్తువులను నిర్వహించడం, ఉత్పత్తులను విక్రేతలకు తిరిగి పంపడం, విక్రేత రిటర్న్‌లను నిర్వహించడం మరియు సమగ్ర ఆడిట్ ట్రయల్స్‌తో డెబిట్ నోట్‌లను ట్రాక్ చేయడం వంటి పూర్తి రిటర్న్ మేనేజ్‌మెంట్ ప్రక్రియను వివరించే గైడ్.",
    "step1Title": "రిటర్న్ మేనేజ్‌మెంట్ డాష్‌బోర్డ్ అవలోకనం",
    "step1Intro": "రిటర్న్ మేనేజ్‌మెంట్ డాష్‌బోర్డ్ అనేది మీ రిటైల్ ఆపరేషన్‌లో అన్ని రకాల రిటర్న్‌లను నిర్వహించడానికి మీ కేంద్ర కమాండ్ సెంటర్. ఇది విక్రేతలకు ఉత్పత్తి రిటర్న్‌లు, ఇన్వెంటరీ ఆప్టిమైజేషన్ కోసం విక్రేత రిటర్న్‌లు మరియు డెబిట్ నోట్‌ల ద్వారా పూర్తి ఆర్థిక సయోధ్యను సమగ్రంగా ట్రాక్ చేయడానికి మరియు నిర్వహించడానికి ఉపయోగపడుతుంది.",
    "step2Title": "దెబ్బతిన్న వస్తువుల ట్యాబ్ - రిటర్న్ అవకాశాలను గుర్తించడం",
    "step2Intro": "ఈ ట్యాబ్ ఇంకా తిరిగి ఇవ్వని కొనుగోలు ఆర్డర్‌ల నుండి దెబ్బతిన్న వస్తువులను గుర్తిస్తుంది, ఇది రిటర్న్‌లను ప్రాసెస్ చేయడానికి ఒక 'చేయాల్సిన పనుల' జాబితాను సృష్టిస్తుంది. ఇది దెబ్బతిన్న ఇన్వెంటరీని విక్రేత రిటర్న్‌లుగా మార్చడానికి మీ ప్రారంభ స్థానం.",
    "step3Title": "యాక్టివ్ రిటర్న్‌ల ట్యాబ్ - అన్ని రిటర్న్ రకాలను నిర్వహించడం",
    "step3Intro": "యాక్టివ్ రిటర్న్‌ల ట్యాబ్, ఉత్పత్తి రిటర్న్‌లు (దెబ్బతిన్న వస్తువులు) మరియు విక్రేత రిటర్న్‌లు (ఇన్వెంటరీ ఆప్టిమైజేషన్) రెండింటినీ ఒకే, నిర్వహించదగిన వీక్షణలో ఏకం చేస్తుంది. కొనసాగుతున్న అన్ని రిటర్న్‌లపై పురోగతిని పర్యవేక్షించడానికి మరియు చర్య తీసుకోవడానికి ఇది ఒక ముఖ్యమైన స్థానం.",
    "step4Title": "డెబిట్ నోట్‌ల ట్యాబ్ - ఆర్థిక సయోధ్య",
    "step4Intro": "డెబిట్ నోట్‌ల ట్యాబ్ రిటర్న్‌ల నుండి ఉత్పత్తి అయిన అన్ని ఆర్థిక డాక్యుమెంట్‌లను ట్రాక్ చేస్తుంది. అకౌంటింగ్ మరియు విక్రేత సయోధ్య కోసం ఇవి చాలా కీలకం, విక్రేతల నుండి రావలసిన క్రెడిట్‌ల యొక్క సరైన డాక్యుమెంటేషన్‌ను నిర్ధారిస్తుంది.",
    "step5Title": "రిటర్న్‌లను సృష్టించడం - వర్క్‌ఫ్లో మేనేజ్‌మెంట్",
    "step5Intro": "రిటర్న్ మేనేజ్‌మెంట్ సిస్టమ్ రెండు ప్రాథమిక వర్క్‌ఫ్లోలను సపోర్ట్ చేస్తుంది: ఉత్పత్తి రిటర్న్‌లు (దెబ్బతిన్న/లోపభూయిష్ట వస్తువుల కోసం) మరియు విక్రేత రిటర్న్‌లు (ఇన్వెంటరీ ఆప్టిమైజేషన్ కోసం). ప్రతి దానికీ దాని స్వంత సృష్టి ప్రక్రియ మరియు ఆమోద వర్క్‌ఫ్లో ఉంటాయి.",
    "step6Title": "రిటర్న్ స్థితి వర్క్‌ఫ్లో & ప్రాసెసింగ్",
    "step6Intro": "రిటర్న్‌లు సృష్టి నుండి పూర్తి అయ్యే వరకు ఒక నిర్దిష్ట వర్క్‌ఫ్లోను అనుసరిస్తాయి. ఈ స్థితులను అర్థం చేసుకోవడం వలన మీరు ప్రక్రియను సమర్థవంతంగా నిర్వహించడానికి మరియు విక్రేతలతో ప్రభావవంతంగా కమ్యూనికేట్ చేయడానికి సహాయపడుతుంది.",
    "step7Title": "కొనుగోలు ఆర్డర్‌లు & ఇన్వెంటరీతో అనుసంధానం",
    "step7Intro": "రిటర్న్ మేనేజ్‌మెంట్ అనేది మీ కొనుగోలు ఆర్డర్ మరియు ఇన్వెంటరీ సిస్టమ్‌లతో గట్టిగా అనుసంధానించబడి ఉంటుంది, ఇది ప్రారంభ రసీదు నుండి రిటర్న్ పూర్తయ్యే వరకు డేటా స్థిరత్వం మరియు పూర్తి ట్రేసబిలిటీని నిర్ధారిస్తుంది.",

    "dashboardScreenshotTitle": "రిటర్న్ మేనేజ్‌మెంట్ డాష్‌బోర్డ్ - ప్రధాన వీక్షణ",
    "returnManagement": "రిటర్న్ మేనేజ్‌మెంట్",
    "manageAllReturns": "అన్ని ఉత్పత్తి మరియు విక్రేత రిటర్న్‌లను నిర్వహించండి, స్థితిని ట్రాక్ చేయండి మరియు డెబిట్ నోట్‌లను నిర్వహించండి.",
    "createProductReturn": "ఉత్పత్తి రిటర్న్‌ను సృష్టించండి",
    "createVendorReturn": "విక్రేత రిటర్న్‌ను సృష్టించండి",
    "productReturns": "ఉత్పత్తి రిటర్న్‌లు",
    "vendorReturns": "విక్రేత రిటర్న్‌లు",
    "pending": "పెండింగ్‌లో ఉంది",
    "totalValue": "మొత్తం విలువ",
    "completed": "పూర్తయింది",
    "debitNotes": "డెబిట్ నోట్‌లు",
    "statsDescProduct": "దెబ్బతిన్న/లోపభూయిష్ట వస్తువులను విక్రేతలకు తిరిగి పంపడం",
    "statsDescVendor": "ఇన్వెంటరీ ఆప్టిమైజేషన్ రిటర్న్‌లు (నెమ్మదిగా కదిలే, గడువు ముగియబోతున్నవి)",
    "statsDescPending": "ఆమోదం లేదా ప్రాసెసింగ్ కోసం వేచి ఉన్న రిటర్న్‌లు",
    "statsDescValue": "అన్ని రిటర్న్‌ల యొక్క ఆర్థిక ప్రభావం",
    "statsDescCompleted": "విజయవంతంగా ప్రాసెస్ చేయబడిన రిటర్న్‌లు",
    "statsDescDebit": "విక్రేత సయోధ్య కోసం ఉత్పత్తి అయిన ఆర్థిక డాక్యుమెంట్‌లు",

    "damagedGoodsScreenshotTitle": "దెబ్బతిన్న వస్తువుల ట్యాబ్ - రిటర్న్ కోసం వేచి ఉన్న వస్తువులు",
    "damagedGoodsAwaiting": "రిటర్న్ కోసం వేచి ఉన్న దెబ్బతిన్న వస్తువులు ({count})",
    "list": "జాబితా",
    "grid": "గ్రిడ్",
    "poReference": "PO-2024-0521-001",
    "organicApples": "సేంద్రీయ ఆపిల్స్ - ప్రీమియం",
    "waterDamage": "రవాణా సమయంలో నీటి వల్ల దెబ్బతిన్నది",
    "units": "{count} యూనిట్లు",
    "vendor": "విక్రేత",
    "freshFarmSupplies": "ఫ్రెష్ ఫార్మ్ సప్లైస్",
    "receivedDate": "లభించిన తేదీ",
    "may20": "మే 20, 2024",
    "unitCost": "యూనిట్ ధర",
    "initiateReturn": "రిటర్న్‌ను ప్రారంభించండి",
    "dairyMilk": "డైరీ మిల్క్ - 1L కార్టన్‌లు",
    "packagingDefect": "ప్యాకేజింగ్ లోపం, లీకేజ్",
    "sunriseDairy": "సన్‌రైజ్ డైరీ కో.",
    "may18": "మే 18, 2024",

    "activeReturnsScreenshotTitle": "యాక్టివ్ రిటర్న్‌ల ట్యాబ్ - ఏకీకృత రిటర్న్ మేనేజ్‌మెంట్",
    "allReturns": "అన్ని రిటర్న్‌లు ({count})",
    "searchReturns": "రిటర్న్ ID, విక్రేత లేదా ఉత్పత్తి ద్వారా శోధించండి...",
    "allVendors": "అన్ని విక్రేతలు",
    "allStatuses": "అన్ని స్థితులు",
    "pendingApproval": "ఆమోదం కోసం పెండింగ్‌లో ఉంది",
    "approved": "ఆమోదించబడింది",
    "readyForPickup": "పికప్ కోసం సిద్ధంగా ఉంది",
    "returnId": "రిటర్న్ ID",
    "returnType": "రిటర్న్ రకం",
    "product": "ఉత్పత్తి",
    "quantity": "పరిమాణం",
    "reason": "కారణం",
    "status": "స్థితి",
    "actions": "చర్యలు",
    "retId1": "RET-2024-001",
    "productReturnType": "ఉత్పత్తి రిటర్న్",
    "sku": "SKU",
    "damaged": "దెబ్బతిన్నది",
    "approve": "ఆమోదించండి",
    "vrId1": "VR-2024-008",
    "vendorReturnType": "విక్రేత రిటర్న్",
    "seasonalDecorations": "సీజనల్ డెకరేషన్స్",
    "holidaySupplies": "హాలిడే సప్లైస్ ఇంక్",
    "nonMoving": "కదలనివి",
    "markPickedUp": "పికప్ చేయబడినట్లు గుర్తించండి",

    "debitNotesScreenshotTitle": "డెబిట్ నోట్‌ల ట్యాబ్ - ఆర్థిక డాక్యుమెంటేషన్",
    "returnDebitNotes": "రిటర్న్-సంబంధిత డెబిట్ నోట్‌లు",
    "dnId1": "DN-2024-0015",
    "dnDesc1": "దెబ్బతిన్న సేంద్రీయ ఆపిల్స్‌కు డెబిట్ నోట్ - రవాణా సమయంలో నీటి వల్ల దెబ్బతిన్నది",
    "dnId2": "DN-2024-0014",
    "dnDesc2": "విక్రేత రిటర్న్ - సీజనల్ వస్తువులు కదలని ఇన్వెంటరీ ఆప్టిమైజేషన్",

    "createProductReturnScreenshotTitle": "ఉత్పత్తి రిటర్న్‌ను సృష్టించండి ఫారం",
    "createProductReturnFormTitle": "ఉత్పత్తి రిటర్న్‌ను సృష్టించండి",
    "createProductReturnFormDesc": "దెబ్బతిన్న లేదా లోపభూయిష్ట ఉత్పత్తులను విక్రేతలకు తిరిగి పంపండి",
    "purchaseOrder": "కొనుగోలు ఆర్డర్ *",
    "selectPO": "లభించిన కొనుగోలు ఆర్డర్‌ను ఎంచుకోండి",
    "returnQuantity": "రిటర్న్ పరిమాణం *",
    "returnReason": "రిటర్న్ కారణం *",
    "selectReason": "రిటర్న్ కారణాన్ని ఎంచుకోండి",
    "expired": "గడువు ముగిసింది",
    "qualityIssue": "నాణ్యత సమస్య",
    "wrongItem": "తప్పుడు వస్తువు",
    "defective": "లోపభూయిష్టమైనది",
    "descriptionField": "వివరణ",
    "describeIssue": "ఉత్పత్తిలోని సమస్యను వివరించండి...",
    "cancel": "రద్దు చేయండి",
    "createReturn": "రిటర్న్‌ను సృష్టించండి",

    "createVendorReturnScreenshotTitle": "విక్రేత రిటర్న్‌ను సృష్టించండి ఫారం",
    "createVendorReturnFormTitle": "విక్రేత రిటర్న్‌ను సృష్టించండి",
    "createVendorReturnFormDesc": "ఆప్టిమైజేషన్ కోసం ఇన్వెంటరీని విక్రేతలకు తిరిగి పంపండి",
    "selectVendor": "విక్రేతను ఎంచుకోండి",
    "selectReturnType": "రిటర్న్ రకాన్ని ఎంచుకోండి",
    "nearExpiry": "గడువు ముగియబోతున్నది",
    "slowMoving": "నెమ్మదిగా కదిలే",
    "overstock": "ఓవర్‌స్టాక్",
    "addProductsToReturn": "రిటర్న్‌కు ఉత్పత్తులను జోడించండి",
    "searchAndSelect": "ఈ రిటర్న్‌లో చేర్చడానికి ఉత్పత్తులను శోధించండి మరియు ఎంచుకోండి",
    "searchProducts": "ఉత్పత్తులను శోధించండి...",
    "stock": "స్టాక్: {count} యూనిట్లు",
    "cost": "ఖర్చు: ₹{value}",
    "add": "జోడించండి",
    "createVendorReturnButton": "విక్రేత రిటర్న్‌ను సృష్టించండి",

    "statusWorkflowScreenshotTitle": "రిటర్న్ స్థితి పురోగతి",
    "productReturnWorkflow": "ఉత్పత్తి రిటర్న్ వర్క్‌ఫ్లో",
    "pickedUp": "పికప్ చేయబడింది",
    "statusPending": "ఆమోదం కోసం పెండింగ్‌లో ఉంది: రిటర్న్ అభ్యర్థన సృష్టించబడింది, మేనేజ్‌మెంట్ ఆమోదం కోసం వేచి ఉంది",
    "statusApproved": "ఆమోదించబడింది: రిటర్న్ ఆమోదించబడింది, విక్రేత పికప్ కోసం వస్తువులను సిద్ధం చేస్తోంది",
    "statusReady": "పికప్ కోసం సిద్ధంగా ఉంది: వస్తువులు సిద్ధంగా ఉన్నాయి, సేకరణ కోసం విక్రేతకు తెలియజేయబడింది",
    "statusPicked": "పికప్ చేయబడింది: విక్రేత వస్తువులను సేకరించారు, తుది ప్రాసెసింగ్ కోసం వేచి ఉంది",
    "statusCompleted": "పూర్తయింది: రిటర్న్ ప్రాసెస్ చేయబడింది, డెబిట్ నోట్ ఉత్పత్తి చేయబడింది, ఆర్థిక సయోధ్య పూర్తయింది",

    "integrationScreenshotTitle": "అనుసంధాన పాయింట్లు",
    "integrationOverview": "సిస్టమ్ అనుసంధాన అవలోకనం",
    "poIntegration": "కొనుగోలు ఆర్డర్‌ల అనుసంధానం",
    "poIntegrationDesc": "పూర్తి ట్రేసబిలిటీ కోసం ఉత్పత్తి రిటర్న్‌లు స్వయంచాలకంగా అసలు POతో అనుసంధానించబడతాయి",
    "inventoryUpdates": "ఇన్వెంటరీ అప్‌డేట్‌లు",
    "inventoryUpdatesDesc": "రిటర్న్‌లు ప్రాసెస్ చేయబడినప్పుడు స్టాక్ స్థాయిలు స్వయంచాలకంగా సర్దుబాటు అవుతాయి",
    "financialReconciliation": "ఆర్థిక సయోధ్య",
    "financialReconciliationDesc": "డెబిట్ నోట్‌లు స్వయంచాలకంగా ఉత్పత్తి చేయబడతాయి మరియు విక్రేత ఖాతాలకు అనుసంధానించబడతాయి",

    "sku": "SKU",
    "product": "ఉత్పత్తి",
    "quantity": "పరిమాణం",
    "reason": "కారణం",
    "status": "స్థితి",
    "actions": "చర్యలు",
    "returnId": "రిటర్న్ ID",
    "returnType": "రిటర్న్ రకం",
    "searchReturns": "రిటర్న్ ID, విక్రేత లేదా ఉత్పత్తి ద్వారా శోధించండి...",
    "allVendors": "అన్ని విక్రేతలు",
    "allStatuses": "అన్ని స్థితులు",
    "pendingApproval": "ఆమోదం కోసం పెండింగ్‌లో ఉంది",
    "approved": "ఆమోదించబడింది",
    "readyForPickup": "పికప్ కోసం సిద్ధంగా ఉంది",
    "pickedUp": "పికప్ చేయబడింది",
    "nonMoving": "కదలనివి",
    "creatingProductReturns": "ఉత్పత్తి రిటర్న్‌లను సృష్టిస్తోంది",
    "creatingVendorReturns": "విక్రేత రిటర్న్‌లను సృష్టిస్తోంది",
    "productReturnsDesc": "దెబ్బతిన్న లేదా లోపభూయిష్ట ఉత్పత్తులను విక్రేతలకు తిరిగి పంపడానికి ఉత్పత్తి రిటర్న్‌లను సృష్టించండి.",
    "vendorReturnsDesc": "ఆప్టిమైజేషన్ కోసం ఇన్వెంటరీని విక్రేతలకు తిరిగి పంపడానికి విక్రేత రిటర్న్‌లను సృష్టించండి.",
    "each_status_change_triggers": "ప్రతి స్థితి మార్పు ఈ చర్యలను ప్రేరేపిస్తుంది:",
    "approvalKey": "ఆమోదం",
    "approvalDesc": "మేనేజ్‌మెంట్ ఆమోదం కోసం అభ్యర్థన",
    "preparationKey": "సన్నాహం",
    "preparationDesc": "విక్రేత పికప్ కోసం వస్తువులను సిద్ధం చేయండి",
    "vendorNotifKey": "విక్రేత నోటిఫికేషన్",
    "vendorNotifDesc": "పికప్ కోసం విక్రేతకు తెలియజేయండి",
    "documentationKey2": "డాక్యుమెంటేషన్",
    "documentationDesc2": "రిటర్న్ ప్రక్రియను డాక్యుమెంట్ చేయండి",
    "financialProcessingKey": "ఆర్థిక ప్రాసెసింగ్",
    "financialProcessingDesc": "డెబిట్ నోట్‌ను ఉత్పత్తి చేయండి మరియు ఖాతాలను అప్‌డేట్ చేయండి",
    "this_integration_ensures": "ఈ అనుసంధానం ఈ ప్రయోజనాలను నిర్ధారిస్తుంది:",
    "dataIntegrityKey": "డేటా సమగ్రత",
    "dataIntegrityDesc": "అన్ని సిస్టమ్‌లలో స్థిరమైన మరియు ఖచ్చితమైన సమాచారం",
    "auditTrailKey": "ఆడిట్ ట్రయల్",
    "auditTrailDesc": "ప్రతి రిటర్న్ కోసం పూర్తి చరిత్ర మరియు చర్యలు",
    "autoUpdatesKey": "ఆటో అప్‌డేట్‌లు",
    "autoUpdatesDesc": "రిటర్న్ స్థితి మారినప్పుడు ఇతర సిస్టమ్‌లు స్వయంచాలకంగా అప్‌డేట్ అవుతాయి",
    "vendorCommKey": "విక్రేత కమ్యూనికేషన్",
    "vendorCommDesc": "రిటర్న్ స్థితులు మరియు పికప్ సమయాల గురించి విక్రేతలకు స్వయంచాలక నోటిఫికేషన్‌లు",
  },
  ta: {
    "pageTitle": "திரும்பப் பெறுதல் மேலாண்மை கையேடு",
    "backToManual": "கையேட்டிற்குத் திரும்பு",
    "description": "சேதமடைந்த பொருட்களைக் கையாளுதல், விற்பனையாளர்களுக்கு தயாரிப்புகளைத் திரும்ப அனுப்புதல், விற்பனையாளர் திரும்பப் பெறுதலை நிர்வகித்தல் மற்றும் விரிவான தணிக்கை தடயங்களுடன் பற்றுச் சீட்டுகளை (debit notes) கண்காணித்தல் உள்ளிட்ட முழுமையான திரும்பப் பெறுதல் மேலாண்மை செயல்முறையில் தேர்ச்சி பெறுங்கள்.",
    "step1Title": "திரும்பப் பெறுதல் மேலாண்மை டாஷ்போர்டு மேலோட்டம்",
    "step1Intro": "திரும்பப் பெறுதல் மேலாண்மை டாஷ்போர்டு என்பது உங்கள் சில்லறை வர்த்தகச் செயல்பாட்டில் அனைத்து வகையான திரும்பப் பெறுதலையும் கையாள்வதற்கான உங்கள் மையக் கட்டளை மையமாகும். இது விற்பனையாளர்களுக்கான தயாரிப்பு திரும்பப் பெறுதல், சரக்கு உகப்பாக்கத்திற்கான விற்பனையாளர் திரும்பப் பெறுதல் மற்றும் பற்றுச் சீட்டுகள் (debit notes) மூலம் முழுமையான நிதி சமரசம் ஆகியவற்றை விரிவாகக் கண்காணித்து நிர்வகிக்கிறது.",
    "step2Title": "சேதமடைந்த பொருட்கள் தாவல் - திரும்பப் பெறுதல் வாய்ப்புகளை அடையாளம் காணுதல்",
    "step2Intro": "இந்தத் தாவல் இன்னும் திரும்ப அனுப்பப்படாத கொள்முதல் ஆர்டர்களில் இருந்து சேதமடைந்த பொருட்களை அடையாளம் காட்டுகிறது, இது திரும்பப் பெறுதல் செயல்முறைக்கு ஒரு 'செய்ய வேண்டியவை' பட்டியலை உருவாக்குகிறது. இது சேதமடைந்த சரக்குகளை விற்பனையாளர் திரும்பப் பெறுதலாக மாற்றுவதற்கான உங்கள் தொடக்கப் புள்ளியாகும்.",
    "step3Title": "செயலில் உள்ள திரும்பப் பெறுதல் தாவல் - அனைத்து திரும்பப் பெறுதல் வகைகளையும் நிர்வகித்தல்",
    "step3Intro": "செயலில் உள்ள திரும்பப் பெறுதல் தாவல், தயாரிப்பு திரும்பப் பெறுதல் (சேதமடைந்த பொருட்கள்) மற்றும் விற்பனையாளர் திரும்பப் பெறுதல் (சரக்கு உகப்பாக்கம்) ஆகிய இரண்டையும் ஒரே, நிர்வகிக்கக்கூடிய காட்சியில் ஒருங்கிணைக்கிறது. இங்குதான் நீங்கள் முன்னேற்றத்தைக் கண்காணித்து, நடந்து கொண்டிருக்கும் அனைத்து திரும்பப் பெறுதல் மீதும் நடவடிக்கை எடுக்கிறீர்கள்.",
    "step4Title": "பற்றுச் சீட்டுகள் (Debit Notes) தாவல் - நிதி சமரசம்",
    "step4Intro": "பற்றுச் சீட்டுகள் (Debit Notes) தாவல், திரும்பப் பெறுதலில் இருந்து உருவாக்கப்பட்ட அனைத்து நிதி ஆவணங்களையும் கண்காணிக்கிறது. இவை கணக்கியல் நோக்கங்களுக்கும் விற்பனையாளர் சமரசத்திற்கும் முக்கியமானவை, விற்பனையாளர்களுக்குச் செலுத்த வேண்டிய வரவுகளின் சரியான ஆவணங்களை உறுதி செய்கின்றன.",
    "step5Title": "திரும்பப் பெறுதலை உருவாக்குதல் - பணிப்பாய்வு மேலாண்மை",
    "step5Intro": "திரும்பப் பெறுதல் மேலாண்மை அமைப்பு இரண்டு முதன்மை பணிப்பாய்வுகளை ஆதரிக்கிறது: தயாரிப்பு திரும்பப் பெறுதல் (சேதமடைந்த/குறைபாடுள்ள பொருட்களுக்கு) மற்றும் விற்பனையாளர் திரும்பப் பெறுதல் (சரக்கு உகப்பாக்கத்திற்கு). ஒவ்வொன்றிற்கும் அதன் சொந்த உருவாக்கச் செயல்முறை மற்றும் ஒப்புதல் பணிப்பாய்வு உள்ளது.",
    "step6Title": "திரும்பப் பெறுதல் நிலை பணிப்பாய்வு மற்றும் செயல்முறைப்படுத்தல்",
    "step6Intro": "திரும்பப் பெறுதல் உருவாக்கத்திலிருந்து நிறைவு வரை ஒரு கட்டமைக்கப்பட்ட பணிப்பாய்வைப் பின்பற்றுகிறது. இந்த நிலைகளைப் புரிந்துகொள்வது, செயல்முறையை திறமையாக நிர்வகிக்கவும், விற்பனையாளர்களுடன் திறம்பட தொடர்பு கொள்ளவும் உங்களுக்கு உதவுகிறது.",
    "step7Title": "கொள்முதல் ஆர்டர்கள் மற்றும் சரக்குகளுடன் ஒருங்கிணைத்தல்",
    "step7Intro": "திரும்பப் பெறுதல் மேலாண்மை, உங்கள் கொள்முதல் ஆர்டர் மற்றும் சரக்கு அமைப்புகளுடன் இறுக்கமாக ஒருங்கிணைக்கப்பட்டுள்ளது, இது ஆரம்ப ரசீதிலிருந்து திரும்பப் பெறுதல் நிறைவு வரை தரவு நிலைத்தன்மையையும் முழுமையான கண்டறியும் தன்மையையும் உறுதி செய்கிறது.",

    "dashboardScreenshotTitle": "திரும்பப் பெறுதல் மேலாண்மை டாஷ்போர்டு - முக்கிய காட்சி",
    "returnManagement": "திரும்பப் பெறுதல் மேலாண்மை",
    "manageAllReturns": "அனைத்து தயாரிப்பு மற்றும் விற்பனையாளர் திரும்பப் பெறுதலையும் நிர்வகிக்கவும், நிலைகளைக் கண்காணிக்கவும், மற்றும் பற்றுச் சீட்டுகளைக் கையாளவும்.",
    "createProductReturn": "தயாரிப்பு திரும்பப் பெறுதலை உருவாக்கு",
    "createVendorReturn": "விற்பனையாளர் திரும்பப் பெறுதலை உருவாக்கு",
    "productReturns": "தயாரிப்பு திரும்பப் பெறுதல்",
    "vendorReturns": "விற்பனையாளர் திரும்பப் பெறுதல்",
    "pending": "நிலுவையில் உள்ளது",
    "totalValue": "மொத்த மதிப்பு",
    "completed": "முடிந்தது",
    "debitNotes": "பற்றுச் சீட்டுகள்",
    "statsDescProduct": "சேதமடைந்த/குறைபாடுள்ள பொருட்களை விற்பனையாளர்களுக்குத் திரும்ப அனுப்புதல்",
    "statsDescVendor": "சரக்கு உகப்பாக்கத் திரும்பப் பெறுதல் (மெதுவாக நகரும், காலாவதிக்கு அருகில்)",
    "statsDescPending": "ஒப்புதல் அல்லது செயல்முறைப்படுத்தலுக்காகக் காத்திருக்கும் திரும்பப் பெறுதல்",
    "statsDescValue": "அனைத்து திரும்பப் பெறுதல்களின் நிதி தாக்கம்",
    "statsDescCompleted": "வெற்றிகரமாகச் செயல்முறைப்படுத்தப்பட்ட திரும்பப் பெறுதல்",
    "statsDescDebit": "விற்பனையாளர் சமரசத்திற்காக உருவாக்கப்பட்ட நிதி ஆவணங்கள்",

    "damagedGoodsScreenshotTitle": "சேதமடைந்த பொருட்கள் தாவல் - திரும்பப் பெறுதலுக்காகக் காத்திருக்கும் பொருட்கள்",
    "damagedGoodsAwaiting": "திரும்பப் பெறுதலுக்காகக் காத்திருக்கும் சேதமடைந்த பொருட்கள் ({count})",
    "list": "பட்டியல்",
    "grid": "கட்டம்",
    "poReference": "PO-2024-0521-001",
    "organicApples": "ஆர்கானிக் ஆப்பிள்கள் - பிரீமியம்",
    "waterDamage": "போக்குவரத்தின் போது நீர் சேதம்",
    "units": "{count} அலகுகள்",
    "vendor": "விற்பனையாளர்",
    "freshFarmSupplies": "ஃப்ரெஷ் ஃபார்ம் சப்ளைஸ்",
    "receivedDate": "பெற்ற தேதி",
    "may20": "மே 20, 2024",
    "unitCost": "அலகு விலை",
    "initiateReturn": "திரும்பப் பெறுதலைத் தொடங்கு",
    "dairyMilk": "டெய்ரி மில்க் - 1L கார்ட்டூன்கள்",
    "packagingDefect": "பேக்கேஜிங் குறைபாடு, கசிவு",
    "sunriseDairy": "சூர்யோதயம் டெய்ரி கோ.",
    "may18": "மே 18, 2024",

    "activeReturnsScreenshotTitle": "செயலில் உள்ள திரும்பப் பெறுதல் தாவல் - ஒருங்கிணைந்த திரும்பப் பெறுதல் மேலாண்மை",
    "allReturns": "அனைத்து திரும்பப் பெறுதல்களும் ({count})",
    "searchReturns": "திரும்பப் பெறுதல் ஐடி, விற்பனையாளர் அல்லது தயாரிப்பு மூலம் தேடு...",
    "allVendors": "அனைத்து விற்பனையாளர்களும்",
    "allStatuses": "அனைத்து நிலைகளும்",
    "pendingApproval": "ஒப்புதல் நிலுவையில் உள்ளது",
    "approved": "ஒப்புதல் அளிக்கப்பட்டது",
    "readyForPickup": "எடுத்துச் செல்லத் தயார்",
    "returnId": "திரும்பப் பெறுதல் ஐடி",
    "returnType": "திரும்பப் பெறுதல் வகை",
    "product": "தயாரிப்பு",
    "quantity": "அளவு",
    "reason": "காரணம்",
    "status": "நிலை",
    "actions": "செயல்கள்",
    "retId1": "RET-2024-001",
    "productReturnType": "தயாரிப்பு திரும்பப் பெறுதல்",
    "sku": "SKU",
    "damaged": "சேதமடைந்தது",
    "approve": "ஒப்புதல் அளி",
    "vrId1": "VR-2024-008",
    "vendorReturnType": "விற்பனையாளர் திரும்பப் பெறுதல்",
    "seasonalDecorations": "பருவகால அலங்காரங்கள்",
    "holidaySupplies": "ஹாலிடே சப்ளைஸ் இன்க்",
    "nonMoving": "நகராதவை",
    "markPickedUp": "எடுத்துச் செல்லப்பட்டதாகக் குறி",

    "debitNotesScreenshotTitle": "பற்றுச் சீட்டுகள் (Debit Notes) தாவல் - நிதி ஆவணங்கள்",
    "returnDebitNotes": "திரும்பப் பெறுதல்-தொடர்பான பற்றுச் சீட்டுகள்",
    "dnId1": "DN-2024-0015",
    "dnDesc1": "சேதமடைந்த ஆர்கானிக் ஆப்பிள்களுக்கான பற்றுச் சீட்டு - போக்குவரத்தின் போது நீர் சேதம்",
    "dnId2": "DN-2024-0014",
    "dnDesc2": "விற்பனையாளர் திரும்பப் பெறுதல் - பருவகால பொருட்கள் நகராத சரக்கு உகப்பாக்கம்",

    "createProductReturnScreenshotTitle": "தயாரிப்பு திரும்பப் பெறுதல் படிவத்தை உருவாக்கு",
    "createProductReturnFormTitle": "தயாரிப்பு திரும்பப் பெறுதலை உருவாக்கு",
    "createProductReturnFormDesc": "சேதமடைந்த அல்லது குறைபாடுள்ள தயாரிப்புகளை விற்பனையாளர்களுக்குத் திரும்ப அனுப்பு",
    "purchaseOrder": "கொள்முதல் ஆர்டர் *",
    "selectPO": "பெறப்பட்ட கொள்முதல் ஆர்டரைத் தேர்ந்தெடு",
    "returnQuantity": "திரும்பப் பெறுதல் அளவு *",
    "returnReason": "திரும்பப் பெறுதல் காரணம் *",
    "selectReason": "திரும்பப் பெறுதல் காரணத்தைத் தேர்ந்தெடு",
    "expired": "காலாவதியானது",
    "qualityIssue": "தர சிக்கல்",
    "wrongItem": "தவறான பொருள்",
    "defective": "குறைபாடுள்ளது",
    "descriptionField": "விளக்கம்",
    "describeIssue": "தயாரிப்புடன் உள்ள சிக்கலை விவரி...",
    "cancel": "ரத்துசெய்",
    "createReturn": "திரும்பப் பெறுதலை உருவாக்கு",

    "createVendorReturnScreenshotTitle": "விற்பனையாளர் திரும்பப் பெறுதல் படிவத்தை உருவாக்கு",
    "createVendorReturnFormTitle": "விற்பனையாளர் திரும்பப் பெறுதலை உருவாக்கு",
    "createVendorReturnFormDesc": "உகப்பாக்கத்திற்காக சரக்குகளை விற்பனையாளர்களுக்குத் திரும்ப அனுப்பு",
    "selectVendor": "விற்பனையாளரைத் தேர்ந்தெடு",
    "selectReturnType": "திரும்பப் பெறுதல் வகையைத் தேர்ந்தெடு",
    "nearExpiry": "காலாவதிக்கு அருகில்",
    "slowMoving": "மெதுவாக நகரும்",
    "overstock": "அதிகப்படியான சரக்கு",
    "addProductsToReturn": "திரும்பப் பெறுதலுக்குப் பொருட்களைச் சேர்",
    "searchAndSelect": "இந்த திரும்பப் பெறுதலில் சேர்க்க வேண்டிய தயாரிப்புகளைத் தேடித் தேர்ந்தெடு",
    "searchProducts": "தயாரிப்புகளைத் தேடு...",
    "stock": "சரக்கு: {count} அலகுகள்",
    "cost": "செலவு: ₹{value}",
    "add": "சேர்",
    "createVendorReturnButton": "விற்பனையாளர் திரும்பப் பெறுதலை உருவாக்கு",

    "statusWorkflowScreenshotTitle": "திரும்பப் பெறுதல் நிலை முன்னேற்றம்",
    "productReturnWorkflow": "தயாரிப்பு திரும்பப் பெறுதல் பணிப்பாய்வு",
    "pickedUp": "எடுத்துச் செல்லப்பட்டது",
    "statusPending": "ஒப்புதல் நிலுவையில் உள்ளது: திரும்பப் பெறுதல் கோரிக்கை உருவாக்கப்பட்டது, மேலாண்மை ஒப்புதலுக்காகக் காத்திருக்கிறது",
    "statusApproved": "ஒப்புதல் அளிக்கப்பட்டது: திரும்பப் பெறுதல் ஒப்புதல் அளிக்கப்பட்டது, விற்பனையாளர் எடுத்துச் செல்ல பொருட்களைத் தயார் செய்தல்",
    "statusReady": "எடுத்துச் செல்லத் தயார்: பொருட்கள் தயாராக உள்ளன, சேகரிப்புக்காக விற்பனையாளருக்குத் தெரிவிக்கப்பட்டுள்ளது",
    "statusPicked": "எடுத்துச் செல்லப்பட்டது: விற்பனையாளர் பொருட்களைச் சேகரித்துள்ளார், இறுதி செயல்முறைப்படுத்தலுக்காகக் காத்திருக்கிறது",
    "statusCompleted": "முடிந்தது: திரும்பப் பெறுதல் செயல்முறைப்படுத்தப்பட்டது, பற்றுச் சீட்டு (debit note) உருவாக்கப்பட்டது, நிதி சமரசம் நிறைவடைந்தது",

    "integrationScreenshotTitle": "ஒருங்கிணைப்பு புள்ளிகள்",
    "integrationOverview": "கணினி ஒருங்கிணைப்பு மேலோட்டம்",
    "poIntegration": "கொள்முதல் ஆர்டர்கள் ஒருங்கிணைப்பு",
    "poIntegrationDesc": "தயாரிப்பு திரும்பப் பெறுதல், முழுமையான கண்டறியும் தன்மைக்காக அசல் PO உடன் தானாகவே இணைக்கப்படும்",
    "inventoryUpdates": "சரக்கு புதுப்பிப்புகள்",
    "inventoryUpdatesDesc": "திரும்பப் பெறுதல் செயல்முறைப்படுத்தப்படும் போது சரக்கு நிலைகள் தானாகவே சரிசெய்யப்படும்",
    "financialReconciliation": "நிதி சமரசம்",
    "financialReconciliationDesc": "பற்றுச் சீட்டுகள் (debit notes) தானாகவே உருவாக்கப்பட்டு விற்பனையாளர் கணக்குகளுடன் இணைக்கப்படும்",

    "sku": "SKU",
    "product": "தயாரிப்பு",
    "quantity": "அளவு",
    "reason": "காரணம்",
    "status": "நிலை",
    "actions": "செயல்கள்",
    "returnId": "திரும்பப் பெறுதல் ஐடி",
    "returnType": "திரும்பப் பெறுதல் வகை",
    "searchReturns": "திரும்பப் பெறுதல் ஐடி, விற்பனையாளர் அல்லது தயாரிப்பு மூலம் தேடு...",
    "allVendors": "அனைத்து விற்பனையாளர்களும்",
    "allStatuses": "அனைத்து நிலைகளும்",
    "pendingApproval": "ஒப்புதல் நிலுவையில் உள்ளது",
    "approved": "ஒப்புதல் அளிக்கப்பட்டது",
    "readyForPickup": "எடுத்துச் செல்லத் தயார்",
    "pickedUp": "எடுத்துச் செல்லப்பட்டது",
    "nonMoving": "நகராதவை",
    "creatingProductReturns": "தயாரிப்பு திரும்பப் பெறுதலை உருவாக்குகிறது",
    "creatingVendorReturns": "விற்பனையாளர் திரும்பப் பெறுதலை உருவாக்குகிறது",
    "productReturnsDesc": "சேதமடைந்த அல்லது குறைபாடுள்ள தயாரிப்புகளை விற்பனையாளர்களுக்குத் திரும்ப அனுப்புவதற்கு தயாரிப்பு திரும்பப் பெறுதலை உருவாக்கு.",
    "vendorReturnsDesc": "உகப்பாக்கத்திற்காக சரக்குகளை விற்பனையாளர்களுக்குத் திரும்ப அனுப்புவதற்கு விற்பனையாளர் திரும்பப் பெறுதலை உருவாக்கு.",
    "each_status_change_triggers": "ஒவ்வொரு நிலை மாற்றமும் இந்தச் செயல்களைத் தூண்டுகிறது:",
    "approvalKey": "ஒப்புதல்",
    "approvalDesc": "மேலாண்மை ஒப்புதலுக்கான கோரிக்கை",
    "preparationKey": "தயாரிப்பு",
    "preparationDesc": "விற்பனையாளர் எடுத்துச் செல்ல பொருட்களளைத் தயார் செய்",
    "vendorNotifKey": "விற்பனையாளர் அறிவிப்பு",
    "vendorNotifDesc": "எடுத்துச் செல்ல விற்பனையாளருக்குத் தெரிவி",
    "documentationKey2": "ஆவணப்படுத்தல்",
    "documentationDesc2": "திரும்பப் பெறுதல் செயல்முறையை ஆவணப்படுத்து",
    "financialProcessingKey": "நிதிச் செயல்முறைப்படுத்தல்",
    "financialProcessingDesc": "பற்றுச் சீட்டை உருவாக்கி கணக்குகளைப் புதுப்பி",
    "this_integration_ensures": "இந்த ஒருங்கிணைப்பு இந்த நன்மைகளை உறுதி செய்கிறது:",
    "dataIntegrityKey": "தரவு ஒருமைப்பாடு",
    "dataIntegrityDesc": "அனைத்து அமைப்புகளிலும் நிலையான மற்றும் துல்லியமான தகவல்",
    "auditTrailKey": "தணிக்கை பாதை",
    "auditTrailDesc": "ஒவ்வொரு திரும்பப் பெறுதலுக்கும் முழுமையான வரலாறு மற்றும் செயல்கள்",
    "autoUpdatesKey": "தானியங்கு புதுப்பிப்புகள்",
    "autoUpdatesDesc": "திரும்பப் பெறுதல் நிலைகள் மாறும் போது பிற அமைப்புகள் தானாகவே புதுப்பிக்கப்படும்",
    "vendorCommKey": "விற்பனையாளர் தொடர்பு",
    "vendorCommDesc": "திரும்பப் பெறுதல் நிலைகள் மற்றும் எடுத்துச் செல்லும் நேரங்கள் குறித்து விற்பனையாளர்களுக்குத் தானியங்கு அறிவிப்புகள்"
  },
  hi: {
    "pageTitle": "रिटर्न प्रबंधन मैनुअल",
    "backToManual": "मैनुअल पर वापस जाएं",
    "description": "दोषपूर्ण सामानों को संभालना, विक्रेताओं को उत्पाद वापस भेजना, विक्रेता रिटर्न का प्रबंधन करना, और व्यापक ऑडिट ट्रेल्स के साथ डेबिट नोट्स को ट्रैक करना सहित पूरी रिटर्न प्रबंधन प्रक्रिया में महारत हासिल करें।",
    "step1Title": "रिटर्न प्रबंधन डैशबोर्ड अवलोकन",
    "step1Intro": "रिटर्न प्रबंधन डैशबोर्ड आपके खुदरा संचालन में सभी प्रकार के रिटर्न को संभालने के लिए आपका केंद्रीय कमान केंद्र है। यह विक्रेताओं को उत्पाद रिटर्न, इन्वेंट्री अनुकूलन के लिए विक्रेता रिटर्न, और डेबिट नोट्स के माध्यम से पूर्ण वित्तीय समाधान का व्यापक ट्रैकिंग और प्रबंधन प्रदान करता है।",
    "step2Title": "दोषपूर्ण सामान टैब - रिटर्न के अवसरों की पहचान करना",
    "step2Intro": "यह टैब उन खरीद आदेशों से दोषपूर्ण सामानों की पहचान करता है जिन्हें अभी तक वापस नहीं किया गया है, अनिवार्य रूप से रिटर्न को संसाधित करने के लिए एक 'करने के लिए' सूची बनाता है। दोषपूर्ण इन्वेंट्री को विक्रेता रिटर्न में बदलने के लिए यह आपका शुरुआती बिंदु है।",
    "step3Title": "सक्रिय रिटर्न टैब - सभी रिटर्न प्रकारों का प्रबंधन करना",
    "step3Intro": "सक्रिय रिटर्न टैब उत्पाद रिटर्न (दोषपूर्ण सामान) और विक्रेता रिटर्न (इन्वेंट्री अनुकूलन) दोनों को एक ही, प्रबंधनीय दृश्य में समेकित करता है। यह वह जगह है जहाँ आप प्रगति की निगरानी करते हैं और सभी चल रहे रिटर्न पर कार्रवाई करते हैं।",
    "step4Title": "डेबिट नोट्स टैब - वित्तीय समाधान",
    "step4Intro": "डेबिट नोट्स टैब रिटर्न से उत्पन्न सभी वित्तीय दस्तावेजों को ट्रैक करता है। ये लेखांकन उद्देश्यों और विक्रेता समाधान के लिए महत्वपूर्ण हैं, जो विक्रेताओं द्वारा देय क्रेडिट के उचित दस्तावेज़ीकरण को सुनिश्चित करते हैं।",
    "step5Title": "रिटर्न बनाना - वर्कफ़्लो प्रबंधन",
    "step5Intro": "रिटर्न प्रबंधन प्रणाली दो प्राथमिक वर्कफ़्लो का समर्थन करती है: उत्पाद रिटर्न (दोषपूर्ण/खराब वस्तुओं के लिए) और विक्रेता रिटर्न (इन्वेंट्री अनुकूलन के लिए)। प्रत्येक की अपनी निर्माण प्रक्रिया और अनुमोदन वर्कफ़्लो है।",
    "step6Title": "रिटर्न स्थिति वर्कफ़्लो और प्रसंस्करण",
    "step6Intro": "रिटर्न निर्माण से लेकर पूर्णता तक एक संरचित वर्कफ़्लो का पालन करते हैं। इन स्थितियों को समझना आपको प्रक्रिया को कुशलतापूर्वक प्रबंधित करने और विक्रेताओं के साथ प्रभावी ढंग से संवाद करने में मदद करता है।",
    "step7Title": "खरीद आदेशों और इन्वेंट्री के साथ एकीकरण",
    "step7Intro": "रिटर्न प्रबंधन आपके खरीद आदेश और इन्वेंट्री प्रणालियों के साथ कसकर एकीकृत है, जो प्रारंभिक रसीद से लेकर रिटर्न पूरा होने तक डेटा स्थिरता और पूर्ण पता लगाने की क्षमता सुनिश्चित करता है।",

    "dashboardScreenshotTitle": "रिटर्न प्रबंधन डैशबोर्ड - मुख्य दृश्य",
    "returnManagement": "रिटर्न प्रबंधन",
    "manageAllReturns": "सभी उत्पाद और विक्रेता रिटर्न का प्रबंधन करें, स्थिति को ट्रैक करें, और डेबिट नोट्स को संभालें।",
    "createProductReturn": "उत्पाद रिटर्न बनाएं",
    "createVendorReturn": "विक्रेता रिटर्न बनाएं",
    "productReturns": "उत्पाद रिटर्न",
    "vendorReturns": "विक्रेता रिटर्न",
    "pending": "लंबित",
    "totalValue": "कुल मूल्य",
    "completed": "पूर्ण",
    "debitNotes": "डेबिट नोट्स",
    "statsDescProduct": "विक्रेताओं को दोषपूर्ण/खराब वस्तुओं की वापसी",
    "statsDescVendor": "इन्वेंट्री अनुकूलन रिटर्न (धीरे-चलने वाले, समाप्ति के करीब)",
    "statsDescPending": "अनुमोदन या प्रसंस्करण की प्रतीक्षा कर रहे रिटर्न",
    "statsDescValue": "सभी रिटर्न का वित्तीय प्रभाव",
    "statsDescCompleted": "सफलतापूर्वक संसाधित रिटर्न",
    "statsDescDebit": "विक्रेता समाधान के लिए उत्पन्न वित्तीय दस्तावेज",

    "damagedGoodsScreenshotTitle": "दोषपूर्ण सामान टैब - वापसी की प्रतीक्षा कर रहे आइटम",
    "damagedGoodsAwaiting": "वापसी की प्रतीक्षा कर रहे दोषपूर्ण सामान ({count})",
    "list": "सूची",
    "grid": "ग्रिड",
    "poReference": "PO-2024-0521-001",
    "organicApples": "ऑर्गेनिक सेब - प्रीमियम",
    "waterDamage": "परिवहन के दौरान पानी से नुकसान",
    "units": "{count} इकाइयां",
    "vendor": "विक्रेता",
    "freshFarmSupplies": "फ्रेश फार्म सप्लाइज",
    "receivedDate": "प्राप्त होने की तिथि",
    "may20": "मई 20, 2024",
    "unitCost": "इकाई लागत",
    "initiateReturn": "रिटर्न प्रारंभ करें",
    "dairyMilk": "डेयरी मिल्क - 1L कार्टन",
    "packagingDefect": "पैकेजिंग दोष, रिसाव",
    "sunriseDairy": "सनराइज डेयरी को.",
    "may18": "मई 18, 2024",

    "activeReturnsScreenshotTitle": "सक्रिय रिटर्न टैब - एकीकृत रिटर्न प्रबंधन",
    "allReturns": "सभी रिटर्न ({count})",
    "searchReturns": "रिटर्न ID, विक्रेता, या उत्पाद द्वारा खोजें...",
    "allVendors": "सभी विक्रेता",
    "allStatuses": "सभी स्थितियां",
    "pendingApproval": "अनुमोदन लंबित",
    "approved": "अनुमोदित",
    "readyForPickup": "पिकअप के लिए तैयार",
    "returnId": "रिटर्न ID",
    "returnType": "रिटर्न प्रकार",
    "product": "उत्पाद",
    "quantity": "मात्रा",
    "reason": "कारण",
    "status": "स्थिति",
    "actions": "कार्य",
    "retId1": "RET-2024-001",
    "productReturnType": "उत्पाद रिटर्न",
    "sku": "SKU",
    "damaged": "क्षतिग्रस्त",
    "approve": "अनुमोदित करें",
    "vrId1": "VR-2024-008",
    "vendorReturnType": "विक्रेता रिटर्न",
    "seasonalDecorations": "सीजनल डेकोरेशन",
    "holidaySupplies": "हॉलिडे सप्लाइज इंक",
    "nonMoving": "नहीं चल रहा है",
    "markPickedUp": "पिकअप के रूप में चिह्नित करें",

    "debitNotesScreenshotTitle": "डेबिट नोट्स टैब - वित्तीय दस्तावेज़ीकरण",
    "returnDebitNotes": "रिटर्न-संबंधित डेबिट नोट्स",
    "dnId1": "DN-2024-0015",
    "dnDesc1": "क्षतिग्रस्त ऑर्गेनिक सेब के लिए डेबिट नोट - परिवहन के दौरान पानी से नुकसान",
    "dnId2": "DN-2024-0014",
    "dnDesc2": "विक्रेता रिटर्न - मौसमी आइटम गैर-चलती इन्वेंट्री अनुकूलन",

    "createProductReturnScreenshotTitle": "उत्पाद रिटर्न फ़ॉर्म बनाएं",
    "createProductReturnFormTitle": "उत्पाद रिटर्न बनाएं",
    "createProductReturnFormDesc": "दोषपूर्ण या खराब उत्पादों को विक्रेताओं को वापस करें",
    "purchaseOrder": "खरीद आदेश *",
    "selectPO": "एक प्राप्त खरीद आदेश चुनें",
    "returnQuantity": "वापसी की मात्रा *",
    "returnReason": "वापसी का कारण *",
    "selectReason": "वापसी का कारण चुनें",
    "expired": "समाप्त",
    "qualityIssue": "गुणवत्ता की समस्या",
    "wrongItem": "गलत आइटम",
    "defective": "खराब",
    "descriptionField": "विवरण",
    "describeIssue": "उत्पाद के साथ समस्या का वर्णन करें...",
    "cancel": "रद्द करें",
    "createReturn": "रिटर्न बनाएं",

    "createVendorReturnScreenshotTitle": "विक्रेता रिटर्न फ़ॉर्म बनाएं",
    "createVendorReturnFormTitle": "विक्रेता रिटर्न बनाएं",
    "createVendorReturnFormDesc": "अनुकूलन के लिए विक्रेताओं को इन्वेंट्री वापस करें",
    "selectVendor": "विक्रेता चुनें",
    "selectReturnType": "रिटर्न प्रकार चुनें",
    "nearExpiry": "समाप्ति के करीब",
    "slowMoving": "धीरे-धीरे चलने वाला",
    "overstock": "ओवरस्टॉक",
    "addProductsToReturn": "रिटर्न में उत्पादों को जोड़ें",
    "searchAndSelect": "इस रिटर्न में शामिल करने के लिए उत्पादों को खोजें और चुनें",
    "searchProducts": "उत्पादों को खोजें...",
    "stock": "स्टॉक: {count} इकाइयां",
    "cost": "लागत: ₹{value}",
    "add": "जोड़ें",
    "createVendorReturnButton": "विक्रेता रिटर्न बनाएं",

    "statusWorkflowScreenshotTitle": "रिटर्न स्थिति प्रगति",
    "productReturnWorkflow": "उत्पाद रिटर्न वर्कफ़्लो",
    "pickedUp": "पिकअप किया गया",
    "statusPending": "अनुमोदन लंबित: रिटर्न अनुरोध बनाया गया, प्रबंधन अनुमोदन की प्रतीक्षा है",
    "statusApproved": "अनुमोदित: रिटर्न अनुमोदित, विक्रेता पिकअप के लिए आइटम तैयार करना",
    "statusReady": "पिकअप के लिए तैयार: आइटम तैयार हैं, संग्रह के लिए विक्रेता को सूचित किया गया है",
    "statusPicked": "पिकअप किया गया: विक्रेता ने आइटम एकत्र किए हैं, अंतिम प्रसंस्करण की प्रतीक्षा है",
    "statusCompleted": "पूर्ण: रिटर्न संसाधित, डेबिट नोट उत्पन्न, वित्तीय समाधान पूर्ण",

    "integrationScreenshotTitle": "एकीकरण बिंदु",
    "integrationOverview": "सिस्टम एकीकरण अवलोकन",
    "poIntegration": "खरीद आदेश एकीकरण",
    "poIntegrationDesc": "उत्पाद रिटर्न पूर्ण पता लगाने की क्षमता के लिए स्वचालित रूप से मूल PO से लिंक होते हैं",
    "inventoryUpdates": "इन्वेंट्री अपडेट",
    "inventoryUpdatesDesc": "रिटर्न संसाधित होने पर स्टॉक स्तर स्वचालित रूप से समायोजित होते हैं",
    "financialReconciliation": "वित्तीय समाधान",
    "financialReconciliationDesc": "डेबिट नोट्स स्वचालित रूप से उत्पन्न होते हैं और विक्रेता खातों से लिंक होते हैं",

    "sku": "SKU",
    "product": "उत्पाद",
    "quantity": "मात्रा",
    "reason": "कारण",
    "status": "स्थिति",
    "actions": "कार्य",
    "returnId": "रिटर्न ID",
    "returnType": "रिटर्न प्रकार",
    "searchReturns": "रिटर्न ID, विक्रेता, या उत्पाद द्वारा खोजें...",
    "allVendors": "सभी विक्रेता",
    "allStatuses": "सभी स्थितियां",
    "pendingApproval": "अनुमोदन लंबित",
    "approved": "अनुमोदित",
    "readyForPickup": "पिकअप के लिए तैयार",
    "pickedUp": "पिकअप किया गया",
    "nonMoving": "नहीं चल रहा है",
    "creatingProductReturns": "उत्पाद रिटर्न बना रहा है",
    "creatingVendorReturns": "विक्रेता रिटर्न बना रहा है",
    "productReturnsDesc": "दोषपूर्ण या खराब उत्पादों को विक्रेताओं को वापस करने के लिए उत्पाद रिटर्न बनाएं।",
    "vendorReturnsDesc": "अनुकूलन के लिए विक्रेताओं को इन्वेंट्री वापस करने के लिए विक्रेता रिटर्न बनाएं।",
    "each_status_change_triggers": "प्रत्येक स्थिति परिवर्तन इन कार्यों को ट्रिगर करता है:",
    "approvalKey": "अनुमोदन",
    "approvalDesc": "प्रबंधन अनुमोदन के लिए अनुरोध",
    "preparationKey": "तैयारी",
    "preparationDesc": "विक्रेता पिकअप के लिए आइटम तैयार करें",
    "vendorNotifKey": "विक्रेता अधिसूचना",
    "vendorNotifDesc": "पिकअप के लिए विक्रेता को सूचित करें",
    "documentationKey2": "दस्तावेज़ीकरण",
    "documentationDesc2": "रिटर्न प्रक्रिया का दस्तावेजीकरण करें",
    "financialProcessingKey": "वित्तीय प्रसंस्करण",
    "financialProcessingDesc": "डेबिट नोट उत्पन्न करें और खातों को अपडेट करें",
    "this_integration_ensures": "यह एकीकरण इन लाभों को सुनिश्चित करता है:",
    "dataIntegrityKey": "डेटा अखंडता",
    "dataIntegrityDesc": "सभी प्रणालियों में सुसंगत और सटीक जानकारी",
    "auditTrailKey": "ऑडिट ट्रेल",
    "auditTrailDesc": "प्रत्येक रिटर्न के लिए पूर्ण इतिहास और कार्य",
    "autoUpdatesKey": "स्वचालित अपडेट",
    "autoUpdatesDesc": "जब रिटर्न की स्थिति बदलती है तो अन्य प्रणालियां स्वचालित रूप से अपडेट हो जाती हैं",
    "vendorCommKey": "विक्रेता संचार",
    "vendorCommDesc": "रिटर्न की स्थिति और पिकअप समय के बारे में विक्रेताओं को स्वचालित सूचनाएं"
  },
  ml: {
    "pageTitle": "റിട്ടേൺ മാനേജ്മെന്റ് മാനുവൽ",
    "backToManual": "മാനുവലിലേക്ക് തിരികെ പോകുക",
    "description": "കേടുപാടുകൾ സംഭവിച്ച സാധനങ്ങൾ കൈകാര്യം ചെയ്യുക, വിതരണക്കാർക്ക് ഉൽപ്പന്നങ്ങൾ തിരികെ നൽകുക, വിതരണക്കാരുടെ റിട്ടേണുകൾ കൈകാര്യം ചെയ്യുക, സമഗ്രമായ ഓഡിറ്റ് ട്രയലുകളുള്ള ഡെബിറ്റ് നോട്ടുകൾ ട്രാക്കുചെയ്യുക എന്നിവ ഉൾപ്പെടെയുള്ള റിട്ടേൺ മാനേജ്മെന്റ് പ്രക്രിയയെക്കുറിച്ച് മനസിലാക്കുക.",
    "step1Title": "റിട്ടേൺ മാനേജ്മെന്റ് ഡാഷ്‌ബോർഡ് അവലോകനം",
    "step1Intro": "നിങ്ങളുടെ റീട്ടെയിൽ പ്രവർത്തനങ്ങളിലെ എല്ലാതരം റിട്ടേണുകളും കൈകാര്യം ചെയ്യുന്നതിനുള്ള നിങ്ങളുടെ കേന്ദ്ര കമാൻഡ് സെന്ററാണ് റിട്ടേൺ മാനേജ്മെന്റ് ഡാഷ്‌ബോർഡ്. ഇത് വിതരണക്കാർക്ക് നൽകുന്ന ഉൽപ്പന്ന റിട്ടേണുകൾ, ഇൻവെന്ററി ഒപ്റ്റിമൈസേഷനായുള്ള വിതരണക്കാരുടെ റിട്ടേണുകൾ, ഡെബിറ്റ് നോട്ടുകളിലൂടെയുള്ള പൂർണ്ണമായ സാമ്പത്തിക സമവായം എന്നിവയുടെ സമഗ്രമായ ട്രാക്കിംഗും മാനേജ്മെന്റും നൽകുന്നു.",
    "step2Title": "കേടുപാടുകൾ സംഭവിച്ച സാധനങ്ങളുടെ ടാബ് - റിട്ടേൺ അവസരങ്ങൾ തിരിച്ചറിയുക",
    "step2Intro": "ഈ ടാബ്, ഇതുവരെ തിരികെ നൽകിയിട്ടില്ലാത്ത പർച്ചേസ് ഓർഡറുകളിൽ നിന്നുള്ള കേടുപാടുകൾ സംഭവിച്ച സാധനങ്ങൾ തിരിച്ചറിയുന്നു. ഇത് റിട്ടേണുകൾ പ്രോസസ് ചെയ്യുന്നതിനായി ഒരു 'ചെയ്യേണ്ട കാര്യങ്ങളുടെ' ലിസ്റ്റ് സൃഷ്ടിക്കുന്നു. കേടുപാടുകൾ സംഭവിച്ച ഇൻവെന്ററി വിതരണക്കാരുടെ റിട്ടേണുകളായി മാറ്റുന്നതിനുള്ള നിങ്ങളുടെ തുടക്കമാണിത്.",
    "step3Title": "ആക്ടീവ് റിട്ടേൺസ് ടാബ് - എല്ലാ റിട്ടേൺ തരങ്ങളും കൈകാര്യം ചെയ്യുക",
    "step3Intro": "പ്രോഡക്റ്റ് റിട്ടേൺസ് (കേടുപാടുകൾ സംഭവിച്ച സാധനങ്ങൾ), വെണ്ടർ റിട്ടേൺസ് (ഇൻവെന്ററി ഒപ്റ്റിമൈസേഷൻ) എന്നിവയെ ആക്ടീവ് റിട്ടേൺസ് ടാബ് ഒരൊറ്റ, കൈകാര്യം ചെയ്യാൻ കഴിയുന്ന കാഴ്ചയിലേക്ക് ഏകീകരിക്കുന്നു. ഇവിടെയാണ് നിങ്ങൾ പുരോഗതി നിരീക്ഷിക്കുകയും നിലവിലുള്ള എല്ലാ റിട്ടേണുകളിലും നടപടിയെടുക്കുകയും ചെയ്യുന്നത്.",
    "step4Title": "ഡെബിറ്റ് നോട്ട്സ് ടാബ് - സാമ്പത്തിക സമവായം",
    "step4Intro": "റിട്ടേണുകളിൽ നിന്ന് ജനറേറ്റ് ചെയ്യപ്പെടുന്ന എല്ലാ സാമ്പത്തിക രേഖകളും ഡെബിറ്റ് നോട്ട്സ് ടാബ് ട്രാക്ക് ചെയ്യുന്നു. അക്കൗണ്ടിംഗ് ആവശ്യങ്ങൾക്കും വിതരണക്കാരുടെ സമവായത്തിനും ഇത് വളരെ നിർണായകമാണ്, വിതരണക്കാർ നൽകേണ്ട ക്രെഡിറ്റുകളുടെ ശരിയായ രേഖകൾ ഇത് ഉറപ്പാക്കുന്നു.",
    "step5Title": "റിട്ടേണുകൾ സൃഷ്ടിക്കുക - വർക്ക്ഫ്ലോ മാനേജ്മെന്റ്",
    "step5Intro": "റിട്ടേൺ മാനേജ്മെന്റ് സിസ്റ്റം രണ്ട് പ്രാഥമിക വർക്ക്ഫ്ലോകളെ പിന്തുണയ്ക്കുന്നു: പ്രോഡക്റ്റ് റിട്ടേൺസ് (കേടുപാടുകൾ/തകരാറുകൾ സംഭവിച്ച സാധനങ്ങൾക്ക്) വെണ്ടർ റിട്ടേൺസ് (ഇൻവെന്ററി ഒപ്റ്റിമൈസേഷന്). ഓരോന്നിനും അതിൻ്റേതായ സൃഷ്ടിക്കൽ പ്രക്രിയയും അംഗീകാര വർക്ക്ഫ്ലോയും ഉണ്ട്.",
    "step6Title": "റിട്ടേൺ സ്റ്റാറ്റസ് വർക്ക്ഫ്ലോ & പ്രോസസ്സിംഗ്",
    "step6Intro": "റിട്ടേണുകൾ, സൃഷ്ടിക്കുന്നത് മുതൽ പൂർത്തിയാകുന്നത് വരെ, ഒരു ഘടനാപരമായ വർക്ക്ഫ്ലോ പിന്തുടരുന്നു. ഈ സ്റ്റാറ്റസുകൾ മനസ്സിലാക്കുന്നത് നിങ്ങൾക്ക് പ്രക്രിയ കാര്യക്ഷമമായി കൈകാര്യം ചെയ്യാനും വിതരണക്കാരുമായി ഫലപ്രദമായി ആശയവിനിമയം നടത്താനും സഹായിക്കുന്നു.",
    "step7Title": "പർച്ചേസ് ഓർഡറുകളും ഇൻവെന്ററിയുമായുള്ള സംയോജനം",
    "step7Intro": "റിട്ടേൺ മാനേജ്‌മെന്റ് നിങ്ങളുടെ പർച്ചേസ് ഓർഡർ, ഇൻവെന്ററി സിസ്റ്റങ്ങൾ എന്നിവയുമായി വളരെ സംയോജിതമാണ്. ഇത് ഡാറ്റയുടെ സ്ഥിരതയും, ആദ്യത്തെ രസീത് മുതൽ റിട്ടേൺ പൂർത്തിയാകുന്നതുവരെയുള്ള പൂർണ്ണമായ ട്രാക്കബിലിറ്റിയും ഉറപ്പാക്കുന്നു.",

    "dashboardScreenshotTitle": "റിട്ടേൺ മാനേജ്മെന്റ് ഡാഷ്‌ബോർഡ് - പ്രധാന കാഴ്ച",
    "returnManagement": "റിട്ടേൺ മാനേജ്മെന്റ്",
    "manageAllReturns": "എല്ലാ ഉൽപ്പന്ന, വിതരണക്കാരുടെ റിട്ടേണുകളും കൈകാര്യം ചെയ്യുക, സ്റ്റാറ്റസുകൾ ട്രാക്ക് ചെയ്യുക, ഡെബിറ്റ് നോട്ടുകൾ കൈകാര്യം ചെയ്യുക.",
    "createProductReturn": "ഉൽപ്പന്ന റിട്ടേൺ സൃഷ്ടിക്കുക",
    "createVendorReturn": "വിതരണക്കാരുടെ റിട്ടേൺ സൃഷ്ടിക്കുക",
    "productReturns": "ഉൽപ്പന്ന റിട്ടേണുകൾ",
    "vendorReturns": "വിതരണക്കാരുടെ റിട്ടേണുകൾ",
    "pending": "തീർപ്പാക്കാത്തവ",
    "totalValue": "മൊത്തം മൂല്യം",
    "completed": "പൂർത്തിയായവ",
    "debitNotes": "ഡെബിറ്റ് നോട്ടുകൾ",
    "statsDescProduct": "കേടുപാടുകൾ/തകരാറുകൾ സംഭവിച്ച ഉൽപ്പന്നങ്ങൾ വിതരണക്കാർക്ക് തിരികെ നൽകുക",
    "statsDescVendor": "ഇൻവെന്ററി ഒപ്റ്റിമൈസേഷൻ റിട്ടേണുകൾ (വിൽപ്പന കുറഞ്ഞത്, കാലാവധി തീരാറായത്)",
    "statsDescPending": "അംഗീകാരത്തിനോ പ്രോസസ്സിംഗിനോ വേണ്ടി കാത്തിരിക്കുന്ന റിട്ടേണുകൾ",
    "statsDescValue": "എല്ലാ റിട്ടേണുകളുടെയും സാമ്പത്തിക ആഘാതം",
    "statsDescCompleted": "വിജയകരമായി പ്രോസസ്സ് ചെയ്ത റിട്ടേണുകൾ",
    "statsDescDebit": "വിതരണക്കാരുടെ സമവായത്തിനായി സൃഷ്ടിച്ച സാമ്പത്തിക രേഖകൾ",

    "damagedGoodsScreenshotTitle": "കേടുപാടുകൾ സംഭവിച്ച സാധനങ്ങളുടെ ടാബ് - തിരികെ നൽകാൻ കാത്തിരിക്കുന്ന സാധനങ്ങൾ",
    "damagedGoodsAwaiting": "തിരികെ നൽകാൻ കാത്തിരിക്കുന്ന കേടുപാടുകൾ സംഭവിച്ച സാധനങ്ങൾ ({count})",
    "list": "ലിസ്റ്റ്",
    "grid": "ഗ്രിഡ്",
    "poReference": "PO-2024-0521-001",
    "organicApples": "ഓർഗാനിക് ആപ്പിൾസ് - പ്രീമിയം",
    "waterDamage": "ട്രാൻസ്‌പോർട്ട് സമയത്ത് വെള്ളം കയറിയ കേടുപാടുകൾ",
    "units": "{count} യൂണിറ്റുകൾ",
    "vendor": "വിതരണക്കാരൻ",
    "freshFarmSupplies": "ഫ്രെഷ് ഫാം സപ്ലൈസ്",
    "receivedDate": "ലഭിച്ച തീയതി",
    "may20": "മെയ് 20, 2024",
    "unitCost": "യൂണിറ്റ് വില",
    "initiateReturn": "റിട്ടേൺ ആരംഭിക്കുക",
    "dairyMilk": "ഡയറി മിൽക്ക് - 1L കാർട്ടണുകൾ",
    "packagingDefect": "പാക്കേജിംഗ് തകരാർ, ചോർച്ച",
    "sunriseDairy": "സൺറൈസ് ഡയറി കോ.",
    "may18": "മെയ് 18, 2024",

    "activeReturnsScreenshotTitle": "ആക്ടീവ് റിട്ടേൺസ് ടാബ് - ഏകീകൃത റിട്ടേൺ മാനേജ്‌മെന്റ്",
    "allReturns": "എല്ലാ റിട്ടേണുകളും ({count})",
    "searchReturns": "റിട്ടേൺ ഐഡി, വിതരണക്കാരൻ, അല്ലെങ്കിൽ ഉൽപ്പന്നം എന്നിവ ഉപയോഗിച്ച് തിരയുക...",
    "allVendors": "എല്ലാ വിതരണക്കാരും",
    "allStatuses": "എല്ലാ സ്റ്റാറ്റസുകളും",
    "pendingApproval": "അംഗീകാരത്തിനായി തീർപ്പാക്കാത്തത്",
    "approved": "അംഗീകരിച്ചു",
    "readyForPickup": "പിക്കപ്പിനായി തയ്യാറാണ്",
    "returnId": "റിട്ടേൺ ഐഡി",
    "returnType": "റിട്ടേൺ തരം",
    "product": "ഉൽപ്പന്നം",
    "quantity": "എണ്ണം",
    "reason": "കാരണം",
    "status": "സ്റ്റാറ്റസ്",
    "actions": "പ്രവർത്തനങ്ങൾ",
    "retId1": "RET-2024-001",
    "productReturnType": "ഉൽപ്പന്ന റിട്ടേൺ",
    "sku": "SKU",
    "damaged": "കേടുപാടുകൾ സംഭവിച്ചത്",
    "approve": "അംഗീകരിക്കുക",
    "vrId1": "VR-2024-008",
    "vendorReturnType": "വിതരണക്കാരുടെ റിട്ടേൺ",
    "seasonalDecorations": "സീസണൽ അലങ്കാരങ്ങൾ",
    "holidaySupplies": "ഹോളിഡേ സപ്ലൈസ് ഇൻക്",
    "nonMoving": "വിൽക്കാത്തത്",
    "markPickedUp": "പിക്കപ്പ് ചെയ്തതായി അടയാളപ്പെടുത്തുക",

    "debitNotesScreenshotTitle": "ഡെബിറ്റ് നോട്ട്സ് ടാബ് - സാമ്പത്തിക രേഖകൾ",
    "returnDebitNotes": "റിട്ടേൺ-സംബന്ധമായ ഡെബിറ്റ് നോട്ടുകൾ",
    "dnId1": "DN-2024-0015",
    "dnDesc1": "ഓർഗാനിക് ആപ്പിളിന് കേടുപാടുകൾ സംഭവിച്ചതിനുള്ള ഡെബിറ്റ് നോട്ട് - ട്രാൻസ്‌പോർട്ട് സമയത്ത് വെള്ളം കയറി",
    "dnId2": "DN-2024-0014",
    "dnDesc2": "വിതരണക്കാരുടെ റിട്ടേൺ - സീസണൽ ഉൽപ്പന്നങ്ങൾ വിൽക്കാത്തതിനാൽ ഇൻവെന്ററി ഒപ്റ്റിമൈസേഷൻ",

    "createProductReturnScreenshotTitle": "ഉൽപ്പന്ന റിട്ടേൺ ഫോം സൃഷ്ടിക്കുക",
    "createProductReturnFormTitle": "ഉൽപ്പന്ന റിട്ടേൺ സൃഷ്ടിക്കുക",
    "createProductReturnFormDesc": "കേടുപാടുകൾ സംഭവിച്ച അല്ലെങ്കിൽ തകരാറുകൾ സംഭവിച്ച ഉൽപ്പന്നങ്ങൾ വിതരണക്കാർക്ക് തിരികെ നൽകുക",
    "purchaseOrder": "പർച്ചേസ് ഓർഡർ *",
    "selectPO": "ലഭിച്ച പർച്ചേസ് ഓർഡർ തിരഞ്ഞെടുക്കുക",
    "returnQuantity": "റിട്ടേൺ എണ്ണം *",
    "returnReason": "റിട്ടേൺ കാരണം *",
    "selectReason": "റിട്ടേൺ കാരണം തിരഞ്ഞെടുക്കുക",
    "expired": "കാലാവധി കഴിഞ്ഞു",
    "qualityIssue": "ഗുണനിലവാര പ്രശ്നം",
    "wrongItem": "തെറ്റായ ഇനം",
    "defective": "തകരാറുള്ളത്",
    "descriptionField": "വിവരണം",
    "describeIssue": "ഉൽപ്പന്നത്തിലെ പ്രശ്നം വിവരിക്കുക...",
    "cancel": "റദ്ദാക്കുക",
    "createReturn": "റിട്ടേൺ സൃഷ്ടിക്കുക",

    "createVendorReturnScreenshotTitle": "വിതരണക്കാരുടെ റിട്ടേൺ ഫോം സൃഷ്ടിക്കുക",
    "createVendorReturnFormTitle": "വിതരണക്കാരുടെ റിട്ടേൺ സൃഷ്ടിക്കുക",
    "createVendorReturnFormDesc": "ഒപ്റ്റിമൈസേഷനായി ഇൻവെന്ററി വിതരണക്കാർക്ക് തിരികെ നൽകുക",
    "selectVendor": "വിതരണക്കാരനെ തിരഞ്ഞെടുക്കുക",
    "selectReturnType": "റിട്ടേൺ തരം തിരഞ്ഞെടുക്കുക",
    "nearExpiry": "കാലാവധി തീരാറായി",
    "slowMoving": "വിൽക്കാത്തത്",
    "overstock": "ഓവർസ്റ്റോക്ക്",
    "addProductsToReturn": "റിട്ടേണിലേക്ക് ഉൽപ്പന്നങ്ങൾ ചേർക്കുക",
    "searchAndSelect": "ഈ റിട്ടേണിൽ ഉൾപ്പെടുത്താൻ ഉൽപ്പന്നങ്ങൾ തിരഞ്ഞ് തിരഞ്ഞെടുക്കുക",
    "searchProducts": "ഉൽപ്പന്നങ്ങൾ തിരയുക...",
    "stock": "സ്റ്റോക്ക്: {count} യൂണിറ്റുകൾ",
    "cost": "വില: ₹{value}",
    "add": "ചേർക്കുക",
    "createVendorReturnButton": "വിതരണക്കാരുടെ റിട്ടേൺ സൃഷ്ടിക്കുക",

    "statusWorkflowScreenshotTitle": "റിട്ടേൺ സ്റ്റാറ്റസ് പ്രൊഗ്രഷൻ",
    "productReturnWorkflow": "ഉൽപ്പന്ന റിട്ടേൺ വർക്ക്ഫ്ലോ",
    "pickedUp": "പിക്കപ്പ് ചെയ്തു",
    "statusPending": "അംഗീകാരത്തിനായി തീർപ്പാക്കാത്തത്: റിട്ടേൺ അപേക്ഷ സൃഷ്ടിച്ചു, മാനേജ്മെന്റ് അംഗീകാരത്തിനായി കാത്തിരിക്കുന്നു",
    "statusApproved": "അംഗീകരിച്ചു: റിട്ടേൺ അംഗീകരിച്ചു, വിതരണക്കാരുടെ പിക്കപ്പിനായി ഉൽപ്പന്നങ്ങൾ തയ്യാറാക്കുന്നു",
    "statusReady": "പിക്കപ്പിനായി തയ്യാറാണ്: ഉൽപ്പന്നങ്ങൾ തയ്യാറാണ്, എടുക്കുന്നതിനായി വിതരണക്കാരനെ അറിയിച്ചിട്ടുണ്ട്",
    "statusPicked": "പിക്കപ്പ് ചെയ്തു: വിതരണക്കാരൻ ഉൽപ്പന്നങ്ങൾ ശേഖരിച്ചു, അന്തിമ പ്രോസസ്സിംഗിനായി കാത്തിരിക്കുന്നു",
    "statusCompleted": "പൂർത്തിയായി: റിട്ടേൺ പ്രോസസ്സ് ചെയ്തു, ഡെബിറ്റ് നോട്ട് സൃഷ്ടിച്ചു, സാമ്പത്തിക സമവായം പൂർത്തിയായി",

    "integrationScreenshotTitle": "സംയോജന പോയിൻ്റുകൾ",
    "integrationOverview": "സിസ്റ്റം സംയോജന അവലോകനം",
    "poIntegration": "പർച്ചേസ് ഓർഡറുകളുമായുള്ള സംയോജനം",
    "poIntegrationDesc": "പൂർണ്ണമായ ട്രാക്കബിലിറ്റിക്കായി ഉൽപ്പന്ന റിട്ടേണുകൾ സ്വയമേവ യഥാർത്ഥ PO-യുമായി ലിങ്ക് ചെയ്യപ്പെടുന്നു",
    "inventoryUpdates": "ഇൻവെന്ററി അപ്‌ഡേറ്റുകൾ",
    "inventoryUpdatesDesc": "റിട്ടേണുകൾ പ്രോസസ്സ് ചെയ്യുമ്പോൾ സ്റ്റോക്ക് ലെവലുകൾ സ്വയമേവ ക്രമീകരിക്കപ്പെടുന്നു",
    "financialReconciliation": "സാമ്പത്തിക സമവായം",
    "financialReconciliationDesc": "ഡെബിറ്റ് നോട്ടുകൾ സ്വയമേവ സൃഷ്ടിക്കപ്പെടുകയും വിതരണക്കാരുടെ അക്കൗണ്ടുകളുമായി ലിങ്ക് ചെയ്യപ്പെടുകയും ചെയ്യുന്നു",

    "sku": "SKU",
    "product": "ഉൽപ്പന്നം",
    "quantity": "എണ്ണം",
    "reason": "കാരണം",
    "status": "സ്റ്റാറ്റസ്",
    "actions": "പ്രവർത്തനങ്ങൾ",
    "returnId": "റിട്ടേൺ ഐഡി",
    "returnType": "റിട്ടേൺ തരം",
    "searchReturns": "റിട്ടേൺ ഐഡി, വിതരണക്കാരൻ, അല്ലെങ്കിൽ ഉൽപ്പന്നം എന്നിവ ഉപയോഗിച്ച് തിരയുക...",
    "allVendors": "എല്ലാ വിതരണക്കാരും",
    "allStatuses": "എല്ലാ സ്റ്റാറ്റസുകളും",
    "pendingApproval": "അംഗീകാരത്തിനായി തീർപ്പാക്കാത്തത്",
    "approved": "അംഗീകരിച്ചു",
    "readyForPickup": "പിക്കപ്പിനായി തയ്യാറാണ്",
    "pickedUp": "പിക്കപ്പ് ചെയ്തു",
    "nonMoving": "വിൽക്കാത്തത്",
    "creatingProductReturns": "ഉൽപ്പന്ന റിട്ടേണുകൾ സൃഷ്ടിക്കുന്നു",
    "creatingVendorReturns": "വിതരണക്കാരുടെ റിട്ടേണുകൾ സൃഷ്ടിക്കുന്നു",
    "productReturnsDesc": "കേടുപാടുകൾ സംഭവിച്ച അല്ലെങ്കിൽ തകരാറുള്ള ഉൽപ്പന്നങ്ങൾ വിതരണക്കാർക്ക് തിരികെ നൽകാൻ ഉൽപ്പന്ന റിട്ടേണുകൾ സൃഷ്ടിക്കുക.",
    "vendorReturnsDesc": "ഒപ്റ്റിമൈസേഷനായി ഇൻവെന്ററി വിതരണക്കാർക്ക് തിരികെ നൽകാൻ വിതരണക്കാരുടെ റിട്ടേണുകൾ സൃഷ്ടിക്കുക.",
    "each_status_change_triggers": "ഓരോ സ്റ്റാറ്റസ് മാറ്റവും ഈ പ്രവർത്തനങ്ങൾ ട്രിഗർ ചെയ്യുന്നു:",
    "approvalKey": "അംഗീകാരം",
    "approvalDesc": "മാനേജ്‌മെൻ്റ് അംഗീകാരത്തിനായുള്ള അപേക്ഷ",
    "preparationKey": "തയ്യാറെടുപ്പ്",
    "preparationDesc": "വിതരണക്കാരുടെ പിക്കപ്പിനായി ഉൽപ്പന്നങ്ങൾ തയ്യാറാക്കുക",
    "vendorNotifKey": "വിതരണക്കാരുടെ അറിയിപ്പ്",
    "vendorNotifDesc": "പിക്കപ്പിനായി വിതരണക്കാരനെ അറിയിക്കുക",
    "documentationKey2": "ഡോക്യുമെന്റേഷൻ",
    "documentationDesc2": "റിട്ടേൺ പ്രക്രിയ രേഖപ്പെടുത്തുക",
    "financialProcessingKey": "സാമ്പത്തിക പ്രോസസ്സിംഗ്",
    "financialProcessingDesc": "ഡെബിറ്റ് നോട്ട് സൃഷ്ടിച്ച് അക്കൗണ്ടുകൾ അപ്‌ഡേറ്റ് ചെയ്യുക",
    "this_integration_ensures": "ഈ സംയോജനം ഈ ഗുണങ്ങൾ ഉറപ്പാക്കുന്നു:",
    "dataIntegrityKey": "ഡാറ്റാ ഇൻ്റഗ്രിറ്റി",
    "dataIntegrityDesc": "എല്ലാ സിസ്റ്റങ്ങളിലും സ്ഥിരതയുള്ളതും കൃത്യവുമായ വിവരങ്ങൾ",
    "auditTrailKey": "ഓഡിറ്റ് ട്രയൽ",
    "auditTrailDesc": "ഓരോ റിട്ടേണിന്റെയും പൂർണ്ണമായ ചരിത്രവും പ്രവർത്തനങ്ങളും",
    "autoUpdatesKey": "ഓട്ടോമാറ്റിക് അപ്‌ഡേറ്റുകൾ",
    "autoUpdatesDesc": "റിട്ടേൺ സ്റ്റാറ്റസുകൾ മാറുമ്പോൾ മറ്റ് സിസ്റ്റങ്ങൾ സ്വയമേവ അപ്‌ഡേറ്റ് ചെയ്യപ്പെടുന്നു",
    "vendorCommKey": "വിതരണക്കാരുമായുള്ള ആശയവിനിമയം",
    "vendorCommDesc": "റിട്ടേൺ സ്റ്റാറ്റസുകളും പിക്കപ്പ് സമയങ്ങളും സംബന്ധിച്ച് വിതരണക്കാർക്ക് ഓട്ടോമാറ്റിക് അറിയിപ്പുകൾ"
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
                      <div className="flex gap-3 flex-col md:flex-row">
                        <Button className="bg-red-600 text-white hover:bg-red-700 flex items-center gap-2">
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
                          {t('damagedGoodsAwaiting', { count: 5 })}
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
                            <Badge variant="destructive" className="text-white">{t('units', { count: 15 })}</Badge>
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
                            <Button size="sm" className="w-full bg-red-600 text-white hover:bg-red-700">
                              <ArrowUpDown className="w-4 h-4 mr-2" />
                              {t('initiateReturn')}
                            </Button>
                          </div>
                        </div>
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <code className="text-xs bg-slate-100 px-2 py-1 rounded">{t('poReference2')}</code>
                              <h4 className="font-medium text-slate-900 mt-2">{t('dairyMilk')}</h4>
                              <p className="text-xs text-red-600 mt-1">{t('packagingDefect')}</p>
                            </div>
                            <Badge variant="destructive" className="text-white">{t('units', { count: 8 })}</Badge>
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
                            <Button size="sm" className="w-full bg-red-600 text-white hover:bg-red-700">
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
                            {t('allReturns', { count: 24 })}
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
                              <p className="text-xs text-slate-500">{t('sku')}: {t('skuApples')}</p>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-slate-400" />
                                <span>{t('freshFarmSupplies')}</span>
                              </div>
                            </td>
                            <td className="p-4"><span className="font-medium">{t('units', { count: 15 })}</span></td>
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
                              <p className="text-xs text-slate-500">{t('sku')}: {t('skuDecorations')}</p>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-slate-400" />
                                <span>{t('holidaySupplies')}</span>
                              </div>
                            </td>
                            <td className="p-4"><span className="font-medium">{t('units', { count: 50 })}</span></td>
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
                              <span>{t('may21')}</span>
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
                          <Input type="number" placeholder={t('maxQuantity')} />
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
                        <Button className="bg-red-600 text-white hover:bg-red-700">{t('createReturn')}</Button>
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
                              <p className="text-sm text-slate-600">{t('sku')}: {t('skuDecorations')}</p>
                              <p className="text-sm text-slate-600">{t('stock', { count: 75 })}</p>
                              <p className="text-sm text-slate-600">{t('cost', { value: '7.50' })}</p>
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
                        <Button className="bg-red-600 text-white hover:bg-red-700">{t('createVendorReturnButton')}</Button>
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
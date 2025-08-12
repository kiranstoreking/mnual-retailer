
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft, Truck, Package, CheckCircle, Clock, MapPin,
  Scan, FileText, Box, Printer, Camera, AlertTriangle,
  ArrowRight, User, Building2, Calendar, CreditCard, Plus,
  Eye, Edit, Filter, Search, Grid, List, BarChart3, TrendingUp,
  ShoppingCart, Users, Home, Phone, Mail, Star, Award,
  Navigation, Copy, Download, Send, Clipboard, Target
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

const SubStep = ({ letter, title, children }) => (
  <div className="flex items-start gap-3 mt-6 ml-4 border-l-2 border-indigo-200 pl-4">
    <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-xs">{letter}</div>
    <div className="flex-grow">
      <h5 className="text-md font-semibold text-slate-700 mb-2">{title}</h5>
      <div className="text-sm text-slate-600">
        {children}
      </div>
    </div>
  </div>
);

const translations = {
  en: {
    pageTitle: "Order Fulfillment Manual",
    backToManual: "Back to Manual",
    description: "Master the complete order fulfillment process from picking items in the warehouse to packing, invoicing, and preparing shipments for delivery with detailed workflows and quality control procedures.",

    step1Title: "Fulfillment Dashboard Overview",
    step1Intro: "The Fulfillment Dashboard is your operational command center for processing all incoming orders. It provides a comprehensive workflow management system that tracks orders through each stage of fulfillment with real-time updates, performance metrics, and intelligent filtering capabilities.",
    step1Description: "Navigate to the Fulfillment Dashboard to access all order processing tools and monitor the complete fulfillment workflow from order receipt to dispatch.",

    step2Title: "Understanding Order Statuses & Workflow",
    step2Intro: "RetailOS uses a comprehensive order status system to track every order through its fulfillment journey. Understanding these statuses is crucial for efficient order processing and customer communication.",
    step2Description: "Each order progresses through defined stages, with clear indicators and actions available at each step.",

    step3Title: "Processing New Orders (Pending Status)",
    step3Intro: "New orders appear in the 'Pending' or 'New Orders' section and require initial processing to move them into the fulfillment workflow. This involves order validation, inventory verification, and preparation for picking.",
    step3Description: "Learn how to review new orders, validate inventory availability, and initiate the fulfillment process.",

    step4Title: "Order Picking Process",
    step4Intro: "The picking process is where warehouse staff collect items for orders using optimized pick lists. RetailOS generates location-based picking routes to minimize travel time and maximize efficiency.",
    step4Description: "Master the complete picking workflow including pick list generation, inventory allocation, and quality control procedures.",

    step5Title: "Order Packing & Invoice Generation",
    step5Intro: "After picking is complete, orders move to the packing station where items are verified, organized into boxes, and prepared for shipment. This stage also includes invoice generation and shipping label creation.",
    step5Description: "Learn the comprehensive packing process including box management, item verification, and documentation generation.",

    step6Title: "Ready for Dispatch & Shipping Coordination",
    step6Intro: "The final fulfillment stage involves coordinating with delivery personnel or courier services, generating shipping labels, and ensuring proper handoff with all necessary documentation and tracking information.",
    step6Description: "Complete the fulfillment cycle by preparing orders for dispatch and coordinating with delivery teams.",

    step7Title: "Delivery Assignment & Tracking",
    step7Intro: "RetailOS provides comprehensive delivery management including assignment to in-house personnel or third-party courier agencies, with real-time tracking and customer communication capabilities.",
    step7Description: "Learn how to assign deliveries, track shipments, and manage customer communications throughout the delivery process.",

    step8Title: "B2B vs B2C Fulfillment Differences",
    step8Intro: "Understanding the differences between B2C (consumer) and B2B (business retailer) fulfillment processes helps optimize workflows for different customer types and order characteristics.",
    step8Description: "Learn the specific considerations and workflows for both B2C and B2B order fulfillment.",

    nextStepsTitle: "Order Fulfillment Mastery Complete!",
    nextStepsDescription: "You have successfully mastered the complete order fulfillment workflow from initial order receipt to final delivery handoff. Your orders are now efficiently processed through picking, packing, invoicing, and dispatch with comprehensive quality controls and documentation.",
    nextStepsButton: "Continue to Last-Mile Logistics",
    openDashboard: "Open Fulfillment Dashboard",

    // Dashboard navigation and interface
    fulfillmentDashboard: "Fulfillment Dashboard",
    manageOrders: "Manage orders through the complete fulfillment workflow",
    fulfillment: "Fulfillment",
    analytics: "Analytics",
    inventory: "Inventory",
    orders: "Orders",
    clickFulfillment: "Click on 'Fulfillment' from the main sidebar to access the order fulfillment workflow management system.",

    // Main dashboard tabs and buttons
    b2bAndB2cOrders: "B2B and B2C Orders",
    vendorReturns: "Vendor Returns",
    scanOrder: "Scan Order",
    printLabels: "Print Labels",
    exportData: "Export Data",
    filterSearchOrders: "Filter & Search Orders",
    searchPlaceholder: "Search by order ID, customer name, or retailer name...",

    // Filter options
    allOrders: "All Orders",
    b2cOrders: "B2C Orders",
    b2bOrders: "B2B Orders",
    showingResults: "Showing {count} of {total} orders",
    b2cOrdersOnly: "B2C orders only",

    // Order status columns with counts
    newOrders: "New Orders",
    readyToPick: "Ready to pick",
    picking: "Picking",
    inProgress: "In progress",
    packingInvoiced: "Packing & Invoiced",
    awaitingPack: "Awaiting pack",
    shipped: "Shipped",
    thisWeek: "This week",
    delivered: "Delivered",
    completed: "Completed",
    viewAllOrders: "View All {count} Orders",

    // Order status explanations
    orderStatusExplanation: "Order Status Workflow Explanation",
    pendingStatus: "Pending/New Orders",
    pendingDesc: "Fresh orders that need to be reviewed and processed. Inventory availability is verified at this stage.",
    pickingStatus: "Picking",
    pickingDesc: "Orders currently being picked by warehouse staff. Pick lists are generated and items are being collected.",
    packingStatus: "Packing & Invoiced",
    packingDesc: "Items have been picked and are being packed into boxes. Invoices are generated at this stage.",
    shippedStatus: "Shipped",
    shippedDesc: "Orders that have been dispatched and are en route to customers. Tracking information is available.",
    deliveredStatus: "Delivered",
    deliveredDesc: "Orders successfully delivered to customers. The fulfillment process is complete.",

    // New order processing interface
    processingNewOrders: "Processing New Orders",
    newOrderInterface: "New Order Processing Interface",
    orderDetails: "Order Details",
    customer: "Customer",
    orderDate: "Order Date",
    paymentMethod: "Payment Method",
    deliveryAddress: "Delivery Address",
    orderItems: "Order Items",
    totalAmount: "Total Amount",
    startFulfillment: "Start Fulfillment",
    viewFullDetails: "View Full Details",
    newOrder: "New Order",
    b2cCustomer: "B2C Customer",
    digitalWallet: "Digital Wallet",
    paymentComplete: "Payment Complete",

    // Sample customer details
    sarahWilson: "Sarah Wilson",
    orderReceived: "Order received and payment confirmed",
    greenValleyAddress: "123 Green Valley Road, Bangalore, Karnataka 560001",
    customerPhone: "Phone: +91 98765 43210",

    // Picking process interface
    pickingInterface: "Order Picking Interface",
    generatePickList: "Generate Pick List",
    pickListGenerated: "Pick List Generated",
    orderNumber: "Order #",
    pickingInstructions: "Picking Instructions",
    followOptimizedRoute: "Follow the optimized route below to collect all items efficiently. Scan each item's barcode to confirm pickup.",
    warehouseLocation: "Warehouse Location",
    quantityToPick: "Quantity to Pick",
    scanBarcode: "Scan Barcode",
    confirmPick: "Confirm Pick",
    pickingComplete: "Picking Complete",
    proceedToPacking: "Proceed to Packing",

    // Products in pick list
    organicBasmatiRice: "Organic Basmati Rice 1kg",
    wholeWheatFlour: "Whole Wheat Flour 1kg",
    oliveOilExtra: "Olive Oil Extra Virgin 500ml",
    locationA: "Location: A-1-3",
    locationB: "Location: B-2-1",
    locationC: "Location: C-1-5",
    quantity: "Quantity",
    verified: "Verified",

    // Packing interface
    packingInterface: "Order Packing Interface",
    packingStation: "Packing Station",
    packing: "Packing",
    itemVerification: "Item Verification",
    boxManagement: "Box Management",
    createNewBox: "Create New Box",
    boxId: "Box ID",
    addItemToBox: "Add Item to Box",
    boxContents: "Box Contents",
    generateInvoice: "Generate Invoice",
    packingComplete: "Packing Complete",
    readyForDispatch: "Ready for Dispatch",
    items: "items",

    // Shipping and dispatch
    shippingCoordination: "Shipping & Dispatch Coordination",
    dispatchInterface: "Dispatch Management Interface",
    assignDelivery: "Assign Delivery",
    inHousePersonnel: "In-House Personnel",
    courierAgency: "Courier Agency",
    available: "Available",
    assign: "Assign",
    generateShippingLabel: "Generate Shipping Label",
    trackingNumber: "Tracking Number",
    deliveryInstructions: "Delivery Instructions",
    scheduledDelivery: "Scheduled Delivery",
    dispatchOrder: "Dispatch Order",
    generate: "Generate",
    shippingDetails: "Shipping Details",
    createShippingLabels: "Create shipping labels for boxes",
    enterDeliveryInstructions: "Enter special delivery instructions...",

    // Sample personnel and agencies
    rameshKumar: "Ramesh Kumar",
    priyaSharma: "Priya Sharma",
    fastTrackDelivery: "FastTrack Delivery",
    quickShipExpress: "QuickShip Express",

    // Order timeline
    orderTimeline: "Order Timeline & Status Tracking",
    orderPlaced: "Order Placed",
    pickingStarted: "Picking Started",
    itemsPicked: "Items Picked",
    packingStarted: "Packing Started",
    invoiceGenerated: "Invoice Generated",
    readyForShipment: "Ready for Shipment",
    orderShipped: "Order Shipped",
    orderDelivered: "Order Delivered",

    // Timeline descriptions
    // orderReceived: "Order received and payment confirmed", // Reused key
    pickListGenerated: "Pick list generated, picking in progress", // This key means the description for picking started
    allItemsPicked: "All items successfully picked from warehouse",
    movedToPacking: "Items moved to packing station",
    invoiceCreated: "Invoice created: INV-2024-521001",
    packedReady: "Packed and ready for dispatch",
    pendingDelivery: "Pending delivery assignment",
    awaitingCompletion: "Awaiting delivery completion",

    // B2B vs B2C comparison
    b2bVsB2cDifferences: "B2B vs B2C Fulfillment Differences",
    b2cCharacteristics: "B2C Order Characteristics",
    b2cDesc: "Individual customers, smaller quantities, home delivery, immediate processing",
    b2bCharacteristics: "B2B Order Characteristics",
    b2bDesc: "Business customers, larger quantities, bulk packaging, scheduled delivery",

    // B2C characteristics list
    individualCustomers: "Individual customers",
    smallerQuantities: "Smaller order quantities",
    homeDelivery: "Home delivery required",
    immediateProcessing: "Immediate processing expected",
    singleAddress: "Single shipping address",
    consumerPackaging: "Consumer packaging",

    // B2B characteristics list
    businessCustomers: "Business customers",
    largerQuantities: "Larger order quantities",
    bulkPackaging: "Bulk/commercial packaging",
    scheduledDelivery: "Scheduled Delivery options",
    multipleAddresses: "Multiple shipping addresses",
    extendedTerms: "Extended payment terms",

    // Additional interface elements
    navigation: "Navigation",
    copy: "Copy",
    sampleTracking: "TRK-2024-521001",
    sampleSchedule: "May 22, 2024 - 2:00 PM",

    // Performance and quality metrics
    fulfillmentMetrics: "Fulfillment Performance Metrics",
    averagePickTime: "Average Pick Time",
    packingEfficiency: "Packing Efficiency",
    onTimeDelivery: "On-Time Delivery",
    orderAccuracy: "Order Accuracy",
    qualityControl: "Quality Control Checkpoints",
    inventoryVerification: "Inventory Verification",
    pickingAccuracy: "Picking Accuracy",
    packingInspection: "Packing Inspection",
    shippingValidation: "Shipping Validation",
  },

  kn: {
    pageTitle: "ಆರ್ಡರ್ ಪೂರೈಕೆ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ಗೋದಾಮಿನಲ್ಲಿ ವಸ್ತುಗಳನ್ನು ಆರಿಸುವುದರಿಂದ ಪ್ಯಾಕಿಂಗ್, ಇನ್ವಾಯ್ಸಿಂಗ್ ಮತ್ತು ವಿವರವಾದ ಕೆಲಸದ ಹರಿವುಗಳು ಮತ್ತು ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ ಕಾರ್ಯವಿಧಾನಗಳೊಂದಿಗೆ ವಿತರಣೆಗಾಗಿ ಸಾಗಣೆಗಳನ್ನು ತಯಾರಿಸುವವರೆಗಿನ ಸಂಪೂರ್ಣ ಆರ್ಡರ್ ಪೂರೈಕೆ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ.",

    step1Title: "ಪೂರೈಕೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ಪೂರೈಕೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಎಲ್ಲಾ ಒಳಬರುವ ಆರ್ಡರ್‌ಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ನಿಮ್ಮ ಕಾರ್ಯಾಚರಣಾ ಕಮಾಂಡ್ ಸೆಂಟರ್ ಆಗಿದೆ. ಇದು ನೈಜ-ಸಮಯದ ನವೀಕರಣಗಳು, ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್ ಮತ್ತು ಬುದ್ಧಿವಂತ ಫಿಲ್ಟರಿಂಗ್ ಸಾಮರ್ಥ್ಯಗಳೊಂದಿಗೆ ಪೂರೈಕೆಯ ಪ್ರತಿ ಹಂತದ ಮೂಲಕ ಆರ್ಡರ್‌ಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುವ ಸಮಗ್ರ ಕೆಲಸದ ಹರಿವು ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step1Description: "ಎಲ್ಲಾ ಆರ್ಡರ್ ಪ್ರಕ್ರಿಯೆಯ ಸಾಧನಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ಮತ್ತು ಆರ್ಡರ್ ರಸೀದಿಯಿಂದ ರವಾನೆಯವರೆಗೆ ಸಂಪೂರ್ಣ ಪೂರೈಕೆ ಕೆಲಸದ ಹರಿವನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ಪೂರೈಕೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ.",

    step2Title: "ಆರ್ಡರ್ ಸ್ಥಿತಿಗಳು ಮತ್ತು ಕೆಲಸದ ಹರಿವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
    step2Intro: "RetailOS ತನ್ನ ಪೂರೈಕೆ ಪ್ರಯಾಣದ ಮೂಲಕ ಪ್ರತಿ ಆರ್ಡರ್ ಅನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಸಮಗ್ರ ಆರ್ಡರ್ ಸ್ಥಿತಿ ವ್ಯವಸ್ಥೆಯನ್ನು ಬಳಸುತ್ತದೆ. ಈ ಸ್ಥಿತಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಸಮರ್ಥ ಆರ್ಡರ್ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಗ್ರಾಹಕ ಸಂವಹನಕ್ಕೆ ನಿರ್ಣಾಯಕವಾಗಿದೆ.",
    step2Description: "ಪ್ರತಿ ಆರ್ಡರ್ ವ್ಯಾಖ್ಯಾನಿಸಿದ ಹಂತಗಳ ಮೂಲಕ ಮುಂದುವರಿಯುತ್ತದೆ, ಪ್ರತಿ ಹಂತದಲ್ಲಿ ಸ್ಪಷ್ಟ ಸೂಚಕಗಳು ಮತ್ತು ಕ್ರಮಗಳು ಲಭ್ಯವಿರುತ್ತವೆ.",

    step3Title: "ಹೊಸ ಆರ್ಡರ್‌ಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವುದು (ಬಾಕಿ ಸ್ಥಿತಿ)",
    step3Intro: "ಹೊಸ ಆರ್ಡರ್‌ಗಳು 'ಬಾಕಿ' ಅಥವಾ 'ಹೊಸ ಆರ್ಡರ್‌ಗಳು' ವಿಭಾಗದಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ ಮತ್ತು ಅವುಗಳನ್ನು ಪೂರೈಕೆ ಕೆಲಸದ ಹರಿವಿಗೆ ಸರಿಸಲು ಆರಂಭಿಕ ಪ್ರಕ್ರಿಯೆಯ ಅಗತ್ಯವಿದೆ. ಇದು ಆರ್ಡರ್ ಮೌಲ್ಯೀಕರಣ, ದಾಸ್ತಾನು ಪರಿಶೀಲನೆ ಮತ್ತು ಆಯ್ಕೆಗಾಗಿ ತಯಾರಿಯನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ.",
    step3Description: "ಹೊಸ ಆರ್ಡರ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸುವುದು, ದಾಸ್ತಾನು ಲಭ್ಯತೆಯನ್ನು ಮೌಲ್ಯೀಕರಿಸುವುದು ಮತ್ತು ಪೂರೈಕೆ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸುವುದು ಹೇಗೆ ಎಂಬುದನ್ನು ಕಲಿಯಿರಿ.",

    step4Title: "ಆರ್ಡರ್ ಆಯ್ಕೆ ಪ್ರಕ್ರಿಯೆ",
    step4Intro: "ಆಯ್ಕೆ ಪ್ರಕ್ರಿಯೆಯು ಗೋದಾಮಿನ ಸಿಬ್ಬಂದಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಿದ ಆಯ್ಕೆ ಪಟ್ಟಿಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಆರ್ಡರ್‌ಗಳಿಗಾಗಿ ವಸ್ತುಗಳನ್ನು ಸಂಗ್ರಹಿಸುವ ಸ್ಥಳವಾಗಿದೆ. RetailOS ಪ್ರಯಾಣದ ಸಮಯವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಮತ್ತು ದಕ್ಷತೆಯನ್ನು ಗರಿಷ್ಠಗೊಳಿಸಲು ಸ್ಥಳ-ಆಧಾರಿತ ಆಯ್ಕೆ ಮಾರ್ಗಗಳನ್ನು ಉತ್ಪಾದಿಸುತ್ತದೆ.",
    step4Description: "ಆಯ್ಕೆ ಪಟ್ಟಿ ಉತ್ಪಾದನೆ, ದಾಸ್ತಾನು ಹಂಚಿಕೆ ಮತ್ತು ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ ಕಾರ್ಯವಿಧಾನಗಳು ಸೇರಿದಂತೆ ಸಂಪೂರ್ಣ ಆಯ್ಕೆ ಕೆಲಸದ ಹರಿವನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ.",

    step5Title: "ಆರ್ಡರ್ ಪ್ಯಾಕಿಂಗ್ ಮತ್ತು ಇನ್ವಾಯ್ಸ್ ಉತ್ಪಾದನೆ",
    step5Intro: "ಆಯ್ಕೆ ಪೂರ್ಣಗೊಂಡ ನಂತರ, ಆರ್ಡರ್‌ಗಳು ಪ್ಯಾಕಿಂಗ್ ಸ್ಟೇಷನ್‌ಗೆ ಚಲಿಸುತ್ತವೆ, ಅಲ್ಲಿ ವಸ್ತುಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ, ಪೆಟ್ಟಿಗೆಗಳಲ್ಲಿ ಸಂಘಟಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಸಾಗಣೆಗಾಗಿ ತಯಾರಿಸಲಾಗುತ್ತದೆ. ಈ ಹಂತವು ಇನ್ವಾಯ್ಸ್ ಉತ್ಪಾದನೆ ಮತ್ತು ಶಿಪ್ಪಿಂಗ್ ಲೇಬಲ್ ರಚನೆಯನ್ನು ಸಹ ಒಳಗೊಂಡಿದೆ.",
    step5Description: "ಪೆಟ್ಟಿಗೆ ನಿರ್ವಹಣೆ, ವಸ್ತು ಪರಿಶೀಲನೆ ಮತ್ತು ದಾಖಲೀಕರಣ ಉತ್ಪಾದನೆ ಸೇರಿದಂತೆ ಸಮಗ್ರ ಪ್ಯಾಕಿಂಗ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಕಲಿಯಿರಿ.",

    step6Title: "ರವಾನೆಗಾಗಿ ಸಿದ್ಧ ಮತ್ತು ಶಿಪ್ಪಿಂಗ್ ಸಮನ್ವಯ",
    step6Intro: "ಅಂತಿಮ ಪೂರೈಕೆ ಹಂತವು ವಿತರಣಾ ಸಿಬ್ಬಂದಿ ಅಥವಾ ಕೊರಿಯರ್ ಸೇವೆಗಳೊಂದಿಗೆ ಸಮನ್ವಯಗೊಳಿಸುವುದು, ಶಿಪ್ಪಿಂಗ್ ಲೇಬಲ್‌ಗಳನ್ನು ಉತ್ಪಾದಿಸುವುದು ಮತ್ತು ಎಲ್ಲಾ ಅಗತ್ಯ ದಾಖಲೀಕರಣ ಮತ್ತು ಟ್ರ್ಯಾಕಿಂಗ್ ಮಾಹಿತಿಯೊಂದಿಗೆ ಸರಿಯಾದ ಹಸ್ತಾಂತರವನ್ನು ಖಚಿತಪಡಿಸುವುದನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ.",
    step6Description: "ರವಾನೆಗಾಗಿ ಆರ್ಡರ್‌ಗಳನ್ನು ತಯಾರಿಸುವ ಮೂಲಕ ಮತ್ತು ವಿತರಣಾ ತಂಡಗಳೊಂದಿಗೆ ಸಮನ್ವಯಗೊಳಿಸುವ ಮೂಲಕ ಪೂರೈಕೆ ಚಕ್ರವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.",

    step7Title: "ವಿತರಣಾ ನಿಯೋಜನೆ ಮತ್ತು ಟ್ರ್ಯಾಕಿಂಗ್",
    step7Intro: "RetailOS ನೈಜ-ಸಮಯದ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಗ್ರಾಹಕ ಸಂವಹನ ಸಾಮರ್ಥ್ಯಗಳೊಂದಿಗೆ, ಆಂತರಿಕ ಸಿಬ್ಬಂದಿ ಅಥವಾ ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಕೊರಿಯರ್ ಏಜೆನ್ಸಿಗಳಿಗೆ ನಿಯೋಜನೆ ಸೇರಿದಂತೆ ಸಮಗ್ರ ವಿತರಣಾ ನಿರ್ವಹಣೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step7Description: "ವಿತರಣಾ ಪ್ರಕ್ರಿಯೆಯ ಉದ್ದಕ್ಕೂ ವಿತರಣೆಗಳನ್ನು ಹೇಗೆ ನಿಯೋಜಿಸುವುದು, ಸಾಗಣೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದು ಮತ್ತು ಗ್ರಾಹಕ ಸಂವಹನಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು ಎಂಬುದನ್ನು ಕಲಿಯಿರಿ.",

    step8Title: "B2B ವರ್ಸಸ್ B2C ಪೂರೈಕೆ ವ್ಯತ್ಯಾಸಗಳು",
    step8Intro: "B2C (ಗ್ರಾಹಕ) ಮತ್ತು B2B (ವ್ಯಾಪಾರ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ) ಪೂರೈಕೆ ಪ್ರಕ್ರಿಯೆಗಳ ನಡುವಿನ ವ್ಯತ್ಯಾಸಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ವಿವಿಧ ಗ್ರಾಹಕ ಪ್ರಕಾರಗಳು ಮತ್ತು ಆರ್ಡರ್ ಗುಣಲಕ್ಷಣಗಳಿಗಾಗಿ ಕೆಲಸದ ಹರಿವುಗಳನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    step8Description: "B2C ಮತ್ತು B2B ಆರ್ಡರ್ ಪೂರೈಕೆ ಎರಡಕ್ಕೂ ನಿರ್ದಿಷ್ಟ ಪರಿಗಣನೆಗಳು ಮತ್ತು ಕೆಲಸದ ಹರಿವುಗಳನ್ನು ಕಲಿಯಿರಿ.",

    nextStepsTitle: "ಆರ್ಡರ್ ಪೂರೈಕೆ ಪಾಂಡಿತ್ಯ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನೀವು ಪ್ರಾಥಮಿಕ ಆರ್ಡರ್ ರಸೀದಿಯಿಂದ ಅಂತಿಮ ವಿತರಣಾ ಹಸ್ತಾಂತರದವರೆಗೆ ಸಂಪೂರ್ಣ ಆರ್ಡರ್ ಪೂರೈಕೆ ಕೆಲಸದ ಹರಿವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಕರಗತ ಮಾಡಿಕೊಂಡಿದ್ದೀರಿ. ನಿಮ್ಮ ಆರ್ಡರ್‌ಗಳನ್ನು ಈಗ ಸಮಗ್ರ ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣಗಳು ಮತ್ತು ದಾಖಲೀಕರಣದೊಂದಿಗೆ ಆಯ್ಕೆ, ಪ್ಯಾಕಿಂಗ್, ಇನ್ವಾಯ್ಸಿಂಗ್ ಮತ್ತು ರವಾನೆಯ ಮೂಲಕ ಸಮರ್ಥವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತದೆ.",
    nextStepsButton: "ಲಾಸ್ಟ್-ಮೈಲ್ ಲಾಜಿಸ್ಟಿಕ್ಸ್‌ಗೆ ಮುಂದುವರಿಯಿರಿ",
    openDashboard: "ಪೂರೈಕೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ತೆರೆಯಿರಿ",

    // Dashboard navigation and interface
    fulfillmentDashboard: "ಪೂರೈಕೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    manageOrders: "ಸಂಪೂರ್ಣ ಪೂರೈಕೆ ಕೆಲಸದ ಹರಿವಿನ ಮೂಲಕ ಆರ್ಡರ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    fulfillment: "ಪೂರೈಕೆ",
    analytics: "ಅನಾಲಿಟಿಕ್ಸ್",
    inventory: "ದಾಸ್ತಾನು",
    orders: "ಆರ್ಡರ್‌ಗಳು",
    clickFulfillment: "ಆರ್ಡರ್ ಪೂರೈಕೆ ಕೆಲಸದ ಹರಿವು ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆಯನ್ನು ಪ್ರವೇಶಿಸಲು ಮುಖ್ಯ ಸೈಡ್‌ಬಾರ್‌ನಿಂದ 'ಪೂರೈಕೆ' ಕ್ಲಿಕ್ ಮಾಡಿ.",

    // Main dashboard tabs and buttons
    b2bAndB2cOrders: "B2B ಮತ್ತು B2C ಆರ್ಡರ್‌ಗಳು",
    vendorReturns: "ಮಾರಾಟಗಾರ ರಿಟರ್ನ್‌ಗಳು",
    scanOrder: "ಆರ್ಡರ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    printLabels: "ಲೇಬಲ್‌ಗಳನ್ನು ಮುದ್ರಿಸಿ",
    exportData: "ಡೇಟಾ ರಫ್ತು ಮಾಡಿ",
    filterSearchOrders: "ಆರ್ಡರ್‌ಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ ಮತ್ತು ಹುಡುಕಿ",
    searchPlaceholder: "ಆರ್ಡರ್ ID, ಗ್ರಾಹಕರ ಹೆಸರು, ಅಥವಾ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಯ ಹೆಸರಿನ ಮೂಲಕ ಹುಡುಕಿ...",

    // Filter options
    allOrders: "ಎಲ್ಲಾ ಆರ್ಡರ್‌ಗಳು",
    b2cOrders: "B2C ಆರ್ಡರ್‌ಗಳು",
    b2bOrders: "B2B ಆರ್ಡರ್‌ಗಳು",
    showingResults: "{count} ರಲ್ಲಿ {total} ಆರ್ಡರ್‌ಗಳನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ",
    b2cOrdersOnly: "B2C ಆರ್ಡರ್‌ಗಳು ಮಾತ್ರ",

    // Order status columns with counts
    newOrders: "ಹೊಸ ಆರ್ಡರ್‌ಗಳು",
    readyToPick: "ಆಯ್ಕೆಗೆ ಸಿದ್ಧ",
    picking: "ಆಯ್ಕೆ ಮಾಡಲಾಗುತ್ತಿದೆ",
    inProgress: "ಪ್ರಗತಿಯಲ್ಲಿದೆ",
    packingInvoiced: "ಪ್ಯಾಕಿಂಗ್ ಮತ್ತು ಇನ್ವಾಯ್ಸ್ ಮಾಡಲಾಗಿದೆ",
    awaitingPack: "ಪ್ಯಾಕ್‌ಗಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ",
    shipped: "ರವಾನೆ ಮಾಡಲಾಗಿದೆ",
    thisWeek: "ಈ ವಾರ",
    delivered: "ವಿತರಿಸಲಾಗಿದೆ",
    completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
    viewAllOrders: "ಎಲ್ಲಾ {count} ಆರ್ಡರ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ",

    // Order status explanations
    orderStatusExplanation: "ಆರ್ಡರ್ ಸ್ಥಿತಿ ಕೆಲಸದ ಹರಿವಿನ ವಿವರಣೆ",
    pendingStatus: "ಬಾಕಿ/ಹೊಸ ಆರ್ಡರ್‌ಗಳು",
    pendingDesc: "ಪರಿಶೀಲಿಸಬೇಕಾದ ಮತ್ತು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬೇಕಾದ ಹೊಸ ಆರ್ಡರ್‌ಗಳು. ಈ ಹಂತದಲ್ಲಿ ದಾಸ್ತಾನು ಲಭ್ಯತೆಯನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ.",
    pickingStatus: "ಆಯ್ಕೆ ಮಾಡಲಾಗುತ್ತಿದೆ",
    pickingDesc: "ಗೋದಾಮಿನ ಸಿಬ್ಬಂದಿಯಿಂದ ಪ್ರಸ್ತುತ ಆಯ್ಕೆ ಮಾಡಲಾಗುತ್ತಿರುವ ಆರ್ಡರ್‌ಗಳು. ಆಯ್ಕೆ ಪಟ್ಟಿಗಳನ್ನು ರಚಿಸಲಾಗಿದೆ ಮತ್ತು ವಸ್ತುಗಳನ್ನು ಸಂಗ್ರಹಿಸಲಾಗುತ್ತಿದೆ.",
    packingStatus: "ಪ್ಯಾಕಿಂಗ್ ಮತ್ತು ಇನ್ವಾಯ್ಸ್ ಮಾಡಲಾಗಿದೆ",
    packingDesc: "ವಸ್ತುಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ ಮತ್ತು ಪೆಟ್ಟಿಗೆಗಳಲ್ಲಿ ಪ್ಯಾಕ್ ಮಾಡಲಾಗುತ್ತಿದೆ. ಈ ಹಂತದಲ್ಲಿ ಇನ್ವಾಯ್ಸ್‌ಗಳನ್ನು ರಚಿಸಲಾಗುತ್ತದೆ.",
    shippedStatus: "ರವಾನೆ ಮಾಡಲಾಗಿದೆ",
    shippedDesc: "ರವಾನೆ ಮಾಡಲಾದ ಮತ್ತು ಗ್ರಾಹಕರಿಗೆ ತಲುಪುತ್ತಿರುವ ಆರ್ಡರ್‌ಗಳು. ಟ್ರ್ಯಾಕಿಂಗ್ ಮಾಹಿತಿ ಲಭ್ಯವಿದೆ.",
    deliveredStatus: "ವಿತರಿಸಲಾಗಿದೆ",
    deliveredDesc: "ಗ್ರಾಹಕರಿಗೆ ಯಶಸ್ವಿಯಾಗಿ ವಿತರಿಸಲಾದ ಆರ್ಡರ್‌ಗಳು. ಪೂರೈಕೆ ಪ್ರಕ್ರಿಯೆ ಪೂರ್ಣಗೊಂಡಿದೆ.",

    // New order processing interface
    processingNewOrders: "ಹೊಸ ಆರ್ಡರ್‌ಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತಿದೆ",
    newOrderInterface: "ಹೊಸ ಆರ್ಡರ್ ಪ್ರಕ್ರಿಯೆ ಇಂಟರ್ಫೇಸ್",
    orderDetails: "ಆರ್ಡರ್ ವಿವರಗಳು",
    customer: "ಗ್ರಾಹಕ",
    orderDate: "ಆರ್ಡರ್ ದಿನಾಂಕ",
    paymentMethod: "ಪಾವತಿ ವಿಧಾನ",
    deliveryAddress: "ವಿತರಣಾ ವಿಳಾಸ",
    orderItems: "ಆರ್ಡರ್ ಐಟಂಗಳು",
    totalAmount: "ಒಟ್ಟು ಮೊತ್ತ",
    startFulfillment: "ಪೂರೈಕೆ ಪ್ರಾರಂಭಿಸಿ",
    viewFullDetails: "ಪೂರ್ಣ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    newOrder: "ಹೊಸ ಆರ್ಡರ್",
    b2cCustomer: "B2C ಗ್ರಾಹಕ",
    digitalWallet: "ಡಿಜಿಟಲ್ ವಾಲೆಟ್",
    paymentComplete: "ಪಾವತಿ ಪೂರ್ಣಗೊಂಡಿದೆ",

    // Sample customer details
    sarahWilson: "ಸಾರಾ ವಿಲ್ಸನ್",
    orderReceived: "ಆರ್ಡರ್ ಸ್ವೀಕರಿಸಲಾಗಿದೆ ಮತ್ತು ಪಾವತಿ ದೃಢೀಕರಿಸಲಾಗಿದೆ",
    greenValleyAddress: "123 ಗ್ರೀನ್ ವ್ಯಾಲಿ ರೋಡ್, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ 560001",
    customerPhone: "ದೂರವಾಣಿ: +91 98765 43210",

    // Picking process interface
    pickingInterface: "ಆರ್ಡರ್ ಆಯ್ಕೆ ಇಂಟರ್ಫೇಸ್",
    generatePickList: "ಆಯ್ಕೆ ಪಟ್ಟಿ ರಚಿಸಿ",
    pickListGenerated: "ಆಯ್ಕೆ ಪಟ್ಟಿ ರಚಿಸಲಾಗಿದೆ",
    orderNumber: "ಆರ್ಡರ್ #",
    pickingInstructions: "ಆಯ್ಕೆ ಸೂಚನೆಗಳು",
    followOptimizedRoute: "ಎಲ್ಲಾ ವಸ್ತುಗಳನ್ನು ಸಮರ್ಥವಾಗಿ ಸಂಗ್ರಹಿಸಲು ಕೆಳಗಿನ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಿದ ಮಾರ್ಗವನ್ನು ಅನುಸರಿಸಿ. ಪಿಕ್ಕಪ್ ದೃಢೀಕರಿಸಲು ಪ್ರತಿ ಐಟಂನ ಬಾರ್‌ಕೋಡ್ ಅನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
    warehouseLocation: "ಗೋದಾಮಿನ ಸ್ಥಳ",
    quantityToPick: "ಆಯ್ಕೆ ಮಾಡಬೇಕಾದ ಪ್ರಮಾಣ",
    scanBarcode: "ಬಾರ್‌ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    confirmPick: "ಪಿಕ್ಕಪ್ ದೃಢೀಕರಿಸಿ",
    pickingComplete: "ಆಯ್ಕೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
    proceedToPacking: "ಪ್ಯಾಕಿಂಗ್‌ಗೆ ಮುಂದುವರಿಯಿರಿ",

    // Products in pick list
    organicBasmatiRice: "ಸಾವಯವ ಬಾಸ್ಮತಿ ಅಕ್ಕಿ 1ಕೆಜಿ",
    wholeWheatFlour: "ಸಂಪೂರ್ಣ ಗೋಧಿ ಹಿಟ್ಟು 1ಕೆಜಿ",
    oliveOilExtra: "ಆಲಿವ್ ಎಣ್ಣೆ ಎಕ್ಸ್ಟ್ರಾ ವರ್ಜಿನ್ 500ಮಿಲಿ",
    locationA: "ಸ್ಥಳ: A-1-3",
    locationB: "ಸ್ಥಳ: B-2-1",
    locationC: "ಸ್ಥಳ: C-1-5",
    quantity: "ಪ್ರಮಾಣ",
    verified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",

    // Packing interface
    packingInterface: "ಆರ್ಡರ್ ಪ್ಯಾಕಿಂಗ್ ಇಂಟರ್ಫೇಸ್",
    packingStation: "ಪ್ಯಾಕಿಂಗ್ ಸ್ಟೇಷನ್",
    packing: "ಪ್ಯಾಕಿಂಗ್",
    itemVerification: "ಐಟಂ ಪರಿಶೀಲನೆ",
    boxManagement: "ಬಾಕ್ಸ್ ನಿರ್ವಹಣೆ",
    createNewBox: "ಹೊಸ ಬಾಕ್ಸ್ ರಚಿಸಿ",
    boxId: "ಬಾಕ್ಸ್ ID",
    addItemToBox: "ಬಾಕ್ಸ್‌ಗೆ ಐಟಂ ಸೇರಿಸಿ",
    boxContents: "ಬಾಕ್ಸ್ ವಿಷಯಗಳು",
    generateInvoice: "ಇನ್ವಾಯ್ಸ್ ರಚಿಸಿ",
    packingComplete: "ಪ್ಯಾಕಿಂಗ್ ಪೂರ್ಣಗೊಂಡಿದೆ",
    readyForDispatch: "ರವಾನೆಗಾಗಿ ಸಿದ್ಧ",
    items: "ಐಟಂಗಳು",

    // Shipping and dispatch
    shippingCoordination: "ಶಿಪ್ಪಿಂಗ್ ಮತ್ತು ರವಾನೆ ಸಮನ್ವಯ",
    dispatchInterface: "ರವಾನೆ ನಿರ್ವಹಣೆ ಇಂಟರ್ಫೇಸ್",
    assignDelivery: "ವಿತರಣೆಯನ್ನು ನಿಯೋಜಿಸಿ",
    inHousePersonnel: "ಆಂತರಿಕ ಸಿಬ್ಬಂದಿ",
    courierAgency: "ಕೊರಿಯರ್ ಏಜೆನ್ಸಿ",
    available: "ಲಭ್ಯವಿದೆ",
    assign: "ನಿಯೋಜಿಸಿ",
    generateShippingLabel: "ಶಿಪ್ಪಿಂಗ್ ಲೇಬಲ್ ರಚಿಸಿ",
    trackingNumber: "ಟ್ರ್ಯಾಕಿಂಗ್ ಸಂಖ್ಯೆ",
    deliveryInstructions: "ವಿತರಣಾ ಸೂಚನೆಗಳು",
    scheduledDelivery: "ನಿಗದಿತ ವಿತರಣೆ",
    dispatchOrder: "ಆರ್ಡರ್ ರವಾನಿಸಿ",
    generate: "ರಚಿಸಿ",
    shippingDetails: "ಶಿಪ್ಪಿಂಗ್ ವಿವರಗಳು",
    createShippingLabels: "ಪೆಟ್ಟಿಗೆಗಳಿಗೆ ಶಿಪ್ಪಿಂಗ್ ಲೇಬಲ್‌ಗಳನ್ನು ರಚಿಸಿ",
    enterDeliveryInstructions: "ವಿಶೇಷ ವಿತರಣಾ ಸೂಚನೆಗಳನ್ನು ನಮೂದಿಸಿ...",

    // Sample personnel and agencies
    rameshKumar: "ರಮೇಶ್ ಕುಮಾರ್",
    priyaSharma: "ಪ್ರಿಯಾ ಶರ್ಮಾ",
    fastTrackDelivery: "ಫಾಸ್ಟ್‌ಟ್ರ್ಯಾಕ್ ಡೆಲಿವರಿ",
    quickShipExpress: "ಕ್ವಿಕ್‌ಶಿಪ್ ಎಕ್ಸ್‌ಪ್ರೆಸ್",

    // Order timeline
    orderTimeline: "ಆರ್ಡರ್ ಟೈಮ್‌ಲೈನ್ ಮತ್ತು ಸ್ಥಿತಿ ಟ್ರ್ಯಾಕಿಂಗ್",
    orderPlaced: "ಆರ್ಡರ್ ಇರಿಸಲಾಗಿದೆ",
    pickingStarted: "ಆಯ್ಕೆ ಪ್ರಾರಂಭವಾಗಿದೆ",
    itemsPicked: "ವಸ್ತುಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ",
    packingStarted: "ಪ್ಯಾಕಿಂಗ್ ಪ್ರಾರಂಭವಾಗಿದೆ",
    invoiceGenerated: "ಇನ್ವಾಯ್ಸ್ ರಚಿಸಲಾಗಿದೆ",
    readyForShipment: "ರವಾನೆಗಾಗಿ ಸಿದ್ಧ",
    orderShipped: "ಆರ್ಡರ್ ರವಾನೆಯಾಗಿದೆ",
    orderDelivered: "ಆರ್ಡರ್ ವಿತರಿಸಲಾಗಿದೆ",

    // Timeline descriptions
    // orderReceived: "ಆರ್ಡರ್ ಸ್ವೀಕರಿಸಲಾಗಿದೆ ಮತ್ತು ಪಾವತಿ ದೃಢೀಕರಿಸಲಾಗಿದೆ", // Reused key for description from new order processing, fits here too
    pickListGenerated: "ಆಯ್ಕೆ ಪಟ್ಟಿ ರಚಿಸಲಾಗಿದೆ, ಆಯ್ಕೆ ಪ್ರಗತಿಯಲ್ಲಿದೆ", // This key means the description for picking started
    allItemsPicked: "ಎಲ್ಲಾ ವಸ್ತುಗಳನ್ನು ಗೋದಾಮಿನಿಂದ ಯಶಸ್ವಿಯಾಗಿ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ",
    movedToPacking: "ವಸ್ತುಗಳನ್ನು ಪ್ಯಾಕಿಂಗ್ ಸ್ಟೇಷನ್‌ಗೆ ಸರಿಸಲಾಗಿದೆ",
    invoiceCreated: "ಇನ್ವಾಯ್ಸ್ ರಚಿಸಲಾಗಿದೆ: INV-2024-521001",
    packedReady: "ಪ್ಯಾಕ್ ಮಾಡಲಾಗಿದೆ ಮತ್ತು ರವಾನೆಗಾಗಿ ಸಿದ್ಧವಾಗಿದೆ",
    pendingDelivery: "ವಿತರಣಾ ನಿಯೋಜನೆ ಬಾಕಿ ಇದೆ",
    awaitingCompletion: "ವಿತರಣೆ ಪೂರ್ಣಗೊಳ್ಳಲು ಕಾಯಲಾಗುತ್ತಿದೆ",

    // B2B vs B2C comparison
    b2bVsB2cDifferences: "B2B ವರ್ಸಸ್ B2C ಪೂರೈಕೆ ವ್ಯತ್ಯಾಸಗಳು",
    b2cCharacteristics: "B2C ಆರ್ಡರ್ ಗುಣಲಕ್ಷಣಗಳು",
    b2cDesc: "ವೈಯಕ್ತಿಕ ಗ್ರಾಹಕರು, ಸಣ್ಣ ಪ್ರಮಾಣಗಳು, ಮನೆ ವಿತರಣೆ, ತಕ್ಷಣದ ಪ್ರಕ್ರಿಯೆ",
    b2bCharacteristics: "B2B ಆರ್ಡರ್ ಗುಣಲಕ್ಷಣಗಳು",
    b2bDesc: "ವ್ಯಾಪಾರ ಗ್ರಾಹಕರು, ದೊಡ್ಡ ಪ್ರಮಾಣಗಳು, ಬೃಹತ್ ಪ್ಯಾಕೇಜಿಂಗ್, ನಿಗದಿತ ವಿತರಣೆ",

    // B2C characteristics list
    individualCustomers: "ವೈಯಕ್ತಿಕ ಗ್ರಾಹಕರು",
    smallerQuantities: "ಸಣ್ಣ ಆರ್ಡರ್ ಪ್ರಮಾಣಗಳು",
    homeDelivery: "ಮನೆ ವಿತರಣೆ ಅಗತ್ಯವಿದೆ",
    immediateProcessing: "ತಕ್ಷಣದ ಪ್ರಕ್ರಿಯೆ ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ",
    singleAddress: "ಏಕ ಶಿಪ್ಪಿಂಗ್ ವಿಳಾಸ",
    consumerPackaging: "ಗ್ರಾಹಕ ಪ್ಯಾಕೇಜಿಂಗ್",

    // B2B characteristics list
    businessCustomers: "ವ್ಯಾಪಾರ ಗ್ರಾಹಕರು",
    largerQuantities: "ದೊಡ್ಡ ಆರ್ಡರ್ ಪ್ರಮಾಣಗಳು",
    bulkPackaging: "ಬೃಹತ್/ವಾಣಿಜ್ಯ ಪ್ಯಾಕೇಜಿಂಗ್",
    scheduledDelivery: "ನಿಗದಿತ ವಿತರಣಾ ಆಯ್ಕೆಗಳು",
    multipleAddresses: "ಬಹು ಶಿಪ್ಪಿಂಗ್ ವಿಳಾಸಗಳು",
    extendedTerms: "ವಿಸ್ತೃತ ಪಾವತಿ ನಿಯಮಗಳು",

    // Additional interface elements
    navigation: "ನ್ಯಾವಿಗೇಶನ್",
    copy: "ನಕಲಿಸಿ",
    sampleTracking: "TRK-2024-521001",
    sampleSchedule: "ಮೇ 22, 2024 - ಮಧ್ಯಾಹ್ನ 2:00",

    // Performance and quality metrics
    fulfillmentMetrics: "ಪೂರೈಕೆ ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್",
    averagePickTime: "ಸರಾಸರಿ ಆಯ್ಕೆ ಸಮಯ",
    packingEfficiency: "ಪ್ಯಾಕಿಂಗ್ ದಕ್ಷತೆ",
    onTimeDelivery: "ಸಮಯಕ್ಕೆ ವಿತರಣೆ",
    orderAccuracy: "ಆರ್ಡರ್ ನಿಖರತೆ",
    qualityControl: "ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ ಚೆಕ್‌ಪಾಯಿಂಟ್‌ಗಳು",
    inventoryVerification: "ದಾಸ್ತಾನು ಪರಿಶೀಲನೆ",
    pickingAccuracy: "ಆಯ್ಕೆ ನಿಖರತೆ",
    packingInspection: "ಪ್ಯಾಕಿಂಗ್ ಪರಿಶೀಲನೆ",
    shippingValidation: "ಶಿಪ್ಪಿಂಗ್ ಮೌಲ್ಯೀಕರಣ",
  },
  te: {
    pageTitle: "ఆర్డర్ ఫల్ఫిల్మెంట్ మాన్యువల్",
    backToManual: "మాన్యువల్‌కి తిరిగి వెళ్ళండి",
    description: "గిడ్డంగిలో వస్తువులను ఎంచుకోవడం నుండి ప్యాకింగ్, ఇన్వాయిసింగ్ మరియు వివరణాత్మక వర్క్‌ఫ్లోలు మరియు నాణ్యత నియంత్రణ విధానాలతో డెలివరీ కోసం షిప్మెంట్లను సిద్ధం చేయడం వరకు పూర్తి ఆర్డర్ ఫల్ఫిల్మెంట్ ప్రక్రియను నేర్చుకోండి.",

    step1Title: "ఫల్ఫిల్మెంట్ డాష్‌బోర్డ్ అవలోకనం",
    step1Intro: "ఫల్ఫిల్మెంట్ డాష్‌బోర్డ్ అనేది అన్ని ఇన్‌కమింగ్ ఆర్డర్లను ప్రాసెస్ చేయడానికి మీ ఆపరేషనల్ కమాండ్ సెంటర్. ఇది రియల్-టైమ్ అప్‌డేట్లు, పనితీరు మెట్రిక్స్ మరియు స్మార్ట్ ఫిల్టరింగ్ సామర్థ్యాలతో ఫల్ఫిల్మెంట్ యొక్క ప్రతి దశలో ఆర్డర్లను ట్రాక్ చేసే సమగ్ర వర్క్‌ఫ్లో మేనేజ్‌మెంట్ సిస్టమ్‌ను అందిస్తుంది.",
    step1Description: "అన్ని ఆర్డర్ ప్రాసెసింగ్ టూల్స్‌కు ప్రాప్యత పొందడానికి మరియు ఆర్డర్ రసీదు నుండి డిస్పాచ్ వరకు పూర్తి ఫల్ఫిల్మెంట్ వర్క్‌ఫ్లోను పర్యవేక్షించడానికి ఫల్ఫిల్మెంట్ డాష్‌బోర్డ్‌కి నావిగేట్ చేయండి.",

    step2Title: "ఆర్డర్ స్థితులు & వర్క్‌ఫ్లో అర్థం చేసుకోవడం",
    step2Intro: "RetailOS ప్రతి ఆర్డర్‌ను దాని ఫల్ఫిల్మెంట్ ప్రయాణంలో ట్రాక్ చేయడానికి సమగ్ర ఆర్డర్ స్థితి వ్యవస్థను ఉపయోగిస్తుంది. ఈ స్థితులను అర్థం చేసుకోవడం సమర్థ ఆర్డర్ ప్రాసెసింగ్ మరియు కస్టమర్ కమ్యూనికేషన్ కోసం కీలకం.",
    step2Description: "ప్రతి ఆర్డర్ నిర్వచించబడిన దశల ద్వారా ముందుకు వెళుతుంది, ప్రతి దశలో స్పష్టమైన సూచికలు మరియు చర్యలు అందుబాటులో ఉంటాయి.",

    step3Title: "కొత్త ఆర్డర్లను ప్రాసెస్ చేయడం (పెండింగ్ స్థితి)",
    step3Intro: "కొత్త ఆర్డర్లు 'పెండింగ్' లేదా 'కొత్త ఆర్డర్లు' విభాగంలో కనిపిస్తాయి మరియు వాటిని ఫల్ఫిల్మెంట్ వర్క్‌ఫ్లోలోకి తరలించడానికి ప్రారంభ ప్రాసెసింగ్ అవసరం. ఇందులో ఆర్డర్ వాలిడేషన్, ఇన్వెంటరీ ధృవీకరణ మరియు పికింగ్ కోసం సిద్ధత ఉంటాయి.",
    step3Description: "కొత్త ఆర్డర్లను ఎలా సమీక్షించాలి, ఇన్వెంటరీ లభ్యతను ధృవీకరించాలి మరియు ఫల్ఫిల్మెంట్ ప్రక్రియను ప్రారంభించాలి అనేది నేర్చుకోండి.",

    step4Title: "ఆర్డర్ పికింగ్ ప్రక్రియ",
    step4Intro: "పికింగ్ ప్రక్రియ అనేది గిడ్డంగి సిబ్బంది ఆప్టిమైజ్డ్ పిక్ జాబితాలను ఉపయోగించి ఆర్డర్ల కోసం వస్తువులను సేకరించే స్థానం. RetailOS ప్రయాణ సమయాన్ని తగ్గించడానికి మరియు సామర్థ్యాన్ని గరిష్టం చేయడానికి లొకేషన్-ఆధారిత పికింగ్ మార్గాలను ఉత్పత్తి చేస్తుంది.",
    step4Description: "పిక్ జాబితా జనరేషన్, ఇన్వెంటరీ కేటాయింపు మరియు నాణ్యత నియంత్రణ విధానాలు సహా పూర్తి పికింగ్ వర్క్‌ఫ్లోను నేర్చుకోండి.",

    step5Title: "ఆర్డర్ ప్యాకింగ్ & ఇన్వాయిస్ జనరేషన్",
    step5Intro: "పికింగ్ పూర్తయిన తర్వాత, ఆర్డర్లు ప్యాకింగ్ స్టేషన్‌కి తరలిస్తాయి, అక్కడ వస్తువులు ధృవీకరించబడతాయి, పెట్టెలలో నిర్వహించబడతాయి మరియు షిప్మెంట్ కోసం సిద్ధం చేయబడతాయి. ఈ దశలో ఇన్వాయిస్ జనరేషన్ మరియు షిప్పింగ్ లేబుల్ క్రియేషన్ కూడా ఉంటాయి.",
    step5Description: "బాక్స్ మేనేజ్‌మెంట్, వస్తువు ధృవీకరణ మరియు డాక్యుమెంటేషన్ జనరేషన్ సహా సమగ్ర ప్యాకింగ్ ప్రక్రియను నేర్చుకోండి.",

    step6Title: "డిస్పాచ్ & షిప్పింగ్ సమన్వయం కోసం సిద్ధం",
    step6Intro: "చివరి ఫల్ఫిల్మెంట్ దశలో డెలివరీ సిబ్బంది లేదా కూరియర్ సేవలతో సమన్వయం, షిప్పింగ్ లేబుల్స్ జనరేషన్ మరియు అన్ని అవసరమైన డాక్యుమెంటేషన్ మరియు ట్రాకింగ్ సమాచారంతో సరైన హస్తాంతరాన్ని నిర్ధారించడం ఉంటాయి.",
    step6Description: "డిస్పాచ్ కోసం ఆర్డర్లను సిద్ధం చేయడం మరియు డెలివరీ బృందాలతో సమన్వయం చేయడం ద్వారా ఫల్ఫిల్మెంట్ చక్రాన్ని పూర్తి చేయండి.",

    step7Title: "డెలివరీ కేటాయింపు & ట్రాకింగ్",
    step7Intro: "RetailOS రియల్-టైమ్ ట్రాకింగ్ మరియు కస్టమర్ కమ్యూనికేషన్ సామర్థ్యాలతో, ఇన్-హౌస్ సిబ్బంది లేదా మూడవ పక్ష కూరియర్ ఏజెన్సీలకు కేటాయింపు సహా సమగ్ర డెలివరీ మేనేజ్‌మెంట్‌ను అందిస్తుంది.",
    step7Description: "డెలివరీలను ఎలా కేటాయించాలి, షిప్మెంట్లను ట్రాక్ చేయాలి మరియు డెలివరీ ప్రక్రియలో కస్టమర్ కమ్యూనికేషన్లను నిర్వహించాలి అనేది నేర్చుకోండి.",

    step8Title: "B2B vs B2C ఫల్ఫిల్మెంట్ తేడాలు",
    step8Intro: "B2C (కస్టమర్) మరియు B2B (వ్యాపార రిటైలర్) ఫల్ఫిల్మెంట్ ప్రక్రియల మధ్య తేడాలను అర్థం చేసుకోవడం వేర్వేరు కస్టమర్ రకాలు మరియు ఆర్డర్ లక్షణాల కోసం వర్క్‌ఫ్లోలను ఆప్టిమైజ్ చేయడానికి సహాయపడుతుంది.",
    step8Description: "B2C మరియు B2B ఆర్డర్ ఫల్ఫిల్మెంట్ రెండింటికీ నిర్దిష్ట పరిగణనలు మరియు వర్క్‌ఫ్లోలను నేర్చుకోండి.",

    nextStepsTitle: "ఆర్డర్ ఫల్ఫిల్మెంట్ మాస్టరీ పూర్తయింది!",
    nextStepsDescription: "మీరు ప్రారంభ ఆర్డర్ రసీదు నుండి చివరి డెలివరీ హస్తాంతరం వరకు పూర్తి ఆర్డర్ ఫల్ఫిల్మెంట్ వర్క్‌ఫ్లోను విజయవంతంగా నేర్చుకున్నారు. మీ ఆర్డర్లు ఇప్పుడు సమగ్ర నాణ్యత నియంత్రణలు మరియు డాక్యుమెంటేషన్‌తో పికింగ్, ప్యాకింగ్, ఇన్వాయిసింగ్ మరియు డిస్పాచ్ ద్వారా సమర్థవంతంగా ప్రాసెస్ చేయబడతాయి.",
    nextStepsButton: "లాస్ట్-మైల్ లాజిస్టిక్స్‌కి కొనసాగండి",
    openDashboard: "ఫల్ఫిల్మెంట్ డాష్‌బోర్డ్ తెరవండి",

    // Dashboard navigation and interface
    fulfillmentDashboard: "ఫల్ఫిల్మెంట్ డాష్‌బోర్డ్",
    manageOrders: "పూర్తి ఫల్ఫిల్మెంట్ వర్క్‌ఫ్లో ద్వారా ఆర్డర్లను నిర్వహించండి",
    fulfillment: "ఫల్ఫిల్మెంట్",
    analytics: "విశ్లేషణలు",
    inventory: "ఇన్వెంటరీ",
    orders: "ఆర్డర్లు",
    clickFulfillment: "ఆర్డర్ ఫల్ఫిల్మెంట్ వర్క్‌ఫ్లో మేనేజ్‌మెంట్ సిస్టమ్‌కి ప్రాప్యత పొందడానికి ప్రధాన సైడ్‌బార్‌నుండి 'ఫల్ఫిల్మెంట్'పై క్లిక్ చేయండి.",

    // Main dashboard tabs and buttons
    b2bAndB2cOrders: "B2B మరియు B2C ఆర్డర్లు",
    vendorReturns: "వెండర్ రిటర్న్లు",
    scanOrder: "ఆర్డర్ స్కాన్ చేయండి",
    printLabels: "లేబుల్స్ ప్రింట్ చేయండి",
    exportData: "డేటా ఎగుమతి చేయండి",
    filterSearchOrders: "ఆర్డర్లను ఫిల్టర్ & శోధించండి",
    searchPlaceholder: "ఆర్డర్ ID, కస్టమర్ పేరు, లేదా రిటైలర్ పేరు ద్వారా శోధించండి...",

    // Filter options
    allOrders: "అన్ని ఆర్డర్లు",
    b2cOrders: "B2C ఆర్డర్లు",
    b2bOrders: "B2B ఆర్డర్లు",
    showingResults: "{count} ఆర్డర్లలో {total} చూపిస్తున్నారు",
    b2cOrdersOnly: "B2C ఆర్డర్లు మాత్రమే",

    // Order status columns with counts
    newOrders: "కొత్త ఆర్డర్లు",
    readyToPick: "పిక్ చేయడానికి సిద్ధం",
    picking: "పికింగ్",
    inProgress: "ప్రగతిలో ఉంది",
    packingInvoiced: "ప్యాకింగ్ & ఇన్వాయిస్ చేయబడింది",
    awaitingPack: "ప్యాక్ కోసం వేచి ఉంది",
    shipped: "షిప్ చేయబడింది",
    thisWeek: "ఈ వారం",
    delivered: "డెలివర్ చేయబడింది",
    completed: "పూర్తయింది",
    viewAllOrders: "అన్ని {count} ఆర్డర్లను చూడండి",

    // Order status explanations
    orderStatusExplanation: "ఆర్డర్ స్థితి వర్క్‌ఫ్లో వివరణ",
    pendingStatus: "పెండింగ్/కొత్త ఆర్డర్లు",
    pendingDesc: "సమీక్షించబడాలి మరియు ప్రాసెస్ చేయబడాలి కొత్త ఆర్డర్లు. ఈ దశలో ఇన్వెంటరీ లభ్యత ధృవీకరించబడుతుంది.",
    pickingStatus: "పికింగ్",
    pickingDesc: "ప్రస్తుతం గిడ్డంగి సిబ్బంది ద్వారా పిక్ చేయబడుతున్న ఆర్డర్లు. పిక్ జాబితాలు రూపొందించబడతాయి మరియు వస్తువులు సేకరించబడుతున్నాయి.",
    packingStatus: "ప్యాకింగ్ & ఇన్వాయిస్ చేయబడింది",
    packingDesc: "వస్తువులు పిక్ చేయబడ్డాయి మరియు పెట్టెలలో ప్యాక్ చేయబడుతున్నాయి. ఈ దశలో ఇన్వాయిస్లు రూపొందించబడతాయి.",
    shippedStatus: "షిప్ చేయబడింది",
    shippedDesc: "డిస్పాచ్ చేయబడిన మరియు కస్టమర్లకు మార్గములో ఉన్న ఆర్డర్లు. ట్రాకింగ్ సమాచారం అందుబాటులో ఉంది.",
    deliveredStatus: "డెలివర్ చేయబడింది",
    deliveredDesc: "కస్టమర్లకు విజయవంతంగా డెలివర్ చేయబడిన ఆర్డర్లు. ఫల్ఫిల్మెంట్ ప్రక్రియ పూర్తయింది.",

    // New order processing interface
    processingNewOrders: "కొత్త ఆర్డర్లను ప్రాసెస్ చేయడం",
    newOrderInterface: "కొత్త ఆర్డర్ ప్రాసెసింగ్ ఇంటర్ఫేస్",
    orderDetails: "ఆర్డర్ వివరాలు",
    customer: "కస్టమర్",
    orderDate: "ఆర్డర్ తేదీ",
    paymentMethod: "చెల్లింపు పద్ధతి",
    deliveryAddress: "డెలివరీ చిరునామా",
    orderItems: "ఆర్డర్ వస్తువులు",
    totalAmount: "మొత్తం మొత్తం",
    startFulfillment: "ఫల్ఫిల్మెంట్ ప్రారంభించండి",
    viewFullDetails: "పూర్తి వివరాలను చూడండి",
    newOrder: "కొత్త ఆర్డర్",
    b2cCustomer: "B2C కస్టమర్",
    digitalWallet: "డిజిటల్ వాలెట్",
    paymentComplete: "చెల్లింపు పూర్తయింది",

    // Sample customer details
    sarahWilson: "సారా విల్సన్",
    orderReceived: "ఆర్డర్ స్వీకరించబడింది మరియు చెల్లింపు నిర్ధారించబడింది",
    greenValleyAddress: "123 గ్రీన్ వ్యాలీ రోడ్, బెంగళూరు, కర్ణాటక 560001",
    customerPhone: "ఫోన్: +91 98765 43210",

    // Picking process interface
    pickingInterface: "ఆర్డర్ పికింగ్ ఇంటర్ఫేస్",
    generatePickList: "పిక్ జాబితా రూపొందించండి",
    pickListGenerated: "పిక్ జాబితా రూపొందించబడింది",
    orderNumber: "ఆర్డర్ #",
    pickingInstructions: "పికింగ్ సూచనలు",
    followOptimizedRoute: "అన్ని వస్తువులను సమర్థవంతంగా సేకరించడానికి క్రింది ఆప్టిమైజ్డ్ మార్గాన్ని అనుసరించండి. పికప్ నిర్ధారించడానికి ప్రతి వస్తువు బార్‌కోడ్‌ను స్కాన్ చేయండి.",
    warehouseLocation: "గిడ్డంగి స్థానం",
    quantityToPick: "పిక్ చేయాలి పరిమాణం",
    scanBarcode: "బార్‌కోడ్ స్కాన్ చేయండి",
    confirmPick: "పిక్ నిర్ధారించండి",
    pickingComplete: "పికింగ్ పూర్తయింది",
    proceedToPacking: "ప్యాకింగ్‌కి ముందుకు వెళ్ళండి",

    // Products in pick list
    organicBasmatiRice: "ఆర్గానిక్ బాస్మతి బియ్యం 1కిలో",
    wholeWheatFlour: "పూర్తి గోధుమ పిండి 1కిలో",
    oliveOilExtra: "ఆలివ్ నూనె ఎక్స్ట్రా వర్జిన్ 500మిలీ",
    locationA: "స్థానం: A-1-3",
    locationB: "స్థానం: B-2-1",
    locationC: "స్థానం: C-1-5",
    quantity: "పరిమాణం",
    verified: "ధృవీకరించబడింది",

    // Packing interface
    packingInterface: "ఆర్డర్ ప్యాకింగ్ ఇంటర్ఫేస్",
    packingStation: "ప్యాకింగ్ స్టేషన్",
    packing: "ప్యాకింగ్",
    itemVerification: "వస్తువు ధృవీకరణ",
    boxManagement: "బాక్స్ నిర్వహణ",
    createNewBox: "కొత్త బాక్స్ రూపొందించండి",
    boxId: "బాక్స్ ID",
    addItemToBox: "బాక్స్‌కి వస్తువు జోడించండి",
    boxContents: "బాక్స్ విషయాలు",
    generateInvoice: "ఇన్వాయిస్ రూపొందించండి",
    packingComplete: "ప్యాకింగ్ పూర్తయింది",
    readyForDispatch: "డిస్పాచ్ కోసం సిద్ధం",
    items: "వస్తువులు",

    // Shipping and dispatch
    shippingCoordination: "షిప్పింగ్ & డిస్పాచ్ సమన్వయం",
    dispatchInterface: "డిస్పాచ్ నిర్వహణ ఇంటర్ఫేస్",
    assignDelivery: "డెలివరీ కేటాయించండి",
    inHousePersonnel: "ఇన్-హౌస్ సిబ్బంది",
    courierAgency: "కూరియర్ ఏజెన్సీ",
    available: "అందుబాటులో ఉంది",
    assign: "కేటాయించండి",
    generateShippingLabel: "షిప్పింగ్ లేబుల్ రూపొందించండి",
    trackingNumber: "ట్రాకింగ్ సంఖ్య",
    deliveryInstructions: "డెలివరీ సూచనలు",
    scheduledDelivery: "షెడ్యూల్ చేయబడిన డెలివరీ",
    dispatchOrder: "ఆర్డర్ డిస్పాచ్ చేయండి",
    generate: "రూపొందించండి",
    shippingDetails: "షిప్పింగ్ వివరాలు",
    createShippingLabels: "పెట్టెలకి షిప్పింగ్ లేబుల్స్ రూపొందించండి",
    enterDeliveryInstructions: "ప్రత్యేక డెలివరీ సూచనలను నమోదు చేయండి...",

    // Sample personnel and agencies
    rameshKumar: "రమేష్ కుమార్",
    priyaSharma: "ప్రియ శర్మ",
    fastTrackDelivery: "ఫాస్ట్‌ట్రాక్ డెలివరీ",
    quickShipExpress: "క్విక్‌షిప్ ఎక్స్‌ప్రెస్",

    // Order timeline
    orderTimeline: "ఆర్డర్ టైమ్‌లైన్ & స్థితి ట్రాకింగ్",
    orderPlaced: "ఆర్డర్ ఉంచబడింది",
    pickingStarted: "పికింగ్ ప్రారంభమైంది",
    itemsPicked: "వస్తువులు పిక్ చేయబడ్డాయి",
    packingStarted: "ప్యాకింగ్ ప్రారంభమైంది",
    invoiceGenerated: "ఇన్వాయిస్ రూపొందించబడింది",
    readyForShipment: "షిప్మెంట్ కోసం సిద్ధం",
    orderShipped: "ఆర్డర్ షిప్ చేయబడింది",
    orderDelivered: "ఆర్డర్ డెలివర్ చేయబడింది",

    // Timeline descriptions
    pickListGenerated: "పిక్ జాబితా రూపొందించబడింది, పికింగ్ ప్రగతిలో ఉంది",
    allItemsPicked: "అన్ని వస్తువులు గిడ్డంగి నుండి విజయవంతంగా పిక్ చేయబడ్డాయి",
    movedToPacking: "వస్తువులు ప్యాకింగ్ స్టేషన్‌కి తరలించబడ్డాయి",
    invoiceCreated: "ఇన్వాయిస్ రూపొందించబడింది: INV-2024-521001",
    packedReady: "ప్యాక్ చేయబడింది మరియు డిస్పాచ్ కోసం సిద్ధం",
    pendingDelivery: "డెలివరీ కేటాయింపు పెండింగ్‌లో ఉంది",
    awaitingCompletion: "డెలివరీ పూర్తవడానికి వేచి ఉంది",

    // B2B vs B2C comparison
    b2bVsB2cDifferences: "B2B vs B2C ఫల్ఫిల్మెంట్ తేడాలు",
    b2cCharacteristics: "B2C ఆర్డర్ లక్షణాలు",
    b2cDesc: "వ్యక్తిగత కస్టమర్లు, చిన్న పరిమాణాలు, ఇంటి డెలివరీ, తక్షణ ప్రాసెసింగ్",
    b2bCharacteristics: "B2B ఆర్డర్ లక్షణాలు",
    b2bDesc: "వ్యాపార కస్టమర్లు, పెద్ద పరిమాణాలు, బల్క్ ప్యాకేజింగ్, షెడ్యూల్ చేయబడిన డెలివరీ",

    // B2C characteristics list
    individualCustomers: "వ్యక్తిగత కస్టమర్లు",
    smallerQuantities: "చిన్న ఆర్డర్ పరిమాణాలు",
    homeDelivery: "ఇంటి డెలివరీ అవసరం",
    immediateProcessing: "తక్షణ ప్రాసెసింగ్ ఆశించబడుతుంది",
    singleAddress: "ఏక షిప్పింగ్ చిరునామా",
    consumerPackaging: "కస్టమర్ ప్యాకేజింగ్",

    // B2B characteristics list
    businessCustomers: "వ్యాపార కస్టమర్లు",
    largerQuantities: "పెద్ద ఆర్డర్ పరిమాణాలు",
    bulkPackaging: "బల్క్/వాణిజ్య ప్యాకేజింగ్",
    scheduledDelivery: "షెడ్యూల్ చేయబడిన డెలివరీ ఎంపికలు",
    multipleAddresses: "బహుళ షిప్పింగ్ చిరునామాలు",
    extendedTerms: "విస్తరించిన చెల్లింపు నిబంధనలు",

    // Additional interface elements
    navigation: "నావిగేషన్",
    copy: "కాపీ చేయండి",
    sampleTracking: "TRK-2024-521001",
    sampleSchedule: "మే 22, 2024 - మధ్యాహ్నం 2:00",

    // Performance and quality metrics
    fulfillmentMetrics: "ఫల్ఫిల్మెంట్ పనితీరు మెట్రిక్స్",
    averagePickTime: "సగటు పిక్ సమయం",
    packingEfficiency: "ప్యాకింగ్ సామర్థ్యం",
    onTimeDelivery: "సమయానికి డెలివరీ",
    orderAccuracy: "ఆర్డర్ ఖచ్చితత్వం",
    qualityControl: "నాణ్యత నియంత్రణ చెక్‌పాయింట్లు",
    inventoryVerification: "ఇన్వెంటరీ ధృవీకరణ",
    pickingAccuracy: "పికింగ్ ఖచ్చితత్వం",
    packingInspection: "ప్యాకింగ్ పరిశీలన",
    shippingValidation: "షిప్పింగ్ ధృవీకరణ",
  },
  ta: {
    pageTitle: "ஆர்டர் நிறைவேற்றல் கையேடு",
    backToManual: "கையேட்டிற்கு திரும்பு",
    description: "கிடங்கில் பொருட்களை தேர்ந்தெடுப்பதிலிருந்து பேக்கிங், விலைப்பட்டியல் மற்றும் விரிவான வேலைப்பாய்வுகள் மற்றும் தரக் கட்டுப்பாட்டு நடைமுறைகளுடன் விநியோகத்திற்கான ஏற்றுமதிகளை தயாரிப்பது வரை முழுமையான ஆர்டர் நிறைவேற்றல் செயல்முறையை மாஸ்டர் செய்யுங்கள்.",

    step1Title: "நிறைவேற்றல் டாஷ்போர்டு கண்ணோட்டம்",
    step1Intro: "நிறைவேற்றல் டாஷ்போர்டு என்பது அனைத்து உள்வரும் ஆர்டர்களை செயலாக்குவதற்கான உங்கள் செயல்பாட்டு கட்டளை மையமாகும். இது நிகழ்நேர புதுப்பிப்புகள், செயல்திறன் அளவீடுகள் மற்றும் புத்திசாலித்தனமான வடிப்பல் திறன்களுடன் நிறைவேற்றலின் ஒவ்வொரு கட்டத்திலும் ஆர்டர்களை கண்காணிக்கும் விரிவான வேலைப்பாய்வு மேலாண்மை அமைப்பை வழங்குகிறது.",
    step1Description: "அனைத்து ஆர்டர் செயலாக்க கருவிகளுக்கான அணுகலைப் பெறவும் ஆர்டர் பெறுதியிலிருந்து அனுப்புதல் வரை முழுமையான நிறைவேற்றல் வேலைப்பாய்வைக் கண்காணிக்கவும் நிறைவேற்றல் டாஷ்போர்டுக்கு செல்லுங்கள்.",

    step2Title: "ஆர்டர் நிலைகள் & வேலைப்பாய்வைப் புரிந்துகொள்வது",
    step2Intro: "RetailOS ஒவ்வொரு ஆர்டரையும் அதன் நிறைவேற்றல் பயணத்தின் மூலம் கண்காணிக்க விரிவான ஆர்டர் நிலை அமைப்பைப் பயன்படுத்துகிறது. இந்த நிலைகளைப் புரிந்துகொள்வது திறமையான ஆர்டர் செயலாக்கம் மற்றும் வாடிக்கையாளர் தொடர்புக்கு முக்கியமானது.",
    step2Description: "ஒவ்வொரு ஆர்டரும் வரையறுக்கப்பட்ட கட்டங்களின் மூலம் முன்னேறுகிறது, ஒவ்வொரு படியிலும் தெளிவான குறிகாட்டிகள் மற்றும் செயல்கள் கிடைக்கின்றன.",

    step3Title: "புதிய ஆர்டர்களை செயலாக்குதல் (நிலுவை நிலை)",
    step3Intro: "புதிய ஆர்டர்கள் 'நிலுவை' அல்லது 'புதிய ஆர்டர்கள்' பிரிவில் தோன்றுகின்றன மற்றும் அவற்றை நிறைவேற்றல் வேலைப்பாய்வுக்கு நகர்த்த ஆரம்பகால செயலாக்கம் தேவைப்படுகிறது. இதில் ஆர்டர் சரிபார்ப்பு, சரக்கு சரிபார்ப்பு மற்றும் தேர்வுக்கான தயாரிப்பு ஆகியவை அடங்கும்.",
    step3Description: "புதிய ஆர்டர்களை எவ்வாறு மதிப்பாய்வு செய்வது, சரக்கு கிடைப்பதை சரிபார்ப்பது மற்றும் நிறைவேற்றல் செயல்முறையைத் தொடங்குவது என்பதைக் கற்றுக்கொள்ளுங்கள்.",

    step4Title: "ஆர்டர் தேர்வு செயல்முறை",
    step4Intro: "தேர்வு செயல்முறை என்பது கிடங்கு ஊழியர்கள் உகந்த தேர்வு பட்டியல்களைப் பயன்படுத்தி ஆர்டர்களுக்கான பொருட்களை சேகரிக்கும் இடமாகும். RetailOS பயண நேரத்தைக் குறைக்கவும் செயல்திறனை அதிகரிக்கவும் இருப்பிட-அடிப்படையிலான தேர்வு வழிகளை உருவாக்குகிறது.",
    step4Description: "தேர்வு பட்டியல் உருவாக்கம், சரக்கு ஒதுக்கீடு மற்றும் தரக் கட்டுப்பாட்டு நடைமுறைகள் உட்பட முழுமையான தேர்வு வேலைப்பாய்வை மாஸ்டர் செய்யுங்கள்.",

    step5Title: "ஆர்டர் பேக்கிங் & விலைப்பட்டியல் உருவாக்கம்",
    step5Intro: "தேர்வு முடிந்த பிறகு, ஆர்டர்கள் பேக்கிங் நிலையத்திற்கு நகரும், அங்கு பொருட்கள் சரிபார்க்கப்படுகின்றன, பெட்டிகளில் ஒழுங்கமைக்கப்படுகின்றன மற்றும் ஏற்றுமதிக்கு தயாரிக்கப்படுகின்றன. இந்த கட்டத்தில் விலைப்பட்டியல் உருவாக்கம் மற்றும் ஷிப்பிங் லேபிள் உருவாக்கம் ஆகியவையும் அடங்கும்.",
    step5Description: "பெட்டி மேலாண்மை, பொருள் சரிபார்ப்பு மற்றும் ஆவண உருவாக்கம் உட்பட விரிவான பேக்கிங் செயல்முறையைக் கற்றுக்கொள்ளுங்கள்.",

    step6Title: "அனுப்புதற்கு தயாராக & ஷிப்பிங் ஒருங்கிணைப்பு",
    step6Intro: "இறுதி நிறைவேற்றல் கட்டத்தில் விநியோக ஊழியர்கள் அல்லது கூரியர் சேவைகளுடன் ஒருங்கிணைப்பது, ஷிப்பிங் லேபிள்களை உருவாக்குவது மற்றும் அனைத்து தேவையான ஆவணங்கள் மற்றும் கண்காணிப்பு தகவல்களுடன் சரியான ஒப்படைப்பை உறுதிப்படுத்துவது ஆகியவை அடங்கும்.",
    step6Description: "அனுப்புதலுக்கான ஆர்டர்களைத் தயாரிப்பதன் மூலம் மற்றும் விநியோக குழுக்களுடன் ஒருங்கிணைப்பதன் மூலம் நிறைவேற்றல் சுழற்சியை முடிக்கவும்.",

    step7Title: "விநியோக ஒதுக்கீடு & கண்காணிப்பு",
    step7Intro: "RetailOS நிகழ்நேர கண்காணிப்பு மற்றும் வாடிக்கையாளர் தொடர்பு திறன்களுடன், உள்வட்ட ஊழியர்கள் அல்லது மூன்றாம் தரப்பு கூரியர் நிறுவனங்களுக்கு ஒதுக்கீடு உட்பட விரிவான விநியோக மேலாண்மையை வழங்குகிறது.",
    step7Description: "விநியோக செயல்முறையின் முழுவதும் விநியோகங்களை எவ்வாறு ஒதுக்குவது, ஏற்றுமதிகளைக் கண்காணிப்பது மற்றும் வாடிக்கையாளர் தொடர்புகளை நிர்வகிப்பது என்பதைக் கற்றுக்கொள்ளுங்கள்.",

    step8Title: "B2B vs B2C நிறைவேற்றல் வேறுபாடுகள்",
    step8Intro: "B2C (வாடிக்கையாளர்) மற்றும் B2B (வணிக சில்லறை விற்பனையாளர்) நிறைவேற்றல் செயல்முறைகளுக்கு இடையிலான வேறுபாடுகளைப் புரிந்துகொள்வது வெவ்வேறு வாடிக்கையாளர் வகைகள் மற்றும் ஆர்டர் பண்புகளுக்கான வேலைப்பாய்வுகளை உகந்தமயமாக்க உதவுகிறது.",
    step8Description: "B2C மற்றும் B2B ஆர்டர் நிறைவேற்றல் இரண்டிற்கும் குறிப்பிட்ட பரிசீலனைகள் மற்றும் வேலைப்பாய்வுகளைக் கற்றுக்கொள்ளுங்கள்.",

    nextStepsTitle: "ஆர்டர் நிறைவேற்றல் மாஸ்டரி முடிந்தது!",
    nextStepsDescription: "ஆரம்ப ஆர்டர் பெறுதியிலிருந்து இறுதி விநியோக ஒப்படைப்பு வரை முழுமையான ஆர்டர் நிறைவேற்றல் வேலைப்பாய்வை நீங்கள் வெற்றிகரமாக மாஸ்டர் செய்துள்ளீர்கள். உங்கள் ஆர்டர்கள் இப்போது விரிவான தரக் கட்டுப்பாடுகள் மற்றும் ஆவணங்களுடன் தேர்வு, பேக்கிங், விலைப்பட்டியல் மற்றும் அனுப்புதல் மூலம் திறமையாக செயலாக்கப்படுகின்றன.",
    nextStepsButton: "கடைசி மைல் லாஜிஸ்டிக்ஸுக்கு தொடரவும்",
    openDashboard: "நிறைவேற்றல் டாஷ்போர்டைத் திறக்கவும்",

    // Dashboard navigation and interface
    fulfillmentDashboard: "நிறைவேற்றல் டாஷ்போர்டு",
    manageOrders: "முழுமையான நிறைவேற்றல் வேலைப்பாய்வின் மூலம் ஆர்டர்களை நிர்வகிக்கவும்",
    fulfillment: "நிறைவேற்றல்",
    analytics: "பகுப்பாய்வு",
    inventory: "சரக்கு",
    orders: "ஆர்டர்கள்",
    clickFulfillment: "ஆர்டர் நிறைவேற்றல் வேலைப்பாய்வு மேலாண்மை அமைப்பை அணுக முதன்மை பக்கப்பட்டியிலிருந்து 'நிறைவேற்றல்'ஐக் கிளிக் செய்யவும்.",

    // Main dashboard tabs and buttons
    b2bAndB2cOrders: "B2B மற்றும் B2C ஆர்டர்கள்",
    vendorReturns: "விற்பனையாளர் திருப்பங்கள்",
    scanOrder: "ஆர்டரை ஸ்கேன் செய்யவும்",
    printLabels: "லேபிள்களை அச்சிடவும்",
    exportData: "தரவை ஏற்றுமதி செய்யவும்",
    filterSearchOrders: "ஆர்டர்களை வடிப்படுத்தி தேடவும்",
    searchPlaceholder: "ஆர்டர் ID, வாடிக்கையாளர் பெயர் அல்லது சில்லறை விற்பனையாளர் பெயரால் தேடவும்...",

    // Filter options
    allOrders: "அனைத்து ஆர்டர்களும்",
    b2cOrders: "B2C ஆர்டர்கள்",
    b2bOrders: "B2B ஆர்டர்கள்",
    showingResults: "{count} இல் {total} ஆர்டர்கள் காட்டப்படுகின்றன",
    b2cOrdersOnly: "B2C ஆர்டர்கள் மட்டும்",

    // Order status columns with counts
    newOrders: "புதிய ஆர்டர்கள்",
    readyToPick: "தேர்வுக்கு தயாராக",
    picking: "தேர்வு செய்யப்படுகிறது",
    inProgress: "முன்னேற்றத்தில்",
    packingInvoiced: "பேக்கிங் & விலைப்பட்டியல் செய்யப்பட்டது",
    awaitingPack: "பேக்கிற்காக காத்திருக்கிறது",
    shipped: "அனுப்பப்பட்டது",
    thisWeek: "இந்த வாரம்",
    delivered: "வழங்கப்பட்டது",
    completed: "முடிந்தது",
    viewAllOrders: "அனைத்து {count} ஆர்டர்களையும் காண்க",

    // Order status explanations
    orderStatusExplanation: "ஆர்டர் நிலை வேலைப்பாய்வு விளக்கம்",
    pendingStatus: "நிலுவை/புதிய ஆர்டர்கள்",
    pendingDesc: "மதிப்பாய்வு மற்றும் செயலாக்கம் தேவையான புதிய ஆர்டர்கள். இந்த கட்டத்தில் சரக்கு கிடைப்பது சரிபார்க்கப்படுகிறது.",
    pickingStatus: "தேர்வு செய்யப்படுகிறது",
    pickingDesc: "கிடங்கு ஊழியர்களால் தற்போது தேர்வு செய்யப்படும் ஆர்டர்கள். தேர்வு பட்டியல்கள் உருவாக்கப்பட்டு பொருட்கள் சேகரிக்கப்படுகின்றன.",
    packingStatus: "பேக்கிங் & விலைப்பட்டியல் செய்யப்பட்டது",
    packingDesc: "பொருட்கள் தேர்ந்தெடுக்கப்பட்டு பெட்டிகளில் பேக் செய்யப்படுகின்றன. இந்த கட்டத்தில் விலைப்பட்டியல்கள் உருவாக்கப்படுகின்றன.",
    shippedStatus: "அனுப்பப்பட்டது",
    shippedDesc: "அனுப்பப்பட்டு வாடிக்கையாளர்களுக்கு செல்லும் ஆர்டர்கள். கண்காணிப்பு தகவல் கிடைக்கிறது.",
    deliveredStatus: "வழங்கப்பட்டது",
    deliveredDesc: "வாடிக்கையாளர்களுக்கு வெற்றிகரமாக வழங்கப்பட்ட ஆர்டர்கள். நிறைவேற்றல் செயல்முறை முடிந்தது.",

    // New order processing interface
    processingNewOrders: "புதிய ஆர்டர்களை செயலாக்குகிறது",
    newOrderInterface: "புதிய ஆர்டர் செயலாக்க இடைமுகம்",
    orderDetails: "ஆர்டர் விவரங்கள்",
    customer: "வாடிக்கையாளர்",
    orderDate: "ஆர்டர் தேதி",
    paymentMethod: "பணம் செலுத்தும் முறை",
    deliveryAddress: "விநியோக முகவரி",
    orderItems: "ஆர்டர் பொருட்கள்",
    totalAmount: "மொத்த தொகை",
    startFulfillment: "நிறைவேற்றலைத் தொடங்கவும்",
    viewFullDetails: "முழு விவரங்களைக் காண்க",
    newOrder: "புதிய ஆர்டர்",
    b2cCustomer: "B2C வாடிக்கையாளர்",
    digitalWallet: "டிஜிட்டல் வாலட்",
    paymentComplete: "பணம் செலுத்துதல் முடிந்தது",

    // Sample customer details
    sarahWilson: "சாரா வில்சன்",
    orderReceived: "ஆர்டர் பெறப்பட்டது மற்றும் பணம் உறுதிப்படுத்தப்பட்டது",
    greenValleyAddress: "123 கிரீன் வேலி சாலை, பெங்களூரு, கர்நாடகா 560001",
    customerPhone: "தொலைபேசி: +91 98765 43210",

    // Picking process interface
    pickingInterface: "ஆர்டர் தேர்வு இடைமுகம்",
    generatePickList: "தேர்வு பட்டியலை உருவாக்கவும்",
    pickListGenerated: "தேர்வு பட்டியல் உருவாக்கப்பட்டது",
    orderNumber: "ஆர்டர் #",
    pickingInstructions: "தேர்வு வழிமுறைகள்",
    followOptimizedRoute: "அனைத்து பொருட்களையும் திறமையாக சேகரிக்க கீழே உள்ள உகந்த வழியைப் பின்பற்றவும். ஒவ்வொரு பொருளின் பார்கோடையும் ஸ்கேன் செய்து தேர்வை உறுதிப்படுத்தவும்.",
    warehouseLocation: "கிடங்கு இருப்பிடம்",
    quantityToPick: "தேர்வு செய்ய வேண்டிய அளவு",
    scanBarcode: "பார்கோடை ஸ்கேன் செய்யவும்",
    confirmPick: "தேர்வை உறுதிப்படுத்தவும்",
    pickingComplete: "தேர்வு முடிந்தது",
    proceedToPacking: "பேக்கிங்குக்கு செல்லவும்",

    // Products in pick list
    organicBasmatiRice: "கரிம பாஸ்மதி அரிசி 1கிலோ",
    wholeWheatFlour: "முழு கோதுமை மாவு 1கிலோ",
    oliveOilExtra: "ஆலிவ் எண்ணெய் எக்ஸ்ட்ரா வர்ஜின் 500மிலி",
    locationA: "இருப்பிடம்: A-1-3",
    locationB: "இருப்பிடம்: B-2-1",
    locationC: "இருப்பிடம்: C-1-5",
    quantity: "அளவு",
    verified: "சரிபார்க்கப்பட்டது",

    // Packing interface
    packingInterface: "ஆர்டர் பேக்கிங் இடைமுகம்",
    packingStation: "பேக்கிங் நிலையம்",
    packing: "பேக்கிங்",
    itemVerification: "பொருள் சரிபார்ப்பு",
    boxManagement: "பெட்டி மேலாண்மை",
    createNewBox: "புதிய பெட்டியை உருவாக்கவும்",
    boxId: "பெட்டி ID",
    addItemToBox: "பெட்டியில் பொருளை சேர்க்கவும்",
    boxContents: "பெட்டி உள்ளடக்கம்",
    generateInvoice: "விலைப்பட்டியலை உருவாக்கவும்",
    packingComplete: "பேக்கிங் முடிந்தது",
    readyForDispatch: "அனுப்புதலுக்கு தயாராக",
    items: "பொருட்கள்",

    // Shipping and dispatch
    shippingCoordination: "ஷிப்பிங் & அனுப்புதல் ஒருங்கிணைப்பு",
    dispatchInterface: "அனுப்புதல் மேலாண்மை இடைமுகம்",
    assignDelivery: "விநியோகத்தை ஒதுக்கவும்",
    inHousePersonnel: "உள்வட்ட ஊழியர்கள்",
    courierAgency: "கூரியர் நிறுவனம்",
    available: "கிடைக்கிறது",
    assign: "ஒதுக்கு",
    generateShippingLabel: "ஷிப்பிங் லேபிளை உருவாக்கவும்",
    trackingNumber: "கண்காணிப்பு எண்",
    deliveryInstructions: "விநியோக வழிமுறைகள்",
    scheduledDelivery: "திட்டமிடப்பட்ட விநியோகம்",
    dispatchOrder: "ஆர்டரை அனுப்பவும்",
    generate: "உருவாக்கு",
    shippingDetails: "ஷிப்பிங் விவரங்கள்",
    createShippingLabels: "பெட்டிகளுக்கு ஷிப்பிங் லேபிள்களை உருவாக்கவும்",
    enterDeliveryInstructions: "சிறப்பு விநியோக வழிமுறைகளை உள்ளிடவும்...",

    // Sample personnel and agencies
    rameshKumar: "ரமேஷ் குமார்",
    priyaSharma: "பிரியா ஷர்மா",
    fastTrackDelivery: "விரைவு பாதை விநியோகம்",
    quickShipExpress: "விரைவு ஷிப் எக்ஸ்பிரஸ்",

    // Order timeline
    orderTimeline: "ஆர்டர் காலவரிசை & நிலை கண்காணிப்பு",
    orderPlaced: "ஆர்டர் வைக்கப்பட்டது",
    pickingStarted: "தேர்வு தொடங்கியது",
    itemsPicked: "பொருட்கள் தேர்ந்தெடுக்கப்பட்டன",
    packingStarted: "பேக்கிங் தொடங்கியது",
    invoiceGenerated: "விலைப்பட்டியல் உருவாக்கப்பட்டது",
    readyForShipment: "ஏற்றுமதிக்கு தயாராக",
    orderShipped: "ஆர்டர் அனுப்பப்பட்டது",
    orderDelivered: "ஆர்டர் வழங்கப்பட்டது",

    // Timeline descriptions
    pickListGenerated: "தேர்வு பட்டியல் உருவாக்கப்பட்டது, தேர்வு முன்னேற்றத்தில்",
    allItemsPicked: "கிடங்கிலிருந்து அனைத்து பொருட்களும் வெற்றிகரமாக தேர்ந்தெடுக்கப்பட்டன",
    movedToPacking: "பொருட்கள் பேக்கிங் நிலையத்திற்கு நகர்த்தப்பட்டன",
    invoiceCreated: "விலைப்பட்டியல் உருவாக்கப்பட்டது: INV-2024-521001",
    packedReady: "பேக் செய்யப்பட்டு அனுப்புதலுக்கு தயாராக",
    pendingDelivery: "விநியோக ஒதுக்கீட்டிற்காக காத்திருக்கிறது",
    awaitingCompletion: "விநியோக நிறைவுக்காக காத்திருக்கிறது",

    // B2B vs B2C comparison
    b2bVsB2cDifferences: "B2B vs B2C நிறைவேற்றல் வேறுபாடுகள்",
    b2cCharacteristics: "B2C ஆர்டர் பண்புகள்",
    b2cDesc: "தனிப்பட்ட வாடிக்கையாளர்கள், சிறிய அளவுகள், வீட்டு விநியோகம், உடனடி செயலாக்கம்",
    b2bCharacteristics: "B2B ஆர்டர் பண்புகள்",
    b2bDesc: "வணிக வாடிக்கையாளர்கள், பெரிய அளவுகள், மொத்த பேக்கேஜிங், திட்டமிடப்பட்ட விநியோகம்",

    // B2C characteristics list
    individualCustomers: "தனிப்பட்ட வாடிக்கையாளர்கள்",
    smallerQuantities: "சிறிய ஆர்டர் அளவுகள்",
    homeDelivery: "வீட்டு விநியோகம் தேவை",
    immediateProcessing: "உடனடி செயலாக்கம் எதிர்பார்க்கப்படுகிறது",
    singleAddress: "ஒற்றை ஷிப்பிங் முகவரி",
    consumerPackaging: "வாடிக்கையாளர் பேக்கேஜிங்",

    // B2B characteristics list
    businessCustomers: "வணிக வாடிக்கையாளர்கள்",
    largerQuantities: "பெரிய ஆர்டர் அளவுகள்",
    bulkPackaging: "மொத்த/வணிக பேக்கேஜிங்",
    scheduledDelivery: "திட்டமிடப்பட்ட விநியோக விருப்பங்கள்",
    multipleAddresses: "பல ஷிப்பிங் முகவரிகள்",
    extendedTerms: "நீட்டிக்கப்பட்ட கட்டண விதிமுறைகள்",

    // Additional interface elements
    navigation: "வழிசெலுத்தல்",
    copy: "நகலெடுக்கவும்",
    sampleTracking: "TRK-2024-521001",
    sampleSchedule: "மே 22, 2024 - மதியம் 2:00",

    // Performance and quality metrics
    fulfillmentMetrics: "நிறைவேற்றல் செயல்திறன் அளவீடுகள்",
    averagePickTime: "சராசரி தேர்வு நேரம்",
    packingEfficiency: "பேக்கிங் திறன்",
    onTimeDelivery: "சரியான நேரத்தில் விநியோகம்",
    orderAccuracy: "ஆர்டர் துல்லியம்",
    qualityControl: "தரக் கட்டுப்பாட்டு சரிபார்ப்பு புள்ளிகள்",
    inventoryVerification: "சரக்கு சரிபார்ப்பு",
    pickingAccuracy: "தேர்வு துல்லியம்",
    packingInspection: "பேக்கிங் ஆய்வு",
    shippingValidation: "ஷிப்பிங் சரிபார்ப்பு",
  },
  hi: {
    "pageTitle": "ऑर्डर पूर्ति मैनुअल",
    "backToManual": "मैनुअल पर वापस जाएँ",
    "description": "वेयरहाउस में आइटम चुनने से लेकर पैकिंग, इनवॉइसिंग और डिलीवरी के लिए शिपमेंट तैयार करने तक की पूरी ऑर्डर पूर्ति प्रक्रिया में महारत हासिल करें, जिसमें विस्तृत वर्कफ़्लो और गुणवत्ता नियंत्रण प्रक्रियाएं शामिल हैं।",
    "step1Title": "पूर्ति डैशबोर्ड का अवलोकन",
    "step1Intro": "पूर्ति डैशबोर्ड सभी आने वाले ऑर्डर को प्रोसेस करने के लिए आपका ऑपरेशनल कमांड सेंटर है। यह एक व्यापक वर्कफ़्लो प्रबंधन प्रणाली प्रदान करता है जो वास्तविक समय के अपडेट, प्रदर्शन मेट्रिक्स और इंटेलिजेंट फ़िल्टरिंग क्षमताओं के साथ पूर्ति के प्रत्येक चरण में ऑर्डर को ट्रैक करता है।",
    "step1Description": "ऑर्डर रसीद से लेकर डिस्पैच तक की पूरी पूर्ति वर्कफ़्लो की निगरानी करने और सभी ऑर्डर प्रोसेसिंग टूल तक पहुँचने के लिए पूर्ति डैशबोर्ड पर जाएँ।",
    "step2Title": "ऑर्डर स्टेटस और वर्कफ़्लो को समझना",
    "step2Intro": "RetailOS हर ऑर्डर को उसकी पूर्ति यात्रा के दौरान ट्रैक करने के लिए एक व्यापक ऑर्डर स्टेटस प्रणाली का उपयोग करता है। कुशल ऑर्डर प्रोसेसिंग और ग्राहक संचार के लिए इन स्टेटस को समझना महत्वपूर्ण है।",
    "step2Description": "प्रत्येक ऑर्डर परिभाषित चरणों से होकर गुजरता है, जिसमें प्रत्येक चरण में स्पष्ट संकेतक और उपलब्ध कार्रवाइयाँ होती हैं।",
    "step3Title": "नए ऑर्डर प्रोसेस करना (पेंडिंग स्टेटस)",
    "step3Intro": "नए ऑर्डर 'पेंडिंग' या 'नए ऑर्डर' सेक्शन में दिखाई देते हैं और उन्हें पूर्ति वर्कफ़्लो में ले जाने के लिए प्रारंभिक प्रोसेसिंग की आवश्यकता होती है। इसमें ऑर्डर सत्यापन, इन्वेंट्री सत्यापन और पिकिंग की तैयारी शामिल है।",
    "step3Description": "नए ऑर्डर की समीक्षा करना, इन्वेंट्री की उपलब्धता को सत्यापित करना और पूर्ति प्रक्रिया शुरू करना सीखें।",
    "step4Title": "ऑर्डर पिकिंग प्रक्रिया",
    "step4Intro": "पिकिंग प्रक्रिया वह है जहाँ वेयरहाउस कर्मचारी ऑप्टिमाइज़्ड पिक लिस्ट का उपयोग करके ऑर्डर के लिए आइटम इकट्ठा करते हैं। RetailOS यात्रा के समय को कम करने और दक्षता को अधिकतम करने के लिए स्थान-आधारित पिकिंग मार्ग बनाता है।",
    "step4Description": "पिक लिस्ट बनाने, इन्वेंट्री आवंटन और गुणवत्ता नियंत्रण प्रक्रियाओं सहित पूरी पिकिंग वर्कफ़्लो में महारत हासिल करें।",
    "step5Title": "ऑर्डर पैकिंग और इनवॉइस जनरेशन",
    "step5Intro": "पिकिंग पूरी होने के बाद, ऑर्डर पैकिंग स्टेशन पर चले जाते हैं जहाँ आइटम को सत्यापित किया जाता है, बक्सों में व्यवस्थित किया जाता है, और शिपमेंट के लिए तैयार किया जाता है। इस चरण में इनवॉइस जनरेशन और शिपिंग लेबल बनाना भी शामिल है।",
    "step5Description": "बॉक्स प्रबंधन, आइटम सत्यापन और दस्तावेज़ीकरण जनरेशन सहित व्यापक पैकिंग प्रक्रिया सीखें।",
    "step6Title": "डिस्पैच और शिपिंग समन्वय के लिए तैयार",
    "step6Intro": "अंतिम पूर्ति चरण में डिलीवरी कर्मियों या कूरियर सेवाओं के साथ समन्वय करना, शिपिंग लेबल बनाना और सभी आवश्यक दस्तावेज़ों और ट्रैकिंग जानकारी के साथ उचित हैंडऑफ़ सुनिश्चित करना शामिल है।",
    "step6Description": "डिस्पैच के लिए ऑर्डर तैयार करके और डिलीवरी टीमों के साथ समन्वय करके पूर्ति चक्र को पूरा करें।",
    "step7Title": "डिलीवरी असाइनमेंट और ट्रैकिंग",
    "step7Intro": "RetailOS इन-हाउस कर्मियों या तृतीय-पक्ष कूरियर एजेंसियों को असाइनमेंट सहित व्यापक डिलीवरी प्रबंधन प्रदान करता है, जिसमें वास्तविक समय की ट्रैकिंग और ग्राहक संचार क्षमताएं शामिल हैं।",
    "step7Description": "डिलीवरी असाइन करना, शिपमेंट को ट्रैक करना और पूरी डिलीवरी प्रक्रिया के दौरान ग्राहक संचार का प्रबंधन करना सीखें।",
    "step8Title": "B2B बनाम B2C पूर्ति में अंतर",
    "step8Intro": "B2C (उपभोक्ता) और B2B (व्यावसायिक खुदरा विक्रेता) पूर्ति प्रक्रियाओं के बीच के अंतर को समझना विभिन्न ग्राहक प्रकारों और ऑर्डर विशेषताओं के लिए वर्कफ़्लो को अनुकूलित करने में मदद करता है।",
    "step8Description": "B2C और B2B दोनों ऑर्डर पूर्ति के लिए विशिष्ट विचारों और वर्कफ़्लो को जानें।",
    "nextStepsTitle": "ऑर्डर पूर्ति में महारत पूरी!",
    "nextStepsDescription": "आपने प्रारंभिक ऑर्डर रसीद से लेकर अंतिम डिलीवरी हैंडऑफ़ तक की पूरी ऑर्डर पूर्ति वर्कफ़्लो में सफलतापूर्वक महारत हासिल कर ली है। आपके ऑर्डर अब व्यापक गुणवत्ता नियंत्रण और दस्तावेज़ीकरण के साथ पिकिंग, पैकिंग, इनवॉइसिंग और डिस्पैच के माध्यम से कुशलतापूर्वक संसाधित होते हैं।",
    "nextStepsButton": "अंतिम-मील लॉजिस्टिक्स पर जारी रखें",
    "openDashboard": "पूर्ति डैशबोर्ड खोलें",
    "fulfillmentDashboard": "पूर्ति डैशबोर्ड",
    "manageOrders": "पूरे पूर्ति वर्कफ़्लो के माध्यम से ऑर्डर प्रबंधित करें",
    "fulfillment": "पूर्ति",
    "analytics": "एनालिटिक्स",
    "inventory": "इन्वेंट्री",
    "orders": "ऑर्डर",
    "clickFulfillment": "ऑर्डर पूर्ति वर्कफ़्लो प्रबंधन प्रणाली तक पहुँचने के लिए मुख्य साइडबार से 'पूर्ति' पर क्लिक करें।",
    "b2bAndB2cOrders": "B2B और B2C ऑर्डर",
    "vendorReturns": "विक्रेता रिटर्न",
    "scanOrder": "ऑर्डर स्कैन करें",
    "printLabels": "लेबल प्रिंट करें",
    "exportData": "डेटा निर्यात करें",
    "filterSearchOrders": "ऑर्डर फ़िल्टर और खोजें",
    "searchPlaceholder": "ऑर्डर आईडी, ग्राहक नाम, या खुदरा विक्रेता के नाम से खोजें...",
    "allOrders": "सभी ऑर्डर",
    "b2cOrders": "B2C ऑर्डर",
    "b2bOrders": "B2B ऑर्डर",
    "showingResults": "{total} में से {count} ऑर्डर दिखाए जा रहे हैं",
    "b2cOrdersOnly": "केवल B2C ऑर्डर",
    "newOrders": "नए ऑर्डर",
    "readyToPick": "पिक करने के लिए तैयार",
    "picking": "पिकिंग",
    "inProgress": "प्रगति में",
    "packingInvoiced": "पैकिंग और इनवॉइस",
    "awaitingPack": "पैकिंग का इंतज़ार है",
    "shipped": "शिप किया गया",
    "thisWeek": "इस सप्ताह",
    "delivered": "डिलीवर किया गया",
    "completed": "पूरा हुआ",
    "viewAllOrders": "सभी {count} ऑर्डर देखें",
    "orderStatusExplanation": "ऑर्डर स्टेटस वर्कफ़्लो स्पष्टीकरण",
    "pendingStatus": "पेंडिंग/नए ऑर्डर",
    "pendingDesc": "नए ऑर्डर जिनकी समीक्षा और प्रोसेसिंग की आवश्यकता है। इस चरण में इन्वेंट्री की उपलब्धता सत्यापित की जाती है।",
    "pickingStatus": "पिकिंग",
    "pickingDesc": "ऑर्डर वर्तमान में वेयरहाउस कर्मचारियों द्वारा पिक किए जा रहे हैं। पिक लिस्ट बनाई जाती है और आइटम एकत्र किए जा रहे हैं।",
    "packingStatus": "पैकिंग और इनवॉइस",
    "packingDesc": "आइटम पिक किए गए हैं और बक्सों में पैक किए जा रहे हैं। इस चरण में इनवॉइस बनाए जाते हैं।",
    "shippedStatus": "शिप किया गया",
    "shippedDesc": "जो ऑर्डर डिस्पैच कर दिए गए हैं और ग्राहकों तक पहुँच रहे हैं। ट्रैकिंग जानकारी उपलब्ध है।",
    "deliveredStatus": "डिलीवर किया गया",
    "deliveredDesc": "ऑर्डर ग्राहकों को सफलतापूर्वक डिलीवर कर दिए गए हैं। पूर्ति प्रक्रिया पूरी हो गई है।",
    "processingNewOrders": "नए ऑर्डर प्रोसेस करना",
    "newOrderInterface": "नए ऑर्डर प्रोसेसिंग इंटरफ़ेस",
    "orderDetails": "ऑर्डर विवरण",
    "customer": "ग्राहक",
    "orderDate": "ऑर्डर की तारीख",
    "paymentMethod": "भुगतान विधि",
    "deliveryAddress": "डिलीवरी का पता",
    "orderItems": "ऑर्डर आइटम",
    "totalAmount": "कुल राशि",
    "startFulfillment": "पूर्ति शुरू करें",
    "viewFullDetails": "पूरा विवरण देखें",
    "newOrder": "नया ऑर्डर",
    "b2cCustomer": "B2C ग्राहक",
    "digitalWallet": "डिजिटल वॉलेट",
    "paymentComplete": "भुगतान पूरा",
    "sarahWilson": "सारा विल्सन",
    "orderReceived": "ऑर्डर प्राप्त हुआ और भुगतान की पुष्टि हुई",
    "greenValleyAddress": "123 ग्रीन वैली रोड, बैंगलोर, कर्नाटक 560001",
    "customerPhone": "फ़ोन: +91 98765 43210",
    "pickingInterface": "ऑर्डर पिकिंग इंटरफ़ेस",
    "generatePickList": "पिक लिस्ट बनाएँ",
    "pickListGenerated": "पिक लिस्ट बनाई गई",
    "orderNumber": "ऑर्डर #",
    "pickingInstructions": "पिकिंग निर्देश",
    "followOptimizedRoute": "सभी आइटमों को कुशलतापूर्वक एकत्र करने के लिए नीचे दिए गए अनुकूलित मार्ग का पालन करें। पिकअप की पुष्टि करने के लिए प्रत्येक आइटम के बारकोड को स्कैन करें।",
    "warehouseLocation": "वेयरहाउस स्थान",
    "quantityToPick": "पिक करने की मात्रा",
    "scanBarcode": "बारकोड स्कैन करें",
    "confirmPick": "पिक की पुष्टि करें",
    "pickingComplete": "पिकिंग पूरी",
    "proceedToPacking": "पैकिंग के लिए आगे बढ़ें",
    "organicBasmatiRice": "ऑर्गेनिक बासमती चावल 1 किलो",
    "wholeWheatFlour": "साबुत गेहूँ का आटा 1 किलो",
    "oliveOilExtra": "जैतून का तेल एक्स्ट्रा वर्जिन 500 मिली",
    "locationA": "स्थान: A-1-3",
    "locationB": "स्थान: B-2-1",
    "locationC": "स्थान: C-1-5",
    "quantity": "मात्रा",
    "verified": "सत्यापित",
    "packingInterface": "ऑर्डर पैकिंग इंटरफ़ेस",
    "packingStation": "पैकिंग स्टेशन",
    "packing": "पैकिंग",
    "itemVerification": "आइटम सत्यापन",
    "boxManagement": "बॉक्स प्रबंधन",
    "createNewBox": "नया बॉक्स बनाएँ",
    "boxId": "बॉक्स आईडी",
    "addItemToBox": "बॉक्स में आइटम जोड़ें",
    "boxContents": "बॉक्स की सामग्री",
    "generateInvoice": "इनवॉइस बनाएँ",
    "packingComplete": "पैकिंग पूरी",
    "readyForDispatch": "डिस्पैच के लिए तैयार",
    "items": "आइटम",
    "shippingCoordination": "शिपिंग और डिस्पैच समन्वय",
    "dispatchInterface": "डिस्पैच प्रबंधन इंटरफ़ेस",
    "assignDelivery": "डिलीवरी असाइन करें",
    "inHousePersonnel": "इन-हाउस कर्मी",
    "courierAgency": "कूरियर एजेंसी",
    "available": "उपलब्ध",
    "assign": "असाइन करें",
    "generateShippingLabel": "शिपिंग लेबल बनाएँ",
    "trackingNumber": "ट्रैकिंग नंबर",
    "deliveryInstructions": "डिलीवरी निर्देश",
    "scheduledDelivery": "निर्धारित डिलीवरी",
    "dispatchOrder": "ऑर्डर डिस्पैच करें",
    "generate": "बनाएँ",
    "shippingDetails": "शिपिंग विवरण",
    "createShippingLabels": "बक्सों के लिए शिपिंग लेबल बनाएँ",
    "enterDeliveryInstructions": "विशेष डिलीवरी निर्देश दर्ज करें...",
    "rameshKumar": "रमेश कुमार",
    "priyaSharma": "प्रिया शर्मा",
    "fastTrackDelivery": "फास्टट्रैक डिलीवरी",
    "quickShipExpress": "क्विकशिप एक्सप्रेस",
    "orderTimeline": "ऑर्डर टाइमलाइन और स्टेटस ट्रैकिंग",
    "orderPlaced": "ऑर्डर दिया गया",
    "pickingStarted": "पिकिंग शुरू हुई",
    "itemsPicked": "आइटम पिक किए गए",
    "packingStarted": "पैकिंग शुरू हुई",
    "invoiceGenerated": "इनवॉइस बनाया गया",
    "readyForShipment": "शिपमेंट के लिए तैयार",
    "orderShipped": "ऑर्डर शिप किया गया",
    "orderDelivered": "ऑर्डर डिलीवर किया गया",
    "pickListGenerated": "पिक लिस्ट बनाई गई, पिकिंग प्रगति में",
    "allItemsPicked": "वेयरहाउस से सभी आइटम सफलतापूर्वक पिक किए गए",
    "movedToPacking": "आइटम पैकिंग स्टेशन पर ले जाए गए",
    "invoiceCreated": "इनवॉइस बनाया गया: INV-2024-521001",
    "packedReady": "पैक किया गया और डिस्पैच के लिए तैयार",
    "pendingDelivery": "डिलीवरी असाइनमेंट लंबित है",
    "awaitingCompletion": "डिलीवरी पूरी होने का इंतज़ार है",
    "b2bVsB2cDifferences": "B2B बनाम B2C पूर्ति में अंतर",
    "b2cCharacteristics": "B2C ऑर्डर की विशेषताएँ",
    "b2cDesc": "व्यक्तिगत ग्राहक, छोटी मात्राएँ, घर पर डिलीवरी, तत्काल प्रोसेसिंग",
    "b2bCharacteristics": "B2B ऑर्डर की विशेषताएँ",
    "b2bDesc": "व्यावसायिक ग्राहक, बड़ी मात्राएँ, बल्क पैकेजिंग, निर्धारित डिलीवरी",
    "individualCustomers": "व्यक्तिगत ग्राहक",
    "smallerQuantities": "छोटी ऑर्डर मात्राएँ",
    "homeDelivery": "घर पर डिलीवरी की आवश्यकता है",
    "immediateProcessing": "तत्काल प्रोसेसिंग की उम्मीद है",
    "singleAddress": "एकल शिपिंग पता",
    "consumerPackaging": "उपभोक्ता पैकेजिंग",
    "businessCustomers": "व्यावसायिक ग्राहक",
    "largerQuantities": "बड़ी ऑर्डर मात्राएँ",
    "bulkPackaging": "बल्क/वाणिज्यिक पैकेजिंग",
    "scheduledDelivery": "निर्धारित डिलीवरी के विकल्प",
    "multipleAddresses": "कई शिपिंग पते",
    "extendedTerms": "विस्तारित भुगतान शर्तें",
    "navigation": "नेविगेशन",
    "copy": "कॉपी",
    "sampleTracking": "TRK-2024-521001",
    "sampleSchedule": "22 मई, 2024 - 2:00 PM",
    "fulfillmentMetrics": "पूर्ति प्रदर्शन मेट्रिक्स",
    "averagePickTime": "औसत पिक समय",
    "packingEfficiency": "पैकिंग दक्षता",
    "onTimeDelivery": "समय पर डिलीवरी",
    "orderAccuracy": "ऑर्डर सटीकता",
    "qualityControl": "गुणवत्ता नियंत्रण चेकपॉइंट",
    "inventoryVerification": "इन्वेंट्री सत्यापन",
    "pickingAccuracy": "पिकिंग सटीकता",
    "packingInspection": "पैकिंग निरीक्षण",
    "shippingValidation": "शिपिंग सत्यापन"
  },
  ml: {
    "pageTitle": "ഓർഡർ ഫുൾഫിൽമെന്റ് മാനുവൽ",
    "backToManual": "മാനുവലിലേക്ക് തിരികെ പോകുക",
    "description": "വെയർഹൗസിൽ നിന്ന് സാധനങ്ങൾ എടുക്കുന്നതു മുതൽ പാക്കിംഗ്, ഇൻവോയ്സിംഗ്, ഡെലിവറിക്ക് വേണ്ടി ഷിപ്പ്‌മെന്റുകൾ തയ്യാറാക്കൽ വരെയുള്ള പൂർണ്ണമായ ഓർഡർ ഫുൾഫിൽമെന്റ് പ്രക്രിയയിൽ വിശദമായ വർക്ക്ഫ്ലോകളും ഗുണനിലവാര നിയന്ത്രണ നടപടിക്രമങ്ങളും ഉപയോഗിച്ച് വൈദഗ്ദ്ധ്യം നേടുക.",
    "step1Title": "ഫുൾഫിൽമെന്റ് ഡാഷ്‌ബോർഡ് അവലോകനം",
    "step1Intro": "എല്ലാ ഇൻകമിംഗ് ഓർഡറുകളും പ്രോസസ്സ് ചെയ്യുന്നതിനുള്ള നിങ്ങളുടെ ഓപ്പറേഷണൽ കമാൻഡ് സെന്ററാണ് ഫുൾഫിൽമെന്റ് ഡാഷ്‌ബോർഡ്. ഇത് തത്സമയ അപ്‌ഡേറ്റുകൾ, പെർഫോമൻസ് മെട്രിക്സ്, ഇന്റലിജന്റ് ഫിൽട്ടറിംഗ് കഴിവുകൾ എന്നിവ ഉപയോഗിച്ച് ഫുൾഫിൽമെന്റിന്റെ ഓരോ ഘട്ടത്തിലൂടെയും ഓർഡറുകൾ ട്രാക്ക് ചെയ്യുന്ന ഒരു സമഗ്ര വർക്ക്ഫ്ലോ മാനേജ്മെന്റ് സിസ്റ്റം നൽകുന്നു.",
    "step1Description": "എല്ലാ ഓർഡർ പ്രോസസ്സിംഗ് ടൂളുകളും ആക്സസ് ചെയ്യാനും ഓർഡർ ലഭിച്ചത് മുതൽ ഡിസ്പാച്ച് വരെയുള്ള മുഴുവൻ ഫുൾഫിൽമെന്റ് വർക്ക്ഫ്ലോയും നിരീക്ഷിക്കാനും ഫുൾഫിൽമെന്റ് ഡാഷ്‌ബോർഡിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക.",
    "step2Title": "ഓർഡർ സ്റ്റാറ്റസുകളും വർക്ക്ഫ്ലോയും മനസ്സിലാക്കുക",
    "step2Intro": "ഓരോ ഓർഡറിനെയും അതിന്റെ ഫുൾഫിൽമെന്റ് യാത്രയിലൂടെ ട്രാക്ക് ചെയ്യാൻ RetailOS ഒരു സമഗ്ര ഓർഡർ സ്റ്റാറ്റസ് സിസ്റ്റം ഉപയോഗിക്കുന്നു. കാര്യക്ഷമമായ ഓർഡർ പ്രോസസ്സിംഗിനും കസ്റ്റമർ കമ്മ്യൂണിക്കേഷനും ഈ സ്റ്റാറ്റസുകൾ മനസ്സിലാക്കേണ്ടത് നിർണായകമാണ്.",
    "step2Description": "ഓരോ ഓർഡറും നിർവചിക്കപ്പെട്ട ഘട്ടങ്ങളിലൂടെ പുരോഗമിക്കുന്നു, ഓരോ ഘട്ടത്തിലും വ്യക്തമായ സൂചകങ്ങളും പ്രവർത്തനങ്ങളും ലഭ്യമാണ്.",
    "step3Title": "പുതിയ ഓർഡറുകൾ പ്രോസസ്സ് ചെയ്യുന്നു (പെൻഡിംഗ് സ്റ്റാറ്റസ്)",
    "step3Intro": "പുതിയ ഓർഡറുകൾ 'പെൻഡിംഗ്' അല്ലെങ്കിൽ 'പുതിയ ഓർഡറുകൾ' വിഭാഗത്തിൽ ദൃശ്യമാകുന്നു, കൂടാതെ അവയെ ഫുൾഫിൽമെന്റ് വർക്ക്ഫ്ലോയിലേക്ക് മാറ്റുന്നതിന് പ്രാരംഭ പ്രോസസ്സിംഗ് ആവശ്യമാണ്. ഇതിൽ ഓർഡർ വാലിഡേഷൻ, ഇൻവെന്ററി വെരിഫിക്കേഷൻ, പിക്കിംഗിനായുള്ള തയ്യാറെടുപ്പ് എന്നിവ ഉൾപ്പെടുന്നു.",
    "step3Description": "പുതിയ ഓർഡറുകൾ എങ്ങനെ അവലോകനം ചെയ്യണമെന്നും ഇൻവെന്ററി ലഭ്യത എങ്ങനെ പരിശോധിക്കണമെന്നും ഫുൾഫിൽമെന്റ് പ്രക്രിയ എങ്ങനെ ആരംഭിക്കണമെന്നും അറിയുക.",
    "step4Title": "ഓർഡർ പിക്കിംഗ് പ്രക്രിയ",
    "step4Intro": "ഒപ്റ്റിമൈസ് ചെയ്ത പിക്ക് ലിസ്റ്റുകൾ ഉപയോഗിച്ച് വെയർഹൗസ് ജീവനക്കാർ ഓർഡറുകൾക്കായി സാധനങ്ങൾ ശേഖരിക്കുന്ന പ്രക്രിയയാണ് പിക്കിംഗ്. യാത്രാ സമയം കുറയ്ക്കാനും കാര്യക്ഷമത വർദ്ധിപ്പിക്കാനും RetailOS ലൊക്കേഷൻ-അധിഷ്ഠിത പിക്കിംഗ് റൂട്ടുകൾ സൃഷ്ടിക്കുന്നു.",
    "step4Description": "പിക്ക് ലിസ്റ്റ് ജനറേഷൻ, ഇൻവെന്ററി അലോക്കേഷൻ, ഗുണനിലവാര നിയന്ത്രണ നടപടിക്രമങ്ങൾ എന്നിവ ഉൾപ്പെടെയുള്ള മുഴുവൻ പിക്കിംഗ് വർക്ക്ഫ്ലോയിലും വൈദഗ്ദ്ധ്യം നേടുക.",
    "step5Title": "ഓർഡർ പാക്കിംഗ് & ഇൻവോയ്സ് ജനറേഷൻ",
    "step5Intro": "പിക്കിംഗ് പൂർത്തിയായ ശേഷം, ഓർഡറുകൾ പാക്കിംഗ് സ്റ്റേഷനിലേക്ക് മാറ്റുന്നു, അവിടെ സാധനങ്ങൾ പരിശോധിക്കുകയും പെട്ടികളിൽ ക്രമീകരിക്കുകയും ഷിപ്പ്‌മെന്റിനായി തയ്യാറാക്കുകയും ചെയ്യുന്നു. ഈ ഘട്ടത്തിൽ ഇൻവോയ്സ് ജനറേഷനും ഷിപ്പിംഗ് ലേബൽ ഉണ്ടാക്കുന്നതും ഉൾപ്പെടുന്നു.",
    "step5Description": "ബോക്സ് മാനേജ്‌മെന്റ്, ഐറ്റം വെരിഫിക്കേഷൻ, ഡോക്യുമെന്റേഷൻ ജനറേഷൻ എന്നിവ ഉൾപ്പെടെയുള്ള സമഗ്ര പാക്കിംഗ് പ്രക്രിയ പഠിക്കുക.",
    "step6Title": "ഡിസ്പാച്ചിനും ഷിപ്പിംഗ് കോർഡിനേഷനും തയ്യാറാണ്",
    "step6Intro": "അവസാന ഫുൾഫിൽമെന്റ് ഘട്ടത്തിൽ ഡെലിവറി ജീവനക്കാർ അല്ലെങ്കിൽ കൊറിയർ സേവനങ്ങളുമായി ഏകോപിപ്പിക്കുക, ഷിപ്പിംഗ് ലേബലുകൾ ഉണ്ടാക്കുക, ആവശ്യമായ എല്ലാ ഡോക്യുമെന്റേഷനും ട്രാക്കിംഗ് വിവരങ്ങളും സഹിതം ശരിയായ കൈമാറ്റം ഉറപ്പാക്കുക എന്നിവ ഉൾപ്പെടുന്നു.",
    "step6Description": "ഓർഡറുകൾ ഡിസ്പാച്ചിനായി തയ്യാറാക്കി ഡെലിവറി ടീമുകളുമായി ഏകോപിപ്പിച്ച് ഫുൾഫിൽമെന്റ് സൈക്കിൾ പൂർത്തിയാക്കുക.",
    "step7Title": "ഡെലിവറി അസൈൻമെന്റ് & ട്രാക്കിംഗ്",
    "step7Intro": "ഇൻ-ഹൗസ് ജീവനക്കാർക്കോ മൂന്നാം കക്ഷി കൊറിയർ ഏജൻസികൾക്കോ ​​അസൈൻമെന്റ്, തത്സമയ ട്രാക്കിംഗ്, കസ്റ്റമർ കമ്മ്യൂണിക്കേഷൻ കഴിവുകൾ എന്നിവ ഉൾപ്പെടെയുള്ള സമഗ്രമായ ഡെലിവറി മാനേജ്‌മെന്റ് RetailOS നൽകുന്നു.",
    "step7Description": "ഡെലിവറി എങ്ങനെ അസൈൻ ചെയ്യണമെന്നും ഷിപ്പ്‌മെന്റുകൾ എങ്ങനെ ട്രാക്ക് ചെയ്യണമെന്നും ഡെലിവറി പ്രക്രിയയിലുടനീളം കസ്റ്റമർ കമ്മ്യൂണിക്കേഷൻ എങ്ങനെ കൈകാര്യം ചെയ്യണമെന്നും അറിയുക.",
    "step8Title": "B2B vs B2C ഫുൾഫിൽമെന്റ് വ്യത്യാസങ്ങൾ",
    "step8Intro": "B2C (ഉപഭോക്താവ്) ഫുൾഫിൽമെന്റും B2B (ബിസിനസ് റീട്ടെയിലർ) ഫുൾഫിൽമെന്റും തമ്മിലുള്ള വ്യത്യാസങ്ങൾ മനസ്സിലാക്കുന്നത് വ്യത്യസ്ത കസ്റ്റമർ തരങ്ങൾക്കും ഓർഡർ സവിശേഷതകൾക്കും വർക്ക്ഫ്ലോകൾ ഒപ്റ്റിമൈസ് ചെയ്യാൻ സഹായിക്കുന്നു.",
    "step8Description": "B2C, B2B ഓർഡർ ഫുൾഫിൽമെന്റിനായുള്ള പ്രത്യേക പരിഗണനകളും വർക്ക്ഫ്ലോകളും അറിയുക.",
    "nextStepsTitle": "ഓർഡർ ഫുൾഫിൽമെന്റ് വൈദഗ്ദ്ധ്യം പൂർത്തിയായി!",
    "nextStepsDescription": "പ്രാരംഭ ഓർഡർ ലഭിച്ചത് മുതൽ അവസാന ഡെലിവറി കൈമാറ്റം വരെയുള്ള പൂർണ്ണമായ ഓർഡർ ഫുൾഫിൽമെന്റ് വർക്ക്ഫ്ലോയിൽ നിങ്ങൾ വിജയകരമായി വൈദഗ്ദ്ധ്യം നേടിയിരിക്കുന്നു. നിങ്ങളുടെ ഓർഡറുകൾ ഇപ്പോൾ പിക്കിംഗ്, പാക്കിംഗ്, ഇൻവോയ്സിംഗ്, ഡിസ്പാച്ച് എന്നിവയിലൂടെ സമഗ്രമായ ഗുണനിലവാര നിയന്ത്രണങ്ങളും ഡോക്യുമെന്റേഷനും ഉപയോഗിച്ച് കാര്യക്ഷമമായി പ്രോസസ്സ് ചെയ്യുന്നു.",
    "nextStepsButton": "ലാസ്റ്റ്-മൈൽ ലോജിസ്റ്റിക്സിലേക്ക് തുടരുക",
    "openDashboard": "ഫുൾഫിൽമെന്റ് ഡാഷ്‌ബോർഡ് തുറക്കുക",
    "fulfillmentDashboard": "ഫുൾഫിൽമെന്റ് ഡാഷ്‌ബോർഡ്",
    "manageOrders": "മുഴുവൻ ഫുൾഫിൽമെന്റ് വർക്ക്ഫ്ലോയിലൂടെയും ഓർഡറുകൾ നിയന്ത്രിക്കുക",
    "fulfillment": "ഫുൾഫിൽമെന്റ്",
    "analytics": "അനലിറ്റിക്സ്",
    "inventory": "ഇൻവെന്ററി",
    "orders": "ഓർഡറുകൾ",
    "clickFulfillment": "ഓർഡർ ഫുൾഫിൽമെന്റ് വർക്ക്ഫ്ലോ മാനേജ്‌മെന്റ് സിസ്റ്റം ആക്‌സസ് ചെയ്യാൻ പ്രധാന സൈഡ്‌ബാറിൽ നിന്ന് 'ഫുൾഫിൽമെന്റ്' എന്നതിൽ ക്ലിക്ക് ചെയ്യുക.",
    "b2bAndB2cOrders": "B2B, B2C ഓർഡറുകൾ",
    "vendorReturns": "വിൽപ്പനക്കാരൻ മടക്കിനൽകിയത്",
    "scanOrder": "ഓർഡർ സ്കാൻ ചെയ്യുക",
    "printLabels": "ലേബലുകൾ പ്രിന്റ് ചെയ്യുക",
    "exportData": "ഡാറ്റ എക്‌സ്‌പോർട്ട് ചെയ്യുക",
    "filterSearchOrders": "ഓർഡറുകൾ ഫിൽട്ടർ & സെർച്ച് ചെയ്യുക",
    "searchPlaceholder": "ഓർഡർ ഐഡി, കസ്റ്റമർ പേര്, അല്ലെങ്കിൽ റീട്ടെയിലർ പേര് എന്നിവ ഉപയോഗിച്ച് തിരയുക...",
    "allOrders": "എല്ലാ ഓർഡറുകളും",
    "b2cOrders": "B2C ഓർഡറുകൾ",
    "b2bOrders": "B2B ഓർഡറുകൾ",
    "showingResults": "{total} ഓർഡറുകളിൽ {count} എണ്ണം കാണിക്കുന്നു",
    "b2cOrdersOnly": "B2C ഓർഡറുകൾ മാത്രം",
    "newOrders": "പുതിയ ഓർഡറുകൾ",
    "readyToPick": "പിക്കിംഗിന് തയ്യാറാണ്",
    "picking": "പിക്കിംഗ്",
    "inProgress": "പുരോഗതിയിലാണ്",
    "packingInvoiced": "പാക്കിംഗ് & ഇൻവോയ്സ്",
    "awaitingPack": "പാക്കിംഗ് കാത്തിരിക്കുന്നു",
    "shipped": "ഷിപ്പ് ചെയ്തു",
    "thisWeek": "ഈ ആഴ്ച",
    "delivered": "ഡെലിവർ ചെയ്തു",
    "completed": "പൂർത്തിയായി",
    "viewAllOrders": "എല്ലാ {count} ഓർഡറുകളും കാണുക",
    "orderStatusExplanation": "ഓർഡർ സ്റ്റാറ്റസ് വർക്ക്ഫ്ലോ വിശദീകരണം",
    "pendingStatus": "പെൻഡിംഗ്/പുതിയ ഓർഡറുകൾ",
    "pendingDesc": "അവലോകനം ചെയ്യുകയും പ്രോസസ്സ് ചെയ്യുകയും ചെയ്യേണ്ട പുതിയ ഓർഡറുകൾ. ഈ ഘട്ടത്തിൽ ഇൻവെന്ററി ലഭ്യത പരിശോധിച്ചുറപ്പിക്കുന്നു.",
    "pickingStatus": "പിക്കിംഗ്",
    "pickingDesc": "നിലവിൽ വെയർഹൗസ് ജീവനക്കാർ പിക്ക് ചെയ്തുകൊണ്ടിരിക്കുന്ന ഓർഡറുകൾ. പിക്ക് ലിസ്റ്റുകൾ ഉണ്ടാക്കുകയും സാധനങ്ങൾ ശേഖരിക്കുകയും ചെയ്യുന്നു.",
    "packingStatus": "പാക്കിംഗ് & ഇൻവോയ്സ്",
    "packingDesc": "സാധനങ്ങൾ പിക്ക് ചെയ്യുകയും പെട്ടികളിൽ പാക്ക് ചെയ്യുകയും ചെയ്യുന്നു. ഈ ഘട്ടത്തിൽ ഇൻവോയ്സുകൾ ഉണ്ടാക്കുന്നു.",
    "shippedStatus": "ഷിപ്പ് ചെയ്തു",
    "shippedDesc": "ഡിസ്പാച്ച് ചെയ്യുകയും ഉപഭോക്താക്കളിലേക്കുള്ള വഴിയിലായിരിക്കുകയും ചെയ്യുന്ന ഓർഡറുകൾ. ട്രാക്കിംഗ് വിവരങ്ങൾ ലഭ്യമാണ്.",
    "deliveredStatus": "ഡെലിവർ ചെയ്തു",
    "deliveredDesc": "ഓർഡറുകൾ ഉപഭോക്താക്കൾക്ക് വിജയകരമായി ഡെലിവർ ചെയ്തു. ഫുൾഫിൽമെന്റ് പ്രക്രിയ പൂർത്തിയായി.",
    "processingNewOrders": "പുതിയ ഓർഡറുകൾ പ്രോസസ്സ് ചെയ്യുന്നു",
    "newOrderInterface": "പുതിയ ഓർഡർ പ്രോസസ്സിംഗ് ഇന്റർഫേസ്",
    "orderDetails": "ഓർഡർ വിശദാംശങ്ങൾ",
    "customer": "ഉപഭോക്താവ്",
    "orderDate": "ഓർഡർ തീയതി",
    "paymentMethod": "പേയ്‌മെന്റ് രീതി",
    "deliveryAddress": "ഡെലിവറി വിലാസം",
    "orderItems": "ഓർഡർ സാധനങ്ങൾ",
    "totalAmount": "മൊത്തം തുക",
    "startFulfillment": "ഫുൾഫിൽമെന്റ് ആരംഭിക്കുക",
    "viewFullDetails": "പൂർണ്ണ വിവരങ്ങൾ കാണുക",
    "newOrder": "പുതിയ ഓർഡർ",
    "b2cCustomer": "B2C കസ്റ്റമർ",
    "digitalWallet": "ഡിജിറ്റൽ വാലറ്റ്",
    "paymentComplete": "പേയ്‌മെന്റ് പൂർത്തിയായി",
    "sarahWilson": "സാറ വിൽസൺ",
    "orderReceived": "ഓർഡർ ലഭിച്ചു, പേയ്‌മെന്റ് സ്ഥിരീകരിച്ചു",
    "greenValleyAddress": "123 ഗ്രീൻ വാലി റോഡ്, ബാംഗ്ലൂർ, കർണാടക 560001",
    "customerPhone": "ഫോൺ: +91 98765 43210",
    "pickingInterface": "ഓർഡർ പിക്കിംഗ് ഇന്റർഫേസ്",
    "generatePickList": "പിക്ക് ലിസ്റ്റ് ഉണ്ടാക്കുക",
    "pickListGenerated": "പിക്ക് ലിസ്റ്റ് ഉണ്ടാക്കി",
    "orderNumber": "ഓർഡർ #",
    "pickingInstructions": "പിക്കിംഗ് നിർദ്ദേശങ്ങൾ",
    "followOptimizedRoute": "എല്ലാ സാധനങ്ങളും കാര്യക്ഷമമായി ശേഖരിക്കാൻ താഴെക്കൊടുത്തിരിക്കുന്ന ഒപ്റ്റിമൈസ് ചെയ്ത റൂട്ട് പിന്തുടരുക. പിക്ക്അപ്പ് സ്ഥിരീകരിക്കാൻ ഓരോ സാധനത്തിന്റെയും ബാർകോഡ് സ്കാൻ ചെയ്യുക.",
    "warehouseLocation": "വെയർഹൗസ് ലൊക്കേഷൻ",
    "quantityToPick": "പിക്കിംഗ് ചെയ്യേണ്ട അളവ്",
    "scanBarcode": "ബാർകോഡ് സ്കാൻ ചെയ്യുക",
    "confirmPick": "പിക്ക് സ്ഥിരീകരിക്കുക",
    "pickingComplete": "പിക്കിംഗ് പൂർത്തിയായി",
    "proceedToPacking": "പാക്കിംഗിനായി മുന്നോട്ട് പോകുക",
    "organicBasmatiRice": "ഓർഗാനിക് ബസ്മതി അരി 1kg",
    "wholeWheatFlour": "മുഴുവൻ ഗോതമ്പ് പൊടി 1kg",
    "oliveOilExtra": "ഒലീവ് ഓയിൽ എക്സ്ട്രാ വെർജിൻ 500ml",
    "locationA": "ലൊക്കേഷൻ: A-1-3",
    "locationB": "ലൊക്കേഷൻ: B-2-1",
    "locationC": "ലൊക്കേഷൻ: C-1-5",
    "quantity": "അളവ്",
    "verified": "പരിശോധിച്ചു",
    "packingInterface": "ഓർഡർ പാക്കിംഗ് ഇന്റർഫേസ്",
    "packingStation": "പാക്കിംഗ് സ്റ്റേഷൻ",
    "packing": "പാക്കിംഗ്",
    "itemVerification": "സാധനം പരിശോധിക്കൽ",
    "boxManagement": "ബോക്സ് മാനേജ്‌മെന്റ്",
    "createNewBox": "പുതിയ ബോക്സ് ഉണ്ടാക്കുക",
    "boxId": "ബോക്സ് ഐഡി",
    "addItemToBox": "ബോക്സിലേക്ക് സാധനം ചേർക്കുക",
    "boxContents": "ബോക്സിലെ ഉള്ളടക്കങ്ങൾ",
    "generateInvoice": "ഇൻവോയ്സ് ഉണ്ടാക്കുക",
    "packingComplete": "പാക്കിംഗ് പൂർത്തിയായി",
    "readyForDispatch": "ഡിസ്പാച്ചിനായി തയ്യാറാണ്",
    "items": "സാധനങ്ങൾ",
    "shippingCoordination": "ഷിപ്പിംഗ് & ഡിസ്പാച്ച് കോർഡിനേഷൻ",
    "dispatchInterface": "ഡിസ്പാച്ച് മാനേജ്മെന്റ് ഇന്റർഫേസ്",
    "assignDelivery": "ഡെലിവറി അസൈൻ ചെയ്യുക",
    "inHousePersonnel": "ഇൻ-ഹൗസ് ജീവനക്കാർ",
    "courierAgency": "കൊറിയർ ഏജൻസി",
    "available": "ലഭ്യമാണ്",
    "assign": "അസൈൻ ചെയ്യുക",
    "generateShippingLabel": "ഷിപ്പിംഗ് ലേബൽ ഉണ്ടാക്കുക",
    "trackingNumber": "ട്രാക്കിംഗ് നമ്പർ",
    "deliveryInstructions": "ഡെലിവറി നിർദ്ദേശങ്ങൾ",
    "scheduledDelivery": "ഷെഡ്യൂൾ ചെയ്ത ഡെലിവറി",
    "dispatchOrder": "ഓർഡർ ഡിസ്പാച്ച് ചെയ്യുക",
    "generate": "ഉണ്ടാക്കുക",
    "shippingDetails": "ഷിപ്പിംഗ് വിവരങ്ങൾ",
    "createShippingLabels": "ബോക്സുകൾക്കായി ഷിപ്പിംഗ് ലേബലുകൾ ഉണ്ടാക്കുക",
    "enterDeliveryInstructions": "പ്രത്യേക ഡെലിവറി നിർദ്ദേശങ്ങൾ നൽകുക...",
    "rameshKumar": "രമേശ് കുമാർ",
    "priyaSharma": "പ്രിയ ശർമ്മ",
    "fastTrackDelivery": "ഫാസ്റ്റ് ട്രാക്ക് ഡെലിവറി",
    "quickShipExpress": "ക്വിക്ക് ഷിപ്പ് എക്സ്പ്രസ്",
    "orderTimeline": "ഓർഡർ ടൈംലൈൻ & സ്റ്റാറ്റസ് ട്രാക്കിംഗ്",
    "orderPlaced": "ഓർഡർ നൽകി",
    "pickingStarted": "പിക്കിംഗ് തുടങ്ങി",
    "itemsPicked": "സാധനങ്ങൾ പിക്ക് ചെയ്തു",
    "packingStarted": "പാക്കിംഗ് തുടങ്ങി",
    "invoiceGenerated": "ഇൻവോയ്സ് ഉണ്ടാക്കി",
    "readyForShipment": "ഷിപ്പ്മെന്റിനായി തയ്യാറാണ്",
    "orderShipped": "ഓർഡർ ഷിപ്പ് ചെയ്തു",
    "orderDelivered": "ഓർഡർ ഡെലിവർ ചെയ്തു",
    "pickListGenerated": "പിക്ക് ലിസ്റ്റ് ഉണ്ടാക്കി, പിക്കിംഗ് പുരോഗതിയിലാണ്",
    "allItemsPicked": "വെയർഹൗസിൽ നിന്ന് എല്ലാ സാധനങ്ങളും വിജയകരമായി പിക്ക് ചെയ്തു",
    "movedToPacking": "സാധനങ്ങൾ പാക്കിംഗ് സ്റ്റേഷനിലേക്ക് മാറ്റി",
    "invoiceCreated": "ഇൻവോയ്സ് ഉണ്ടാക്കി: INV-2024-521001",
    "packedReady": "പാക്ക് ചെയ്തു, ഡിസ്പാച്ചിനായി തയ്യാറാണ്",
    "pendingDelivery": "ഡെലിവറി അസൈൻമെന്റ് ശേഷിക്കുന്നു",
    "awaitingCompletion": "ഡെലിവറി പൂർത്തിയാകുന്നതിനായി കാത്തിരിക്കുന്നു",
    "b2bVsB2cDifferences": "B2B vs B2C ഫുൾഫിൽമെന്റ് വ്യത്യാസങ്ങൾ",
    "b2cCharacteristics": "B2C ഓർഡർ സവിശേഷതകൾ",
    "b2cDesc": "വ്യക്തിഗത ഉപഭോക്താക്കൾ, ചെറിയ അളവ്, ഹോം ഡെലിവറി, അടിയന്തിര പ്രോസസ്സിംഗ്",
    "b2bCharacteristics": "B2B ഓർഡർ സവിശേഷതകൾ",
    "b2bDesc": "ബിസിനസ്സ് ഉപഭോക്താക്കൾ, വലിയ അളവ്, ബൾക്ക് പാക്കേജിംഗ്, ഷെഡ്യൂൾ ചെയ്ത ഡെലിവറി",
    "individualCustomers": "വ്യക്തിഗത ഉപഭോക്താക്കൾ",
    "smallerQuantities": "ചെറിയ ഓർഡർ അളവുകൾ",
    "homeDelivery": "ഹോം ഡെലിവറി ആവശ്യമാണ്",
    "immediateProcessing": "അടിയന്തിര പ്രോസസ്സിംഗ് പ്രതീക്ഷിക്കുന്നു",
    "singleAddress": "ഒറ്റ ഷിപ്പിംഗ് വിലാസം",
    "consumerPackaging": "ഉപഭോക്തൃ പാക്കേജിംഗ്",
    "businessCustomers": "ബിസിനസ്സ് ഉപഭോക്താക്കൾ",
    "largerQuantities": "വലിയ ഓർഡർ അളവുകൾ",
    "bulkPackaging": "ബൾക്ക്/വാണിജ്യ പാക്കേജിംഗ്",
    "scheduledDelivery": "ഷെഡ്യൂൾ ചെയ്ത ഡെലിവറി ഓപ്ഷനുകൾ",
    "multipleAddresses": "ഒന്നിലധികം ഷിപ്പിംഗ് വിലാസങ്ങൾ",
    "extendedTerms": "വിപുലീകരിച്ച പേയ്‌മെന്റ് നിബന്ധനകൾ",
    "navigation": "നാവിഗേഷൻ",
    "copy": "പകർപ്പ്",
    "sampleTracking": "TRK-2024-521001",
    "sampleSchedule": "മെയ് 22, 2024 - 2:00 PM",
    "fulfillmentMetrics": "ഫുൾഫിൽമെന്റ് പെർഫോമൻസ് മെട്രിക്സ്",
    "averagePickTime": "ശരാശരി പിക്ക് സമയം",
    "packingEfficiency": "പാക്കിംഗ് കാര്യക്ഷമത",
    "onTimeDelivery": "കൃത്യസമയത്തുള്ള ഡെലിവറി",
    "orderAccuracy": "ഓർഡർ കൃത്യത",
    "qualityControl": "ഗുണനിലവാര നിയന്ത്രണ ചെക്ക്പോയിന്റുകൾ",
    "inventoryVerification": "ഇൻവെന്ററി വെരിഫിക്കേഷൻ",
    "pickingAccuracy": "പിക്കിംഗ് കൃത്യത",
    "packingInspection": "പാക്കിംഗ് പരിശോധന",
    "shippingValidation": "ഷിപ്പിംഗ് വാലിഡേഷൻ"
  }

};





export default function ManualFulfillment() {
  const [language] = useManualLanguage();

  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
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
          <LanguageSelector language={language} setLanguage={() => { }} readOnly />
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                {t('pageTitle')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                {t('description')}
              </p>
            </div>

            <section className="space-y-12">
              <Step number="1" title={t('step1Title')}>
                <p>
                  {t('step1Intro')}
                </p>
                <p>
                  {t('step1Description')}
                </p>
                <SubStep letter="A" title={`${t('fulfillmentDashboard')} ${t('navigation')}`}>
                  <Screenshot title={t('fulfillmentDashboard')}>
                    <div className='-ml-4 sm:ml-0'>
                      <div className="border border-slate-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-6 flex-col sm:flex-row gap-4 sm:gap-0">
                          <h3 className="text-xl font-bold text-slate-800">{t('fulfillmentDashboard')}</h3>
                          <p className="text-slate-600">{t('manageOrders')}</p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg mb-6">
                          <div className="flex items-center gap-4 mb-4">
                            <Package className="w-5 h-5 text-indigo-600" />
                            <span className="font-medium">{t('fulfillment')}</span>
                          </div>
                          <p className="text-sm text-slate-600">{t('clickFulfillment')}</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mb-6 ">
                          <Button className="bg-indigo-600 text-white">
                            <Users className="w-4 h-4 mr-2" />
                            {t('b2bAndB2cOrders')}
                          </Button>
                          <Button variant="outline" className="border-orange-300 text-orange-700">
                            <Package className="w-4 h-4 mr-2" />
                            {t('vendorReturns')}
                          </Button>
                        </div>

                        <div className="border border-slate-200 bg-slate-50 p-4 rounded-lg mb-6">
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Filter className="w-4 h-4 text-blue-600" />
                            {t('filterSearchOrders')}
                          </h4>
                          <div className="flex gap-3 mb-3">
                            <div className="flex-1 relative">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                              <Input
                                placeholder={t('searchPlaceholder')}
                                className="pl-9"
                              />
                            </div>
                            <Button variant="outline">
                              <Building2 className="w-4 h-4 mr-2" />
                              {t('b2bOrders')}
                            </Button>
                          </div>
                          <div className="bg-blue-50 p-3 rounded border border-blue-200">
                            <p className="text-sm text-blue-800">
                              {t('showingResults').replace('{count}', '156').replace('{total}', '200')} • {t('b2cOrdersOnly')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Screenshot>
                </SubStep>
              </Step>

              <Step number="2" title={t('step2Title')}>
                <p>
                  {t('step2Intro')}
                </p>
                <p>
                  {t('step2Description')}
                </p>

                <Screenshot title={t('orderStatusExplanation')}>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <h4 className="font-semibold text-slate-800">{t('newOrders')}</h4>
                        <Badge variant="secondary">12</Badge>
                      </div>
                      <p className="text-xs text-slate-600 mb-3">{t('readyToPick')}</p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded border">
                          <p className="font-medium text-sm">ORD-2024-001</p>
                          <p className="text-xs text-slate-600">{t('customer')}: John Smith</p>
                          <Badge className="bg-green-100 text-green-800 text-xs mt-1">₹1,250</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <h4 className="font-semibold text-slate-800">{t('picking')}</h4>
                        <Badge variant="secondary">8</Badge>
                      </div>
                      <p className="text-xs text-slate-600 mb-3">{t('inProgress')}</p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded border">
                          <p className="font-medium text-sm">ORD-2024-002</p>
                          <p className="text-xs text-slate-600">{t('customer')}: Jane Doe</p>
                          <Badge className="bg-green-100 text-green-800 text-xs mt-1">₹850</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <h4 className="font-semibold text-slate-800">{t('packingInvoiced')}</h4>
                        <Badge variant="secondary">5</Badge>
                      </div>
                      <p className="text-xs text-slate-600 mb-3">{t('awaitingPack')}</p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded border">
                          <p className="font-medium text-sm">ORD-2024-003</p>
                          <p className="text-xs text-slate-600">{t('customer')}: ABC Store</p>
                          <Badge className="bg-green-100 text-green-800 text-xs mt-1">₹2,400</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                        <h4 className="font-semibold text-slate-800">{t('shipped')}</h4>
                        <Badge variant="secondary">15</Badge>
                      </div>
                      <p className="text-xs text-slate-600 mb-3">{t('thisWeek')}</p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded border">
                          <p className="font-medium text-sm">ORD-2024-004</p>
                          <p className="text-xs text-slate-600">{t('customer')}: XYZ Retail</p>
                          <Badge className="bg-green-100 text-green-800 text-xs mt-1">₹1,800</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <h4 className="font-semibold text-slate-800">{t('delivered')}</h4>
                        <Badge variant="secondary">22</Badge>
                      </div>
                      <p className="text-xs text-slate-600 mb-3">{t('completed')}</p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded border">
                          <p className="font-medium text-sm">ORD-2024-005</p>
                          <p className="text-xs text-slate-600">{t('customer')}: Mike Johnson</p>
                          <Badge className="bg-green-100 text-green-800 text-xs mt-1">₹950</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <div className="mt-6 space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h5 className="font-semibold text-blue-900 mb-2">{t('pendingStatus')}</h5>
                    <p className="text-sm text-blue-800">{t('pendingDesc')}</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h5 className="font-semibold text-orange-900 mb-2">{t('pickingStatus')}</h5>
                    <p className="text-sm text-orange-800">{t('pickingDesc')}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h5 className="font-semibold text-yellow-900 mb-2">{t('packingStatus')}</h5>
                    <p className="text-sm text-yellow-800">{t('packingDesc')}</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <h5 className="font-semibold text-indigo-900 mb-2">{t('shippedStatus')}</h5>
                    <p className="text-sm text-indigo-800">{t('shippedDesc')}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h5 className="font-semibold text-green-900 mb-2">{t('deliveredStatus')}</h5>
                    <p className="text-sm text-green-800">{t('deliveredDesc')}</p>
                  </div>
                </div>
              </Step>

              <Step number="3" title={t('step3Title')}>
                <p>
                  {t('step3Intro')}
                </p>
                <p>
                  {t('step3Description')}
                </p>

                <Screenshot title={t('newOrderInterface')}>
                  <div className="border border-slate-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-slate-800">{t('orderDetails')} - ORD-2024-0521-001</h3>
                      <Badge className="bg-blue-100 text-blue-800">{t('newOrder')}</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <User className="w-5 h-5 text-slate-500" />
                          <div>
                            <p className="font-medium">{t('customer')}: {t('sarahWilson')}</p>
                            <p className="text-sm text-slate-600">{t('b2cCustomer')}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-slate-500" />
                          <div>
                            <p className="font-medium">{t('orderDate')}: May 21, 2024</p>
                            <p className="text-sm text-slate-600">10:30 AM</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-5 h-5 text-slate-500" />
                          <div>
                            <p className="font-medium">{t('paymentMethod')}: {t('digitalWallet')}</p>
                            <p className="text-sm text-green-600">{t('paymentComplete')}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-slate-500 mt-1" />
                          <div>
                            <p className="font-medium">{t('deliveryAddress')}:</p>
                            <p className="text-sm text-slate-600">{t('greenValleyAddress')}<br />{t('customerPhone')}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-semibold mb-4">{t('orderItems')}:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center">
                              <Package className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">{t('organicBasmatiRice')}</p>
                              <p className="text-sm text-slate-600">{t('quantity')}: 2</p>
                            </div>
                          </div>
                          <p className="font-medium">₹280</p>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-yellow-100 rounded flex items-center justify-center">
                              <Package className="w-5 h-5 text-yellow-600" />
                            </div>
                            <div>
                              <p className="font-medium">{t('wholeWheatFlour')}</p>
                              <p className="text-sm text-slate-600">{t('quantity')}: 1</p>
                            </div>
                          </div>
                          <p className="font-medium">₹85</p>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center">
                              <Package className="w-5 h-5 text-amber-600" />
                            </div>
                            <div>
                              <p className="font-medium">{t('oliveOilExtra')}</p>
                              <p className="text-sm text-slate-600">{t('quantity')}: 1</p>
                            </div>
                          </div>
                          <p className="font-medium">₹425</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t mt-4 flex-col sm:flex-row gap-4 sm:gap-0">
                        <p className="text-lg font-bold">{t('totalAmount')}: ₹790</p>
                        <div className="flex sm:gap-3 flex-col sm:flex-row gap-4 ">
                          <Button variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            {t('viewFullDetails')}
                          </Button>
                          <Button className="bg-blue-600 text-white">
                            <Package className="w-4 h-4 mr-2" />
                            {t('startFulfillment')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="4" title={t('step4Title')}>
                <p>
                  {t('step4Intro')}
                </p>
                <p>
                  {t('step4Description')}
                </p>

                <SubStep letter="A" title={t('generatePickList')}>
                  <Screenshot title={t('pickingInterface')}>
                    <div className="border border-slate-200 rounded-lg p-6">
                      <div className="flex sm:items-center justify-between mb-6 flex-col sm:flex-row gap-4 sm:gap-0">
                        <h3 className="text-lg font-bold text-slate-800">{t('generatePickList')} - {t('orderNumber')}ORD-2024-0521-001</h3>
                        <Badge className="bg-orange-100 text-orange-800">{t('picking')}</Badge>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-6">
                        <h4 className="font-semibold text-orange-900 mb-2">{t('pickingInstructions')}</h4>
                        <p className="text-sm text-orange-800">{t('followOptimizedRoute')}</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex sm:items-center justify-between p-4 bg-white border rounded-lg flex-col sm:flex-row gap-4 sm:gap-2">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                            <div>
                              <p className="font-medium">{t('organicBasmatiRice')}</p>
                              <p className="text-sm text-slate-600">{t('locationA')}</p>
                            </div>
                          </div>
                          <div className="flex sm:items-center sm:gap-3 flex-col sm:flex-row gap-4">
                            <span className="text-sm font-medium">{t('quantityToPick')}: 2</span>
                            <Button size="sm" variant="outline">
                              <Scan className="w-4 h-4 mr-2" />
                              {t('scanBarcode')}
                            </Button>
                            <Button size="sm" className="bg-green-600 text-white">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              {t('confirmPick')}
                            </Button>
                          </div>
                        </div>

                        <div className="flex sm:items-center justify-between p-4 bg-white border rounded-lg flex-col sm:flex-row gap-4 sm:gap-0">
                          <div className="flex items-center gap-4 ">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                            <div>
                              <p className="font-medium">{t('wholeWheatFlour')}</p>
                              <p className="text-sm text-slate-600">{t('locationB')}</p>
                            </div>
                          </div>
                          <div className="flex sm:items-center gap-3 flex-col sm:flex-row gap-4 sm:gap-0">
                            <span className="text-sm font-medium">{t('quantityToPick')}: 1</span>
                            <Button size="sm" variant="outline">
                              <Scan className="w-4 h-4 mr-2" />
                              {t('scanBarcode')}
                            </Button>
                            <Button size="sm" variant="outline">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              {t('confirmPick')}
                            </Button>
                          </div>
                        </div>

                        <div className="flex sm:items-center justify-between p-4 bg-white border rounded-lg flex-col sm:flex-row gap-4 sm:gap-0" >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                            <div>
                              <p className="font-medium">{t('oliveOilExtra')}</p>
                              <p className="text-sm text-slate-600">{t('locationC')}</p>
                            </div>
                          </div>
                          <div className="flex sm:items-center gap-3 flex-col sm:flex-row gap-4 sm:gap-0">
                            <span className="text-sm font-medium">{t('quantityToPick')}: 1</span>
                            <Button size="sm" variant="outline">
                              <Scan className="w-4 h-4 mr-2" />
                              {t('scanBarcode')}
                            </Button>
                            <Button size="sm" variant="outline">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              {t('confirmPick')}
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-6 border-t mt-6 flex-col sm:flex-row gap-4 sm:gap-0">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-green-600 font-medium">{t('pickingComplete')}</span>
                        </div>
                        <Button className="bg-blue-600 text-white">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          {t('proceedToPacking')}
                        </Button>
                      </div>
                    </div>
                  </Screenshot>
                </SubStep>
              </Step>

              <Step number="5" title={t('step5Title')}>
                <p>
                  {t('step5Intro')}
                </p>
                <p>
                  {t('step5Description')}
                </p>

                <SubStep letter="A" title={t('packingStation')}>
                  <Screenshot title={t('packingInterface')}>
                    <div className="border border-slate-200 rounded-lg p-6">
                      <div className="flex sm:items-center justify-between mb-6 flex-col sm:flex-row gap-4 sm:gap-0">
                        <h3 className="text-lg font-bold text-slate-800">{t('packingStation')} - {t('orderNumber')}ORD-2024-0521-001</h3>
                        <Badge className="bg-yellow-100 text-yellow-800">{t('packing')}</Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-4">{t('itemVerification')}</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
                              <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <div>
                                  <p className="font-medium">{t('organicBasmatiRice')}</p>
                                  <p className="text-sm text-slate-600">{t('quantity')}: 2 | {t('verified')}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
                              <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <div>
                                  <p className="font-medium">{t('wholeWheatFlour')}</p>
                                  <p className="text-sm text-slate-600">{t('quantity')}: 1 | {t('verified')}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
                              <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <div>
                                  <p className="font-medium">{t('oliveOilExtra')}</p>
                                  <p className="text-sm text-slate-600">{t('quantity')}: 1 | {t('verified')}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-4">{t('boxManagement')}</h4>
                          <div className="space-y-4">
                            <Button className="w-full bg-blue-600 text-white">
                              <Plus className="w-4 h-4 mr-2" />
                              {t('createNewBox')}
                            </Button>

                            <div className="border border-slate-200 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3 ">
                                <h5 className="font-medium">{t('boxId')}: BOX-001</h5>
                                <Badge variant="outline">3 {t('items')}</Badge>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span>{t('organicBasmatiRice')} (2x)</span>
                                  <Button size="sm" variant="outline">
                                    <Plus className="w-3 h-3" />
                                  </Button>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span>{t('wholeWheatFlour')} (1x)</span>
                                  <Button size="sm" variant="outline">
                                    <Plus className="w-3 h-3" />
                                  </Button>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span>{t('oliveOilExtra')} (1x)</span>
                                  <Button size="sm" variant="outline">
                                    <Plus className="w-3 h-3" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-6 border-t mt-6 flex-col sm:flex-row gap-4 sm:gap-0">
                        <div className="flex gap-3 flex-col sm:flex-row gap-4 sm:gap-0">
                          <Button variant="outline">
                            <FileText className="w-4 h-4 mr-2" />
                            {t('generateInvoice')}
                          </Button>
                          <Button variant="outline">
                            <Box className="w-4 h-4 mr-2" />
                            {t('boxContents')}
                          </Button>
                        </div>
                        <Button className="bg-green-600 text-white">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {t('packingComplete')}
                        </Button>
                      </div>
                    </div>
                  </Screenshot>
                </SubStep>
              </Step>

              <Step number="6" title={t('step6Title')}>
                <p>
                  {t('step6Intro')}
                </p>
                <p>
                  {t('step6Description')}
                </p>

                <SubStep letter="A" title={t('dispatchInterface')}>
                  <Screenshot title={t('shippingCoordination')} >
                    <div className="border border-slate-200 rounded-lg p-6 ">
                      <div className="flex sm:items-center justify-between mb-6 flex-col sm:flex-row gap-4 sm:gap-0">
                        <h3 className="text-lg font-bold text-slate-800">{t('readyForDispatch')} - {t('orderNumber')}ORD-2024-0521-001</h3>
                        <Badge className="bg-purple-100 text-purple-800">{t('readyForDispatch')}</Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-4">{t('assignDelivery')}</h4>
                          <div className="space-y-4">
                            <div className="border border-slate-200 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3">
                                <h5 className="font-medium">{t('inHousePersonnel')}</h5>
                                <Badge className="bg-green-100 text-green-800">{t('available')}</Badge>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">{t('rameshKumar')}</span>
                                  <Button size="sm" variant="outline">{t('assign')}</Button>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">{t('priyaSharma')}</span>
                                  <Button size="sm" variant="outline">{t('assign')}</Button>
                                </div>
                              </div>
                            </div>

                            <div className="border border-slate-200 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3">
                                <h5 className="font-medium">{t('courierAgency')}</h5>
                                <Badge className="bg-blue-100 text-blue-800">{t('available')}</Badge>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">{t('fastTrackDelivery')}</span>
                                  <Button size="sm" variant="outline">{t('assign')}</Button>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">{t('quickShipExpress')}</span>
                                  <Button size="sm" variant="outline">{t('assign')}</Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-4">{t('shippingDetails')}</h4>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded flex-col sm:flex-row gap-4 sm:gap-0">
                              <Printer className="w-5 h-5 text-slate-500" />
                              <div>
                                <p className="font-medium">{t('generateShippingLabel')}</p>
                                <p className="text-sm text-slate-600">{t('createShippingLabels')}</p>
                              </div>
                              <Button size="sm" className="ml-auto">{t('generate')}</Button>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded flex-col sm:flex-row gap-4 sm:gap-0">
                              <FileText className="w-5 h-5 text-slate-500" />
                              <div>
                                <p className="font-medium">{t('trackingNumber')}</p>
                                <p className="text-sm text-slate-600">{t('sampleTracking')}</p>
                              </div>
                              <Button size="sm" variant="outline">
                                <Copy className="w-3 h-3" />
                              </Button>
                            </div>

                            <div className="p-3 bg-slate-50 rounded">
                              <p className="font-medium mb-2">{t('deliveryInstructions')}</p>
                              <textarea
                                className="w-full text-sm p-2 border rounded resize-none"
                                rows="3"
                                placeholder={t('enterDeliveryInstructions')}
                              />
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded">
                              <Calendar className="w-5 h-5 text-slate-500" />
                              <div>
                                <p className="font-medium">{t('scheduledDelivery')}</p>
                                <p className="text-sm text-slate-600">{t('sampleSchedule')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center pt-6 border-t mt-6">
                        <Button className="bg-indigo-600 text-white px-8">
                          <Truck className="w-4 h-4 mr-2" />
                          {t('dispatchOrder')}
                        </Button>
                      </div>
                    </div>
                  </Screenshot>
                </SubStep>
              </Step>

              <Step number="7" title={t('step7Title')}>
                <p>
                  {t('step7Intro')}
                </p>
                <p>
                  {t('step7Description')}
                </p>

                <Screenshot title={t('orderTimeline')}>
                  <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-6">{t('orderTimeline')} - {t('orderNumber')}ORD-2024-0521-001</h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{t('orderPlaced')}</h4>
                          <p className="text-sm text-slate-600">May 21, 2024 - 10:30 AM</p>
                          <p className="text-sm text-slate-500">{t('orderReceived')}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{t('pickingStarted')}</h4>
                          <p className="text-sm text-slate-600">May 21, 2024 - 11:15 AM</p>
                          <p className="text-sm text-slate-500">{t('pickListGenerated')}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{t('itemsPicked')}</h4>
                          <p className="text-sm text-slate-600">May 21, 2024 - 11:45 AM</p>
                          <p className="text-sm text-slate-500">{t('allItemsPicked')}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{t('packingStarted')}</h4>
                          <p className="text-sm text-slate-600">May 21, 2024 - 12:00 PM</p>
                          <p className="text-sm text-slate-500">{t('movedToPacking')}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{t('invoiceGenerated')}</h4>
                          <p className="text-sm text-slate-600">May 21, 2024 - 12:30 PM</p>
                          <p className="text-sm text-slate-500">{t('invoiceCreated')}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{t('readyForShipment')}</h4>
                          <p className="text-sm text-slate-600">May 21, 2024 - 1:00 PM</p>
                          <p className="text-sm text-slate-500">{t('packedReady')}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-slate-300 text-white rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-500">{t('orderShipped')}</h4>
                          <p className="text-sm text-slate-400">{t('pendingDelivery')}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-slate-300 text-white rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-500">{t('orderDelivered')}</h4>
                          <p className="text-sm text-slate-400">{t('awaitingCompletion')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="8" title={t('step8Title')}>
                <p>
                  {t('step8Intro')}
                </p>
                <p>
                  {t('step8Description')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-3 mb-4">
                      <User className="w-6 h-6 text-purple-600" />
                      <h4 className="text-lg font-semibold text-purple-900">{t('b2cCharacteristics')}</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-800">
                      <li>• {t('individualCustomers')}</li>
                      <li>• {t('smallerQuantities')}</li>
                      <li>• {t('homeDelivery')}</li>
                      <li>• {t('immediateProcessing')}</li>
                      <li>• {t('singleAddress')}</li>
                      <li>• {t('consumerPackaging')}</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Building2 className="w-6 h-6 text-blue-600" />
                      <h4 className="text-lg font-semibold text-blue-900">{t('b2bCharacteristics')}</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li>• {t('businessCustomers')}</li>
                      <li>• {t('largerQuantities')}</li>
                      <li>• {t('bulkPackaging')}</li>
                      <li>• {t('scheduledDelivery')}</li>
                      <li>• {t('multipleAddresses')}</li>
                      <li>• {t('extendedTerms')}</li>
                    </ul>
                  </div>
                </div>
              </Step>

              {/* Next Steps Section */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 md:p-8 border border-indigo-200 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    {t('nextStepsTitle')}
                  </h3>
                  <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                    {t('nextStepsDescription')}
                  </p>
                  <Link to={createPageUrl('ManualLogistics')}>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      {t('nextStepsButton')}
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

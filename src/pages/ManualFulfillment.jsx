
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

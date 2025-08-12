import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, ShoppingCart, Users, Building2, CreditCard, Package,
  Search, Filter, Eye, BarChart3, TrendingUp, DollarSign,
  Grid, List, Calendar, Phone, Mail, MapPin, Clock, CheckCircle,
  Truck, Gift, Star, Award, Wallet, Smartphone, Plus, Minus, Check, X, MoreVertical
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
    pageTitle: "Order Management Manual",
    backToManual: "Back to Manual",
    description: "Master comprehensive order management from POS operations to B2C/B2B order processing, analytics, and customer relationship management through the complete order lifecycle.",
    step1Title: "Order Management Dashboard Overview",
    step1Intro: "The Order Management Dashboard is your central command center for monitoring all sales activities across B2C customers and B2B retailers. It provides real-time analytics, order tracking, and comprehensive customer insights to help you optimize your retail operations.",
    step1Description: "Navigate to the Order Management Dashboard to access a holistic view of all sales, track order statuses, and gain insights into your business performance.",
    step2Title: "Order Processing & Lifecycle",
    step2Intro: "Understand the complete lifecycle of an order from creation to delivery. The system provides detailed tracking at every stage, including picking, packing, shipping, and fulfillment.",
    step2Description: "The order detail page provides a comprehensive view of an order's journey, including a detailed timeline, item breakdown, and fulfillment status.",
    step3Title: "Point of Sale (POS) Operations",
    step3Intro: "RetailOS includes a powerful POS system for in-store sales. It allows cashiers to quickly add products, apply discounts, and process payments through various methods.",
    step3Description: "The POS interface is designed for speed and efficiency, enabling seamless checkout experiences for your customers.",
    nextStepsTitle: "Order Management Complete!",
    nextStepsDescription: "You now have a complete understanding of the RetailOS Order Management system. You can now proceed to learn about the fulfillment process.",
    nextStepsButton: "Continue to Fulfillment Manual",
    openDashboard: "Open Order Dashboard",

    // Screenshot translations
    orderDashboard: "Order Management Dashboard",
    monitorSales: "Monitor all B2C & B2B sales activities",
    createOrder: "Create Order",
    exportData: "Export Data",
    allOrders: "All Orders",
    b2cOrders: "B2C Orders",
    b2bOrders: "B2B Orders",
    searchOrders: "Search orders by ID, customer name...",
    grid: "Grid",
    list: "List",
    orderId: "Order ID",
    customer: "Customer",
    date: "Date",
    total: "Total",
    status: "Status",
    actions: "Actions",
    viewDetails: "View Details",
    downloadInvoice: "Download Invoice",
    orderStatusOverview: "Order Status Overview",
    processing: "Processing",
    shipped: "Shipped",
    delivered: "Delivered",
    cancelled: "Cancelled",
    b2c: "B2C",
    b2b: "B2B",
    topProductsByOrders: "Top Products by Orders",
    organicBasmatiRice: "Organic Basmati Rice",
    unitsSold: "units sold",
    totalRevenue: "total revenue",
    wholeWheatFlour: "Whole Wheat Flour",
    sunflowerOil: "Sunflower Oil",
    orderDetailView: "Order Detail View",
    order: "Order",
    backToOrders: "Back to Orders",
    printInvoice: "Print Invoice",
    orderTimeline: "Order Timeline",
    orderPlaced: "Order Placed",
    paymentConfirmed: "Payment Confirmed",
    processingOrder: "Processing Order",
    orderReady: "Order Ready for Dispatch",
    orderShipped: "Order Shipped",
    outForDelivery: "Out for Delivery",
    orderDelivered: "Order Delivered",
    customerInformation: "Customer Information",
    contactInfo: "Contact Information",
    shippingAddress: "Shipping Address",
    billingAddress: "Billing Address",
    paymentDetails: "Payment Details",
    paymentMethod: "Payment Method",
    creditCard: "Credit Card",
    transactionId: "Transaction ID",
    paymentDate: "Payment Date",
    orderItems: "Order Items",
    product: "Product",
    quantity: "Quantity",
    price: "Price",
    orderSummary: "Order Summary",
    subtotal: "Subtotal",
    shipping: "Shipping",
    tax: "Tax (GST 18%)",
    discount: "Discount",
    posInterface: "Point of Sale (POS) Interface",
    newSale: "New Sale",
    customerDetails: "Customer Details",
    searchCustomer: "Search Customer (Name/Phone)",
    walkInCustomer: "Walk-in Customer",
    billing: "Billing",
    scanOrSearch: "Scan barcode or search products...",
    addItem: "Add Item",
    payment: "Payment",
    cash: "Cash",
    card: "Card",
    payLater: "Pay Later",
    completeSale: "Complete Sale",
    clearCart: "Clear Cart",
    cartSummary: "Cart Summary",
    totalItems: "Total Items"
  },
  kn: {
    pageTitle: "ಆರ್ಡರ್ ನಿರ್ವಹಣೆ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "POS ಕಾರ್ಯಾಚರಣೆಗಳಿಂದ B2C/B2B ಆರ್ಡರ್ ಪ್ರೊಸೆಸಿಂಗ್, ಅನ್ಯಾಲಿಟಿಕ್ಸ್, ಮತ್ತು ಸಂಪೂರ್ಣ ಆರ್ಡರ್ ಜೀವನಚಕ್ರದ ಮೂಲಕ ಗ್ರಾಹಕ ಸಂಬಂಧ ನಿರ್ವಹಣೆಯವರೆಗೆ ಸಮಗ್ರ ಆರ್ಡರ್ ನಿರ್ವಹಣೆಯನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ.",
    step1Title: "ಆರ್ಡರ್ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ಆರ್ಡರ್ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ B2C ಗ್ರಾಹಕರು ಮತ್ತು B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳಾದ್ಯಂತ ಎಲ್ಲಾ ಮಾರಾಟ ಚಟುವಟಿಕೆಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ನಿಮ್ಮ ಕೇಂದ್ರ ಕಮಾಂಡ್ ಕೇಂದ್ರವಾಗಿದೆ.",
    step1Description: "ಎಲ್ಲಾ ಮಾರಾಟಗಳ ಸಮಗ್ರ ನೋಟವನ್ನು ಪ್ರವೇಶಿಸಲು, ಆರ್ಡರ್ ಸ್ಥಿತಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಮತ್ತು ನಿಮ್ಮ ವ್ಯವಹಾರದ ಕಾರ್ಯಕ್ಷಮತೆಯ ಬಗ್ಗೆ ಒಳನೋಟಗಳನ್ನು ಪಡೆಯಲು ಆರ್ಡರ್ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ.",
    step2Title: "ಆರ್ಡರ್ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಜೀವನಚಕ್ರ",
    step2Intro: "ರಚನೆಯಿಂದ ವಿತರಣೆಯವರೆಗೆ ಆರ್ಡರ್‌ನ ಸಂಪೂರ್ಣ ಜೀವನಚಕ್ರವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ಸಿಸ್ಟಮ್ ಪ್ರತಿ ಹಂತದಲ್ಲೂ ವಿವರವಾದ ಟ್ರ್ಯಾಕಿಂಗ್ ಒದಗಿಸುತ್ತದೆ.",
    step2Description: "ಆರ್ಡರ್ ವಿವರ ಪುಟವು ಆರ್ಡರ್‌ನ ಪ್ರಯಾಣದ ಸಮಗ್ರ ನೋಟವನ್ನು ಒದಗಿಸುತ್ತದೆ, ಇದರಲ್ಲಿ ವಿವರವಾದ ಟೈಮ್‌ಲೈನ್, ಐಟಂ ಬ್ರೇಕ್‌ಡೌನ್ ಮತ್ತು ಪೂರೈಸುವಿಕೆ ಸ್ಥಿತಿ ಸೇರಿದೆ.",
    step3Title: "ಪಾಯಿಂಟ್ ಆಫ್ ಸೇಲ್ (POS) ಕಾರ್ಯಾಚರಣೆಗಳು",
    step3Intro: "RetailOS ಅಂಗಡಿಯಲ್ಲಿನ ಮಾರಾಟಕ್ಕಾಗಿ ಶಕ್ತಿಯುತ POS ವ್ಯವಸ್ಥೆಯನ್ನು ಒಳಗೊಂಡಿದೆ. ಇದು ಕ್ಯಾಷಿಯರ್‌ಗಳಿಗೆ ಉತ್ಪನ್ನಗಳನ್ನು ತ್ವರಿತವಾಗಿ ಸೇರಿಸಲು, ರಿಯಾಯಿತಿಗಳನ್ನು ಅನ್ವಯಿಸಲು ಮತ್ತು ವಿವಿಧ ವಿಧಾನಗಳ ಮೂಲಕ ಪಾವತಿಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.",
    step3Description: "POS ಇಂಟರ್ಫೇಸ್ ವೇಗ ಮತ್ತು ದಕ್ಷತೆಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ, ನಿಮ್ಮ ಗ್ರಾಹಕರಿಗೆ ಸುಗಮ ಚೆಕ್‌ಔಟ್ ಅನುಭವಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.",
    nextStepsTitle: "ಆರ್ಡರ್ ನಿರ್ವಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನೀವು ಈಗ RetailOS ಆರ್ಡರ್ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆಯ ಸಂಪೂರ್ಣ ತಿಳುವಳಿಕೆಯನ್ನು ಹೊಂದಿದ್ದೀರಿ. ನೀವು ಈಗ ಪೂರೈಸುವಿಕೆ ಪ್ರಕ್ರಿಯೆಯ ಬಗ್ಗೆ ಕಲಿಯಲು ಮುಂದುವರಿಯಬಹುದು.",
    nextStepsButton: "ನೆರವೇರಿಕೆ ಕೈಪಿಡಿಗೆ ಮುಂದುವರಿಯಿರಿ",
    openDashboard: "ಆರ್ಡರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ತೆರೆಯಿರಿ",

    // Screenshot translations
    orderDashboard: "ಆರ್ಡರ್ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    monitorSales: "ಎಲ್ಲಾ B2C ಮತ್ತು B2B ಮಾರಾಟ ಚಟುವಟಿಕೆಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",
    createOrder: "ಆರ್ಡರ್ ರಚಿಸಿ",
    exportData: "ಡೇಟಾ ರಫ್ತು ಮಾಡಿ",
    allOrders: "ಎಲ್ಲಾ ಆರ್ಡರ್‌ಗಳು",
    b2cOrders: "B2C ಆರ್ಡರ್‌ಗಳು",
    b2bOrders: "B2B ಆರ್ಡರ್‌ಗಳು",
    searchOrders: "ID, ಗ್ರಾಹಕರ ಹೆಸರು ಮೂಲಕ ಆರ್ಡರ್‌ಗಳನ್ನು ಹುಡುಕಿ...",
    grid: "ಗ್ರಿಡ್",
    list: "ಪಟ್ಟಿ",
    orderId: "ಆರ್ಡರ್ ಐಡಿ",
    customer: "ಗ್ರಾಹಕ",
    date: "ದಿನಾಂಕ",
    total: "ಒಟ್ಟು",
    status: "ಸ್ಥಿತಿ",
    actions: "ಕ್ರಿಯೆಗಳು",
    viewDetails: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    downloadInvoice: "ಸರಕುಪಟ್ಟಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
    orderStatusOverview: "ಆರ್ಡರ್ ಸ್ಥಿತಿ ಅವಲೋಕನ",
    processing: "ಸಂಸ್ಕರಿಸಲಾಗುತ್ತಿದೆ",
    shipped: "ರವಾನಿಸಲಾಗಿದೆ",
    delivered: "ವಿತರಿಸಲಾಗಿದೆ",
    cancelled: "ರದ್ದುಪಡಿಸಲಾಗಿದೆ",
    b2c: "B2C",
    b2b: "B2B",
    topProductsByOrders: "ಆರ್ಡರ್‌ಗಳ ಮೂಲಕ ಉನ್ನತ ಉತ್ಪನ್ನಗಳು",
    organicBasmatiRice: "ಸಾವಯವ ಬಾಸಮತಿ ಅಕ್ಕಿ",
    unitsSold: "ಘಟಕಗಳು ಮಾರಾಟವಾಗಿವೆ",
    totalRevenue: "ಒಟ್ಟು ಆದಾಯ",
    wholeWheatFlour: "ಪೂರ್ಣ ಗೋಧಿ ಹಿಟ್ಟು",
    sunflowerOil: "ಸೂರ್ಯಕಾಂತಿ ಎಣ್ಣೆ",
    orderDetailView: "ಆರ್ಡರ್ ವಿವರ ವೀಕ್ಷಣೆ",
    order: "ಆರ್ಡರ್",
    backToOrders: "ಆರ್ಡರ್‌ಗಳಿಗೆ ಹಿಂತಿರುಗಿ",
    printInvoice: "ಸರಕುಪಟ್ಟಿ ಮುದ್ರಿಸಿ",
    orderTimeline: "ಆರ್ಡರ್ ಟೈಮ್‌ಲೈನ್",
    orderPlaced: "ಆರ್ಡರ್ ಮಾಡಲಾಗಿದೆ",
    paymentConfirmed: "ಪಾವತಿ ದೃಢೀಕರಿಸಲಾಗಿದೆ",
    processingOrder: "ಆರ್ಡರ್ ಸಂಸ್ಕರಿಸಲಾಗುತ್ತಿದೆ",
    orderReady: "ರವಾನೆಗೆ ಆರ್ಡರ್ ಸಿದ್ಧವಾಗಿದೆ",
    orderShipped: "ಆರ್ಡರ್ ರವಾನಿಸಲಾಗಿದೆ",
    outForDelivery: "ವಿತರಣೆಗೆ ಹೊರಟಿದೆ",
    orderDelivered: "ಆರ್ಡರ್ ವಿತರಿಸಲಾಗಿದೆ",
    customerInformation: "ಗ್ರಾಹಕರ ಮಾಹಿತಿ",
    contactInfo: "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    shippingAddress: "ರವಾನೆ ವಿಳಾಸ",
    billingAddress: "ಬಿಲ್ಲಿಂಗ್ ವಿಳಾಸ",
    paymentDetails: "ಪಾವತಿ ವಿವರಗಳು",
    paymentMethod: "ಪಾವತಿ ವಿಧಾನ",
    creditCard: "ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್",
    transactionId: "ವಹಿವಾಟು ಐಡಿ",
    paymentDate: "ಪಾವತಿ ದಿನಾಂಕ",
    orderItems: "ಆರ್ಡರ್ ಐಟಂಗಳು",
    product: "ಉತ್ಪನ್ನ",
    quantity: "ಪ್ರಮಾಣ",
    price: "ಬೆಲೆ",
    orderSummary: "ಆರ್ಡರ್ ಸಾರಾಂಶ",
    subtotal: "ಉಪಮೊತ್ತ",
    shipping: "ರವಾನೆ",
    tax: "ತೆರಿಗೆ (GST 18%)",
    discount: "ರಿಯಾಯಿತಿ",
    posInterface: "ಪಾಯಿಂಟ್ ಆಫ್ ಸೇಲ್ (POS) ಇಂಟರ್ಫೇಸ್",
    newSale: "ಹೊಸ ಮಾರಾಟ",
    customerDetails: "ಗ್ರಾಹಕರ ವಿವರಗಳು",
    searchCustomer: "ಗ್ರಾಹಕರನ್ನು ಹುಡುಕಿ (ಹೆಸರು/ಫೋನ್)",
    walkInCustomer: "ವಾಕ್-ಇನ್ ಗ್ರಾಹಕ",
    billing: "ಬಿಲ್ಲಿಂಗ್",
    scanOrSearch: "ಬಾರ್‌ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ...",
    addItem: "ಐಟಂ ಸೇರಿಸಿ",
    payment: "ಪಾವತಿ",
    cash: "ನಗದು",
    card: "ಕಾರ್ಡ್",
    payLater: "ನಂತರ ಪಾವತಿಸಿ",
    completeSale: "ಮಾರಾಟ ಪೂರ್ಣಗೊಳಿಸಿ",
    clearCart: "ಕಾರ್ಟ್ ತೆರವುಗೊಳಿಸಿ",
    cartSummary: "ಕಾರ್ಟ್ ಸಾರಾಂಶ",
    totalItems: "ಒಟ್ಟು ಐಟಂಗಳು"
  },
  te: {
    pageTitle: "ఆర్డర్ నిర్వహణ మాన్యువల్",
    backToManual: "మాన్యువల్‌కి తిరిగి వెళ్ళండి",
    description: "POS కార్యకలాపాల నుండి B2C/B2B ఆర్డర్ ప్రాసెసింగ్, విశ్లేషణలు మరియు పూర్తి ఆర్డర్ జీవిత చక్రం ద్వారా కస్టమర్ సంబంధ నిర్వహణ వరకు సమగ్ర ఆర్డర్ నిర్వహణను నేర్చుకోండి.",
    step1Title: "ఆర్డర్ నిర్వహణ డాష్‌బోర్డ్ అవలోకనం",
    step1Intro: "ఆర్డర్ నిర్వహణ డాష్‌బోర్డ్ అనేది B2C కస്టమర్లు మరియు B2B రిటైలర్ల అంతటా అన్ని అమ్మకాల కార్యకలాపాలను పర్యవేక్షించడానికి మీ కేంద್ర కమాండ్ సెంటర్. ఇది రియల్-టైమ్ విశ్లేషణలు, ఆర్డర్ ట్రాకింగ్ మరియు మీ రిటైల్ కార్యకలాపాలను ఆప్టిమైజ్ చేయడానికి సహాయపడే సమగ్ర కస്టమర్ అంతర్దృష్టులను అందిస్తుంది.",
    step1Description: "అన్ని అమ్మకాల సమగ్ర దృశ్యాన్ని యాక్సెస్ చేయడానికి, ఆర్డర్ స్థితులను ట్రాక్ చేయడానికి మరియు మీ వ్యాపార పనితీరు గురించి అంతర్దృష్టులను పొందడానికి ఆర్డర్ నిర్వహణ డాష్‌బోర్డ్‌కి నావిగేట్ చేయండి.",
    step2Title: "ఆర్డర్ ప్రాసెసింగ్ & జీవిత చక్రం",
    step2Intro: "సృష్టి నుండి డెలివరీ వరెగు ఆర్డర్ యొక్క పూర్తి జీవిత చక్రాన్ని అర్థం చేసుకోండి. సిస്టమ్ ప్రతి దశలో వివరమైన ట్రాకింగ్‌ని అందిస్తుంది, పికింగ్, ప్యాకింగ్, షిప్పింగ్ మరియు నెరవేర్పు వంటివి.",
    step2Description: "ఆర్డర్ వివర పేజీ ఆర్డర్ యొక్క ప్రయాణం యొక్క సమగ్ర దృశ్యాన్ని అందిస్తుంది, దీనిలో వివరమైన టైమ్‌లైన్, ఐటమ్ బ్రేక్‌డೌన్ మరియు నెరవేర్పు స్థితి ఉంటాయి.",
    step3Title: "పాయింట్ ఆఫ్ సేల్ (POS) కార్యకలాపాలు",
    step3Intro: "RetailOS స్టోర్‌లో అమ్మకాల కోసం శక്తివంతమైన POS సిస്టమ్‌ని కలిగి ఉంది. ఇది క్యాషియర్లకు ఉత్పత్తులను త్వరగా జోడించడానికి, తగ్గింపులను వర్తించడానికి మరియు వివిధ పద్ధతుల ద్వారా చెల్లింపులను ప్రాసెస్ చെయ്యడానికి అనుమతిస్తుంది.",
    step3Description: "POS ఇంటర్ఫేస్ వేగ మరియు సమర్థత కోసం రൂపొందించబడింది, మీ కస്టమర్లకు నిర్విఘ్నమైన చెక్‌ఔట್ అనుభవాలను ప్రారంభిస్తుంది.",
    nextStepsTitle: "ఆర్డర్ నిర్వహణ పూర్తయింది!",
    nextStepsDescription: "మీరు ఇప్పుడు RetailOS ఆర్డర్ నిర్వహణ వ్యవస్థ యొక్క పూర్తి అవగాహనను కలిగి ఉన్నారు. మీరు ఇప్పుడు నెరవేర్పు ప్రక్రియ గురించి నేర్చుకోవడానికి ముందుకు వెళ్ళవచ్చు.",
    nextStepsButton: "నెరవేర్పు మాన్యువల్‌కి ముందుకు వెళ్ళండి",
    openDashboard: "ఆర్డర్ డాష్‌బోర్డ్‌ని తెరెయిరి",

    // Screenshot translations
    orderDashboard: "ఆర్డర్ నిర్వహణ డాష్‌బోర్డ్",
    monitorSales: "అన్ని B2C & B2B అమ్మకాల కార్యకలాపాలను పర్యవేక్షించండి",
    createOrder: "ఆర్డర్ సృష్టించండి",
    exportData: "డేటా ఎగుమతి చేయండి",
    allOrders: "అన్ని ఆర్డర్లు",
    b2cOrders: "B2C ఆర్డర్లు",
    b2bOrders: "B2B ఆర్డర్లు",
    searchOrders: "ID, కస്టమర్ పేరు ద్వారా ఆర్డర్లను శోధించండి...",
    grid: "గ్రిడ్",
    list: "జాబితా",
    orderId: "ఆర్డర్ ID",
    customer: "కస്టమర్",
    date: "తేదీ",
    total: "మొత్తం",
    status: "స్థితి",
    actions: "చర్యలు",
    viewDetails: "వివరాలను చూడండి",
    downloadInvoice: "ఇన్‌వాయిస్‌ని డౌన్‌లోడ్ చేయండి",
    orderStatusOverview: "ఆర్డర్ స్థితి అవలోకన",
    processing: "ప్రాసెస్ చేయడం",
    shipped: "రవానించబడింది",
    delivered: "అందించబడింది",
    cancelled: "రద్దు చేయబడింది",
    b2c: "B2C",
    b2b: "B2B",
    topProductsByOrders: "ఆర్డర్ల ద్వారా ఉత్తమ ఉత్పన್నగళు",
    organicBasmatiRice: "జీవ సాగు బాస్మతి బియ్యం",
    unitsSold: "అమ్మబడిన యూనిట్లు",
    totalRevenue: "మొత్తం ఆదాయ",
    wholeWheatFlour: "పూర్తి గోధుమ పిండి",
    sunflowerOil: "పొద్దుతిరుగుడు నూనె",
    orderDetailView: "ఆర్డర్ వివర వీక్షణ",
    order: "ఆర్డర్",
    backToOrders: "ఆర్డర్లకు తిరిగి వెళ్ళండి",
    printInvoice: "ఇన్‌వాయిస్‌ని ముద్రించండి",
    orderTimeline: "ఆర్డర్ టైమ్‌లైన్",
    orderPlaced: "ఆర్డర్ చేయబడింది",
    paymentConfirmed: "చెల్లింపు నిర్ధారించబడింది",
    processingOrder: "ఆర్డర్ ప్రాసెస్ చేయడం",
    orderReady: "రవానకు ఆర్డర్ సిద్ధంగా ఉంది",
    orderShipped: "ఆర్డర్ రవానించబడింది",
    outForDelivery: "డെలివరీ కోసం బయట",
    orderDelivered: "ఆర్డర్ అందించబడింది",
    customerInformation: "కస്టమర్ సమాచారం",
    contactInfo: "సంప్రదింపు సమాచారం",
    shippingAddress: "రవానా చిరునామా",
    billingAddress: "బిల్లింగ్ చిరునామా",
    paymentDetails: "చెల్లింపు వివరాలు",
    paymentMethod: "చెల్లింపు పద్ధతి",
    creditCard: "క్రెడిట్ కార్డ్",
    transactionId: "లావాదేవీ ID",
    paymentDate: "చెల్లింపు తేదీ",
    orderItems: "ఆర్డర్ వస్తువులు",
    product: "ఉత్పత్తి",
    quantity: "పరిమాణం",
    price: "ధర",
    orderSummary: "ఆర్డర్ సారాంశం",
    subtotal: "ఉపమొత్త",
    shipping: "రవానా",
    tax: "పన్ను (GST 18%)",
    discount: "తగ్గింపు",
    posInterface: "పాయింట్ ఆఫ్ సేల్ (POS) ఇంటర్ఫేస్",
    newSale: "కొత్త అమ్మకం",
    customerDetails: "కస്టమర్ వివరాలు",
    searchCustomer: "కస്టమర్‌ను శోధించండి (పేరు/ఫోన్)",
    walkInCustomer: "వాక్-ఇన్ కస്టమర్",
    billing: "బిల్లింగ్",
    scanOrSearch: "బార్‌కోడ్‌ని స్క్యాన్ మాడి అథవా ఉత్పన్నగళను హుడుకి...",
    addItem: "వస్తువును జోడించండి",
    payment: "చెల్లింపు",
    cash: "నగదు",
    card: "కార్డ్",
    payLater: "తర్వాత చెల్లించండి",
    completeSale: "అమ్మకాన్ని పూర్తి చేయండి",
    clearCart: "కార్ట్ తೆరవುగೊళిసి",
    cartSummary: "కార్ట్ సారాంశ",
    totalItems: "మొత్తం వస్తువులు"
  },
  ta: {
    pageTitle: "ஆர்டர் நிர்வாக கையேடு",
    backToManual: "கையேட்டிற்கு திரும்பு",
    description: "POS செயல்பாடுகளிலிருந்து B2C/B2B ஆர்டர் செயலாக்கம், பகுப்பாய்வு மற்றும் முழுமையான ஆர்டர் வாழ்க்கை சுழற்சி மூலம் வாடிக்கையாளர் உறவு நிர்வாகம் வரை விரிவான ஆர்டர் நிர்வாகத்தை மாஸ்டர் செய்யுங்கள்.",
    step1Title: "ஆர்டர் நிர்வாக டாஷ்போர்டு கண்ணோட்டம்",
    step1Intro: "ஆர்டர் நிர்வாக டாஷ்போர்டு என்பது B2C வாடிக்கையாளர்கள் மற்றும் B2B சில்லறை விற்பனையாளர்கள் முழுவதும் அனைத்து விற்பனை செயல்பாடுகளையும் கண்காணிக்க உங்கள் மைய கட்டளை மையமாகும். இது நேரலை பகுப்பாய்வு, ஆர்டர் கண்காணிப்பு மற்றும் உங்கள் சில்லறை விற்பனை செயல்பாடுகளை உகந்தமயமாக்க உதவும் விரிவான வாடிக்கையாளர் நுண்ணறிவுகளை வழங்குகிறது.",
    step1Description: "அனைத்து விற்பனைகளின் முழுமையான காட்சியை அணுக, ஆர்டர் நிலைகளை கண்காணிக்க மற்றும் உங்கள் வணிக செயல்திறனைப் பற்றிய நுண்ணறிவுகளைப் பெற ஆர்டர் நிர்வாக டாஷ்போர்டுக்கு செல்லுங்கள்.",
    step2Title: "ஆர்டர் செயலாக்கம் & வாழ்க்கை சுழற்சி",
    step2Intro: "உருவாக்கத்திலிருந்து விநியோகம் வரை ஆர்டரின் முழுமையான வாழ்க்கை சுழற்சியைப் புரிந்து கொள்ளுங்கள். கணினி ஒவ்வொரு கட்டத்திலும் விரிவான கண்காணிப்பை வழங்குகிறது, எடுத்தல், பொதித்தல், கப்பல் ஏற்றுதல் மற்றும் நிறைவேற்றுதல் ஆகியவை அடங்கும்.",
    step2Description: "ஆர்டர் விவர பக்கம் ஆர்டரின் பயணத்தின் முழுமையான காட்சியை வழங்குகிறது, இதில் விரிவான நேரக்கோடு, பொருள் பிரிப்பு மற்றும் நிறைவேற்றல் நிலை ஆகியவை அடங்கும்.",
    step3Title: "விற்பனை புள்ளி (POS) செயல்பாடுகள்",
    step3Intro: "RetailOS கடையில் விற்பனைக்கான சக்திவாய்ந்த POS அமைப்பைக் கொண்டுள்ளது. இது காசாளர்கள் பொருட்களை விரைவாக சேர்க்க, தள்ளுபடிகளைப் பயன்படுத்த மற்றும் பல்வேறு முறைகள் மூலம் கட்டணங்களை செயலாக்க அனுமதிக்கிறது.",
    step3Description: "POS இடைமுகம் வேகம் மற்றும் திறனுக்காக வடிவமைக்கப்பட்டுள்ளது, உங்கள் வாடிக்கையாளர்களுக்கு இடைவிடாத செக்‌அவுட் அனுபவங்களை செயல்படுத்துகிறது.",
    nextStepsTitle: "ஆர்டர் நிர்வாகம் முடிந்தது!",
    nextStepsDescription: "நீங்கள் இப்போது RetailOS ஆர்டர் நிர்வாக அமைப்பின் முழுமையான புரிதலைக் கொண்டிருக்கிறீர்கள். நீங்கள் இப்போது நிறைவேற்றல் செயல்முறையைப் பற்றி கற்க முன்னேறலாம்.",
    nextStepsButton: "நிறைவேற்றல் கையேட்டிற்கு முன்னேறுங்கள்",
    openDashboard: "ஆர்டர் டாஷ்போர்டைத் திறக்கவும்",

    // Screenshot translations
    orderDashboard: "ஆர்டர் நிர்வாக டாஷ்போர்டு",
    monitorSales: "அனைத்து B2C & B2B விற்பனை செயல்பாடுகளையும் கண்காணிக்கவும்",
    createOrder: "ஆர்டரை உருவாக்கு",
    exportData: "தரவை ஏற்றுமதி சేய",
    allOrders: "அனைத்து ஆர்டர்களும்",
    b2cOrders: "B2C ஆர்டர்கள்",
    b2bOrders: "B2B ஆர்டர்கள்",
    searchOrders: "ID, வாடிக்கையாளர் பெயர் மூலம் ஆர்டர்களைத் தேடுங்கள்...",
    grid: "கட்டம்",
    list: "பட்டியல்",
    orderId: "ஆர்டர் ஐடி",
    customer: "வாடிக்கையாளர்",
    date: "தேதி",
    total: "மொத்தம்",
    status: "நிலை",
    actions: "செயல்கள்",
    viewDetails: "விவரங்களைக் காண்க",
    downloadInvoice: "விலைப்பட்டியைப் பதிவிறக்கவும்",
    orderStatusOverview: "ஆர்டர் நிலை கண்ணோட்டம்",
    processing: "செயலாக்குகிறது",
    shipped: "அனுப்பப்பட்டது",
    delivered: "வழங்கப்பட்டது",
    cancelled: "ரத்து செய்யப்பட்டது",
    b2c: "B2C",
    b2b: "B2B",
    topProductsByOrders: "ஆர்டர்களால் சிறந்த பொருட்கள்",
    organicBasmatiRice: "கரிம பாஸ்மதி அரிசி",
    unitsSold: "விற்கப்பட்ட அலகுகள்",
    totalRevenue: "மொத்த வருவாய்",
    wholeWheatFlour: "முழு கோதுமை மாவு",
    sunflowerOil: "சூரியகாந்தி எண்ணெய்",
    orderDetailView: "ஆர்டர் விவர காட்சி",
    order: "ஆர்டர்",
    backToOrders: "ஆர்டர்களுக்கு திரும்பு",
    printInvoice: "விலைப்பட்டியை அச்சிடு",
    orderTimeline: "ஆர்டர் நேரக்கோடு",
    orderPlaced: "ஆர்டர் வைக்கப்பட்டது",
    paymentConfirmed: "கட்டணம் உறுதிப்படுத்தப்பட்டது",
    processingOrder: "ஆர்டரை செயலாக்குகிறது",
    orderReady: "அனுப்புதலுக்கு ஆர்டர் தயாராக உள்ளது",
    orderShipped: "ஆர்டர் அனுப்பப்பட்டது",
    outForDelivery: "விநியோகத்திற்கு வெளியே",
    orderDelivered: "ஆர்டர் வழங்கப்பட்டது",
    customerInformation: "வாடிக்கையாளர் தகவல்",
    contactInfo: "தொடர்பு தகவல்",
    shippingAddress: "அனுப்பும் முகவரி",
    billingAddress: "பிலிங்க் முகவரி",
    paymentDetails: "கட்டண விவரங்கள்",
    paymentMethod: "கட்டண முறை",
    creditCard: "கிரெடிட் கார்டு",
    transactionId: "பரிவர்த்தனை ஐடி",
    paymentDate: "கட்டண தேதி",
    orderItems: "ஆர்டர் பொருட்கள்",
    product: "பொருள்",
    quantity: "அளவு",
    price: "விலை",
    orderSummary: "ஆர்டர் ஸாராஂஶம்",
    subtotal: "துணை மொத்தம்",
    shipping: "அனுப்புதல்",
    tax: "வரி (GST 18%)",
    discount: "தள்ளுபடி",
    posInterface: "விற்பனை புள்ளி (POS) இடைமுகம்",
    newSale: "புதிய விற்பனை",
    customerDetails: "வாடிக்கையாளர் விவரங்கள்",
    searchCustomer: "வாடிக்கையாளரைத் தேடுங்கள் (பெயர்/தொலைபேசி)",
    walkInCustomer: "நடைப்பயண வாடிக்கையாளர்",
    billing: "பிலிங்க்",
    scanOrSearch: "பார்கோடை ஸ்கேன் செய்யவும் அல்லது பொருட்களைத் தேடவும்...",
    addItem: "பொருளைச் சேர்க்கவும்",
    payment: "கட்டணம்",
    cash: "பணம்",
    card: "கார்டு",
    payLater: "பின்னர் செலுத்துங்கள்",
    completeSale: "விற்பனையை முடிக்கவும்",
    clearCart: "கார்ட்டை அழிக்கவும்",
    cartSummary: "கார்ட் ஸாராஂஶம்",
    totalItems: "மொத்த பொருட்கள்"
  },
  hi: {
    pageTitle: "ऑर्डर प्रबंधन मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "POS संचालन से B2C/B2B ऑर्डर प्रोसेसिंग, विश्लेषण और पूर्ण ऑर्डर जीवनचक्र के माध्यम से ग्राहक संबंध प्रबंधन तक व्यापक ऑर्डर प्रबंधन में महारत हासिल करें।",
    step1Title: "ऑर्डर प्रबंधन डैशबोर्ड अवलोकन",
    step1Intro: "ऑर्डर प्रबंधन डैशबोर्ड B2C ग्राहकों और B2B खुदरा विक्रेताओं के बीच सभी बिक्री गतिविधियों की निगरानी के लिए आपका केंद्रीय कमांड केंद्र है। यह रीयल-टाइम विश्लेषण, ऑर्डर ट्रैकिंग और व्यापक ग्राहक अंतर्दृष्टि प्रदान करता है जो आपको अपने खुदरा संचालन को अनुकूलित करने में मदद करता है।",
    step1Description: "सभी बिक्री का समग्र दृश्य प्राप्त करने, ऑर्डर स्थितियों को ट्रैक करने और अपने व्यवसाय के प्रदर्शन के बारे में अंतर्दृष्टि प्राप्त करने के लिए ऑर्डर प्रबंधन डैशबोर्ड पर नेविगेट करें।",
    step2Title: "ऑर्डर प्रोसेसिंग और जीवनचक्र",
    step2Intro: "सृजन से वितरण तक ऑर्डर के पूरे जीवनचक्र को समझें। सिस्टम प्रत्येक चरण में विस्तृत ट्रैकिंग प्रदान करता है, जिसमें पिकिंग, पैकिंग, शिपिंग और पूर्ति शामिल है।",
    step2Description: "ऑर्डर विवरण पृष्ठ ऑर्डर की यात्रा का समग्र दृश्य प्रदान करता है, जिसमें विस्तृत टाइमलाइन, आइटम ब्रेकडाउन और पूर्ति स्थिति शामिल है।",
    step3Title: "पॉइंट ऑफ सेल (POS) संचालन",
    step3Intro: "RetailOS में स्टोर में बिक्री के लिए एक शक्तिशाली POS सिस्टम शामिल है। यह कैशियरों को तुरंत उत्पाद जोड़ने, छूट लागू करने और विभिन्न तरीकों से भुगतान प्रोसेस करने की अनुमति देता है।",
    step3Description: "POS इंटरफेस गति और दक्षता के लिए डिज़ाइन किया गया है, जो आपके ग्राहकों के लिए निर्बाध चेकआउट अनुभव को सक्षम करता है।",
    nextStepsTitle: "ऑर्डर प्रबंधन पूरा हुआ!",
    nextStepsDescription: "अब आपके पास RetailOS ऑर्डर प्रबंधन प्रणाली की पूरी समझ है। अब आप पूर्ति प्रक्रिया के बारे में सीखने के लिए आगे बढ़ सकते हैं।",
    nextStepsButton: "पूर्ति मैनुअल पर जारी रखें",
    openDashboard: "ऑर्डर डैशबोर्ड खोलें",

    // Screenshot translations
    orderDashboard: "ऑर्डर प्रबंधन डैशबोर्ड",
    monitorSales: "सभी B2C और B2B बिक्री गतिविधियों की निगरानी करें",
    createOrder: "ऑर्डर बनाएं",
    exportData: "डेटा निर्यात करें",
    allOrders: "सभी ऑर्डर",
    b2cOrders: "B2C ऑर्डर",
    b2bOrders: "B2B ऑर्डर",
    searchOrders: "ID, ग्राहक नाम से ऑर्डर खोजें...",
    grid: "ग्रिड",
    list: "सूची",
    orderId: "ऑर्डर ID",
    customer: "ग्राहक",
    date: "दिनांक",
    total: "कुल",
    status: "स्थिति",
    actions: "कार्य",
    viewDetails: "विवरण देखें",
    downloadInvoice: "चालान डाउनलोड करें",
    orderStatusOverview: "ऑर्डर स्थिति अवलोकन",
    processing: "प्रोसेसिंग",
    shipped: "शिप किया गया",
    delivered: "वितरित किया गया",
    cancelled: "रद्द किया गया",
    b2c: "B2C",
    b2b: "B2B",
    topProductsByOrders: "ऑर्डर द्वारा शीर्ष उत्पाद",
    organicBasmatiRice: "जैविक बासमती चावल",
    unitsSold: "बिके हुए यूनिट",
    totalRevenue: "कुल राजस्व",
    wholeWheatFlour: "साबुत गेहूं का आटा",
    sunflowerOil: "सूरजमुखी का तेल",
    orderDetailView: "ऑर्डर विवरण दृश्य",
    order: "ऑर्डर",
    backToOrders: "ऑर्डर पर वापस जाएं",
    printInvoice: "चालान प्रिंट करें",
    orderTimeline: "ऑर्डर टाइमलाइन",
    orderPlaced: "ऑर्डर रखा गया",
    paymentConfirmed: "भुगतान की पुष्टि हुई",
    processingOrder: "ऑर्डर प्रोसेसिंग",
    orderReady: "शिपमेंट के लिए ऑर्डर तैयार",
    orderShipped: "ऑर्डर शिप किया गया",
    outForDelivery: "डिलीवरी के लिए बाहर",
    orderDelivered: "ऑर्डर वितरित किया गया",
    customerInformation: "ग्राहक जानकारी",
    contactInfo: "संपर्क जानकारी",
    shippingAddress: "शिपिंग पता",
    billingAddress: "बिलिंग पता",
    paymentDetails: "भुगतान विवरण",
    paymentMethod: "भुगतान विधि",
    creditCard: "क्रेडिट कार्ड",
    transactionId: "लेन-देन ID",
    paymentDate: "भुगतान तिथि",
    orderItems: "ऑर्डर आइटम",
    product: "उत्पाद",
    quantity: "मात्रा",
    price: "मूल्य",
    orderSummary: "ऑर्डर सारांश",
    subtotal: "उप-कुल",
    shipping: "शिपिंग",
    tax: "कर (GST 18%)",
    discount: "छूट",
    posInterface: "पॉइंट ऑफ सेल (POS) इंटरफेस",
    newSale: "नई बिक्री",
    customerDetails: "ग्राहक विवरण",
    searchCustomer: "ग्राहक खोजें (नाम/फोन)",
    walkInCustomer: "वॉक-इन ग्राहक",
    billing: "बिलिंग",
    scanOrSearch: "बारकोड स्कैन करें या उत्पाद खोजें...",
    addItem: "आइटम जोड़ें",
    payment: "भुगतान",
    cash: "नकद",
    card: "कार्ड",
    payLater: "बाद में भुगतान करें",
    completeSale: "बिक्री पूरी करें",
    clearCart: "कार्ट साफ़ करें",
    cartSummary: "कार्ट सारांश",
    totalItems: "कुल आइटम"
  },
  ml: {
    pageTitle: "ഓർഡർ മാനേജ്മെന്റ് മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് തിരികെ",
    description: "POS പ്രവർത്തനങ്ങളിൽ നിന്ന് B2C/B2B ഓർഡർ പ്രോസസ്സിംഗ്, വിശകലനം, കസ്റ്റമർ ബന്ധ മാനേജ്മെന്റ് വരെ സമഗ്ര ഓർഡർ മാനേജ്മെന്റിൽ മാസ്റ്റർ ആകുക.",
    step1Title: "ഓർഡർ മാനേജ്മെന്റ് ഡാഷ്ബോർഡ് അവലോകനം",
    step1Intro: "ഓർഡർ മാനേജ്മെന്റ് ഡാഷ്ബോർഡ് B2C കസ്റ്റമർമാരും B2B റീട്ടെയിലർമാരും ഉൾപ്പെടെ എല്ലാ വിൽപ്പന പ്രവർത്തനങ്ങളും നിരീക്ഷിക്കാനുള്ള നിങ്ങളുടെ കേന്ദ്ര കമാൻഡ് സെന്റർ ആണ്.",
    step1Description: "എല്ലാ വിൽപ്പനകളുടെയും സമഗ്ര കാഴ്ച ലഭിക്കാൻ, ഓർഡർ നിലകൾ ട്രാക്ക് ചെയ്യാൻ, നിങ്ങളുടെ ബിസിനസ് പ്രകടനത്തെക്കുറിച്ചുള്ള ഉൾക്കാഴ്ച ലഭിക്കാൻ ഓർഡർ മാനേജ്മെന്റ് ഡാഷ്ബോർഡിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക.",
    step2Title: "ഓർഡർ പ്രോസസ്സിംഗ് & ജീവിതചക്രം",
    step2Intro: "സൃഷ്ടിയിൽ നിന്ന് ഡെലിവറി വരെ ഓർഡറിന്റെ മുഴുവൻ ജീവിതചക്രം മനസ്സിലാക്കുക. സിസ്റ്റം ഓരോ ഘട്ടത്തിലും വിശദമായ ട്രാക്കിംഗ് നൽകുന്നു.",
    step2Description: "ഓർഡർ വിവര പേജ് ഓർഡറിന്റെ യാത്രയുടെ സമഗ്ര കാഴ്ച നൽകുന്നു, ഇതിൽ വിശദമായ ടൈംലൈൻ, ഐറ്റം ബ്രേക്ക്ഡൗൺ, ഫുൾഫിൽമെന്റ് നില എന്നിവ ഉൾപ്പെടുന്നു.",
    step3Title: "പോയിന്റ് ഓഫ് സെയിൽ (POS) പ്രവർത്തനങ്ങൾ",
    step3Intro: "RetailOS സ്റ്റോറിലെ വിൽപ്പനയ്ക്കായി ശക്തമായ POS സിസ്റ്റം ഉൾക്കൊള്ളുന്നു. ഇത് കാഷ്യർമാർക്ക് ഉൽപ്പന്നങ്ങൾ വേഗത്തിൽ ചേർക്കാനും, കിഴിവുകൾ പ്രയോഗിക്കാനും, വിവിധ രീതികളിലൂടെ പേയ്മെന്റുകൾ പ്രോസസ്സ് ചെയ്യാനും അനുവദിക്കുന്നു.",
    step3Description: "POS ഇന്റർഫേസ് വേഗതയ്ക്കും കാര്യക്ഷമതയ്ക്കും വേണ്ടി രൂപകൽപ്പന ചെയ്തിരിക്കുന്നു, നിങ്ങളുടെ കസ്റ്റമർമാർക്ക് തടസ്സമില്ലാത്ത ചെക്കൗട്ട് അനുഭവങ്ങൾ സജീവമാക്കുന്നു.",
    nextStepsTitle: "ഓർഡർ മാനേജ്മെന്റ് പൂർത്തിയായി!",
    nextStepsDescription: "നിങ്ങൾക്ക് ഇപ്പോൾ RetailOS ഓർഡർ മാനേജ്മെന്റ് സിസ്റ്റത്തെക്കുറിച്ചുള്ള സമഗ്രമായ ധാരണ ഉണ്ട്. നിങ്ങൾക്ക് ഇപ്പോൾ ഫുൾഫിൽമെന്റ് പ്രക്രിയയെക്കുറിച്ച് പഠിക്കാൻ മുന്നോട്ട് പോകാം.",
    nextStepsButton: "ഫുൾഫിൽമെന്റ് മാനുവലിലേക്ക് തുടരുക",
    openDashboard: "ഓർഡർ ഡാഷ്ബോർഡ് തുറക്കുക",

    // Screenshot translations
    orderDashboard: "ഓർഡർ മാനേജ്മെന്റ് ഡാഷ്ബോർഡ്",
    monitorSales: "എല്ലാ B2C & B2B വിൽപ്പന പ്രവർത്തനങ്ങളും നിരീക്ഷിക്കുക",
    createOrder: "ഓർഡർ സൃഷ്ടിക്കുക",
    exportData: "ഡാറ്റ എക്സ്പോർട്ട് ചെയ്യുക",
    allOrders: "എല്ലാ ഓർഡറുകളും",
    b2cOrders: "B2C ഓർഡറുകൾ",
    b2bOrders: "B2B ഓർഡറുകൾ",
    searchOrders: "ID, കസ്റ്റമർ പേര് എന്നിവ ഉപയോഗിച്ച് ഓർഡറുകൾ തിരയുക...",
    grid: "ഗ്രിഡ്",
    list: "ലിസ്റ്റ്",
    orderId: "ഓർഡർ ID",
    customer: "കസ്റ്റമർ",
    date: "തീയതി",
    total: "ആകെ",
    status: "നില",
    actions: "പ്രവർത്തനങ്ങൾ",
    viewDetails: "വിവരങ്ങൾ കാണുക",
    downloadInvoice: "ഇൻവോയ്സ് ഡൗൺലോഡ് ചെയ്യുക",
    orderStatusOverview: "ഓർഡർ നില അവലോകനം",
    processing: "പ്രോസസ്സിംഗ്",
    shipped: "ഷിപ്പ് ചെയ്തു",
    delivered: "ഡെലിവർ ചെയ്തു",
    cancelled: "റദ്ദാക്കി",
    b2c: "B2C",
    b2b: "B2B",
    topProductsByOrders: "ഓർഡറുകൾ അനുസരിച്ച് മികച്ച ഉൽപ്പന്നങ്ങൾ",
    organicBasmatiRice: "ഓർഗാനിക് ബാസ്മതി അരി",
    unitsSold: "യൂണിറ്റുകൾ വിറ്റു",
    totalRevenue: "ആകെ വരുമാനം",
    wholeWheatFlour: "മുഴുവൻ ഗോതമ്പ് മാവ്",
    sunflowerOil: "സൂര്യകാന്തി എണ്ണ",
    orderDetailView: "ഓർഡർ വിവര കാഴ്ച",
    order: "ഓർഡർ",
    backToOrders: "ഓർഡറുകളിലേക്ക് തിരികെ",
    printInvoice: "ഇൻവോയ്സ് പ്രിന്റ് ചെയ്യുക",
    orderTimeline: "ഓർഡർ ടൈംലൈൻ",
    orderPlaced: "ഓർഡർ വച്ചു",
    paymentConfirmed: "പേയ്മെന്റ് സ്ഥിരീകരിച്ചു",
    processingOrder: "ഓർഡർ പ്രോസസ്സ് ചെയ്യുന്നു",
    orderReady: "ഷിപ്പ്മെന്റിനായി ഓർഡർ തയ്യാറാണ്",
    orderShipped: "ഓർഡർ ഷിപ്പ് ചെയ്തു",
    outForDelivery: "ഡെലിവറിക്കായി പുറത്ത്",
    orderDelivered: "ഓർഡർ ഡെലിവർ ചെയ്തു",
    customerInformation: "കസ്റ്റമർ വിവരങ്ങൾ",
    contactInfo: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
    shippingAddress: "ഷിപ്പിംഗ് വിലാസം",
    billingAddress: "ബില്ലിംഗ് വിലാസം",
    paymentDetails: "പേയ്മെന്റ് വിവരങ്ങൾ",
    paymentMethod: "പേയ്മെന്റ് രീതി",
    creditCard: "ക്രെഡിറ്റ് കാർഡ്",
    transactionId: "ഇടപാട് ID",
    paymentDate: "പേയ്മെന്റ് തീയതി",
    orderItems: "ഓർഡർ ഐറ്റങ്ങൾ",
    product: "ഉൽപ്പന്നം",
    quantity: "അളവ്",
    price: "വില",
    orderSummary: "ഓർഡർ സംഗ്രഹം",
    subtotal: "ഉപആകെ",
    shipping: "ഷിപ്പിംഗ്",
    tax: "നികുതി (GST 18%)",
    discount: "കിഴിവ്",
    posInterface: "പോയിന്റ് ഓഫ് സെയിൽ (POS) ഇന്റർഫേസ്",
    newSale: "പുതിയ വിൽപ്പന",
    customerDetails: "കസ്റ്റമർ വിവരങ്ങൾ",
    searchCustomer: "കസ്റ്റമർ തിരയുക (പേര്/ഫോൺ)",
    walkInCustomer: "വാക്ക്-ഇൻ കസ്റ്റമർ",
    billing: "ബില്ലിംഗ്",
    scanOrSearch: "ബാർകോഡ് സ്കാൻ ചെയ്യുക അല്ലെങ്കിൽ ഉൽപ്പന്നങ്ങൾ തിരയുക...",
    addItem: "ഐറ്റം ചേർക്കുക",
    payment: "പേയ്മെന്റ്",
    cash: "നാണയം",
    card: "കാർഡ്",
    payLater: "പിന്നീട് പേയ്മെന്റ് ചെയ്യുക",
    completeSale: "വിൽപ്പന പൂർത്തിയാക്കുക",
    clearCart: "കാർട്ട് മായ്ക്കുക",
    cartSummary: "കാർട്ട് സംഗ്രഹം",
    totalItems: "ആകെ ഐറ്റങ്ങൾ"
  }
};

export default function ManualOrders() {
  const [language] = useManualLanguage();
  
  const t = (key, params = {}) => {
    let translation = translations[language]?.[key] || translations['en']?.[key] || key;
    for (const param in params) {
      translation = translation.replace(`{${param}}`, params[param]);
    }
    return translation;
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
          <LanguageSelector language={language} setLanguage={() => {}} readOnly />
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
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
                <p>
                  {t('step1Description')}
                </p>

                <Screenshot title={t('orderDashboard')}>
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <h2 className="text-xl font-bold text-slate-800">{t('orderDashboard')}</h2>
                        <p className="text-sm text-slate-500">{t('monitorSales')}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Plus className="w-4 h-4 mr-2" />
                          {t('createOrder')}
                        </Button>
                        <Button variant="outline">
                          {t('exportData')}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-3 bg-slate-50 border rounded-lg">
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="secondary">{t('allOrders')} (245)</Button>
                        <Button size="sm" variant="outline">{t('b2cOrders')} (180)</Button>
                        <Button size="sm" variant="outline">{t('b2bOrders')} (65)</Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative w-full md:w-auto">
                           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input placeholder={t('searchOrders')} className="pl-9" />
                        </div>
                        <div className="flex items-center border rounded-md">
                          <Button variant="ghost" size="icon"><List className="w-4 h-4"/></Button>
                          <Button variant="secondary" size="icon"><Grid className="w-4 h-4"/></Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead className="bg-slate-100">
                          <tr>
                            <th className="p-3 text-left font-semibold text-slate-600">{t('orderId')}</th>
                            <th className="p-3 text-left font-semibold text-slate-600">{t('customer')}</th>
                            <th className="p-3 text-left font-semibold text-slate-600">{t('date')}</th>
                            <th className="p-3 text-right font-semibold text-slate-600">{t('total')}</th>
                            <th className="p-3 text-center font-semibold text-slate-600">{t('status')}</th>
                            <th className="p-3 text-center font-semibold text-slate-600">{t('actions')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-3 font-mono">#B2C-5823</td>
                            <td className="p-3">Ravi Kumar</td>
                            <td className="p-3">May 21, 2024</td>
                            <td className="p-3 text-right font-medium">₹1,250.00</td>
                            <td className="p-3 text-center"><Badge className="bg-green-100 text-green-800">{t('delivered')}</Badge></td>
                            <td className="p-3 flex justify-center gap-1"><Button variant="ghost" size="icon"><Eye className="w-4 h-4"/></Button><Button variant="ghost" size="icon"><DollarSign className="w-4 h-4"/></Button></td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3 font-mono">#B2B-1098</td>
                            <td className="p-3">Anand Retailers</td>
                            <td className="p-3">May 21, 2024</td>
                            <td className="p-3 text-right font-medium">₹15,800.00</td>
                            <td className="p-3 text-center"><Badge className="bg-blue-100 text-blue-800">{t('shipped')}</Badge></td>
                            <td className="p-3 flex justify-center gap-1"><Button variant="ghost" size="icon"><Eye className="w-4 h-4"/></Button><Button variant="ghost" size="icon"><DollarSign className="w-4 h-4"/></Button></td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3 font-mono">#B2C-5822</td>
                            <td className="p-3">Priya Sharma</td>
                            <td className="p-3">May 20, 2024</td>
                            <td className="p-3 text-right font-medium">₹850.50</td>
                            <td className="p-3 text-center"><Badge className="bg-orange-100 text-orange-800">{t('processing')}</Badge></td>
                            <td className="p-3 flex justify-center gap-1"><Button variant="ghost" size="icon"><Eye className="w-4 h-4"/></Button><Button variant="ghost" size="icon"><DollarSign className="w-4 h-4"/></Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Screenshot>

                 <Screenshot title={t('orderStatusOverview')}>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">32</div>
                      <div className="text-sm font-medium text-orange-700">{t('processing')}</div>
                    </div>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">45</div>
                      <div className="text-sm font-medium text-blue-700">{t('shipped')}</div>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">158</div>
                      <div className="text-sm font-medium text-green-700">{t('delivered')}</div>
                    </div>
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-600">10</div>
                      <div className="text-sm font-medium text-red-700">{t('cancelled')}</div>
                    </div>
                  </div>
                </Screenshot>
                
                <Screenshot title={t('topProductsByOrders')}>
                    <div className="space-y-4">
                        <div className="flex items-center p-3 bg-slate-50 border rounded-lg">
                            <div className="text-2xl mr-4">🍚</div>
                            <div className="flex-grow">
                                <div className="font-semibold text-slate-800">{t('organicBasmatiRice')}</div>
                                <div className="text-sm text-slate-500">320 {t('unitsSold')}</div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-emerald-600">₹32,000</div>
                                <div className="text-xs text-slate-500">{t('totalRevenue')}</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 bg-slate-50 border rounded-lg">
                            <div className="text-2xl mr-4">🍞</div>
                            <div className="flex-grow">
                                <div className="font-semibold text-slate-800">{t('wholeWheatFlour')}</div>
                                <div className="text-sm text-slate-500">250 {t('unitsSold')}</div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-emerald-600">₹25,000</div>
                                <div className="text-xs text-slate-500">{t('totalRevenue')}</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 bg-slate-50 border rounded-lg">
                            <div className="text-2xl mr-4">🌻</div>
                            <div className="flex-grow">
                                <div className="font-semibold text-slate-800">{t('sunflowerOil')}</div>
                                <div className="text-sm text-slate-500">180 {t('unitsSold')}</div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-emerald-600">₹18,000</div>
                                <div className="text-xs text-slate-500">{t('totalRevenue')}</div>
                            </div>
                        </div>
                    </div>
                </Screenshot>
              </Step>

              <Step number="2" title={t('step2Title')}>
                <p>
                  {t('step2Intro')}
                </p>
                <p>
                  {t('step2Description')}
                </p>

                <Screenshot title={t('orderDetailView')}>
                  <div className="p-4 bg-white rounded-lg border">
                    <div className="flex justify-between sm:items-center pb-4 border-b flex-col sm:flex-row gap-4 sm:gap-0">
                      
                      <div>
                        <h3 className="text-lg font-bold text-slate-800">{t('order')} #B2C-5823</h3>
                        <p className="text-sm text-slate-500">May 21, 2024</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">{t('backToOrders')}</Button>
                        <Button size="sm">{t('printInvoice')}</Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                      <div className="lg:col-span-2 space-y-6">
                        {/* Order Timeline */}
                        <div>
                          <h4 className="font-semibold mb-3">{t('orderTimeline')}</h4>
                          <div className="relative pl-6">
                            <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-slate-200"></div>
                            <div className="flex items-center gap-4 mb-4 relative">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center ring-4 ring-green-100"><Check className="w-3 h-3 text-white"/></div>
                              <div>
                                <p className="font-medium text-slate-700">{t('orderDelivered')}</p>
                                <p className="text-xs text-slate-500">May 23, 2024</p>
                              </div>
                            </div>
                             <div className="flex items-center gap-4 mb-4 relative">
                              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center ring-4 ring-blue-100"><Truck className="w-3 h-3 text-white"/></div>
                              <div>
                                <p className="font-medium text-slate-700">{t('orderShipped')}</p>
                                <p className="text-xs text-slate-500">May 22, 2024</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 mb-4 relative">
                              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center ring-4 ring-blue-100"><CheckCircle className="w-3 h-3 text-white"/></div>
                              <div>
                                <p className="font-medium text-slate-700">{t('orderPlaced')}</p>
                                <p className="text-xs text-slate-500">May 21, 2024</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Order Items */}
                        <div>
                          <h4 className="font-semibold mb-3">{t('orderItems')} (3)</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-slate-200 rounded-md"></div>
                                <div>
                                  <p className="font-medium">{t('organicBasmatiRice')}</p>
                                  <p className="text-xs text-slate-500">SKU: ORG-RICE-1KG</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">₹500.00</p>
                                <p className="text-xs text-slate-500">Qty: 2</p>
                              </div>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-slate-200 rounded-md"></div>
                                <div>
                                  <p className="font-medium">{t('wholeWheatFlour')}</p>
                                  <p className="text-xs text-slate-500">SKU: WWF-1KG</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">₹350.00</p>
                                <p className="text-xs text-slate-500">Qty: 1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {/* Customer Info */}
                        <div>
                          <h4 className="font-semibold mb-2">{t('customerInformation')}</h4>
                          <div className="text-sm space-y-1">
                            <p className="font-medium text-blue-600">Ravi Kumar</p>
                            <p className="text-slate-500">ravi.kumar@example.com</p>
                            <p className="text-slate-500">+91 98765 43210</p>
                          </div>
                        </div>
                        {/* Shipping Address */}
                        <div>
                          <h4 className="font-semibold mb-2">{t('shippingAddress')}</h4>
                          <div className="text-sm text-slate-500">
                            <p>123, Rose Villa</p>
                            <p>Bannerghatta Road</p>
                            <p>Bangalore, 560076</p>
                          </div>
                        </div>
                        {/* Payment Details */}
                        <div>
                           <h4 className="font-semibold mb-2">{t('paymentDetails')}</h4>
                           <div className="text-sm space-y-1">
                              <div className="flex justify-between"><span className="text-slate-500">{t('paymentMethod')}:</span><span className="font-medium">{t('creditCard')}</span></div>
                              <div className="flex justify-between"><span className="text-slate-500">{t('transactionId')}:</span><span className="font-medium">...-4242</span></div>
                           </div>
                        </div>
                         {/* Order Summary */}
                        <div className="border-t pt-4">
                           <h4 className="font-semibold mb-3">{t('orderSummary')}</h4>
                           <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span className="text-slate-500">{t('subtotal')}:</span><span>₹1050.00</span></div>
                            <div className="flex justify-between"><span className="text-slate-500">{t('shipping')}:</span><span>₹50.00</span></div>
                            <div className="flex justify-between"><span className="text-slate-500">{t('tax')}:</span><span>₹150.00</span></div>
                            <div className="flex justify-between font-bold text-base"><span className="text-slate-800">{t('total')}:</span><span>₹1250.00</span></div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="3" title={t('step3Title')}>
                <p>
                  {t('step3Intro')}
                </p>
                <p>
                  {t('step3Description')}
                </p>

                <Screenshot title={t('posInterface')}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white p-4 border rounded-lg">
                      <h3 className="font-bold text-lg mb-4">{t('newSale')}</h3>
                      <div className="grid sm:grid-cols-2 gap-4 ">
                        <div>
                          <label className="text-sm font-medium">{t('customerDetails')}</label>
                          <Input placeholder={t('searchCustomer')} className="mt-1"/>
                          <div className="mt-2 text-sm p-2 bg-blue-50 border border-blue-200 rounded-md">
                            {t('walkInCustomer')}
                          </div>
                        </div>
                        <div >
                           <label className="text-sm font-medium">{t('billing')}</label>
                          <div className="flex gap-2 mt-1">
                            <Input placeholder={t('scanOrSearch')} />
                            <Button>{t('addItem')}</Button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 border rounded-lg h-64 overflow-y-auto">
                        <table className="w-full text-sm">
                           <thead className="bg-slate-100">
                              <tr>
                                <th className="p-2 text-left">{t('product')}</th>
                                <th className="p-2 text-center">{t('quantity')}</th>
                                <th className="p-2 text-right">{t('price')}</th>
                                <th className="p-2 text-right">{t('total')}</th>
                                <th className="p-2"></th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr className="border-b">
                                <td className="p-2">Amul Gold Milk 1L</td>
                                <td className="p-2 text-center">2</td>
                                <td className="p-2 text-right">₹60.00</td>
                                <td className="p-2 text-right">₹120.00</td>
                                <td className="p-2 text-center"><Button variant="ghost" size="icon" className="w-6 h-6"><X className="w-3 h-3"/></Button></td>
                              </tr>
                               <tr className="border-b">
                                <td className="p-2">Britannia Bread</td>
                                <td className="p-2 text-center">1</td>
                                <td className="p-2 text-right">₹45.00</td>
                                <td className="p-2 text-right">₹45.00</td>
                                <td className="p-2 text-center"><Button variant="ghost" size="icon" className="w-6 h-6"><X className="w-3 h-3"/></Button></td>
                              </tr>
                           </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-4 border rounded-lg flex flex-col">
                        <h3 className="font-bold text-lg mb-4">{t('payment')}</h3>
                        <div className="flex-grow space-y-2">
                           <div className="flex justify-between font-medium"><span>{t('subtotal')}</span><span>₹165.00</span></div>
                           <div className="flex justify-between text-sm text-slate-600"><span>{t('tax')}</span><span>₹29.70</span></div>
                           <div className="flex justify-between text-sm text-slate-600"><span>{t('discount')}</span><span>-₹15.00</span></div>
                           <div className="flex justify-between font-bold text-xl border-t pt-2 mt-2"><span>{t('total')}</span><span>₹179.70</span></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-4">
                           <Button variant="outline" className="h-12">{t('cash')}</Button>
                           <Button variant="outline" className="h-12">{t('card')}</Button>
                           <Button variant="outline" className="h-12">{t('payLater')}</Button>
                        </div>
                        <Button className="w-full mt-4 h-14 text-lg bg-green-600 hover:bg-green-700">{t('completeSale')}</Button>
                        <Button variant="link" className="text-red-500 mt-2">{t('clearCart')}</Button>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{t('nextStepsTitle')}</h3>
                <p className="text-blue-700 mb-4">
                  {t('nextStepsDescription')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={createPageUrl('ManualFulfillment')} className="inline-block">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      {t('nextStepsButton')}
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Button>
                  </Link>
                  <Link to={createPageUrl('OrderDashboard')} className="inline-block">
                    <Button variant="outline">
                      {t('openDashboard')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
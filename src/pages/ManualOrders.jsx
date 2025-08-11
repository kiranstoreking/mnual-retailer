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
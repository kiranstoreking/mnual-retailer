import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Book, 
  ShoppingCart, 
  Package, 
  Users, 
  Truck, 
  BarChart3, 
  Settings, 
  CreditCard,
  Store,
  Navigation,
  Award,
  Wallet,
  FileText,
  Download,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Book,
    color: 'text-blue-600',
    content: {
      overview: 'RetailOS is a comprehensive supermarket management system designed to streamline all aspects of retail operations.',
      topics: [
        {
          title: 'System Overview',
          content: `RetailOS integrates multiple business functions into a single platform:
          
• **POS Dashboard**: Handle transactions with B2B/B2C pricing
• **Inventory Management**: Track products, batches, and locations
• **Vendor Management**: Manage supplier relationships and purchase orders
• **Customer Management**: Handle B2C and B2B customer relationships
• **Order Fulfillment**: Process orders from picking to delivery
• **Analytics**: Comprehensive reporting and insights`
        },
        {
          title: 'User Roles and Permissions',
          content: `Different user roles provide access to specific features:

**Admin**: Full system access, user management, system configuration
**Store Manager**: Operations management, inventory oversight
**Cashier**: POS operations, basic customer service
**Warehouse Staff**: Inventory management, order fulfillment
**Vendor**: Vendor portal access for self-service operations
**Delivery Personnel**: Delivery portal for order tracking`
        },
        {
          title: 'Navigation and Layout',
          content: `The system uses a sidebar navigation with organized modules:

• Dashboard provides quick overview of key metrics
• Each module has dedicated pages for specific functions
• Search functionality available throughout the system
• Responsive design works on desktop, tablet, and mobile devices`
        }
      ]
    }
  },
  {
    id: 'pos-dashboard',
    title: 'POS Dashboard',
    icon: ShoppingCart,
    color: 'text-emerald-600',
    content: {
      overview: 'The Point of Sale dashboard handles all customer transactions with intelligent pricing and inventory management.',
      topics: [
        {
          title: 'Pricing Mode Selection',
          content: `Before processing transactions, select the appropriate customer type:

**B2C Mode**: Individual customer pricing
• Standard retail prices
• Loyalty points and individual discounts
• Walk-in customer support

**B2B Mode**: Business customer pricing  
• Wholesale pricing for registered retailers
• Bulk order discounts
• Credit and Pay Later options`
        },
        {
          title: 'Deal-Based Transactions',
          content: `RetailOS uses a deal-based system for bundled products:

• **Normal Deals**: Bundled products at special pricing
• **BOGO Deals**: Buy One Get One offers
• **Product Variants**: Handle multiple batches/shelf lives
• **Inventory Tracking**: Real-time stock updates per transaction`
        },
        {
          title: 'Checkout Process',
          content: `Complete checkout with multiple payment options:

1. **Customer Selection**: Choose B2C customer, B2B retailer, or walk-in
2. **Apply Discounts**: Loyalty points, coupons, bulk discounts  
3. **Payment Method**: Cash, card, digital wallet, Pay Later
4. **Order Processing**: Generate invoices and update inventory
5. **Receipt Generation**: Print or email receipts to customers`
        },
        {
          title: 'Product Variant Selection',
          content: `When deals contain products with multiple batches:

• System automatically detects multiple batch availability
• Modal appears for cashier to select specific batches
• FIFO (First In, First Out) recommendations provided
• Expiry date and batch information displayed
• Selection tracked in cart and final transaction`
        }
      ]
    }
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    icon: Package,
    color: 'text-purple-600',
    content: {
      overview: 'Comprehensive inventory control with location tracking, batch management, and automated alerts.',
      topics: [
        {
          title: 'Product Management',
          content: `Add and manage products with complete information:

**Basic Information**:
• Product name, SKU, and barcodes
• Category and brand classification
• Vendor assignment and purchase history

**Pricing**:
• B2C (retail) and B2B (wholesale) pricing
• Cost price and margin tracking
• Price history and change logs

**Inventory Tracking**:
• Current stock levels
• Minimum and maximum stock thresholds
• Reorder point notifications`
        },
        {
          title: 'Warehouse Location System',
          content: `Organize inventory with precise location tracking:

**Structure**: Rack-Shelf-Bin system (e.g., A-1-3)
• **Racks**: Main storage areas (A, B, C...)
• **Shelves**: Horizontal levels within racks (1, 2, 3...)
• **Bins**: Individual storage compartments

**Features**:
• Auto-allocation for received products
• Bin capacity management
• Location-based picking lists
• Movement tracking and audit logs`
        },
        {
          title: 'Batch Management',
          content: `Track product batches for quality control:

**Batch Information**:
• Batch numbers and manufacturing dates
• Expiry dates and shelf life tracking
• Quantity per batch

**FIFO Management**:
• Automatic oldest-first recommendations
• Near-expiry alerts and reports
• Batch selection during sales transactions
• Expired product identification and removal`
        },
        {
          title: 'Stock Alerts and Reporting',
          content: `Automated monitoring and notifications:

**Low Stock Alerts**: When products fall below minimum levels
**Near Expiry Alerts**: Products approaching expiration
**Overstock Warnings**: Products exceeding maximum levels
**Velocity Analysis**: Fast, medium, and slow-moving products
**ABC Analysis**: Product categorization by sales volume`
        }
      ]
    }
  },
  {
    id: 'purchase-orders',
    title: 'Purchase Orders',
    icon: Truck,
    color: 'text-orange-600',
    content: {
      overview: 'Manage vendor relationships and procurement processes with automated workflows and vendor collaboration.',
      topics: [
        {
          title: 'Creating Purchase Orders',
          content: `Generate POs through multiple methods:

**Manual Creation**:
• Select vendor and products
• Specify quantities and expected delivery dates
• Set pricing and terms

**Purchase Basket**:
• Collect items over time before creating PO
• Bulk selection by category or vendor
• Priority-based organization

**Auto-Generation**:
• Based on minimum stock levels
• Seasonal demand forecasting
• Sales velocity analysis`
        },
        {
          title: 'Vendor Collaboration',
          content: `Vendors can interact with POs through their portal:

**Vendor Actions**:
• Accept or request modifications to orders
• Update pricing and availability
• Provide shipping information and tracking
• Upload invoices and delivery documents

**Approval Workflow**:
• Modification requests require admin approval
• Price changes tracked and logged
• Automatic notifications for status changes`
        },
        {
          title: 'Receiving and Processing',
          content: `Handle incoming shipments efficiently:

**Receiving Process**:
1. Check PO against delivered items
2. Verify quantities and quality
3. Note any damages or discrepancies
4. Assign warehouse locations
5. Update inventory levels

**Quality Control**:
• Photo documentation of damages
• Batch information recording
• Expiry date verification
• Return processing for defective items`
        }
      ]
    }
  },
  {
    id: 'order-fulfillment',
    title: 'Order Fulfillment',
    icon: Navigation,
    color: 'text-teal-600',
    content: {
      overview: 'Process customer orders from picking to delivery with complete workflow management.',
      topics: [
        {
          title: 'Fulfillment Workflow',
          content: `Orders progress through defined stages:

**1. Pending Orders**: New orders awaiting processing
**2. Picking**: Generate pick lists and collect items
**3. Packing**: Pack items into boxes with labels
**4. Ready for Dispatch**: Prepared orders awaiting shipment
**5. Shipped**: Orders dispatched with tracking
**6. Delivered**: Completed deliveries with confirmation`
        },
        {
          title: 'Picking Process',
          content: `Efficient picking with location-based lists:

• Pick lists organized by warehouse location
• Barcode scanning for accuracy
• Batch picking for multiple orders
• Substitution handling for out-of-stock items
• Real-time inventory updates during picking`
        },
        {
          title: 'Packing and Shipping',
          content: `Professional packing and dispatch:

**Packing**:
• Multiple box support for large orders
• Weight and dimension tracking
• Packing slip generation
• Special handling instructions

**Shipping**:
• Carrier selection and booking
• Tracking number generation
• Delivery scheduling
• Customer notifications`
        },
        {
          title: 'Partial Orders and Cancellations',
          content: `Handle incomplete fulfillment scenarios:

**Partial Shipments**:
• Ship available items immediately
• Create back-orders for remaining items
• Separate tracking and billing

**Item Cancellations**:
• Cancel individual items from orders
• Automatic refund processing
• Inventory adjustment
• Customer communication`
        }
      ]
    }
  },
  {
    id: 'customer-management',
    title: 'Customer Management',
    icon: Users,
    color: 'text-blue-600',
    content: {
      overview: 'Manage B2C and B2B customer relationships with loyalty programs and credit management.',
      topics: [
        {
          title: 'B2C Customer Management',
          content: `Individual customer relationship management:

**Customer Profiles**:
• Personal information and contact details
• Purchase history and preferences
• Loyalty points balance and tier status
• Address book for deliveries

**Loyalty Program (King Coins)**:
• Points earned on every purchase
• Redemption for discounts and rewards
• Tier-based benefits (Bronze, Silver, Gold, Platinum)
• Referral bonuses and multi-level networking`
        },
        {
          title: 'B2B Retailer Management',
          content: `Business customer relationship management:

**Business Profiles**:
• Company information and licenses
• Contact person and billing details
• Credit terms and payment history
• Delivery preferences and schedules

**Credit Management**:
• Credit limits and payment terms
• Outstanding balance tracking
• Payment history and aging reports
• Credit approval workflows`
        },
        {
          title: 'Pay Later Wallets',
          content: `Credit facilities for trusted customers:

**Setup**:
• Credit limit assignment
• Validity period configuration
• KYC verification requirements
• Risk assessment and approval

**Management**:
• Transaction tracking and limits
• Payment collection and reconciliation
• Automatic limit renewal
• Overdue account management`
        },
        {
          title: 'Multi-Level Referral System',
          content: `Customer acquisition through referrals:

**Network Building**:
• Referral code generation
• Parent-child relationship tracking
• Multi-level commission structure
• Performance-based rewards

**Point Distribution**:
• Referrer earns points from referee purchases
• Configurable commission rates
• Lifetime value tracking
• Network growth analytics`
        }
      ]
    }
  },
  {
    id: 'delivery-management',
    title: 'Delivery Management',
    icon: Navigation,
    color: 'text-green-600',
    content: {
      overview: 'Manage last-mile delivery with in-house personnel and third-party courier agencies.',
      topics: [
        {
          title: 'Delivery Personnel Management',
          content: `Manage in-house delivery staff:

**Personnel Profiles**:
• Personal information and documents
• Vehicle assignment and capacity
• Performance tracking and ratings
• Earnings and payment tracking

**Route Optimization**:
• Geographic area assignment
• Delivery scheduling and batching
• Real-time tracking and updates
• Performance metrics and analytics`
        },
        {
          title: 'Courier Agency Integration',
          content: `Partner with third-party delivery services:

**Agency Management**:
• Service provider profiles and contracts
• Rate negotiation and service levels
• Performance tracking and ratings
• Invoice and payment management

**Order Assignment**:
• Automatic or manual assignment
• Capacity-based allocation
• Service level matching
• Cost optimization`
        },
        {
          title: 'Cash on Delivery (COD)',
          content: `Handle cash collection and reconciliation:

**Collection Process**:
• COD amount calculation and verification
• Collection confirmation and documentation
• Customer receipt generation
• Delivery completion tracking

**Reconciliation**:
• Daily cash collection reports
• Handover to store management
• Deposit tracking and verification
• Variance analysis and resolution`
        }
      ]
    }
  },
  {
    id: 'analytics',
    title: 'Analytics & Reports',
    icon: BarChart3,
    color: 'text-indigo-600',
    content: {
      overview: 'Comprehensive business intelligence with actionable insights across all operations.',
      topics: [
        {
          title: 'Sales Analytics',
          content: `Track sales performance and trends:

**Sales Metrics**:
• Revenue trends and growth rates
• Order volume and average order value
• Top-selling products and categories
• Seasonal patterns and forecasting

**Customer Analytics**:
• Customer acquisition and retention
• Purchase behavior and preferences
• Loyalty program effectiveness
• Lifetime value analysis`
        },
        {
          title: 'Inventory Analytics',
          content: `Optimize inventory management:

**Stock Analysis**:
• Inventory turnover rates
• Dead stock identification
• Velocity classification (ABC analysis)
• Reorder point optimization

**Vendor Performance**:
• Delivery reliability and quality
• Price competitiveness
• Lead time analysis
• Vendor scoring and ranking`
        },
        {
          title: 'Financial Analytics',
          content: `Monitor financial health and profitability:

**Profitability Analysis**:
• Gross margin by product/category
• Cost analysis and optimization
• Expense tracking and categorization
• ROI on marketing and promotions

**Cash Flow Management**:
• Accounts receivable aging
• Payment collection efficiency
• Working capital optimization
• Financial forecasting`
        }
      ]
    }
  }
];

export default function UserManual() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [activeTab, setActiveTab] = useState('overview');

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">RetailOS User Manual</h1>
                  <p className="text-gray-600">Complete guide to using the RetailOS platform</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
              <Badge className="bg-green-100 text-green-800">Version 2.0</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="col-span-3">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Table of Contents</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <nav className="space-y-1 p-4">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => setActiveSection(section.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                            activeSection === section.id
                              ? 'bg-blue-50 text-blue-600 border border-blue-200'
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${section.color}`} />
                          <span className="text-sm font-medium">{section.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <Card className="mb-8">
              <CardHeader className="border-b">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${
                    currentSection?.id === 'getting-started' ? 'from-blue-500 to-blue-600' :
                    currentSection?.id === 'pos-dashboard' ? 'from-emerald-500 to-emerald-600' :
                    currentSection?.id === 'inventory' ? 'from-purple-500 to-purple-600' :
                    currentSection?.id === 'purchase-orders' ? 'from-orange-500 to-orange-600' :
                    currentSection?.id === 'order-fulfillment' ? 'from-teal-500 to-teal-600' :
                    currentSection?.id === 'customer-management' ? 'from-blue-500 to-blue-600' :
                    currentSection?.id === 'delivery-management' ? 'from-green-500 to-green-600' :
                    'from-indigo-500 to-indigo-600'
                  }`}>
                    {currentSection && React.createElement(currentSection.icon, {
                      className: "w-6 h-6 text-white"
                    })}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{currentSection?.title}</CardTitle>
                    <p className="text-gray-600 mt-1">{currentSection?.content.overview}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="topics">Detailed Topics</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6">
                    <div className="prose max-w-none">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <div className="flex items-start gap-3">
                          <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-1">Module Overview</h4>
                            <p className="text-blue-800 text-sm">{currentSection?.content.overview}</p>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentSection?.content.topics.map((topic, index) => (
                          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">{topic.title}</h4>
                                <p className="text-sm text-gray-600 line-clamp-3">
                                  {topic.content.split('\n')[0]}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="topics" className="mt-6">
                    <div className="space-y-8">
                      {currentSection?.content.topics.map((topic, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">{topic.title}</h3>
                          <div className="prose max-w-none">
                            {topic.content.split('\n\n').map((paragraph, pIndex) => (
                              <div key={pIndex} className="mb-4">
                                {paragraph.includes('•') ? (
                                  <div>
                                    {paragraph.split('\n').map((line, lIndex) => {
                                      if (line.includes('**') && line.includes('**:')) {
                                        // Header with bold text
                                        const [bold, rest] = line.split('**:');
                                        return (
                                          <h4 key={lIndex} className="font-semibold text-gray-900 mt-4 mb-2">
                                            {bold.replace('**', '')}: {rest}
                                          </h4>
                                        );
                                      } else if (line.startsWith('•')) {
                                        // Bullet point
                                        return (
                                          <div key={lIndex} className="flex items-start gap-2 mb-1">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                                            <span className="text-gray-700">{line.substring(2)}</span>
                                          </div>
                                        );
                                      } else if (line.includes('**')) {
                                        // Bold text inline
                                        return (
                                          <p key={lIndex} className="text-gray-700 mb-2">
                                            {line.split('**').map((part, partIndex) => 
                                              partIndex % 2 === 1 ? 
                                                <strong key={partIndex}>{part}</strong> : 
                                                part
                                            )}
                                          </p>
                                        );
                                      } else if (line.trim()) {
                                        return <p key={lIndex} className="text-gray-700 mb-2">{line}</p>;
                                      }
                                      return null;
                                    })}
                                  </div>
                                ) : (
                                  <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <div>
                {sections.findIndex(s => s.id === activeSection) > 0 && (
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveSection(sections[sections.findIndex(s => s.id === activeSection) - 1].id)}
                    className="flex items-center gap-2"
                  >
                    Previous: {sections[sections.findIndex(s => s.id === activeSection) - 1].title}
                  </Button>
                )}
              </div>
              <div>
                {sections.findIndex(s => s.id === activeSection) < sections.length - 1 && (
                  <Button 
                    onClick={() => setActiveSection(sections[sections.findIndex(s => s.id === activeSection) + 1].id)}
                    className="flex items-center gap-2"
                  >
                    Next: {sections[sections.findIndex(s => s.id === activeSection) + 1].title}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
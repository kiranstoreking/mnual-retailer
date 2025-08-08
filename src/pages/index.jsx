import Layout from "./Layout.jsx";

import POSDashboard from "./POSDashboard";

import InventoryDashboard from "./InventoryDashboard";

import OrderDashboard from "./OrderDashboard";

import CRMDashboard from "./CRMDashboard";

import Dashboard from "./Dashboard";

import ProductDetail from "./ProductDetail";

import VendorDetail from "./VendorDetail";

import OrderDetail from "./OrderDetail";

import CustomerDetail from "./CustomerDetail";

import AnalyticsDashboard from "./AnalyticsDashboard";

import PurchaseOrderDashboard from "./PurchaseOrderDashboard";

import PurchaseOrderDetail from "./PurchaseOrderDetail";

import VendorDashboard from "./VendorDashboard";

import AddVendor from "./AddVendor";

import FulfillmentDashboard from "./FulfillmentDashboard";

import FulfillmentOrderDetail from "./FulfillmentOrderDetail";

import CreatePurchaseOrder from "./CreatePurchaseOrder";

import AddProduct from "./AddProduct";

import InventoryAudit from "./InventoryAudit";

import PriceManagement from "./PriceManagement";

import UserManagement from "./UserManagement";

import AddUser from "./AddUser";

import UserDetail from "./UserDetail";

import AddCustomer from "./AddCustomer";

import AccountSummary from "./AccountSummary";

import WarehouseLocation from "./WarehouseLocation";

import BinDetail from "./BinDetail";

import EditVendor from "./EditVendor";

import VendorStatement from "./VendorStatement";

import TicketManagementDashboard from "./TicketManagementDashboard";

import CreateTicket from "./CreateTicket";

import TicketDetail from "./TicketDetail";

import VendorReturnDetail from "./VendorReturnDetail";

import ReturnManagementDashboard from "./ReturnManagementDashboard";

import CreateProductReturn from "./CreateProductReturn";

import CreateVendorReturn from "./CreateVendorReturn";

import ProductReturnDetail from "./ProductReturnDetail";

import NetworkManagement from "./NetworkManagement";

import AddB2BRetailer from "./AddB2BRetailer";

import BrandDetail from "./BrandDetail";

import CategoryDetail from "./CategoryDetail";

import ContentManagementDashboard from "./ContentManagementDashboard";

import CreateOrEditDeal from "./CreateOrEditDeal";

import DealDetail from "./DealDetail";

import DealOrderDashboard from "./DealOrderDashboard";

import Products from "./Products";

import ProductView from "./ProductView";

import AddExpense from "./AddExpense";

import ExpenseDashboard from "./ExpenseDashboard";

import ExpenseDetail from "./ExpenseDetail";

import NetworkTiers from "./NetworkTiers";

import TierDetail from "./TierDetail";

import VelocitySegmentDetail from "./VelocitySegmentDetail";

import PayLaterWalletDashboard from "./PayLaterWalletDashboard";

import B2BOrderDetail from "./B2BOrderDetail";

import B2BRetailerDetail from "./B2BRetailerDetail";

import KingCoinsLoyaltyDashboard from "./KingCoinsLoyaltyDashboard";

import LastMileDeliveryDashboard from "./LastMileDeliveryDashboard";

import DeliveryPersonnelDetail from "./DeliveryPersonnelDetail";

import CourierAgencyDetail from "./CourierAgencyDetail";

import B2BOrderDetailNew from "./B2BOrderDetailNew";

import FulfillmentNewOrders from "./FulfillmentNewOrders";

import FulfillmentPickingOrders from "./FulfillmentPickingOrders";

import FulfillmentPackingOrders from "./FulfillmentPackingOrders";

import FulfillmentShippedOrders from "./FulfillmentShippedOrders";

import FulfillmentDeliveredOrders from "./FulfillmentDeliveredOrders";

import MultiLevelCustomerDashboard from "./MultiLevelCustomerDashboard";

import ParentCustomerProfile from "./ParentCustomerProfile";

import FulfillmentPendingOrders from "./FulfillmentPendingOrders";

import VendorReturnsApproved from "./VendorReturnsApproved";

import VendorReturnsPicking from "./VendorReturnsPicking";

import VendorReturnsPacking from "./VendorReturnsPacking";

import VendorReturnsReadyForPickup from "./VendorReturnsReadyForPickup";

import VendorReturnsShipped from "./VendorReturnsShipped";

import ParentCustomersView from "./ParentCustomersView";

import ReferredCustomersView from "./ReferredCustomersView";

import ReferralPointsView from "./ReferralPointsView";

import NetworkOrdersView from "./NetworkOrdersView";

import LoyaltyMembersView from "./LoyaltyMembersView";

import LoyaltyPointsEarnedView from "./LoyaltyPointsEarnedView";

import LoyaltyPointsRedeemedView from "./LoyaltyPointsRedeemedView";

import DeliveryPortalDashboard from "./DeliveryPortalDashboard";

import DeliveryPortalProfile from "./DeliveryPortalProfile";

import DeliveryPortalEarnings from "./DeliveryPortalEarnings";

import SupermarketProfile from "./SupermarketProfile";

import VendorPortalDashboard from "./VendorPortalDashboard";

import VendorPortalPOs from "./VendorPortalPOs";

import VendorPortalProducts from "./VendorPortalProducts";

import VendorPortalAddProduct from "./VendorPortalAddProduct";

import VendorPortalProfile from "./VendorPortalProfile";

import VendorPortalReturns from "./VendorPortalReturns";

import VendorPortalPayments from "./VendorPortalPayments";

import VendorPortalStatement from "./VendorPortalStatement";

import VendorPortalSubmitProduct from "./VendorPortalSubmitProduct";

import VendorPortalWarehouse from "./VendorPortalWarehouse";

import VendorPortalFulfillment from "./VendorPortalFulfillment";

import VendorPortalCustomers from "./VendorPortalCustomers";

import FAQ from "./FAQ";

import UserManual from "./UserManual";

import Manual from "./Manual";

import ManualWarehouse from "./ManualWarehouse";

import ManualProductContent from "./ManualProductContent";

import ManualOnboarding from "./ManualOnboarding";

import ManualInventory from "./ManualInventory";

import ManualPricing from "./ManualPricing";

import ManualOrders from "./ManualOrders";

import ManualFulfillment from "./ManualFulfillment";

import ManualLogistics from "./ManualLogistics";

import ManualExpenses from "./ManualExpenses";

import ManualVendorPortal from "./ManualVendorPortal";

import ManualVendorManagement from "./ManualVendorManagement";

import ManualPurchaseOrders from "./ManualPurchaseOrders";

import ManualNetworkManagement from "./ManualNetworkManagement";

import ManualPayLater from "./ManualPayLater";

import ManualReturnManagement from "./ManualReturnManagement";

import QAPortalDashboard from "./QAPortalDashboard";

import QAPurchaseOrderDetail from "./QAPurchaseOrderDetail";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    POSDashboard: POSDashboard,
    
    InventoryDashboard: InventoryDashboard,
    
    OrderDashboard: OrderDashboard,
    
    CRMDashboard: CRMDashboard,
    
    Dashboard: Dashboard,
    
    ProductDetail: ProductDetail,
    
    VendorDetail: VendorDetail,
    
    OrderDetail: OrderDetail,
    
    CustomerDetail: CustomerDetail,
    
    AnalyticsDashboard: AnalyticsDashboard,
    
    PurchaseOrderDashboard: PurchaseOrderDashboard,
    
    PurchaseOrderDetail: PurchaseOrderDetail,
    
    VendorDashboard: VendorDashboard,
    
    AddVendor: AddVendor,
    
    FulfillmentDashboard: FulfillmentDashboard,
    
    FulfillmentOrderDetail: FulfillmentOrderDetail,
    
    CreatePurchaseOrder: CreatePurchaseOrder,
    
    AddProduct: AddProduct,
    
    InventoryAudit: InventoryAudit,
    
    PriceManagement: PriceManagement,
    
    UserManagement: UserManagement,
    
    AddUser: AddUser,
    
    UserDetail: UserDetail,
    
    AddCustomer: AddCustomer,
    
    AccountSummary: AccountSummary,
    
    WarehouseLocation: WarehouseLocation,
    
    BinDetail: BinDetail,
    
    EditVendor: EditVendor,
    
    VendorStatement: VendorStatement,
    
    TicketManagementDashboard: TicketManagementDashboard,
    
    CreateTicket: CreateTicket,
    
    TicketDetail: TicketDetail,
    
    VendorReturnDetail: VendorReturnDetail,
    
    ReturnManagementDashboard: ReturnManagementDashboard,
    
    CreateProductReturn: CreateProductReturn,
    
    CreateVendorReturn: CreateVendorReturn,
    
    ProductReturnDetail: ProductReturnDetail,
    
    NetworkManagement: NetworkManagement,
    
    AddB2BRetailer: AddB2BRetailer,
    
    BrandDetail: BrandDetail,
    
    CategoryDetail: CategoryDetail,
    
    ContentManagementDashboard: ContentManagementDashboard,
    
    CreateOrEditDeal: CreateOrEditDeal,
    
    DealDetail: DealDetail,
    
    DealOrderDashboard: DealOrderDashboard,
    
    Products: Products,
    
    ProductView: ProductView,
    
    AddExpense: AddExpense,
    
    ExpenseDashboard: ExpenseDashboard,
    
    ExpenseDetail: ExpenseDetail,
    
    NetworkTiers: NetworkTiers,
    
    TierDetail: TierDetail,
    
    VelocitySegmentDetail: VelocitySegmentDetail,
    
    PayLaterWalletDashboard: PayLaterWalletDashboard,
    
    B2BOrderDetail: B2BOrderDetail,
    
    B2BRetailerDetail: B2BRetailerDetail,
    
    KingCoinsLoyaltyDashboard: KingCoinsLoyaltyDashboard,
    
    LastMileDeliveryDashboard: LastMileDeliveryDashboard,
    
    DeliveryPersonnelDetail: DeliveryPersonnelDetail,
    
    CourierAgencyDetail: CourierAgencyDetail,
    
    B2BOrderDetailNew: B2BOrderDetailNew,
    
    FulfillmentNewOrders: FulfillmentNewOrders,
    
    FulfillmentPickingOrders: FulfillmentPickingOrders,
    
    FulfillmentPackingOrders: FulfillmentPackingOrders,
    
    FulfillmentShippedOrders: FulfillmentShippedOrders,
    
    FulfillmentDeliveredOrders: FulfillmentDeliveredOrders,
    
    MultiLevelCustomerDashboard: MultiLevelCustomerDashboard,
    
    ParentCustomerProfile: ParentCustomerProfile,
    
    FulfillmentPendingOrders: FulfillmentPendingOrders,
    
    VendorReturnsApproved: VendorReturnsApproved,
    
    VendorReturnsPicking: VendorReturnsPicking,
    
    VendorReturnsPacking: VendorReturnsPacking,
    
    VendorReturnsReadyForPickup: VendorReturnsReadyForPickup,
    
    VendorReturnsShipped: VendorReturnsShipped,
    
    ParentCustomersView: ParentCustomersView,
    
    ReferredCustomersView: ReferredCustomersView,
    
    ReferralPointsView: ReferralPointsView,
    
    NetworkOrdersView: NetworkOrdersView,
    
    LoyaltyMembersView: LoyaltyMembersView,
    
    LoyaltyPointsEarnedView: LoyaltyPointsEarnedView,
    
    LoyaltyPointsRedeemedView: LoyaltyPointsRedeemedView,
    
    DeliveryPortalDashboard: DeliveryPortalDashboard,
    
    DeliveryPortalProfile: DeliveryPortalProfile,
    
    DeliveryPortalEarnings: DeliveryPortalEarnings,
    
    SupermarketProfile: SupermarketProfile,
    
    VendorPortalDashboard: VendorPortalDashboard,
    
    VendorPortalPOs: VendorPortalPOs,
    
    VendorPortalProducts: VendorPortalProducts,
    
    VendorPortalAddProduct: VendorPortalAddProduct,
    
    VendorPortalProfile: VendorPortalProfile,
    
    VendorPortalReturns: VendorPortalReturns,
    
    VendorPortalPayments: VendorPortalPayments,
    
    VendorPortalStatement: VendorPortalStatement,
    
    VendorPortalSubmitProduct: VendorPortalSubmitProduct,
    
    VendorPortalWarehouse: VendorPortalWarehouse,
    
    VendorPortalFulfillment: VendorPortalFulfillment,
    
    VendorPortalCustomers: VendorPortalCustomers,
    
    FAQ: FAQ,
    
    UserManual: UserManual,
    
    Manual: Manual,
    
    ManualWarehouse: ManualWarehouse,
    
    ManualProductContent: ManualProductContent,
    
    ManualOnboarding: ManualOnboarding,
    
    ManualInventory: ManualInventory,
    
    ManualPricing: ManualPricing,
    
    ManualOrders: ManualOrders,
    
    ManualFulfillment: ManualFulfillment,
    
    ManualLogistics: ManualLogistics,
    
    ManualExpenses: ManualExpenses,
    
    ManualVendorPortal: ManualVendorPortal,
    
    ManualVendorManagement: ManualVendorManagement,
    
    ManualPurchaseOrders: ManualPurchaseOrders,
    
    ManualNetworkManagement: ManualNetworkManagement,
    
    ManualPayLater: ManualPayLater,
    
    ManualReturnManagement: ManualReturnManagement,
    
    QAPortalDashboard: QAPortalDashboard,
    
    QAPurchaseOrderDetail: QAPurchaseOrderDetail,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<POSDashboard />} />
                
                
                <Route path="/POSDashboard" element={<POSDashboard />} />
                
                <Route path="/InventoryDashboard" element={<InventoryDashboard />} />
                
                <Route path="/OrderDashboard" element={<OrderDashboard />} />
                
                <Route path="/CRMDashboard" element={<CRMDashboard />} />
                
                <Route path="/Dashboard" element={<Dashboard />} />
                
                <Route path="/ProductDetail" element={<ProductDetail />} />
                
                <Route path="/VendorDetail" element={<VendorDetail />} />
                
                <Route path="/OrderDetail" element={<OrderDetail />} />
                
                <Route path="/CustomerDetail" element={<CustomerDetail />} />
                
                <Route path="/AnalyticsDashboard" element={<AnalyticsDashboard />} />
                
                <Route path="/PurchaseOrderDashboard" element={<PurchaseOrderDashboard />} />
                
                <Route path="/PurchaseOrderDetail" element={<PurchaseOrderDetail />} />
                
                <Route path="/VendorDashboard" element={<VendorDashboard />} />
                
                <Route path="/AddVendor" element={<AddVendor />} />
                
                <Route path="/FulfillmentDashboard" element={<FulfillmentDashboard />} />
                
                <Route path="/FulfillmentOrderDetail" element={<FulfillmentOrderDetail />} />
                
                <Route path="/CreatePurchaseOrder" element={<CreatePurchaseOrder />} />
                
                <Route path="/AddProduct" element={<AddProduct />} />
                
                <Route path="/InventoryAudit" element={<InventoryAudit />} />
                
                <Route path="/PriceManagement" element={<PriceManagement />} />
                
                <Route path="/UserManagement" element={<UserManagement />} />
                
                <Route path="/AddUser" element={<AddUser />} />
                
                <Route path="/UserDetail" element={<UserDetail />} />
                
                <Route path="/AddCustomer" element={<AddCustomer />} />
                
                <Route path="/AccountSummary" element={<AccountSummary />} />
                
                <Route path="/WarehouseLocation" element={<WarehouseLocation />} />
                
                <Route path="/BinDetail" element={<BinDetail />} />
                
                <Route path="/EditVendor" element={<EditVendor />} />
                
                <Route path="/VendorStatement" element={<VendorStatement />} />
                
                <Route path="/TicketManagementDashboard" element={<TicketManagementDashboard />} />
                
                <Route path="/CreateTicket" element={<CreateTicket />} />
                
                <Route path="/TicketDetail" element={<TicketDetail />} />
                
                <Route path="/VendorReturnDetail" element={<VendorReturnDetail />} />
                
                <Route path="/ReturnManagementDashboard" element={<ReturnManagementDashboard />} />
                
                <Route path="/CreateProductReturn" element={<CreateProductReturn />} />
                
                <Route path="/CreateVendorReturn" element={<CreateVendorReturn />} />
                
                <Route path="/ProductReturnDetail" element={<ProductReturnDetail />} />
                
                <Route path="/NetworkManagement" element={<NetworkManagement />} />
                
                <Route path="/AddB2BRetailer" element={<AddB2BRetailer />} />
                
                <Route path="/BrandDetail" element={<BrandDetail />} />
                
                <Route path="/CategoryDetail" element={<CategoryDetail />} />
                
                <Route path="/ContentManagementDashboard" element={<ContentManagementDashboard />} />
                
                <Route path="/CreateOrEditDeal" element={<CreateOrEditDeal />} />
                
                <Route path="/DealDetail" element={<DealDetail />} />
                
                <Route path="/DealOrderDashboard" element={<DealOrderDashboard />} />
                
                <Route path="/Products" element={<Products />} />
                
                <Route path="/ProductView" element={<ProductView />} />
                
                <Route path="/AddExpense" element={<AddExpense />} />
                
                <Route path="/ExpenseDashboard" element={<ExpenseDashboard />} />
                
                <Route path="/ExpenseDetail" element={<ExpenseDetail />} />
                
                <Route path="/NetworkTiers" element={<NetworkTiers />} />
                
                <Route path="/TierDetail" element={<TierDetail />} />
                
                <Route path="/VelocitySegmentDetail" element={<VelocitySegmentDetail />} />
                
                <Route path="/PayLaterWalletDashboard" element={<PayLaterWalletDashboard />} />
                
                <Route path="/B2BOrderDetail" element={<B2BOrderDetail />} />
                
                <Route path="/B2BRetailerDetail" element={<B2BRetailerDetail />} />
                
                <Route path="/KingCoinsLoyaltyDashboard" element={<KingCoinsLoyaltyDashboard />} />
                
                <Route path="/LastMileDeliveryDashboard" element={<LastMileDeliveryDashboard />} />
                
                <Route path="/DeliveryPersonnelDetail" element={<DeliveryPersonnelDetail />} />
                
                <Route path="/CourierAgencyDetail" element={<CourierAgencyDetail />} />
                
                <Route path="/B2BOrderDetailNew" element={<B2BOrderDetailNew />} />
                
                <Route path="/FulfillmentNewOrders" element={<FulfillmentNewOrders />} />
                
                <Route path="/FulfillmentPickingOrders" element={<FulfillmentPickingOrders />} />
                
                <Route path="/FulfillmentPackingOrders" element={<FulfillmentPackingOrders />} />
                
                <Route path="/FulfillmentShippedOrders" element={<FulfillmentShippedOrders />} />
                
                <Route path="/FulfillmentDeliveredOrders" element={<FulfillmentDeliveredOrders />} />
                
                <Route path="/MultiLevelCustomerDashboard" element={<MultiLevelCustomerDashboard />} />
                
                <Route path="/ParentCustomerProfile" element={<ParentCustomerProfile />} />
                
                <Route path="/FulfillmentPendingOrders" element={<FulfillmentPendingOrders />} />
                
                <Route path="/VendorReturnsApproved" element={<VendorReturnsApproved />} />
                
                <Route path="/VendorReturnsPicking" element={<VendorReturnsPicking />} />
                
                <Route path="/VendorReturnsPacking" element={<VendorReturnsPacking />} />
                
                <Route path="/VendorReturnsReadyForPickup" element={<VendorReturnsReadyForPickup />} />
                
                <Route path="/VendorReturnsShipped" element={<VendorReturnsShipped />} />
                
                <Route path="/ParentCustomersView" element={<ParentCustomersView />} />
                
                <Route path="/ReferredCustomersView" element={<ReferredCustomersView />} />
                
                <Route path="/ReferralPointsView" element={<ReferralPointsView />} />
                
                <Route path="/NetworkOrdersView" element={<NetworkOrdersView />} />
                
                <Route path="/LoyaltyMembersView" element={<LoyaltyMembersView />} />
                
                <Route path="/LoyaltyPointsEarnedView" element={<LoyaltyPointsEarnedView />} />
                
                <Route path="/LoyaltyPointsRedeemedView" element={<LoyaltyPointsRedeemedView />} />
                
                <Route path="/DeliveryPortalDashboard" element={<DeliveryPortalDashboard />} />
                
                <Route path="/DeliveryPortalProfile" element={<DeliveryPortalProfile />} />
                
                <Route path="/DeliveryPortalEarnings" element={<DeliveryPortalEarnings />} />
                
                <Route path="/SupermarketProfile" element={<SupermarketProfile />} />
                
                <Route path="/VendorPortalDashboard" element={<VendorPortalDashboard />} />
                
                <Route path="/VendorPortalPOs" element={<VendorPortalPOs />} />
                
                <Route path="/VendorPortalProducts" element={<VendorPortalProducts />} />
                
                <Route path="/VendorPortalAddProduct" element={<VendorPortalAddProduct />} />
                
                <Route path="/VendorPortalProfile" element={<VendorPortalProfile />} />
                
                <Route path="/VendorPortalReturns" element={<VendorPortalReturns />} />
                
                <Route path="/VendorPortalPayments" element={<VendorPortalPayments />} />
                
                <Route path="/VendorPortalStatement" element={<VendorPortalStatement />} />
                
                <Route path="/VendorPortalSubmitProduct" element={<VendorPortalSubmitProduct />} />
                
                <Route path="/VendorPortalWarehouse" element={<VendorPortalWarehouse />} />
                
                <Route path="/VendorPortalFulfillment" element={<VendorPortalFulfillment />} />
                
                <Route path="/VendorPortalCustomers" element={<VendorPortalCustomers />} />
                
                <Route path="/FAQ" element={<FAQ />} />
                
                <Route path="/UserManual" element={<UserManual />} />
                
                <Route path="/Manual" element={<Manual />} />
                
                <Route path="/ManualWarehouse" element={<ManualWarehouse />} />
                
                <Route path="/ManualProductContent" element={<ManualProductContent />} />
                
                <Route path="/ManualOnboarding" element={<ManualOnboarding />} />
                
                <Route path="/ManualInventory" element={<ManualInventory />} />
                
                <Route path="/ManualPricing" element={<ManualPricing />} />
                
                <Route path="/ManualOrders" element={<ManualOrders />} />
                
                <Route path="/ManualFulfillment" element={<ManualFulfillment />} />
                
                <Route path="/ManualLogistics" element={<ManualLogistics />} />
                
                <Route path="/ManualExpenses" element={<ManualExpenses />} />
                
                <Route path="/ManualVendorPortal" element={<ManualVendorPortal />} />
                
                <Route path="/ManualVendorManagement" element={<ManualVendorManagement />} />
                
                <Route path="/ManualPurchaseOrders" element={<ManualPurchaseOrders />} />
                
                <Route path="/ManualNetworkManagement" element={<ManualNetworkManagement />} />
                
                <Route path="/ManualPayLater" element={<ManualPayLater />} />
                
                <Route path="/ManualReturnManagement" element={<ManualReturnManagement />} />
                
                <Route path="/QAPortalDashboard" element={<QAPortalDashboard />} />
                
                <Route path="/QAPurchaseOrderDetail" element={<QAPurchaseOrderDetail />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}
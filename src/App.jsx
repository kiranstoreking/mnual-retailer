import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Manual from './pages/Manual.jsx';
import ManualExpenses from './pages/ManualExpenses.jsx';
import ManualFulfillment from './pages/ManualFulfillment.jsx';
import ManualInventory from './pages/ManualInventory.jsx';
import ManualLogistics from './pages/ManualLogistics.jsx';
import ManualNetworkManagement from './pages/ManualNetworkManagement.jsx';
import ManualOnboarding from './pages/ManualOnboarding.jsx';
import ManualOrders from './pages/ManualOrders.jsx';
import ManualPayLater from './pages/ManualPayLater.jsx';
import ManualPricing from './pages/ManualPricing.jsx';
import ManualProductContent from './pages/ManualProductContent.jsx';
import ManualPurchaseOrders from './pages/ManualPurchaseOrders.jsx';
import ManualReturnManagement from './pages/ManualReturnManagement.jsx';
import ManualVendorManagement from './pages/ManualVendorManagement.jsx';
import ManualVendorPortal from './pages/ManualVendorPortal.jsx';
import ManualWarehouse from './pages/ManualWarehouse.jsx';
import ScrollToTop from './components/shared/ScrollToTop.jsx';

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <div className="min-h-screen bg-gray-50">
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Manual />} />
              <Route path="/manual" element={<Manual />} />
              <Route path="/manual-expenses" element={<ManualExpenses />} />
              <Route path="/manual-fulfillment" element={<ManualFulfillment />} />
              <Route path="/manual-inventory" element={<ManualInventory />} />
              <Route path="/manual-logistics" element={<ManualLogistics />} />
              <Route path="/manual-network-management" element={<ManualNetworkManagement />} />
              <Route path="/manual-onboarding" element={<ManualOnboarding />} />
              <Route path="/manual-orders" element={<ManualOrders />} />
              <Route path="/manual-pay-later" element={<ManualPayLater />} />
              <Route path="/manual-pricing" element={<ManualPricing />} />
              <Route path="/manual-product-content" element={<ManualProductContent />} />
              <Route path="/manual-purchase-orders" element={<ManualPurchaseOrders />} />
              <Route path="/manual-return-management" element={<ManualReturnManagement />} />
              <Route path="/manual-vendor-management" element={<ManualVendorManagement />} />
              <Route path="/manual-vendor-portal" element={<ManualVendorPortal />} />
              <Route path="/manual-warehouse" element={<ManualWarehouse />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;







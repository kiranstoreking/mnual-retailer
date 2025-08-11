import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Package, Plus, Search, Star, Gift, Tag, Users, Building2, Grid, List, Eye, Edit, Filter, ArrowUpDown, Calendar, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import useManualLanguage from '../components/shared/useManualLanguage';
import LanguageSelector from '../components/shared/LanguageSelector';

const translations = {
  en: {
    pageTitle: "Product & Content Management Manual",
    backToManual: "Back to Manual",
    description: "Master product catalog management, deal creation, brand organization, and content optimization to drive sales and improve customer experience.",
    step1Title: "Content Management Dashboard Overview",
    step1Intro: "The Content Management Dashboard is your central hub for managing all product-related content, deals, brands, and categories. It provides comprehensive tools for catalog management and promotional content creation.",
    step1Description: "Navigate to the Content Management Dashboard to access all product-related management tools. This dashboard serves as your control center for catalog management, promotional content, and deal creation.",
    step2Title: "Product Catalog Management",
    step2Intro: "Managing your product catalog is fundamental to your retail operations. The system provides both list and card views with comprehensive filtering and search capabilities.",
    step2Description: "The Product Catalog tab gives you complete control over your inventory listings. You can view products in both table and card formats, with advanced filtering and search capabilities.",
    step3Title: "Deal Management System",
    step3Intro: "Create and manage product deals including normal bundles and BOGO (Buy One Get One) offers. The deal system helps increase average order value and customer satisfaction.",
    step3Description: "The Deal Management tab allows you to create compelling product bundles and promotional offers. You can set up normal deals or BOGO (Buy One Get One) promotions.",
    step4Title: "Brand and Category Organization",
    step4Intro: "Proper organization of brands and categories improves navigation, filtering, and creates better customer experience. The system supports hierarchical category structures.",
    step4Description: "Organize your products effectively using the brand and category management tools. This helps with navigation, filtering, and creating a better shopping experience.",
    step5Title: "Product Approval Workflow",
    step5Intro: "For businesses working with vendors, the product approval system ensures quality control and proper vetting of new products before they go live.",
    step5Description: "The Product Approval tab manages vendor-submitted products, ensuring quality control before products become available to customers.",
    nextStepsTitle: "Content Management Complete!",
    nextStepsDescription: "With your product catalog and deals set up, you can now move to Inventory Management to start managing stock levels, vendors, and purchase orders.",
    nextStepsButton: "Continue to Inventory Management",
  },
  kn: {
    pageTitle: "ಉತ್ಪನ್ನ ಮತ್ತು ವಿಷಯ ನಿರ್ವಹಣೆ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ಮಾರಾಟವನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಗ್ರಾಹಕರ ಅನುಭವವನ್ನು ಸುಧಾರಿಸಲು ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ನಿರ್ವಹಣೆ, ಡೀಲ್ ರಚನೆ, ಬ್ರಾಂಡ್ ಸಂಘಟನೆ ಮತ್ತು ವಿಷಯ ಆಪ್ಟಿಮೈಸೇಶನ್ ಅನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ.",
    step1Title: "ವಿಷಯ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ವಿಷಯ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಎಲ್ಲಾ ಉತ್ಪನ್ನ-ಸಂಬಂಧಿತ ವಿಷಯ, ಡೀಲ್‌ಗಳು, ಬ್ರಾಂಡ್‌ಗಳು ಮತ್ತು ವರ್ಗಗಳನ್ನು ನಿರ್ವಹಿಸುವ ನಿಮ್ಮ ಕೇಂದ್ರ ಕೇಂದ್ರವಾಗಿದೆ.",
    step1Description: "ಎಲ್ಲಾ ಉತ್ಪನ್ನ-ಸಂಬಂಧಿತ ನಿರ್ವಹಣಾ ಸಾಧನಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ವಿಷಯ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ.",
    step2Title: "ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ನಿರ್ವಹಣೆ",
    step2Intro: "ನಿಮ್ಮ ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ಅನ್ನು ನಿರ್ವಹಿಸುವುದು ನಿಮ್ಮ ಚಿಲ್ಲರೆ ಕಾರ್ಯಾಚರಣೆಗಳಿಗೆ ಮೂಲಭೂತವಾಗಿದೆ.",
    step2Description: "ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ಟ್ಯಾಬ್ ನಿಮ್ಮ ಇನ್ವೆಂಟರಿ ಪಟ್ಟಿಗಳ ಮೇಲೆ ಸಂಪೂರ್ಣ ನಿಯಂತ್ರಣವನ್ನು ನೀಡುತ್ತದೆ.",
    step3Title: "ಡೀಲ್ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ",
    step3Intro: "ಸಾಮಾನ್ಯ ಬಂಡಲ್‌ಗಳು ಮತ್ತು BOGO (ಒಂದನ್ನು ಖರೀದಿಸಿ ಒಂದನ್ನು ಪಡೆಯಿರಿ) ಆಫರ್‌ಗಳು ಸೇರಿದಂತೆ ಉತ್ಪನ್ನ ಡೀಲ್‌ಗಳನ್ನು ರಚಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.",
    step3Description: "ಡೀಲ್ ನಿರ್ವಹಣಾ ಟ್ಯಾಬ್ ನಿಮಗೆ ಆಕರ್ಷಕ ಉತ್ಪನ್ನ ಬಂಡಲ್‌ಗಳು ಮತ್ತು ಪ್ರಚಾರದ ಆಫರ್‌ಗಳನ್ನು ರಚಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.",
    step4Title: "ಬ್ರಾಂಡ್ ಮತ್ತು ವರ್ಗ ಸಂಘಟನೆ",
    step4Intro: "ಬ್ರಾಂಡ್‌ಗಳು ಮತ್ತು ವರ್ಗಗಳ ಸರಿಯಾದ ಸಂಘಟನೆಯು ನ್ಯಾವಿಗೇಶನ್, ಫಿಲ್ಟರಿಂಗ್ ಅನ್ನು ಸುಧಾರಿಸುತ್ತದೆ ಮತ್ತು ಉತ್ತಮ ಗ್ರಾಹಕ ಅನುಭವವನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ.",
    step4Description: "ಬ್ರಾಂಡ್ ಮತ್ತು ವರ್ಗ ನಿರ್ವಹಣಾ ಸಾಧನಗಳನ್ನು ಬಳಸಿಕೊಂಡು ನಿಮ್ಮ ಉತ್ಪನ್ನಗಳನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಸಂಘಟಿಸಿ.",
    step5Title: "ಉತ್ಪನ್ನ ಅನುಮೋದನೆ ಕೆಲಸದ ಹರಿವು",
    step5Intro: "ಮಾರಾಟಗಾರರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವ ವ್ಯವಹಾರಗಳಿಗೆ, ಉತ್ಪನ್ನ ಅನುಮೋದನೆ ವ್ಯವಸ್ಥೆಯು ಉತ್ಪನ್ನಗಳು ಲೈವ್ ಆಗುವ ಮೊದಲು ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ ಮತ್ತು ಸರಿಯಾದ ಪರೀಕ್ಷೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.",
    step5Description: "ಉತ್ಪನ್ನ ಅನುಮೋದನೆ ಟ್ಯಾಬ್ ಮಾರಾಟಗಾರರು ಸಲ್ಲಿಸಿದ ಉತ್ಪನ್ನಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.",
    nextStepsTitle: "ವಿಷಯ ನಿರ್ವಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನಿಮ್ಮ ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ಮತ್ತು ಡೀಲ್‌ಗಳನ್ನು ಹೊಂದಿಸಿದ ನಂತರ, ನೀವು ಈಗ ಸ್ಟಾಕ್ ಮಟ್ಟಗಳು, ಮಾರಾಟಗಾರರು ಮತ್ತು ಖರೀದಿ ಆದೇಶಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಪ್ರಾರಂಭಿಸಲು ಇನ್ವೆಂಟರಿ ನಿರ್ವಹಣೆಗೆ ತೆರಳಬಹುದು.",
    nextStepsButton: "ಇನ್ವೆಂಟರಿ ನಿರ್ವಹಣೆಗೆ ಮುಂದುವರಿಯಿರಿ",
  },
};

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
  <div className="flex items-start gap-4 mt-8  w-full">
    <div className="flex-shrink-0 w-8 h-8  bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow min-w-0">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-6 sm:mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base -ml-12 sm:ml-0">
        {children}
      </div>
    </div>
  </div>
);

export default function ManualProductContent() {
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
                <Package className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                {t('pageTitle')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                {t('description')}
              </p>
            </div>

            <section className="space-y-10">
              <Step number="1" title={t('step1Title')}>
                <p>
                  {t('step1Intro')}
                </p>
                <p>
                  {t('step1Description')}
                </p>

                <Screenshot title="Content Management Dashboard Interface">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-slate-50 rounded-lg">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Content Management</h2>
                        <p className="text-slate-600">Manage products, deals, brands, and promotional content</p>
                      </div>
                      <div className="flex gap-3 flex-col sm:flex-row">
                        <Button variant="outline">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Analytics
                        </Button>
                        <Button>
                          <Plus className="w-4 h-4 mr-2" />
                          Add Product
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 bg-white border rounded-lg text-center">
                        <Package className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                        <h3 className="font-semibold">Products</h3>
                        <p className="text-2xl font-bold text-blue-600">1,247</p>
                      </div>
                      <div className="p-4 bg-white border rounded-lg text-center">
                        <Gift className="w-8 h-8 mx-auto mb-2 text-green-600" />
                        <h3 className="font-semibold">Active Deals</h3>
                        <p className="text-2xl font-bold text-green-600">23</p>
                      </div>
                      <div className="p-4 bg-white border rounded-lg text-center">
                        <Building2 className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                        <h3 className="font-semibold">Brands</h3>
                        <p className="text-2xl font-bold text-purple-600">89</p>
                      </div>
                      <div className="p-4 bg-white border rounded-lg text-center">
                        <Tag className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                        <h3 className="font-semibold">Categories</h3>
                        <p className="text-2xl font-bold text-orange-600">34</p>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="2" title={t('step2Title')}>
                <p>{t('step2Intro')}</p>
                <p>{t('step2Description')}</p>

                <Screenshot title="Product Catalog - Table View">
                  <div className='overflow-x-auto  [-webkit-overflow-scrolling:touch]'>
                    <div className="space-y-4">
                      {/* Filters & Actions */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                          <Input placeholder="Search products..." className="pl-9" />
                        </div>
                        <Button variant="outline">
                          <Filter className="w-4 h-4 mr-2" />
                          Filters
                        </Button>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <List className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Grid className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Table wrapper - only this scrolls */}
                      <div className="border rounded-lg">
                        <div className="overflow-x-auto sm:overflow-x-visible">
                          <table className="min-w-[800px] w-full">
                            <thead className="bg-slate-50">
                              <tr>
                                <th className="text-left p-3 font-medium">Product</th>
                                <th className="text-left p-3 font-medium">Brand</th>
                                <th className="text-left p-3 font-medium">Category</th>
                                <th className="text-right p-3 font-medium">B2C Price</th>
                                <th className="text-right p-3 font-medium">Stock</th>
                                <th className="text-center p-3 font-medium">Status</th>
                                <th className="text-center p-3 font-medium">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="p-3">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-100 rounded"></div>
                                    <div>
                                      <p className="font-medium">Organic Apples</p>
                                      <p className="text-sm text-slate-500">SKU: APL-001</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3">Fresh Farm</td>
                                <td className="p-3">Fruits</td>
                                <td className="p-3 text-right">₹120.00</td>
                                <td className="p-3 text-right">45</td>
                                <td className="p-3 text-center">
                                  <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                                </td>
                                <td className="p-3 text-center">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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

                <Screenshot title="Deal Management Interface">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Active Deals</h3>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Deal
                      </Button>
                    </div>

                    <div className="grid gap-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">Fresh Fruit Bundle</h4>
                            <p className="text-sm text-slate-500">Bundle Deal • 3 Products</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800">Active</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="text-slate-500">B2C Price: </span>
                            <span className="font-medium">₹299</span>
                            <span className="text-slate-400 line-through ml-2">₹350</span>
                          </div>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">Buy 2 Get 1 Free - Chips</h4>
                            <p className="text-sm text-slate-500">BOGO Deal • Snacks Category</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="text-slate-500">Valid until: </span>
                            <span className="font-medium">Dec 31, 2024</span>
                          </div>
                          <Button variant="outline" size="sm">
                            <BarChart3 className="w-4 h-4 mr-1" />
                            Analytics
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

                <Screenshot title="Brand and Category Management">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Brand Management</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded"></div>
                            <span className="font-medium">Fresh Farm</span>
                          </div>
                          <span className="text-sm text-slate-500">234 products</span>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded"></div>
                            <span className="font-medium">Organic Valley</span>
                          </div>
                          <span className="text-sm text-slate-500">89 products</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Category Management</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Tag className="w-5 h-5 text-orange-600" />
                            <span className="font-medium">Fruits & Vegetables</span>
                          </div>
                          <span className="text-sm text-slate-500">456 products</span>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Tag className="w-5 h-5 text-purple-600" />
                            <span className="font-medium">Dairy Products</span>
                          </div>
                          <span className="text-sm text-slate-500">123 products</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="5" title={t('step5Title')}>
                <p>
                  {t('step5Intro')}
                </p>
                <p>
                  {t('step5Description')}
                </p>

                <Screenshot title="Product Approval Workflow">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Pending Approvals</h3>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">3 Pending</Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="border rounded-lg p-4">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-start">
                          <div>
                            <h4 className="font-semibold">Premium Honey</h4>
                            <p className="text-sm text-slate-500">Submitted by: Golden Harvest Foods</p>
                            <p className="text-sm text-slate-500">Category: Condiments & Sauces</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              Review
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <div className="mt-12 p-6 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">{t('nextStepsTitle')}</h3>
                <p className="text-purple-700 mb-4">
                  {t('nextStepsDescription')}
                </p>
                <Link to={createPageUrl('ManualInventory')} className="inline-block">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    {t('nextStepsButton')}
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Button>
                </Link>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
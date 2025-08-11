
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft, Home, Building, User, Banknote, Shield, PlusCircle, Users,
  MapPin, Upload, Camera, FileText, CheckCircle, Clock, Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import useManualLanguage from '../components/shared/useManualLanguage';
import LanguageSelector from '../components/shared/LanguageSelector';

const translations = {
  en: {
    pageTitle: "Supermarket Onboarding Manual",
    backToManual: "Back to Manual",
    description: "Get started with RetailOS by setting up your store profile, configuring user accounts, and preparing your supermarket for efficient operations.",
    nextStepsTitle: "Onboarding Complete!",
    nextStepsDescription: "Your supermarket is now set up and ready for operations. Next, configure your warehouse layout for efficient inventory management.",
    nextStepsButton: "Continue to Warehouse Management",
  },
  kn: {
    pageTitle: "ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ನಿಮ್ಮ ಸ್ಟೋರ್ ಪ್ರೊಫೈಲ್ ಅನ್ನು ಸ್ಥಾಪಿಸುವ ಮೂಲಕ, ಬಳಕೆದಾರ ಖಾತೆಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡುವ ಮೂಲಕ, ಮತ್ತು ದಕ್ಷ ಕಾರ್ಯಾಚರಣೆಗಳಿಗಾಗಿ ನಿಮ್ಮ ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಅನ್ನು ಸಿದ್ಧಪಡಿಸುವ ಮೂಲಕ RetailOS ನೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಿ.",
    nextStepsTitle: "ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನಿಮ್ಮ ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಈಗ ಹೊಂದಿಸಲ್ಪಟ್ಟಿದೆ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಗಳಿಗೆ ಸಿದ್ಧವಾಗಿದೆ. ಮುಂದೆ, ದಕ್ಷ ದಾಸ್ತಾನು ನಿರ್ವಹಣೆಗಾಗಿ ನಿಮ್ಮ ಗೋದಾಮಿನ ವಿನ್ಯಾಸವನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ.",
    nextStepsButton: "ವೇರ್‌ಹೌಸ್ ನಿರ್ವಹಣೆಗೆ ಮುಂದುವರಿಯಿರಿ",
  },
};

const Screenshot = ({ title, children }) => (
  <div className="my-6 border bg-slate-100 rounded-xl shadow-md overflow-hidden">
    <div className="bg-slate-200 px-4 py-2 border-b border-slate-300">
      <h5 className="font-semibold text-slate-700">{title}</h5>
    </div>
    <div className="p-4 md:p-6 bg-white overflow-x-auto">
      {children}
    </div>
  </div>
);

const Step = ({ number, title, children }) => (
  <div className="flex items-start gap-4 mt-8 w-full">
    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow min-w-0">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-6 sm:mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base -ml-12 sm:ml-0">
        {children}
      </div>
    </div>
  </div>
);

export default function ManualOnboarding() {
  const [language] = useManualLanguage();
  
  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

    return (
        <div className="bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
            <div className="mb-6 flex justify-between items-center">
                <Link to={createPageUrl('Manual')}>
                    <Button variant="outline">
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
                        <Home className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                        {t('pageTitle')}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600">
                        {t('description')}
                    </p>
                </div>
                
                <section className="space-y-10">
                  <Step number="1" title="Accessing Supermarket Profile">
                    <p>
                      Your first step is to navigate to the Supermarket Profile section. This is where you'll configure all the essential business information that will be used throughout the system for invoices, purchase orders, and customer communications.
                    </p>
                    
                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. Navigation to Profile</h6>
                    <Screenshot title="Accessing Supermarket Profile from Sidebar">
                      <div className="space-y-4">
                        <div className="w-64 bg-white border rounded-lg shadow-sm">
                          <div className="p-4 border-b">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                <Home className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className="font-bold text-slate-900">RetailOS</h3>
                                <p className="text-xs text-slate-500">Supermarket Management</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-2 space-y-1">
                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">
                              <Building className="w-4 h-4" />
                              <span className="text-sm">Inventory</span>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
                              <Building className="w-4 h-4" />
                              <span className="text-sm font-medium">Supermarket Profile</span>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">
                              <Users className="w-4 h-4" />
                              <span className="text-sm">User Management</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600">Click on "Supermarket Profile" in the main sidebar to access your store configuration.</p>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. Profile Dashboard Overview</h6>
                    <Screenshot title="Supermarket Profile Dashboard">
                      <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <div>
                            <h2 className="text-xl font-bold text-slate-800">Supermarket Profile</h2>
                            <p className="text-sm text-slate-500">Manage all your store and business information</p>
                          </div>
                          <div className="flex gap-2">
                            <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
                            <Button variant="outline">Reset</Button>
                          </div>
                        </div>
                        
                        {/* Profile completion indicator */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-blue-800">Profile Completion</span>
                            <span className="text-sm font-bold text-blue-600">75%</span>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                          </div>
                          <p className="text-xs text-blue-700 mt-2">Complete your bank details to reach 100%</p>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <Step number="2" title="Store Information Setup">
                    <p>
                      The Store Information section contains your business identity details. This information appears on all generated documents including invoices, purchase orders, and official communications.
                    </p>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. Basic Store Details Form</h6>
                    <Screenshot title="Store Information Form">
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <Building className="w-5 h-5 text-blue-600"/>
                          Store Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Store Name *</label>
                            <Input defaultValue="King's Supermarket" className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Legal Business Name *</label>
                            <Input defaultValue="King's Retail Pvt. Ltd." className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">GST Number *</label>
                            <Input defaultValue="29AABCU9567M1Z5" className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">PAN Number</label>
                            <Input defaultValue="AABCU9567M" className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">FSSAI License</label>
                            <Input defaultValue="12345678901234" className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Establishment Year</label>
                            <Input defaultValue="2018" type="number" className="w-full" />
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. Contact Information</h6>
                    <Screenshot title="Store Contact Details">
                      <div className="border border-slate-200 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Primary Phone *</label>
                            <Input defaultValue="+91 98765 43210" className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Business Email *</label>
                            <Input defaultValue="contact@kingsmarket.com" type="email" className="w-full" />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Store Size (sq ft)</label>
                            <Input defaultValue="2500" type="number" className="w-full" />
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">C. Validation and Error Handling</h6>
                    <Screenshot title="Form Validation Messages">
                      <div className="space-y-4">
                        <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 text-red-600 mt-0.5">⚠️</div>
                            <div>
                              <h5 className="font-medium text-red-800">Validation Errors</h5>
                              <ul className="mt-2 text-sm text-red-700 space-y-1">
                                <li>• GST Number format is invalid (should be 15 characters)</li>
                                <li>• Business Email is required</li>
                                <li>• PAN Number should be 10 characters</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="font-medium text-green-800">Store information saved successfully!</span>
                          </div>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <Step number="3" title="Address and Location Configuration">
                    <p>
                      Accurate address and location data is crucial for delivery logistics, vendor communications, and regulatory compliance. The system supports precise geolocation for optimal delivery routing.
                    </p>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. Physical Address Entry</h6>
                    <Screenshot title="Store Address & Location Form">
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-emerald-600"/>
                          Store Address & Location
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Street Address *</label>
                            <Input defaultValue="123 Commercial Street, Market Area" className="w-full" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">City *</label>
                              <Input defaultValue="Bangalore" className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">District</label>
                              <Input defaultValue="Bangalore Urban" className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">State *</label>
                              <Input defaultValue="Karnataka" className="w-full" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">ZIP Code *</label>
                              <Input defaultValue="560001" className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Country</label>
                              <Input defaultValue="India" disabled className="w-full bg-slate-50" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. GPS Coordinates and Map Integration</h6>
                    <Screenshot title="Location Coordinates and Map">
                      <div className="border border-slate-200 rounded-lg p-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-slate-700 mb-3">GPS Coordinates</h4>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Latitude</label>
                                <Input defaultValue="12.9716" type="number" step="0.0001" className="w-full" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Longitude</label>
                                <Input defaultValue="77.5946" type="number" step="0.0001" className="w-full" />
                              </div>
                              <Button variant="outline" className="w-full">
                                <MapPin className="w-4 h-4 mr-2" />
                                Auto-detect Location
                              </Button>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-700 mb-3">Map Preview</h4>
                            <div className="w-full h-40 bg-slate-100 border rounded-lg flex items-center justify-center">
                              <div className="text-center text-slate-500">
                                <MapPin className="w-8 h-8 mx-auto mb-2" />
                                <p className="text-sm">Interactive map will appear here</p>
                                <p className="text-xs">Showing: King's Supermarket, Bangalore</p>
                              </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">
                              Precise location helps with delivery route optimization and vendor logistics.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <Step number="4" title="Document and Photo Upload">
                    <p>
                      RetailOS requires specific documents for legal compliance and business verification. Upload clear, high-quality images of all required documents for faster processing and verification.
                    </p>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. Store Photos Section</h6>
                    <Screenshot title="Store Photos & Documents Upload">
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <Camera className="w-5 h-5 text-purple-600"/>
                          Store Photos & Documents
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Store Front View *</label>
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                              <Upload className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                              <p className="text-sm text-slate-600">Click to upload or drag and drop</p>
                              <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 5MB</p>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Interior View</label>
                            <div className="border border-slate-200 rounded-lg p-4 bg-green-50">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                  <Camera className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-green-800">store_interior.jpg</p>
                                  <p className="text-xs text-green-600">2.3 MB • Uploaded successfully</p>
                                </div>
                                <Button size="sm" variant="ghost" className="-ml-3 md:ml-0">
                                  <span className="text-red-600  ">Remove</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. Legal Documents Upload</h6>
                    <Screenshot title="Legal Documents Section">
                      <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-4">
                          <h4 className="font-medium text-slate-700 mb-3">Required Legal Documents</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">GST Certificate *</label>
                              <div className="border border-slate-200 rounded-lg p-3 bg-blue-50">
                                <div className="flex items-center gap-3">
                                  <FileText className="w-6 h-6 text-blue-600" />
                                  <div className="flex-1">
                                    <p className="text-sm font-medium text-blue-800">gst_certificate.pdf</p>
                                    <p className="text-xs text-blue-600">1.8 MB • Verified ✓</p>
                                  </div>
                                  <Badge className="bg-green-100 text-green-800">Verified</Badge>
                                </div>
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">PAN Card</label>
                              <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                                <Upload className="w-6 h-6 mx-auto text-slate-400 mb-1" />
                                <p className="text-xs text-slate-600">Upload PAN Card</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 text-amber-600 mt-0.5">💡</div>
                            <div>
                              <h5 className="font-medium text-amber-800">Document Upload Tips</h5>
                              <ul className="mt-2 text-sm text-amber-700 space-y-1">
                                <li>• Ensure documents are clear and all text is readable</li>
                                <li>• Upload original documents, not photocopies when possible</li>
                                <li>• File size should be under 5MB for faster processing</li>
                                <li>• Supported formats: PNG, JPG, PDF</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <Step number="5" title="Owner and Nominee Information">
                    <p>
                      Complete owner details and nominee information are essential for business continuity, legal compliance, and emergency contact procedures.
                    </p>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. Owner Details Form</h6>
                    <Screenshot title="Owner Information Section">
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <User className="w-5 h-5 text-indigo-600"/>
                          Owner Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Owner Full Name *</label>
                            <Input defaultValue="Rajesh Kumar Singh" className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Owner Phone *</label>
                            <Input defaultValue="+91 98765 43210" className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Owner Email *</label>
                            <Input defaultValue="rajesh@kingsmarket.com" type="email" className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Owner Photo</label>
                            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                                  <User className="w-5 h-5 text-slate-500" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-slate-600">owner_photo.jpg</p>
                                  <p className="text-xs text-slate-500">1.2 MB</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. Nominee and Emergency Contact</h6>
                    <Screenshot title="Nominee Details Section">
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-emerald-600"/>
                          Nominee Details
                        </h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Nominee Name *</label>
                              <Input defaultValue="Priya Singh" className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Relationship *</label>
                              <Input defaultValue="Spouse" className="w-full" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Nominee Phone *</label>
                              <Input defaultValue="+91 98765 43211" className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Aadhar Card</label>
                              <div className="border-2 border-dashed border-slate-300 rounded-lg p-3 text-center">
                                <Upload className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                                <p className="text-xs text-slate-600">Upload Aadhar Card</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <Step number="6" title="Bank Account Configuration">
                    <p>
                      Banking information is crucial for payment processing, vendor payments, and financial tracking. Ensure all bank details are accurate to avoid payment delays.
                    </p>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. Bank Details Form</h6>
                    <Screenshot title="Bank Account Details">
                      <div className="border border-slate-200 rounded-lg p-3 sm:p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <Banknote className="w-5 h-5 text-green-600"/>
                          Bank Account Details
                        </h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Bank Name *</label>
                              <Input defaultValue="HDFC Bank" className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Account Holder Name *</label>
                              <Input defaultValue="King's Retail Pvt. Ltd." className="w-full" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Account Number *</label>
                              <Input defaultValue="1234567890123456" type="password" className="w-full" />
                              <p className="text-xs text-slate-500 mt-1">Account number is encrypted for security</p>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">IFSC Code *</label>
                              <Input defaultValue="HDFC0001234" className="w-full" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Cancelled Cheque</label>
                            <div className="border border-slate-200 rounded-lg p-3 bg-green-50">
                              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <FileText className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-green-800 truncate">cancelled_cheque.pdf</p>
                                  <p className="text-xs text-green-600">956 KB • Uploaded</p>
                                </div>
                                <Badge className="bg-blue-100 text-blue-800 flex-shrink-0">Verified</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. Bank Verification Status</h6>
                    <Screenshot title="Bank Account Verification">
                      <div className="space-y-4">
                        <div className="border border-green-200 bg-green-50 rounded-lg p-3 sm:p-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-green-800">Bank Account Verified</h5>
                              <p className="text-sm text-green-700 mt-1">
                                Your bank account has been successfully verified. You can now receive payments and make vendor payments through the system.
                              </p>
                              <div className="mt-3 grid grid-cols-1 gap-2 text-xs">
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                                  <span className="break-words">Account holder name verified</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                                  <span className="break-words">IFSC code validated</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                                  <span className="break-words">Account number format checked</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                                  <span className="break-words">Cancelled cheque reviewed</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0">🔒</div>
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-blue-800">Security Information</h5>
                              <p className="text-sm text-blue-700 mt-1 break-words">
                                All banking information is encrypted using bank-grade security. Your account details are never stored in plain text and are accessible only to authorized personnel for payment processing.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <Step number="7" title="User Management Setup">
                    <p>
                      Setting up user accounts with proper roles and permissions ensures secure access control and operational efficiency. Each user should have access only to the features they need for their job function.
                    </p>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. Accessing User Management</h6>
                    <Screenshot title="User Management Dashboard">
                      <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <div>
                            <h2 className="text-xl font-bold text-slate-800">User Management</h2>
                            <p className="text-sm text-slate-500">Manage staff access and roles for your supermarket</p>
                          </div>
                          <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                            <PlusCircle className="w-4 h-4" />
                            Add New User
                          </Button>
                        </div>

                        {/* User stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-600">8</div>
                            <div className="text-sm text-blue-700">Total Users</div>
                          </div>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-600">6</div>
                            <div className="text-sm text-green-700">Active Users</div>
                          </div>
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-amber-600">2</div>
                            <div className="text-sm text-amber-700">Pending Invites</div>
                          </div>
                          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-purple-600">4</div>
                            <div className="text-sm text-purple-700">Role Templates</div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. Creating a New User</h6>
                    <Screenshot title="Add New User Form">
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4">Add New User</h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                              <Input placeholder="Enter full name" className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                              <Input placeholder="user@example.com" type="email" className="w-full" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                              <Input placeholder="+91 98765 43210" className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Department</label>
                              <select className="w-full p-2 border border-slate-300 rounded-md">
                                <option>Select Department</option>
                                <option>Operations</option>
                                <option>Inventory</option>
                                <option>Sales</option>
                                <option>Management</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Role Template *</label>
                            <select className="w-full p-2 border border-slate-300 rounded-md">
                              <option>Select Role Template</option>
                              <option>Store Manager</option>
                              <option>Inventory Manager</option>
                              <option>Cashier</option>
                              <option>Fulfillment Staff</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">C. Role Templates and Permissions</h6>
                    <Screenshot title="Permission Management Interface">
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-purple-600"/>
                          Role Template: Inventory Manager
                        </h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <h4 className="font-medium text-slate-700">Inventory Permissions</h4>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 bg-green-50 rounded border">
                                  <span className="text-sm">View Inventory Dashboard</span>
                                  <Badge className="bg-green-100 text-green-800">Full Access</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-green-50 rounded border">
                                  <span className="text-sm">Manage Products</span>
                                  <Badge className="bg-green-100 text-green-800">Full Access</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-green-50 rounded border">
                                  <span className="text-sm">Create Purchase Orders</span>
                                  <Badge className="bg-green-100 text-green-800">Full Access</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-amber-50 rounded border">
                                  <span className="text-sm">Warehouse Management</span>
                                  <Badge className="bg-amber-100 text-amber-800">Read Only</Badge>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <h4 className="font-medium text-slate-700">Other Permissions</h4>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 bg-red-50 rounded border">
                                  <span className="text-sm">POS Dashboard</span>
                                  <Badge className="bg-red-100 text-red-800">No Access</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-amber-50 rounded border">
                                  <span className="text-sm">Order Management</span>
                                  <Badge className="bg-amber-100 text-amber-800">Read Only</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-red-50 rounded border">
                                  <span className="text-sm">Financial Reports</span>
                                  <Badge className="bg-red-100 text-red-800">No Access</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-amber-50 rounded border">
                                  <span className="text-sm">User Management</span>
                                  <Badge className="bg-amber-100 text-amber-800">Read Only</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-700">
                              <strong>Role Template Benefits:</strong> Using pre-configured role templates ensures consistent permissions across similar positions and reduces setup time for new users.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">D. User Status and Activity Tracking</h6>
                    <Screenshot title="User List with Status Indicators">
                      <div className="border border-slate-200 rounded-lg">
                        {/* Mobile list view */}
                        <div className="sm:hidden divide-y divide-slate-200">
                          <div className="p-4 flex items-start gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-medium text-blue-700">RS</span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <p className="text-sm font-medium text-slate-900 truncate">Rajesh Singh</p>
                                <Badge className="bg-purple-100 text-purple-800 text-[10px]">Store Manager</Badge>
                              </div>
                              <p className="text-xs text-slate-500 break-all">rajesh@kingsmarket.com</p>
                              <div className="mt-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-green-700">Active</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 flex items-start gap-3">
                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-medium text-emerald-700">PS</span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <p className="text-sm font-medium text-slate-900 truncate">Priya Sharma</p>
                                <Badge className="bg-blue-100 text-blue-800 text-[10px]">Inventory Manager</Badge>
                              </div>
                              <p className="text-xs text-slate-500 break-all">priya@kingsmarket.com</p>
                              <div className="mt-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                <span className="text-xs text-amber-700">Pending Invite</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Desktop table view */}
                        <div className="w-full overflow-x-auto hidden sm:block">
                          <table className="w-full table-auto sm:text-sm text-xs">
                          <thead className="bg-slate-50 border-b">
                            <tr>
                              <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-slate-500 uppercase">User</th>
                              <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-slate-500 uppercase">Role</th>
                              <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                              <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-slate-500 uppercase hidden sm:table-cell">Last Login</th>
                              <th className="px-3 py-2 sm:px-4 sm:py-3 text-right text-xs font-medium text-slate-500 uppercase hidden sm:table-cell">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-slate-200">
                            <tr>
                              <td className="px-3 py-2 sm:px-4 sm:py-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-xs font-medium text-blue-700">RS</span>
                                  </div>
                                   <div className="min-w-0">
                                    <p className="text-sm font-medium text-slate-900">Rajesh Singh</p>
                                     <p className="text-xs text-slate-500 break-all">rajesh@kingsmarket.com</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4">
                                <Badge className="bg-purple-100 text-purple-800 text-[10px] sm:text-xs">Store Manager</Badge>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-sm text-green-700">Active</span>
                                </div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4 hidden sm:table-cell">
                                <div className="text-sm text-slate-600">2 hours ago</div>
                                <div className="text-xs text-slate-500">Today, 10:30 AM</div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4 text-right hidden sm:table-cell">
                                <Button size="sm" variant="ghost">Edit</Button>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2 sm:px-4 sm:py-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <span className="text-xs font-medium text-emerald-700">PS</span>
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-sm font-medium text-slate-900">Priya Sharma</p>
                                    <p className="text-xs text-slate-500 break-all">priya@kingsmarket.com</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4">
                                <Badge className="bg-blue-100 text-blue-800 text-[10px] sm:text-xs">Inventory Manager</Badge>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                  <span className="text-sm text-amber-700">Pending Invite</span>
                                </div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4 hidden sm:table-cell">
                                <div className="text-sm text-slate-400">Never</div>
                                <div className="text-xs text-slate-400">Invite sent 2 days ago</div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4 text-right hidden sm:table-cell">
                                <Button size="sm" variant="outline">Resend Invite</Button>
                              </td>
                            </tr>
                          </tbody>
                          </table>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <div className="mt-12 p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">{t('nextStepsTitle')}</h3>
                    <p className="text-emerald-700 mb-4">
                      {t('nextStepsDescription')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to={createPageUrl('ManualWarehouse')} className="inline-block">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          {t('nextStepsButton')}
                          <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
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

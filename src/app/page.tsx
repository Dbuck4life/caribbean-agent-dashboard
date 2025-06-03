'use client'

import { useState } from 'react'
import { 
  Home, 
  PlusCircle, 
  ShoppingCart, 
  BarChart3, 
  MapPin,
  DollarSign,
  Users,
  TrendingUp,
  Eye,
  Star,
  Calendar,
  Camera
} from 'lucide-react'

export default function CaribbeanPortal() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header with Caribbean Gradient */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Home className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Caribbean Home Hub</h1>
                <p className="text-blue-100">Premium Real Estate Lead Generation Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-blue-100 text-sm">Welcome back</p>
                <p className="text-white font-semibold">Agent Portal</p>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Navigation */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 py-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all ${
                activeTab === 'overview' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <BarChart3 size={18} />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('submit')}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all ${
                activeTab === 'submit' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <PlusCircle size={18} />
              Submit Listing
            </button>
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all ${
                activeTab === 'leads' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <ShoppingCart size={18} />
              Buy Leads
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">🏝️ Welcome to Your Caribbean Command Center</h2>
                  <p className="text-blue-100 text-lg">
                    Your gateway to premium Caribbean real estate leads and citizenship by investment opportunities
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-3xl font-bold">$3,240</div>
                      <div className="text-blue-100 text-sm">Total Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-lg bg-blue-100">
                    <Home className="text-blue-600" size={24} />
                  </div>
                  <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded-full">
                    +12%
                  </span>
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-1">Total Submissions</h3>
                <p className="text-3xl font-bold text-gray-900">47</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-lg bg-green-100">
                    <DollarSign className="text-green-600" size={24} />
                  </div>
                  <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded-full">
                    +18%
                  </span>
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-1">Lead Revenue</h3>
                <p className="text-3xl font-bold text-gray-900">$3,240</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-lg bg-purple-100">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded-full">
                    +7
                  </span>
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-1">Active Leads</h3>
                <p className="text-3xl font-bold text-gray-900">23</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="text-blue-600" size={20} />
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-600" size={16} />
                    <span className="font-medium">Luxury Villa - Barbados submitted</span>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <DollarSign className="text-green-600" size={16} />
                    <span className="font-medium">New lead purchased - $1,200</span>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Home className="text-blue-600" size={16} />
                    <span className="font-medium">Beachfront Condo approved</span>
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'submit' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Submit New Property Listing</h2>
                <p className="text-gray-600">Add your property to the Caribbean Home Hub marketplace</p>
              </div>
              
              {/* Enhanced Quality Requirements Banner */}
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 border-l-4 border-blue-500 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <h3 className="font-bold text-blue-900 text-lg">🏝️ Caribbean Quality Standards</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">High-resolution photos (min 1920x1080)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">No watermarks or agent branding</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Complete property details & pricing</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Professional property descriptions</span>
                  </div>
                </div>
              </div>

              <form className="space-y-8">
                {/* Basic Information */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    Basic Information
                  </h4>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Property Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="e.g., Luxury Beachfront Villa in Paradise Bay"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Caribbean Island</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>Select Island</option>
                        <option>🇧🇧 Barbados</option>
                        <option>🇯🇲 Jamaica</option>
                        <option>🇰🇾 Cayman Islands</option>
                        <option>🇹🇹 Trinidad & Tobago</option>
                        <option>🇧🇸 Bahamas</option>
                        <option>🇦🇬 Antigua & Barbuda</option>
                        <option>🇰🇳 St. Kitts & Nevis</option>
                        <option>🇩🇲 Dominica</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>Select Type</option>
                        <option>🏖️ Beachfront Villa</option>
                        <option>🏢 Luxury Condo</option>
                        <option>🏘️ Townhouse</option>
                        <option>🏪 Commercial Property</option>
                        <option>🌴 Land/Development Lot</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Price (USD)</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="$750,000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bedrooms</label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bathrooms</label>
                      <input
                        type="number"
                        step="0.5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="2.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Sq Ft</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="2,500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Property Description</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe the property's features, amenities, location benefits, and unique selling points..."
                    />
                  </div>
                </div>

                {/* Photo Upload */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    Property Photos
                  </h4>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                    <Camera className="mx-auto text-gray-400 mb-4" size={48} />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload High-Resolution Photos</h3>
                    <p className="text-gray-600 mb-4">Drag and drop or click to select images</p>
                    <div className="text-sm text-gray-500 space-y-1">
                      <p>• Maximum 25 photos, 10MB each</p>
                      <p>• Minimum resolution: 1920x1080</p>
                      <p>• Formats: JPG, PNG, HEIC</p>
                    </div>
                    <button
                      type="button"
                      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Select Photos
                    </button>
                  </div>
                </div>

                {/* Enhanced Citizenship by Investment Banner */}
                <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 border border-purple-300 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <input type="checkbox" className="mt-2 w-5 h-5 text-purple-600" id="citizenship" />
                    <div className="flex-1">
                      <label htmlFor="citizenship" className="font-bold text-white text-xl flex items-center gap-3">
                        <span className="text-yellow-300 text-2xl">👑</span>
                        🏛️ Citizenship by Investment Program
                      </label>
                      <div className="mt-3 space-y-3">
                        <p className="text-purple-100 leading-relaxed">
                          This property qualifies for Caribbean citizenship by investment programs. 
                          Properties meeting investment thresholds generate <strong className="text-yellow-300">premium leads valued at $1,200+ each</strong> from high-net-worth international buyers.
                        </p>
                        <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                          <h4 className="font-semibold text-white mb-2">Investment Thresholds by Island:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                            <div className="bg-white bg-opacity-20 rounded p-2">
                              <span className="text-yellow-300 font-bold">🇩🇲 Dominica:</span> <span className="text-white">$400K+</span>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded p-2">
                              <span className="text-yellow-300 font-bold">🇦🇬 Antigua:</span> <span className="text-white">$650K+</span>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded p-2">
                              <span className="text-yellow-300 font-bold">🇰🇳 St. Kitts:</span> <span className="text-white">$1.5M+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                  >
                    Submit for Review
                  </button>
                  <button
                    type="button"
                    className="px-8 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Save Draft
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="space-y-8">
            {/* Lead Marketplace Banner */}
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <ShoppingCart className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">💎 Premium Lead Marketplace</h2>
                  <p className="text-orange-100">
                    Qualified Caribbean property buyers ready to purchase • ROI: 210-340%
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Premium Leads Available</h2>
                <p className="text-gray-600 mt-1">High-value prospects ready to purchase Caribbean properties</p>
              </div>
              <div className="flex gap-3">
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
                  <option>All Islands</option>
                  <option>🇧🇧 Barbados</option>
                  <option>🇯🇲 Jamaica</option>
                  <option>🇰🇾 Cayman Islands</option>
                  <option>🇧🇸 Bahamas</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
                  <option>All Budgets</option>
                  <option>$500K - $1M</option>
                  <option>$1M - $2M</option>
                  <option>$2M+</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Premium Citizenship Lead */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-200 bg-gradient-to-br from-white to-purple-50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Premium Citizenship Lead</h3>
                    <p className="text-gray-600">🇧🇧 Barbados - St. Lawrence Gap</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">$1,200</p>
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 mt-1 font-medium">
                      <span className="text-lg">👑</span> Citizenship
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign size={14} className="text-green-500" />
                    <span className="font-medium">Budget: $2.5M - $3.5M</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={14} className="text-blue-500" />
                    <span className="font-medium">Timeline: Next 60 days</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  High-net-worth UK family seeking citizenship by investment. Pre-qualified with $3M+ liquid assets. 
                  Looking for beachfront villa with citizenship pathway.
                </p>
                
                <button className="w-full py-3 px-4 rounded-lg font-semibold transition-all bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg">
                  Purchase Lead - $1,200
                </button>
              </div>

              {/* Investment Property Lead */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Investment Property Lead</h3>
                    <p className="text-gray-600">🇯🇲 Jamaica - Montego Bay</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">$650</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign size={14} className="text-green-500" />
                    <span className="font-medium">Budget: $800K - $1.2M</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={14} className="text-blue-500" />
                    <span className="font-medium">Timeline: Next 90 days</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  US investor seeking rental income property. Cash purchase ready. 
                  Looking for established resort area with strong rental yields.
                </p>
                
                <button className="w-full py-3 px-4 rounded-lg font-semibold transition-all bg-blue-600 text-white hover:bg-blue-700">
                  Purchase Lead - $650
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
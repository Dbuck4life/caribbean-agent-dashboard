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
  Camera,
  CheckCircle,
  Filter,
  Crown
} from 'lucide-react'

export default function CaribbeanListingPortal() {
  const [activeTab, setActiveTab] = useState('overview')

  const TabButton = ({ id, icon: Icon, label }: { 
    id: string
    icon: React.ComponentType<{ size?: number; className?: string }>
    label: string 
  }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        activeTab === id 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
      }`}
    >
      <Icon size={18} />
      <span className="hidden sm:inline font-medium">{label}</span>
    </button>
  )

  const StatCard = ({ icon: Icon, title, value, change, color = "blue" }: {
    icon: React.ComponentType<{ size?: number; className?: string }>
    title: string
    value: string
    change: string
    color?: string
  }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className={`p-3 rounded-lg bg-${color}-100`}>
          <Icon className={`text-${color}-600`} size={24} />
        </div>
        <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded-full">
          {change}
        </span>
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  )

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Home}
          title="Total Submissions"
          value="47"
          change="+12%"
          color="blue"
        />
        <StatCard
          icon={Eye}
          title="Pending Review"
          value="8"
          change="+3"
          color="orange"
        />
        <StatCard
          icon={DollarSign}
          title="Lead Revenue"
          value="$3,240"
          change="+18%"
          color="green"
        />
        <StatCard
          icon={Users}
          title="Active Leads"
          value="23"
          change="+7"
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Submissions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Home className="text-blue-600" size={20} />
            Recent Submissions
          </h3>
          <div className="space-y-4">
            {[
              { 
                property: "Luxury Villa - Barbados", 
                status: "Under Review", 
                citizenship: true,
                value: "$2.8M",
                date: "2 hours ago"
              },
              { 
                property: "Beachfront Condo - Jamaica", 
                status: "Approved", 
                citizenship: false,
                value: "$650K",
                date: "1 day ago"
              },
              { 
                property: "Investment Property - Cayman", 
                status: "Approved", 
                citizenship: true,
                value: "$1.4M",
                date: "2 days ago"
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={16} />
                  <div>
                    <p className="font-semibold text-gray-900">{item.property}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        item.status === 'Approved' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.status}
                      </span>
                      {item.citizenship && (
                        <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium flex items-center gap-1">
                          <Crown size={12} />
                          Citizenship
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{item.value}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Performance */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="text-green-600" size={20} />
            Lead Performance
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <Crown className="text-white" size={16} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Premium Citizenship Leads</p>
                  <p className="text-sm text-gray-600">High-value investor prospects</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600">$1,200</p>
                <p className="text-xs text-gray-500">avg. per lead</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-600 rounded-lg">
                  <Home className="text-white" size={16} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Standard Property Leads</p>
                  <p className="text-sm text-gray-600">Regular buyer inquiries</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">$450</p>
                <p className="text-xs text-gray-500">avg. per lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSubmitListing = () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Submit New Property Listing</h2>
          <p className="text-gray-600">Add your property to the Caribbean Home Hub marketplace</p>
        </div>
        
        {/* Quality Requirements Banner */}
        <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl">
          <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
            <CheckCircle className="text-blue-600" size={20} />
            📋 Quality Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              High-resolution photos (minimum 1920x1080)
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              No watermarks or agent branding
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Complete property details and pricing
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Professional property description
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
                  <option>🇬🇩 Grenada</option>
                  <option>🇱🇨 St. Lucia</option>
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
                  <option>🏰 Historic Estate</option>
                </select>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Property Details
            </h4>
            
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

          {/* Citizenship by Investment */}
          <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl">
            <div className="flex items-start gap-4">
              <input type="checkbox" className="mt-1 w-4 h-4" id="citizenship" />
              <div className="flex-1">
                <label htmlFor="citizenship" className="font-bold text-purple-900 text-lg flex items-center gap-2">
                  <Crown className="text-purple-600" size={20} />
                  Citizenship by Investment Eligible
                </label>
                <p className="text-purple-800 mt-2 leading-relaxed">
                  This property qualifies for citizenship by investment programs. Properties meeting investment 
                  thresholds generate <strong>premium leads valued at $1,200+ each</strong> from high-net-worth 
                  international buyers seeking Caribbean citizenship.
                </p>
                <div className="mt-3 text-sm text-purple-700 bg-purple-50 p-3 rounded-lg">
                  <strong>Typical Requirements:</strong> $400K+ (Dominica) • $650K+ (Antigua) • $1.5M+ (St. Kitts)
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
  )

  const renderBuyLeads = () => (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Premium Lead Marketplace</h2>
          <p className="text-gray-600 mt-1">Qualified buyers ready to purchase Caribbean properties</p>
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
            <option>$2M - $5M</option>
            <option>$5M+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          {
            type: "Premium Citizenship Lead",
            location: "🇧🇧 Barbados - St. Lawrence Gap",
            budget: "$2.5M - $3.5M",
            timeline: "Next 60 days",
            details: "High-net-worth UK family seeking citizenship by investment. Pre-qualified with $3M+ liquid assets. Looking for beachfront villa with citizenship pathway.",
            price: "$1,200",
            tier: "premium",
            citizenship: true,
            urgency: "high"
          },
          {
            type: "Investment Property Lead",
            location: "🇯🇲 Jamaica - Montego Bay",
            budget: "$800K - $1.2M",
            timeline: "Next 90 days",
            details: "US-based real estate investor expanding Caribbean portfolio. Cash purchase ready. Seeking rental income property in established resort area.",
            price: "$650",
            tier: "standard",
            citizenship: false,
            urgency: "medium"
          },
          {
            type: "Luxury Residence Lead",
            location: "🇰🇾 Cayman Islands - Seven Mile Beach",
            budget: "$4M - $6M",
            timeline: "Next 30 days",
            details: "Canadian tech entrepreneur relocating permanently. Seeking ultra-luxury beachfront villa. Interested in citizenship options and tax benefits.",
            price: "$1,500",
            tier: "premium",
            citizenship: true,
            urgency: "high"
          },
          {
            type: "Vacation Home Lead",
            location: "🇦🇬 Antigua - Jolly Beach",
            budget: "$600K - $900K",
            timeline: "Next 120 days",
            details: "Canadian couple seeking vacation property for retirement. Flexible on exact location within Antigua. Prefer beachfront or beach-access properties.",
            price: "$450",
            tier: "standard",
            citizenship: false,
            urgency: "low"
          },
          {
            type: "Development Investment Lead",
            location: "🇩🇲 Dominica - Roseau Area",
            budget: "$1.5M - $2.5M",
            timeline: "Next 45 days",
            details: "European investor group seeking citizenship by investment opportunity. Interested in approved development projects or qualifying real estate.",
            price: "$1,350",
            tier: "premium",
            citizenship: true,
            urgency: "high"
          },
          {
            type: "Corporate Relocation Lead",
            location: "🇧🇸 Bahamas - Nassau",
            budget: "$1.2M - $2M",
            timeline: "Next 75 days",
            details: "Financial services firm relocating executives. Seeking multiple luxury condos or townhomes. Corporate purchase with guaranteed closing.",
            price: "$800",
            tier: "standard",
            citizenship: false,
            urgency: "medium"
          }
        ].map((lead, i) => (
          <div key={i} className={`bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md ${
            lead.tier === 'premium' 
              ? 'border-purple-200 bg-gradient-to-br from-white to-purple-50' 
              : 'border-gray-200'
          }`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-gray-900">{lead.type}</h3>
                  {lead.urgency === 'high' && (
                    <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">
                      🔥 URGENT
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm font-medium">{lead.location}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-green-600">{lead.price}</p>
                {lead.citizenship && (
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 mt-1 font-medium">
                    <Crown className="inline w-3 h-3 mr-1" />
                    Citizenship
                  </span>
                )}
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <DollarSign size={14} className="text-green-500" />
                <span className="font-medium">Budget: {lead.budget}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={14} className="text-blue-500" />
                <span className="font-medium">Timeline: {lead.timeline}</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">{lead.details}</p>
            
            <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
              lead.tier === 'premium' 
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}>
              Purchase Lead - {lead.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  )

  const renderPerformance = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Performance Analytics</h2>
        <p className="text-gray-600">Track your ROI and lead conversion metrics</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={TrendingUp}
          title="Lead Conversion Rate"
          value="24%"
          change="+5%"
          color="green"
        />
        <StatCard
          icon={DollarSign}
          title="Average Deal Value"
          value="$1.8M"
          change="+12%"
          color="blue"
        />
        <StatCard
          icon={Star}
          title="Lead Quality Score"
          value="4.2/5"
          change="+0.3"
          color="yellow"
        />
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">ROI by Lead Type</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-600 rounded-lg">
                <Crown className="text-white" size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Citizenship by Investment Leads</p>
                <p className="text-gray-600">Premium tier prospects seeking citizenship</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-purple-600">340% ROI</p>
              <p className="text-sm text-gray-500">$1,200 cost → $4,080 avg commission</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Home className="text-white" size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Investment Property Leads</p>
                <p className="text-gray-600">Cash buyer prospects and investors</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-blue-600">280% ROI</p>
              <p className="text-sm text-gray-500">$650 cost → $1,820 avg commission</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-600 rounded-lg">
                <Users className="text-white" size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Standard Property Leads</p>
                <p className="text-gray-600">Regular buyer inquiries and relocations</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-green-600">210% ROI</p>
              <p className="text-sm text-gray-500">$450 cost → $945 avg commission</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4
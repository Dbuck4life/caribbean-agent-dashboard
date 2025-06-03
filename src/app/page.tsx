'use client'

import { useState } from 'react'
import { Home, PlusCircle, BarChart3, ShoppingCart } from 'lucide-react'

export default function CaribbeanPortal() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Home className="text-white" size={18} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Caribbean Home Hub</h1>
                <p className="text-sm text-gray-600">Agent Portal</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">Welcome, Agent</div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-4 py-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === 'overview' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BarChart3 size={16} />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('submit')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === 'submit' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <PlusCircle size={16} />
              Submit Listing
            </button>
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === 'leads' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ShoppingCart size={16} />
              Buy Leads
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-gray-600 text-sm font-medium">Total Submissions</h3>
                <p className="text-3xl font-bold text-gray-900">47</p>
                <p className="text-green-600 text-sm">+12% this month</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-gray-600 text-sm font-medium">Lead Revenue</h3>
                <p className="text-3xl font-bold text-gray-900">$3,240</p>
                <p className="text-green-600 text-sm">+18% this month</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-gray-600 text-sm font-medium">Active Leads</h3>
                <p className="text-3xl font-bold text-gray-900">23</p>
                <p className="text-green-600 text-sm">+7 new leads</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Luxury Villa - Barbados submitted</span>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>New lead purchased - $1,200</span>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Beachfront Condo approved</span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'submit' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Property Listing</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Luxury Beachfront Villa"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option>Select Island</option>
                      <option>Barbados</option>
                      <option>Jamaica</option>
                      <option>Cayman Islands</option>
                      <option>Bahamas</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price (USD)
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="$750,000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe the property..."
                  />
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="font-medium text-purple-900">
                      🏛️ Citizenship by Investment Eligible
                    </span>
                  </label>
                  <p className="text-sm text-purple-700 mt-1">
                    Premium leads ($1,200+ value) for citizenship programs
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium"
                >
                  Submit for Review
                </button>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Premium Leads Marketplace</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">Premium Citizenship Lead</h3>
                    <p className="text-gray-600">Barbados - St. Lawrence Gap</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">$1,200</p>
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                      🏛️ Citizenship
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-4">
                  High-net-worth UK family seeking citizenship by investment. 
                  Budget: $2.5M - $3.5M. Timeline: Next 60 days.
                </p>
                
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                  Purchase Lead
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">Investment Property Lead</h3>
                    <p className="text-gray-600">Jamaica - Montego Bay</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">$650</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-4">
                  US investor seeking rental income property. 
                  Budget: $800K - $1.2M. Cash purchase ready.
                </p>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Purchase Lead
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
import React, { useState } from 'react';
import { Upload, CheckCircle, Clock, XCircle, Eye, MessageSquare, DollarSign, Star, Camera, FileText, AlertCircle } from 'lucide-react';

export default function CaribbeanListingPortal() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalSubmissions: 8,
    pendingReview: 2,
    approved: 5,
    rejected: 1,
    totalViews: 2847,
    inquiries: 23,
    leadsPurchased: 12,
    revenue: 4650
  };

  const recentSubmissions = [
    { id: 1, property: "Oceanfront Villa - St. John's", status: "approved", submitted: "2 days ago", views: 847 },
    { id: 2, property: "Beachfront Condo - Paradise Bay", status: "pending", submitted: "1 day ago", views: 0 },
    { id: 3, property: "Mountain Estate - Dominica", status: "approved", submitted: "5 days ago", views: 1203 },
    { id: 4, property: "Luxury Resort Property", status: "rejected", submitted: "1 week ago", views: 0 }
  ];

  const availableLeads = [
    { id: 1, property: "Oceanfront Villa - St. John's", buyer: "High Net Worth US Citizen", price: "$850", citizenship: true },
    { id: 2, property: "Beachfront Condo - Paradise Bay", buyer: "European Investment Group", price: "$450", citizenship: false },
    { id: 3, property: "Mountain Estate - Dominica", buyer: "Canadian Family - Citizenship Seeking", price: "$1,200", citizenship: true }
  ];

  const StatusBadge = ({ status }) => {
    const colors = {
      approved: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      rejected: "bg-red-100 text-red-800"
    };
    
    const icons = {
      approved: CheckCircle,
      pending: Clock,
      rejected: XCircle
    };
    
    const Icon = icons[status];
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status]}`}>
        <Icon className="w-3 h-3 mr-1" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Caribbean Home Hub</h1>
              <p className="text-sm text-gray-600">Agent Listing Portal</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Agent Portal</p>
                <p className="text-lg font-semibold text-blue-600">Maria Rodriguez</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'submit', label: 'Submit Listing' },
            { id: 'leads', label: 'Buy Leads' },
            { id: 'performance', label: 'Performance' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-500" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalSubmissions}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-yellow-500" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Pending Review</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.pendingReview}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <Eye className="h-8 w-8 text-green-500" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Views</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalViews.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-blue-500" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Lead Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">${stats.revenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Submissions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Submissions</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {recentSubmissions.map((submission) => (
                  <div key={submission.id} className="px-6 py-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{submission.property}</p>
                      <p className="text-sm text-gray-500">Submitted {submission.submitted}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm text-gray-900">{submission.views} views</p>
                      </div>
                      <StatusBadge status={submission.status} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Submit Listing Tab */}
        {activeTab === 'submit' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Submit New Listing</h3>
                <p className="text-sm text-gray-600 mt-1">All listings are reviewed for quality and compliance before publication</p>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Quality Requirements Alert */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-blue-400" />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-blue-800">Quality Requirements</h4>
                      <div className="mt-2 text-sm text-blue-700">
                        <ul className="list-disc list-inside space-y-1">
                          <li>High-resolution photos (minimum 1920x1080)</li>
                          <li>No watermarks or agent branding on images</li>
                          <li>Complete property details and accurate pricing</li>
                          <li>Proof of listing authority required</li>
                          <li>All listings subject to verification</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Property Title</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Oceanfront Villa - Paradise Bay"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Island/Location</label>
                    <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                      <option>Select Island</option>
                      <option>Antigua & Barbuda</option>
                      <option>Dominica</option>
                      <option>Grenada</option>
                      <option>St. Kitts & Nevis</option>
                      <option>St. Lucia</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Price (USD)</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="$1,500,000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Property Type</label>
                  <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                    <option>Select Type</option>
                    <option>Villa</option>
                    <option>Condo/Apartment</option>
                    <option>Land/Plot</option>
                    <option>Commercial</option>
                    <option>Resort Property</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Citizenship by Investment Eligible</label>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                      <span className="ml-2 text-sm text-gray-900">This property qualifies for citizenship by investment programs</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Property Photos</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Camera className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                          <span>Upload photos</span>
                          <input type="file" className="sr-only" multiple />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Property Description</label>
                  <textarea
                    rows={6}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Detailed description of the property, amenities, location highlights..."
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Save Draft
                  </button>
                  <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                    Submit for Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Buy Leads Tab */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Available Leads</h3>
                <p className="text-sm text-gray-600 mt-1">Purchase qualified leads for your properties</p>
              </div>
              
              <div className="divide-y divide-gray-200">
                {availableLeads.map((lead) => (
                  <div key={lead.id} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h4 className="text-sm font-medium text-gray-900">{lead.property}</h4>
                          {lead.citizenship && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <Star className="w-3 h-3 mr-1" />
                              Citizenship Interest
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{lead.buyer}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Pre-qualified buyer • Verified financial capacity
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">{lead.price}</p>
                          <p className="text-xs text-gray-500">per lead</p>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                          Purchase Lead
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Purchase Summary */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Lead Purchases</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-900">Oceanfront Villa - High Net Worth Buyer</span>
                  <span className="text-sm font-medium text-gray-900">$850 • 2 days ago</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-900">Mountain Estate - Canadian Family</span>
                  <span className="text-sm font-medium text-gray-900">$1,200 • 5 days ago</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-900">Beachfront Condo - Investment Group</span>
                  <span className="text-sm font-medium text-gray-900">$450 • 1 week ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <Eye className="h-8 w-8 text-blue-500" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Property Views</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalViews.toLocaleString()}</p>
                    <p className="text-sm text-green-600">↑ 23% from last month</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <MessageSquare className="h-8 w-8 text-green-500" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Inquiries Generated</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.inquiries}</p>
                    <p className="text-sm text-green-600">↑ 15% from last month</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-green-500" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Lead ROI</p>
                    <p className="text-2xl font-bold text-gray-900">340%</p>
                    <p className="text-sm text-green-600">Average return on lead investment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Chart Placeholder */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Property Performance</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Performance charts coming soon</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
'use client'

import React, { useState, useEffect } from 'react';

// Define proper TypeScript interfaces
interface AgentData {
  name: string;
  joinDate: string;
  activeListings: number;
  totalLeads: number;
  monthlyEarnings: number;
  profileImage?: string;
  phoneNumber?: string;
  email?: string;
  totalSales?: number;
  averageRating?: number;
}

// Default agent data to prevent null state issues
const defaultAgentData: AgentData = {
  name: '',
  joinDate: '',
  activeListings: 0,
  totalLeads: 0,
  monthlyEarnings: 0
};

export default function Home() {
  // Properly typed state with default values
  const [agentData, setAgentData] = useState<AgentData>(defaultAgentData);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate data loading (replace with your actual API call)
  useEffect(() => {
    const loadAgentData = async () => {
      try {
        // Replace with your actual API endpoint
        // const response = await fetch('/api/agent-data');
        // const data = await response.json();
        
        // Mock data for demonstration
        const mockData: AgentData = {
          name: 'John Smith',
          joinDate: '2024-01-15',
          activeListings: 12,
          totalLeads: 47,
          monthlyEarnings: 8500
        };
        
        setAgentData(mockData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading agent data:', error);
        setIsLoading(false);
      }
    };

    loadAgentData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-lg text-gray-600">Loading agent dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Caribbean Home Hub - Agent Dashboard</h1>
        
        {/* Monthly Earnings Card */}
        <div className="bg-white overflow-hidden shadow rounded-lg mb-6">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Monthly Earnings
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    ${agentData.monthlyEarnings.toLocaleString()}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Add New Property
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                View Leads
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Schedule Showing
              </button>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Generate Report
              </button>
            </div>
          </div>
        </div>

        {/* Agent Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Active Listings Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-500">Active Listings</div>
                <div className="text-2xl font-bold text-gray-900">{agentData.activeListings}</div>
              </div>
            </div>
          </div>

          {/* Total Leads Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-500">Total Leads</div>
                <div className="text-2xl font-bold text-gray-900">{agentData.totalLeads}</div>
              </div>
            </div>
          </div>

          {/* Agent Info Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-500">Agent</div>
                <div className="text-lg font-bold text-gray-900">{agentData.name}</div>
                <div className="text-sm text-gray-500">Since {new Date(agentData.joinDate).toLocaleDateString()}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Caribbean Home Hub Branding */}
        <div className="mt-8 text-center">
          <p className="text-gray-500">Powered by Caribbean Home Hub</p>
        </div>
      </div>
    </div>
  );
}
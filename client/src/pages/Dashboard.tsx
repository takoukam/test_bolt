import React from 'react';
import { useQuery } from 'react-query';
import { getDashboardStats } from '../api/dashboard';
import StatsCard from '../components/StatsCard';

export default function Dashboard() {
  const { data: stats, isLoading } = useQuery('dashboardStats', getDashboardStats);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Bonjour, Box Cash !</h2>
        <p className="text-gray-600">Voici ce qu'il y a eu comme activité depuis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="SOLDE OPÉRATEURS"
          amount={stats?.operatorBalance || 0}
          details={stats?.operatorDetails}
        />
        <StatsCard
          title="PAIEMENTS ÉMIS"
          amount={stats?.issuedPayments || 0}
          details={stats?.paymentDetails}
        />
        <StatsCard
          title="PAIEMENTS RÉUSSIS"
          amount={stats?.successfulPayments || 0}
          details={stats?.successDetails}
        />
      </div>
    </div>
  );
}
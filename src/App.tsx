import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCashier, setSelectedCashier] = useState('Toutes les caisses');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Bonjour, Box Cash !</h2>
            <p className="text-gray-600">Voici ce qu'il y a eu comme activité depuis.</p>
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <select 
              value={selectedCashier}
              onChange={(e) => setSelectedCashier(e.target.value)}
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Toutes les caisses</option>
              <option>Caisse 1</option>
              <option>Caisse 2</option>
            </select>
            <input 
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Appliquer
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Operator Balance */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">SOLDE OPÉRATEURS</h3>
                <span className="text-xl font-semibold">4 501,00 FCFA</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Orange Money</span>
                  <span>0,00 FCFA</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">MTN Mobile Money</span>
                  <span>4 501,00 FCFA</span>
                </div>
              </div>
            </div>

            {/* Payments Issued */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">PAIEMENTS ÉMIS</h3>
                <span className="text-xl font-semibold">0 FCFA</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Orange Money</span>
                  <span>0 FCFA</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">MTN Mobile Money</span>
                  <span>0 FCFA</span>
                </div>
              </div>
            </div>

            {/* Successful Payments */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">PAIEMENTS RÉUSSIS</h3>
                <span className="text-xl font-semibold">0 FCFA</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Orange Money</span>
                  <span>0 FCFA</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">MTN Mobile Money</span>
                  <span>0 FCFA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Success Rate */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">TAUX DE SUCCÈS</h3>
                <span className="text-xl font-semibold">---</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Orange Money</span>
                  <span>---</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">MTN Mobile Money</span>
                  <span>---</span>
                </div>
              </div>
            </div>

            {/* Users */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Utilisateurs</h3>
                <span className="text-sm text-gray-500">Total: 9</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Administrateur technique</span>
                  <div className="w-24 bg-pink-200 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Administrateur fonctionnel</span>
                  <div className="w-24 bg-yellow-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Errors */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Erreurs</h3>
                <span className="text-sm text-gray-500">Total: 0</span>
              </div>
              <p className="text-sm text-gray-600">Aucune erreur à afficher</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
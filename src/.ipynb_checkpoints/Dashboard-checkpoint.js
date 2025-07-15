import React, { useEffect, useState } from 'react';
import { getWallet, transfer, getLeaderboard } from './api';

function Dashboard() {
  const [wallet, setWallet] = useState({ balance: 0, score: 0 });
  const [leaderboard, setLeaderboard] = useState([]);
  const [form, setForm] = useState({ to: '', amount: 0, activity: '' });

  useEffect(() => {
    getWallet().then(({ data }) => setWallet(data));
    getLeaderboard().then(({ data } ) => setLeaderboard(data));
  }, []);

  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      await transfer(form);
      alert('Transfer successful');
      getWallet().then(({ data } ) => setWallet(data));
    } catch (err) {
      alert('Transfer failed');
    }
  };

  const globalFreedom = wallet.score * 10; // Simulated

  return (
    <div className="container mx-auto p-8 grid grid-cols-2 gap-4">
      <div className="card bg-white shadow p-4">
        <h2 className="text-2xl mb-2">Wallet</h2>
        <p>Balance: {wallet.balance} FC</p>
        <p>Freedom Score: {wallet.score}</p>
        <div className="mt-4">
          <div className="bg-gray-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: `${Math.min(globalFreedom, 100)}%` }}></div>
          </div>
          <p>Global Freedom Contribution: {globalFreedom}%</p>
        </div>
      </div>
      <div className="card bg-white shadow p-4">
        <h2 className="text-2xl mb-2">Leaderboard</h2>
        <ul>{leaderboard.map((u, i) => <li key={i}>{u.username}: {u.score}</li>)}</ul>
      </div>
      <form onSubmit={handleTransfer} className="col-span-2 card bg-white shadow p-4">
        <h2 className="text-2xl mb-2">Transfer Freedom Coins</h2>
        <input type="text" placeholder="To Username" onChange={(e) => setForm({ ...form, to: e.target.value })} className="input input-bordered w-full mb-2" />
        <input type="number" placeholder="Amount" onChange={(e) => setForm({ ...form, amount: parseFloat(e.target.value) })} className="input input-bordered w-full mb-2" />
        <textarea placeholder="Activity Description (for score)" onChange={(e) => setForm({ ...form, activity: e.target.value })} className="textarea textarea-bordered w-full mb-2"></textarea>
        <button type="submit" className="btn btn-primary w-full">Transfer</button>
      </form>
    </div>
  );
}

export default Dashboard;
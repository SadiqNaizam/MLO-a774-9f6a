import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'; // Using Dialog for structure
import { toast } from 'sonner'; // For toast notifications

const MoveMoneyPage = () => {
  console.log('MoveMoneyPage loaded');
  const navigate = useNavigate();
  const [fromAccount, setFromAccount] = useState('current_account_123');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fromAccount || !toAccount || !amount) {
      toast.error('Please fill in all required fields.');
      return;
    }
    console.log('Transfer submitted:', { fromAccount, toAccount, amount, reference });
    toast.success(`Successfully initiated transfer of £${amount} to ${toAccount}.`);
    // Reset form or navigate away
    // navigate('/accounts-dashboard');
  };
  
  const handleLogout = () => {
    console.log("Logout action triggered from MoveMoneyPage");
    navigate("/login"); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header appName="TSB Move Money" onLogout={handleLogout} />
      <main className="flex-grow flex items-center justify-center p-4">
        {/* We'll use Dialog components to style the form container like a modal, but on a full page */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-gray-800">Move Money</DialogTitle>
            <DialogDescription className="mt-1 text-sm text-gray-600">
              Transfer funds securely between your accounts or to a new payee.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <Label htmlFor="fromAccount" className="text-sm font-medium text-gray-700">From Account</Label>
              <Select value={fromAccount} onValueChange={setFromAccount}>
                <SelectTrigger id="fromAccount" className="w-full mt-1">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current_account_123">Current Account (****7890) - £3450.75</SelectItem>
                  <SelectItem value="savings_account_456">Savings Account (****0012) - £12500.50</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="toAccount" className="text-sm font-medium text-gray-700">To Account / Payee</Label>
              <Input 
                id="toAccount" 
                type="text" 
                placeholder="Enter account number or select saved payee" 
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
                className="w-full mt-1"
                required
              />
              {/* Future: Could be a Select for saved payees or an Input for new ones */}
            </div>

            <div>
              <Label htmlFor="amount" className="text-sm font-medium text-gray-700">Amount (£)</Label>
              <Input 
                id="amount" 
                type="number" 
                placeholder="0.00" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full mt-1"
                required
                min="0.01"
                step="0.01"
              />
            </div>

            <div>
              <Label htmlFor="reference" className="text-sm font-medium text-gray-700">Reference (Optional)</Label>
              <Textarea 
                id="reference" 
                placeholder="E.g., Rent, Birthday gift" 
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                className="w-full mt-1"
              />
            </div>
            
            <DialogFooter className="sm:justify-between gap-2 flex-col sm:flex-row">
               <Button type="button" variant="outline" onClick={() => navigate('/accounts-dashboard')}>
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                Review & Confirm Transfer
              </Button>
            </DialogFooter>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MoveMoneyPage;
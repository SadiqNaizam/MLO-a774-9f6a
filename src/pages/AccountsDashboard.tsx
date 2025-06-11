import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AccountSummaryCard from '@/components/AccountSummaryCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button'; // For Card Controls button
import { CreditCard } from 'lucide-react';

// Placeholder data for AccountSummaryCard
const account1Transactions = [
  { id: '1', date: '2024-07-28', description: 'Grocery Store', amount: 55.20, type: 'debit' as 'debit' | 'credit' },
  { id: '2', date: '2024-07-27', description: 'Salary Deposit', amount: 2500.00, type: 'credit' as 'debit' | 'credit' },
  { id: '3', date: '2024-07-26', description: 'Online Shopping', amount: 120.50, type: 'debit' as 'debit' | 'credit' },
];

const account2Transactions = [
  { id: '4', date: '2024-07-29', description: 'Gas Bill', amount: 75.00, type: 'debit' as 'debit' | 'credit' },
  { id: '5', date: '2024-07-25', description: 'Friend Transfer', amount: 50.00, type: 'credit' as 'debit' | 'credit' },
];

const AccountsDashboard = () => {
  console.log('AccountsDashboard loaded');
  const navigate = useNavigate();

  const handleMoveMoney = (accountId: string) => {
    console.log(`Move money clicked for account ${accountId}`);
    navigate('/move-money'); // Navigate to MoveMoneyPage
  };

  const handleCardManagement = (accountId: string) => {
    console.log(`Card management clicked for account ${accountId}`);
    navigate('/card-management'); // Navigate to CardManagementPage
  };

  const handleLogout = () => {
    console.log("Logout action triggered");
    // Add actual logout logic here, e.g., clearing tokens, redirecting to login
    navigate("/login"); // Example redirect
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header appName="TSB Dashboard" onLogout={handleLogout} />

      <NavigationMenu className="bg-white border-b border-gray-200 py-2 justify-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/accounts-dashboard" className={navigationMenuTriggerStyle()}>
              My Accounts
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/payments" className={navigationMenuTriggerStyle()}>
              Payments & Transfers
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/services" className={navigationMenuTriggerStyle()}>
              Services
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/support" className={navigationMenuTriggerStyle()}>
              Support
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Accounts Dashboard</h1>
        
        <ScrollArea className="h-[calc(100vh-280px)]"> {/* Adjust height as needed */}
          <div className="space-y-6">
            <section>
              <AccountSummaryCard
                accountName="Current Account"
                accountDetails="Sort Code: 12-34-56 | Account No: ****7890"
                balance={3450.75}
                currencySymbol="£"
                recentTransactions={account1Transactions}
                onMoveMoneyClick={() => handleMoveMoney('current_account_123')}
              />
              <Button 
                variant="outline" 
                className="mt-2 ml-auto flex items-center gap-2" 
                onClick={() => handleCardManagement('current_account_123')}
              >
                <CreditCard className="h-4 w-4" /> Card Controls
              </Button>
            </section>

            <section>
              <AccountSummaryCard
                accountName="Savings Account"
                accountDetails="Sort Code: 65-43-21 | Account No: ****0012"
                balance={12500.50}
                currencySymbol="£"
                recentTransactions={account2Transactions}
                onMoveMoneyClick={() => handleMoveMoney('savings_account_456')}
              />
               <Button 
                variant="outline" 
                className="mt-2 ml-auto flex items-center gap-2" 
                onClick={() => handleCardManagement('savings_account_456')}
              >
                <CreditCard className="h-4 w-4" /> Card Controls
              </Button>
            </section>
            {/* Add more AccountSummaryCard components here if needed */}
          </div>
        </ScrollArea>
      </main>
      <Footer />
    </div>
  );
};

export default AccountsDashboard;
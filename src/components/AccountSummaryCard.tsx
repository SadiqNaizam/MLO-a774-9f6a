import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button'; // For "Move money" button
import { TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react'; // Example icons for transactions

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
}

interface AccountSummaryCardProps {
  accountName: string;
  accountDetails: string; // e.g., account number, sort code
  balance: number;
  currencySymbol?: string;
  recentTransactions?: Transaction[];
  onMoveMoneyClick?: () => void;
}

const AccountSummaryCard: React.FC<AccountSummaryCardProps> = ({
  accountName,
  accountDetails,
  balance,
  currencySymbol = '£',
  recentTransactions = [],
  onMoveMoneyClick,
}) => {
  console.log("Rendering AccountSummaryCard for:", accountName);

  const formatCurrency = (value: number) => {
    return `${currencySymbol}${value.toFixed(2)}`;
  };

  return (
    <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-gray-50 p-6">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-semibold text-black">{accountName}</CardTitle>
            <CardDescription className="text-sm text-gray-600">{accountDetails}</CardDescription>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-black">
            <MoreHorizontal className="h-5 w-5" />
            <span className="sr-only">Account options</span>
          </Button>
        </div>
        <div className="mt-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider">Balance on Account</p>
          <p className="text-3xl font-bold text-black">{formatCurrency(balance)}</p>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="recent-activity" className="border-b-0">
            <AccordionTrigger className="px-6 py-4 text-sm font-medium text-black hover:no-underline hover:bg-gray-50 data-[state=open]:bg-gray-100">
              Recent Activity
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-0 pb-4 bg-gray-50">
              {recentTransactions.length > 0 ? (
                <ul className="space-y-3 max-h-60 overflow-y-auto">
                  {recentTransactions.map((tx) => (
                    <li key={tx.id} className="flex justify-between items-center text-sm">
                      <div className="flex items-center">
                        {tx.type === 'credit' ? (
                          <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-2 text-red-500" />
                        )}
                        <div>
                          <p className="font-medium text-gray-800">{tx.description}</p>
                          <p className="text-xs text-gray-500">{tx.date}</p>
                        </div>
                      </div>
                      <span className={`font-medium ${tx.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                        {tx.type === 'credit' ? '+' : '-'}
                        {formatCurrency(Math.abs(tx.amount))}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 py-4 text-center">No recent transactions.</p>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {onMoveMoneyClick && (
          <div className="p-6 border-t border-gray-200">
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={onMoveMoneyClick}
            >
              Move money
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
export default AccountSummaryCard;
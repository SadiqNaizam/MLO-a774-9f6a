import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'; // Using Dialog for structure
import { ShieldCheck, Ban, Info } from 'lucide-react';

const CardManagementPage = () => {
  console.log('CardManagementPage loaded');
  const navigate = useNavigate();
  const [isCardFrozen, setIsCardFrozen] = useState(false);
  const [contactlessLimit, setContactlessLimit] = useState(100); // Example limit

  const handleLogout = () => {
    console.log("Logout action triggered from CardManagementPage");
    navigate("/login"); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header appName="TSB Card Management" onLogout={handleLogout} />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-gray-800">Card Management</DialogTitle>
            <DialogDescription className="mt-1 text-sm text-gray-600">
              Manage settings for your debit/credit card ending in ****7890.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="security" className="mt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="limits">Spending Limits</TabsTrigger>
            </TabsList>

            <TabsContent value="security" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-600" /> Card Security
                  </CardTitle>
                  <CardDescription>Control your card's active status and security features.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <Label htmlFor="freeze-card" className="font-medium">
                      {isCardFrozen ? 'Unfreeze Card' : 'Freeze Card'}
                    </Label>
                    <Switch
                      id="freeze-card"
                      checked={isCardFrozen}
                      onCheckedChange={setIsCardFrozen}
                      aria-label={isCardFrozen ? 'Unfreeze your card' : 'Freeze your card'}
                    />
                  </div>
                  {isCardFrozen && (
                    <Alert variant="destructive">
                      <Ban className="h-4 w-4" />
                      <AlertTitle>Card Frozen</AlertTitle>
                      <AlertDescription>
                        Your card is currently frozen. No transactions will be permitted.
                      </AlertDescription>
                    </Alert>
                  )}
                  <Button variant="outline" className="w-full">Report Lost or Stolen Card</Button>
                  <Button variant="outline" className="w-full">View PIN</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="limits" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Spending Limits</CardTitle>
                  <CardDescription>Adjust your daily or transaction limits.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="contactless-limit">Contactless Limit: £{contactlessLimit}</Label>
                    {/* Placeholder for limit adjustment UI, e.g., a slider or input */}
                  </div>
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      Contactless limit changes may take a few minutes to apply. Default limit is £100.
                    </AlertDescription>
                  </Alert>
                  <Button variant="outline" className="w-full">Set Online Spending Limit</Button>
                  <Button variant="outline" className="w-full">Set ATM Withdrawal Limit</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => navigate('/accounts-dashboard')}>
              Back to Dashboard
            </Button>
            {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white">Save Changes</Button> */}
          </DialogFooter>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CardManagementPage;
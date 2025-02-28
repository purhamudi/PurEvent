import React, { createContext, useContext, useState } from "react";

interface OrderNowDetails {
  postalCode?: string;
  deliveryDate?: string;
  deliveryTime?: string;
  peopleCount?: string;
  budgetPerPerson?: string;
  eventType?: string;
  moreDetails?: string;
}

interface OrderNowContextType {
  orderNowDetails: OrderNowDetails;
  setOrderNowDetails: React.Dispatch<React.SetStateAction<OrderNowDetails>>;
  resetOrderNowDetails: () => void; // ✅ Add reset function
}

// ✅ Create context
const OrderNowContext = createContext<OrderNowContextType | undefined>(
  undefined
);

// ✅ Provider Component
export const OrderNowProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [orderNowDetails, setOrderNowDetails] = useState<OrderNowDetails>({});

  // ✅ Function to reset form values
  const resetOrderNowDetails = () => {
    setOrderNowDetails({}); // This triggers a re-render in all consuming components
  };

  return (
    <OrderNowContext.Provider
      value={{ orderNowDetails, setOrderNowDetails, resetOrderNowDetails }}
    >
      {children}
    </OrderNowContext.Provider>
  );
};

// ✅ Custom Hook for using the context
export const useOrderNow = () => {
  const context = useContext(OrderNowContext);
  if (!context) {
    throw new Error("useOrderNow must be used within an OrderNowProvider");
  }
  return context;
};

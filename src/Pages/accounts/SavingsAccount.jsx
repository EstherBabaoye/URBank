import { useEffect } from "react";

export default function SavingsAccount() {
  useEffect(() => {
      document.title = "Savings Account";
    }, []);
    return <div className="mt-32 sm-mt-16 mb-24">This is the Savings ACCOUNT page.</div>;
  }
  
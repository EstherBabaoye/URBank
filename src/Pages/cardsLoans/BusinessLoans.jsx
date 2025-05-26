import { useEffect } from "react";

export default function BusinessLoans() {
  useEffect(() => {
      document.title = "Business Loans";
    }, []);
    return <div className="mt-32 sm-mt-16 mb-24">This is the Business ACCOUNT page.</div>;
  }
  
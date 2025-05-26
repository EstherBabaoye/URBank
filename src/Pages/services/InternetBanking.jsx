import { useEffect } from "react";

export default function InternetBanking() {
  useEffect(() => {
      document.title = "Internet Banking";
    }, []);
    return <div className="mt-32 sm-mt-16 mb-24">This is the Business ACCOUNT page.</div>;
  }
  
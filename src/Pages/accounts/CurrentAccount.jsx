import { useEffect } from "react";

export default function CurrentAccount() {
  useEffect(() => {
      document.title = "Current Account";
    }, []);
    return <div className="mt-32 sm-mt-16 mb-24">This is the Current ACCOUNT page.</div>;
  }
  
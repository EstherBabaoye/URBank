import { useEffect } from "react";

export default function StudentAccount() {
  useEffect(() => {
      document.title = "Student Account";
    }, []);
    return <div className="mt-32 sm-mt-16 mb-24">This is the Business ACCOUNT page.</div>;
  }
  
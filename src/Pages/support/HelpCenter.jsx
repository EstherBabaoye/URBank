import { useEffect } from "react";

export default function HelpCenter() {
  useEffect(() => {
      document.title = "Help Center";
    }, []);
    return <div className="mt-32 sm-mt-16 mb-24">This is the Business ACCOUNT page.</div>;
  }
  
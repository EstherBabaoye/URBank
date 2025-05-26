import { useEffect } from "react";

export default function Support() {
  useEffect(() => {
      document.title = "URBank Support";
    }, []);
    return <div className="mt-32 sm-mt-16 mb-24">This is the Support page.</div>;
  }
  
import { useEffect } from "react";

export default function Business() {
  useEffect(() => {
      document.title = "URBank Business Banking";
    }, []);
    return <div className="mt-32 sm-mt-16 mb-24">This is the Business Banking page.</div>;
  }
  
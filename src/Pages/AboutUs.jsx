import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
      document.title = "About URBank";
    }, []);
    return <div className="mt-32 sm-mt-16 mb-24">This is the About Us page.</div>;
  }
  
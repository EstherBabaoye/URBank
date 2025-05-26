import { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
      document.title = "Contact URBank";
    }, []);
    return <div className="mt-32 sm-mt-16 mb-24">This is the Contact Us page.</div>;
  }
  
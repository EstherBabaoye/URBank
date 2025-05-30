import { useEffect } from "react";
import OpenAccount from "./OpenAccount";

export default function BusinessAccount() {
  useEffect(() => {
      document.title = "Business Account";
    }, []);
     return (
        <div className="mt-40 pt-16 sm:mt-16 mb-24 ">
          <OpenAccount />
        </div>
      );
  }
  
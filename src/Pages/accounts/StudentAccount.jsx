import { useEffect } from "react";
import OpenAccount from "./OpenAccount";

export default function StudentAccount() {
  useEffect(() => {
      document.title = "Student Account";
    }, []);
   return (
           <div className="mt-40 pt-16 sm:mt-16 mb-24 ">
             <OpenAccount />
           </div>
         );
  }
  
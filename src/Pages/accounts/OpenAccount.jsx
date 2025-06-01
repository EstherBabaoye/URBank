import { useEffect } from "react";
import AccountOpeningForm from "./AccountOpeningForm";

export default function OpenAccount() {
  useEffect(() => {
    document.title = "Account Opening";
  }, []);

  return (
    <div className=" pt-16 mt-24 mb-24 ">
      <AccountOpeningForm />
    </div>
  );
}

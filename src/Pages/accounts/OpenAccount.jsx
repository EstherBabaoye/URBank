import { useEffect } from "react";
import AccountOpeningForm from "./AccountOpeningForm";

export default function OpenAccount() {
  useEffect(() => {
    document.title = "Account Opening";
  }, []);

  return (
    <div className=" mb-24 ">
      <AccountOpeningForm />
    </div>
  );
}

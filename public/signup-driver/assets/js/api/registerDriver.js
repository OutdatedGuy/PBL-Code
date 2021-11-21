import { driverInfo } from "../forms/driverForm.js";
import { licenseInfo } from "../forms/licenseForm.js";
import { loginInfo } from "../forms/loginForm.js";

const registerDriver = async () => {
  document.querySelector(".loadingContainer").classList.toggle("loading");

  const data = {
    ...driverInfo,
    ...licenseInfo,
    ...loginInfo,
  };

  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch("/api/driverRegistration", arg);
    const result = await response.json();

    if (result.status === "success") {
      alert("Driver Registered Successfully!!!");
      window.location.href = "../";
    } else {
      alert("Driver Registration Failed...");
    }
  } catch (error) {
    console.log(error);
    alert("Driver Registration Failed...");
  }

  document.querySelector(".loadingContainer").classList.toggle("loading");
};

export { registerDriver };

"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const UserIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MailIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LockIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <circle cx="12" cy="16" r="1"></circle>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const EyeIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeOffIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
);

const ArrowRightIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const ArrowLeftIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5"></path>
    <path d="m12 19-7-7 7-7"></path>
  </svg>
);

const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [ticketType, setTicketType] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [dob, setDob] = useState<Date | undefined>(undefined);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      Swal.fire({
        title: "Registration Successful",
        text: "Your account has been created",
        icon: "success",
        confirmButtonText: "Continue",
        confirmButtonColor: "#111",
      }).then(() => {
        window.location.href = "/";
      });
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-orange-700 dark:text-orange-100">
              Step {step} of 3
            </span>
            <span className="text-sm text-orange-500 dark:text-orange-400">
              {Math.round((step / 3) * 100)}%
            </span>
          </div>
          <div className="w-full bg-orange-200 dark:bg-orange-700 rounded-full h-2 overflow-hidden">
            <div
              className="signin-progress bg-orange-700 dark:bg-orange-100 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="signin-card bg-white dark:bg-black border border-orange-200 dark:border-orange-700 rounded-lg shadow-sm p-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-700 rounded-full mb-4">
              <UserIcon />
            </div>

            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Event Registration
              </h1>
            </div>

            <p className="text-sm text-orange-600 dark:text-orange-400">
              {step === 1 && "Let's start with your basic information"}
              {step === 2 && "Now, set up your credentials"}
              {step === 3 && "Almost done! Review your details"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 && (
              <div className="signin-step space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-orange-700 dark:text-orange-100"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="signin-input w-full px-3 py-2 bg-white dark:bg-black border border-orange-200 dark:border-orange-700 rounded-md text-sm text-orange-700 dark:text-orange-100 placeholder:text-orange-500 dark:placeholder:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-700 dark:focus:ring-orange-100 focus:border-transparent transition-all duration-200"
                    />
                    {fullName && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-400 dark:text-orange-500">
                        <CheckIcon />
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-orange-700 dark:text-orange-100">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={dob ? dob.toISOString().split("T")[0] : ""}
                    onChange={(e) =>
                      setDob(
                        e.target.value ? new Date(e.target.value) : undefined
                      )
                    }
                    className="signin-input w-full px-3 py-2 bg-white dark:bg-black border border-orange-200 dark:border-orange-700 rounded-md text-sm text-orange-700 dark:text-orange-100 placeholder:text-orange-500 dark:placeholder:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-700 dark:focus:ring-orange-100 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="ticketType"
                    className="text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Ticket Type
                  </label>
                  <select
                    id="ticketType"
                    value={ticketType}
                    onChange={(e) => setTicketType(e.target.value)}
                    className="signin-input w-full px-3 py-2 bg-white dark:bg-black border border-orange-200 dark:border-orange-700 rounded-md text-sm text-orange-700 dark:text-orange-100 placeholder:text-orange-500 dark:placeholder:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-700 dark:focus:ring-orange-100 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select ticket type</option>
                    <option value="General">General</option>
                    <option value="VIP">VIP</option>
                    <option value="Student">Student</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!fullName}
                  className="signin-button w-full bg-orange-700 dark:bg-orange-100 text-white dark:text-orange-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-orange-700 dark:hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-700 dark:focus:ring-orange-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Next Step
                  <ArrowRightIcon />
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="signin-step space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-orange-700 dark:text-orange-100"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-orange-400 dark:text-orange-500">
                      <MailIcon />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="signin-input w-full pl-9 pr-3 py-2 bg-white dark:bg-black border border-orange-200 dark:border-orange-700 rounded-md text-sm text-orange-700 dark:text-orange-100 placeholder:text-orange-500 dark:placeholder:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-700 dark:focus:ring-orange-100 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-orange-700 dark:text-orange-100"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-orange-400 dark:text-orange-500">
                      <LockIcon />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      className="signin-input w-full pl-9 pr-10 py-2 bg-white dark:bg-black border border-orange-200 dark:border-orange-700 rounded-md text-sm text-orange-700 dark:text-orange-100 placeholder:text-orange-500 dark:placeholder:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-700 dark:focus:ring-orange-100 focus:border-transparent transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-orange-400 dark:text-orange-500 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!email || !password}
                  className="signin-button w-full bg-orange-700 dark:bg-orange-100 text-white dark:text-orange-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-orange-700 dark:hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-700 dark:focus:ring-orange-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Next Step
                  <ArrowRightIcon />
                </button>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="signin-step space-y-4">
                <div className="bg-orange-50 dark:bg-orange-700 border border-orange-200 dark:border-orange-700 p-4 rounded-md">
                  <h3 className="font-medium text-orange-700 dark:text-orange-100 mb-3 flex items-center gap-2">
                    <CheckIcon />
                    Review Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-orange-600 dark:text-orange-400">
                        Name:
                      </span>
                      <span className="text-orange-700 dark:text-orange-100 font-medium">
                        {fullName}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-orange-600 dark:text-orange-400">
                        Email:
                      </span>
                      <span className="text-orange-700 dark:text-orange-100 font-medium">
                        {email}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-orange-600 dark:text-orange-400">
                        Password:
                      </span>
                      <span className="text-orange-700 dark:text-orange-100 font-medium">
                        ••••••••
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="signin-button w-full bg-orange-700 dark:bg-orange-100 text-white dark:text-orange-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-orange-700 dark:hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-700 dark:focus:ring-orange-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting..." : "Create Account"}
                </button>
              </div>
            )}
          </form>

          {/* Back btn */}
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-4 w-full text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-100 transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <ArrowLeftIcon />
              Back to previous step
            </button>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-orange-600 dark:text-orange-400">
              Already have an account?{" "}
              <a
                href="#"
                className="text-orange-700 dark:text-orange-100 font-medium hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

const styles = `
  .signin-input:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  .dark .signin-input:focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  }

  .signin-button:hover {
    transform: translateY(-1px);
  }

  .signin-progress {
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .signin-step {
    animation: slideIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .signin-card {
    animation: fadeIn 0.3s ease-out;
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

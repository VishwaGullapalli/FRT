import { useState } from "react";

type Props = {
  message: string;
  onClose: () => void;
}

const Popup = ({ message, onClose }: Props) => {

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return isVisible ? (
    <div className="fixed top-0 right-0 left-0 flex items-center justify-center h-full z-50">
      <div className="relative p-4 w-full max-w-lg h-full">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
          <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Alert</h3>
              <button
                onClick={handleClose}
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup
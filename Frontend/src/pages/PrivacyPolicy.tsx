import ScrollToTop from "@/componenets/ScrollToTop"
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div>
      <ScrollToTop />
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-blue-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-8 lg:mb-12">
              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">
                Privacy Policy
              </h1>
            </header>
            <div className="text-gray-700 dark:text-gray-300">
              <p>
                <strong>Effective Date:</strong> <span className="font-semibold">22-08-2023</span>
              </p>
              <p>
                Thank you for using Flasheasy ("we," "us," or "our"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, and safeguarding of your data. By using our services, you agree to the terms outlined in this policy.
              </p>
            </div>
            <ol className="list-decimal pl-6 mt-4">
              <li className="mt-4">
                <strong>Information We Collect</strong>
                <br />
                We collect and store only the necessary information required to provide you with our services. This may include personal information such as your name, email address, and any data you willingly provide during your interactions with our platform.
              </li>
              <li className="mt-4">
                <strong>Use of Information</strong>
                <br />
                Your data is used solely for the purpose of enhancing your experience with our services. We do not share, sell, or rent your personal information to any third parties for marketing purposes or any other reasons.
              </li>
              <li className="mt-4">
                <strong>Data Security</strong>
                <br />
                We take data security seriously and have implemented industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.
              </li>
              <li className="mt-4">
                <strong>Data Deletion</strong>
                <br />
                If you wish to have your data removed from our systems, you can request data deletion by contacting our support team at <u><Link to='/contact'>contacts page</Link></u>. Upon receiving your request, we will promptly delete your data from our records, except where retention is required by law.
              </li>
              <li className="mt-4">
                <strong>Data Access</strong>
                <br />
                You have the right to access the data we have collected from you. If you would like to review, modify, or receive a copy of the data we hold about you, please contact us at <u><Link to='/contact'>contacts page</Link></u>.
              </li>
              <li className="mt-4">
                <strong>Cookies and Tracking</strong>
                <br />
                We may use cookies and similar technologies to enhance your browsing experience. These technologies do not capture any personally identifiable information unless you provide it voluntarily.
              </li>
              <li className="mt-4">
                <strong>Third-Party Services</strong>
                <br />
                Our services may contain links to third-party websites or services. This Privacy Policy does not cover the practices of these third parties. We encourage you to review the privacy policies of any third-party services you interact with.
              </li>
              <li className="mt-4">
                <strong>Updates to Privacy Policy</strong>
                <br />
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be posted on this page with a revised effective date.
              </li>
              <li className="mt-4">
                <strong>Contact Us</strong>
                <br />
                If you have any questions, concerns, or requests regarding your privacy or our Privacy Policy, please contact us at <u><Link to='/contact'>contacts page</Link></u>.
              </li>
            </ol>
            <div className="text-gray-700 dark:text-gray-300 mt-4">
              <p>
                By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. Your continued use of our services constitutes your acceptance of any future revisions to this policy.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

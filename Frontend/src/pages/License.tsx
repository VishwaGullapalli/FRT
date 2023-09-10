import ScrollToTop from '@/componenets/ScrollToTop';

import React, { useEffect, useState } from 'react';

const License: React.FC = () => {
  const [licenseContent, setLicenseContent] = useState<string>('');

  useEffect(() => {
    fetch('LICENSE')
      .then((response) => response.text())
      .then((data) => setLicenseContent(data))
      .catch((error) => console.error('Error loading license file:', error));
  }, []);

  return (
    <div>
      <ScrollToTop />
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-blue-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-8 lg:mb-12">
              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">
                License
              </h1>
            </header>
            <div className="overflow-x-auto">
              <pre className="whitespace-pre-wrap">{licenseContent}</pre>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default License;

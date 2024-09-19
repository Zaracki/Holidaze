import PrimaryButton from '../../components/PrimaryButton';
import React, { useState } from 'react'; 
import { API_URL } from '../../common/Constants';
import { useFetch } from '../../components/hooks/useFetch';
import { VenueList } from '../../components/VenueList';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading, hasError } = useFetch(API_URL);

  const filteredData = data && data.data 
    ? data.data.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="bg-black min-h-screen">
      <div className="relative">
        <img
          src="src/assets/hero-image.png"
          alt="Hero"
          className="w-full h-[500px] object-cover mx-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-wide text-[#DAB674]">
            Find Your Perfect Getaway at Holidaze
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-[637px] mx-auto mb-6 font-medium">
            We specialize in providing the best locations for your unforgettable holiday experience.
          </p>
          <div className="flex items-center justify-center mt-5 w-full max-w-[660px]">
            <input
              type="text"
              placeholder="Search for your getaway..."
              className="flex-1 h-10 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <PrimaryButton className="ml-1">Search</PrimaryButton>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      )}
      {hasError && <p className="text-white">Error loading venues</p>} {/* Ensure text color is visible on black */}
      {!isLoading && !hasError && <VenueList products={filteredData} />}
    </div>
  );
};
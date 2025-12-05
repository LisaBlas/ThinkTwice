import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CourseWelcomeModal from '../components/CourseWelcomeModal';

const CoursePage = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Show modal if navigating from home page
  useEffect(() => {
    if (location.state?.fromHome) {
      setShowModal(true);
    }
  }, [location]);

  return (
    <>
      <CourseWelcomeModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <div className="min-h-screen hero-background-pattern text-editorial-charcoal flex flex-col items-center justify-center p-4">
        <div className="text-center bg-editorial-cream/80 backdrop-blur-sm p-10 rounded-lg shadow-xl">
          <h1 className="text-5xl font-bold font-playfair mb-4">Course Coming Soon</h1>
          <p className="text-xl mb-8">We're putting the finishing touches on our comprehensive course. Stay tuned!</p>
          <Link
            to="/"
            className="bg-editorial-orange hover:opacity-90 text-white font-bold py-3 px-6 transition duration-300 font-mono"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default CoursePage;

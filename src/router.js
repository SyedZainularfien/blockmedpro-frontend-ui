import React from 'react';
import { Navigate, useRoutes } from "react-router-dom";

/* Pages Import */
import HomePage from "./pages/HomePage/HomePage"
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import FaqPage from './pages/FaqPage/FaqPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TermsAndConditionPage from './pages/Terms&ConditionsPage/Terms&ConditionPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import NonDescriminationLanguagePage from './pages/NonDescriminationLanguagePage/NonDescriminationLanguagePage';

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about-us",
      element: <AboutUsPage />,
    },
    {
      path: "/faq",
      element: <FaqPage />,
    },
    {
      path: "/contact-us",
      element: <ContactUsPage />,
    },
    {
      path: "/404",
      element: <NotFoundPage />,
    },
    {
      path: "*",
      element: <Navigate to='/404' replace />,
    },
    {
      path: "/terms-and-conditions",
      element: <TermsAndConditionPage />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicyPage />
    },
    {
      path: "/notice-of-non-discrimination-and-language-assistance",
      element: <NonDescriminationLanguagePage />
    }
  ]);

  return routes;
}

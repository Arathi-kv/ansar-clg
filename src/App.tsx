

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HOME from "@/components/homes/home";
import University from "@/components/homes/university";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Aboutusv1 from "@/components/inner-pages/about-inner/about-us-v1";
import Aboutus from "@/components/inner-pages/about-inner/about-us";

import Team from "@/components/inner-pages/team-inner/team";
import Career from "@/components/inner-pages/career/career";
import CareerDetails from "@/components/inner-pages/career/career-details";
import EventGrid from "@/components/inner-pages/event/event-grid";
import EventList from "@/components/inner-pages/event/event-list";
import EventDetails from "@/components/inner-pages/event/event-details";
import TeamDetails from "@/components/inner-pages/team-inner/team-details";
import Price from "@/components/inner-pages/price";
import Faq from "@/components/inner-pages/faq";
import PrivacyPolicy from "@/components/inner-pages/privacy-policy";
import ZoomMetting from "@/components/inner-pages/zoom-metting";
import Signin from "@/components/inner-pages/auth/sign-in";
import Signup from "@/components/inner-pages/auth/sign-up";
import Shop from "@/components/inner-pages/shop/shop";
import ShopList from "@/components/inner-pages/shop/shop-list";
import ShopDetails from "@/components/inner-pages/shop/shop-details";
import Cart from "@/components/inner-pages/shop/cart";
import Checkout from "@/components/inner-pages/shop/checkout";
import Coursesv1 from "@/components/inner-pages/courses/courses-v1";
import Courses from "@/components/inner-pages/courses/courses";
import BlogGrid from "@/components/inner-pages/blog/blog-grid";
import BlogSidebar from "@/components/inner-pages/blog/blog-sidebar";
import BlogDetailsLeftSidebar from "@/components/inner-pages/blog/blog-details-left-sidebar";
import BlogDetailsRightSidebar from "@/components/inner-pages/blog/blog-details-right-sidebar";
import BlogDetailsWithoutSidebar from "@/components/inner-pages/blog/blog-details-without-sidebar";
import Contactus from "@/components/contacts/contact-us";
import ErrorPage from "@/components/inner-pages/error";

const router = createBrowserRouter([
   { path: "/", element: <HOME /> },
  { path: "/university", element: <University /> },
  


  { path: "/about-us-v1", element: <Aboutusv1 /> },
  { path: "/about-us", element: <Aboutus /> },

  { path: "/team", element: <Team /> },
  { path: "/career", element: <Career /> },
  { path: "/career-details", element: <CareerDetails /> },
  { path: "/event-grid", element: <EventGrid /> },
  { path: "/event-list", element: <EventList /> },
  { path: "/event-details", element: <EventDetails /> },
  { path: "/team-details", element: <TeamDetails /> },
  { path: "/price", element: <Price /> },
  { path: "/faq", element: <Faq /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/zoom-metting", element: <ZoomMetting /> },
  { path: "/sign-in", element: <Signin /> },
  { path: "/sign-up", element: <Signup /> },
  { path: "/shop", element: <Shop /> },
  { path: "/shop-list", element: <ShopList /> },
  { path: "/shop-details", element: <ShopDetails /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/courses-v1", element: <Coursesv1 /> },
  { path: "/courses", element: <Courses /> },
  { path: "/blog-grid", element: <BlogGrid /> },
  { path: "/blog-sidebar", element: <BlogSidebar /> },
  { path: "/blog-details-left-sidebar", element: <BlogDetailsLeftSidebar /> },
  { path: "/blog-details-right-sidebar", element: <BlogDetailsRightSidebar /> },
  { path: "/blog-details-without-sidebar", element: <BlogDetailsWithoutSidebar /> },
  { path: "/contact-us", element: <Contactus /> },
  { path: "/404", element: <ErrorPage /> },
  { path: "*", element: <ErrorPage /> },
]);


function App() {

  return (

    <RouterProvider router={router} />

  )
}

export default App

import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index/Index";
import About from "./Pages/About/About";
import Courses from "./Pages/Courses/Courses";
import Contact from "./Pages/Contact/Contact";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import NotFound from "./Pages/NotFound/NotFound";

import "rsuite/dist/rsuite.min.css";
import Services from "./Pages/Services/Services";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

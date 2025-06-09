import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import FloatingSidebar from './components/FloatingSidebar/FloatingSidebar';
import WellnessIntroSection from './components/WellnessIntroSection/WellnessIntroSection';
import WellnessPackage from './components/WellnessPackage/WellnessPackage';
import WellnessPhilosophy from './components/WellnessPhilosophy/WellnessPhilosophy';
import AppointmentBookingSection from './components/AppointmentBookingSection/AppointmentBookingSection';
import Footer from './components/Footer/Footer';


const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <FloatingSidebar />
      <WellnessIntroSection />
      <WellnessPackage />
      <WellnessPhilosophy/>
      <AppointmentBookingSection />
      <Footer />
    </div>
  );
};

export default Index;

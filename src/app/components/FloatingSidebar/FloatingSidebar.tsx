import { MonitorPlay, ShoppingCart } from 'lucide-react';
import './FloatingSidebar.css';

const FloatingSidebar = () => {
  return (
    <div className="floating-sidebar">
      <button className="floating-btn demos-btn">
        <MonitorPlay size={20} />
        <span>Demos</span>
      </button>
      <button className="floating-btn buy-btn">
        <ShoppingCart size={20} />
        <span>Buy Now</span>
      </button>
    </div>
  );
};

export default FloatingSidebar;

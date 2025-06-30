import { Phone, SparkleIcon } from 'lucide-react';

const Logo = () => {
  return (
    <div className="relative flex items-center space-x-2">
      {/* Phone Icon with Sparkle Overlay */}
      <div className="relative">
        <Phone size={32} className="text-white" />
        <SparkleIcon
          size={14}
          className="text-yellow-400 absolute -top-1 -right-1"
        />
      </div>

      {/* Logo Text */}
      <span className="text-xl sm:text-2xl font-bold text-white">CallGenius</span>
    </div>
  );
};

export default Logo;

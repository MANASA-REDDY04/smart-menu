
const GradientCard = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-3xl bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 shadow-lg border border-white/60 p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default GradientCard;

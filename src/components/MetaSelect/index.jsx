const MetaSelect = ({ iconPath, label, isEnabled, description }) => {
  if (!isEnabled) return null;
  
  return (
    <div className="flex items-center mt-4">
      <img src={iconPath} alt={label} className="w-6 h-6" />
      <div className="ml-4">
        <h3 className="text-lg font-medium">{label}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MetaSelect;
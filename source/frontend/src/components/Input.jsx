const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-event-none">
        <Icon className="size-5 text-gray-800" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-transparent bg-opacity-50 rounded-full   
        focus:outline-none border border-white hover:border-black focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-100 text-black placeholder-black  
        transition duration-200"
      />
    </div>
  );
};

export default Input;

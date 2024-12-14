const Spinner: React.FC = () => {
  return (
    <div className="animate-spin size-10 border-[5px] border-current border-t-transparent text-blue-600 rounded-full mx-auto flex justify-center dark:text-blue-500">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;

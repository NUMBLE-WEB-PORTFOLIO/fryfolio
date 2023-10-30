const HighlightOver = ({ children }: { children?: React.ReactNode }) => {
  return (
    <span className="hover:bg-yellow-800 hover:text-black cursor-pointer w-fit">
      {children}
    </span>
  );
};

export default HighlightOver;

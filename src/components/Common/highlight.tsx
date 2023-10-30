const Highlight = ({
  children,
  textColor = "text-yellow-800",
}: {
  children?: React.ReactNode;
  textColor?: string;
}) => {
  return <span className={`${textColor} font-normal`}>{children}</span>;
};

export default Highlight;

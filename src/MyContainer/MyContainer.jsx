const MyContainer = ({ children, className }) => {
  return <div className={`${className} mx-auto container`}>{children}</div>;
};

export default MyContainer;

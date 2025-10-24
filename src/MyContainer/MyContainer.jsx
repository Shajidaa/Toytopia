const MyContainer = ({ children, className }) => {
  return (
    <div className={`${className} mx-auto container px-5`}>{children}</div>
  );
};

export default MyContainer;

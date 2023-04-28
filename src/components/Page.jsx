const Page = (props) => {
  return (
    <div className="w-full flex flex-col items-center h-full main-container">
      {props.children}
    </div>
  );
};

export default Page;

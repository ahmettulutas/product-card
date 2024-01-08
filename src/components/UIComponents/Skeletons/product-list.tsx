const ProductsSkeleton = () => {
  return (
    <div
      role="status"
      className="animate-pulse container mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-6"
    >
      {Array.from({ length: 12 }).map((item, key) => (
        <div
          key={key}
          className="h-[410px] w-full bg-gray-300 dark:bg-gray-700"
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default ProductsSkeleton;

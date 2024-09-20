import BookingCard from "../Cards/BookingCard";

export const BookingList = ({ products }) => {
  if (products.length === 0) {
    return <div className="text-center mt-6">No results found</div>;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {products.map(product => (
        <BookingCard data={product} key={product.id} />
      ))};
    </div>
  );
};


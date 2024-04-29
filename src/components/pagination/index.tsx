import { PaginationProps } from "@/types/type";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className="px-4 py-2 mr-2 rounded-lg text-primary-foreground bg-primary"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="px-4 py-2">{`${currentPage} / ${totalPages}`}</span>
      <button
        className="px-4 py-2 ml-2 rounded-lg text-primary-foreground bg-primary"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

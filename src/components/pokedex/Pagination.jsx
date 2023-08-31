
const FIRST_PAGE = 1
const Pagination = ({ lastPage, pagesIncurrentBlocck, setCurrentPage, currentPage}) => {

    const handleNextPage = () => {
        setCurrentPage((prevState) => {
            const nextPage = prevState + 1
            if(nextPage <= lastPage){
                return nextPage
            } else {
                return prevState
            }
        })
    }

    const handleLastPege = () => setCurrentPage(lastPage)

    const handlePreviusPage = () => {
        setCurrentPage((prevPage) => {
            const newPage = prevPage - 1
            if(newPage >= FIRST_PAGE){
                return newPage
            } else {
                return prevPage
            }
        })
    }

    const handleFirstPage = () =>  setCurrentPage(FIRST_PAGE)

    return (
        <ul className="flex justify-center gap-4 p-4 items-center ">
            {currentPage >=2 && <li className="cursor-pointer bg-red p-[1px] rounded-full " onClick={handleFirstPage} >{<i className="bx bx-rewind"></i>}</li>}
            {currentPage >=2 && <li className="cursor-pointer bg-red p-[1px] rounded-full" onClick={handlePreviusPage} >{<i className="bx bx-skip-previous"></i>}</li>}
            

            {pagesIncurrentBlocck.map((page) => (
                <li key={page} className={`cursor-pointer p-[1px] rounded-full ${currentPage === page ? "text-white bg-red" : "" }`} onClick={() => setCurrentPage(page)}>{page}</li>
            ))}
            {currentPage < lastPage && <li className="cursor-pointer bg-red p-[1px] rounded-full" onClick={handleNextPage}>{<i className="bx bx-skip-next "></i>}</li>}
            {currentPage < lastPage && <li className="cursor-pointer bg-red p-[1px] rounded-full" onClick={handleLastPege}>{<i className="bx bx-fast-forward"></i>}</li>}
            
        </ul>
    );
};
export default Pagination;

function Pagination({ Pagination,onChangePage }) {
    const handleClilk =(e,page)=>{
        e.preventDefault();
        onChangePage(page);
    }
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${!Pagination.has_pre && 'disabled'}`}>
                    <a className="page-link" href="#" aria-label="Previous"
                    onClick={(e) => handleClilk(e,Pagination.current_page -1)}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {
                    Array.from({length: Pagination.total_pages},(_,i)=>(
                        
                            
                            <li className={`$page-item${Pagination.current_page === i+1 && 'active'}`} key={`${i}_page`}><a className="page-link" href="#"
                                onClick={(e) => handleClilk(e,i+1)}
                            >{i+1}</a></li>
                        
                ))
            }
                <li className={`page-item ${!Pagination.has_next && 'disabled'}`}>
                    <a className="page-link" href="#" aria-label="Next"  onClick={(e) => handleClilk(e,Pagination.current_page +1)}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;
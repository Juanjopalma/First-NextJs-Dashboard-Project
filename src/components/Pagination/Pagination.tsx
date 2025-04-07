import './pagination.scss';

const Pagination = () => {
  return (
    <div className='pagination'>
        <button className='pagination-button' disabled>Prev</button>
        <div className="pagination-numbers">
            <button className='pagination-number'>1</button>
            <button className='pagination-number'>2</button>
            <button className='pagination-number'>3</button>
            ...
            <button className='pagination-number'>10</button>
        </div>
        <button className='pagination-button no-disable'>Next</button>
    </div>
  )
}

export default Pagination;
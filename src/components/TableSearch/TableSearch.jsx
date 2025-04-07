import Image from "next/image";
import './tableSearch.scss';


const TableSearch = () => {
  return (
    <div className="tableSearch">
        <Image src="/search.png" alt='' width={14} height={14} />
        <input type="text" placeholder='Search...' />
    </div>
  )
}

export default TableSearch;
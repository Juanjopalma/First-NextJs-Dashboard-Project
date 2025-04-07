import './table.scss';

interface Column {
    header: string;
    accessor: string;
    className?: string;  
}

interface TableProps {
    columns: Column[]; 
}

const Table = ({ columns }: TableProps ) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.accessor}>{col.header}</th>
                    ))}
                </tr>
            </thead>
        </table>
    )
}

export default Table;
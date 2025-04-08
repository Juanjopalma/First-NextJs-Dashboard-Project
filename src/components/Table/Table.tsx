import './table.scss';

interface Column {
    header: string;
    accessor: string;
    className?: string;  
}

interface TableProps {
    columns: Column[]; 
    renderRow: (item:any) => React.ReactNode;
    data: any[];
}

const Table = ({ columns, renderRow, data }: TableProps ) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.accessor}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(item => renderRow(item))}
            </tbody>
        </table>
    )
}

export default Table;
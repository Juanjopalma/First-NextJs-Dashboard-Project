import TableSearch from '@/components/TableSearch/TableSearch';
import Image from 'next/image';
import Pagination from '@/components/Pagination/Pagination';
import Table from '@/components/Table/Table';
import './teachers.scss';

type Teacher = {
    id: number;
    teacherId: string;
    name: string;
    email?: string;
    photo: string;
    phone: string;
    subjects: string[];
    classes: string[];
    address: string;
  };

  interface Column {
    header: string,
    accessor: string, 
    className?: string
  }
  
  const columns: Column[] = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Teacher ID",
      accessor: "teacherId",
      className: "hidden md:table-cell",
    },
    {
      header: "Subjects",
      accessor: "subjects",
      className: "hidden md:table-cell",
    },
    {
      header: "Classes",
      accessor: "classes",
      className: "hidden md:table-cell",
    },
    {
      header: "Phone",
      accessor: "phone",
      className: "hidden lg:table-cell",
    },
    {
      header: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    }
  ];

const TeacherListPage = () => {
    return (
        <div className="teachers">
            {/* TOP */}
            <div className="teachers__top">
                <h1>All Teachers</h1>
                <div className="teachers__top-tableSearch">
                    <TableSearch />
                    <div className="teachers__top-buttons">
                        <button>
                            <Image src="/filter.png" alt='' width={14} height={14} />
                        </button>
                        <button>
                            <Image src="/sort.png" alt='' width={14} height={14} />
                        </button>
                        <button>
                            <Image src="/plus.png" alt='' width={14} height={14} />
                        </button>
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    )
}

export default TeacherListPage;
import TableSearch from '@/components/TableSearch/TableSearch';
import Image from 'next/image';
import Pagination from '@/components/Pagination/Pagination';
import Table from '@/components/Table/Table';
import './teachers.scss';
import Link from 'next/link';
import { role, teachersData } from '@/lib/data';

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

    const renderRow = (item: Teacher) => (
      <tr key={item.id} className='teacherlistPage__tr'>
        <td className='teacherlistPage__td1'>
          <Image 
            className='teacherlistPage__td1-image' 
            src={item.photo} 
            alt='' 
            width={40} 
            height={40} 
          />
          <div className="teacherlistPage__td1-nameAndEmail">
            <h3 className=''>{item.name}</h3>
            <p>{item?.email}</p>
          </div>
        </td>
        <td className='teacherlistPage__td2'>{item.teacherId}</td>
        <td className='teacherlistPage__td2'>{item.subjects.join(",")}</td>
        <td className='teacherlistPage__td2'>{item.classes.join(",")}</td>
        <td className='teacherlistPage__td2'>{item.phone}</td>
        <td className='teacherlistPage__td2'>{item.address}</td>
        <td className='teacherlistPage__td3'>
          <div>
            <Link href={`/list/teachers/${item.id}`}>
              <button className='teacherlistPage__td3-button1'>
                <Image src="/view.png" alt='' width={16} height={16} />
              </button>
            </Link>
            {role === "admin" && 
                <button className='teacherlistPage__td3-button2'>
                  <Image src="/delete.png" alt='' width={16} height={16} />
                </button>
              }
          </div>
        </td>
      </tr>
    )

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
            <Table columns={columns} renderRow={renderRow} data={teachersData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    )
}

export default TeacherListPage;
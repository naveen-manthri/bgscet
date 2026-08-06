import Table from '../../common/Table/Table';
import type { TableData } from '../../../types/hostel';

interface StaffDetailsProps {
  data: TableData;
}

function StaffDetails({ data }: StaffDetailsProps) {
  return <Table title={data.title} table={data.table} />;
}

export default StaffDetails;

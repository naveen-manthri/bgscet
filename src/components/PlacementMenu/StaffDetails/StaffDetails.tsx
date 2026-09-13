import Table from '../../common/Table/Table';
import type { TableData } from '../../../types/hostel';

interface StaffDetailsProps {
  data: TableData;
}

function StaffDetails({ data }: StaffDetailsProps) {
  return (
    <div
      className="staff-details"
      style={{
        boxSizing: 'border-box',
        marginTop: 'var(--mobile-margin-top)',
        padding: 'var(--mobile-padding)',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <Table title={data.title} table={data.table} />
    </div>
  );
}

export default StaffDetails;

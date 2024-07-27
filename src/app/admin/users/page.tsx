import AdminLayout from '../../../components/AdminLayout';
import { Table } from 'antd';
import { prisma } from '../../../lib/prisma';

async function fetchUsers() {
  const users = await prisma.user.findMany();
  return users;
}

const UsersPage = async () => {
  const users = await fetchUsers();

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt' },
  ];

  return (
    <>
      <h1>Users</h1>
      <Table columns={columns} dataSource={users} rowKey="id" />
    </>
  );
};

export default UsersPage;

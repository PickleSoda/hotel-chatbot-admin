// pages/api/users.js
import { prisma } from '../../lib/prisma/index';

export default async function handler(res:any, req:any) {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
}

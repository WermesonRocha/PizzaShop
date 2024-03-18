import { api } from '@/lib/axios'

interface ApproveOrderProps {
  orderId: string
}

export async function approveOrder({ orderId }: ApproveOrderProps) {
  return await api.patch(`/orders/${orderId}/approve`)
}

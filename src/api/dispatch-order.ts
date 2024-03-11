import { api } from '@/lib/axios'

interface DispatchOrderProps {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderProps) {
  return await api.patch(`/orders/${orderId}/dispatch`)
}

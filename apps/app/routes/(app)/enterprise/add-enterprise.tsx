import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/enterprise/add-enterprise')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(app)/enterprise/add-enterprise"!</div>
}

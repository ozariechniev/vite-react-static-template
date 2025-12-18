import Welcome from '@/components/welcome';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Welcome className="flex min-h-svh items-center justify-center" />;
}

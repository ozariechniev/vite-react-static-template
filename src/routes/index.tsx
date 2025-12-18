import Welcome from '@/components/welcome';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return <Welcome className="flex min-h-svh items-center justify-center" />;
}

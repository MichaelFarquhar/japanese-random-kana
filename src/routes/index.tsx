import { createFileRoute } from '@tanstack/react-router';
import { RandomKana } from '../RandomKana';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return <RandomKana />;
}

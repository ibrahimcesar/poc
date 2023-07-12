import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

interface Prop {
  time: string
}

Amplify.configure({
  ...awsExports,
  ssr: true
});

export default function Home() {
  const time = new Date().toISOString();
  return (
    <main>
      <h1>{time}</h1>
    </main>
  )
}

export const revalidate = 10;

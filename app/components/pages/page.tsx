'use client'

import { useQuery } from '@apollo/client';
import client from '@/app/lib/apolloClient';
import { HELLO_QUERY } from '../queries/hello';

export default function Home() {
  const { loading, error, data } = useQuery(HELLO_QUERY, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>GraphQL Data:</h1>
      <p>{data.hello}</p>
    </div>
  );
}

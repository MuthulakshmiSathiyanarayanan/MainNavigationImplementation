'use client'

import { useQuery } from '@apollo/client';
import client from '@/app/lib/apolloClient';
import { HELLO_QUERY } from '../queries/hello';

export default function Film() {
  const { loading, error, data } = useQuery(HELLO_QUERY);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p>Error: {error.message}</p>;
    
  }

  return (
         <div>
      {JSON.stringify(data)}
      </div>
    );
  }
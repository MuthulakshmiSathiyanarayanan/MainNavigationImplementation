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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Film List</h1>
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider  border-r border-gray-300">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider  border-r border-gray-300">Director</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider  border-r border-gray-300">Release Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider  border-r border-gray-300">Species</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.allFilms.films.map((film) => (
            <tr key={film.title}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900  border-r border-gray-300">{film.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500  border-r border-gray-300">{film.director}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500  border-r border-gray-300">{film.releaseDate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500  border-r border-gray-300">
                {film.speciesConnection.species.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {film.speciesConnection.species.map((species) => (
                      <li key={species.name}>
                        <strong>Name:</strong> {species.name}<br />
                        <strong>Classification:</strong> {species.classification}<br />
                        {/* <strong>Homeworld:</strong> {species.homeworld.name} */}
                        <strong>Homeworld:</strong> {species.homeworld?.name || 'Unknown'}//as it has shown error implemented OR to handle
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No species information available</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


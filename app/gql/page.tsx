'use client'
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ItemList } from '../components/queries/itemList';
import { SearchBarProps } from '../components/type';
import SearchBar from './search';

export default function Film() {
  const { loading, error, data } = useQuery(ItemList);
  const [searchQuery, setSearchQuery] = useState<string>('');
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p>Error: {error.message}</p>;
    
  }
   // Filter films based on the search query
   const filteredFilms = data?.allFilms.films.filter(film =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    film.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
    film.releaseDate.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Film List</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">Director</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">Release Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">Species</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredFilms.length > 0 ? (
            filteredFilms.map((film) => (
              <tr key={film.title}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-300">{film.title}</td>
                <td className="px-6 py-4 text-sm text-gray-500 border-r border-gray-300">{film.director}</td>
                <td className="px-6 py-4 text-sm text-gray-500 border-r border-gray-300">{film.releaseDate}</td>
                <td className="px-6 py-4 text-sm text-gray-500 border-t">
                  {film.speciesConnection.species.length > 0 ? (
                    <ul className="list-disc pl-5">
                      {film.speciesConnection.species.map((species) => (
                        <li key={species.name} className="mb-2">
                          <strong>Name:</strong> {species.name}<br />
                          <strong>Classification:</strong> {species.classification}<br />
                          <strong>Homeworld:</strong> {species.homeworld?.name || 'Unknown'}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No species information available</p>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-sm text-gray-500 text-center">No films found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


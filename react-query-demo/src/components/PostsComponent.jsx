import { useQuery } from 'react-query';

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Component to display posts
function PostsComponent() {
  // Using useQuery with advanced options
  const { 
    data, 
    error, 
    isLoading, 
    isError, 
    refetch, 
    isFetching, 
    isSuccess 
  } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
    staleTime: 1000 * 60,     // Consider data fresh for 1 minute
    refetchOnWindowFocus: true, // Refetch data when the window regains focus
    keepPreviousData: true    // Keep previous data while fetching new data
  });

  // Handling loading state
  if (isLoading) return <div>Loading...</div>;

  // Handling error state
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* Button to refetch data */}
      <button
        onClick={refetch}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Refetch Data
      </button>
      {/* Displaying fetching state */}
      {isFetching && <div>Fetching new data...</div>}
      {/* Displaying fetched posts */}
      {isSuccess && (
        <ul>
          {data.map(post => (
            <li key={post.id} className="mb-2 p-4 border rounded shadow-sm">
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostsComponent;

The solution involves robust error handling.  The API route should always return a JSON response, even in case of an error, with a clear indication of success or failure:

```javascript
// pages/api/data.js
export default async function handler(req, res) {
  try {
    // Fetch data...
    const data = await fetchData();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
```

The component should handle different response statuses and check the content type:

```javascript
// app/page.js
import { Suspense } from 'react';

export default async function Home() {
  const res = await fetch('/api/data');

  if (!res.ok) {
    const errorData = await res.json(); // Attempt to parse error
    throw new Error(`Fetch failed: ${res.status} ${errorData.error || res.statusText}`);
  }

  const data = await res.json();
  return (
    <div>{JSON.stringify(data)}</div>
  );
}
```
This approach ensures that any issues during fetching are properly caught and handled, preventing silent failures.
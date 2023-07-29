export async function fetchData() {
  try {
    const response = await fetch('http://localhost:3001/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

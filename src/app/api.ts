const fetchUrl = 'https://json-server-f8nc6iyk6-davisstacked.vercel.app/products'
export async function fetchData() {
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

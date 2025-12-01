"use server"
export default async function fetcher(url: string, options: RequestInit = {}) {
  try {
    const res = await fetch(url, {
      ...options,
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error("failed to fetching data");
    }
    return res.json();
  } catch (error) {
    console.log("fetcher error", error);
  }
}

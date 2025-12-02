"use server";
export default async function fetcher<T>(
  url: string,
  options: RequestInit = {}
) {
  try {
    const res = await fetch(url, {
      ...options,
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error("failed to fetching data");
    }
    return (await res.json()) as T;
  } catch (error) {
    console.log("fetcher error", error);
    return null
  }
}

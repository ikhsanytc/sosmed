export async function fetchApi() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/posts`, {
    cache: "no-store",
  });
  const posts = await res.json();

  return posts;
}

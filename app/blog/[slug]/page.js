// @flow strict
import { personalData } from "@/utils/data/personal-data";

// Required for static export
export async function generateStaticParams() {
  // Return empty array if no devUsername is configured
  if (!personalData.devUsername) {
    return [];
  }

  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
    
    if (!res.ok) {
      return [];
    }

    const blogs = await res.json();
    return blogs.map((blog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    return [];
  }
}

async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};

async function BlogDetails({params}) {
  const slug = params.slug;
  const blog = await getBlog(slug);
 
  return (
    <div>
    </div>
  );
};

export default BlogDetails;
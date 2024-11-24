import type { Blog, BodyBlog } from '~/types/blog';
import blogsData from '~/static/data/blogs.json';
import { slugText } from '~/utils';

export const useBlogStore = defineStore(
  'blog',
  () => {
    const blogs = ref<Blog[]>([]);
    const authStore = useAuthStore();

    const addBlog = (body: BodyBlog) => {
      const slug = slugText(body.title);
      const blog = blogs.value.find((item) => item.slug === slug);

      if (blog) return { success: false, message: 'Title exists.' };

      const data: Blog = {
        ...body,
        id: randomId(),
        slug,
        writer: authStore.user,
        created_at: new Date(),
      };

      blogs.value = [data, ...blogs.value];
      localStorage.setItem('blog', JSON.stringify(blogs.value));

      return { success: true, message: 'Successfully saved blog', data };
    };

    const updateBlog = (id: string, body: BodyBlog) => {
      const slug = slugText(body.title);
      const blogId = blogs.value.findIndex((item) => item.id === id);

      if (slug !== blogs.value[blogId].slug) {
        const blog = blogs.value.find((item) => item.slug === slug);
        if (blog) return { success: false, message: 'Title exists.' };
      }

      blogs.value[blogId] = {
        ...blogs.value[blogId],
        ...body,
        slug,
      };

      localStorage.setItem('blog', JSON.stringify(blogs.value));

      return {
        success: true,
        message: 'Successfully updated blog',
        data: blogs.value[blogId],
      };
    };

    const detailBlog = (slug: string) => {
      return blogs.value.find((item) => item.slug === slug);
    };

    const deleteBlog = (id: string) => {
      const filtered = blogs.value.filter((item) => item.id !== id);
      blogs.value = filtered;
      localStorage.setItem('blog', JSON.stringify(blogs.value));
    };

    const initilizeBlog = () => {
      const blogsLocal = localStorage.getItem('blog');
      if (!blogsLocal) {
        localStorage.setItem('blog', JSON.stringify(blogsData));
        blogs.value = blogsData;
      } else blogs.value = JSON.parse(blogsLocal);
    };

    return {
      blogs,
      addBlog,
      updateBlog,
      detailBlog,
      deleteBlog,
      initilizeBlog,
    };
  },
  { persist: true }
);

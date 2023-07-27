
export const loadBlog = async () => {
   const res = await fetch('');
   const data = await res.json();
   return data;

   // api key: 74af0c3b3594434db3c5a3466b8aec8a
};


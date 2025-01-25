interface IBlog {
  id:number,
  img:string,
  detail:string,
  title:string,
  p:string,
}

export const blog:IBlog[] = [
  {
    id:1,
    img:"/blog/blog1.png",
    detail: "/blog/admin.png",
    title: "Going all-in with millennial design",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    id:2,
    img:"/blog/blog2.png",
    detail: "/blog/admin2.png",
    title: "Exploring new ways of decorating",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    id:3,
    img:"/blog/blog3.png",
    detail: "/blog/admin3.png",
    title: "Handmade pieces that took time to make",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
]

interface IPost {
  id: number,
  img:string,
  title:string,
  date:string,
}
export const post:IPost[] = [
  {
    id:1,
    img: "/blog/post1.png",
    title: "Going all-in with millennial design",
    date: '03 Aug 2022',
  },
  {
    id:2,
    img: "/blog/post2.png",
    title: "Exploring new ways of decorating",
    date: '03 Aug 2022',
  },
  {
    id:3,
    img: "/blog/post3.png",
    title: "Handmade pieces that took time to make",
    date: '03 Aug 2022',
  },
  {
    id:4,
    img: "/blog/post4.png",
    title: "Modern home in Milan",
    date: '03 Aug 2022',
  },
  {
    id:5,
    img: "/blog/post5.png",
    title: "Colorful office redesign",
    date: '03 Aug 2022',
  },
]
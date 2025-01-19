interface ITop {
  id:number,
  name: string,
  price: string,
  img: string,
}

export const TopSale:ITop[] = [
  {
    id:1,
    name: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    img: "/homepage/top1.png"
  },
  {
    id:2,
    name: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    img: "/homepage/top2.png"
  },
  {
    id:3,
    name: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    img: "/homepage/top3.png"
  },
  {
    id:4,
    name: "Plain console with teak mirrow",
    price: "Rs. 25,000.00",
    img: "/homepage/top4.png"
  },
]

interface IBlog {
  id:number,
  img:string,
}
export const Blog:IBlog[] = [
  {
    id: 1,
    img: "/homepage/blog1.png",
  },
  {
    id: 2,
    img: "/homepage/blog2.png",
  },
  {
    id: 3,
    img: "/homepage/blog3.png",
  },
]
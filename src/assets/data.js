

export const slogans = [
    {
        title:'Count on us for dependable and timely deliveries',
        text:`Together, we create a haven of love and opportunity.
     `,
     bgImage:process.env.PUBLIC_URL + "/images/port-6670684_1280.jpg"
    },
    {
        title:'With years of experience, we bring unparalleled expertise to every shipment.',
        text:`One child at a time, we sculpt a path to a brighter tomorrow.`,
        bgImage:process.env.PUBLIC_URL + "/images/plane.jpg"
    },
    {
        title:'Tailored freight and logistics solutions designed to meet your unique requirements',
        text:`Planting seeds of change, cultivating dreams for a resilient future.`,
        bgImage:process.env.PUBLIC_URL + "/images/cargo.jpg"
    },
]


export const learningMaterial = [
    {
      title: "Books",
      text: ``,
      image: process.env.PUBLIC_URL + "/images/.jpg",
    },
    {
      title: "Books",
      text: ``,
      image: process.env.PUBLIC_URL + "/images/.jpg",
    },
    {
      title: "Books",
      text: ``,
      image: process.env.PUBLIC_URL + "/images/.jpg",
    },
    {
      title: "Books",
      text: ``,
      image: process.env.PUBLIC_URL + "/images/.jpg",
    },
];


export const navigationLinksData = [
    { title: "Home", path: "/" },
    { title: "Learning materials", path: "/learning-materials"},
    { title: "Books", path: "/", subLinks: learningMaterial },
    { title: "Blog", path: "/" },
    { title: "Contact", path: "/" },
  ];
export default function RelatedBookSection() {
  return (
    <div className="md:px-[10%] px-4 my-8">
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 flex-1">
        {materials.map((book) => (
          <div className="border border-primary mb-3 bg-white">
            <div className="md:h-[200px] h-[140px] bg-gray-100">
              <img src={book.image} alt="" />
            </div>
            <div className="md:p-3 p-2">
              <p className="md:font-base font- line-clamp-2">
                {book.description}
              </p>
              <div className="flex mt-3">
                <button className="bg-rose-600 text-white px-4 py-1">
                  download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const materials = [
  {
    title: "Advace JavaScript",
    image: process.env.PUBLIC_URL + "/images/js.jpeg",
    description: `It is an unofficial and free JavaScript ebook created for educational purposes. All the content is
      extracted from Stack Overflow Documentation`,
  },
  {
    title: "Basic JavaScript",
    image: process.env.PUBLIC_URL + "/images/js2.jpeg",
    description: `JavaScript is a case-sensitive language. This means the language considers capital letters to be
      different from their lowercase counterparts`,
  },
  {
    title: "Advace JavaScript",
    image: process.env.PUBLIC_URL + "/images/js.jpeg",
    description: `It is an unofficial and free JavaScript ebook created for educational purposes. All the content is
      extracted from Stack Overflow Documentation`,
  },
  //   {
  //     title: "Basic JavaScript",
  //     image: process.env.PUBLIC_URL + "/images/js2.jpeg",
  //     description: `JavaScript is a case-sensitive language. This means the language considers capital letters to be
  //       different from their lowercase counterparts`,
  //   },
  //   {
  //     title: "Advace JavaScript",
  //     image: process.env.PUBLIC_URL + "/images/js.jpeg",
  //     description: `It is an unofficial and free JavaScript ebook created for educational purposes. All the content is
  //       extracted from Stack Overflow Documentation`,
  //   },
  //   {
  //     title: "Basic JavaScript",
  //     image: process.env.PUBLIC_URL + "/images/js2.jpeg",
  //     description: `JavaScript is a case-sensitive language. This means the language considers capital letters to be
  //       different from their lowercase counterparts`,
  //   },
];

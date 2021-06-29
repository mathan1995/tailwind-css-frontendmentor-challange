import React,{useState,useEffect} from "react";

const articles = [
  {
    author: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    description:
      'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
    imgPath: '/images/image-currency.jpg',
    imgAlt: 'multiple bills with different values and currencies',
  },
  {
    author: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    description:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
    imgPath: '/images/image-restaurant.jpg',
    imgAlt: 'someone eating a hamburguer in a restaurant',
  },
  {
    author: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    description:
      'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
    imgPath: '/images/image-plane.jpg',
    imgAlt: 'A plane in the sky',
  },
  {
    author: 'By Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    description:
      'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
    imgPath: '/images/image-confetti.jpg',
    imgAlt: 'Falling confetti',
  },
];

export default function Blog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <section className="py-14 lg:py-24">
      <div className="container">
        <h2 className="text-center text-3xl lg:text-4xl text-primary-dark-blue mb-5 lg:text-left lg:mb-10">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 gap-5 lg:gap-7 lg:grid-cols-4">
          {articles.map((article) => (

            loading ? (
               <article className="bg-white rounded-xl">
                  <div className="h-full border-2 border-gray-100 rounded-lg overflow-hidden">
                    <div className="lg:h-48  bg-gray-300 md:h-36 w-full object-cover object-center"></div>
                    <div className="p-6">
                      <h2 className="bg-gray-200 rounded-xl animate-pulse h-4 w-1/4 mb-2"></h2>
                      <h1 className="w-1/2 mb-4 h-6  rounded-xl animate-pulse bg-gray-300"></h1>
                      <p className="leading-relaxed rounded-xl  mb-3 w-full h-3 animate-pulse bg-gray-200"></p>
                      <p className="leading-relaxed  rounded-xl mb-3 w-2/3 h-3 animate-pulse bg-gray-200"></p>
                      <p className="leading-relaxed rounded-xl  mb-3 w-1/2 h-3 animate-pulse bg-gray-200"></p>
                      <div className="flex items-center flex-wrap ">
                        <a className="bg-gray-200 rounded-xl h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                        <span className="bg-gray-200 rounded-xl w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                      </div>
                    </div>
                  </div>
                </article>
              ) : (

          <article key={article.title} className="shadow-md transition delay-150 duration-300 ease-in-out bg-white rounded-xl hover:shadow-xl cursor-pointer">
              <div className="aspect-w-16 aspect-h-10 lg:aspect-w-4 lg:aspect-h-3">
                <img
                  className="object-cover rounded-t-xl"
                  src={article.imgPath}
                  alt={article.imgAlt}
                />
              </div>

              <div className="px-7 pt-5 pb-10 lg:p-6">
                <span className="text-neutral-grayish-blue text-xs">
                  {article.author}
                </span>
                <h4 className="text-primary-dark-blue text-sm py-2 hover:text-green-400">
                  <a href="#">{article.title}</a>
                </h4>
                <p className="text-neutral-grayish-blue text-xs">
                  {article.description}
                </p>
              </div>
              {/* <button className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">Hover me</button> */}
            </article>
              )
          
          ))}
        </div>
      </div>
    </section>
  );
}

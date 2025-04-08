import Tweet from "./Tweet";

const tweets = [
  {
    user: "Alice Johnson",
    username: "@alice_j",
    text: "Just built my first full-stack app with Next.js & Supabase! 🚀🔥 Loving the developer experience! #WebDev",
    time: "1h",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    user: "Mark Benson",
    username: "@markb_dev",
    text: "AI-generated code is cool, but debugging AI-generated bugs? That’s a nightmare. 😂 #CodingLife",
    time: "3h",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    user: "Sophia Lee",
    username: "@sophiaUX",
    text: "Designers, what's your take: Minimalist UI or feature-rich dashboards? 🤔🎨 #UXDesign",
    time: "6h",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    user: "David Kim",
    username: "@davidk",
    text: "Coding interviews in 2025: Solve this NP-hard problem in 15 minutes while balancing a coffee cup on your head. 🤯💻",
    time: "9h",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    user: "Emma Watson",
    username: "@emma_codes",
    text: "React 19 just dropped! What are your thoughts on the new features? 🚀🔥 #ReactJS",
    time: "12h",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

function DemoTweets() {
  return (
    <section className="w-full h-[500vh] relative  bg-gray-400 ">
      <div className=" sticky top-0 min-h-screen flex  items-center justify-center gap-4 flex-col  bg-purple-950  overflow-hidden">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 animate-slide-left">
            {tweets.map((tweet, index) => (
              <Tweet
                tweet={tweet}
                key={index}
                className="bg-slate-900 w-md aspect-video text-white grow dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              />
            ))}
          </div>
          <div className="flex gap-4 animate-slide-right">
            {tweets.map((tweet, index) => (
              <Tweet
                tweet={tweet}
                key={index + tweets.length}
                className="bg-slate-900 w-md aspect-video text-white grow dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoTweets;

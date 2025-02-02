import SearchForm from "@/components/SearchForm";
import { auth } from "@/auth";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  
  const posts = [
    {
      _createdAt: new Date().toDateString(),
      views:55,
      author:{_id:1, name:"John Doe"},
      _id:1,
      description:"This is a description",
      image:"https://picperf.io/https://laravelnews.s3.amazonaws.com/featured-images/whenLoaded.png",
      category:"Programming",
      title:"How programming evolved",
    },
  ]

  const session = await auth();

  console.log(session?.user?.id);

  

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="card-grid">

          {
            posts?.length > 0 ? (
              posts.map((post:StartupTypeCard) => <StartupCard key={post._id} post={post} />)
            ):(<p className="no-result">No startups found</p>)
          }

        </ul>

      
      </section>
    </>
  );
}
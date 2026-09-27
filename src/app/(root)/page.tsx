import Hello from "@/app/components/hello"

const Home = () => {
  console.log('what type of component am I?');
  
  return (
    <main>
      <div className="text-5xl underline">Home is where the heart is</div>
      <Hello />
    </main>
  )
}

export default Home

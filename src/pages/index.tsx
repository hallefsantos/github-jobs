import Head from 'next/head'
import Container from 'components/Container'
import Header from 'components/Header'
import SearchForm from 'components/SearchForm'

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Github Jobs</title>
      </Head>
      <Header />

      <div className="relative py-11 bg-red-400 flex justify-center items-center rounded overflow-auto">
        <img
          className="absolute w-full h-full object-cover"
          src="/backgroundImg.png"
          alt=""
        />
        <SearchForm />
      </div>
    </Container>
  )
}

export default Home

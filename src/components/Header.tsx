import Link from 'next/link'

const Header = () => {
  return (
    <header className="pt-3 sm:pt-8 pb-8">
      <Link href="/">
        <div className="table text-2xl cursor-pointer text-gray-dark">
          <strong>Github</strong>
          <span className="inline-block ml-2 font-light">Jobs</span>
        </div>
      </Link>
    </header>
  )
}

export default Header

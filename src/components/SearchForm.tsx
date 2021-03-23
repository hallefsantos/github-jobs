import { HiOutlineBriefcase } from 'react-icons/hi'

const SearchForm = () => {
  return (
    <form className="relative px-3 w-full max-w-3xl">
      <div className="relative">
        <span className="absolute inset-y-0 left-4 flex items-center">
          <HiOutlineBriefcase className="w-5 h-5 text-gray transform translate-y-0.5" />
        </span>
        <input
          className="pl-12 pr-32 sm:pr-44 h-14 w-full rounded text-sm text-gray-dark placeholder-gray focus:outline-none"
          type="text"
          placeholder="Title, companies, expertise or benefits"
        />
      </div>
      <button className="h-12 w-28 sm:w-36 absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue text-white rounded text-base sm:text-lg">
        Search
      </button>
    </form>
  )
}

export default SearchForm

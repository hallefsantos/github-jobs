type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="min-h-screen bg-gray-light">
      <div className="px-3 max-w-7xl mx-auto">{children}</div>
    </div>
  )
}

export default Container

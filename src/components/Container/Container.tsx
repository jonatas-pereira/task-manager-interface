type Props = {
  children: JSX.Element | JSX.Element[] | string | string[]
}

const Container = ({ children }: Props) => {
  return (
    <div className={"flex justify-center items-center w-full h-screen font-roboto-regular font-normal bg-gradient-to-r from-whiteF to-whiteI"}>
      <main className="flex justify-center items-center w-full h-5/6 max-w-screen-xl min-w-80 rounded-xl sm:flex-row sm:bg-secondS">
        { children }
      </main>
    </div>
  )
}

export default Container

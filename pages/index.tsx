import type { NextPage } from 'next'
import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession
}

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-2xl text-green-500">
        Netflix Clone
      </h1>
      <button
        onClick={() => signOut()}
        className="h-10 w-full bg-white"
      >
        Logout
      </button>
    </>
  )
}

export default Home

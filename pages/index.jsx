import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect } from 'react';
import Button from '../components/button/button';


export default function Home() {
  const { status } = useSession()

  if(status == "loading"){
    return <div>
      Loading
    </div>
  }

  if(status == "authenticated"){
    Router.push('/protected')
  }

  return (
    <div>
      <Head>
        <title>Create Next Auth</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col gap-y-5 justify-center items-center h-[100vh]'>
        <h1 className='text-5xl font-bold'>Next Auth with google</h1>
        <Button onTap={() => {
          signIn("google")
        }}>Google</Button>
      </main>
    </div>
  );
}

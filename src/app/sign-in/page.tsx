import { SignIn } from '@clerk/nextjs/app-beta'
import React from 'react'

const SignInPage = ({SearchParams}:any) => {
  const redirectUrl = SearchParams?.redirectUrl || "/"
  return (
    <div className='w-fit mx-auto mt-28'>
        <SignIn redirectUrl={redirectUrl}/>
    </div>
  
  )
}

export default SignInPage
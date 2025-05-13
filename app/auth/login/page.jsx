import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div>
      <nav>
        <Link href={"/auth/register"}>register</Link>
      </nav>
    </div>
  )
}

export default Login
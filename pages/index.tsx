import Link from 'next/link'

import dynamic from 'next/dynamic'

const Async = dynamic(() => import('../components/Async'))

function TestPage() {
  console.log('<TestPage /> renders')

  return (
    <>
      <div>
        <h1>Test</h1>
        <Async />
        <ul>
          <li>
            <Link href="/ssr">
              <a>SSR</a>
            </Link>
          </li>
          <li>
            <Link href="/ssg">
              <a>SSG</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default TestPage

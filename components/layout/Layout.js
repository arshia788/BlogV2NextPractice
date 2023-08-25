import Header from './Header'

export default function Layout({children}) {
  return (
    <div>
        <Header />
        <div className='flex flex-col gap-8'>{children}</div>
    </div>
  )
}

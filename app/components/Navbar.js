import Link from 'next/link';
export default function Navbar() {
  return (
    <nav class="bg-gray-900 py-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-end">
        <div class="flex">
          <h1>
            <Link href="/" class="nav-link text-white uppercase tracking-widest font-bold text-lg">Home</Link>
          </h1>
          <h1 class="ml-6">
            <Link href="/search" class="nav-link text-white uppercase tracking-widest font-bold text-lg">Search</Link>
          </h1>
        </div>
      </div>
    </div>
  </nav>
  
  )
}

import { MainContents } from '@/app/components/layouts/MainContents'
import {Head} from '@/app/components/layouts/Head'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Head/>
      <MainContents>
        HOME
        <ul>
          <li><Link href='/item' className='underline'>item</Link></li>
          <li><Link href='/search' className='underline'>search</Link></li>
        </ul>
      </MainContents>
    </main>
  );
}

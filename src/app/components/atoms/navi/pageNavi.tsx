"use client"
import Link from 'next/link'
import { useRecoilState } from 'recoil';
import { itemListAtom } from '@/app/recoil/itemListAtom';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


export const PageNavi = (props: { url: string }) => {

  const [itemList, setItemList] = useRecoilState(itemListAtom);

  const PER_PAGE = process.env.NEXT_PUBLIC_ITEM_PER_PAGE;//1ページにおける表示数
  const STEP = 2;//カレントページの前後表示数

  if (!itemList) return;

  const totalCount = Number(itemList.totalCount);//全記事
  const offset = Number(itemList.offset);//現在のページ数
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  let maxPage = Math.ceil(totalCount / PER_PAGE);
  let firstPage = (offset + 1) - STEP;
  let lastPage = (offset + 1) + STEP;


  let firstFlg = false;
  let lastFlg = false;

  if (firstPage <= 0) {
    firstPage = 1
    firstFlg = false;
  }  else {
    if (1 < firstPage) {
      firstFlg = true;
    }else{
      firstFlg = false;
    }
  };

  if (maxPage <= lastPage) {
    lastPage = maxPage
    lastFlg = false;
  } else {
    lastFlg = true
  };

  return (
    <>
      <ul className='flex gap-4 mt-1'>
        {
          0 < (offset) && <li className='flex bg-white rounded-md shadow-md '><Link href={`${props.url}?page=${offset}`} className='flex items-center px-3 py-2'><FaAngleLeft/></Link></li>
        }
        {
          firstFlg && (
            <>
              <li className='flex bg-white rounded-md shadow-md'><Link href={`${props.url}?page=1`} className='flex items-center px-3 py-2'>1</Link></li>
              <li className='flex bg-white items-center'>...</li>
            </>
          )
        }
        {range(firstPage, lastPage).map((number, index) => (
          <li key={`page-navi-${index}`} className={`flex bg-white rounded-md shadow-md ${number === (offset + 1) ? 'is-current':''}`}>
            {
              number === (offset + 1) ? <span  className='flex items-center px-3 py-2'>{number}</span> : <Link href={`${props.url}?page=${number}`} className='flex items-center px-3 py-2'>{number}</Link>
            }
          </li>
        ))}
        {
          lastFlg && (
            <>
              <li className='flex bg-white items-center'>...</li>
            <li className='flex bg-white rounded-md shadow-md'><Link href={`${props.url}?page=${maxPage}`} className='flex items-center px-3 py-2'>{maxPage}</Link></li>
            </>
          )
        }
        {
          (offset + 1) < maxPage && <li className='flex bg-white rounded-md shadow-md '><Link href={`${props.url}?page=${offset + 2}`} className='flex items-center px-3 py-2'><FaAngleRight/></Link></li>
        }
      </ul>
    </>
  )
}

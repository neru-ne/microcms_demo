import { useRecoilState } from "recoil";
import { searchKeywordAtom } from "@/app/recoil/searchKeywordAtom";

import { CommonButton } from "@/app/components/atoms/button/CommonButton";

//types
import { commonButtonType, searchFormType } from '@/app/types/components'

export const SearchForm = (props: searchFormType) => {

  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordAtom);

  const applyButton: commonButtonType = {
    mode: "button",
    linkHref: "",
    name: "検索",
    blank: false,
    onClick: props.onClick
  }

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget as HTMLInputElement;
    setSearchKeyword(target.value)
  }
  return (
    <div>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={searchKeyword} onChange={(e) => { changeInput(e)}} id="search" type="text" placeholder="検索" />
      <div className="mt-4">
        <CommonButton {...applyButton} />
      </div>
    </div>
  )
}

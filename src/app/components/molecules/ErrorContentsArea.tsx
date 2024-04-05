import { errorContentsArea } from '@/app/types/components'
import { CommonButton } from "@/app/components/atoms/button/CommonButton";

export const ErrorContentsArea = (props: errorContentsArea) => {
  const { data, error, buttonSetting } = props;

  if (error) {
    console.log(error.response)

    if (error.response.status === 404) {
      return (
        <>
          <p className="text-xl font-bold text-center">404</p>
          <p className="">記事がありません</p>
          {
            buttonSetting && (
              <div className="w-full flex justify-center">
                <CommonButton {...buttonSetting} />
              </div>
            )
          }
        </>
      );
    } else {
      return (
        <>
          <p className="text-xl font-bold">Error</p>
          <p className="">取得失敗</p>
          {
            buttonSetting && (
              <div className="w-full flex justify-center">
                <CommonButton {...buttonSetting} />
              </div>
            )
          }
        </>

      );
    }
  } else {
    if (!data) {
      return (
        <p className='text-center'>loading...</p>
      )
    }
  }
}

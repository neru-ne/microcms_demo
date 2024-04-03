/**
 * 日付を整形して返す
 * @param date 
 * @returns 
 */
export const formatedDate = (date:string) => {
  const dateList = date.split('T');
  const data = dateList[0];
  const result = data.replaceAll("-","/");
  
  return result;

}
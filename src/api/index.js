import ajax from './ajax'


// http://m.you.163.com/xhr/search/searchAutoComplete.json?keywordPrefix=a
//关键字
export  const reqKeyWord =(keywordPrefix)=>ajax(
  `/xhr/search/searchAutoComplete.json?`,
{keywordPrefix}
)

//搜索列表
export const reqSousuoLIst =()=>ajax('/xhr/search/init.json')
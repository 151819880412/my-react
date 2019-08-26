import React,{Component} from 'react'
import {NavLink,Link,Route,Switch,BrowserRouter} from 'react-router-dom'
import {reqKeyWord,reqSousuoLIst} from '../../api'
import AAA from './aaa'
import BBB from './bbb'

import User from '../User/User'
/*
Home路由组件
 */
export default class Home extends Component  {
    state={
        keyword:'',
        keywords:[],
        sousuoLIst:[],
        sousuoKeyword:''
    }


    async reqkeywords(e){
        // console.log(e.target.value)
        const keywords=e.target.value
        const result =await reqKeyWord(keywords)
        // console.log(result.data)
        this.setState({
            keywords:result.data
        })
        // console.log(this.state.keywords)
    }
    async componentWillMount () {
        const sousuoLIst1 =await reqSousuoLIst()
        // console.log(sousuoLIst1.data)
        this.setState({sousuoLIst:sousuoLIst1.data.hotKeywordVOList})
        this.setState({sousuoKeyword:sousuoLIst1.data.defaultKeyword})
      }

                // .map((item,index)=>console.log(item,index))
    
    render() {
        const {keywords,sousuoLIst,sousuoKeyword} =this.state ||[]
        // strArray.map(function(username){
        //     return <li>{username}</li>
        // })

        return (
            <div className="order" >
            {/* {keyword=>this.setState({keyword:keyword})} */}
            <input type="text" placeholder={sousuoKeyword.keyword} onChange={e=>this.reqkeywords(e)}/>
            <div>
                <ul>
                    {
                        keywords.map((item,index) =>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {
                        // Object.keys(obj);   遍历对象的key
                        Object.values(sousuoLIst).map((item,index) =>{
                            return <li key={index}>{item.keyword}</li>
                        })
                    }
                </ul>
            </div>

            
            {/* //params传参 */}
            <NavLink to="/home/aaa/1">AAA</NavLink>
            <Route path="/home/aaa/:id" component={AAA}/>




            {/* <NavLink to='/home/bbb'>home 子路由</NavLink>
                <Route path='/home/bbb' componet={BBB}></Route> */}

            {/* query传参 */}
            <div>
            <NavLink to="/home/bbb?id=1">BBB</NavLink>
            </div>
            <div>
            <Route path="/home/bbb" component={BBB}/>
            </div>
            </div>
          )
    }
}
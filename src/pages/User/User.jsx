import React,{Component} from 'react'


/*
User
 */
export default class User extends Component  {
   state = {
          list:[
            'learn react',
            'learn english'
          ]
        }
        componentDidMount(){
            // console.log(this.props)
        }

      render() {
        //jsx语法
        return (
          <div>
          <ul>
    {
      this.state.list.map((item,index) =>{
        return <li key={index}>{item}</li>
      })
    }
          </ul>
          </div>
        );
      }
}
import React, {Component} from 'react';
import { Avatar } from 'antd';


export default class HeaderUser extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
          <div style={{color: '#fff', display: 'flex', flexDirection:'row', alignItems: 'center'}}>
              <div style={{marginRight: 8}}>徐淋宇</div>
              <Avatar size="default" />
          </div>
        )
    }
}

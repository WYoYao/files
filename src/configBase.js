import {range} from 'lodash';

export default {
    menus:range(10).map((item,index)=>({
        name:`文件管理${index}`,
        code:index
    }))
}
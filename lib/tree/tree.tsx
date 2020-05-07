import * as React from 'react'
import './tree.scss'
import TreeNode from './tree-node'
import { TreeProps } from './type'

import {createScopedClasses} from "../utils/classNames";
const sc = createScopedClasses('tree')

const switchToMap = (source) => {
    const sourceMap = {}

    const f = (source, parentKey?) => {
        source.forEach(node => {
            parentKey && (node.parentKey = parentKey)
            sourceMap[node.key] = node
            if (node.children) f(node.children, node.key)
        })
    }
    f(source)
    
    return sourceMap
}

const Tree: React.FC<TreeProps> = (props) => {
    const { source } = props
    const sourceMap = switchToMap(source)

    return (
        <div className={sc()}>
            {source.map(node => <TreeNode {...props} sourceMap={sourceMap} node={node} key={node.key} />)}
        </div>
    )
}

export default Tree
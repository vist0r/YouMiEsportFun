import React from "react"
import { mergeStyleSets } from "@uifabric/merge-styles"

interface IDefaultheaderProps{

}

const headerStyles = mergeStyleSets({
    root :{
        width : "100%",
        background: "#333",
        minHeight: "55px",
        flex: 1,
    }   
})
export const Defaultheader = (props: IDefaultheaderProps) => 
    <div className={headerStyles.root}>
        
    </div>


import React from "react"
import { mergeStyleSets } from "@uifabric/merge-styles"



const footerStyles = mergeStyleSets({
    root: {
        flexShrink: 0,
    },
    content: {
        height: "55px",
        background: "#333",
    }
})

interface IDefaultfooterProps{
    
}

export const Defaultfooter = (props: IDefaultfooterProps) => 
    <footer className={footerStyles.root}>
        <div className={footerStyles.content}>
        </div>
    </footer>
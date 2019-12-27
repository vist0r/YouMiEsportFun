import React from 'react';
import { mergeStyles, mergeStyleSets } from '@uifabric/merge-styles';
import { Defaultheader } from './layout/DefaultHeader';
import { Defaultfooter } from './layout/DefaultFooter';

const rootStyle = mergeStyleSets({
    warpper:{
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },

    root :{
        flex : "1 0 auto",
    }
})

export class PageBase<P,T> extends React.Component<P,T>{
    constructor(props: P){
        super(props);
    }

    onRenderHeader(){
         return <Defaultheader/>
    }

    onRenderFooter(){
        return <Defaultfooter/>
    }

    onRenderBody(){
        return null;
    }

    render(){
        return (
            <div className={rootStyle.warpper}>
                <div className={rootStyle.root}>
                    <div>
                        {this.onRenderHeader()}
                    </div>
                    <div>
                        {this.onRenderBody()}
                    </div>
                </div>
                {this.onRenderFooter()}
            </div>
        )
    }

}
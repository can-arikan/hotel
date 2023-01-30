import React from "react"
import '../../css/PageContainer/pageContainer.scss';

export const PageContainer = (props: {
    children: React.ReactNode,
    id?: string,
    marginTop?: string,
    minWidth?: string,
    zIndex?: number
}) => {
    return (
        <div id={props.id} className="PageContainer" style={{marginTop: props.marginTop, minWidth: props.minWidth, zIndex: props.zIndex}}>
            {props.children}
        </div>
    )
}

export const TransitionPage = (props: {children: React.ReactNode}) => {
    return (
        <div className="PageContainer TransitionPicture">
            {props.children}
        </div>
    )
}
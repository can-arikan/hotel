import React from "react"
import '../../css/pageContainer.scss';

export const PageContainer = (props: {
    children: React.ReactNode,
    id?: string,
    marginTop?: string,
    minWidth?: string
}) => {
    return (
        <div id={props.id} className="PageContainer" style={{marginTop: props.marginTop, minWidth: props.minWidth}}>
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
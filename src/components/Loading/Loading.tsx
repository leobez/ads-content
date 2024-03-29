type Props = {
    message: string
}

const Loading = (props: Props) => {
    return (
        <>
            <p>{props.message}</p>
            <div className="loader"/> 
        </>
    )
}

export default Loading
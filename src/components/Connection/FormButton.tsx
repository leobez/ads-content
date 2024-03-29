type Props = {
    value: string
}

const FormButton = (props: Props) => {
    return (
        <>
            {props.value === 'C' &&
                <input type="Submit" defaultValue="Connect" className="form-button"/>
            }
            {props.value === 'D' &&
                <input type="Submit" defaultValue="Disconnect" className="form-button"/>
            }
            {props.value === 'LC' &&
                <input type="Submit" defaultValue="Connecting..." disabled className="form-button"/>
            }
            {props.value === 'LD' &&
                <input type="Submit" defaultValue="Disconnecting..." disabled className="form-button"/>
            }
        </>

    )
}

export default FormButton
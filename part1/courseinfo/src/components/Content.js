const Content = (props) => {
    const map = props.data.map((item) => {
        return (
            <p key={item.name}>{item.name} {item.exercises}</p>
        )
    }
    )

    return (
        <div>
            {map}
        </div>
    )
}

export default Content
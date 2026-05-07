import Part from "./Part"

const Content = (props) => {
    const items = props.data.map((item) => {
        return (
            <Part key={item.name} name={item.name} exercises={item.exercises} />
        )
    }
    )

    return (
        <div>
            {items}
        </div>
    )
}

export default Content
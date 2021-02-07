const Launch = ({launch}) => {
    return (
        <>
        <p>{launch.name}</p>
        <img src={launch.links.patch.small} alt={launch.name}/>
        </>
    )
}

export default Launch
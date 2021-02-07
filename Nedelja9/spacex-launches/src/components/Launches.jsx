import Launch from "./Launch"

const Launches = ({pastLaunches}) => {
    return (
        <>
            {pastLaunches.map(launch => <Launch key={launch.id} launch={launch}/>)}
        </>
    )
}

export default Launches
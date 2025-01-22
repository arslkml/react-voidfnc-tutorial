type ProfileCardProps = {
    name?: string,
    age?: number,
    birthday: number,
}

const CardProfile = (props: ProfileCardProps) => {
    const { name = 'Anonymous', birthday, age } = props

    return (
        <div className="card-profile">
            <h1>Name: {name}</h1>
            <p>Birthday: {birthday}</p>
            { age && <p>Age: {age}</p>}
        </div>
    )
}

export default CardProfile;
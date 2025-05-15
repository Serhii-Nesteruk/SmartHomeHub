export default function Step({ icon: Icon, title, description, side }) {
    return (
        <div className={`hiw-step-wrapper ${side}`}>
            <div className="hiw-step">
                <Icon className="hiw-icon" />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

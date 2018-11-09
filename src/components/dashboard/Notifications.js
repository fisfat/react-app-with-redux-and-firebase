import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
    const {notifications} = props
    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        { notifications && notifications.map( notification => {
                            return(
                                <li key={notification.id}>
                                    <span> { notification.user } </span>
                                    <span className="grey-text"> { notification.content } </span>
                                    <br/>
                                    <small className="grey-text"> { moment(notification.time.toDate()).fromNow() } </small>
                                    <hr />
                                </li>
                                
                            )

                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications
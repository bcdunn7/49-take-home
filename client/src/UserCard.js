import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const UserCard = ({ user }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle tag='h5'>
                    {user.firstName} {user.lastName}
                </CardTitle>
                <CardSubtitle>
                    {user.email}
                </CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default UserCard;
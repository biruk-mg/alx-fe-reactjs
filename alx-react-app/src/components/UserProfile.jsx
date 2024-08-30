// src/components/UserProfile.jsx
import PropTypes from 'prop-types'; // Import PropTypes

const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

// Define PropTypes
UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    bio: PropTypes.string.isRequired,
};

export default UserProfile;
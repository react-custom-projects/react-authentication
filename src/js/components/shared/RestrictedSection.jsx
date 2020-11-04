import React from 'react';
import PropTypes from 'prop-types';

//this component will return children if at least one of the required permissions is in userPermissionsList
const RestrictedSection = ({ requiredPermissions, children }) => {
	//should be replaced with actual user permissions
	const userPermissionsList = ['EDIT_NOTE', 'CREATE_NOTE'];

	if (Array.isArray(requiredPermissions)) {
		for (let i = 0; i < requiredPermissions.length; i++) {
			for (let j = 0; j < userPermissionsList.length; j++) {
				if (requiredPermissions[i] === userPermissionsList[j]) return children;
			}
		}
	}
	if (typeof requiredPermissions === 'string') {
		if (userPermissionsList.findIndex((permission) => permission === requiredPermissions) > -1)
			return children;
	}
	return null;
};

RestrictedSection.propTypes = {
	requiredPermissions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default RestrictedSection;

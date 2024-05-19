const UserSetItem = (email: string, authuid: string, profile: string) => {
    if (email != null && authuid != null && profile != null) {
        localStorage.setItem('userEmail', JSON.stringify({ email }));
        localStorage.setItem('authuid', JSON.stringify({ authuid }));
        localStorage.setItem('profile', JSON.stringify({ profile }));
    }
}

export default UserSetItem
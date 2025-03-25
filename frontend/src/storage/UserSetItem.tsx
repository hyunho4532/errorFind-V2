const UserSetItem = (email: string | undefined, authuid: string | undefined, profile: string) => {

    const jsonData = {
        userEmail: email,
        authuid: authuid,
        profile: profile
    }

    localStorage.setItem('userData', JSON.stringify(jsonData));
}

export default UserSetItem
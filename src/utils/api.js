const URL = "http://206.189.91.54/api/v1";
const getHeaders = () => {
    const headerData = JSON.parse(localStorage.getItem('headerData')) || {};
    return {
        "Content-Type": "application/json",
        "access-token": headerData["accessToken"],
        client: headerData["client"],
        expiry: headerData["expiry"],
        uid: headerData["uid"]
    }
}

export const createUser = async (userData) => {
    try {
        const response = await fetch(`${URL}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            console.log('User created successfully');
            const userData = await response.json()
            return userData;
        } else {
            console.error('Error creating user:', response.statusText);
        }
    } catch (error) {
        console.error('Error creating user:', error.message);
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await fetch(`${URL}/auth/sign_in`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const responseData = await response.json();

        if (response.ok) {
            console.log('User created successfully');

            const headerData = {
                accessToken: response.headers.get('access-token'),
                client: response.headers.get('client'),
                expiry: response.headers.get('expiry'),
                uid: response.headers.get('uid')
            }

            if (userData && headerData.accessToken) {
                localStorage.setItem("headerData", JSON.stringify(headerData) || []);
                localStorage.setItem("loginData", JSON.stringify(responseData));
                return userData;
            } else {
                console.error('Login Failed.', response.statusText)
            }

        } else {
            console.error('Error logging in:', error.message);
        }
    } catch (error) {
        console.error('Error logging in:', error.message);
    }
};

export const getAllUsers = () => {
    const options = {
        method: 'GET',
        headers: getHeaders()
    };

    const apiURL = `${URL}/users`;

    return { apiURL, options}
};

export const sendMessage = (requestBody) => {
    const options = {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(requestBody)
    };

    const apiURL = `${URL}/messages`;

    return { apiURL, options}
};

export const getReceiverMessage = (receiverId, receiverClass) => {
    const options = {
        method: 'GET',
        headers: getHeaders()
    };

    const apiURL = `${URL}/messages?receiver_id=${receiverId}&receiver_class=${receiverClass}`;

    return { apiURL, options}
}

export const getAllChannels = () => {
    const options = {
        method: 'GET',
        headers: getHeaders()
    };

    const apiURL = `${URL}/channels`;

    return { apiURL, options}
};

export const createChannel = (requestBody) => {
    const options = {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(requestBody)
    };

    const apiURL = `${URL}/channels`;

    return { apiURL, options}
};

export const getChannels = (channelId) => {
    const options = {
        method: 'GET',
        headers: getHeaders(),
    };

    const apiURL = `${URL}/channels/${channelId}`;

    return { apiURL, options}
}
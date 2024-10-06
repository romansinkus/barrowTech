import axios from 'axios';

export async function testRunMatlab(inputParam1: number, inputParam2: number) {
    const url = 'http://127.0.0.1:5000/run-matlab'; // Update this if your Flask app is hosted elsewhere
    
    // Define the parameters to send
    const params = {
        param1: inputParam1,
        param2: inputParam2,
    };

    try {
        // console.log("TEST")
        const response = await axios.post(url, params);
        // console.log("TEST2")
        console.log('Response:', response.data.stdout);
        return response.data.stdout;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error response:', error.response?.data);
        } else {
            console.error('Error message:', error.message);
        }
    }

}

testRunMatlab(0.16, 80);
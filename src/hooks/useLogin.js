import axios from 'axios';
import { useState, useEffect } from 'react';

function useLogin(code) {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);

    //login
  useEffect( () => {
    axios.post('http://localhost:3001/login', {
        code: code
    }).then((result) => {
      const bodyTokens = result.data.body;
        setAccessToken(bodyTokens.access_token);
  setRefreshToken(bodyTokens.refresh_token);
    })
    }, [code])

  return accessToken;
}
export default useLogin
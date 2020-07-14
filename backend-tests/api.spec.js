import axios from 'axios';

const api = axios.create({
  baseURL: process.env['API_ENDPOINT']

}); 

describe('Given user access api',  () => {
  it('When a non-valid post-code is posted Then invalid postcode error should be returned', async () => {

    try {
      const response = await api.post('/api', {
        address:"EC1A 1BB"
      });

    } catch(err) {
      expect(err.response.status).toEqual(435);
      expect(err.response.data.errorMessage).toEqual('Invalid Address');
    }

    expect.assertions(2)

  });

  it('When a non-existing post-code is posted Then unable to find address error should be returned', async () => {

    try {
      const response = await api.post('/api', {
        address:"B99 9AA"
      });

    } catch(err) {
      expect(err.response.status).toEqual(433);
      expect(err.response.data.errorMessage).toEqual('Problem with Geocode API: Unable to find that address.');
    }

    expect.assertions(2)

  });

  it('When a valid post-code is posted Then weather details response should be returned', async () => {

      const response = await api.post('/api', {
        address:"W6 0NW"
      });

      expect(response.status).toEqual(200);
      expect(response.data.timezone).toBeDefined();

  });

  it('When a valid non-space separated and case-insensitive post-code is posted Then weather details response should be returned', async () => {

    const response = await api.post('/api', {
      address:"w60nW"
    });

    expect(response.status).toEqual(200);
    expect(response.data.timezone).toBeDefined();

  });
});



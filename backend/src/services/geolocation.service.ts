import axios from 'axios';

class GeolocationService {
    static async getCoordinatesFromCep(cep: string): Promise<{ latitude:number; longitude: number} | null>{
        try{
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            
            if(response.data.erro) return null;
            const endereco = `${response.data.logradouro}, ${response.data.localidade}, ${response.data.uf}`;
            const geoResponse = await axios.get(`https://nominatim.openstreetmap.org/search`,{
                params: {
                    q:endereco,
                    format:"json",
                    limit:1
                }
            });

            if (geoResponse.data.length === 0) return null;

                return {
                    latitude: parseFloat(geoResponse.data[0].lat),
                    longitude: parseFloat(geoResponse.data[0].lon)
                }
        }catch(error)
        {
            console.error("Erro ao obter coordenadas:", error);
            return null;
        }
    }
}

export default GeolocationService;
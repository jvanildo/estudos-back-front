import LojaRepository from "../repositories/loja.repository"
import GeolocationService from "./geolocation.service";

class LojaService {
    static async getLoja(){
        return LojaRepository.getLojas();
    }

    static async createLoja(lojaData: {name:string; endereco: string; cep:string; numero: number}){
        const coords = await GeolocationService.getCoordinatesFromCep(lojaData.cep);
        if(!coords) throw new Error("CEP inválido ou não encontrado!");

        return await LojaRepository.createLoja({...lojaData,latitude: coords.latitude, longitude: coords.longitude});
    }

    static async buscarLojasProximas(cep: string, raioKm: number = 5){

        const coords = await GeolocationService.getCoordinatesFromCep(cep);
        if(!coords) throw new Error("CEP inválido!");

        const lojas = await LojaRepository.getLojas();

        return lojas.filter(loja=> {
            const distancia = LojaService.calcularDistancia(coords.latitude, coords.longitude, loja.latitude, loja.longitude);
            return distancia <= raioKm;
        })
    }
        private static calcularDistancia(lat1: number, long1: number, lat2:number, long2: number){
            const R = 6371;
            const dLat = (lat2 - lat1) * (Math.PI/180);
            const dLong = (long2 - long1) * (Math.PI/180);
            const a = 
                Math.sin(dLat/2)* Math.sin(dLat/2)+
                Math.cos(lat1*(Math.PI/180))* Math.cos(lat2*(Math.PI/180)) *
                Math.sin(dLong/2) * Math.sin(dLong/2);
            const c = 2* Math.atan2(Math.sqrt(a),Math.sqrt(1- a));
            return R * c;
        
    }
}

export default LojaService;
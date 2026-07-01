export type Veiculo = {
    id: number
    vehicle: string
    volumetotal: number
    connected: number
    softwareUpdates: number
    vinCode: string
    img: string
}

export type vin = {
    id: number
    odometro: number
    nivelCombustivel: number
    status: string 
    lat: number
    long: number
}
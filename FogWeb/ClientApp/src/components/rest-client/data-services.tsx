import activeCards from './mock-data/data'; 

class DataServicesDataProvider
{
    getActiveCards() { 
        return activeCards;
    } 
}

export const dataServices = new DataServicesDataProvider();
export const filterData =  (datas, query)  => {
    const {industry, country, continent, is_seeking_funding, has_mvp} = query;


    let data = datas;

    if(industry) {
        data = data.filter( items => items.industry.toLowerCase() === industry.toLowerCase());
    }

    if(country) {
        data = data.filter( items => items.country.toLowerCase() === country.toLowerCase())
    }

    if(continent) {
        data = data.filter( items => items.continent.toLowerCase() === continent.toLowerCase())
    }

    if(is_seeking_funding) {
        data = data.filter( items => items.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase()))
    }

    if(has_mvp) {

        
        data = data.filter( items => 
            items.has_mvp === JSON.parse(has_mvp.toLowerCase())
        )
    }

    return data;
}
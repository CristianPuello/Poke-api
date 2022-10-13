export interface pokemon {
    result:result[];
}

export interface result {
    id:        number;
    name:      string;
    abilities: string[];
    types:     string[];
    img:       string;
    height:    number;
    weight:    number;
}

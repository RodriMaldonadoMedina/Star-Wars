const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			naves: [],
			favoritos: []
		},
		actions: {
			getPersonajes: () => {			
				fetch("https://swapi.dev/api/people")
					.then(resp => resp.json())
					.then(data => {setStore({personajes : data.results})})
					.catch(error => console.log(error));
					
			},

			getPlanetas: () => {			
				fetch("https://swapi.dev/api/planets")
					.then(resp => resp.json())
					.then(data => setStore({planetas: data.results}))
					.catch(error => console.log(error));
					
			},
			
			getNaves: () => {			
				fetch("https://swapi.dev/api/starships")
					.then(resp => resp.json())
					.then(data => setStore({naves: data.results}))
					.catch(error => console.log(error));
					
			},
			
			setFavoritos: (item,tipo,id) => {
				let store = getStore();
				setStore({favoritos: [...store.favoritos,{item: item, tipo: tipo, id: id}]})
			},

			//utilizo name porque es la unica propiedad que esta en todos lados
			borrarFavoritos: (name) => {
				let store = getStore();
				let favActualizada = store.favoritos.filter(element=>element.item.name != name);
				setStore({favoritos: favActualizada})				
			}
		}
	}
};

export default getState;

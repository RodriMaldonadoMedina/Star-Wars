const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			naves: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			/*exampleFunction: () => {
				getActions().changeColor(0, "green");
			},*/

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
		}
	}
};


export default getState;

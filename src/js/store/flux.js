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
				fetch("https://www.swapi.tech/api/people/", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					},
				})
					.then(resp => resp.json())
					.then(data => {setStore({personajes: data.results})})
					.catch(error => console.log(error));
					
			},

			getPlanetas: () => {			
				fetch("https://www.swapi.tech/api/planets/", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					},
				})
					.then(resp => resp.json())
					.then(data => setStore({planetas: data.results}))
					
					.catch(error => console.log(error));
					
			},
			
			getNaves: () => {			
				fetch("https://www.swapi.tech/api/starships", {
					method: "GET",
					headers: {
					"Content-Type": "application/json",
					},
				})
					.then(resp => resp.json())
					.then(data => setStore({naves: data.results}))
					
					.catch(error => console.log(error));
					
			},
			/*
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });*/
			}
		}
	};


export default getState;

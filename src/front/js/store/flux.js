const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			isLogin: false,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			singup: (email, password) => {
        		const response = fetch('https://curly-succotash-5jprxw4g7qr377pr-3001.app.github.dev/api/signup',{
            	method: 'POST',
            	headers: {'Content-Type': 'application/json'},
            	body: JSON.stringify({email, password})
        		})
        		if (response.ok){
            	console.log('user created')}
			},
			login:(email, password)=>{
				const bodyRequest= {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ email, password })
				}
				fetch('https://curly-succotash-5jprxw4g7qr377pr-3001.app.github.dev/api/login',bodyRequest)
				.then(response =>response.json())
				.then(data=>{
					sessionStorage.setItem("token", data.access_token)
					console.log(data.access_token)
				})
				setStore({isLogin:true})
			},
			logout: () => {
				sessionStorage.removeItem("token")
				setStore({isLogin:false})
			},
			setLogin:(status)=>{
				setStore({isLogin: status})
			},


			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
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
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

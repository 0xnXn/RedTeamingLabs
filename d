[1mdiff --cc src/components/Card/machine.js[m
[1mindex 577ca94,2553534..0000000[m
[1m--- a/src/components/Card/machine.js[m
[1m+++ b/src/components/Card/machine.js[m
[36m@@@ -113,13 -100,118 +109,125 @@@[m [mconst Machine = () => [m
      }[m
  [m
      const Decr = (val) => {[m
[32m +        setnumberOFOS({ ...numberOFOS, [val]: numberOFOS[val] - 1 })[m
[32m +[m
[32m +    }[m
[32m +    const onHandleInvite = (event) => {[m
[32m +        const { name, value } = event.target[m
[32m +        setTeamMateName({ ...teamMate, [name]: value })[m
[32m +[m
[32m+ [m
[32m+     }[m
[32m+ [m
[32m+     const initializeMachine = () => {[m
[32m+         fetch(`${server}/users/initialize`,[m
[32m+             {[m
[32m+                 method: "POST",[m
[32m+                 mode: "cors",[m
[32m+                 credentials: "include",[m
[32m+                 headers: {[m
[32m+                     "Content-Type": "application/json; charset=utf-8",[m
[32m+                     'Access-Control-Allow-Origin': '*'[m
[32m+                 },[m
[32m+                 body: JSON.stringify({[m
[32m+                     id: 1,[m
[32m+                 })[m
[32m+             })[m
[32m+             .then(response => response.json())[m
[32m+             .then(data => {[m
[32m+                 console.log(data);[m
[32m+                 this.setState({[m
[32m+                     infraStatus: data.state[m
[32m+                 })[m
[32m+             })[m
[32m+     }[m
[32m+     const startMachine = () => {[m
[32m+         fetch(`${server}/users/start`,[m
[32m+             {[m
[32m+                 method: "GET",[m
[32m+                 mode: "cors",[m
[32m+                 credentials: "include",[m
[32m+                 headers: {[m
[32m+                     "Content-Type": "application/json; charset=utf-8",[m
[32m+                     'Access-Control-Allow-Origin': '*'[m
[32m+                 }[m
[32m+             })[m
[32m+             .then(response => response.json())[m
[32m+             .then(data => {[m
[32m+                 console.log(data);[m
[32m+                 this.setState({[m
[32m+                     status: data.state,[m
[32m+                 })[m
[32m+             })[m
[32m+     }[m
[32m+     const stopMachine = () => {[m
[32m+         fetch(`${server}/users/stop`,[m
[32m+             {[m
[32m+                 method: "GET",[m
[32m+                 mode: "cors",[m
[32m+                 credentials: "include",[m
[32m+                 headers: {[m
[32m+                     "Content-Type": "application/json; charset=utf-8",[m
[32m+                     'Access-Control-Allow-Origin': '*'[m
[32m+                 }[m
[32m+             })[m
[32m+             .then(response => response.json())[m
[32m+             .then(data => {[m
[32m+                 console.log(data);[m
[32m+                 this.setState({[m
[32m+                     status: data.state,[m
[32m+                 })[m
[32m+             })[m
[32m+     }[m
[32m+     const destroyMachine = () => {[m
[32m+         fetch(`${server}/users/destroy`,[m
[32m+             {[m
[32m+                 method: "POST",[m
[32m+                 mode: "cors",[m
[32m+                 credentials: "include",[m
[32m+                 headers: {[m
[32m+                     "Content-Type": "application/json; charset=utf-8",[m
[32m+                     'Access-Control-Allow-Origin': '*'[m
[32m+                 },[m
[32m+                 body: JSON.stringify({[m
[32m+                     id: 1,[m
[32m+                 })[m
[32m+             })[m
[32m+             .then(response => response.json())[m
[32m+             .then(data => {[m
[32m+                 console.log(data);[m
[32m+                 this.setState({[m
[32m+                     infraStatus: data.state[m
[32m+                 })[m
[32m+             })[m
[32m+     }[m
[32m+     const statusMachine = () => {[m
[32m+         fetch(`${server}/users/status`,[m
[32m+             {[m
[32m+                 method: "GET",[m
[32m+                 mode: "cors",[m
[32m+                 credentials: "include",[m
[32m+                 headers: {[m
[32m+                     "Content-Type": "application/json; charset=utf-8",[m
[32m+                     'Access-Control-Allow-Origin': '*'[m
[32m+                 }[m
[32m+             })[m
[32m+             .then(response => response.json())[m
[32m+             .then(data => {[m
[32m+                 console.log(data);[m
[32m+                 this.setState({[m
[32m+                     status: data.state,[m
[32m+                 })[m
[32m+             })[m
[32m+     }[m
[32m+     const getVPN = () => {[m
[32m+         const vpnFile = `${server}/users/vpn`;[m
[32m+         axios.get(vpnFile).then([m
[32m+             function (resp) {[m
[32m+                 console.log(resp)[m
[32m+                 download(resp.data, 'connect.ovpn');[m
[32m+             }[m
[32m+         );[m
      }[m
  [m
      useEffect(() => {[m

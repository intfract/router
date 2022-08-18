class Router {
  constructor(routes) {
    this.routes = routes
    this.handleLocation = async () => {
      const path = window.location.pathname
      const route = this.routes[path] || this.routes[404]
      const html = await fetch(route).then((data) => data.text())
      console.log(html)
      document.getElementById("app").innerHTML = html
    }
    this.route = (event) => {
      event = event || window.event
      event.preventDefault()
      window.history.pushState({}, "", event.target.href)
      this.handleLocation()
    }
    window.onpopstate = this.handleLocation
    window.route = this.route
    this.handleLocation()
  }
}

export {
  Router
}
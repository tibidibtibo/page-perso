<template>
    <div class="jumbotron">
        <h2>Bienvenue</h2>
        <p>Pour en savoir plus à propos de Thibault ou Marie de Boissieu, sélectionner l'un des deux liens ci-dessous.</p>
        <div class="row home-tiles">
            <div class="col-md-6 home-tile-marie">
                <p class="app-component-header-description">Marie</p>
                <a class="app-component-header-link" routerLink="/marie" routerLinkActive="active">
                    <p class="app-component-header-text">Marie <span class="badge">Forever Living Products <br/>/ Les Créations de Marie</span></p>
                    <img src="logos/marie.svg" />
                </a>
            </div>
            <div class="col-md-6 home-tile-thibault">
                <p class="app-component-header-description">Thibault</p>
                <a class="app-component-header-link" routerLink="/thibault" routerLinkActive="active">
                    <p class="app-component-header-text">Thibault <span class="badge">Développeur Full-Stack</span></p>
                    <img src="logos/computer.svg" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'HelloWorld',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    }
    }
</script>

<style lang="sass">
  /* write sass here */
</style>

<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <router-link to="/">
        <strong CRM Seguimientos></strong>
      </router-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/registro-user" class="button is-success"
              ><strong>Registro de cuenta</strong></router-link
            >
            <router-link to="/ingreso-user" class="button is-light"
              ><strong>Ingreso a la cuenta</strong></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

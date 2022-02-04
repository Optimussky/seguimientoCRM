<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="card">
        <p class="title"><strong>CRM Systems</strong></p>
        <p class="subtitle">Seguimientos <strong>Turnados</strong> DGRH</p>
        <br />
      </div>

      <aside class="menu m-2">
        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li>
            <router-link to="/dashboard"
              ><strong>DasboardV2</strong></router-link
            >
          </li>
          <li>
            <router-link to="/ingreso-user">CustomersV2</router-link>
          </li>
        </ul>
        <p class="menu-label">Administration</p>
        <ul class="menu-list">
          <li><router-link to="/ingreso-user">Team Settings</router-link></li>
          <li>
            <router-link to="/ingreso-user" class="is-active"
              >Manage Your TeamV2</router-link
            >

            <ul>
              <li><router-link to="/ingreso-user">Members</router-link></li>
              <li><router-link to="/ingreso-user">Plugins</router-link></li>
              <li>
                <router-link to="/ingreso-user">Add Member</router-link>
              </li>
            </ul>
          </li>
          <li><router-link to="/ingreso-user">Invitations</router-link></li>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li>
            <router-link to="/ingreso-user">Authentication</router-link>
          </li>
        </ul>
        <p class="menu-label">Transactions</p>
        <ul class="menu-list">
          <li><router-link to="/ingreso-user">Payments</router-link></li>
          <li><router-link to="/ingreso-user">Transfers</router-link></li>
          <li><router-link to="/ingreso-user">Balanace</router-link></li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script>
export default {
  name: "Menu",
};
</script>

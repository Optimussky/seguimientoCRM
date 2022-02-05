<template>
  <!-- <div class="dashboard is-full-height hero is-success"> -->
  <div class="dashboard hero is-success">
    <!-- left panel -->

    <div class="dashboard-panel-content">
      <aside class="menu has-text-white">
        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li><a>Dashboard</a></li>
          <li><a>Customers</a></li>
        </ul>
        <p class="menu-label">Administration</p>
        <ul class="menu-list">
          <li><a>Team Settings</a></li>
          <li>
            <a class="is-active">Manage Your Team</a>
            <ul>
              <li><a>Members</a></li>
              <li><a>Plugins</a></li>
              <li><a>Add a member</a></li>
            </ul>
          </li>
          <li><a>Invitations</a></li>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li><a>Authentication</a></li>
        </ul>
        <p class="menu-label">Transactions</p>
        <ul class="menu-list">
          <li><a>Payments</a></li>
          <li><a>Transfers</a></li>
          <li><a>Balance</a></li>
        </ul>
      </aside>
    </div>

    <!-- main section -->
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

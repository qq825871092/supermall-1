<template>
  <div>
    <nav-bar class="pro-nav">
      <div slot="center">我的档案</div>
    </nav-bar>
    <login></login>
    <money-list></money-list>

    <profile-list1></profile-list1>

    <profile-list2></profile-list2>
  </div>

</template>

<script>
    import NavBar from "components/common/navBar/navBar";

    import Login from "./childProfile/login";
    import MoneyList from "./childProfile/moneyList";
    import ProfileList1 from "./childProfile/profileList1";
    import ProfileList2 from "./childProfile/profileList2";
    export default {
        name: "Profile",
      components: {
          ProfileList2,
        ProfileList1,
        MoneyList, Login,
        NavBar}
    }
</script>

<style scoped>
  .pro-nav{
    background-color: #ff8198;
    color: white;

  }
</style>

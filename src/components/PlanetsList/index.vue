<template>
  <div class="PlanetsList">
    <div v-for="items in info" class="name" v-bind:key="items.id" >
      <span>name: {{ items.name }} </span><br>
      <span>rotation period: {{ items.rotation_period }} </span><br>
      <span>climate: {{ items.climate }} </span><br>
      <span>gravity: {{ items.gravity }} </span><br>
      <span>created: {{ items.created }} </span><br>
      <span>url: {{ items.url }} </span><br><br>
    </div>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />

<template>
  <div class="PlanetsList">

    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
    <div v-if="loading">Loading...</div>

    <h1 class="title">Planets</h1><input type="text" v-model="search" placeholder="search planets" />
    <div v-for="items in info" class="name" v-bind:key="items.id" >
      <div class="name-element-title"> {{ items.name }} </div><br>
      <div class="name-element">rotation period: {{ items.rotation_period }} </div><br>
      <div class="name-element">climate: {{ items.climate }} </div><br>
      <div class="name-element">gravity: {{ items.gravity }} </div><br>
      <div class="name-element">created: {{ items.created }} </div><br>
      <div class="name-element">url: {{ items.url }} </div><br>
    </div>
    </section>

  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />

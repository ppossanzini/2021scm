<template>
  <div class="hello">
    <div class="colsx">
      <h1>{{ msg }}</h1>
      <input v-model="userInput" />
      {{ userInput }}
    </div>

    <table>
      <thead>
        <tr>
          <th>data</th>
          <th>temp C°</th>
          <th>temp F°</th>
          <th>summary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, idx) in results" :key="'pp' + idx">
          <td>{{ formatDate(r.date) }}</td>
          <td>{{ r.temperatureC }}</td>
          <td>{{ r.temperatureF }}</td>
          <td>{{ r.summary }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" src="./HelloWorld.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url(./HelloWorld.less);
</style>

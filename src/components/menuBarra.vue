<template>
  <div>
    <div class="tab">
      <button class="tablinks" onclick="openCity(event, 'London')">Losetas</button>
      <button class="tablinks" onclick="openCity(event, 'Paris')">Mayolicas</button>
      <button class="tablinks" onclick="openCity(event, 'Tokyo')">Pintura</button>
    </div>

    <div id="London" class="tabcontent">
      <img src="../assets/losetas/Black.png" alt="losetas black" width="50" height="60">
      <img src="../assets/losetas/Capuccino Granite.png" alt="losetas black" width="50" height="60">
      <img src="../assets/losetas/Earthstone.png" alt="losetas black" width="50" height="60">
      <img src="../assets/losetas/Jupiter Granite.png" alt="losetas black" width="50" height="60">
      <img src="../assets/losetas/White.png" alt="losetas black" width="50" height="60">
      <img src="../assets/losetas/Wood.png" alt="losetas black" width="50" height="60">
    </div>

    <div id="Paris" class="tabcontent">
      <h3>Paris</h3>
      <p>Paris is the capital of France.</p>
    </div>

    <div id="Tokyo" class="tabcontent">
      <h3>Tokyo</h3>
      <p>Tokyo is the capital of Japan.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'menubar'
}
</script>

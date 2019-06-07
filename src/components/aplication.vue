<template>
  <div class="container" onload="draw();">
    <menuSidebar></menuSidebar>
    <div class="jumbotron text-center">
      <div class="d-flex justify-content-center h-100">
        <!--  <h1>empesar a poner los componentes backend</h1> -->
        <canvas id="tutorial" width="150" height="150" style="border: 1px solid black;"></canvas>
      </div>
    </div>
    <footer>
      <div class="row">
        <div class="col-md-6">
          <p>Copyright &copy; 2019 Tutorial Republic</p>
        </div>
        <div class="col-md-6 text-md-right">
          <a href="#" class="text-dark">Terms of Use</a>
          <span class="text-muted mx-2">|</span>
          <a href="#" class="text-dark">Privacy Policy</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import menuSidebar from './menuBarra'
export default {
  name: 'cabeza',
  components: {
    menuSidebar
  }
}
</script>

<script setup>
const estrelasChefe = [
{ numeroDeEstrelas: 1,
  },{ numeroDeEstrelas: 1,
  },{ numeroDeEstrelas: 1,
  },{ numeroDeEstrelas: 1,
  },

]
</script>

<template>
    <div class="Card">
        <div class="img"></div>
        <div class="infos">
            <span
          v-for="estrela in estrelasChefe"
          :key="estrela.numeroDeEstrelas"
        >
       
            <font-awesome-icon icon="star" style="color: yellow;"/>

        </span>
        </div>
    </div>
</template>

<style scoped>
.img{
    width: 15.10vw;
    height: 15.10vw;
    border-radius: 10px;
background: rgba(238, 238, 238, 0.52);
box-shadow: 4px 4px 0px 0px rgba(190, 186, 186, 0.25);
}

</style>

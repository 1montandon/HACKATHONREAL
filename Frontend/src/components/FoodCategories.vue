<script setup>
const TiposComidas = [
  { id: 1, tipo: 'doce', icon:'https://s3-alpha-sig.figma.com/img/bef2/21f0/f516f8312972ca8d41007a6e99e7c153?Expires=1693785600&Signature=T6tRtxYig9pjTlVVu2NAOsPRzuKGVQJA2Cau~e0B~AbH2J8iZdiEOzLd6X461PHSMokcSKZu6dMXWBr6LpysMdkNXqIaB2Q8t3czA5pHpLNOTL3gnFytYjk-Ac2rPRlbN3Rvse8~N79AvlUTmZd6KhyhPuLxmT5HPfwQ6lvVPcgTpK0C2fArIkpQPRI0i6CderMOCnnK1mpnZ9E2ruagwId-igdUoDDg3wAL0KGVHC2yV-RppFYRNsp~1fwPnFeJA5nZ41MV8CTfon26D26j~ivCR3IKXXGUrRGCloCxTbuy5nSE3R3xcmiyQ9xaPgeWCQdQ~2VU1Fe9~vROhu2sqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 1, tipo: 'pasta', icon:'https://s3-alpha-sig.figma.com/img/4513/5cd2/d4b3d6e64c9137dcbbf06210a35b7ea7?Expires=1693785600&Signature=TdAE-YZjnuYqIHVJhe-wHXPUrHaR0KBcMMbUaolagrLvdgKcIY8QpYQ8TTAupzxqXvFOplMffRwqnVFJJjFMU1b3Www8J00TwX4z6H2uwusNJ3PXHsTZy95ahCR4yns2fh7cX0xIXhlZZ33Jb7Gkb6kN-9JaJzufdmWZKrey5PoiRmGFqQtZpm4-9WXwmpnzbC1UnRlvH0wOTJw-I43-n-Dkfhycd1k0Q8rir63roFmctVi5MAN1xaNAcXgPqrMV3ZYKuta0M9Ovb7AM2d1LLxzZDP6bFRgsDq766pymUguTRTH8ZKDfeHoPh620zU4pGCkRNu8z1DLtaYLcNa4Brg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 1, tipo: 'hot dog', icon:'https://s3-alpha-sig.figma.com/img/7d7c/ce0b/3dadfdfdb3a28deab121a7a8585580bb?Expires=1693785600&Signature=mV3Xr~IAKQNcPcGFL9ZVcNpGzeDCy9yEz4qinCrTsNexFsMOq7Hu6VTuKTQliJhIxIXEi0yo7An5Tz9C~oDAD76-OVgqR25Y46b4fkJxRbjpcwwJzWqFqOWNGGlGlmOVPYhqQfHGTu4hL7QBGJ6F3ptbRFIyPZee7FAv0XBFDZxttlqtTR6pgLJt0nZzZCgyL9PNowxoTtNSjq5WVRadUC7on5leHR~hWMcFeZ2kyRO3bOzf7PlC05Xqc0pCEau1f6SYpy9hYHOazRopeYOl39iJFVDwYiJIuN4g3vd~WmMejD4Ppc7hgq-EhxlkoIngR3uhyivlsClGV7oa4A7NlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 1, tipo: 'doce', icon:'https://s3-alpha-sig.figma.com/img/bef2/21f0/f516f8312972ca8d41007a6e99e7c153?Expires=1693785600&Signature=T6tRtxYig9pjTlVVu2NAOsPRzuKGVQJA2Cau~e0B~AbH2J8iZdiEOzLd6X461PHSMokcSKZu6dMXWBr6LpysMdkNXqIaB2Q8t3czA5pHpLNOTL3gnFytYjk-Ac2rPRlbN3Rvse8~N79AvlUTmZd6KhyhPuLxmT5HPfwQ6lvVPcgTpK0C2fArIkpQPRI0i6CderMOCnnK1mpnZ9E2ruagwId-igdUoDDg3wAL0KGVHC2yV-RppFYRNsp~1fwPnFeJA5nZ41MV8CTfon26D26j~ivCR3IKXXGUrRGCloCxTbuy5nSE3R3xcmiyQ9xaPgeWCQdQ~2VU1Fe9~vROhu2sqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 1, tipo: 'doce', icon:'https://s3-alpha-sig.figma.com/img/bef2/21f0/f516f8312972ca8d41007a6e99e7c153?Expires=1693785600&Signature=T6tRtxYig9pjTlVVu2NAOsPRzuKGVQJA2Cau~e0B~AbH2J8iZdiEOzLd6X461PHSMokcSKZu6dMXWBr6LpysMdkNXqIaB2Q8t3czA5pHpLNOTL3gnFytYjk-Ac2rPRlbN3Rvse8~N79AvlUTmZd6KhyhPuLxmT5HPfwQ6lvVPcgTpK0C2fArIkpQPRI0i6CderMOCnnK1mpnZ9E2ruagwId-igdUoDDg3wAL0KGVHC2yV-RppFYRNsp~1fwPnFeJA5nZ41MV8CTfon26D26j~ivCR3IKXXGUrRGCloCxTbuy5nSE3R3xcmiyQ9xaPgeWCQdQ~2VU1Fe9~vROhu2sqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 1, tipo: 'doce', icon:'https://s3-alpha-sig.figma.com/img/bef2/21f0/f516f8312972ca8d41007a6e99e7c153?Expires=1693785600&Signature=T6tRtxYig9pjTlVVu2NAOsPRzuKGVQJA2Cau~e0B~AbH2J8iZdiEOzLd6X461PHSMokcSKZu6dMXWBr6LpysMdkNXqIaB2Q8t3czA5pHpLNOTL3gnFytYjk-Ac2rPRlbN3Rvse8~N79AvlUTmZd6KhyhPuLxmT5HPfwQ6lvVPcgTpK0C2fArIkpQPRI0i6CderMOCnnK1mpnZ9E2ruagwId-igdUoDDg3wAL0KGVHC2yV-RppFYRNsp~1fwPnFeJA5nZ41MV8CTfon26D26j~ivCR3IKXXGUrRGCloCxTbuy5nSE3R3xcmiyQ9xaPgeWCQdQ~2VU1Fe9~vROhu2sqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 1, tipo: 'doce', icon:'https://s3-alpha-sig.figma.com/img/bef2/21f0/f516f8312972ca8d41007a6e99e7c153?Expires=1693785600&Signature=T6tRtxYig9pjTlVVu2NAOsPRzuKGVQJA2Cau~e0B~AbH2J8iZdiEOzLd6X461PHSMokcSKZu6dMXWBr6LpysMdkNXqIaB2Q8t3czA5pHpLNOTL3gnFytYjk-Ac2rPRlbN3Rvse8~N79AvlUTmZd6KhyhPuLxmT5HPfwQ6lvVPcgTpK0C2fArIkpQPRI0i6CderMOCnnK1mpnZ9E2ruagwId-igdUoDDg3wAL0KGVHC2yV-RppFYRNsp~1fwPnFeJA5nZ41MV8CTfon26D26j~ivCR3IKXXGUrRGCloCxTbuy5nSE3R3xcmiyQ9xaPgeWCQdQ~2VU1Fe9~vROhu2sqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 1, tipo: 'doce', icon:'https://s3-alpha-sig.figma.com/img/bef2/21f0/f516f8312972ca8d41007a6e99e7c153?Expires=1693785600&Signature=T6tRtxYig9pjTlVVu2NAOsPRzuKGVQJA2Cau~e0B~AbH2J8iZdiEOzLd6X461PHSMokcSKZu6dMXWBr6LpysMdkNXqIaB2Q8t3czA5pHpLNOTL3gnFytYjk-Ac2rPRlbN3Rvse8~N79AvlUTmZd6KhyhPuLxmT5HPfwQ6lvVPcgTpK0C2fArIkpQPRI0i6CderMOCnnK1mpnZ9E2ruagwId-igdUoDDg3wAL0KGVHC2yV-RppFYRNsp~1fwPnFeJA5nZ41MV8CTfon26D26j~ivCR3IKXXGUrRGCloCxTbuy5nSE3R3xcmiyQ9xaPgeWCQdQ~2VU1Fe9~vROhu2sqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
  { id: 1, tipo: 'doce', icon:'https://s3-alpha-sig.figma.com/img/bef2/21f0/f516f8312972ca8d41007a6e99e7c153?Expires=1693785600&Signature=T6tRtxYig9pjTlVVu2NAOsPRzuKGVQJA2Cau~e0B~AbH2J8iZdiEOzLd6X461PHSMokcSKZu6dMXWBr6LpysMdkNXqIaB2Q8t3czA5pHpLNOTL3gnFytYjk-Ac2rPRlbN3Rvse8~N79AvlUTmZd6KhyhPuLxmT5HPfwQ6lvVPcgTpK0C2fArIkpQPRI0i6CderMOCnnK1mpnZ9E2ruagwId-igdUoDDg3wAL0KGVHC2yV-RppFYRNsp~1fwPnFeJA5nZ41MV8CTfon26D26j~ivCR3IKXXGUrRGCloCxTbuy5nSE3R3xcmiyQ9xaPgeWCQdQ~2VU1Fe9~vROhu2sqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},

  

]

</script>
<template>
    <div class="foodCategories" >
        <div class="food" v-for="categoria in TiposComidas" :key="categoria.id">
            <img class="icon" :src="categoria.icon" alt="">
        {{ categoria.tipo }}

    </div> </div>
    
</template>
<style scoped>
.foodCategories{
    margin-top: 40px;
    justify-content: center;
    display: flex;
    font-size: 16px;
    gap: 3.91vw;

}
.food{
    display: flex;
    flex-direction: column;
    align-items: center;
width: 70px;
text-align: center;

}
.icon{
    width: 40px;
    height: 40px;
}

</style>

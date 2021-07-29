<template>
   <q-btn 
    class="btn"
    :class="classe"  
    :icon="icone" 
    text-color="#081F60"
    :label="texto" />
    
</template>

<script>
export default {
    props:['classe', 'icone', 'texto']
}
</script>

<style>
    .btn{
        width: 300px;
        height: 80px;
        background-color:#E5E5E5;
        border-radius: 18px;
        border-style: none;
        font-size: 18px;
        color: #081F60;
    }
</style>
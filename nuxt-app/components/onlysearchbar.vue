<template>
    <div class="w-full relative z-50">
      <div
        class="flex flex-row items-center bg-white relative border-2 border-black overflow-hidden rounded-md justify-between h-16">
        
        <div class="flex flex-row items-start items-center relative border-r-2 border-black">
          <span class="px-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="" width="1.5em" height="1.5em" viewBox="0 0 512 512"><title>Search</title><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>
          </span>
          <input
            type="text"
            class="text-xl pl-1 w-3/4 py-3 focus:outline-none"
            placeholder="Dépression, anxiété..."
            v-model="search">
          <a v-if="search != ''" 
             @click="search = ''"
             class="absolute right-3 text-2xl cursor-pointer">
                x</a>
        </div>

        <div class="flex flex-row items-start items-center relative">
          <span class="px-3">
              <svg class="fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path d="M448 64L64 240.14h200a8 8 0 018 8V448z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
          </span>

          <input
            type="text"
            ref="streetRef"
            class="w-2/3 text-xl px-2 focus:outline-none"
            placeholder="Paris, Lyon..."
            v-model="city"
            >
            <div class="hidden lg:flex">
              <label @click="findMyCity"><svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-400 stroke-gray-400" width="2em" height="2em" viewBox="0 0 512 512"><title>Compass</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke-miterlimit="10" stroke-width="32"/><path d="M350.67 150.93l-117.2 46.88a64 64 0 00-35.66 35.66l-46.88 117.2a8 8 0 0010.4 10.4l117.2-46.88a64 64 0 0035.66-35.66l46.88-117.2a8 8 0 00-10.4-10.4zM256 280a24 24 0 1124-24 24 24 0 01-24 24z"/></svg></label>
              <p class="pl-2 text-sm text-gray-300 leading-4">ma position</p>
            </div>
         <!-- <p class="text-sm leading-4 text-gray-500 text-left pr-2 whitespace-nowrap">{{ distance }} km</p>  -->
            <a v-if="city != ''" 
               @click="city = ''"
               class="absolute right-3 text-2xl cursor-pointer">
                  x</a>
<!--
           <div class="pb-2">
            <input id="default-range"  
                  type="range" class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer" v-model="distance" min="0" max="50" step="10">
          </div> -->

        </div>
          <div class="flex bg-yellow-200 h-full border-l-2 border-black items-center hover:bg-yellow-300">
       <!--  @click="$emit('setevent', search, city)" -->
         
            <button
                :disabled="!search.length && !city.length"
                class="font-medium text-xl px-4 flex flex-row gap-x-2 items-center justify-center disabled:opacity-50"
                @click="$emit('setevent')">
               <svg xmlns="http://www.w3.org/2000/svg" class="" width="2em" height="2em" viewBox="0 0 512 512"><title>Arrow Forward Circle</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M262.62 336L342 256l-79.38-80M330.97 256H170"/><path d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg><span class="hidden md:flex">Rechercher</span>
            </button>
       
        </div>
        </div>

      <div v-if="advancedsearch"
      class="absolute right-3 text-sm pt-2 link link-hover">Recherche avancée</div>

      <!-- résultat de la recherche sur les conditions --> 
      <div
        v-if="newconditions.length > 0"
        class="w-full absolute z-50 bg-white border-2 border-gray-300 mt-1 max-height-48 overflow-hidden overflow-y-scroll rounded-md shadow-md"
        >
        <div class="px-3 py-2 cursor-pointer hover:bg-gray-100"
            v-for="condition in newconditions">
            <div class="flex flex-row justify-between px-5">
                <span @click="selectResult(condition)" @mousedown.prevent>
                  {{ condition.groupname }}
                </span>
                <span class="badge badge-outline text-medium">
                {{ condition.count }} {{ condition.count > 1 ? 'études' : 'étude' }}</span>
            </div>
        </div>
      </div>
    </div>
</template>


<script setup>

const props = defineProps(['advancedsearch'])
const { advancedsearch } = toRefs(props)

const supabase = useSupabaseClient()

const search = useSearch()
const searchid = useSearchID()
const city = useCity()


const url = ref(`https://api-cline-research.onrender.com/conditiongroups`)

const { pending, data: conditions, error, refresh } =  await useFetch(url.value)


let newconditions = ref([])
/* let search = ref('') */



let conditionselected = ref('')

watch(search, () => {
      newconditions.value = []
      if (search.value != conditionselected.value) {
        conditions.value.forEach(element => {
          if(element.groupname
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .includes(search.value
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, ''))
            && search.value != "") {
            newconditions.value.push(element)
          }
      })
      } 
})
 
function selectResult(condition) {
      search.value = condition.groupname
      searchid.value = condition.groupid
      conditionselected.value = condition.groupname
      newconditions.value = []
    }

const streetRef = ref('');

/*
await useScript(
    "https://maps.googleapis.com/maps/api/js?key=API_KEY&libraries=places"
  );

new google.maps.places.Autocomplete(streetRef.value); */

const findMyCity = () => {
    const success = (position) => {
        /* console.log(position) */
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        fetch(geoApiUrl)
            .then(res => res.json())
            .then(data => {
                /* console.log(data) */
                city.value = data.city
            })
    }
    const error = () => {
        city = 'Impossible de récupérer votre emplacement'
    }
    navigator.geolocation.getCurrentPosition(success, error)
}

</script>

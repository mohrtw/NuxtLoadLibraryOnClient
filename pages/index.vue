<template>
    <div>
        <h1>Hello, Nuxt!</h1>
        <h2>Imported data: {{ data.name }} </h2>
        <h2>Store data: {{odata.title}}</h2>
        <h2>Fetch data: {{fdata.name}} </h2>
        <objectLoader :obj='data'/>
    </div>
</template>

<script>
import SO from "../static/someObjects.js";
import objectLoader from "../components/util/objectLoader.vue";

export default {
    components: {
        objectLoader
    },

    data()  {
        return {
            fdata: {name: 'empty'},
            fodata: {title: 'empty'}
        }
    },

    async asyncData (context) {
        console.log("asyncData");
        //console.log(context)
        //debugger; // eslint-disable-line
        var obj = {name: 'empty'};
        var oobj = {title: 'empty'};
        obj = new SO.AnObject({id: 1, name: 'Mohr'});
        //oobj = new context.store.state.OO({id: 2, name: 'Thomas'})
        //console.log(SO.AnObject)
        return { data: obj, odata: oobj };
    },

    fetch(context) {
        console.log("fetch")
        debugger;
        var fobj = {name: 'empty'};
        var foobj = {title: 'empty'};
        fobj = new SO.AnObject({id: 1, name: 'Mohr'});
        //oobj = new context.store.state.OO({id: 2, name: 'Thomas'})
        //console.log(SO.AnObject)
        return { fdata: fobj, fodata: foobj };
    },
    // Lifecycle hooks
    // https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
    beforeCreate () {
        console.log("beforeCreate")
    },
    created () {
        //  data observation, computed properties, methods, watch/event callbacks
        console.log("created")
        //this.geoCoord = this.contentToGeoPoints(this.content)
    },
    beforeMount () {
        console.log("beforeMount")
    },
    mounted () {
        // el is replaced by the newly created vm.$el
        console.log("mounted")
    
        this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        console.log("mounted nextTick")
        })
    },
    beforeUpdate () {
        console.log("beforeUpdate")
    },
    updated () {
        console.log("updated")
    },
    beforeDestroy () {
        console.log("beforeDestroy")
    },
    destroyed () {
        console.log("destroyed")
    }
}
</script>
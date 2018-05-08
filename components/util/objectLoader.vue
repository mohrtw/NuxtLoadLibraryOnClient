<template>

    <div>
        <h1>from objectLoader</h1>
        <h2>Object data: {{objectProcessor(obj)}}</h2>
    </div>
    
</template>

<script>
import SO from '../../static/someObjects';
import OO from '../../static/otherObjects';

//debugger;
export default {
    props:  ['obj'],
    
    methods: {

        objectProcessor: function (obj) {
            /* returns a name or title depending
            on the type of object
            */
            var result = '';
            debugger; // eslint-disable-line
            
            if (obj instanceof SO.AnObject) {
                result = obj.name; 
                console.log(result);
            } else if (obj instanceof OO.AnotherObject) {
                result = obj.title;
            } else {
                result = 'didn\'t work';
            }
            
            return result;
        }
    }
}
</script>

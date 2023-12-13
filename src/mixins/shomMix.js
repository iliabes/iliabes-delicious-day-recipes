


const showMix = {
    
    props:{
        show:{
            type:Boolean,
            default: false
        }
    },
    methods:{
        closeModal(){
            console.log('update:show')
            this.$emit("update:show", false);
        }
    }
}

export default showMix

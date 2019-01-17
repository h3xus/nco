import RoundButton from './../elements/RoundButton.vue'
import MaterialInput from './../elements/Input.vue'
import MaterialTextarea from './../elements/Textarea.vue'

export default {
    data() {
        return {
            name: "ContactFormComponent",
            message: {
                name: "Text placehiolder",
                phone: "123213",
                email: "email.com",
                message: "Text"
            }        
        }
    },
    props: {            
            classes: {
            type: String
        }
    },
    components: {
        RoundButton,
        MaterialInput,
        MaterialTextarea
    }
}
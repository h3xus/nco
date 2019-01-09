import RoundButton from './../elements/RoundButton.vue'
import MaterialInput from './../elements/Input.vue'
import MaterialTextarea from './../elements/Textarea.vue'

export default {
    data() {
        return {
            message: {
                name: "Text placehiolder",
                phone: "123213",
                email: "email.com",
                message: "Text"
            }        
        }
    },
    components: {
        RoundButton,
        MaterialInput,
        MaterialTextarea
    }
}